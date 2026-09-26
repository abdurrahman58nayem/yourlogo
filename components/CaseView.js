"use client";

import { useState } from "react";
import Link from "next/link";
import Tx from "./Tx";
import { BeforeHale, Mark } from "./Marks";
import { projectIndex, projects } from "@/lib/projects";

const tones = [
  { id: "color", en: "Color", bn: "রং" },
  { id: "mono", en: "One color", bn: "এক রং" },
  { id: "reverse", en: "Reversed", bn: "রিভার্স" },
];

export default function CaseView({ project, next }) {
  const [tone, setTone] = useState("color");
  const index = projectIndex(project.slug);
  const variant = tone === "color" ? "color" : "mono";
  const frameBg = tone === "reverse" ? project.fg : project.bg;
  const frameFg = tone === "reverse" ? project.bg : project.fg;

  return (
    <article className="case">
      <header className="case-hero" style={{ background: project.bg, color: project.fg }}>
        <div className="wrap case-hero-top">
          <Link href="/#work" className="back">
            ← <Tx en="All identities" bn="সব আইডেন্টিটি" />
          </Link>
          <span className="latin case-index">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="case-mark">
          <Mark id={project.slug} />
        </div>
        <div className="wrap case-hero-bottom">
          <div>
            <p className="case-kind">
              <Tx en={project.kind.en} bn={project.kind.bn} />
            </p>
            <h1 className={`wm wm-${project.slug}`}>{project.name}</h1>
            <p className="case-bn">{project.nameBn}</p>
          </div>
          <p className="case-idea">
            <Tx en={project.idea.en} bn={project.idea.bn} />
          </p>
        </div>
      </header>

      <div className="case-meta">
        <div className="wrap meta-row">
          <Meta label={{ en: "Sector", bn: "ক্ষেত্র" }} value={project.sector} />
          <Meta label={{ en: "Place", bn: "জায়গা" }} value={project.place} />
          <Meta label={{ en: "Year", bn: "বছর" }} value={{ en: project.year, bn: project.year }} latin />
          <Meta label={{ en: "Scope", bn: "স্কোপ" }} value={project.scope} />
        </div>
      </div>

      <section className="section story">
        <div className="wrap story-grid">
          <div>
            <p className="kicker">
              <Tx en="The brief" bn="ব্রিফ" />
            </p>
            <p className="lede">
              <Tx en={project.brief.en} bn={project.brief.bn} />
            </p>
          </div>
          <div className="story-side">
            <div>
              <p className="kicker">
                <Tx en="Approach" bn="পথ" />
              </p>
              <p>
                <Tx en={project.approach.en} bn={project.approach.bn} />
              </p>
            </div>
            <div>
              <p className="kicker">
                <Tx en="What it had to do" bn="যে কাজটা তাকে করতে হয়েছে" />
              </p>
              <p>
                <Tx en={project.outcome.en} bn={project.outcome.bn} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {project.image && (
        <figure className="bleed case-photo">
          <img src={project.image} alt={project.imageAlt.en} width={1408} height={768} />
          <figcaption className="wrap">
            <Tx en={project.imageAlt.en} bn={project.imageAlt.bn} />
          </figcaption>
        </figure>
      )}

      <section className="section system">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">
                <Tx en="The system" bn="সিস্টেম" />
              </p>
              <h2>
                <Tx en="Color, type, and the mark at every size." bn="রং, টাইপ, আর প্রতিটা সাইজে মার্ক।" />
              </h2>
            </div>
          </div>

          <div className="system-grid">
            <div>
              <p className="kicker">
                <Tx en="Palette" bn="প্যালেট" />
              </p>
              <div className="swatches">
                {project.palette.map((c) => (
                  <Swatch key={c.hex} color={c} />
                ))}
              </div>
            </div>
            <div className="specimen">
              <p className="kicker">
                <Tx en="Wordmark" bn="ওয়ার্ডমার্ক" />
              </p>
              <p className={`specimen-display wm wm-${project.slug}`}>{project.name}</p>
              <p className="specimen-bn">{project.nameBn}</p>
              <p className="specimen-note">
                <Tx en={project.typeNote.en} bn={project.typeNote.bn} />
              </p>
            </div>
          </div>

          <div className="tone-bar">
            <p className="kicker">
              <Tx en="The same mark, three ways" bn="একই মার্ক, তিনভাবে" />
            </p>
            <div className="tone" role="tablist">
              {tones.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={tone === item.id}
                  className={tone === item.id ? "on" : ""}
                  onClick={() => setTone(item.id)}
                >
                  <Tx en={item.en} bn={item.bn} />
                </button>
              ))}
            </div>
          </div>

          <div className="sizes" style={{ background: frameBg, color: frameFg }}>
            {[16, 24, 32, 48, 80, 120].map((s) => (
              <div key={s} className="size" style={{ "--s": `${s}px` }}>
                <Mark id={project.slug} variant={variant} />
                <span className="latin">{s}</span>
              </div>
            ))}
          </div>

          <div className="apps">
            <div className="app-icon" style={{ background: frameBg, color: frameFg }}>
              <Mark id={project.slug} variant={variant} />
            </div>
            <div className="card" style={{ background: frameBg, color: frameFg }}>
              <Mark id={project.slug} variant={variant} className="card-mark" />
              <div>
                <strong className={`wm wm-${project.slug}`}>{project.name}</strong>
                <span>{project.place.en}</span>
              </div>
            </div>
            <div className="sign" style={{ background: frameBg, color: frameFg }}>
              <Mark id={project.slug} variant={variant} />
              <strong className={`wm wm-${project.slug}`}>{project.name}</strong>
            </div>
          </div>

          <ul className="files">
            {["SVG", "PDF", "PNG", "One-color", "Reversed"].map((f) => (
              <li key={f} className="latin">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.special === "pattern" && (
        <section className="pattern-sec">
          <div className="wrap">
            <p className="kicker">
              <Tx en="The logo is the repeat" bn="লোগোটাই রিপিট" />
            </p>
            <h2>
              <Tx en="A flower that becomes cloth." bn="একটা ফুল, যা কাপড় হয়ে যায়।" />
            </h2>
          </div>
          <div className="pattern" style={{ background: project.bg, color: project.accent }}>
            {Array.from({ length: 18 }).map((_, i) => (
              <Mark key={i} id="nokshi" variant="mono" />
            ))}
          </div>
        </section>
      )}

      {project.special === "rebrand" && (
        <section className="section">
          <div className="wrap">
            <p className="kicker">
              <Tx en="Before / after" bn="আগে / পরে" />
            </p>
            <h2>
              <Tx
                en="The old symbol could have belonged to anyone."
                bn="পুরনো চিহ্ন যে কারোর হতে পারত।"
              />
            </h2>
            <div className="compare">
              <figure>
                <div className="compare-frame is-before">
                  <BeforeHale />
                </div>
                <figcaption>
                  <Tx en="Before — a scale anyone could buy" bn="আগে — এমন পাল্লা, যা যে কেউ কিনতে পারে" />
                </figcaption>
              </figure>
              <figure>
                <div className="compare-frame" style={{ background: project.bg, color: project.fg }}>
                  <Mark id="hale" />
                </div>
                <figcaption>
                  <Tx en="After — a house, not a courtroom clipart" bn="পরে — আদালতের ক্লিপআর্ট নয়, একটা ঘর" />
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      )}

      <Link href={`/work/${next.slug}`} className="next-proj" style={{ background: next.bg, color: next.fg }}>
        <span className="kicker light">
          <Tx en="Next identity" bn="পরের আইডেন্টিটি" />
        </span>
        <span className={`next-name wm wm-${next.slug}`}>{next.name}</span>
        <span className="next-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </article>
  );
}

function Meta({ label, value, latin }) {
  return (
    <div className="meta-item">
      <span className="kicker">
        <Tx en={label.en} bn={label.bn} />
      </span>
      <strong className={latin ? "latin" : ""}>
        <Tx en={value.en} bn={value.bn} />
      </strong>
    </div>
  );
}

function Swatch({ color }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="swatch"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(color.hex);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch (e) {
          setCopied(false);
        }
      }}
    >
      <span className="swatch-chip" style={{ background: color.hex }} />
      <span className="swatch-name">
        <Tx en={color.name.en} bn={color.name.bn} />
      </span>
      <span className="swatch-hex latin">{copied ? <Tx en="Copied" bn="কপি হয়েছে" /> : color.hex}</span>
    </button>
  );
}
