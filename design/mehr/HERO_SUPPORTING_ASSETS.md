# MEHR hero supporting assets

Created 9 October 2026 with the built-in image generator. Both images reference `assets/mehr-hero-courtyard-ivory-v1.png`. Source originals are retained in the generator output directory; project copies are listed below.

## Mobile hero

`assets/mehr-hero-courtyard-ivory-mobile-v1.png`

Portrait composition, full model and shoes visible, quiet upper wall for page copy. Face, outfit palette and overall embroidery placement visually match the landscape direction. The composition is a candidate; eventual mobile layout must use an explicit focal point and check cropping at real viewport sizes. Do not stretch the portrait into the desktop aspect ratio.

## Embroidery detail

`assets/mehr-ivory-embroidery-detail-v1.png`

Landscape close-up of cuff, dupatta and hands, with visible textile grain and raised embroidered threads. It matches the ivory/oxblood palette and courtyard light. The generated flower shapes and border motifs are more explicit than the landscape source and are not verified stitch-for-stitch matches. Treat this as a fabric-story image and video mood reference, not an exact matched starting frame. Use the canonical landscape hero as the main garment reference for video; inspect continuity in generated footage before accepting it.

## Proposed video brief

One calm 6–8 second courtyard camera pullback from cuff/dupatta detail to the complete approved hero composition. Preserve adult model identity, garment shape, motifs, warm sunlight, and architecture. Minimal natural breathing and fabric movement; no hard cuts, speaking, text, new props, or dramatic gestures. Generate landscape and portrait compositions separately if needed. Review garment/face continuity and encode/seek behavior before browser integration. No video has been generated yet, and no website source has been implemented.

## Mobile generation prompt

```text
Use case: identity-preserve.
Asset type: mobile portrait campaign hero photograph for MEHR.
Reference: provided landscape hero is the canonical identity, garment and setting reference.
Create ONE high-resolution portrait photograph approximately 2:3 for mobile web. Recompose the same courtyard campaign for portrait orientation, preserving the exact same adult Pakistani woman's face, warm smile, dark wavy hair, ivory kurta and trousers, oxblood botanical embroidered neckline, cuffs and hem, ivory dupatta with oxblood borders, and neutral embroidered shoes. Keep the fabric and embroidery detailed and consistent with the reference.
Full figure head to shoes entirely visible, model standing near lower-right/center-right of portrait with natural hands near waist. Reserve the upper 20–25 percent and some upper-left warm plaster wall as quiet negative space for later website headline; do not put text in the image. Warm plaster courtyard, matching arch, restrained flowering foliage to right, terracotta pot, dappled daylight. Calm sophisticated editorial photography, natural skin and anatomy. Outfit should remain prominent and readable on a phone. No collage, no typography, no logos, no watermark, no changed garments, no new accessories. One fully rendered photographic image, not the landscape image pasted onto a portrait background.
```

## Detail generation prompt

```text
Use case: precise-object-edit.
Asset type: MEHR garment-detail campaign still and visual reference for a future video opening shot.
Input reference: the provided approved ivory/oxblood courtyard hero is the canonical garment reference.
Primary request: create ONE standalone landscape 16:9 photorealistic tight close-up from the SAME fashion shoot, focused on the ivory sleeve cuff and adjacent embroidered ivory dupatta near the model's waist. Reframe the camera to the fabric; preserve the original oxblood botanical embroidery design, cuff border construction, ivory fabric tone, dupatta edge and woven textile appearance. Show genuine-looking stitched threads with soft raised texture rather than a printed decal, fine natural fabric grain and folds. A small portion of naturally posed hand may enter the frame to establish scale, with realistic anatomy, but the fabric is the subject and no face appears.
Lighting: same soft warm courtyard daylight; subtle warm plaster blurred in the background, realistic restrained depth of field so the key embroidered cuff and dupatta details are sharp. Calm premium Pakistani fashion editorial, no extra garments or accessories, no overly saturated red, no glitter, no cartoon or plastic texture.
Composition: embroidery occupies the central and right portion, softly draped ivory textile crosses the frame, photograph should plausibly be the starting close shot before a camera pulls back to the approved full outfit. It is a detail reference, not a complete animation or guaranteed matching video frame.
Constraints: one photograph, no collage, no embedded text, no border, no watermark. Preserve the reference garment motifs and border rhythm as closely as possible; do not invent another outfit or change the embroidery color.
```
