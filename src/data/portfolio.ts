export interface PersonalInfo {
    name: string;
    tagline: string;
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
        tagline: "Senior Engineer & Technical Lead",
        email: "chirath.02@gmail.com",
        linkedin: "https://linkedin.com/in/chirathr",
        github: "https://github.com/chirathr",
        website: "https://chirathr.com",
        status: "Open to Opportunities",
    },
    about:
        "I build resilient distributed systems, developer-first APIs, and high-scale platform infrastructure. With 7 years of engineering experience, I've progressed from Junior Engineer to Team Lead—architecting multi-vendor platforms that rapidly process hundreds of thousands of daily operations. I'm deeply passionate about decoupling complex business logic, mentoring engineering teams, and exploring AI-driven workflows to multiply developer productivity.",
    experience: [
        {
            title: "Team Lead",
            company: "Sojern (via Beautifulcode)",
            period: "Jan 2023 — Present",
            bullets: [
                "Owned 6 API gateway services handling hundreds of thousands of calls/day with async processing, priority queuing, and push notifications",
                "Designed reusable integration flows enabling bulk migration of thousands of campaigns and assets with zero downtime",
                "Built an async bulk update pipeline via Pub/Sub powering daily optimization across tens of thousands of active entities",
                "Managed 4 engineers; mentored 3 juniors to Senior-level promotions over 3-4 years",
            ],
            tech: ["Go", "GCP", "Pub/Sub"],
        },
        {
            title: "Senior Engineer",
            company: "Sojern (via Beautifulcode)",
            period: "Jan 2021 — Dec 2022",
            bullets: [
                "Architected a multi-vendor orchestration service from scratch (Go, gRPC, GraphQL, PostgreSQL) — idempotent workflows across 6 platforms, reducing setup time from hours to minutes",
                "Built a configurable Rules Engine — dozens of rules in production — decoupling business rules from application code",
                "Delivered search automation for 2 platforms across 8 languages, plus asset lifecycle management for tens of thousands of entities",
            ],
            tech: ["Go", "gRPC", "GraphQL", "PostgreSQL"],
        },
        {
            title: "Software Engineer",
            company: "Sojern (via Beautifulcode)",
            period: "Dec 2018 — Dec 2020",
            bullets: [
                "Built end-to-end entity management workflows (React, Python/Django) across a 5-service microservices architecture",
                "Led frontend migration from HAML/jQuery to Vue.js",
                "Built internal operations tool with search, filtering, bulk actions, and automated reconciliation",
            ],
            tech: ["React", "Python", "Django", "Vue.js"],
        },
    ],
    skills: [
        { category: "Languages", items: ["Go", "Python", "TypeScript", "SQL"] },
        {
            category: "Frameworks",
            items: [
                "gRPC",
                "REST",
                "GraphQL",
                "Django",
                "React",
                "Vue.js",
            ],
        },
        {
            category: "Cloud & Infra",
            items: [
                "GCP",
                "Kubernetes",
                "Terraform",
                "Redis",
                "Docker",
            ],
        },
        { category: "Databases", items: ["PostgreSQL", "BigQuery", "MySQL"] },
        {
            category: "Domains",
            items: [
                "Distributed Systems",
                "Microservices",
                "Event-Driven Architecture",
                "API Design",
                "Data Pipelines",
            ],
        },
    ],
    projects: [
        {
            title: "AI-Powered Rule Generation (Hackathon 2025)",
            description:
                "AI agent using Google Gemini API that generates configuration rules and Python code from natural language prompts. Context-aware injection of available data fields. Reduced rule creation time from hours to minutes.",
            link: "#",
            image: "/projects/ai_rule_generation.jpg",
            tech: ["Python", "Google Gemini API"],
        },
        {
            title: "AI Workout Planner (WIP)",
            description:
                "Side project built with Claude Code. Takes user details, equipment, and preferences to generate AI-powered personalized workout plans.",
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
            period: "2018 - 2020",
            title: "Junior SDE I",
            details:
                "Frontend migration, campaign dashboard, first microservice work",
        },
        {
            period: "2020 - 2021",
            title: "SDE II",
            details: "Go adoption, built gateway services, vendor integration",
        },
        {
            period: "2021 - 2023",
            title: "Senior Engineer",
            details:
                "Architected platform from scratch, Rules Engine, 6 platform integrations",
        },
        {
            period: "2023 - 2025",
            title: "Team Lead",
            details:
                "4 engineers, 3 mentee promotions, critical migrations, company-wide gateway ownership",
        },
    ],
    blog: [],
};
