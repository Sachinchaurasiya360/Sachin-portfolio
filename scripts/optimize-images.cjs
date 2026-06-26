/**
 * Optimize project screenshots: resize + convert to WebP.
 *
 * The project cards render images at ~350px tall, but the source PNGs are
 * full-resolution (~9 MB each), which is why they're slow to open. This
 * downscales to a retina-friendly size and emits compact .webp files.
 *
 * Usage:  node scripts/optimize-images.cjs
 * After running, reference the .webp files in src/config.ts.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = path.join(__dirname, "..", "public", "sachinActivites");
// Only optimize the project screenshots (skip activity photos / avatars).
const TARGETS = [
  "cloudforge.png",
  "autometor.png",
  "courseflow.png",
  "internhack.png",
  "papernova.png",
];

const MAX_WIDTH = 1200; // plenty for a ~440px-wide card at 2x DPI
const QUALITY = 80;

(async () => {
  for (const file of TARGETS) {
    const src = path.join(DIR, file);
    if (!fs.existsSync(src)) {
      console.log(`skip  ${file} (not found)`);
      continue;
    }
    const out = path.join(DIR, file.replace(/\.png$/i, ".webp"));
    const before = fs.statSync(src).size;
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
    const after = fs.statSync(out).size;
    const kb = (n) => (n / 1024).toFixed(0) + "KB";
    console.log(
      `ok    ${file} -> ${path.basename(out)}  ${kb(before)} -> ${kb(after)} ` +
        `(${(100 - (after / before) * 100).toFixed(1)}% smaller)`
    );
  }
})();
