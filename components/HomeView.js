"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Tx from "./Tx";
import { Mark } from "./Marks";
import WorkGrid from "./WorkGrid";
import { projects } from "@/lib/projects";
import { faqs, principles, quotes, services, steps } from "@/lib/ui";
import { packages, site } from "@/lib/site";

const featuredIds = ["nokshi", "lunara", "vela", "saffron", "hale", "stride"];

export default function HomeView() {
  return (
    <>
      <Hero />
      <Ticker />
      <section className="section" id="work">
        <div className="wrap-wide">
          <div className="section-head">
            <div>
              <p className="kicker">
                <Tx en="01  —  Selected identities" bn="০১  —  বাছাই করা আইডেন্টিটি" />
              </p>
              <h2>
                <Tx en="Marks with a point of view." bn="একটা অবস্থান আছে, এমন মার্ক।" />
              </h2>
            </div>
            <p className="dek">
              <Tx
                en="Hospitality, technology, culture, and the companies in between. Each one started as a single idea, and was built to survive real use — a sign, a screen, a stamp."
                bn="আতিথেয়তা, প্রযুক্তি, সংস্কৃতি, আর মাঝের সব প্রতিষ্ঠান। প্রতিটা শুরু হয়েছে একটা আইডিয়া থেকে, আর বানানো হয়েছে সত্যিকারের ব্যবহারে টিকতে — সাইন, স্ক্রিন, সিল।"
              />
            </p>
          </div>
          <WorkGrid />
        </div>
      </section>

      <section className="section services-sec" id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">
                <Tx en="02  —  Services" bn="০২  —  সার্ভিস" />
              </p>
              <h2>
                <Tx en="What we actually design." bn="আমরা আসলে কী ডিজাইন করি।" />
              </h2>
            </div>
            <p className="dek">
              <Tx
                en="Not a pile of options. A clear mark, and the small system around it — including Bangla and Latin, when the brand lives in both."
                bn="অপশনের স্তূপ নয়। একটা পরিষ্কার মার্ক, আর তার চারপাশের ছোট সিস্টেম — ব্র্যান্ড দুই ভাষায় বাঁচলে, বাংলা ও ইংরেজিসহ।"
              />
            </p>
          </div>
          <div className="services">
            {services.map((s) => {
              const example = projects.find((p) => p.slug === s.example);
              return (
                <article key={s.n} className="service">
                  <span className="service-n latin">{s.n}</span>
                  <div>
                    <h3>
                      <Tx en={s.title.en} bn={s.title.bn} />
                    </h3>
                    <p>
                      <Tx en={s.body.en} bn={s.body.bn} />
                    </p>
                  </div>
                  {example && (
                    <Link href={`/work/${example.slug}`} className="service-ex">
                      <span className="ex-mark" style={{ background: example.bg, color: example.fg }}>
                        <Mark id={example.slug} />
                      </span>
                      <span>
                        <em>
                          <Tx en="See" bn="দেখুন" />
                        </em>
                        <strong className="latin">{example.name}</strong>
                      </span>
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band" id="process">
        <div className="wrap">
          <div className="section-head light-head">
            <div>
              <p className="kicker light">
                <Tx en="03  —  Process" bn="০৩  —  প্রসেস" />
              </p>
              <h2>
                <Tx en="How a project moves." bn="একটা প্রজেক্ট কীভাবে এগোয়।" />
              </h2>
            </div>
            <p className="dek on-dark">
              <Tx
                en="A typical identity takes two to four weeks. You see work in the first week. You are never waiting on silence."
                bn="একটা আইডেন্টিটি সাধারণত দুই থেকে চার সপ্তাহ। প্রথম সপ্তাহেই কাজ দেখেন। নীরবতার জন্য অপেক্ষা করতে হয় না।"
              />
            </p>
          </div>
          <ol className="process">
            {steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step-n latin">{s.n}</span>
                <h3>
                  <Tx en={s.title.en} bn={s.title.bn} />
                </h3>
                <p>
                  <Tx en={s.body.en} bn={s.body.bn} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="studio">
        <div className="wrap studio-grid">
          <div>
            <p className="kicker">
              <Tx en="04  —  The studio" bn="০৪  —  স্টুডিও" />
            </p>
            <h2>
              <Tx en="A small studio. The work gets the time." bn="ছোট স্টুডিও। কাজটা সময় পায়।" />
            </h2>
            <div className="studio-copy">
              <p>
                <Tx
                  en="YourLogo is an independent identity studio in Dhaka. We take a few projects at a time, so a logo is not something squeezed between ten other jobs."
                  bn="YourLogo ঢাকার একটা স্বাধীন আইডেন্টিটি স্টুডিও। একসঙ্গে অল্প কিছু প্রজেক্ট নিই, যাতে লোগো দশটা কাজের ফাঁকে চাপা না পড়ে।"
                />
              </p>
              <p>
                <Tx
                  en="Clients come when the name is ready — or almost ready — and the visual identity is what stands between them and being remembered. We design for the person who will see the mark once, in a hurry. If they can redraw it from memory an hour later, it is finished."
                  bn="ক্লায়েন্ট আসেন যখন নাম তৈরি — বা প্রায় তৈরি — আর চেনা যাওয়ার পথে আটকে আছে শুধু চেহারাটা। আমরা তাদের জন্য ডিজাইন করি, যারা লোগো একবার দেখবে, তাড়াহুড়োয়। এক ঘণ্টা পর মনে করে আঁকতে পারলে, কাজ শেষ।"
                />
              </p>
            </div>
            <ul className="principles">
              {principles.map((p) => (
                <li key={p.title.en}>
                  <strong>
                    <Tx en={p.title.en} bn={p.title.bn} />
                  </strong>
                  <span>
                    <Tx en={p.body.en} bn={p.body.bn} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="studio-figure">
            <img
              src="/images/studio.jpg"
              alt="A quiet studio desk: cotton paper, a brass ruler, vermillion ink, and a stamp."
              width={1408}
              height={768}
            />
            <figcaption>
              <Tx
                en="Proofs, paper, and a stamp. The screen is not the only test."
                bn="প্রুফ, কাগজ, আর একটা সিল। স্ক্রিনই একমাত্র পরীক্ষা নয়।"
              />
            </figcaption>
          </figure>
        </div>
        <div className="wrap">
          <dl className="stats">
            <div>
              <dt className="latin">2–4</dt>
              <dd>
                <Tx en="weeks for a typical identity" bn="সপ্তাহ, একটা সাধারণ আইডেন্টিটিতে" />
              </dd>
            </div>
            <div>
              <dt className="latin">3</dt>
              <dd>
                <Tx en="distinct directions in round one" bn="আলাদা দিক, প্রথম রাউন্ডে" />
              </dd>
            </div>
            <div>
              <dt className="latin">16px</dt>
              <dd>
                <Tx en="the smallest size we design for" bn="সবচেয়ে ছোট সাইজ, যার জন্য আঁকি" />
              </dd>
            </div>
            <div>
              <dt>
                <Tx en="Yours" bn="আপনার" />
              </dt>
              <dd>
                <Tx en="the files, when the work is paid" bn="ফাইল, পেমেন্ট হলেই" />
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <figure className="bleed">
        <img
          src="/images/press.jpg"
          alt="Black letterpress ink pressed into warm cotton paper."
          width={1408}
          height={768}
        />
        <figcaption className="wrap">
          <Tx
            en="Ink, paper, pressure. A logo has to survive all three."
            bn="কালি, কাগজ, চাপ। একটা লোগোকে তিনটাতেই টিকতে হয়।"
          />
        </figcaption>
      </figure>

      <section className="section" id="packages">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">
                <Tx en="05  —  Packages" bn="০৫  —  প্যাকেজ" />
              </p>
              <h2>
                <Tx en="Straightforward ways to begin." bn="শুরু করার সহজ রাস্তা।" />
              </h2>
            </div>
            <p className="dek">
              <Tx
                en="These are starting points, not a menu you have to fit. A first logo for a small shop can be smaller than this — tell us the budget. We would rather shape the scope than pretend one price fits all."
                bn="এগুলো শুরুর জায়গা, এমন মেনু নয় যে আপনাকে এতে ফিট হতেই হবে। ছোট দোকানের প্রথম লোগো এর চেয়েও ছোট হতে পারে — বাজেট বলুন। এক দাম সবার জন্য, এমন ভান করার চেয়ে স্কোপ গুছিয়ে নিতে আমরা রাজি।"
              />
            </p>
          </div>
          <div className="packages">
            {packages.map((pkg) => (
              <article key={pkg.id} className={`package ${pkg.featured ? "featured" : ""}`}>
                {pkg.label && (
                  <span className="pkg-label">
                    <Tx en={pkg.label.en} bn={pkg.label.bn} />
                  </span>
                )}
                <h3>
                  <Tx en={pkg.name.en} bn={pkg.name.bn} />
                </h3>
                <p className="pkg-blurb">
                  <Tx en={pkg.blurb.en} bn={pkg.blurb.bn} />
                </p>
                <p className="price-row">
                  <span className="price-from">
                    <Tx en="From" bn="থেকে" />
                  </span>
                  <span className="price latin">{pkg.price}</span>
                </p>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f.en}>
                      <Tx en={f.en} bn={f.bn} />
                    </li>
                  ))}
                </ul>
                <Link href={`/start?package=${pkg.id}`} className={pkg.featured ? "btn light" : "btn"}>
                  <Tx en="Begin with this" bn="এটা দিয়ে শুরু" />
                </Link>
              </article>
            ))}
          </div>
          <p className="pkg-note">
            <Tx
              en="Half to begin, half on delivery. bKash, bank, or an international transfer. You own every file."
              bn="শুরুতে অর্ধেক, ডেলিভারিতে অর্ধেক। bKash, ব্যাংক, বা আন্তর্জাতিক ট্রান্সফার। সব ফাইল আপনার।"
            />
          </p>
        </div>
      </section>

      <section className="section quotes-sec">
        <div className="wrap">
          <p className="kicker">
            <Tx en="In their words" bn="তাদের ভাষায়" />
          </p>
          <div className="quotes">
            {quotes.map((q) => (
              <figure key={q.who} className="quote">
                <blockquote>
                  <Tx en={q.en} bn={q.bn} />
                </blockquote>
                <figcaption>
                  <strong className="latin">{q.who}</strong>
                  <span>
                    <Tx en={q.role.en} bn={q.role.bn} />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-sec" id="faq">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker">
              <Tx en="06  —  Questions" bn="০৬  —  প্রশ্ন" />
            </p>
            <h2>
              <Tx en="Before you write." bn="লেখার আগে।" />
            </h2>
            <p className="dek">
              <Tx
                en={`Still the simplest path: a note to ${site.email}. We read every one.`}
                bn={`সবচেয়ে সহজ রাস্তা এখনো একটা নোট — ${site.email}। প্রতিটাই পড়ি।`}
              />
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}

function Hero() {
  const featured = featuredIds.map((id) => projects.find((p) => p.slug === id)).filter(Boolean);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = featured[active];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % featured.length), 3400);
    return () => clearInterval(id);
  }, [paused, featured.length]);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="kicker-row">
            <p className="kicker">
              <Tx en="Identity studio  ·  Dhaka" bn="আইডেন্টিটি স্টুডিও  ·  ঢাকা" />
            </p>
            <p className="avail">
              <i />
              <Tx en={site.availability.en} bn={site.availability.bn} />
            </p>
          </div>
          <h1>
            <span className="hero-line">
              <Tx en="A logo should feel" bn="একটা ভালো লোগো" />
            </span>
            <span className="hero-em">
              <Tx en="inevitable." bn="ব্যাখ্যা চায় না।" />
            </span>
          </h1>
          <p className="dek">
            <Tx
              en="YourLogo designs marks and brand systems for companies that want to be recognized at a glance — on a shop sign, an app icon, and a receipt."
              bn="YourLogo এমন মার্ক ও ব্র্যান্ড সিস্টেম ডিজাইন করে, যা এক নজরে চেনা যায় — শপ সাইনে, অ্যাপ আইকনে, আর রসিদে।"
            />
          </p>
          <div className="hero-actions">
            <a className="btn" href="#work">
              <Tx en="View selected work" bn="কাজ দেখুন" />
            </a>
            <Link className="btn ghost" href="/start">
              <Tx en="Start a project" bn="প্রজেক্ট শুরু করুন" />
            </Link>
          </div>
          <p className="hero-note">
            <Tx
              en="A typical identity takes 2–4 weeks. You own every file."
              bn="একটা আইডেন্টিটি সাধারণত ২–৪ সপ্তাহ। সব ফাইল আপনার।"
            />
          </p>
        </div>

        <div
          className="hero-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Link
            href={`/work/${current.slug}`}
            className="stage"
            style={{ background: current.bg, color: current.fg }}
            aria-label={current.name}
          >
            {featured.map((p, i) => (
              <span key={p.slug} className={`stage-slide ${i === active ? "on" : ""}`}>
                <Mark id={p.slug} />
              </span>
            ))}
            <span className="stage-cap">
              <span className="latin">{current.name}</span>
              <span>
                <Tx en={current.sector.en} bn={current.sector.bn} />
              </span>
            </span>
          </Link>
          <div className="stage-foot">
            <p className="stage-idea" key={current.slug}>
              <Tx en={current.idea.en} bn={current.idea.bn} />
            </p>
            <div className="stage-dots" role="tablist" aria-label="Featured marks">
              {featured.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={p.name}
                  className={i === active ? "on" : ""}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const names = projects.map((p) => p.name);
  const row = [...names, ...names];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((name, i) => (
          <span className="ticker-item latin" key={`${name}-${i}`}>
            <i />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faqs">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q.en} className={`faq ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>
                <Tx en={item.q.en} bn={item.q.bn} />
              </span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-a">
              <p>
                <Tx en={item.a.en} bn={item.a.bn} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
