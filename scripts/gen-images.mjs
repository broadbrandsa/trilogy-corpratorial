// Nano Banana image generator for the Trilogy editorial direction.
// Usage:
//   node scripts/gen-images.mjs            # generate all
//   node scripts/gen-images.mjs hero-01    # generate specific id(s) / re-roll
//
// Reads GOOGLE_AI_API_KEY from .env.local. Writes PNGs to public/img/ and a
// review contact sheet to public/img/_contactsheet.html. The key is never
// committed (.env.local is gitignored).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { STYLE, IMAGES } from "./image-prompts.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "img");

// ---- load key from .env.local ----
function loadKey() {
  if (process.env.GOOGLE_AI_API_KEY) return process.env.GOOGLE_AI_API_KEY;
  try {
    const env = readFileSync(join(ROOT, ".env.local"), "utf8");
    const m = env.match(/^GOOGLE_AI_API_KEY=(.*)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  } catch {}
  return null;
}
const API_KEY = loadKey();
if (!API_KEY) {
  console.error("Missing GOOGLE_AI_API_KEY (env or .env.local).");
  process.exit(1);
}

const MODELS = ["gemini-3-pro-image", "gemini-2.5-flash-image"];

async function callModel(model, prompt, aspect) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
  const bodies = [
    // preferred: explicit aspect ratio
    {
      contents: [{ parts: [{ text: `${prompt}\n\n${STYLE}\n\nAspect ratio ${aspect}.` }] }],
      generationConfig: { imageConfig: { aspectRatio: aspect } },
    },
    // fallback: minimal body (some models reject imageConfig)
    {
      contents: [{ parts: [{ text: `${prompt}\n\n${STYLE}\n\nAspect ratio ${aspect}.` }] }],
    },
  ];
  for (const body of bodies) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      // 400 on imageConfig -> try next body; other errors -> bail this model
      if (res.status === 400 && body.generationConfig) continue;
      throw new Error(`${model} ${res.status}: ${t.slice(0, 300)}`);
    }
    const data = await res.json();
    for (const part of data.candidates?.[0]?.content?.parts ?? []) {
      if (part.inlineData?.data) return Buffer.from(part.inlineData.data, "base64");
    }
    throw new Error(`${model}: no image in response`);
  }
  return null;
}

async function generate(item) {
  let lastErr;
  for (const model of MODELS) {
    try {
      const buf = await callModel(model, item.prompt, item.aspect);
      if (buf) return { buf, model };
    } catch (e) {
      lastErr = e;
      console.warn(`  ${model} failed: ${e.message}`);
    }
  }
  throw lastErr ?? new Error("all models failed");
}

async function main() {
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
  const ids = process.argv.slice(2);
  const todo = ids.length ? IMAGES.filter((i) => ids.includes(i.id)) : IMAGES;
  if (!todo.length) {
    console.error(`No matching ids. Available: ${IMAGES.map((i) => i.id).join(", ")}`);
    process.exit(1);
  }

  console.log(`Generating ${todo.length} image(s) -> public/img/`);
  const done = [];
  for (const item of todo) {
    process.stdout.write(`• ${item.id} (${item.aspect}) ... `);
    try {
      const { buf, model } = await generate(item);
      const file = join(OUT, `${item.filename}.png`);
      writeFileSync(file, buf);
      console.log(`ok [${model}] ${(buf.length / 1024).toFixed(0)}kb`);
      done.push({ ...item, model });
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
    }
  }

  // contact sheet for quick review
  const cb = Date.now().toString(36);
  const cards = IMAGES.map((i) => {
    const exists = existsSync(join(OUT, `${i.filename}.png`));
    return `<figure><img src="/img/${i.filename}.png?v=${cb}" alt="${i.alt}"${
      exists ? "" : ' style="opacity:.25"'
    }/><figcaption>${i.id} · ${i.aspect}${exists ? "" : " (missing)"}</figcaption></figure>`;
  }).join("\n");
  const html = `<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>Trilogy imagery contact sheet</title><style>body{margin:0;background:#0a0a0a;color:#f7f5f0;font:14px/1.5 system-ui;padding:32px}h1{font-weight:300}figure{margin:0 0 8px}figcaption{font:11px ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#2FE85C;padding:8px 0 28px}img{width:100%;height:auto;display:block;border:1px solid rgba(255,255,255,.1)}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:20px}</style><h1>Trilogy · editorial imagery</h1><div class=grid>${cards}</div>`;
  writeFileSync(join(OUT, "_contactsheet.html"), html);
  console.log(`\nDone: ${done.length}/${todo.length}. Review: public/img/_contactsheet.html`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
