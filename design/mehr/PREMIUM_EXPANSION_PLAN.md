# MEHR premium storefront expansion — implementation plan

Prepared 9 October 2026. Status: approved and implemented. Verification: `verification/PREMIUM_REPORT.md`.

## Review findings

Reviewed the live local storefront on desktop and at a mobile viewport, together with its content and component structure.

The warm ivory and oxblood palette, Cormorant typography, courtyard photography, and generous spacing provide a strong foundation. Keep these brand cues.

The range currently contains six printed or embroidered suit ensembles. Everyday, Elevated, and Occasion describe moods rather than garment categories. The same garments recur in the category cards, color accordion, catalog, layered selector, and lookbook. Repetition lengthens discovery without communicating a broader range. Most copy emphasizes everyday dressing, so adding bridal imagery alone would leave the brand story inconsistent.

The website is currently a concept showroom with sample prices and AI-created imagery. New content must preserve that clarity until actual merchandise and services are supplied.

## Design direction

Evolve MEHR into a quiet Pakistani fashion house spanning everyday dressing, celebration, and bridal moments. Preserve warmth and cultural specificity while introducing stronger hierarchy and more distinct garment silhouettes.

Use warm ivory surfaces, charcoal text, oxblood actions, and restrained champagne accents for bridal. Keep the existing serif/sans pairing; use italic emphasis selectively. Favor precise image framing, consistent card proportions, fine rules, and generous spacing. Avoid decorative treatments that compete with garments. Keep motion subtle and respect reduced-motion preferences.

## Content architecture

Separate garment categories from named campaign collections. Each product has its own category and collection membership; choosing one must not silently reset the other. Provide clear active-filter labels and a reset action.

Proposed categories: Plain Suits, Printed Suits, Embroidered Suits, Lehengas, and Light Ivory Bridal. Festive is an occasion filter spanning embroidered suits and lehengas, rather than a duplicate garment category. Retain existing printed and embroidered looks; add plain suit concepts where needed to make the proposed category accurate.

Proposed collection names are working titles:

| Collection | Role | Visual direction |
| --- | --- | --- |
| The Living Edit | Everyday suits | Warm courtyard light, cotton textures, familiar colors |
| Rang — The Celebration Edit | Festive ensembles and lehengas | Muted rose, sage, maroon, movement and richer detail |
| Ivory Vows — The Bridal Edit | Light ivory bridal ensembles | Tonal embroidery, pearl and champagne tones, airy dupattas |

Navigation: Categories, Collections, Bridal, Our Story. Category and collection links lead to the corresponding filtered catalog. Bridal leads to its dedicated feature.

## Homepage sequence and copy

1. Campaign hero: one strong photograph, heading “For every chapter, beautifully.” Supporting line: “Pakistani suits, celebration lehengas, and light ivory bridal ensembles.” Actions: “Explore collections” and “Discover ivory bridal.”
2. Browse by category: a compact image grid with explicit garment names and full silhouettes. Move this discovery step close to the hero.
3. Collections: three editorial campaign cards, each with its own image, brief description, and “Explore collection” action. Keep this distinct from the product catalog.
4. Ivory bridal feature: an asymmetric full-length portrait and detail crop. Heading: “A softer kind of bridal.” Describe the visible silhouette, palette, and embroidery. Action: “Explore Ivory Vows.”
5. Selected pieces: a curated catalog covering the expanded range, with category and collection controls and an accurate result count. Product cards show name, garment type, color, included pieces, and verified or clearly identified sample prices.
6. Details and craftsmanship: fabric, embroidery, drape, and finishing photographs with specific captions. Claims such as hand embroidery or made-to-order require real product evidence.
7. One concise lookbook: retain a single editorial browsing treatment and retire the redundant color accordion/layered selector from the homepage.
8. Brand story and footer: broaden the story beyond everyday dressing; provide category and collection navigation and retain the concept disclosure.

Use poetic copy for campaign headlines and concrete copy for browsing controls and product information. Do not introduce appointment, shipping, availability, or purchase promises without working services and confirmed details.

## Image production

After plan approval, use image generation to create a cohesive campaign set: one desktop hero and separately composed mobile hero, three collection covers, two lehenga looks, two light ivory bridal looks, two plain suit looks, and two garment-detail photographs. Derive category crops from suitable source images where silhouette clarity is preserved.

Art direction: warm Pakistani architectural settings, natural skin texture, restrained styling, consistent light, believable embroidery and drape. Lehenga images must clearly show skirt volume; bridal images must distinguish tonal ceremonial detail from the existing ivory/oxblood everyday suit. Reserve negative space for hero text and keep all text outside generated images.

Review anatomy, jewelry, embroidery consistency, garment seams, and category accuracy. Related portraits and close-ups must depict matching outfits. Generated imagery remains concept content, not a factual representation of inventory. Save originals and optimized WebP delivery assets with descriptive filenames.

## Implementation order

1. Finalize taxonomy, section hierarchy, copy, and asset briefs from this plan.
2. Generate and visually review the campaign assets before integrating them.
3. Expand `lib/storefront.ts` with stable category/collection identifiers and explicit product fields; remove assumptions that every item is a three-piece suit or that the range always contains six looks.
4. Update header/navigation, hero, category discovery, collections, bridal feature, catalog, lookbook, and footer. Refactor browsing state in `components/storefront/motion.tsx` so links select the intended category/collection.
5. Refine `app/globals.css` and `app/card-sections.css` for the new hierarchy and mobile layouts. Update metadata to describe the broader range.
6. Validate and capture final desktop/mobile evidence. Read relevant bundled Next.js guides before writing application code, as required by AGENTS.md.

## Completion criteria

The expanded categories and three named collections are easy to find; every browsing action shows the intended results; bridal has a distinct visual identity; images show the correct garment silhouettes; product descriptions are specific and internally consistent; no hardcoded six-look counts remain in expanded components.

Verify at 360, 390, 768, and 1440 CSS pixels: readable text, no horizontal overflow, appropriate garment crops, and accessible mobile navigation. Check keyboard interaction, visible focus, contrast, at least 44px primary touch targets, reduced motion, anchor integrity, empty-filter feedback, and image loading. Run lint, production build, and sequential TypeScript checking, then inspect the browser for runtime errors. Retain optimized image delivery and prioritize only the hero asset.

Implementation completed following user approval. See `verification/PREMIUM_REPORT.md` for results and limits.
