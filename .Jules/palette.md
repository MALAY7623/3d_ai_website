## 2025-02-17 - Spline 3D Dynamic Import & Keyboard Focus
**Learning:** `@splinetool/react-spline` relies on browser APIs and breaks Next.js App Router SSR/prerendering if statically imported. In addition, large 3D scenes can cause layout shift if unhandled during scene initialization.
**Action:** Always dynamically import `@splinetool/react-spline` with `{ ssr: false }` and provide a smooth loading state placeholder to preserve SSR rendering and improve loading feedback for users.
