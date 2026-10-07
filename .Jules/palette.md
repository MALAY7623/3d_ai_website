## 2025-02-17 - Dynamic Spline Imports and Accessible Focus States in Dark Glassmorphic Themes

**Learning:** `@splinetool/react-spline` relies on browser canvas/WebGL APIs and crashes server-side rendering during static generation (`pnpm build`). Next.js dynamic import with `{ ssr: false }` is required. Additionally, in dark glassmorphic UIs, focus indicators need high contrast ring colors (`focus-visible:ring-fuchsia-500`) to be clearly visible against translucent dark backgrounds.
**Action:** Always import Spline dynamically with `ssr: false` in Next.js App Router projects, and ensure focus-visible styles provide strong visual contrast on dark glassmorphic containers.
