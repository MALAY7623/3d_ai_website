## 2024-05-20 - Dynamic 3D Scene Loading & Navigation Accessibility
**Learning:** Browser-only 3D canvas libraries like `@splinetool/react-spline` throw SSR prerendering errors in Next.js App Router during static site generation. Dynamic imports with `{ ssr: false }` prevent SSR crashes while providing a loading state fallback to reduce layout shifts and notify users.
**Action:** Always import Spline dynamically with `ssr: false` and a loading placeholder, and wrap navigation lists in `<nav aria-label="...">` with explicit `focus-visible` ring styles on interactive controls.
