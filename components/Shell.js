"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Tx from "./Tx";
import { StudioMark } from "./Marks";
import { site, hasWhatsapp, whatsappLink } from "@/lib/site";
import { applyLang } from "@/lib/lang";

const links = [
  { href: "/#work", id: "work", en: "Work", bn: "কাজ" },
  { href: "/#services", id: "services", en: "Services", bn: "সার্ভিস" },
  { href: "/#process", id: "process", en: "Process", bn: "প্রসেস" },
  { href: "/#studio", id: "studio", en: "Studio", bn: "স্টুডিও" },
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
    const ids = ["work", "services", "process", "studio", "packages"];
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
          <Link href="/" className="brand" aria-label="YourLogo home">
            <StudioMark />
            <span className="brand-word">YourLogo</span>
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
              <Tx en="Start a project" bn="প্রজেক্ট শুরু" />
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
            <Link href="/#packages" onClick={() => setOpen(false)}>
              <Tx en="Packages" bn="প্যাকেজ" />
            </Link>
            <Link href="/start" onClick={() => setOpen(false)}>
              <Tx en="Start a project" bn="প্রজেক্ট শুরু করুন" />
            </Link>
          </nav>
          <div className="menu-foot">
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
        {hasWhatsapp() ? (
          <a className="btn ghost" href={whatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        ) : null}
        <Link href="/start" className="btn">
          <Tx en="Start a project" bn="প্রজেক্ট শুরু" />
        </Link>
      </div>
    </>
  );
}

function Footer() {
  const socials = [
    site.instagram && { label: "Instagram", href: site.instagram },
    site.facebook && { label: "Facebook", href: site.facebook },
    site.behance && { label: "Behance", href: site.behance },
  ].filter(Boolean);

  return (
    <footer className="closing" id="contact">
      <div className="wrap closing-inner">
        <p className="kicker light">
          <Tx en="A conversation, not a contract" bn="চুক্তি নয় — একটা কথা" />
        </p>
        <h2>
          <Tx en="Have a name that needs a mark?" bn="একটা নাম আছে, যার একটা মার্ক দরকার?" />
        </h2>
        <p className="closing-dek">
          <Tx
            en="Tell us what you're building. We reply within one business day — with a sense of fit, a timeline, and a clear quote. No payment to start the conversation."
            bn="কী বানাচ্ছেন, একটু বলুন। এক ব্যবসায়িক দিনের মধ্যে উত্তর দিই — মিল আছে কি না, সময়, আর একটা পরিষ্কার কোট। কথা শুরু করতে কোনো পেমেন্ট নেই।"
          />
        </p>
        <div className="closing-actions">
          <Link href="/start" className="btn light">
            <Tx en="Start a project" bn="প্রজেক্ট শুরু করুন" />
          </Link>
          <a className="btn ghost-light" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {hasWhatsapp() && (
            <a className="btn ghost-light" href={whatsappLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          )}
        </div>
      </div>
      <div className="foot">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <StudioMark />
            <div>
              <strong className="brand-word">YourLogo</strong>
              <p>
                <Tx en={site.location.en} bn={site.location.bn} />
              </p>
            </div>
          </div>
          <nav className="foot-links" aria-label="Footer">
            <Link href="/#work">
              <Tx en="Work" bn="কাজ" />
            </Link>
            <Link href="/#services">
              <Tx en="Services" bn="সার্ভিস" />
            </Link>
            <Link href="/#packages">
              <Tx en="Packages" bn="প্যাকেজ" />
            </Link>
            <Link href="/start">
              <Tx en="Start" bn="শুরু" />
            </Link>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
          <p className="foot-copy">
            © {new Date().getFullYear()} YourLogo.{" "}
            <Tx
              en="Identity studio. Marks with a long memory."
              bn="আইডেন্টিটি স্টুডিও। যে মার্ক অনেকদিন মনে থাকে।"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
