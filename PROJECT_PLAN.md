# Pakistani womenswear storefront — research and implementation plan

Planning date: 9 October 2026. Status: first frontend implemented after user authorization. Video deferred by the user; hero now uses image parallax. See `design/mehr/verification/REPORT.md` for delivery checks.

## 1. Confirmed brief and scope

- Modern Pakistani editorial: ivory, ink, rich garment colors, oversized fashion imagery.
- MEHR name and ivory/ink/oxblood palette accepted. Calm, refined creative tone.
- Courtyard daylight accepted for campaign imagery; studio imagery also welcome.
- Original beautiful garments and attractive adult models with natural, realistic faces.
- Sapphire Sukoon Fall Winter '26 is the primary clothing and price reference.
- Accessible premium ready-to-wear. Propose a fictional brand and first collection.
- All campaign and product assets will need to be generated with AI.
- First delivery: one frontend landing page, collection sections, browsing links.
- Signature hero with scroll-controlled video, broad collection cards, parallax, polished hover and layout transitions.
- No cart, quick view, checkout, authentication, backend, or collection/product routes in this first delivery. Browsing links will navigate to the relevant on-page collection/product edit, with useful anchors and visible destinations.
- No source-code changes, dependency installation, asset generation, or deployment during planning.

## 2. Research findings and limits

### Contra Labs

Inspected the live page in a browser and scrolled through its opening scenes. Observed deep green atmospheric backgrounds, large serif text, spacious chapter transitions, pill navigation, clouds and an image-covered sphere. Some media reported playback failure in the inspection browser, so the full intended media choreography was not verified.

Design translation: coordinated scene changes, confident typography, and generous scale. Use garment color and fabric texture to connect our scenes. A fashion storefront needs a shorter introduction and a visible browsing action.

Source: [Creative Intelligence Report 2026](https://contralabs.com/creative-intelligence-report-2026).

### tinyPod

Inspected the hero and multiple scroll positions. Observed a cloud-backed opening, a centered product changing orientation across scroll positions, sparse copy, and persistent compact navigation with a prominent Buy action. These observations do not establish the implementation technique used by the source site.

Design translation: make one campaign look the visual anchor of the hero; move from a fabric detail to the complete silhouette. Keep the collection action available throughout.

Source: [tinyPod](https://thetinypod.com/).

### Instagram reel

Web text access failed, but the public reel opened in the browser after dismissing a sign-up overlay. The inspected frame showed a fashion storefront on a laptop, with an ivory background, editorial headings, clothing imagery, and rows of products. The reel is a presentation of a website; it does not verify the website's responsiveness or full interaction behavior.

Design translation: use it as a fashion presentation reference, while specifying mobile behavior ourselves.

Source: [genz.webdeveloper reel](https://www.instagram.com/reel/DdtucLfT7K9/).

### Pakistani storefront context

Sapphire's current page separates ready-to-wear and unstitched, uses campaign imagery and themed shopping edits, and exposes piece counts and prices. Khaadi's product listings expose fabric, embroidery/print descriptions, and PKR prices. These are useful conventions for our product captions; they are not evidence for our target customer or pricing strategy.

Sources: [Sapphire](https://pk.sapphireonline.pk/), [Khaadi](https://pk.khaadi.com/).

### User-selected Sukoon reference — 9 October refinement

Inspected [Sapphire Sukoon Fall Winter '26](https://pk.sapphireonline.pk/collections/uns-fall-winter-sukoon) in the live browser. The web text fetch returned an empty result state, but the live browser populated the collection. Visible examples included printed premium khaddar three-piece suits at PKR 4,290 and embroidered premium/light khaddar three-piece suits at PKR 5,590. These are observed examples, not a verified range for the entire collection.

Observed photography combines architectural and lived-in settings, warm brick/plaster, plants and pottery, and richly patterned garments. The opening looks include mustard, beige, and green, with coordinated dupattas and embroidery or botanical prints. Translate the warmth and textile detail into original MEHR designs. Use courtyard daylight for campaign storytelling and consistent studio lighting for garment detail views.

The reference is explicitly unstitched. The earlier user selection was ready-to-wear; category clarification is pending. Keep that distinction visible and do not present unstitched reference prices as evidence for real ready-to-wear pricing.

No customer analytics, conversion evidence, or user testing was supplied. The recommendations below are design proposals, not proven conversion improvements. Reference-brand imagery is for discussion only; our eventual assets will be original.

## 3. Proposed brand and collection

Accepted brand name for the prototype: **MEHR**. Working campaign: **The Living Edit**. Brand-name availability has not been checked.

Brand idea: expressive Pakistani clothes for everyday moments, with campaign-level presentation. Warm and confident, with attention to material and silhouette.

Proposed customer: women seeking polished everyday and light occasion outfits. Age and geography should stay broad until the user defines them.

Proposed prototype assortment: 8 fictional looks across Everyday, Elevated, and Occasion edits. Restrained silhouettes, convincing textile construction, and deliberate color stories. Category remains ready-to-wear provisionally, pending clarification about the unstitched reference. Replace the earlier PKR 6,000–18,000 proposal with Sukoon-inspired prototype price points: PKR 4,290 for printed looks and PKR 5,590 for embroidered looks. These are fictional display values reflecting the user's preference, not a commercial ready-to-wear pricing recommendation. Do not infer a separate expensive occasion tier.

Suggested garment palette: ivory, ink, mustard/rust, sage/deep green, muted blue, plum, tea pink, and beige. Develop original botanical prints, delicate embroidery, coordinated trousers, and gracefully draped dupattas. Favor two- and three-piece Pakistani ensembles; reserve understated embellished looks for the Occasion edit. Final category labels and construction depend on category clarification and approved image references.

Hero copy candidate: **“Everyday, beautifully.”** Supporting text: “Pakistani ready-to-wear. Made for your own rhythm.” Primary action: “Explore the collection.” Secondary action: “Skip to the edit.” Avoid manufacturing, sustainability, handcraft, delivery, and quality claims until the real brand can substantiate them.

## 4. Visual direction

### Primary recommendation: modern editorial

- Canvas: warm ivory `#F5F1E8`.
- Text: ink `#191916`.
- Supporting surface: sand `#E6DDCF`.
- Campaign accent: oxblood `#6B2332`, with sage or rust coming from photography.
- Colors are starting points; evaluate contrast in actual designs.
- One expressive editorial serif for major headings, paired with the existing Inter for navigation, captions, and prices. Shortlist licensed/self-hostable fonts during design review.
- Proposed desktop hero headline: fluid 80–144px; mobile 44–64px. Body text generally 16–18px. Readability takes priority over these initial ranges.
- Desktop: 12-column composition, roughly 48–64px outer gutters, broad near-full-width campaign panels. Mobile: 16–20px gutters, intentionally recomposed crops and stacking.
- Larger collection panels may use 16–24px corner radii; product images and editorial details can use smaller radii. Avoid making every section the same card shape.
- Sparse borders and restrained shadows. Clothing, image composition, and type carry the identity.

Accepted photographic direction:

1. **Courtyard daylight**: warm plaster/brick, architectural shade, restrained plants or pottery, original patterned Pakistani ensembles. Primary campaign environment.
2. **Quiet studio**: warm ivory or sand backdrop, soft directional light, natural model poses, accurate textile color. Product references and supporting editorial imagery.

Creative tone is calm and refined. Use slow fabric movement, small positional shifts, and generous breathing room. Replace the earlier dramatic after-hours concept with the quiet studio treatment. Attractive adult models should have believable anatomy, natural skin texture, varied facial features, and consistent identity across reference-based shots. Styling and expressions should feel warm and composed.

These are our proposed visual treatments, not claims about a reference brand.

## 5. Page composition

| Order | Section | Composition and content | Interaction | Mobile adaptation |
| --- | --- | --- | --- | --- |
| 1 | Header | MEHR wordmark, collection anchors, About anchor, Explore action | Clear focus states; surface changes after hero | Compact wordmark and accessible menu; no redundant shopping icons |
| 2 | Campaign hero | Campaign film, large short headline, collection CTA | Sticky scroll sequence; persistent skip action | Separate portrait framing; shorter sticky range; fallback poster |
| 3 | Collection gateway | One broad editorial panel plus two supporting panels for the three edits | Small image drift and restrained hover zoom | Vertical stack; all labels/actions visible without hover |
| 4 | New collection | 6–8 product tiles with name, piece count, fabric, PKR price | Collection tabs filter in-page content; product links lead to matching lookbook entries | Two columns when legible; full-width alternative at narrow widths |
| 5 | Fabric story | Large textile macro beside a full outfit and concise factual caption | Controlled background parallax | Stacked images, reduced travel |
| 6 | Shop the edit | 3 large outfit stories, each linked to its corresponding displayed items | Visible numbered look links; optional pointer hover treatment | Visible buttons; no tiny floating hotspots |
| 7 | Brand note | Short brand introduction and campaign portrait | Simple reveal | Same readable content order |
| 8 | Footer | Brand mark, back-to-top, collection anchors, prototype note | Native anchors | Stacked links and generous tap areas |

Newsletter, reviews, shipping badges, social links, and store-policy claims are omitted until there is real content and a real destination. Product entries are fictional prototype content. All visible browsing actions must work within the page; no dead links to unbuilt routes.

## 6. Signature hero storyboard

Proposed film: one coherent 6–8 second visual movement, muted, with no hard cuts. A camera pulls back from an embroidered sleeve or dupatta edge to the full outfit in an architectural setting. The image must be striking as a still before motion is added.

Initial desktop scroll region: approximately 220–280svh total, with a sticky viewport. This is a prototype parameter, not a fixed requirement. Mobile: approximately 140–180svh if device tests support it; otherwise a concise poster/film presentation with normal flow.

| Scroll progress | Visual beat | Text and action |
| --- | --- | --- |
| 0–15% | Approved poster establishes fabric and lighting; immediate readable page | Brand, headline, Explore and Skip already usable |
| 15–65% | Video time follows scroll; camera reveals model and outfit | Headline gently recedes; collection label enters |
| 65–85% | Full silhouette is held long enough to understand | Primary collection action remains stable |
| 85–100% | Hero releases into ivory collection section | Match film colors/crop to the next panel for continuity |

Scrolling upward reverses the reveal. Native scrolling remains intact. Do not require completing the film to browse. A skipped sequence goes directly to the collection. No essential text is baked into video.

## 7. Video feasibility and rendering decision

Use a directly served video file so playback time can be controlled. Motion's `useScroll` and `useTransform` provide scroll progress and visual transforms; a dedicated media controller maps progress to HTMLMediaElement `currentTime`. Setting `currentTime` seeks rather than providing guaranteed frame-perfect playback.

Sources: [Motion scroll animation](https://motion.dev/docs/react-scroll-animations), [Motion useScroll](https://motion.dev/docs/react-use-scroll), [MDN currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime).

First technical experiment after design approval:

1. Use an approved candidate clip with desktop and portrait crops.
2. Compare seek-friendly H.264 encodes with different keyframe intervals. Frequent keyframes can improve seeking but increase size.
3. Wait for metadata and a usable seekable range before enabling scrubbing. Keep the poster available throughout startup/failure.
4. Coalesce requested seeks; avoid repeatedly assigning playback time while a prior seek is pending. Do not update React state on every scroll frame.
5. Test rapid downward scroll, reverse scroll, direct anchor navigation, resize, low-power behavior, blocked playback, and slow loading.
6. Compare actual iOS Safari and Android Chrome behavior. Desktop emulation alone is insufficient.
7. If seeking remains visibly uneven, compare a bounded image sequence as a desktop alternative. Evaluate decoded-image memory and transfer size before adopting it; do not eagerly load a large sequence on mobile.
8. If neither option meets the quality budget, use the poster with a short muted film on capable devices and preserve the same composition. Discuss that tradeoff before locking the hero.

A standard background video with parallax is simpler but does not provide the same scroll-controlled reveal. Keep that distinction explicit when reviewing the experiment.

## 8. Motion system

| Element | Proposed behavior | Initial specification |
| --- | --- | --- |
| Intro text | Short opacity/position entrance | 400–650ms; 12–20px travel; minimal stagger |
| Collection panels | Image travels within clipped frame | 24–64px desktop; 8–20px mobile; generous crop margin |
| Panel hover | Image scale and arrow travel | Scale about 1.025; arrow 4px; 250–350ms |
| Product images | Alternate approved view on hover/focus where helpful | Short crossfade; touch gets visible view control only if needed |
| Collection filters | Selected indicator and product layout transition | About 250–400ms; no collapse or scroll-position jump |
| Lookbook | Large imagery with offset composition | Small scroll-linked movement; text stays readable |
| Header | Background transition after hero | About 180–250ms |

Use CSS for simple hover/focus effects and Motion for coordinated scroll/layout transitions. Keep one primary scroll spectacle; other sections support it. Prefer transform/opacity animation. Avoid repeated large blur, heavy shadows, cursor replacement, and gratuitous motion on controls.

Native scrolling is the initial choice. A smooth-scroll library is an optional later experiment only if native movement feels insufficient and anchor, sticky, touch, and keyboard behavior all remain dependable.

Reduced-motion behavior is explicit: static campaign poster, no video scrubbing, no parallax, and immediate or brief opacity transitions. A site-level pause-motion control should stop ambient movement without blocking collection navigation.

Source: [Motion reduced-motion guidance](https://motion.dev/docs/react-use-reduced-motion).

## 9. AI asset production plan

Do not generate assets during this planning phase. Future generation starts after creative direction review.

### Asset sequence

1. Lock an art bible: location, lighting, palette, casting, garment silhouettes, lens perspective, retouching, and crop rules.
2. Generate a small contact sheet exploring courtyard daylight versus a studio treatment. Review it before producing the full catalog.
3. Establish each outfit's canonical front, back, and fabric detail. Assign stable outfit IDs, garment specifications, and approved reference images.
4. Generate campaign stills from those references. Use one approved model/look/location combination for the hero.
5. Generate video from the approved campaign still/reference where supported by the selected video tool. Reject cloth morphing, drifting embroidery, implausible hands, and inconsistent garments.
6. Create desktop and mobile crops from approved assets. If one source cannot support both, generate a matching portrait composition.
7. Compress delivery derivatives and create the poster, alt text, focal-point metadata, and an asset manifest.

### Proposed asset inventory

- 1 hero campaign film, with landscape and portrait delivery versions.
- 2 matching hero posters.
- 3 collection campaign images.
- 8 product looks × 3 consistent views = 24 product references/delivery images.
- 2–3 textile macros.
- 3 lookbook compositions and 1 brand portrait; reuse approved campaign shots where appropriate.

The first landing page only needs a selected subset of the product views. Generate the hero test assets and a few representative garments before committing to the entire asset inventory.

### Campaign prompt brief

Calm Pakistani womenswear editorial, architectural courtyard with warm plaster or brick and soft directional daylight, attractive adult Pakistani/South Asian model with natural skin texture and composed expression, approved original botanical-print or delicately embroidered outfit, accurate kurta/trouser/dupatta construction, natural fabric drape, coherent embroidery, realistic anatomy, full outfit visible, deliberate negative space for headlines, no embedded text or logos. Pair with studio garment references on warm ivory backgrounds. Use the approved garment and model reference rather than relying on text alone for consistency. Do not reproduce a Sapphire garment or a particular model's likeness.

Product imagery needs neutral, consistent lighting and accurate garment colors; campaign imagery can be more expressive. All depicted products remain fictional until matched to an actual catalog. Maintain provenance, tool/provider, prompt, references, generation settings where available, and usage terms in the manifest. AI tooling, cost, and video access will be checked at the asset-production stage; no provider access is assumed now.

## 10. Technical implementation plan

Inspected setup: Next.js 16.3.6, React 19.3, TypeScript, Tailwind 4, shadcn base-nova, Base UI, Lucide, Inter, and a starter button. Motion is not present. No assets were found in the inspected public inventory.

Read the installed Next.js guides for Server/Client Components, images, fonts, and videos. Implementation must follow the installed version. Its Image documentation deprecates `priority`; choose the documented loading/fetch-priority/preload behavior according to each image's role.

- Keep the page's content and static section composition in Server Components.
- Isolate hero scrubbing, collection filtering, menu state, and coordinated motion in Client Components.
- Use the current Motion for React package/import path (`motion/react`), subject to the dependency check at implementation. This fulfills the requested Framer Motion approach without installing two animation libraries.
- Use shadcn/Base UI for accessible interactive primitives; custom art direction for fashion layouts.
- Use `next/image` with responsive sizes, fixed aspect ratios, meaningful alt text, and approved focal points.
- Use `next/font` for the approved font pair. Keep the storefront palette controlled; revisit the starter theme toggle during design implementation.
- Define typed local collection/look data with IDs, category, garment name, piece count, fabric, display price in PKR, image views, and anchor destinations. Prices can be represented as numbers and formatted consistently.
- Keep media configuration and motion ranges centralized, with desktop, mobile, and reduced-motion variants.
- Reserve layout dimensions before assets load. Poster and headings render before the video controller initializes.
- Avoid an animation framework, 3D runtime, or smooth-scroll dependency beyond Motion unless a specific approved scene requires it.

Proposed future organization: `components/storefront` for page sections, `components/motion` for reusable motion wrappers and the video controller, `lib/storefront` for typed local content, and `public/media` for approved derivatives. This is a proposed structure only; no directories or source files have been created.

Source: [Motion installation and Next.js integration](https://motion.dev/docs/react-installation). Installed-version Next.js guidance is under `node_modules/next/dist/docs/` in this project.

## 11. Quality budgets and acceptance criteria

Initial media goals, to be measured and revised after the hero experiment: hero poster around 150–300KB at the delivered size; mobile film around 2–4MB; desktop film around 4–8MB. These are project budgets, not encoding guarantees. Avoid loading all campaign/video assets at startup.

Performance targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. These are Core Web Vitals good thresholds evaluated at the 75th percentile in field data. Prelaunch lab checks can identify regressions but cannot prove field performance.

Sources: [Web Vitals](https://web.dev/articles/vitals), [Video performance](https://web.dev/learn/performance/video-performance).

Acceptance checklist:

- Approved desktop and mobile compositions retain the complete garment and readable text.
- Hero loads with useful content immediately; skip and Explore work before media loads.
- Scroll down/up remains responsive and the hero releases cleanly.
- No blank hero, broken images, motion-induced layout jumps, or visible video decoding stalls in the agreed device matrix.
- Reduced motion and pause-motion behavior work; essential content remains available with motion disabled.
- Keyboard menu, filters, links, and focus states work; hover is not required to discover actions.
- Contrast meets WCAG AA; aim for at least 44px touch targets.
- Anchors land below the sticky header; collection filters have empty-state handling and do not strand a selected look link.
- Verify narrow phones around 360px, common phones/tablets, laptops, and large desktop views.
- Run project lint, typecheck, and production build after implementation; verify in the browser and on actual mobile devices when available.
- No prototype action claims that an order, subscription, or inquiry was sent.

## 12. Sequenced delivery and review points

| Phase | Deliverable | Dependency / decision before proceeding |
| --- | --- | --- |
| A — Concept | Brand proposal, visual direction, page story, motion storyboard | User feedback on name, palette, and garment range |
| B — Asset exploration | Small AI contact sheet and garment references | Approved location, styling, casting, and crop rules |
| C — Design | Desktop/mobile hero, collection panels, product tiles, full page layout | Review static hierarchy and browsing destinations |
| D — Hero feasibility | Scroll-video experiment using approved media | Select encoder/renderer and mobile fallback from measured results |
| E — Frontend | Responsive page, typed demo content, anchor browsing | Prior concept and technical decisions settled |
| F — Motion polish | Hero, parallax, filters, hovers, accessible motion controls | Device checks and readable content pacing |
| G — Verification | Performance, accessibility, responsive QA, build checks | All page actions and fallbacks verified |

Asset creation and design review are the first substantial dependencies. A reliable schedule and generation budget should be estimated after the contact-sheet and hero experiment. Deploying or building shopping infrastructure is outside this phase.

## 13. Decisions and next review

Confirmed: MEHR, modern Pakistani editorial, ivory/ink/oxblood interface, calm tone, courtyard campaign with studio supporting imagery, original AI garments and attractive realistic adult faces, landing-page-only scope, Sukoon clothing/price inspiration. The user endorsed the overall plan.

Pending: retain ready-to-wear, switch to unstitched, or include both. The linked reference is unstitched, so this affects product captions, garment reference briefs, and price interpretation.

The user subsequently authorized asset generation and the full landing-page implementation, selected the ivory/oxblood courtyard hero, and deferred paid video generation. The implemented first iteration retains ready-to-wear labels from the earlier brief, uses six original concept outfits and sample prices, and includes image parallax, in-page browsing, outfit details, a lookbook, and a brand story. Video remains a future enhancement; no cart or order processing is included.
