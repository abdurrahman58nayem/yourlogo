"use client";

import { useEffect, useMemo, useState } from "react";
import Tx from "./Tx";
import { StudioMark } from "./Marks";
import { budgets, needs, places, startSteps, timelines } from "@/lib/ui";
import { hasWhatsapp, mailLink, site, whatsappLink } from "@/lib/site";
import { useLang } from "./useLang";

const empty = {
  name: "",
  email: "",
  phone: "",
  company: "",
  need: "identity",
  budget: "unsure",
  timeline: "month",
  places: [],
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
    const q = new URLSearchParams(window.location.search).get("package");
    if (q && needs.some((n) => n.id === q)) {
      setForm((f) => ({ ...f, need: q }));
    }
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const togglePlace = (id) => {
    setForm((f) => ({
      ...f,
      places: f.places.includes(id) ? f.places.filter((p) => p !== id) : [...f.places, id],
    }));
  };

  const labelOf = (list, id) => {
    const item = list.find((x) => x.id === id);
    return item ? t(item) : id;
  };

  const built = useMemo(() => {
    if (!brief) return "";
    return brief;
  }, [brief]);

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = lang === "bn" ? "নামটা লিখুন।" : "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = lang === "bn" ? "সঠিক ইমেইল দিন।" : "Please add a valid email.";
    }
    if (form.message.trim().length < 8) {
      next.message = lang === "bn" ? "প্রজেক্ট সম্পর্কে একটু লিখুন।" : "Tell us a little about the project.";
    }
    return next;
  }

  function makeBrief(currentLang) {
    const L = currentLang === "bn";
    const need = needs.find((n) => n.id === form.need);
    const budget = budgets.find((b) => b.id === form.budget);
    const time = timelines.find((item) => item.id === form.timeline);
    const placeLabels = form.places
      .map((id) => places.find((p) => p.id === id))
      .filter(Boolean)
      .map((p) => (L ? p.bn : p.en));
    return [
      L ? "নতুন প্রজেক্ট — YourLogo" : "New project — YourLogo",
      `${L ? "নাম" : "Name"}: ${form.name.trim()}`,
      `${L ? "ইমেইল" : "Email"}: ${form.email.trim()}`,
      form.phone.trim() ? `${L ? "ফোন" : "Phone"}: ${form.phone.trim()}` : "",
      form.company.trim() ? `${L ? "প্রতিষ্ঠান" : "Company"}: ${form.company.trim()}` : "",
      `${L ? "প্রয়োজন" : "Need"}: ${need ? (L ? need.bn : need.en) : form.need}`,
      `${L ? "বাজেট" : "Budget"}: ${budget ? (L ? budget.bn : budget.en) : form.budget}`,
      `${L ? "সময়" : "Timeline"}: ${time ? (L ? time.bn : time.en) : form.timeline}`,
      placeLabels.length ? `${L ? "কোথায় ব্যবহার" : "Lives on"}: ${placeLabels.join(", ")}` : "",
      "",
      form.message.trim(),
    ]
      .filter((line) => line !== "")
      .join("\n");
  }

  function onSubmit(e) {
    e.preventDefault();
    if (form.website) return;
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
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch (err) {
      setCopied(false);
    }
  }

  if (brief) {
    const subject = lang === "bn" ? `নতুন আইডেন্টিটি — ${form.name}` : `New identity — ${form.name}`;
    return (
      <section className="section start">
        <div className="wrap start-success">
          <StudioMark />
          <p className="kicker">
            <Tx en="Brief ready" bn="ব্রিফ তৈরি" />
          </p>
          <h1>
            <Tx en="We've drafted your note." bn="আপনার নোট তৈরি।" />
          </h1>
          <p className="dek">
            <Tx
              en={
                hasWhatsapp()
                  ? "WhatsApp should have opened with this message. If it didn't, send it by email or copy it below. We reply within one business day."
                  : "Send this by email, or copy it into WhatsApp. We reply within one business day."
              }
              bn={
                hasWhatsapp()
                  ? "হোয়াটসঅ্যাপে এই মেসেজ খুলে যাওয়ার কথা। না খুললে ইমেইলে পাঠান, বা নিচ থেকে কপি করুন। এক ব্যবসায়িক দিনের মধ্যে উত্তর দিই।"
                  : "এটা ইমেইলে পাঠান, অথবা হোয়াটসঅ্যাপে কপি করুন। এক ব্যবসায়িক দিনের মধ্যে উত্তর দিই।"
              }
            />
          </p>
          <pre className="brief">{built}</pre>
          <div className="hero-actions">
            <a className="btn" href={mailLink(subject, brief)}>
              <Tx en="Send by email" bn="ইমেইলে পাঠান" />
            </a>
            {hasWhatsapp() && (
              <a className="btn ghost" href={whatsappLink(brief)} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            )}
            <button type="button" className="btn ghost" onClick={copy}>
              {copied ? <Tx en="Copied" bn="কপি হয়েছে" /> : <Tx en="Copy brief" bn="ব্রিফ কপি" />}
            </button>
          </div>
          <button type="button" className="text-btn" onClick={() => setBrief("")}>
            <Tx en="Edit the note" bn="নোট এডিট করুন" />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section start">
      <div className="wrap start-grid">
        <div className="start-copy">
          <p className="kicker">
            <Tx en="Start a project" bn="প্রজেক্ট শুরু" />
          </p>
          <h1>
            <Tx en="Tell us what you're building." bn="কী বানাচ্ছেন, একটু বলুন।" />
          </h1>
          <p className="dek">
            <Tx
              en="A short note is enough. We reply within one business day with a sense of fit, a timeline, and a clear quote."
              bn="ছোট একটা নোটই যথেষ্ট। এক ব্যবসায়িক দিনের মধ্যে উত্তর দিই — মিল আছে কি না, সময়, আর একটা পরিষ্কার কোট।"
            />
          </p>
          <ol className="start-steps">
            {startSteps.map((s, i) => (
              <li key={s.en}>
                <span className="latin">0{i + 1}</span>
                <Tx en={s.en} bn={s.bn} />
              </li>
            ))}
          </ol>
          <p className="start-direct">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phoneDisplay ? <span>{site.phoneDisplay}</span> : null}
            <span>
              <Tx en={site.location.en} bn={site.location.bn} />
            </span>
          </p>
        </div>

        <form className="form" id="brief" onSubmit={onSubmit} noValidate>
          <Field label={{ en: "Name", bn: "নাম" }} error={errors.name}>
            <input name="name" autoComplete="name" value={form.name} onChange={set("name")} required />
          </Field>
          <Field label={{ en: "Email", bn: "ইমেইল" }} error={errors.email}>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={set("email")}
              required
            />
          </Field>
          <div className="field-row">
            <Field label={{ en: "Phone / WhatsApp", bn: "ফোন / WhatsApp" }}>
              <input name="phone" autoComplete="tel" value={form.phone} onChange={set("phone")} />
            </Field>
            <Field label={{ en: "Company", bn: "প্রতিষ্ঠান" }}>
              <input name="company" autoComplete="organization" value={form.company} onChange={set("company")} />
            </Field>
          </div>
          <Field label={{ en: "What do you need?", bn: "কী দরকার?" }}>
            <select name="need" value={form.need} onChange={set("need")}>
              {needs.map((n) => (
                <option key={n.id} value={n.id}>
                  {labelOf(needs, n.id)}
                </option>
              ))}
            </select>
          </Field>
          <div className="field-row">
            <Field label={{ en: "Budget", bn: "বাজেট" }}>
              <select name="budget" value={form.budget} onChange={set("budget")}>
                {budgets.map((b) => (
                  <option key={b.id} value={b.id}>
                    {labelOf(budgets, b.id)}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={{ en: "Timeline", bn: "সময়" }}>
              <select name="timeline" value={form.timeline} onChange={set("timeline")}>
                {timelines.map((item) => (
                  <option key={item.id} value={item.id}>
                    {labelOf(timelines, item.id)}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <fieldset className="checks">
            <legend>
              <Tx en="Where will it live?" bn="কোথায় ব্যবহার হবে?" />
            </legend>
            <div className="check-grid">
              {places.map((p) => (
                <label key={p.id} className={form.places.includes(p.id) ? "on" : ""}>
                  <input
                    type="checkbox"
                    checked={form.places.includes(p.id)}
                    onChange={() => togglePlace(p.id)}
                  />
                  <Tx en={p.en} bn={p.bn} />
                </label>
              ))}
            </div>
          </fieldset>
          <Field label={{ en: "Tell us a little", bn: "একটু বলুন" }} error={errors.message}>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder={
                lang === "bn"
                  ? "নাম, কাদের জন্য, লোগো কোথায় থাকবে — এটুকুই যথেষ্ট।"
                  : "The name, who it's for, where the logo will live — that is enough."
              }
            />
          </Field>
          <label className="honeypot" aria-hidden="true">
            Website
            <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
          </label>
          <button className="btn full" type="submit">
            {hasWhatsapp() ? (
              <Tx en="Continue on WhatsApp" bn="WhatsApp-এ এগোন" />
            ) : (
              <Tx en="Prepare my brief" bn="ব্রিফ তৈরি করুন" />
            )}
          </button>
          <p className="form-note">
            <Tx
              en="We only use what you send to reply. No newsletter, no list."
              bn="যা পাঠাবেন, শুধু উত্তর দিতে ব্যবহার করব। কোনো নিউজলেটার নয়, কোনো লিস্ট নয়।"
            />
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? "bad" : ""}`}>
      <span>
        <Tx en={label.en} bn={label.bn} />
      </span>
      {children}
      {error ? <em>{error}</em> : null}
    </label>
  );
}
