// Shrinks the site's images without visible quality loss: resize to the largest size the page
// actually shows, then re-encode. Originals are moved to ./assets-originals (outside public/, so
// they are never deployed). Safe to run again: files already converted are skipped.
//
//   npm i -D sharp
//   node scripts/optimize-images.mjs            (uses public/assets)
//   node scripts/optimize-images.mjs <assetsDir> <backupDir>
import { copyFile, mkdir, readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.argv[2] ?? "public/assets";
const BACKUP = process.argv[3] ?? "assets-originals";

// width = largest displayed size x ~2 for sharp phone screens. quality: raise by ~5 if you see banding in dark skies.
const RULES = {
  backgrounds: { width: 1920, format: "webp", quality: 85 },
  sound_categories_bg: { width: 640, format: "webp", quality: 82 },
  app_screenshots: { width: 720, format: "webp", quality: 84 },
  moonu_momo: { width: 800, format: "png" }, // stays PNG: transparency, favicon and social preview image
};
// per-file overrides (portrait hero for phones is narrower)
const OVERRIDES = { "momo_sleep_with_stars_2.jpg": { width: 1200 } };

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
let before = 0, after = 0;

for (const [folder, rule] of Object.entries(RULES)) {
  const dir = path.join(ROOT, folder);
  let names;
  try { names = await readdir(dir); } catch { continue; }
  for (const name of names) {
    const ext = path.extname(name).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue; // skips .webp (already done) and others
    const src = path.join(dir, name);
    const r = { ...rule, ...OVERRIDES[name] };
    const outName = r.format === "webp" ? `${path.basename(name, ext)}.webp` : name;
    const out = path.join(dir, outName);
    const tmp = path.join(dir, `.tmp-${outName}`);

    const img = sharp(src).rotate().resize({ width: r.width, withoutEnlargement: true });
    await (r.format === "webp"
      ? img.webp({ quality: r.quality, effort: 6, smartSubsample: true })
      : img.png({ compressionLevel: 9, effort: 10, palette: false })).toFile(tmp);

    const o = (await stat(src)).size, n = (await stat(tmp)).size;
    if (r.format === outName.split(".").pop() && ext === `.${r.format}` && n >= o) {
      await unlink(tmp); // re-encoding the same format made it bigger: keep the original
      console.log(`kept   ${folder}/${name}  ${kb(o)}`);
      before += o; after += o; continue;
    }
    await mkdir(path.join(BACKUP, folder), { recursive: true });
    await copyFile(src, path.join(BACKUP, folder, name));
    if (out !== src) await unlink(src);
    await rename(tmp, out);
    before += o; after += n;
    console.log(`${(name + " ").padEnd(46, ".")} ${kb(o).padStart(8)} -> ${kb(n).padStart(7)}  ${folder}/${outName}`);
  }
}
console.log(`\nTotal: ${kb(before)} -> ${kb(after)}`);
