## 2025-02-20 - Next.js App Router 3D Canvas Prerender & Focus Styles

**Learning:** `@splinetool/react-spline` relies on browser APIs (e.g. `window`/`canvas`) which causes SSR prerender errors (`ReferenceError: c is not defined`) during `next build`. Dynamically importing Spline with `{ ssr: false }` and an animated loading placeholder prevents prerender failures while improving UX by visually communicating loading state.
**Action:** Always import browser-only 3D canvas libraries dynamically with `ssr: false` and a loading fallback spinner in Next.js App Router, while ensuring standard keyboard focus ring indicators (`focus-visible:ring-2`) and ARIA labels are added to interactive elements.
