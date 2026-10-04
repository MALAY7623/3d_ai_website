## 2025-10-04 - Dynamic 3D Component Loading & Focus Indicators
**Learning:** Spline 3D canvas components relying on browser APIs cause SSR prerendering failures during Next.js builds if imported directly. Dynamically importing with `ssr: false` and a skeleton fallback provides smooth loading UX without layout shifts.
**Action:** Always dynamically import `@splinetool/react-spline` with `{ ssr: false }` and include an accessible loading fallback skeleton along with `focus-visible` ring utilities for CTA buttons and navigation links.
