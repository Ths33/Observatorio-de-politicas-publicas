# Tales Henrique — Creative Engineering

Bilingual editorial portfolio built with Astro and TypeScript.

- English: /en/
- Português: /pt/
- Localized engineering case studies: /en/work/{slug}/ and /pt/work/{slug}/
- / redirects to /en/

## Commands

```bash
npm install
npm run check
npm run build
npm run dev
```

## Structure

- `src/content/site.ts` — EN/PT editorial content and case studies
- `src/components/Portfolio.astro` — homepage, engineering diagram and AI simulation
- `src/pages/[lang]/work/[slug].astro` — static localized case-study pages
- `src/lib/portfolio.ts` — progressive enhancement
- `src/styles/portfolio.css` — responsive editorial layout
- `src/layouts/BaseLayout.astro` — canonical, hreflang, Open Graph, Person JSON-LD
- `@astrojs/sitemap` — sitemap at build time

The AI flow is an interactive conceptual simulation, not a live model. Professional figures come from the supplied CV and have not been independently audited.

## Verification status

Changes were committed to main via GitHub. Build, browser testing, accessibility audit and Lighthouse have **not** been run in this environment. Refresh the npm lockfile with `npm install` before using `npm ci`. Deployment is handled by the repository owner.
