## 2026-03-30 - Keyboard Focus Rings and Semantic Nav in Dark Mode Landing Page
**Learning:** Interactive Next.js/Tailwind components and icon-only/decorative elements in dark landing pages often omit `focus-visible` ring utilities and semantic `<nav>` wrappers, impairing keyboard navigation.
**Action:** Always ensure nav links and buttons use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500` for clear visual focus, wrap navigation in `<nav aria-label="...">`, and mark decorative Lucide icons with `aria-hidden="true"`.
