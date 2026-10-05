## 2025-05-10 - Dynamic Imports for 3D Graphics and Keyboard Focus States
**Learning:** Heavy client-side 3D libraries (e.g. Spline) fail SSR prerendering during production builds if statically imported; dynamic import with `ssr: false` ensures static page generation succeeds. Navigation links and CTA buttons require explicit `focus-visible:ring-2` styles for accessible keyboard navigation in dark themes.
**Action:** Dynamically import client-only 3D canvas components with `{ ssr: false }` and add standard `focus-visible` ring classes to interactive elements.
