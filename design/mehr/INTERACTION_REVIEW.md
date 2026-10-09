# MEHR — motion and interaction refinement

Reviewed and refined 9 October 2026.

## Design direction

Preserve the warm photography, editorial type, asymmetric campaign cards, and personal-album lookbook. Motion should help visitors understand selection and movement through the collection. Keep interface feedback quick, give photographs more time to settle, and keep reading text crisp.

## Findings and refinements

| Finding | Refinement |
| --- | --- |
| View entrances briefly dimmed content already visible and blurred text. | Visible and deep-linked content stays still. Offscreen sections enter once with 14px of travel and opacity, without blur. Focus reveals content immediately. Server-rendered content remains visible without JavaScript. |
| Hero parallax competed with reading and mobile content overlapped the portrait. | Reduced image travel to 64px and text travel to 22px. The phone CTA sits in the lower-left space and the description has a narrower measure to clear the face. |
| Crossing the palette could trigger an unintended selection. | Added a 180ms hover dwell; clicked or keyboard-focused selections take priority. Arrow keys, Home, and End navigate the palette. |
| Phone accordion dimensions changed abruptly. | All panels keep the same 48px flex basis. Only flex growth changes, with 480ms settling. |
| Featured photographs abruptly changed stacking order. | The foreground photograph slides and crossfades over two decorative background cards. Details update with a short fade; swatches support arrow keys. Horizontal swipes change the outfit, including with motion paused. |
| Filtering could stretch product photographs during layout changes. | Animate card positions, keep photographs at their natural proportions, and move a shared selection marker between fixed-width tabs. |
| Outfit disclosures opened without visual continuity. | Added progressive native height/opacity transitions and a rotating disclosure icon. Browsers without intrinsic-size interpolation retain native disclosure behavior. |
| Lookbook controls stayed active at both boundaries. | Move by one card, show the visible range and scroll progress, and disable the unavailable direction. Keyboard arrows and Home/End work on the rail. |
| Pause missed native anchor scrolling and portaled menu transitions. | A document-level motion preference reaches scrolling, CSS, and the Base UI portal. The menu includes a motion control; system reduced motion is labeled explicitly. |

## Motion specification

- Interface feedback: 180ms.
- Content changes: 360ms.
- Editorial entrances and image hover: 520ms.
- Palette expansion: 480ms.
- Settling curve: cubic-bezier(0.22, 1, 0.36, 1).
- Exits are short; no autoplay or looping decoration.
- Parallax and gallery progress use motion values. React updates gallery position labels only when their values change.

Shared JavaScript timings live in `lib/motion.ts`; matching CSS tokens live in `app/globals.css`.

## Verification

- `npm run lint`, `npm run typecheck`, and the final production build passed.
- Production preview rendered on localhost:3001; Occasion filtering showed Baagh/Raat and featured selection showed matching Gulabi content.
- Palette Home selected Noor; swatch and catalog keyboard handlers were checked alongside pointer selection.
- Native outfit disclosure exposed fabric, included pieces, and the styled-look link.
- Phone menu opened with Close focused; Escape restored focus to its trigger.
- Manual pause set document scroll behavior to `auto` and the portaled menu transition to `0s`.
- A horizontal drag with motion paused changed Raat to Noor.
- Lookbook End reached looks 5–6 and disabled the right arrow; Home restored the beginning.
- Requested responsive widths 360, 390, and 820 rendered as CSS widths 327, 354, and 745 in the in-app browser. Document width matched the rendered viewport at each size.
- Phone palette measurements: five 48px rows and a 385px expanded panel, with 5px gaps.
- Production inspection found no missing anchor targets, duplicate IDs, broken loaded images, or production console warnings/errors.

Screenshots: `verification/refined-lookbook.jpg` and `verification/refined-mobile-hero.jpg`.

These checks used the in-app browser, including mouse-driven swipe simulation. Physical phone testing, OS reduced-motion changes, screen-reader testing, and performance profiling were not performed.
