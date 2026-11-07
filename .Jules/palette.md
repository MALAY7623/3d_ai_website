# Palette's Journal - Critical UX/A11y Learnings

## 2025-05-18 - Keyboard Focus Rings and Smooth In-Page Navigation
**Learning:** Single-page landing sites with dark themes frequently neglect `:focus-visible` styling and smooth anchor jumps. Without `focus-visible:ring-offset-zinc-950` and high-contrast rings (`ring-fuchsia-500`), keyboard navigation rings either blend into dark glassmorphic backgrounds or get cut off. Furthermore, `scroll-smooth` on the root `<html>` significantly reduces disorientation when navigating via in-page anchor links (`#home`, `#about`, `#pricing`).
**Action:** Always provide explicit high-contrast `focus-visible` ring and offset tokens tuned to the dark/light background on interactive buttons and navigation links, and ensure the root element includes `scroll-smooth` for anchor-based navigation.
