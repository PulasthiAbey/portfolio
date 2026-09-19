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
npm run typecheck
```

Run the test suite and coverage gate:

```bash
npm test
npm run test:coverage
```

Coverage thresholds are 70% for lines, statements, and functions, and 60% for branches. Coverage output is written to `coverage/`, which is ignored from version control.

Run a production build:

```bash
npm run build
```

If the local environment prevents Next.js 16 Turbopack from starting its worker process, the webpack fallback can be used:

```bash
npx next build --webpack
```

## CI/CD with GitHub Actions and Vercel

This repository uses GitHub Actions for validation and explicit Vercel CLI deployment. Vercel's automatic GitHub deployment integration is not used.

- Pull requests targeting `main` run linting, TypeScript checking, Vitest tests with coverage thresholds, a high/critical dependency audit, and a production build. Pull requests never deploy.
- Pull requests also validate that the PR template sections are present and that the required validation and deployment-safety checkboxes are completed.
- Pushes to `main` run the same validation.
- Production deployment runs only after the `CI` workflow succeeds for a push to `main`.
- The deployment workflow checks out the validated commit, runs `vercel pull`, `vercel build`, and `vercel deploy --prebuilt --prod`.
- Deployment concurrency is protected so an older production deployment is cancelled when a newer one is ready.

### Required GitHub secrets

Create these repository secrets under **Settings → Secrets and variables → Actions**:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Do not commit these values or a `.vercel` directory. `.vercel` is already ignored by `.gitignore`.

### Linking the Vercel project

Before the first deployment, authenticate with the Vercel CLI locally and link this repository to the intended Vercel project:

```bash
npx vercel@latest login
npx vercel@latest link
```

Choose the correct Vercel account and existing project, or create the project when prompted. The CLI writes local project metadata under `.vercel`, including the organization and project identifiers. Copy those identifiers into the `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` GitHub secrets, and create a `VERCEL_TOKEN` from your Vercel account settings. Never commit `.vercel` or the token.

Production deployment is intentionally limited to successful CI runs on `main`. The custom domain `pulasthiabey.dev` will be configured separately after the first successful deployment; this repository does not change DNS or email settings.
