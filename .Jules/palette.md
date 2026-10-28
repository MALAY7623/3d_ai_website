## 2026-03-30 - Spline 3D Dynamic Import SSR Prevention

**Learning:** `@splinetool/react-spline` relies on browser canvas APIs that break Next.js server-side static page generation with `ReferenceError: b is not defined` if rendered on the server.
**Action:** Always import `@splinetool/react-spline` dynamically using `next/dynamic` with `{ ssr: false }` and provide a visually distinct animated fallback loader for smooth perceived performance.
