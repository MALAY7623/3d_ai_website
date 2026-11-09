# Palette's Journal - Critical Learnings

## 2024-05-18 - Spline Dynamic Import & Keyboard Accessibility in Landing Pages
**Learning:** In Next.js App Router applications incorporating `@splinetool/react-spline`, the Spline component accesses browser-only APIs (`window` / WebGL context) during compilation/prerendering, causing build failures (`ReferenceError: B is not defined`) unless dynamically loaded with `{ ssr: false }`. Furthermore, landing pages with dark glassmorphism designs often lack visible focus indicators and skip links for keyboard navigation.
**Action:** Always import `@splinetool/react-spline` via `next/dynamic` with `ssr: false`, and ensure all interactive CTA buttons and navigation links provide explicit `focus-visible:ring-2` high-contrast outlines alongside accessible skip links and smooth anchor navigation.
