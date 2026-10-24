# Meetmind — landing page

Next.js 16 (App Router, static export-ready) build of the Meetmind landing page from Figma
(`Frame 2147241524` in the Meetmind file).

## Run it

```bash
npm install
FIGMA_TOKEN=figd_xxx npm run fetch-assets   # one-time: pulls the photos from Figma into public/images
npm run dev                                  # http://localhost:3000
npm run build && npm start                   # production
```

`fetch-assets` needs a Figma personal access token (Figma → Settings → Security → Personal access
tokens, scope "File content: read-only"). It downloads every raster image used on the page and
converts it to WebP. Icons and logos are already in `public/icons` and `public/logos` (exported
from the same file as SVG). Until the photos are fetched, image slots show a soft tint.

## Structure

```
src/app/            layout (fonts, metadata), page, globals.css (tokens + all motion)
src/components/     one file per section, plus Pic (next/image wrapper) and Reveal (scroll observer)
src/lib/images.ts   image manifest (paths + intrinsic sizes)
scripts/            fetch-figma-assets.mjs
```

## Motion

- **Appear effects**: add `data-reveal` (`""`, `"scale"`, `"blur"`, `"fade"`, `"group"`) and an
  optional `--d` delay. A single IntersectionObserver in `Reveal.tsx` toggles `.is-in`.
- **Illustration loops** live inside `.anim-scope` and only play while on screen.
- **Count-ups**: `data-count="92"` inside a revealed element.
- Everything respects `prefers-reduced-motion`, and content is fully visible without JavaScript.

## Performance

Server components everywhere except the nav, FAQ accordion and the reveal observer. Local fonts
(Geist, Inria Serif italic, Caveat) with `display: swap`, AVIF/WebP via `next/image`, and only
compositor-friendly animations (transform/opacity). Lighthouse on the production build: desktop
performance 100; mobile (simulated slow 4G) 90+, CLS 0, accessibility 100, SEO 100.
