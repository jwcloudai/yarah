## Goal

Switch this project from TanStack Start (SSR, Nitro/Cloudflare output) to a pure client-rendered SPA. After this change, `npm run build` emits `dist/index.html` plus hashed JS/CSS assets — exactly what AWS Amplify's static hosting expects.

All current pages, components, fonts, styling, and TanStack Router file-based routing are preserved. Only the build/runtime layer changes.

## What changes

### 1. Build config

- Replace `vite.config.ts` (currently `@lovable.dev/vite-tanstack-config`, which forces SSR + Nitro Cloudflare build) with a plain Vite config:
  - `@vitejs/plugin-react`
  - `@tanstack/router-plugin/vite` (keeps file-based routing in `src/routes/`)
  - `@tailwindcss/vite`
  - `vite-tsconfig-paths`
- Output: standard `dist/` with `index.html` at the root.

### 2. Client entry + HTML shell

- Add `index.html` at project root (Vite SPA entry). Includes:
  - `<meta>` viewport / charset
  - Google Fonts `<link>` tags (Playfair, Cinzel, Inter, Lora)
  - `<div id="root"></div>`
  - `<script type="module" src="/src/main.tsx">`
- Add `src/main.tsx` that mounts React, creates the router, and renders `<RouterProvider />`.

### 3. Router

- Keep `src/routes/` and all route files.
- `src/router.tsx` simplified to a client-only `createRouter` (no SSR context-aware bits).
- `src/routes/__root.tsx`:
  - Switch from `createRootRouteWithContext` + `shellComponent` + `<HeadContent />` + `<Scripts />` to a plain `createRootRoute` whose `component` renders `<QueryClientProvider>` + `<Outlet />`.
  - Drop the `head()`/`links` block (fonts/meta now live in `index.html`).
- `src/routes/index.tsx`:
  - Drop the `head()` SSR meta block (TanStack Start–specific). Page `<title>` set via a tiny `useEffect`-based hook, or via react-helmet-style approach — keeping it minimal with `useEffect`.

### 4. Files to delete

- `src/server.ts`, `src/start.ts` (TanStack Start server entry points; not used in SPA mode).

### 5. Dependencies

- **Remove**: `@tanstack/react-start`, `nitro`, `@lovable.dev/vite-tanstack-config`.
- **Keep**: `@tanstack/react-router`, `@tanstack/react-query`, `@tanstack/router-plugin`, all UI/component deps, Tailwind.
- **Add (devDependencies)**: none new — `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`, `@tanstack/router-plugin` are already present.

### 6. Amplify config (you do this in the Amplify console, not in code)

For SPA deep-link refresh to work, add a single Amplify rewrite rule:

```
Source:  </^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>
Target:  /index.html
Type:    200 (Rewrite)
```

Without this, refreshing on `/about` returns 404. Set it under **Amplify → App settings → Rewrites and redirects**.

## What you lose

- **SSR**: pages render after JS loads. Initial HTML is a blank shell — slightly slower first paint and weaker SEO than SSR. For a marketing/landing site this is usually acceptable but worth knowing.
- **`og:image` per-route from `head()`**: social previews will use whatever default meta is in `index.html` unless we add a runtime helmet solution later. Single shared OG tags are fine for now.
- **Server functions** (`createServerFn`): not usable in pure SPA. You don't currently have any in use, so no impact.

## Verification

After the conversion:
1. Build runs locally → `dist/index.html` + `dist/assets/*` exist.
2. Preview shows the same site as today (hero, sections, fonts, animations).
3. Once deployed to Amplify with the rewrite rule, `/` loads and the site works.

## Risk

Medium. The Lovable preview/runtime is tuned for TanStack Start; switching to a plain SPA Vite config is supported but means the project no longer benefits from the managed SSR setup. If you ever want to go back, the Start setup can be restored, but it's a meaningful change either direction. Confirm you want to proceed and I'll execute.
