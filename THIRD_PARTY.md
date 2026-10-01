# MRI Files integration

- Project: https://github.com/niivue/niivue
- Package: @niivue/niivue, pinned to 0.57.0
- Vendored browser distribution: https://unpkg.com/@niivue/niivue@0.57.0/dist/niivue.umd.js
- License: BSD-2-Clause; reproduced in vendor/niivue/LICENSE.
- Documentation: https://niivue.com/docs/

The integration uses Niivue and NVImage APIs for local NIfTI loading, multiplanar rendering, crosshairs, and radiological orientation. The upstream browser bundle is unmodified and retains its bundled notices. No GitHub application or external account is required.

Open brain_platform_sectional_anatomy_v20.html. Keep volume-viewer.html and vendor beside it. Existing learning activities use the original embedded image. MRI Files is a separate local-file viewer; imported volumes do not replace the teaching atlas or its annotations.

Research Studio was removed from v20, including its navigation, route, styles, builder and draft/export handlers. Older HTML versions and previously saved local data are preserved.

## BodyQuest-inspired BrainQuest

- Project: https://github.com/maxlagrell/bodyquest
- License: MIT; repository attribution and license reference are retained here.

`brainquest.js` reuses the interaction pattern documented by BodyQuest: learn structures, locate or identify them, earn XP, track levels, and save progress in `localStorage`. It is adapted to the existing MRI image and anatomy data in this platform. No BodyQuest source files, 3D meshes, or branding are bundled.

## BrainBrowser-informed volume tools

- Project: https://github.com/aces/brainbrowser
- License: AGPL-3.0.

The MRI Files page now includes a compatible volume-analysis workflow inspired by BrainBrowser's documented Volume Viewer: independent X/Y/Z slice controls, crosshair location, voxel/mm/intensity readout, window low/high controls, radiological orientation, and screenshot export. The page continues to use the already bundled NiiVue distribution for NIfTI parsing and WebGL rendering. No BrainBrowser source code is bundled, so the AGPL-3.0 codebase is not linked into this standalone file.
