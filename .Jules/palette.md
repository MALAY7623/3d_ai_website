# Palette's Journal - Critical Learnings

## 2024-05-18 - Spline 3D Component SSR & Focus Indicators
**Learning:** `@splinetool/react-spline` relies on window/browser APIs during render and causes `ReferenceError: c is not defined` when server-side prerendered by Next.js. Dynamic import with `{ ssr: false }` fixes build/prerender failures and provides an opportunity to show a smooth loading fallback.
**Action:** Always wrap `@splinetool/react-spline` in `next/dynamic` with `ssr: false` and accessible fallback UI.
