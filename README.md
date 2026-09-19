# Pulasthi Aberathne — Personal Engineering Portfolio

Personal portfolio for Pulasthi Aberathne, a Full-Stack Engineer focused on reliable production systems across backend, frontend, distributed systems, cloud infrastructure, and production engineering.

Live site: [pulasthiabey.dev](https://pulasthiabey.dev)

## Built with

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- CSS-driven animations
- Inline SVG icons

The site is intentionally static and dependency-light. It does not use a database, CMS, authentication, backend API, or state-management library.

## Features

- Responsive single-page portfolio layout
- Dark and light themes with system preference detection and localStorage persistence
- PA logo variants for light and dark themes
- PA browser icon and SEO metadata
- Accessible navigation, focus states, semantic headings, and reduced-motion support
- Animated hero architecture visual with connected SVG service nodes
- About, expertise, selected work, writing, contact, and footer sections
- Dynamic experience-year copy based on a May 2019 career start date

## Project structure

```text
app/
  globals.css       Global design system, themes, responsive styles, and animations
  icon.png          PA browser icon
  layout.tsx        Root layout and metadata
  page.tsx          Portfolio page composition
components/
  icon.tsx           Inline SVG icon set
  theme-toggle.tsx  Client-side theme switcher
data/
  portfolio.ts       Portfolio content, links, case studies, and experience calculation
public/
  pa-logo-light.png  Blue/navy PA logo for light mode
  pa-logo-dark.png   Light PA logo for dark mode
```

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

Run linting and the TypeScript check:

```bash
npm run lint
npx tsc --noEmit
```

Run a production build:

```bash
npm run build
```

If the local environment prevents Next.js 16 Turbopack from starting its worker process, the webpack fallback can be used:

```bash
npx next build --webpack
```
