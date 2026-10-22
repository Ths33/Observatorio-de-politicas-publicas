# Tales Henrique — From Code to Experience

Immersive Astro + TypeScript + GSAP + Three.js portfolio.

## Development

```bash
npm install
npm run check
npm run build
npm run dev
```

Deployment is managed by the site owner. No deployment automation is executed by this project.

## Architecture

- `src/content/chapters.ts`: verified editorial content and scene definitions.
- `src/pages/index.astro`: semantic SSR/SSG scene markup and accessible linear reading mode.
- `src/lib/experience.ts`: discrete scene navigation, input handling, GSAP transitions.
- `src/lib/matter.ts`: on-demand Three.js geometry and cleanup.
- `src/styles/experience.css`: visual direction and responsive compositions.

## Important

The AI system interaction is a **visual architecture demonstration**, not a live AI backend. No fabricated AI response or client metrics are displayed. Professional facts are drawn from the supplied resume; reported performance numbers are not independently audited.

## QA checklist (not yet verified)

- Desktop 1920x1080; mobile 390x844 and 360x640.
- Keyboard, touch, wheel and trackpad.
- Reduced motion, WebGL disabled, browser zoom and short viewport.
- Lighthouse performance/accessibility/SEO/best practices.
- All scenes fit; use reading mode if user zoom/text size makes fixed scenes unsuitable.

Do not treat repository commits as proof of successful build or deploy.
