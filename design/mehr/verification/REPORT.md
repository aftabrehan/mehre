# MEHR frontend verification

Completed 9 October 2026.

## User story

A visitor discovers the image-parallax campaign, follows collection cards or navigation anchors, filters local outfit data, expands garment details, browses the matching lookbook, and returns to the collection. On a phone, the visitor uses an accessible navigation dialog. Motion can be paused independently of browsing.

This is a frontend-only concept landing page. No API, database, checkout, external submission, or order-processing boundary exists.

## Build checks

- `npm run lint`: passed without warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed, using the supported Webpack build option. Routes `/`, `/_not-found`, and `/icon.svg` were generated successfully.
- Production server started successfully on local port 3001; page rendered with no browser errors and Occasion filtering changed the collection to two looks.

Turbopack's production CSS/font workers encountered an environment port-binding restriction. The build script now uses `next build --webpack`; development uses the default bundler. A typecheck run concurrently with a build briefly encountered the build's regenerated `.next/types` files; a sequential typecheck after build completed successfully.

## Browser evidence

| Check | Result |
| --- | --- |
| Hero image and typography | Desktop and portrait art direction rendered correctly; full silhouette is preserved within the hero composition |
| Live parallax | After scrolling, image transform was `translateY(41.1667px)` and text transform `translateY(-16.4667px)` with system reduced motion off |
| Filters | All shows six looks; Everyday shows Gul/Gulabi; Elevated shows Noor/Neel; Occasion shows Baagh/Raat |
| Keyboard filters | ArrowRight from Everyday selects and focuses Elevated; Home/End/ArrowLeft handlers are included |
| Outfit details | Noor disclosure expanded to show description, fabric, and included pieces |
| Outfit → lookbook | Noor's styled-look link navigated to `#look-noor` |
| Collection links | Campaign cards and lookbook links select the relevant edit and navigate to the collection |
| Mobile menu | Opens with focused Close control, traps navigation through Base UI, and dismisses with Escape |
| Pause motion | Control changes to Resume motion, sets the paused state, and parallax transforms compute to `none`; resume restores the active state |
| Page anchor integrity | No missing anchor targets and no duplicate IDs |
| Images | No completed image elements with zero natural width during inspection |
| Runtime console | No error entries in development or production inspection |
| Responsive overflow | Document width matched viewport at 360px, 390px, 820px and 1280px |

## Assets and loading

- Landscape hero delivery source: about 191KB; portrait hero: about 216KB.
- Product/campaign delivery sources are optimized WebP; original generated PNGs remain in `design/mehr/assets/`.
- Three locally hosted Latin WOFF2 fonts total about 107KB, replacing the initial TTF delivery. OFL licenses are included beside them.
- Hero uses an art-directed `<picture>` built with `next/image`'s `getImageProps`, with eager/high-priority loading. Below-the-fold images use Next.js lazy loading and responsive sizes.
- Motion uses motion values rather than React state updates on every scroll frame.
- Essential content is rendered before animation; system reduced motion is respected in Motion and CSS. Manual pause was verified in the browser.

## Saved screenshots

- `desktop-hero.jpg`
- `desktop-details.jpg`
- `mobile-hero.jpg`
- `mobile-collection.jpg`

## Practical limits

Responsive checks used the Codex browser with viewport overrides, not physical iOS/Android devices. Core Web Vitals field measurements and a full assistive-technology audit were not performed. The published domain is not configured; update `metadataBase` before deployment. Garments, fabric captions, and prices are fictional sample content. Video was explicitly deferred by the user.

Local development preview: http://127.0.0.1:3000.

## Card design refinement — 9 October 2026

Implemented three additional editorial treatments inspired by the supplied screenshots:

- Six-panel color accordion: monochrome collapsed imagery expands into color, with a collection link for the selected edit. Mouse hover, keyboard focus, and click select a panel. On phones it folds vertically; collapsed targets measure 44px high.
- Layered featured outfit selector: three photograph cards, labeled palette controls, previous/next buttons, and live outfit copy. Selection updates the corresponding collection browsing link.
- Fanned lookbook: rotated photograph cards, hover settling, native horizontal scrolling, scroll buttons, and mobile scroll snapping. Existing outfit-to-lookbook anchors remain intact.

View entrances run once, using opacity and a small upward translation. Short text blocks add a 4px-to-zero blur. Entry uses an ease-out curve; outfit changes use ease-in-out; catalog removal uses ease-in. Large photos are not blurred. Content is visible in server-rendered markup. No autoplay, new animation dependency, external assets, or scroll-driven React state was added.

Validation: final lint, production build, and sequential TypeScript check passed. Browser checks confirmed accordion selection, keyboard Enter for next outfit, matching catalog filtering (Occasion → two outfits), gallery scroll controls (scrollLeft increased from 0 to 494px), and manual pause (card transition duration 0s). No missing anchor targets, duplicate IDs, broken loaded images, or runtime console errors were found. Rendered viewport widths of 327px, 354px, 745px, and 1163px matched document widths. These widths reflect the browser's actual CSS viewport under responsive overrides. Native phone testing and performance profiling were not performed.

New screenshots: `desktop-color-stories.png`, `desktop-layered-looks.png`, `desktop-fanned-lookbook.png`, `mobile-layered-looks.png`, and `mobile-fanned-lookbook.png`.
