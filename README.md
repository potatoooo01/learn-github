# BRTOMOX — Brain MRI learning

The existing v23 teaching application now has a redesigned workspace, responsive graphite/gold styling, a searchable anatomy atlas, local profiles, keyboard controls, image panning, and incorrect-answer review. The supplied MRI volume and anatomical coordinates are preserved. This work does not independently validate those coordinates or teaching content.

## Run

Requires Node.js. Run `npm start` and visit http://127.0.0.1:4173. Use HTTP rather than opening the HTML as a file: the atlas fetches its separate MRI asset.

`index.html` and `brain_platform_sectional_anatomy_v23.html` are equivalent entry points. The untouched original is `verification/original-v23.html`.

## Build and test

- `npm run build`: checks JavaScript syntax and creates `dist/` with only application files.
- `npm test`: Playwright end-to-end checks. Install the development dependency first with `npm install`. Tests use installed Microsoft Edge by default; set `BROWSER_CHANNEL=chrome` to use Chrome.
- `node tests/regression.cjs`: spatial, review, persistence, timer cleanup and active mobile workflow checks.
- In the Codex environment, `PLAYWRIGHT_PATH` may point at the bundled Playwright package instead of installing a copy.

## Organization

- `src/app.js`: current application state, MRI rendering and learning workflows, preserved from v23 with targeted fixes. Further splitting by learning module remains possible.
- `src/styles/legacy.css`: extracted original styles, retained to preserve existing screens.
- `src/styles/product.css`: responsive product design and accessibility styles.
- `src/profile.js`: local-only learner profile; no passwords or simulated authentication.
- `src/settings.js`, `src/panels.js`: preferences and menu.
- `src/accessibility.js`: structure search, keyboard activation and dialog focus containment.
- `public/assets/teaching-volume.gz`: original lossless extraction of the embedded teaching volume.

Progress remains under the existing `bm` localStorage key. Profiles use `br_local_profile`. Original account records are left untouched but are not used as authentication. Data is local to this browser/origin, with no cloud synchronization.

## Deployment

Upload the **contents of `dist/`** to a static HTTPS host. Keep the directory structure. Routes use hashes, so refresh does not require a server rewrite. There is no backend or secret configuration. Do not upload the workspace root: it contains backups, historical versions and reference documents.

No Git remote or deployment target was available during this change. Public deployment has not been performed or verified. The current teaching volume's redistribution permission must be checked by the project owner before publishing; existing source identification is IXI / Guys 0747. See `THIRD_PARTY.md` for separately supplied integrations.

## Current limitations

Cloud accounts/contact messaging, DICOM import, 3D brain synchronization and spaced repetition are not implemented in this version. The separate existing `volume-viewer.html` integration is outside this release. The original inconsistent rotate/flip controls were removed because they transformed the canvas without transforming pointer coordinates and overlays. Panning, zoom and reset now share the same image-to-canvas transform. Anatomical labels retain the original voxel coordinate conventions; displayed millimeters are voxel spacing offsets, not patient-world coordinates.

Use Ctrl/Cmd+K for anatomy search, arrows for MRI slices, +/− for zoom and 0 to reset. In Flashcards, Space reveals, 1 requests review and 2 marks known when the page itself has focus.
