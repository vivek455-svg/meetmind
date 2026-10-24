#!/usr/bin/env node
/**
 * Downloads the raster images used on the landing page from the Meetmind Figma file
 * and saves them as optimised WebP files in /public/images.
 *
 *   FIGMA_TOKEN=figd_xxx npm run fetch-assets
 *
 * Create a personal access token in Figma → Settings → Security → Personal access tokens
 * (scope: "File content: read-only").
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const FILE_KEY = "STpSuP52OXEh3XIta5ZOuC";
const OUT_DIR = path.join(process.cwd(), "public", "images");

// name → [imageRef (fill hash), max width to keep]
const ASSETS = {
  "hero-clouds": ["084f5d3b8760df34d83e576e5ca054d86d86a9f6", 1600],
  "cam-1": ["d5df108db7a9e23ee78fb3472da9eed3e8bd9196", 800],
  "cam-2": ["8d6afde353447a785b15a283bc3f6063fa332481", 800],
  "cam-3": ["7a227a087e1a97c21ebc95656cab0ddc153101a1", 1000],
  "hero-arrow": ["4d7ac96ee8d29b6ba78aede3f69e1a43600b0064", 256],
  "app-whatsapp": ["b97b9de8cbe2ae5b311ab70d3283c317bebe202c", 200],
  "app-telegram": ["d1056faecae7eba1550ae542aceaec745b51de7e", 200],
  "app-gmail": ["68ea4daeb5a6de0b1d63b0ba38e533d26fb28c4f", 200],
  "app-zoom": ["e0616b65f3ba42176ff4b0d328c432ca319f0286", 200],
  monitor: ["773dcfc3d7dda306b40d81df6723c21bb61512fe", 1200],
  "meet-grid": ["1a1b8fe64972a90224a0375892a534a748106d69", 1600],
  "attendee-1": ["3f997ac88310448974cf239a72bad8ef817f985f", 64],
  "attendee-2": ["c9a6d908e4a2cbaa065a51808d9c52ce07e3a747", 64],
  "attendee-3": ["01376a01f8898b4d066033af55f17b0f52d39b46", 64],
  "attendee-4": ["2824bbfc3a0e4e7f8f0343924eeffeeace5d9c62", 64],
  "clarity-video": ["b04067bea3a14afccf6be812c0c5ac4151ae4a17", 2100],
  avatar: ["b47c4866acacc695381a10689a6589fa9d70cb5a", 160],
  "footer-landscape": ["c696762f8ab3e7034688a7cb1e2707d5ad9b5e1a", 1864],
};

const token = process.env.FIGMA_TOKEN;
if (!token) {
  console.error("Set FIGMA_TOKEN to a Figma personal access token.");
  process.exit(1);
}

const res = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/images`, {
  headers: { "X-Figma-Token": token },
});
if (!res.ok) {
  console.error(`Figma API error ${res.status}: ${await res.text()}`);
  process.exit(1);
}
const { meta } = await res.json();
const urls = meta?.images ?? {};

await mkdir(OUT_DIR, { recursive: true });

let failed = 0;
await Promise.all(
  Object.entries(ASSETS).map(async ([name, [ref, maxWidth]]) => {
    const url = urls[ref];
    if (!url) {
      console.warn(`✗ ${name}: image ${ref} not found in file`);
      failed++;
      return;
    }
    const img = await fetch(url);
    if (!img.ok) {
      console.warn(`✗ ${name}: download failed (${img.status})`);
      failed++;
      return;
    }
    const buf = Buffer.from(await img.arrayBuffer());
    const out = await sharp(buf)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    await writeFile(path.join(OUT_DIR, `${name}.webp`), out);
    console.log(`✓ ${name}.webp  ${(out.length / 1024).toFixed(0)} KB`);
  }),
);

process.exit(failed ? 1 : 0);
