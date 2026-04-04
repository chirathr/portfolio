# Portfolio Data — Chirath R

> All content is sanitized for public display. No dollar figures, no exact production counts, no trade secrets.
> Source: master-resume.md (backend) + master-resume-fullstack.md (fullstack), v13
> Last updated: 2026-04-05

---

## Hero

- **Name:** Chirath R
- **Tagline:** Platform Engineer & Technical Lead
- **CTA:** Request Resume (mailto:chirath.02@gmail.com), GitHub, LinkedIn

---

## About Me

I build platform infrastructure: API gateways, multi-vendor integrations, campaign automation, and data pipelines. My most recent system routes hundreds of thousands of API calls/day across 6 advertising platforms with async processing, rate limiting, and distributed tracing.

7 years at Sojern (travel ad-tech), from Junior Engineer to Engineering Lead, mentoring 3 engineers to Senior level. I also build the React/TypeScript frontends for these systems. Focused on decoupling complex business logic and exploring AI-driven workflows to improve developer productivity.

---

## Career Timeline

| Period | Title | Key Milestone |
|--------|-------|---------------|
| 2018 - 2021 | Software Engineer | Frontend migration, Campaign Manager UI, 5-microservice platform |
| 2021 - 2023 | Senior Engineer | Created campaign service from scratch in Go, Rules Engine, Search automation |
| 2023 - 2026 | Engineering Lead | 6 platform integrations, 4 engineers, gateway ownership, cross-team data patterns |

---

## Experience

### Engineering Lead | Sojern (via BeautifulCode LLP) | Apr 2023 - Mar 2026

- Led end-to-end integration of 6 third-party advertising platforms. Mapped each platform's API to the internal data model, architected workflows, resolved cross-team dependencies, and defined technical scope
- Managed 4 engineers. Mentored **3 juniors to Senior-level promotions**
- Owned 6 API gateway services handling **hundreds of thousands of calls/day** with async processing, rate limiting, and event-driven notifications (GCP Pub/Sub). Set up Datadog tracing and on-call alerting for reliability issues
- Evaluated cross-team data access patterns (CDC, replication, federated queries) to make microservice data queryable in BigQuery. Implemented federated queries with read replicas, adopted as the org-wide standard
- Created campaign and ad creative workflows for The Trade Desk and Meta/Facebook, enabling bulk migration of thousands of campaigns and assets that were previously managed manually
- Designed campaign creation frontends in React/TypeScript for Xandr (Microsoft Advertising) and Facebook. Dynamic multi-step forms with Context-based state management, drag-and-drop uploads with client-side thumbnail generation. Pattern reused across 4+ subsequent integrations
- Replaced a failure-prone multi-step workflow with a single GraphQL mutation handling creates and updates across **10+ related tables** in one transaction. Frontend computes minimal changesets by diffing form state
- Shipped a Bulk Campaign Updater coordinating daily automated updates across **tens of thousands of entities** on 6 platform APIs via Cloud Pub/Sub, each with different rate limits, field mappings, and error handling

### Senior Engineer | Sojern (via BeautifulCode LLP) | Apr 2021 - Mar 2023

- Designed and built the campaign management service from scratch in Go (gRPC, GraphQL, PostgreSQL), with idempotent, queue-based workflows. Cut setup time from hours to minutes
- Built ad creative workflows for 3 advertising platforms, managing tens of thousands of ad creatives with daily audit syncs
- Evaluated existing rules engines, wrote a Python-based one so non-engineering users could define campaign rules via text, dropdowns, or code. Dozens of rules in production, fully decoupled from application code
- Implemented role-based access control (RBAC) for the main internal portal using CASL (JS authorization library). 10+ roles, adopted org-wide across all frontend modules
- Automated Search campaigns for Google Ads and Bing Ads end-to-end, later extending to 8 languages for international markets

### Software Engineer | Sojern (via BeautifulCode LLP) | Oct 2018 - Mar 2021

- Developed campaign creation and management workflows (React, Python/Django) across a 5-microservice architecture
- Built the Campaign Manager UI from scratch in React/TypeScript: search, filtering, data tables, bulk update forms, and CSV upload for internal operations
- Led frontend migration from HAML/jQuery to a modern Single Page Application (4 modules)

---

## Skills

| Category | Items |
|----------|-------|
| Languages | Go, Python, JavaScript/TypeScript, SQL |
| Frontend | React, TypeScript, Jest, Cypress, GraphQL (Hasura) |
| Backend | gRPC, REST, Protocol Buffers, GraphQL (Hasura), Django |
| Cloud & Infra | GCP (Cloud Tasks, Pub/Sub, Cloud SQL, BigQuery), AWS (S3, EC2), Kubernetes, Terraform, Kafka, Redis, Docker |
| Databases | PostgreSQL, BigQuery, MySQL |
| CI/CD | Jenkins, Codefresh, Docker |
| Domains | Distributed Systems, Full-Stack Development, Microservices, Event-Driven Architecture, API Design, Data Pipelines |

---

## Projects

### AI Rule Generator (Hackathon 2025)
AI agent using Google Gemini API that generates configuration rules and Python code from natural language prompts. Context-aware injection of available data fields. Reduced rule creation time from hours to minutes.

### AI Workout Planner (WIP)
Side project built with Claude Code. Takes user details, equipment, and preferences to generate personalized workout plans.

---

## Education

- **B.Tech in Computer Science and Engineering** - Amrita School of Engineering, Kerala (2018)
- CGPA: 9.12/10

---

## Contact

- **Email:** chirath.02@gmail.com
- **LinkedIn:** [linkedin.com/in/chirathr](https://linkedin.com/in/chirathr)
- **GitHub:** [github.com/chirathr](https://github.com/chirathr)
- **Website:** [chirathr.com](https://chirathr.com)
- **Status:** Open to Opportunities
