# Palette's UX Journal

## 2025-05-18 - Client-only 3D Canvas Spline Prerendering & Accessibility
**Learning:** Spline 3D canvas components rely on browser APIs and fail during server-side prerendering (`next build`). Dynamically importing `@splinetool/react-spline` with `{ ssr: false }` fixes prerendering while keeping interactive visuals intact.
**Action:** Always import `@splinetool/react-spline` dynamically with `{ ssr: false }` in Next.js App Router applications.

## 2025-05-18 - Semantic HTML & Keyboard Focus States for Landing Pages
**Learning:** Landing page CTA buttons and navigation links often lack visible focus indicators (`focus-visible`), hindering keyboard navigation users. In addition, benefit lists rendered as generic `p` tags obscure list structure from screen readers.
**Action:** Ensure all interactive elements include `focus-visible:ring-2 focus-visible:outline-none`, wrap links in `<nav>`, use semantic `<ul>`/`<li>` for item lists, and hide decorative icons with `aria-hidden="true"`.
