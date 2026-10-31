# Palette's Journal - UX & Accessibility Learnings

## 2025-05-18 - WebGL / 3D Scene Accessibility & Keyboard Navigation Pattern
**Learning:** Landing pages featuring interactive 3D WebGL scenes (such as `@splinetool/react-spline`) often intercept mouse interactions and can disorient keyboard users or screen readers if the canvas container lacks `aria-hidden="true"`. Furthermore, heavy 3D canvases must be paired with visible-on-focus skip-to-content links and high-contrast `focus-visible` rings so keyboard navigators can easily bypass interactive visual elements directly to actionable sections (like pricing and feature overviews).
**Action:** When adding 3D/Spline visual assets, mark decorative background scenes `aria-hidden="true"`, provide an accessible top-level skip link, and ensure interactive CTA buttons and navigation links declare explicit `focus-visible` ring indicators with appropriate color offset against dark backgrounds.
