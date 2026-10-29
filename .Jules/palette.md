## 2024-05-18 - Spline 3D Scene Dynamic Loading & Accessibility
**Learning:** Heavy 3D interactive graphics built with `@splinetool/react-spline` require `next/dynamic` (`ssr: false`) and `@splinetool/runtime` peer dependency to prevent SSR static generation errors and client-side runtime errors. Providing an explicit pulse loading placeholder improves visual feedback and prevent layout shifts.
**Action:** Dynamically import `@splinetool/react-spline` with `{ ssr: false }` and render an accessible skeleton fallback while the 3D scene asset finishes loading.
