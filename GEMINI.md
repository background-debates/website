# Project Context: background-website

This project is a SvelteKit application designed to replace the current WordPress-based website [background-app.de](https://background-app.de/). It focuses on providing a high-performance, static-generated landing page for the "Background" app, which facilitates AI-powered, non-populist dialogue.

## Core Technologies

- **Framework**: [Svelte 5](https://svelte.dev/) (using Runes mode) & [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Deployment**: [Static Adapter](https://kit.svelte.dev/docs/adapter-static) (SSG)
- **Testing**: Playwright (E2E)
- **Build Tool**: Vite

## Project Structure

- `src/routes/`: File-based routing.
  - `+layout.svelte`: Main layout with global styles and favicon.
  - `+page.svelte`: Current landing page (to be migrated from WordPress).
  - `demo/`: Contains app demo pages.
- `src/lib/`: Reusable components and assets.
  - `assets/`: Images, svgs (e.g., `favicon.svg`).
  - `vitest-examples/`: Example Svelte components and tests.
- `static/`: Static assets (robots.txt, etc.).
- `playwright.config.ts`: E2E testing configuration (matches `**/*.e2e.{ts,js}`).

## Key Commands

- `npm run dev`: Start development server with HMR.
- `npm run build`: Generate a static production build.
- `npm run preview`: Preview the production build locally.
- `npm run check`: Run Svelte and TypeScript type-checking.
- `npm run lint`: Run ESLint and Prettier checks.
- `npm run format`: Format code using Prettier.
- `npx playwright test`: Run E2E tests.

## Development Conventions & Guidelines

- **Svelte 5 Runes**: The project is configured to use Svelte 5 Runes mode by default (via `svelte.config.js`). Use `$state`, `$derived`, `$effect`, and `$props` instead of traditional Svelte 4 syntax.
- **E2E Testing**: Place Playwright tests next to their respective pages or components using the `.e2e.ts` extension.
- **Styling**: Leverage Tailwind CSS 4's Vite integration. Avoid complex Vanilla CSS where Tailwind utility classes suffice.
- **MCP Tools**: Utilize the Svelte MCP server for documentation and automated code fixing (`svelte-autofixer`).

## Migration Strategy (WordPress -> SvelteKit)

The target site `background-app.de` includes the following sections to be migrated:

- **Hero Section**: "Level up your dialog" messaging.
- **Features**: AI-Powered Dialogue, Filter Bubble Bursting, Quality-Focused Content.
- **Pages**: FAQ, Impressum (Legal), Datenschutz (Privacy), Terms & Conditions.
- **Interactions**: Newsletter signup form (ideal for SvelteKit Form Actions) and app download links.

### Future Work

- [ ] Implement responsive Header with "Jetzt mitmachen" CTA.
- [ ] Migrate landing page content to `src/routes/+page.svelte`.
- [ ] Create reusable components for "Feature Sections" and "FAQ Items".
- [ ] Set up legal pages in `src/routes/impressum`, `src/routes/datenschutz`, etc.
