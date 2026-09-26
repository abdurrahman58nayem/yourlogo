"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Tx from "./Tx";
import { Icon, StudioMark } from "./Marks";
import { hasWhatsapp, site, telLink, whatsappLink } from "@/lib/site";
import { applyLang } from "@/lib/lang";

const links = [
  { href: "/#practice", id: "practice", en: "Practice", bn: "প্র্যাকটিস" },
  { href: "/#about", id: "about", en: "About", bn: "পরিচয়" },
  { href: "/#cases", id: "cases", en: "Results", bn: "ফলাফল" },
  { href: "/#process", id: "process", en: "Process", bn: "প্রসেস" },
  { href: "/#faq", id: "faq", en: "FAQ", bn: "প্রশ্ন" },
];

export default function Shell({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return undefined;
    const ids = ["practice", "about", "cases", "process", "fees", "faq"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        <Tx en="Skip to content" bn="মূল অংশে যান" />
      </a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="brand" aria-label="Home">
            <StudioMark />
            <span className="brand-text">
              <span className="brand-word">
                <Tx en={site.wordmark.en} bn={site.wordmark.bn} />
              </span>
              <span className="brand-sub">
                <Tx en="Supreme Court, Dhaka" bn="সুপ্রিম কোর্ট, ঢাকা" />
              </span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.id} href={l.href} className={`nav-link ${active === l.id ? "on" : ""}`}>
                <Tx en={l.en} bn={l.bn} />
              </Link>
            ))}
          </nav>
          <div className="nav-end">
            <div className="lang" role="group" aria-label="Language">
              <button type="button" className="lang-en" onClick={() => applyLang("en")}>
                EN
              </button>
              <button type="button" className="lang-bn" onClick={() => applyLang("bn")}>
                বাং
              </button>
            </div>
            <Link href="/start" className="btn nav-cta">
              <Tx en="Consult" bn="পরামর্শ নিন" />
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr">{open ? "Close menu" : "Open menu"}</span>
              <span className={`burger ${open ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="menu" id="site-menu">
          <nav className="menu-links">
            {links.map((l) => (
              <Link key={l.id} href={l.href} onClick={() => setOpen(false)}>
                <Tx en={l.en} bn={l.bn} />
              </Link>
            ))}
            <Link href="/start" onClick={() => setOpen(false)}>
              <Tx en="Request consultation" bn="পরামর্শের অনুরোধ" />
            </Link>
          </nav>
          <div className="menu-foot">
            <a href={telLink()}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>
              <Tx en={site.location.en} bn={site.location.bn} />
            </span>
          </div>
        </div>
      )}

      <main id="main">{children}</main>
      <Footer />
      <div className="mobile-bar">
        <a className="mb-call" href={telLink()} aria-label="Call">
          <Icon name="phone" size={20} />
          <span>
            <Tx en="Call" bn="কল" />
          </span>
        </a>
        {hasWhatsapp() && (
          <a className="mb-wa" href={whatsappLink()} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={20} />
            <span>WhatsApp</span>
          </a>
        )}
        <Link href="/start" className="mb-cta">
          <Tx en="Consult" bn="পরামর্শ নিন" />
        </Link>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="closing" id="contact">
      <div className="wrap closing-inner">
        <p className="kicker light">
          <Tx en="A conversation before a case" bn="মামলার আগে একটা কথা" />
        </p>
        <h2>
          <Tx
            en="Let the law carry your side of the story."
            bn="আপনার পক্ষের কথা, এবার আইন বলবে।"
          />
        </h2>
        <p className="closing-dek">
          <Tx
            en="Call, message, or leave a note in the form — the chamber replies within one business day. The first ten minutes are free; the advice is honest from the first minute."
            bn="ফোন করুন, লিখুন, বা ফর্মে খোঁজ রাখুন — এক কর্মদিবসের মধ্যে চেম্বার থেকে উত্তর পাবেন। প্রথম ১০ মিনিট ফ্রি; পরামর্শ প্রথম মিনিট থেকেই সৎ।"
          />
        </p>
        <div className="closing-actions">
          <Link href="/start" className="btn gold">
            <Tx en="Request consultation" bn="পরামর্শের অনুরোধ" />
          </Link>
          <a className="btn ghost-light" href={telLink()}>
            <Icon name="phone" size={18} /> {site.phoneDisplay}
          </a>
          {hasWhatsapp() && (
            <a className="btn ghost-light" href={whatsappLink()} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> WhatsApp
            </a>
          )}
        </div>
      </div>
      <div className="foot">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <StudioMark />
            <div>
              <strong className="brand-word">
                <Tx en={site.nameEn} bn={site.name} />
              </strong>
              <p>
                <Tx en={site.chamber.en} bn={site.chamber.bn} />
                <br />
                <Tx en={site.hours.en} bn={site.hours.bn} />
              </p>
            </div>
          </div>
          <nav className="foot-links" aria-label="Footer">
            <Link href="/#practice">
              <Tx en="Practice" bn="প্র্যাকটিস" />
            </Link>
            <Link href="/#cases">
              <Tx en="Results" bn="ফলাফল" />
            </Link>
            <Link href="/#fees">
              <Tx en="Fees" bn="ফি" />
            </Link>
            <Link href="/start">
              <Tx en="Consult" bn="পরামর্শ" />
            </Link>
            {site.facebook && <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>}
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </nav>
          <div className="foot-legal">
            <p className="foot-copy">
              © {new Date().getFullYear()} <Tx en={site.nameEn} bn={site.name} />.
            </p>
            <p className="foot-disclaimer">
              <Tx
                en="Information on this website is for general awareness only and does not constitute legal advice. An advocate–client relationship is formed only through a signed engagement."
                bn="এই ওয়েবসাইটের তথ্য শুধু সাধারণ সচেতনতার জন্য; এটি আইনি পরামর্শ নয়। অ্যাডভোকেট–ক্লায়েন্ট সম্পর্ক গঠিত হয় কেবল লিখিত এনগেজমেন্টের মাধ্যমে।"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
