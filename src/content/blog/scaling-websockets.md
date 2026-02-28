---
title: "Scaling WebSockets to 1 Million Concurrent Connections"
date: "2026-01-20"
readTime: "12 min read"
---

Building real-time features is easy when you have 100 users. It becomes an architectural nightmare when you have 1,000,000 concurrent sockets open simultaneously. This post breaks down how we scaled our real-time messaging layer to handle massive distributed load.

## The C10K Problem is Dead, Long Live the C1M Problem

Historically, handling 10,000 concurrent connections (the C10k problem) was a major milestone. Today, thanks to epoll, kqueue, and asynchronous I/O models in modern kernels, a single commodity server can handle orders of magnitude more. 

However, holding the raw TCP sockets open is only half the battle.

### The True Bottlenecks

When scaling WebSockets to massive concurrency, the actual bottlenecks usually emerge in the application layer:

1. **Memory per connection:** If your server framework allocates 1MB per open socket, 1 million connections requires 1TB of RAM. You must optimize your socket handlers to use kilobytes, not megabytes.
2. **The Fan-out Problem:** When user A sends a message in a 100,000 person chat room, you must serialize and fan out that payload 100,000 times instantly.
3. **State Synchronization:** In a distributed setup, User A might be connected to Server 1, and User B to Server 50. How do they talk?

## Pub/Sub to the Rescue

The standard solution to the state synchronization problem is a robust Publish/Subscribe (Pub/Sub) backplane, commonly Redis or Apache Kafka.

```javascript
// Example Node.js Redis Pub/Sub Backplane
const redis = require('redis');
const subscriber = redis.createClient();
const publisher = redis.createClient();

subscriber.subscribe('chat_room_general');

// When an external server publishes a message, fan it out to local sockets
subscriber.on('message', (channel, message) => {
    localWebSockets.forEach(ws => {
        if (ws.room === channel) {
            ws.send(message);
        }
    });
});
```

By decoupling the persistent socket connection layer from the message distribution layer, you can scale each independently. Your edge servers just hold connections, while your Pub/Sub cluster handles the routing matrix.
