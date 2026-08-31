# talsal.github.io

Personal portfolio / hiring site for Tal Salman — Software Engineer.

Built with [Astro](https://astro.build), TypeScript, and Tailwind CSS. Static site, deployed to GitHub Pages via GitHub Actions.

## Structure

- `src/data/` — all editable content (experience, skills, services, projects, education). Edit these files to update the site's copy without touching components.
- `src/components/` — one Astro component per section.
- `src/layouts/BaseLayout.astro` — SEO meta tags, Open Graph, JSON-LD.
- `public/resume/` — downloadable resume PDF.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server                        |
| `npm run build`     | Build production site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
