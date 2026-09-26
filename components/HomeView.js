import Link from "next/link";
import Tx from "./Tx";
import { Icon, Quote } from "./Marks";
import { cases, credentials, courts, faqs, practiceAreas, quotes, stats, steps } from "@/lib/ui";
import { engagements, hasWhatsapp, site, telLink, whatsappLink } from "@/lib/site";

const bnNum = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮"];

export default function HomeView() {
  return (
    <>
      <Hero />
      <Practice />
      <About />
      <Cases />
      <Process />
      <Fees />
      <Testimonials />
      <Faq />
      <Visit />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-veil" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-chip">
            <span className="chip-dot" aria-hidden="true" />
            <Tx en={site.availability.en} bn={site.availability.bn} />
          </p>
          <h1>
            <Tx
              en="Twenty-seven years at the bar. Your side of the case, argued like it matters."
              bn="২৭ বছরের আইনজীবী। আপনার মামলার পক্ষে — যেভাবে বলা উচিত, সেভাবে।"
            />
          </h1>
          <p className="hero-dek">
            <Tx
              en="Criminal bail, land disputes, family and inheritance, High Court writs — practised before the Supreme Court of Bangladesh and the courts of Dhaka. Straight answers first; litigation only when it truly serves you."
              bn="ফৌজদারি জামিন, ভূমি বিরোধ, পারিবারিক ও উত্তরাধিকার, হাইকোর্ট রিট — বাংলাদেশ সুপ্রিম কোর্ট ও ঢাকার আদালতে দীর্ঘ অভিজ্ঞতা। প্রথমেই সোজাসাপ্টা উত্তর; সত্যিই দরকার হলে তবেই মামলা।"
            />
          </p>
          <div className="hero-actions">
            <Link href="/start" className="btn gold big">
              <Tx en="Request consultation" bn="পরামর্শের অনুরোধ" />
              <Icon name="arrow" size={18} />
            </Link>
            {hasWhatsapp() && (
              <a className="btn ghost-light big" href={whatsappLink()} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={19} />
                <Tx en="WhatsApp the chamber" bn="হোয়াটসঅ্যাপে লিখুন" />
              </a>
            )}
          </div>
          <ul className="hero-trust">
            <li>
              <Icon name="check" size={15} />
              <Tx en={site.barReg.en} bn={site.barReg.bn} />
            </li>
            <li>
              <Icon name="check" size={15} />
              <Tx en={site.enrolled.en} bn={site.enrolled.bn} />
            </li>
            <li>
              <Icon name="check" size={15} />
              <Tx en="SCBA member" bn="এসসিবিএ সদস্য" />
            </li>
          </ul>
        </div>
        <div className="hero-side">
          <figure className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/portrait.jpg"
              alt={site.name}
              width={720}
              height={960}
              fetchPriority="high"
            />
          </figure>
          <div className="hero-badge">
            <strong>২৭+</strong>
            <span>
              <Tx en="years at the bar" bn="বছরের আইন পেশা" />
            </span>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="wrap stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label.en}>
              <strong>{s.value.en === s.value.bn ? s.value.en : <Tx en={s.value.en} bn={s.value.bn} />}</strong>
              <span>
                <Tx en={s.label.en} bn={s.label.bn} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="section" id="practice">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">
              <Tx en="01 — Practice areas" bn="০১ — প্র্যাকটিস এরিয়া" />
            </p>
            <h2>
              <Tx en="Six matters. One standard." bn="ছয়টা বিষয়। একটাই মান।" />
            </h2>
          </div>
          <p className="dek">
            <Tx
              en="I take the cases this chamber can genuinely move — and say no to the rest. Every matter begins with the papers, not with promises."
              bn="এই চেম্বার যে মামলা সত্যিই চালাতে পারে, সেগুলোই নিই — বাকিগুলো না নেওয়ার কথাও স্পষ্ট বলি। প্রতিটা মামলা শুরু হয় প্রতিশ্রুতি দিয়ে নয়, কাগজপত্র দিয়ে।"
            />
          </p>
        </div>
        <div className="areas">
          {practiceAreas.map((a, i) => (
            <article className="area" key={a.id}>
              <span className="area-num">
                <Tx en={`0${i + 1}`} bn={bnNum[i]} />
              </span>
              <div className="area-icon">
                <Icon name={a.icon} size={24} />
              </div>
              <h3>
                <Tx en={a.title.en} bn={a.title.bn} />
              </h3>
              <p>
                <Tx en={a.short.en} bn={a.short.bn} />
              </p>
              <ul className="area-points">
                {a.points.slice(0, 3).map((p) => (
                  <li key={p.en}>
                    <Icon name="check" size={13} />
                    <Tx en={p.en} bn={p.bn} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="areas-more">
          <Link href="/services" className="text-link">
            <Tx en="Each area in detail →" bn="প্রতিটা বিষয়ের বিস্তারিত →" />
          </Link>
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <figure className="about-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/consult.jpg" alt="" width={960} height={720} loading="lazy" />
          <figcaption>
            <Tx en="Chamber consultation, Dhaka" bn="চেম্বারে পরামর্শ, ঢাকা" />
          </figcaption>
        </figure>
        <div className="about-copy">
          <p className="kicker">
            <Tx en="02 — The advocate" bn="০২ — আইনজীবী" />
          </p>
          <h2>
            <Tx en={site.nameEn} bn={site.name} />
          </h2>
          <p className="about-role">
            <Tx en={site.role.en} bn={site.role.bn} />
          </p>
          <p className="about-bio">
            <Tx
              en="Called to the bar in 1998 and to the High Court Division in 2002. The practice has stayed deliberately small — one senior advocate, a trusted bench of associates, and clients who are never handed off. Courtrooms reward preparation, not noise; the chamber runs on that belief."
              bn="১৯৯৮ সালে আইন পেশায়, ২০০২ সালে হাইকোর্ট বিভাগে তালিকাভুক্ত। প্র্যাকটিসটা ইচ্ছা করেই ছোট রাখা — একজন সিনিয়র আইনজীবী, বিশ্বস্ত কিছু সহকারী, আর এমন ক্লায়েন্ট যাঁরা কখনো অন্য কারও হাতে চলে যান না। আদালত প্রস্তুতিকেই সম্মান দেয়, শোরগোলকে নয় — চেম্বার এই বিশ্বাসেই চলে।"
            />
          </p>
          <div className="about-cols">
            <div>
              <h4>
                <Tx en="Credentials" bn="শিক্ষা ও সদস্যপদ" />
              </h4>
              <ul className="cred-list">
                {credentials.map((c) => (
                  <li key={c.en}>
                    <Icon name="check" size={13} />
                    <Tx en={c.en} bn={c.bn} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>
                <Tx en="Courts of practice" bn="আদালত" />
              </h4>
              <ul className="cred-list">
                {courts.map((c) => (
                  <li key={c.en}>
                    <Icon name="pillar" size={13} />
                    <Tx en={c.en} bn={c.bn} />
                  </li>
                ))}
              </ul>
              <p className="about-note">
                <Tx
                  en="Outside Dhaka, matters run with trusted local counsel under this chamber's supervision."
                  bn="ঢাকার বাইরের মামলা এই চেম্বারের তত্ত্বাবধানে বিশ্বস্ত স্থানীয় আইনজীবীর সঙ্গে চলে।"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section className="section dark cases" id="cases">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker light">
              <Tx en="03 — Selected results" bn="০৩ — কিছু ফলাফল" />
            </p>
            <h2>
              <Tx en="Outcomes, not slogans." bn="স্লোগান নয় — ফলাফল।" />
            </h2>
          </div>
          <p className="dek light">
            <Tx
              en="Names withheld — confidentiality comes before showcase. Details shared in the chamber, with the client's consent."
              bn="নাম প্রকাশ নয় — গোপনীয়তা প্রদর্শনীর আগে। বিস্তারিত ক্লায়েন্টের অনুমতিতে চেম্বারেই দেখানো হয়।"
            />
          </p>
        </div>
        <div className="case-grid">
          {cases.map((c) => (
            <article className="case" key={c.title.en}>
              <span className="case-tag">
                <Tx en={c.tag.en} bn={c.tag.bn} />
              </span>
              <h3>
                <Tx en={c.title.en} bn={c.title.bn} />
              </h3>
              <p>
                <Tx en={c.body.en} bn={c.body.bn} />
              </p>
            </article>
          ))}
        </div>
        <p className="case-note">
          <Tx
            en="Past results do not guarantee future outcomes — anyone who promises a win before reading the file is selling you something."
            bn="অতীতের ফলাফল ভবিষ্যতের গ্যারান্টি নয় — ফাইল না পড়েই জেতার আশ্বাস যে দেয়, সে আসলে বিক্রি করছে অন্য কিছু।"
          />
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">
              <Tx en="04 — How it works" bn="০৪ — কীভাবে কাজ হয়" />
            </p>
            <h2>
              <Tx en="Four steps, nothing hidden." bn="চার ধাপ। কিছুই লুকানো নেই।" />
            </h2>
          </div>
          <p className="dek">
            <Tx
              en="Most fear of lawyers is fear of not knowing what happens next. So here is the whole road, from the first call to the last order."
              bn="আইনজীবীকে নিয়ে ভয় আসলে অজানার ভয় — পরের ধাপে কী হবে জানি না, এই অনিশ্চয়তা। তাই পুরো রাস্তাটা এখানেই — প্রথম ফোন থেকে শেষ আদেশ পর্যন্ত।"
            />
          </p>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <div>
                <h3>
                  <Tx en={s.title.en} bn={s.title.bn} />
                </h3>
                <p>
                  <Tx en={s.body.en} bn={s.body.bn} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Fees() {
  return (
    <section className="section fees" id="fees">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">
              <Tx en="05 — Fees" bn="০৫ — ফি" />
            </p>
            <h2>
              <Tx en="Written down, before you ask." bn="জিজ্ঞেস করার আগেই, লিখে বলা।" />
            </h2>
          </div>
          <p className="dek">
            <Tx
              en="Fee structures that fit Bangladeshi matters — consultation rates up front, engagement fees quoted in writing after the papers are seen. No meter running in the dark."
              bn="বাংলাদেশের মামলার সঙ্গে মানানসই ফি — পরামর্শের রেট এখানেই, এনগেজমেন্টের ফি দলিল দেখে লিখিতভাবে। অন্ধকারে মিটার চলে না।"
            />
          </p>
        </div>
        <div className="fees-grid">
          {engagements.map((f) => {
            const price =
              typeof f.price === "string" ? <Tx en={f.priceEn || f.price} bn={f.price} /> : <Tx en={f.price.en} bn={f.price.bn} />;
            return (
              <article className={`fee ${f.featured ? "featured" : ""}`} key={f.id}>
                {f.featured && (
                  <span className="fee-flag">
                    <Tx en={f.label.en} bn={f.label.bn} />
                  </span>
                )}
                <h3>
                  <Tx en={f.name.en} bn={f.name.bn} />
                </h3>
                <p className="fee-price">{price}</p>
                <p className="fee-per">
                  <Tx en={f.per.en} bn={f.per.bn} />
                </p>
                <p className="fee-blurb">
                  <Tx en={f.blurb.en} bn={f.blurb.bn} />
                </p>
                <ul>
                  {f.features.map((x) => (
                    <li key={x.en}>
                      <Icon name="check" size={13} />
                      <Tx en={x.en} bn={x.bn} />
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/start?matter=${f.id}`}
                  className={`btn ${f.featured ? "gold" : ""} fee-btn`}
                >
                  <Tx en="Book this" bn="এটা বুক করুন" />
                  <Icon name="arrow" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
        <p className="fees-note">
          <Tx
            en="Court fees, process costs and third-party charges are separate and always shown in the written estimate. Payment plans possible for family and criminal matters."
            bn="আদালত ফি, প্রসেস খরচ ও তৃতীয় পক্ষের বাবা আলাদা — লিখিত অনুমানেই দেখানো হয়। পারিবারিক ও ফৌজদারি মামলায় কিস্তিতে ফি দেওয়ার সুযোগ আছে।"
          />
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section quotes-sec" id="quotes">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">
              <Tx en="06 — Client words" bn="০৬ — ক্লায়েন্টদের ভাষায়" />
            </p>
            <h2>
              <Tx en="What remains, after the order." bn="আদেশের পরেও যা থাকে।" />
            </h2>
          </div>
        </div>
        <div className="quotes">
          {quotes.map((q) => (
            <figure className="quote" key={q.name.en}>
              <span className="quote-mark">
                <Quote size={30} />
              </span>
              <blockquote>
                <Tx en={q.text.en} bn={q.text.bn} />
              </blockquote>
              <figcaption>
                <strong>
                  <Tx en={q.name.en} bn={q.name.bn} />
                </strong>
                <span>
                  <Tx en={q.role.en} bn={q.role.bn} />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section faq-sec" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-intro">
          <p className="kicker">
            <Tx en="07 — Questions" bn="০৭ — প্রশ্ন" />
          </p>
          <h2>
            <Tx en="Asked in the chamber, every week." bn="চেম্বারে প্রতি সপ্তাহে যা জিজ্ঞেস হয়।" />
          </h2>
          <p className="dek">
            <Tx
              en="If yours is not here, ask it directly — the chamber answers before it bills."
              bn="আপনার প্রশ্ন এখানে না থাকলে সরাসরি করুন — ফি নেওয়ার আগেই উত্তর মেলে।"
            />
          </p>
          <div className="faq-contact">
            <a className="btn ghost" href={telLink()}>
              <Icon name="phone" size={17} />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq" key={f.q.en}>
              <summary>
                <span>
                  <Tx en={f.q.en} bn={f.q.bn} />
                </span>
                <span className="faq-x" aria-hidden="true">
                  <Icon name="plus" size={17} />
                </span>
              </summary>
              <div className="faq-a">
                <Tx en={f.a.en} bn={f.a.bn} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <figure className="visit-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/chamber.jpg" alt="" width={1440} height={810} loading="lazy" />
        </figure>
        <div className="visit-cards">
          <div className="visit-card">
            <Icon name="pin" size={22} />
            <div>
              <h3>
                <Tx en="The chamber" bn="চেম্বার" />
              </h3>
              <p>
                <Tx en={site.chamber.en} bn={site.chamber.bn} />
              </p>
              <p className="visit-sub">
                <Tx
                  en="Near Shahbagh crossing; the SCBA annex is behind the main bar building."
                  bn="শাহবাগ মোড়ের পাশে; এসসিবিএ অ্যানেক্স মূল বার বিল্ডিংয়ের পেছনে।"
                />
              </p>
            </div>
          </div>
          <div className="visit-card">
            <Icon name="clock" size={22} />
            <div>
              <h3>
                <Tx en="Hours" bn="সময়" />
              </h3>
              <p>
                <Tx en={site.hours.en} bn={site.hours.bn} />
              </p>
              <p className="visit-sub">
                <Tx
                  en="Friday–Saturday closed, except urgent bail. An appointment saves you a wait."
                  bn="শুক্র–শনি বন্ধ, জরুরি জামিন ছাড়া। অ্যাপয়েন্টমেন্ট নিলে অপেক্ষা কম।"
                />
              </p>
            </div>
          </div>
          <div className="visit-card">
            <Icon name="phone" size={22} />
            <div>
              <h3>
                <Tx en="Appointments" bn="অ্যাপয়েন্টমেন্ট" />
              </h3>
              <p>
                <a href={telLink()}>{site.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <Link href="/start" className="btn gold visit-btn">
                <Tx en="Book a slot" bn="সময় নিন" />
                <Icon name="arrow" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
