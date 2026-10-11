# Palette's Journal

## 2026-10-11 - Dynamic Spline Imports and Accessible Navigation
**Learning:** Browser-only 3D canvas libraries like `@splinetool/react-spline` break Next.js static prerendering unless dynamically imported with `{ ssr: false }`. Providing an accessible loading fallback (`aria-label="Loading 3D model"`) ensures smooth visual UX during load.
**Action:** Always use `next/dynamic` with `{ ssr: false }` and an explicit accessible loading indicator when embedding Spline scenes.
