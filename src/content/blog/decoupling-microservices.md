---
title: "Decoupling Microservices: When to use Event-Driven Architectures"
date: "2024-11-20"
readTime: "8 min read"
---

## The Monolith Trap

When starting a new project, the natural inclination is to build a monolith. It's fast, easy to deploy, and debugging is straightforward since everything runs in the same process. However, as teams scale and the domain becomes complex, the monolith often turns into a strictly coupled ball of mud.

In my experience architecting multi-vendor platforms at Sojern, we frequently encountered scenarios where **synchronous API calls between services became our primary bottleneck**.

### Why Synchronous REST Fails at Scale

Consider a standard e-commerce flow:
1. User checks out.
2. Order service calls Inventory service to reserve items.
3. Order service calls Billing service to process payment.
4. Order service calls Notification service to send an email.

```go
// A tightly coupled, synchronous operation
func ProcessOrder(ctx context.Context, order Order) error {
    if err := inventoryClient.Reserve(ctx, order.Items); err != nil {
         return err
    }
    
    if err := billingClient.Charge(ctx, order.Total, order.PaymentMethod); err != nil {
        return err // Now we must rollback inventory!
    }
    
    // If this fails, the user gets charged but doesn't get an email.
    notificationClient.SendEmail(ctx, order.UserEmail)
    return nil
}
```

If the `Notification` service goes down, the entire checkout process might fail, leading to dropped revenue. This strict temporal coupling means your system's availability is the mathematical product of all its dependencies' availability.

## Enter: Event-Driven Architecture (EDA)

By introducing an Event Bus (like Kafka or Google Cloud Pub/Sub), services no longer need to know about each other. 

Instead of the Order service explicitly commanding other services, it simply broadcasts a fact: `"OrderCreated"`.

> "An event is a statement of fact about something that happened in the past. It cannot be altered."

### The Pub/Sub Refactor

Here is what the decoupled approach looks like:

```go
func ProcessOrder(ctx context.Context, order Order) error {
    // 1. Save to local database (Atomic transaction)
    db.Save(ctx, order)
    
    // 2. Publish fact to Message Broker
    event := OrderCreatedEvent{OrderID: order.ID}
    if err := pubsubClient.Publish(ctx, event); err != nil {
        return err
    }
    
    return nil // Instant response to the client
}
```

Now, the `Inventory`, `Billing`, and `Notification` services all independently subscribe to the `OrderCreated` channel. If `Notification` is down, messages simply queue up until it spins back online.

### When NOT to use EDA

While event-driven architectures solve temporal coupling, they introduce immense operational complexity:
*   **Eventual Consistency:** Your UI must be designed to handle states where the order is created but payment hasn't processed yet.
*   **Observability:** Tracing a bug across 5 different services that act asynchronously is a nightmare without robust distributed tracing (like OpenTelemetry).
*   **Message Ordering:** Handling out-of-order events or duplicate events requires idempotent consumers.

**Conclusion:** Use EDA when service independence and high fault tolerance are business-critical. If your entire engineering team fits in a single pizza box, stick to a modular monolith until you hit painful deployment boundaries.
