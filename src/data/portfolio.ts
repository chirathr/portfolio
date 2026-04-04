export interface PersonalInfo {
    name: string;
    tagline: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    website: string;
    status: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    bullets: string[];
    tech: string[];
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
    tech: string[];
}

export interface Education {
    degree: string;
    school: string;
    year: string;
    cgpa: string;
}

export interface CareerTimeline {
    period: string;
    title: string;
    details: string;
}

export interface BlogPostMeta {
    title: string;
    date: string;
    link: string;
    readTime: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    about: string;
    experience: Experience[];
    skills: SkillGroup[];
    projects: Project[];
    education: Education;
    careerTimeline: CareerTimeline[];
    blog: BlogPostMeta[];
}

export const portfolioData: PortfolioData = {
    personalInfo: {
        name: "Chirath R",
        tagline: "Software Engineer",
        subtitle: "Backend engineer who likes building scalable systems and clean frontends, with a side of AI.",
        email: "chirath.02@gmail.com",
        linkedin: "https://linkedin.com/in/chirathr",
        github: "https://github.com/chirathr",
        website: "https://chirathr.com",
        status: "Open to Opportunities",
    },
    about:
        "I'm a backend engineer who's been building distributed systems for 7+ years. I care about clean, scalable code, whether that's a Go service or a React frontend. I've grown from IC to Engineering Lead, and AI is a big part of how I work now. When I'm not coding, I'm probably on a road trip somewhere.",
    experience: [
        {
            title: "Engineering Lead",
            company: "Sojern (via BeautifulCode LLP)",
            period: "Apr 2023 - Mar 2026",
            bullets: [
                "Led integration of 6 advertising platforms: API mapping, workflow architecture, cross-team dependencies, and technical scoping",
                "Managed 4 engineers. Mentored 3 juniors to Senior-level promotions",
                "Owned 6 API gateway services handling hundreds of thousands of calls/day with async processing, rate limiting, and event-driven notifications via Pub/Sub. Set up Datadog tracing and on-call alerting",
                "Shipped a Bulk Campaign Updater coordinating daily updates across 10k+ entities on 6 platform APIs via Pub/Sub, each with different rate limits and error handling",
                "Created campaign and ad creative workflows for The Trade Desk and Meta/Facebook. Bulk-migrated thousands of campaigns that were previously manual",
                "Designed campaign creation frontends in React/TypeScript for Xandr and Facebook. Multi-step forms with drag-and-drop uploads and client-side thumbnail generation, reused across 4+ integrations",
            ],
            tech: ["Go", "GCP", "Pub/Sub", "React", "TypeScript", "GraphQL"],
        },
        {
            title: "Senior Engineer",
            company: "Sojern",
            period: "Apr 2021 - Mar 2023",
            bullets: [
                "Built the campaign management service from scratch in Go (gRPC, GraphQL, PostgreSQL) with idempotent, queue-based workflows. Cut setup time from hours to minutes",
                "Created ad creative workflows for 3 advertising platforms, managing 10k+ ad creatives with daily audit syncs",
                "Wrote a Python-based rules engine so non-engineering users could define campaign rules via text, dropdowns, or code. Dozens of rules in production",
                "Automated Search campaigns for Google Ads and Bing Ads, later extending to 8 languages for international markets",
            ],
            tech: ["Go", "gRPC", "GraphQL", "PostgreSQL", "Python"],
        },
        {
            title: "Software Engineer",
            company: "Sojern",
            period: "Oct 2018 - Mar 2021",
            bullets: [
                "Shipped campaign creation and management workflows across a 5-microservice architecture",
                "Built the Campaign Manager UI in React/TypeScript: search, filtering, data tables, bulk update forms, and CSV upload for internal operations",
                "Led frontend migration from HAML/jQuery to a modern Single Page Application",
            ],
            tech: ["React", "TypeScript", "Python", "Django"],
        },
    ],
    skills: [
        { category: "Languages", items: ["Go", "Python", "JavaScript", "TypeScript", "SQL"] },
        {
            category: "Frameworks & Tools",
            items: ["React", "gRPC", "REST", "GraphQL", "Hasura", "Django", "Protocol Buffers", "Jest"],
        },
        {
            category: "Cloud & Infra",
            items: [
                "GCP",
                "AWS",
                "Kubernetes",
                "Terraform",
                "Kafka",
                "Redis",
                "Docker",
            ],
        },
        { category: "Databases", items: ["PostgreSQL", "BigQuery", "MySQL"] },
        { category: "CI/CD", items: ["Jenkins", "Codefresh", "Docker"] },
        {
            category: "AI Tools",
            items: ["Claude Code", "Cursor"],
        },
        {
            category: "Domains",
            items: [
                "Distributed Systems",
                "Full-Stack Development",
                "Microservices",
                "Event-Driven Architecture",
                "API Design",
                "Data Pipelines",
            ],
        },
    ],
    projects: [
        {
            title: "AI Rule Generator (Hackathon 2025)",
            description:
                "AI agent using Google Gemini API that generates configuration rules and Python code from natural language prompts. Injects available data fields as context so generated rules are valid out of the box.",
            link: "#",
            image: "/projects/ai_rule_generation.jpg",
            tech: ["Python", "Google Gemini API"],
        },
        {
            title: "AI Workout Planner (WIP)",
            description:
                "Side project built with Claude Code. Takes user details, equipment, and preferences to generate personalized workout plans.",
            link: "#",
            image: "/projects/ai_workout_planner.jpg",
            tech: ["TypeScript", "Next.js", "AI Prompts"],
        },
    ],
    education: {
        degree: "B.Tech in Computer Science and Engineering",
        school: "Amrita School of Engineering, Kerala",
        year: "2018",
        cgpa: "9.12/10",
    },
    careerTimeline: [
        {
            period: "2018 - 2021",
            title: "Software Engineer",
            details:
                "Frontend migration, Campaign Manager UI, 5-microservice platform",
        },
        {
            period: "2021 - 2023",
            title: "Senior Engineer",
            details:
                "Created campaign service from scratch in Go, Rules Engine, Search automation",
        },
        {
            period: "2023 - 2026",
            title: "Engineering Lead",
            details:
                "6 platform integrations, 4 engineers, gateway ownership, cross-team data patterns",
        },
    ],
    blog: [],
};
