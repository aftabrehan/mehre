# Production readiness verification

Verified locally on 9 October 2026 with the production Next.js server.

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; home, robots and sitemap prerendered.
- HTTP: home, hero media, robots and sitemap returned 200; unknown route returned 404.
- Headers: nosniff and frame denial present; X-Powered-By absent.
- Default configuration: noindex metadata, robots disallow all, empty sitemap; no footer motion toggle.
- Configuration validation: HTTPS origin enables indexing when explicitly requested; HTTP and URLs with paths are rejected.
- Browser: 12 initial pieces; conflicting bridal/Living Edit filters showed zero results and the empty state; footer Rang link reset category to all and showed four pieces; Clear all restored 12 pieces; product disclosure opened.
- Mobile at 390 × 844: menu opened, navigation closed it, manual motion pause changed to Resume motion and set the document reduced-motion attribute; no horizontal page overflow observed.
- Browser console: no warnings or errors observed during desktop filter checks.
- Footer visually inspected with the animation toggle removed.

The operating-system reduced-motion behavior remains implemented in Motion and CSS; this run tested the manual pause path. Public-domain metadata, indexing, TLS, hosting configuration and real-user performance need a deployed release check. No deployment or commerce integration was performed.

A fresh dependency installation was not verified: the offline npm cache was missing an optional Tailwind WASM package. The existing installed dependencies were used for all checks; the supplied lockfile was preserved and its root project name synchronized with `package.json`. Run `npm ci` with registry access in CI before release.

## Accessibility and readability refinements

- Small 7–11px labels and captions increased to at least 12px using rem units; body copy increased to 14–15px and catalog selects to 16px on mobile and desktop.
- Hero text uses stronger light gradients; transparent-header navigation has local light backing positioned away from the models; white image captions use dark backing.
- Keyboard focus uses a 3px outline with a light outer backing, plus a system-color outline in forced-color mode.
- Each product disclosure has a product-specific accessible name; decorative color swatches are hidden from assistive technology.
- Sticky-header anchor spacing was corrected; the mobile hero reserves more room for larger text and faces.
- Browser checks: 320px layout without horizontal page overflow, 16px selects, skip link focuses main, Escape restores focus to the mobile navigation trigger, and product disclosure names appear in the accessibility tree.
- Calculated solid palette contrast: primary text/cream 13.79:1, muted text/cream 5.53:1, light text/oxblood 10.12:1, white/dark caption backing 15.28:1 (rounded; translucent/photo combinations vary).

These are targeted improvements and local browser checks, not a complete accessibility conformance audit. Assistive-technology, user text-spacing, zoom and real-device checks remain appropriate before release.
