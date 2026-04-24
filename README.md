# Minimal Blog

A simple Astro blog showcasing markdown features. Great for learning how Astro blogs work.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see the blog.

## Adding Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: My New Post
date: "2026-03-01"
description: A short description
---

Your content here...
```

The post will automatically appear on the blog homepage.

## Project Structure

```
src/
├── content/
│   └── blog/           # Your blog posts (.md files)
├── pages/
│   ├── index.astro     # Homepage - lists all posts
│   └── blog/
│       └── [slug].astro  # Individual post page
```

## Building for Production

```bash
npm run build
npm run preview
```

This creates a static site in the `dist/` folder, ready to deploy to any static host.