# MEHRE — For every chapter, beautifully.

A responsive Pakistani womenswear concept landing page, built with Next.js 16.3, React 19, Tailwind 4, shadcn/Base UI, and Motion for React.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```bash
npm run build
npm run start
```

The build script uses Next.js's supported Webpack option because Turbopack's CSS workers encountered local port-binding restrictions in the development environment. Development continues to use Next.js's default bundler. No API keys, video subscriptions, or external font requests are required to run the page.

## Features

- Art-directed desktop and mobile campaign hero with subtle image parallax.
- Five garment categories: plain suits, printed suits, embroidered suits, lehengas, and light ivory bridal.
- Three named collections: The Living Edit, Rang, and Ivory Vows, plus a dedicated bridal feature.
- Twelve concept pieces with independent category, collection, and festive filters, active filter removal, reset, and empty states.
- Product-specific descriptions, included garments, fabric concepts, illustrative prices for existing looks, and preview labels for new designs.
- Matching embroidery photography, one curated lookbook, and a broader brand story.
- Accessible Base UI mobile navigation, skip link, native product disclosures, and visible focus states.
- System reduced-motion support and a manual motion pause control in mobile navigation (no footer toggle).
- Optimized WebP assets and locally hosted Cormorant/Inter WOFF2 fonts.

## Content and assets

Catalog data is in `lib/storefront.ts`; static sections in `app/page.tsx`; interactive components in `components/storefront/`. Styling is in `app/globals.css` and `app/card-sections.css`.

Delivered images are in `public/media/`. Full-resolution generation originals, prompts, provenance and planning documents are in `design/mehr/` and `PROJECT_PLAN.md`. The premium expansion adds thirteen generated campaign assets; their originals are in `design/mehr/assets/premium/` and prompts in `design/mehr/PREMIUM_IMAGE_PROMPTS.md`. The earlier contact sheet is preserved for reference.

This is a frontend concept collection: prices, garment descriptions and fabric captions are sample content. There is no cart, checkout, inventory service, newsletter submission or order processing. Video is deferred by the user; image parallax is the current hero treatment.

Deployment settings and release steps are in [docs/PRODUCTION.md](docs/PRODUCTION.md). Configure `SITE_URL` and `SITE_INDEXABLE` at build time; canonical URLs, social sharing, robots and sitemap use those settings. Unconfigured builds and previews default to noindex. No deployment has been performed.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Current production readiness results are in [docs/VERIFICATION.md](docs/VERIFICATION.md). Earlier browser verification notes and screenshots are saved in `design/mehr/verification/`.

Motion and interaction design rationale, implemented refinements, and verification evidence are recorded in `design/mehr/INTERACTION_REVIEW.md`.
