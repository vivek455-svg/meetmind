/**
 * Raster images exported from the Meetmind Figma file.
 * `npm run fetch-assets` downloads them into /public/images (see scripts/fetch-figma-assets.mjs).
 * Width/height are the source image's intrinsic size and are used by next/image to reserve space.
 */
export const images = {
  heroClouds: { src: "/images/hero-clouds.webp", width: 1172, height: 490 },
  cam1: { src: "/images/cam-1.webp", width: 480, height: 270 },
  cam2: { src: "/images/cam-2.webp", width: 480, height: 270 },
  cam3: { src: "/images/cam-3.webp", width: 704, height: 396 },
  heroArrow: { src: "/images/hero-arrow.webp", width: 128, height: 128 },
  appWhatsapp: { src: "/images/app-whatsapp.webp", width: 400, height: 400 },
  appTelegram: { src: "/images/app-telegram.webp", width: 400, height: 400 },
  appGmail: { src: "/images/app-gmail.webp", width: 400, height: 400 },
  appZoom: { src: "/images/app-zoom.webp", width: 140, height: 139 },
  monitor: { src: "/images/monitor.webp", width: 508, height: 491 },
  meetGrid: { src: "/images/meet-grid.webp", width: 2560, height: 1600 },
  attendee1: { src: "/images/attendee-1.webp", width: 320, height: 480 },
  attendee2: { src: "/images/attendee-2.webp", width: 320, height: 480 },
  attendee3: { src: "/images/attendee-3.webp", width: 319, height: 479 },
  attendee4: { src: "/images/attendee-4.webp", width: 320, height: 480 },
  clarityVideo: { src: "/images/clarity-video.webp", width: 1646, height: 1102 },
  avatar: { src: "/images/avatar.webp", width: 320, height: 480 },
  footerLandscape: { src: "/images/footer-landscape.webp", width: 1864, height: 2796 },
} as const;

export type ImageKey = keyof typeof images;
