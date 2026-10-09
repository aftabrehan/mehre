# MEHR hero video production package

Prepared 9 October 2026. Status: video deferred by the user because paid generation is unavailable. The frontend has been implemented with image parallax. Reference assets and prompts are retained for future video production; no video was generated and no generation credits were spent.

## Canonical references

- Landscape: `assets/mehr-hero-courtyard-ivory-v1.png`.
- Portrait: `assets/mehr-hero-courtyard-ivory-mobile-v1.png`.
- Textile mood reference only: `assets/mehr-ivory-embroidery-detail-v1.png`. This close-up contains motif variations and must not be treated as an exact start frame to interpolate into the hero.

## Creative specification

One quiet continuous courtyard fashion shot. The intended final sequence starts close to embroidered fabric and pulls back to the approved full outfit. Use the canonical hero as the primary visual reference for model identity, garment construction, embroidery, lighting, and architecture. Do not join the independently generated detail image and hero with a morph transition.

First feasibility clip: generate a restrained push-in from the canonical full outfit toward cuff/dupatta detail. This allows the approved hero to be the input/start frame in an image-to-video workflow. If the resulting shot works equally well backward, reverse a delivery copy to obtain the intended detail-to-full reveal. Reversal is a candidate, not a guarantee: reject backward-looking hair, fabric, blinking, or body motion. Prefer a native pullback with an approved final-frame reference if the chosen provider supports it. Confirm provider input semantics before submitting.

- Target duration: about 8 seconds, subject to provider options.
- Desktop target: landscape 16:9; request at least 720p for feasibility, then evaluate final resolution.
- Mobile target: portrait; supported provider ratio may differ from the 2:3 reference. Recompose via the image-generation tool if needed, retaining the full silhouette and copy space.
- Sound: no music or speech. Muted website delivery.
- Motion: one slow stabilized camera movement; minimal natural breathing and dupatta movement.
- Final reveal: full head-to-shoes silhouette, subject on right, broad quiet plaster wall on left.
- Text: all website typography remains outside video.

## Generation prompts

Ready-to-submit landscape and portrait prompts are saved in `video-desktop-prompt.txt` and `video-mobile-prompt.txt`. They describe the first input-frame feasibility approach. Adjust only the camera direction if a provider supports final-frame-guided generation; do not invent unsupported input fields.

## Provider access findings

The installed Sora skill requires OPENAI_API_KEY and says input images with human faces are rejected. OPENAI_API_KEY is not configured. Our canonical reference contains a human face, so this workflow cannot use the reference as-is under those instructions.

The user linked Figma to Weave. The workspace has no saved workflows, but direct image-to-video model contracts are available. Prepared candidate: Kling 3, Pro tier, duration 8 seconds, audio disabled, using the canonical landscape image as the first frame. Discovery reports an approximate model cost of 82 credits; that is not an exact quote for these settings and is not approval to spend.

The user explicitly approved uploading the canonical landscape hero to Weave, and the upload completed. Uploaded asset ID: `96a619a4-5557-4504-8839-65515f5fee52`, 1672 × 941 pixels. Keep the local project copy as the canonical source.

Requested a quote for Kling 3, Pro tier, 8 seconds, cfg_scale 0.5, audio disabled, uploaded landscape hero as the first frame, and `video-desktop-prompt.txt` as the prompt. No `acknowledgedCost` was supplied, so this was quote-only. Weave returned: “This is a video model. Video models are only available on paid plans.” No exact cost quote or prediction ID was returned, and no generation began. The earlier approximate model estimate must not be treated as a quote.

Next dependency: the user enables video access on a paid Weave plan, or selects another accessible video-generation workflow. Once access is available, retry the exact quote and obtain structured per-run cost approval before generation. Do not purchase or change the user's subscription.

After the user links accounts, inspect available image-to-video workflows, confirm supported reference inputs and settings, prepare a concrete run, and obtain the explicit per-run credit approval required by the Weave tool. Do not assume a model, credit cost, or account entitlement.

## Verification after generation

1. Inspect start, midpoint, and end frames for model/garment continuity, realistic hands, embroidery drift, and stable architecture.
2. Watch normal-speed footage for flicker, cloth morphing, facial changes, and unnatural camera movement.
3. Confirm head and shoes remain inside the ending frame and negative space survives the desktop crop.
4. If reversing, watch the reversed delivery separately and reject unnatural motion.
5. Save source clips, provider/model/settings, final prompts and provenance before making compressed derivatives.
6. Encode seek-friendly delivery variants and compare size/seek smoothness in the later hero browser experiment.
7. Use the landscape or portrait still as a dependable loading/failure/reduced-motion fallback.

A still with pan/zoom can support layout development later, but it is not the generated fabric-to-silhouette video requested here.
