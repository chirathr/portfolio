# Chirath's Portfolio

Welcome to my personal portfolio website!

This project was built from scratch leveraging AI (DeepMind tools and Claude Code) to experiment with rapid prototyping, modern frontend design aesthetics (Next.js, Tailwind, Canvas animations), and completely data-driven architectures.

## Live Site

The site is deployed and available at: [https://chirathr.com/](https://chirathr.com/)

## Local Development

```bash
npm install
npm run dev
```
(Locally, the site will run on `http://localhost:3000`)

## Configuration & Content

All portfolio content is perfectly isolated from the UI code. To update my information, I just edit:
`src/data/portfolio.ts`

### Adding a New Blog Post

The blog is statically powered by an internal Markdown engine (`remark` + `gray-matter`). To write a new post:

1. Create a new `.md` file in the `src/content/blog/` directory.
2. Add the following YAML frontmatter precisely to the very top of the file:

```yaml
---
title: "Your Post Title Here"
date: "2026-03-01"
readTime: "5 min read"
---
```
3. Write standard Markdown below the frontmatter block! The site will automatically process your post, add it to the homepage feed, and generate a highly styled `/blog/your-post-filename` route.

## Deployment

The project is configured for a static export and deploys directly to GitHub Pages via the included GitHub Action.
