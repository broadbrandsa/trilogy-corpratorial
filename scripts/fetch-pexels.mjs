// Fetch a Cape Town + Table Mountain photo from Pexels for the "premium
// location in Africa" block. Pexels licence: free to use, attribution
// appreciated — we capture and display the photographer credit.
//
// Usage: node scripts/fetch-pexels.mjs ["search query"] [outfile]
// Reads PEXELS_API_KEY from .env.local (gitignored).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "img");

function envVal(name) {
  if (process.env[name]) return process.env[name];
  try {
    const env = readFileSync(join(ROOT, ".env.local"), "utf8");
    const m = env.match(new RegExp(`^${name}=(.*)$`, "m"));
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  } catch {}
  return null;
}

const KEY = envVal("PEXELS_API_KEY");
if (!KEY) {
  console.error("Missing PEXELS_API_KEY (env or .env.local).");
  process.exit(1);
}

const query = process.argv[2] || "Cape Town Table Mountain city";
const outName = process.argv[3] || "cape-town";

async function main() {
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query,
  )}&orientation=landscape&size=large&per_page=15`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) {
    console.error(`Pexels ${res.status}: ${await res.text().catch(() => "")}`);
    process.exit(1);
  }
  const data = await res.json();
  const photos = data.photos ?? [];
  if (!photos.length) {
    console.error("No photos found for query:", query);
    process.exit(1);
  }

  // Prefer photos that actually feature Table Mountain, then a banner-friendly
  // ratio (~1.5–2.2), avoiding extreme ultra-wides that crop to the harbour.
  const mentionsMountain = (p) =>
    /mountain/i.test(`${p.alt} ${p.url}`) ? 1 : 0;
  const ratioScore = (p) => {
    const r = p.width / p.height;
    return -Math.abs(r - 1.8); // closer to 1.8 is better
  };
  photos.sort(
    (a, b) =>
      mentionsMountain(b) - mentionsMountain(a) || ratioScore(b) - ratioScore(a),
  );
  console.log(`Top candidates for "${query}":`);
  photos.slice(0, 6).forEach((p, i) =>
    console.log(
      `  [${i}] ${p.width}x${p.height} by ${p.photographer} — ${p.url}`,
    ),
  );

  const idx = process.argv[4] ? Number(process.argv[4]) : 0;
  const pick = photos[idx] ?? photos[0];
  const imgUrl = pick.src.original || pick.src.large2x || pick.src.large;
  const img = await fetch(imgUrl);
  const buf = Buffer.from(await img.arrayBuffer());
  writeFileSync(join(OUT, `${outName}.jpg`), buf);

  const credit = {
    file: `/img/${outName}.jpg`,
    photographer: pick.photographer,
    photographer_url: pick.photographer_url,
    source: pick.url,
    alt: pick.alt || "Cape Town with Table Mountain",
    width: pick.width,
    height: pick.height,
  };
  writeFileSync(
    join(OUT, `${outName}.credit.json`),
    JSON.stringify(credit, null, 2),
  );
  console.log(
    `\nSaved public/img/${outName}.jpg (${(buf.length / 1024).toFixed(
      0,
    )}kb) by ${pick.photographer}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
