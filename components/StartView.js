"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Tx from "./Tx";
import { Icon, StudioMark } from "./Marks";
import { matters, modes, urgencies } from "@/lib/ui";
import { hasWhatsapp, mailLink, site, telLink, whatsappLink } from "@/lib/site";
import { useLang } from "./useLang";

const empty = {
  name: "",
  phone: "",
  email: "",
  matter: "criminal",
  urgency: "week",
  mode: "chamber",
  message: "",
  website: "",
};

export default function StartView() {
  const { lang, t } = useLang();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("matter");
    if (q && matters.some((m) => m.id === q)) {
      setForm((f) => ({ ...f, matter: q }));
    }
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const labelOf = (list, id) => {
    const item = list.find((x) => x.id === id);
    return item ? t(item) : id;
  };

  const built = useMemo(() => brief, [brief]);

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = lang === "bn" ? "নামটা লিখুন।" : "Please add your name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) {
      next.phone = lang === "bn" ? "সঠিক মোবাইল নম্বর দিন।" : "Please add a valid mobile number.";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = lang === "bn" ? "সঠিক ইমেইল দিন।" : "Please add a valid email.";
    }
    if (form.message.trim().length < 8) {
      next.message = lang === "bn" ? "বিষয়টা সম্পর্কে দুটো লাইন লিখুন।" : "A line or two about the matter, please.";
    }
    return next;
  }

  function makeBrief(currentLang) {
    const L = currentLang === "bn";
    const matter = matters.find((m) => m.id === form.matter);
    const urgency = urgencies.find((u) => u.id === form.urgency);
    const mode = modes.find((m) => m.id === form.mode);
    return [
      L ? "নতুন পরামর্শের অনুরোধ" : "New consultation request",
      `${L ? "নাম" : "Name"}: ${form.name.trim()}`,
      `${L ? "মোবাইল" : "Mobile"}: ${form.phone.trim()}`,
      form.email.trim() ? `${L ? "ইমেইল" : "Email"}: ${form.email.trim()}` : "",
      `${L ? "বিষয়" : "Matter"}: ${matter ? (L ? matter.bn : matter.en) : form.matter}`,
      `${L ? "জরুরি মাত্রা" : "Urgency"}: ${urgency ? (L ? urgency.bn : urgency.en) : form.urgency}`,
      `${L ? "যোগাযোগের ধরন" : "Mode"}: ${mode ? (L ? mode.bn : mode.en) : form.mode}`,
      "",
      form.message.trim(),
    ]
      .filter((line) => line !== "")
      .join("\n");
  }

  function onSubmit(e) {
    e.preventDefault();
    if (form.website) return; // honeypot
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    const text = makeBrief(lang);
    setBrief(text);
    setCopied(false);
    if (hasWhatsapp()) {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(built);
      setCopied(true);
    } catch (err) {
      setCopied(false);
    }
  }

  if (built) {
    const subject = lang === "bn" ? `পরামর্শের অনুরোধ — ${form.name}` : `Consultation request — ${form.name}`;
    return (
      <section className="section start">
        <div className="wrap start-done">
          <div className="done-mark">
            <StudioMark />
          </div>
          <h1>
            <Tx en="The chamber has your note." bn="আপনার খবর চেম্বারে পৌঁছেছে।" />
          </h1>
          <p className="dek">
            <Tx
              en="WhatsApp should have opened with your brief — press send there. Prefer email? Send the same text below. Either way, the reply comes within one business day; urgent bail matters by phone, straight away."
              bn="হোয়াটসঅ্যাপে আপনার লেখা তৈরি হয়ে খুলেছে — সেখানে পাঠিয়ে দিন। ইমেইল পছন্দ হলে নিচের লেখাটাই পাঠান। দুই ভাবেই উত্তর এক কর্মদিবসের মধ্যে; জরুরি জামিনের বেলায় সরাসরি ফোনই ভালো।"
            />
          </p>
          <div className="done-actions">
            <a className="btn gold" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(built)}`}>
              <Icon name="mail" size={17} />
              <Tx en="Send by email" bn="ইমেইলে পাঠান" />
            </a>
            <a className="btn ghost" href={telLink()}>
              <Icon name="phone" size={17} />
              {site.phoneDisplay}
            </a>
            <button type="button" className="btn ghost" onClick={copy}>
              {copied ? (
                <Tx en="Copied ✓" bn="কপি হয়েছে ✓" />
              ) : (
                <Tx en="Copy the text" bn="লেখা কপি করুন" />
              )}
            </button>
          </div>
          <pre className="brief">{built}</pre>
          <p className="start-back">
            <Link href="/" className="text-link">
              ← <Tx en="Back to the chamber" bn="চেম্বারে ফিরুন" />
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section start">
      <div className="wrap start-grid">
        <div className="start-side">
          <p className="kicker">
            <Tx en="Request a consultation" bn="পরামর্শের অনুরোধ" />
          </p>
          <h1>
            <Tx en="Tell the chamber what happened." bn="চেম্বারকে বলুন — কী হয়েছে।" />
          </h1>
          <p className="dek">
            <Tx
              en="A few lines is enough. What matters is the matter itself — the papers can wait for the chamber table. The reply comes within one business day."
              bn="কয়েকটা লাইনেই হবে। জরুরি হলো বিষয়টা নিজেই — দলিলপত্র চেম্বারের টেবিলে বসবে। উত্তর মিলবে এক কর্মদিবসের মধ্যে।"
            />
          </p>
          <ul className="start-points">
            <li>
              <Icon name="clock" size={17} />
              <Tx en="Reply within one business day" bn="এক কর্মদিবসের মধ্যে উত্তর" />
            </li>
            <li>
              <Icon name="shield" size={17} />
              <Tx en="Confidential — even if you never hire me" bn="গোপনীয় — মামলা না-ও নিলে" />
            </li>
            <li>
              <Icon name="check" size={17} />
              <Tx en="First 10 minutes on the phone are free" bn="ফোনে প্রথম ১০ মিনিট ফ্রি" />
            </li>
          </ul>
          <div className="start-call">
            <Tx en="In a hurry?" bn="সময় নেই?" />
            <a href={telLink()}>{site.phoneDisplay}</a>
          </div>
        </div>

        <form className="start-form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="f-name">
              <Tx en="Your name *" bn="আপনার নাম *" />
            </label>
            <input
              id="f-name"
              value={form.name}
              onChange={set("name")}
              autoComplete="name"
              placeholder={lang === "bn" ? "যেমন: কামরুল হাসান" : "e.g. Kamrul Hasan"}
            />
            {errors.name && <p className="err">{errors.name}</p>}
          </div>

          <div className="field">
            <label htmlFor="f-phone">
              <Tx en="Mobile number *" bn="মোবাইল নম্বর *" />
            </label>
            <input
              id="f-phone"
              value={form.phone}
              onChange={set("phone")}
              inputMode="tel"
              autoComplete="tel"
              placeholder="01712-345678"
            />
            {errors.phone && <p className="err">{errors.phone}</p>}
          </div>

          <div className="field">
            <label htmlFor="f-email">
              <Tx en="Email (optional)" bn="ইমেইল (ঐচ্ছিক)" />
            </label>
            <input
              id="f-email"
              value={form.email}
              onChange={set("email")}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
            {errors.email && <p className="err">{errors.email}</p>}
          </div>

          <fieldset className="field">
            <legend>
              <Tx en="What kind of matter is it?" bn="বিষয়টা কোন ধরনের?" />
            </legend>
            <div className="pills">
              {matters.map((m) => (
                <label key={m.id} className={`pill ${form.matter === m.id ? "on" : ""}`}>
                  <input
                    type="radio"
                    name="matter"
                    value={m.id}
                    checked={form.matter === m.id}
                    onChange={set("matter")}
                  />
                  <Tx en={m.en} bn={m.bn} />
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field-pair">
            <fieldset className="field">
              <legend>
                <Tx en="How urgent?" bn="কতটা জরুরি?" />
              </legend>
              <div className="pills col">
                {urgencies.map((u) => (
                  <label key={u.id} className={`pill ${form.urgency === u.id ? "on" : ""}`}>
                    <input
                      type="radio"
                      name="urgency"
                      value={u.id}
                      checked={form.urgency === u.id}
                      onChange={set("urgency")}
                    />
                    <Tx en={u.en} bn={u.bn} />
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="field">
              <legend>
                <Tx en="Where should we talk?" bn="কোথায় কথা বলব?" />
              </legend>
              <div className="pills col">
                {modes.map((m) => (
                  <label key={m.id} className={`pill ${form.mode === m.id ? "on" : ""}`}>
                    <input
                      type="radio"
                      name="mode"
                      value={m.id}
                      checked={form.mode === m.id}
                      onChange={set("mode")}
                    />
                    <Tx en={m.en} bn={m.bn} />
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="field">
            <label htmlFor="f-msg">
              <Tx en="What happened, in your own words *" bn="নিজের ভাষায় লিখুন — কী হয়েছে *" />
            </label>
            <textarea
              id="f-msg"
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder={
                lang === "bn"
                  ? "যেমন: আমার বাবার নামে নরসিংদীতে ২২ শতাংশ জমি আছে; চাচার ছেলে নামজারি আটকে রেখেছে…"
                  : "e.g. My late father left 22 decimals in Narsingdi; my cousin has blocked the namjari…"
              }
            />
            {errors.message && <p className="err">{errors.message}</p>}
          </div>

          <div className="hp" aria-hidden="true">
            <label htmlFor="f-website">Website</label>
            <input id="f-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
          </div>

          <button type="submit" className="btn gold big submit">
            <Tx en="Send to the chamber" bn="চেম্বারে পাঠান" />
            <Icon name="arrow" size={17} />
          </button>
          <p className="fine">
            <Tx
              en="Submitting opens WhatsApp with your note ready — nothing is stored on this site. Say only what you are comfortable sharing before engagement."
              bn="সাবমিট করলে হোয়াটসঅ্যাপ খুলে যাবে, লেখা তৈরি অবস্থায় — এই সাইটে কিছুই জমা থাকে না। এনগেজমেন্টের আগে যতটা বলতে আরামদায়ক, ততটাই লিখুন।"
            />
          </p>
        </form>
      </div>
    </section>
  );
}
