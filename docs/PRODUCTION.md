# Production guide

MEHR is a public concept catalog, with local catalog data and AI-created imagery. It supports browsing, filtering and viewing garment details. It does not accept payments or orders. Publish it as a concept site; a transactional store requires a real catalog, inventory, checkout, fulfillment and customer policies.

## Requirements and setup

Use Node.js 22 LTS and npm. Commit `package-lock.json` and use `npm ci` for reproducible installs. No third-party credentials, database or remote font services are required.

Copy `.env.example` to `.env.local` for local configuration. Configure the same variables in your hosting platform before the build:

| Variable | Production | Preview/local |
| --- | --- | --- |
| `SITE_URL` | Your public HTTPS origin, without a path, query or credentials | Leave empty, or use the production origin for sharing previews |
| `SITE_INDEXABLE` | `true` when the public site should appear in search | `false` (default) |

These settings are evaluated during the build. Rebuild after changing them. Invalid origins fail the build. Without an origin, social images and canonical metadata are omitted. Indexing requires both a valid origin and the literal value `true`. Preview builds emit noindex metadata, disallow crawling and have an empty sitemap. Robots directives are crawler hints, not access controls; use host authentication for private previews.

## Release

1. Run `npm ci`.
2. Set `SITE_URL` to the real public domain and `SITE_INDEXABLE=true` for the public release.
3. Run `npm run check` to lint, typecheck and build.
4. Run `npm run start` to preview the production build on port 3000. A Node-compatible Next.js host can use `npm run build` and `npm run start`; managed Next.js hosts detect these automatically. Set `PORT` if your platform requires another port.
5. Verify desktop and mobile navigation, catalog filters, clear/reset, empty results, product details, footer links and reduced-motion preferences. Category and collection entry links start a fresh selection; toolbar filters can be combined.
6. Check `/robots.txt`, `/sitemap.xml`, canonical and social image URLs against the public domain. Confirm media loads and the site uses HTTPS.
7. Review all concept copy, AI imagery disclosure, asset usage rights and illustrative pricing with the content owner. Keep disclosures accurate if publishing the concept as delivered.

The build uses the supported Webpack option; the development command uses the default bundler. Image optimization requires the Next.js server (this project is not configured as a static export). Place a TLS reverse proxy or managed HTTPS service in front of self-hosted deployments. The application disables the framework signature header and sends nosniff, frame denial, referrer and restricted browser capability headers.

## Maintenance

- Edit catalog records and filters in `lib/storefront.ts`.
- Edit brand/editorial sections in `app/page.tsx` and `components/storefront/`.
- Keep optimized images in `public/media/`; update their descriptions and responsive sizes when replacing assets.
- Local fonts live in `app/fonts/`, with their license files alongside them.
- Styling lives in `app/globals.css` and `app/card-sections.css`.
- Motion respects the operating system preference. The mobile menu retains a manual pause control; the footer has no motion control.
- Keep development originals in `design/` out of the served `public/` directory.

Run the release checks after content, dependency or configuration changes. Review dependency updates regularly and validate them before release. Keep environment files out of source control; `.env.example` is intentionally tracked. Monitor hosting errors and real-user performance after launch. Roll back to the previous successful deployment if a release breaks navigation, rendering or image delivery.

## Scope of verification

Automated lint, TypeScript and production build checks catch source and compilation problems. Production HTTP smoke checks cover routes, metadata and headers. Browser interaction checks cover the catalog and navigation. Hosting credentials, domain routing, TLS, real traffic performance and commerce integrations must be verified in the deployed environment; this repository does not provision them.
