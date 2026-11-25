# Personal website — Astro + GitHub Pages

A small static site: CV, publications list, and a Markdown blog.
Built with [Astro](https://astro.build), hosted free on [GitHub Pages](https://pages.github.com/).

The header, footer, and page chrome live in one shared layout (`src/layouts/BaseLayout.astro`), so nothing is duplicated across pages.

## Run it locally

```bash
npm install
npm run dev
```

then open <http://localhost:4321>.

## Where to edit what

| What               | File                            |
| ------------------ | ------------------------------- |
| Your name & links  | `src/site.ts`                   |
| Home page text     | `src/pages/index.astro`         |
| CV                 | `src/pages/cv.astro`            |
| Papers             | `src/data/publications.yaml`    |
| Blog posts         | `src/content/blog/*.md`         |
| Shared look & feel | `src/layouts/BaseLayout.astro`  |

## Publish to GitHub Pages

1. Check `astro.config.mjs`:
   - Repo named `<username>.github.io` → leave `base` commented out.
   - Any other repo name → uncomment `base: '/<repo-name>/'`.
2. Create the repo and push:

   ```bash
   git add .
   git commit -m "Publish my site"
   gh repo create <repo-name> --public --source=. --push
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

From then on, every push to `main` rebuilds and redeploys the site automatically.

## Day-to-day

- **New blog post** — add `src/content/blog/my-post.md` with a `title` and
  `pubDate` at the top, then `git push`. The URL is just the file name.
- **New paper** — append an entry to `src/data/publications.yaml`.
- **CV PDF** — drop `cv.pdf` into `public/`; the download button on the CV page picks it up.
