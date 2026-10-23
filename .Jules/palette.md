# Palette's Journal - UX & Accessibility Learnings

## 2025-05-18 - Landing Page Navigation and Focus Feedback
**Learning:** Landing page CTA buttons and navigation links lacked visible keyboard focus indicators (`focus-visible`) and semantic `<nav>` labeling, making screen reader and keyboard navigation difficult.
**Action:** Always provide explicit focus visible rings (`focus-visible:ring-2 focus-visible:ring-fuchsia-500`) on interactive components, wrap main headers in `<nav aria-label="...">`, and include a skip link for main content.
