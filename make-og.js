/** স্ট্যাটিক OG কার্ড জেনারেটর — fontkit দিয়ে বাংলা টেক্সট শেপ করে SVG পাথ → sharp → PNG */
const fontkit = require("fontkit");
const sharp = require("sharp");
const fs = require("fs");

const W = 1200, H = 630;

const tiro = fontkit.openSync("node_modules/@fontsource/tiro-bangla/files/tiro-bangla-bengali-400-normal.woff2");
const hind = fontkit.openSync("node_modules/@fontsource/hind-siliguri/files/hind-siliguri-bengali-500-normal.woff2");
const hind4 = fontkit.openSync("node_modules/@fontsource/hind-siliguri/files/hind-siliguri-bengali-400-normal.woff2");
const hindLatin = fontkit.openSync("node_modules/@fontsource/hind-siliguri/files/hind-siliguri-latin-500-normal.woff2");
const hind4Latin = fontkit.openSync("node_modules/@fontsource/hind-siliguri/files/hind-siliguri-latin-400-normal.woff2");

const isBengali = (ch) => /[\u0980-\u09FF\u200C\u200D\u0964-\u0965]/.test(ch);

/** স্ক্রিপ্ট অনুযায়ী সেগমেন্ট করে সঠিক ফন্টে শেপ করে এক পাথে রেন্ডার */
function textPath(mainFont, latinFont, text, size, xStart, y, fill) {
  const scale = size / mainFont.unitsPerEm;
  let x = xStart;
  let d = "";
  // সেগমেন্ট বানাও
  const segs = [];
  let cur = "", curBn = null;
  for (const ch of text) {
    const bn = isBengali(ch);
    if (curBn === null || bn === curBn) { cur += ch; curBn = bn; }
    else { segs.push({ text: cur, bn: curBn }); cur = ch; curBn = bn; }
  }
  if (cur) segs.push({ text: cur, bn: curBn });

  for (const seg of segs) {
    const font = seg.bn ? mainFont : latinFont;
    const sc = size / font.unitsPerEm;
    const run = font.layout(seg.text);
    run.glyphs.forEach((glyph, i) => {
      const pos = run.positions[i];
      const gp = glyph.path.toSVG();
      if (gp && gp.trim()) {
        d += `<path transform="translate(${(x + pos.xOffset * sc).toFixed(2)},${(y + pos.yOffset * sc).toFixed(2)}) scale(${sc.toFixed(6)},${(-sc).toFixed(6)})" d="${gp}"/>`;
      }
      x += pos.xAdvance * sc;
    });
  }
  void scale;
  return { svg: `<g fill="${fill}">${d}</g>`, width: x - xStart };
}

(async () => {
  const el = [];
  el.push(`<rect width="${W}" height="${H}" fill="#0E1626"/>`);
  el.push(`<defs>
    <radialGradient id="g1" cx="85%" cy="0%" r="55%">
      <stop offset="0%" stop-color="#C9A24B" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#C9A24B" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#B8892F"/>
      <stop offset="100%" stop-color="#C9A24B"/>
    </linearGradient>
  </defs>`);
  el.push(`<rect width="${W}" height="${H}" fill="url(#g1)"/>`);
  el.push(`<rect x="0" y="0" width="${W}" height="7" fill="url(#gold)"/>`);
  el.push(`<rect x="0" y="${H - 7}" width="${W}" height="7" fill="url(#gold)" opacity="0.5"/>`);

  // হেডার: স্কেলস মার্ক + নাম
  const mx = 76, my = 82;
  el.push(`<g transform="translate(${mx},${my})">
    <rect width="92" height="92" rx="20" fill="#16233B" stroke="#C9A24B" stroke-opacity="0.6" stroke-width="2"/>
    <g transform="translate(14,13) scale(2.55)" fill="none" stroke="#F2EAD9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 5.6v23.4"/><path d="M9.6 30.9h12.8"/><path d="M7.4 11.4h17.2"/>
      <circle cx="16" cy="3.4" r="1.5" fill="#C9A24B" stroke="none"/>
    </g>
    <g transform="translate(14,13) scale(2.55)" fill="none" stroke="#C9A24B" stroke-width="1.5" stroke-linecap="round">
      <path d="M7.4 11.4v3.8M24.6 11.4v3.8"/>
      <path d="M3.2 15.2h8.4a4.2 4.2 0 0 1-8.4 0Z"/>
      <path d="M20.4 15.2h8.4a4.2 4.2 0 0 1-8.4 0Z"/>
    </g>
  </g>`);

  const t1 = textPath(tiro, hindLatin, "অ্যাডভোকেট মো. আবদুল লতিফ", 46, 196, 120, "#F2EAD9");
  el.push(t1.svg);
  const t2 = textPath(hind, hindLatin, "সিনিয়র আইনজীবী, বাংলাদেশ সুপ্রিম কোর্ট", 25, 196, 163, "#C9A24B");
  el.push(t2.svg);

  // মূল লাইন
  const b1 = textPath(tiro, hindLatin, "২৭ বছরের আইনজীবী।", 64, 78, 322, "#F2EAD9");
  el.push(b1.svg);
  const b2 = textPath(tiro, hindLatin, "আপনার মামলার পক্ষে, যেভাবে বলা উচিত সেভাবে।", 40, 78, 394, "#C9A24B");
  el.push(b2.svg);

  // বিভাজক + নিচের সারি (ডায়মন্ড সেপারেটরসহ)
  el.push(`<rect x="78" y="470" width="${W - 156}" height="1.5" fill="#F2EAD9" opacity="0.15"/>`);
  const areas = ["ফৌজদারি", "ভূমি", "পারিবারিক", "রিট", "বাণিজ্যিক", "কর"];
  let ax = 78;
  areas.forEach((a, i) => {
    const seg = textPath(hind4, hind4Latin, a, 23, ax, 532, "#A8B1C4");
    el.push(seg.svg);
    ax += seg.width + 18;
    if (i < areas.length - 1) {
      el.push(`<rect x="${(ax + 4).toFixed(1)}" y="${532 - 14}" width="7" height="7" transform="rotate(45 ${(ax + 7.5).toFixed(1)} ${532 - 10.5})" fill="#C9A24B" opacity="0.8"/>`);
      ax += 25;
    }
  });
  const f2 = textPath(hind4, hind4Latin, "এসসিবিএ, শাহবাগ, ঢাকা", 23, W - 78 - 240, 532, "#A8B1C4");
  el.push(f2.svg);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${el.join("")}</svg>`;
  fs.writeFileSync("/tmp/og.svg", svg);
  await sharp(Buffer.from(svg), { density: 96 }).png().toFile("app/opengraph-image.png");
  console.log("OG written:", fs.statSync("app/opengraph-image.png").size, "bytes");
})();
