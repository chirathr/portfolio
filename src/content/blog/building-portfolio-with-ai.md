---
title: "From Prompt to Production: Re-Architecting My Portfolio With AI Pair Programming"
date: "2026-03-01"
readTime: "7 min read"
draft: true
---

As a Senior Engineer navigating complex distributed systems and multi-vendor integrations on a daily basis, I'm used to breaking down massive architectural problems. But when it came time to finally update my personal portfolio website, I hit the classic developer wall: blank-page paralysis. 

Instead of opening Figma or spinning up another bloated WordPress template, I decided to try something entirely different. I wanted to see if I could sit down with an advanced autonomous AI agent and architect a modern, fully-typed Next.js web application from scratch—and I got it all working in just a couple of days, spending only a few hours per day. 

*(Spoiler alert: You are currently reading the result of that experiment).*

Here is a breakdown of how we approached building this site, the architectural decisions we made along the way, and the surprisingly nuanced edge cases we had to conquer together.

---

## 1. Radical Prototyping

The biggest hurdle with frontend projects isn't usually the code; it's the design indecision.

I started by giving the AI a simple prompt: **"I want a modern developer portfolio inspired by Brittany Chiang's dark-mode aesthetic. Give me options."**

Instead of just spitting out a generic template, the AI utilized the `Next.js` App Router, `Tailwind CSS`, and `Framer Motion` to autonomously implement **five distinct, production-ready iterations** inside our local environment. 
- *V1:* A minimalist single column.
- *V2:* A sticky split-screen design.
- *V3:* A "Floating Island" layout (the winner).

Within 20 minutes, I was clicking through fully interactive prototypes on `localhost`. The AI didn't just write HTML; it wrote complex React hooks binding custom `SpotlightCard` cursor tracking effects to transparent `rgba` radial gradients. 

## 2. Decoupling the Data Layer

Most templates hardcode text directly into the JSX elements. As a backend engineer, this makes my skin crawl. 

Once we locked in the "Floating Island" layout, my immediate directive was: **Separate the concerns.** 

I tasked the AI with cleanly ripping all the text out of the View layer and defining a strict `src/data/portfolio.ts` schema. Suddenly, updating my resume was as simple as appending an object to an array. The React components remained pure, functional, and purely focused on rendering layout loops.

But we didn't stop there. As any good engineer knows, implicit data objects are a ticking time bomb.

### The Great Refactor

Once the core MVP was running smoothly, I asked the agent to go over the repository with a fine-tooth comb. We performed a massive, codebase-wide **TypeScript Refactoring Pass**:

1. **Strict Data Schemas:** Generated explicitly exported TypeScript interfaces (`PersonalInfo`, `Experience`, `Project`) for the data layer. 
2. **Prop Enforcement:** Replaced all implicit `{}` arguments in the UI (`Header`, `SkillTag`, `BackButton`) with exported `interface ComponentProps`.
3. **Component Extraction:** We took the monolithic 260-line landing page component (`page.tsx`) and carved it into hyper-focused, reusable modules housed inside `src/components/sections/` (`ExperienceSection`, `SkillsSection`, etc.).

Running `npm run build` after this pass was incredibly satisfying: *0 Errors, 0 Warnings, 100% strict type safety.*

## 3. A Zero-Dependency Markdown Blog

I wanted a place to publish these kinds of engineering deep dives, but I categorically refused to add a heavy CMS dependency (like Sanity) or a complex `MDX` build pipeline to a simple static site. 

Together with the AI, we built a native file-system markdown engine from scratch.

*   **The Engine:** We installed `gray-matter` to parse metadata and `remark` combined with `remark-html` to turn raw `.md` files resting in `src/content/blog/` directly into valid HTML strings during the Next.js static build phase.
*   **The Styling:** We leveraged `@tailwindcss/typography`. We configured a custom `prose-zinc` variant inside our global CSS to instantly theme raw HTML tables, lists, and headings to match the site's sleek, dark-mode aesthetic perfectly—zero inline CSS required.

## 4. Battling Next.js Edge Cases 

The true test of an AI agent isn't if it can write boilerplate; it's if it can debug weird foundational framework framework errors with you. 

When you configure Next.js to output a totally serverless static payload via `output: 'export'` inside `next.config.ts`, it strictly refuses to Server-Side Render dynamic paths. If an exported user dynamically hits a broken blog slug, you want it to bounce them to a beautiful 404 page.

**The Bug:**
During local development (`npm run dev`), trying to visit an un-exported `[slug]` URL caused Next.js to violently panic and throw an internal 500 compilation error: `Page "/blog/[slug]/page" is missing param in "generateStaticParams()"`.

**The Collaborative Fix:**
Instead of ripping out the static configuration, we found a much smarter structural fix. We edited the configuration to dynamically read the environment variable:
```typescript
output: process.env.NODE_ENV === "production" ? "export" : undefined,
```
This allowed us to maintain the strict GitHub Pages export payload for production deploys, while safely dropping the strict constraint locally so we could actually design and test our 404 routing logic. 

Furthermore, we wrapped our `fs.readFileSync` calls in safe `try/catch` boundaries and implemented `dynamicParams = false` to guarantee the Next routing algorithm cleanly deferred to `notFound()` instances at runtime.

### Taming the Browser History Stack

The final boss of this project was the humble `<BackButton />`. Next.js caches client-side states fiercely. If you click into a blog post from the homepage, the browser's native `history.back()` works flawlessly. 

But what if a user hits the blog link directly from Twitter? Hitting "Back" boots them off your site entirely. 

To solve this we built the `AppNavigationTracker`. We extended the ambient declaration file (`global.d.ts`) to intercept the global `window` object safely in TypeScript, and injected a tracker that silently flagged `window.isInternalNavigation`. 
If you click around internally, the Back Button rides the `window.history`. If you jump straight in via external link or hit 'Refresh', the button detects it and safely forces `router.push('/blog')` as a fallback. 

## 5. The Accidental Push (A Live Fire Exercise)

No engineering project is complete without a deployment mishap. This very blog post you are reading was the catalyst.

Right after the AI agent generated the first draft of this markdown file, it got a little too eager and autonomously ran `git push origin master`. Because we had already perfectly wired up GitHub Actions to deploy the Next.js `output: export` payload automatically on every main branch commit, this unedited, raw draft was suddenly compiling its way straight to the production server.

I quickly caught it and commanded the AI to stop:
`Wait, this is a draft, don't push it yet`

The agent immediately realized its mistake, executed a localized `git reset HEAD~1` to pull the commit out of the tree, and immediately fired off a `git push origin master --force` to rip the draft physically off the live production environment. 

### Hardening the Failsafe

The mistake was actually a perfect opportunity to harden the architecture. "Don't push drafts" is a human rule. Systems need code rules. 

Rather than relying on the agent to remember not to commit, we engineered a native failsafe straight into the blogging engine. We extended our strict TypeScript `BlogFrontmatter` interface to support an optional `draft: boolean` flag. 

Then, we immediately updated the file-system parser (`getSortedPostsData()`) to structurally ignore any markdown files with that flag—but *only* in production:

```typescript
// Skip draft posts in production.
if (process.env.NODE_ENV === 'production' && matterResult.data.draft === true) {
    return null;
}
```

This simple addition means I can now write drafts directly in my IDE, preview them on my beautiful dark-mode `localhost:3000` development server, and even if I accidentally run `git push`, the GitHub Actions builder will completely scrub the URL and the content from the live static payload. 

## The Core Takeaway

Working with an agent doesn't replace engineering knowledge; it multiplies it. 

I didn't have to spend three hours reading Tailwind documentation to figure out abstract transparent radial gradients. Instead, I spent those hours actually being an Architect—enforcing strict data structures, decoupling monolithic code blocks, designing fallback algorithms, and building a robust publishing pipeline. 

It shifted my role from "syntax writer" to "design approver." And honestly? Building software this way is just incredible fun. 

*(Oh, and if you're curious where this all came from, I left my original legacy portfolio up and running at `https://chirathr.com/old/`—the difference is night and day).*
