# Palette's Journal

## 2024-05-20 - Spline 3D Integration & Keyboard Focus
**Learning:** Spline 3D canvas components rely on browser window APIs during client execution. Importing `@splinetool/react-spline` directly causes Next.js SSG prerendering errors during `next build`. Using `next/dynamic` with `{ ssr: false }` resolves SSG errors while preserving client-side 3D interactivity.
**Action:** Always import client-only canvas/3D components dynamically with `{ ssr: false }` in Next.js App Router.
