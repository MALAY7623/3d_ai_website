## 2025-05-18 - 3D Canvas SSR Dynamic Imports and Fallback UI
**Learning:** React 3D canvas components like `@splinetool/react-spline` depend on client-side browser APIs (window, HTMLCanvasElement). In Next.js App Router, statically importing them breaks SSR static generation during production build (`next build`), and causes visual pop-in without user feedback.
**Action:** Always import `@splinetool/react-spline` dynamically using `next/dynamic` with `{ ssr: false }` and provide a clean animated loading fallback UI for smooth visual transition.
