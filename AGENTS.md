## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, tailwindcss, sveltekit-adapter, mcp

### Project Facts

- **Framework**: SvelteKit 2 + Svelte 5 + Vite 7
- **Deployment mode**: `@sveltejs/adapter-static` with global prerender enabled (`src/routes/+layout.ts`)
- **Styling**: Tailwind CSS v4 via `src/routes/layout.css` with `@tailwindcss/forms` and `@tailwindcss/typography`

### Commands

- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run preview` - serve the production build locally
- `npm run check` - `svelte-check` + `svelte-kit sync`
- `npm run lint` - Prettier check + ESLint
- `npm run format` - Prettier write

### Codebase Map

- Routes are file-based under `src/routes` (`/`, `/about`, `/datenschutz`, `/impressum`, `/privacy-policy-app`, `/terms-and-conditions`)
- Shared layout/head/global styles live in `src/routes/+layout.svelte` and `src/routes/layout.css`
- Reusable UI is primarily in `src/lib/components/Header.svelte` and `src/lib/components/Footer.svelte`
- Legal pages are mostly large static Svelte files (content is in route `+page.svelte` files)

### Conventions & Pitfalls

- Formatting follows `.prettierrc`: tabs, single quotes, `printWidth: 100`, `trailingComma: none`
- Use `$lib` aliases for shared assets/components imports
- Root markdown files (`datenschutz.md`, `impressum.md`, `privacy-policy-app.md`, `tos.md`) are not auto-wired to routes; update `src/routes/**/+page.svelte` for live site content
- `src/lib/components/Footer.svelte` links to `/agb`, but there is no `src/routes/agb/+page.svelte` route
- `svelte.config.js` sets `kit.prerender.handleHttpError` to `warn`, so broken prerender links may not fail builds

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
