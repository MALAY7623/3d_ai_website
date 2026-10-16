## 2025-05-18 - Dynamic Spline 3D Scene Loading Fallback
**Learning:** React 3D Canvas components (such as `@splinetool/react-spline`) depend on browser-only WebGL APIs and break Next.js App Router SSR static prerendering if statically imported. Wrapping the component with `next/dynamic({ ssr: false, loading: ... })` provides both build compatibility and a clear loading UX feedback for users.
**Action:** Always dynamically import browser-only 3D canvas libraries with `{ ssr: false }` and include a subtle loading skeleton/indicator.
