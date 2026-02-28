---
title: "Abstracting the Boilerplate: How I Made AI Build My Portfolio in a Single Afternoon"
date: "2026-03-01"
readTime: "8 min read"
draft: false
---

I'm a full-stack engineer, but I've spent most of my career focused on backend work - APIs, distributed systems, infrastructure. I can write CSS, but I'm not a designer. When it came time to finally update my personal portfolio, I hit the classic developer wall: the code part? Easy. Making it *look* good? Not so much!

Instead of spending my weekend fighting with design decisions or settling for another generic template, I decided to try building it with an AI coding agent. A few hours later, I had a fully working portfolio and blog, deployed and live.

This is what that process actually looked like, rough edges and all.

---

## Starting With Research, Not Code

The biggest hurdle with frontend projects isn't usually the code - it's design indecision. Where do you even start when you don't have a visual eye for it?

Before writing a single line of React, I used the AI agent as a research assistant. I asked it to look at well-known developer portfolios and break down what made them work: the typography choices, color palettes, use of whitespace, and interactive elements.

This turned out to be one of the most valuable steps. Instead of starting from a blank page, I had a clear direction: dark mode, glassmorphism-style cards, smooth animations. Having reference points made every decision after this easier.

**💡 Tip:** Don't jump straight into code. Spend 15-20 minutes having the AI analyze sites you admire. Ask it *why* certain designs work. This builds a visual vocabulary you can actually use.

---

## Giving AI Your Real Context

Once I had a design direction, I locked in the stack - `Next.js` App Router and `Tailwind CSS` - and did something that made a huge difference: I wrote a detailed `portfolio-data.md` file with my actual career history, skills, and project descriptions, then fed it into the agent's context.

This meant every prototype the agent generated used *my* real data instead of placeholder text. It's a small step that saves a lot of back-and-forth later.

**💡 Tip:** Write a detailed doc about yourself before you start generating code. Include your job history, skills, project descriptions - anything you want on the site. The more context you give the AI, the less you'll have to manually replace later.

---

## Getting Options and Making It Yours

Instead of asking for one design, I asked the AI to give me a few different options based on the research. Within about 20 minutes, I had three fully interactive prototypes running locally.

I picked the layout I liked best - a floating-island card design with subtle cursor-tracking effects. The AI built the structure and wrote the interactive hooks, but I still spent time adjusting colors, padding, and spacing to make it feel like *mine*.

This is the part people often skip when talking about AI-assisted development: the AI gets you 80% of the way fast, but that last 20% of personal tweaking is what makes the result feel intentional rather than generated.

---

## Adding Features, One at a Time

Once the base was working, I started layering on features. This is where AI pair-programming really shines - instead of context-switching between docs and StackOverflow, you just describe what you want and iterate.

Here are a few things I built:

1. **Particle Background:** I wanted the background to feel alive, not static. The agent wrote a Canvas-based `ParticleBackground` component with interactive floating dots.

2. **Markdown Blog Engine:** I wanted to write blog posts in plain Markdown files without needing a CMS. The agent set up `gray-matter` for frontmatter parsing and a `remark`/`rehype` pipeline to convert Markdown to HTML.

3. **Syntax Highlighting & Copy Buttons:** I added build-time syntax highlighting with Shiki and copy-to-clipboard buttons on code blocks.

**💡 Tip:** Build features incrementally. Get the base working first, then add one thing at a time. It's much easier to debug and gives you a working site at every step.

---

## Things That Went Wrong

This wasn't a magic wand. AI-generated code has quirks, and if you don't review what it produces, you'll end up with problems. Here are a few I hit:

### Messy First-Pass Code
The agent's initial code was monolithic - a single landing page with loose types everywhere. I had to stop and do a cleanup pass: extract components, add proper TypeScript interfaces, and separate the data layer. This is normal and expected. Think of AI output as a rough draft, not a final version.

### A Next.js Static Export Gotcha
When using `output: 'export'` for static hosting (like GitHub Pages), Next.js throws errors for dynamic routes during local development. I had to conditionally set the output mode based on `NODE_ENV` - static for production builds, standard for local dev.

### Back Button Breaking for External Visitors
If someone landed on a blog post directly from a shared link, clicking "Back" would navigate them off the site entirely since there was no browser history. I fixed this by tracking internal navigation state and falling back to `/blog` when the history stack was empty.

**💡 Tip:** Don't blindly accept what the AI generates. Read through the code, understand it, and refactor when it doesn't feel right. The AI is fast at generating; you need to be the quality gate.

---

## Setting Up Auto-Deploy

The last piece was deployment. I added a `draft` flag to the blog frontmatter so unfinished posts get filtered out in production builds. Then I set up a GitHub Actions workflow that builds the static export and deploys it to GitHub Pages on every push to `master`.

The whole CI/CD setup took maybe 15 minutes. Now I just write a Markdown file, commit, and it's live on my custom domain.

---

## What I Learned

A few honest takeaways from this experiment:

**AI doesn't replace your judgment - it removes the parts you're slow at.** For me, that was design decisions and boilerplate frontend code. I still made all the architectural choices, did the refactoring, and designed the deployment pipeline. The AI just made the boring parts fast.

**You still need to understand what's being generated.** Every bug I hit - the static export issue, the back button problem - required actual engineering knowledge to diagnose and fix. The AI helped implement the solutions, but recognizing the problems was on me.

**It's genuinely fun.** This felt less like grinding through a side project and more like collaborating with a very fast junior developer. The feedback loop is incredibly tight - describe what you want, see it in seconds, tweak, repeat.

I used Google Antigravity (powered by Gemini 3.1 Pro) for this project, but the workflow applies to any AI coding agent - Claude Code, Cursor, Codex, or whatever else is current. The key isn't the specific tool; it's learning how to direct an AI effectively: giving it good context, reviewing its output critically, and knowing when to step in and do things yourself.

*(If you're curious what the old version looked like, I left my previous portfolio up at [chirathr.com/old](https://chirathr.com/old/) - the contrast is pretty stark.)*
