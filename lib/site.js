/**
 * ★ লাইভ করার আগে এই ফাইলটা এডিট করুন।
 * ইমেইল, হোয়াটসঅ্যাপ, সোশ্যাল — ক্লায়েন্ট এখান থেকেই আপনাকে পাবে।
 *
 * whatsapp: দেশ কোডসহ, শুধু সংখ্যা। যেমন "8801712345678"
 *   খালি রাখলে হোয়াটসঅ্যাপ বাটন লুকানো থাকবে।
 */

export const site = {
  name: "YourLogo",
  email: "hello@yourlogo.studio",
  whatsapp: "",
  phoneDisplay: "",
  location: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
  availability: { en: "Now taking projects", bn: "নতুন প্রজেক্ট নিচ্ছি" },
  instagram: "",
  facebook: "",
  behance: "",
  founded: "2026",
};

export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function hasWhatsapp() {
  return Boolean(site.whatsapp && String(site.whatsapp).replace(/\D/g, "").length >= 8);
}

export function whatsappLink(message) {
  if (!hasWhatsapp()) return "";
  const num = String(site.whatsapp).replace(/\D/g, "");
  const base = `https://wa.me/${num}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailLink(subject, body) {
  const q = new URLSearchParams();
  if (subject) q.set("subject", subject);
  if (body) q.set("body", body);
  const qs = q.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ""}`;
}

export const packages = [
  {
    id: "mark",
    name: { en: "The Mark", bn: "মার্ক" },
    price: "৳22,000",
    blurb: {
      en: "For a name that needs a face.",
      bn: "একটা নামের, একটা মুখ দরকার — যাদের।",
    },
    featured: false,
    features: [
      { en: "Primary logo and symbol", bn: "প্রাইমারি লোগো ও সিম্বল" },
      { en: "Horizontal and stacked lockups", bn: "আড়াআড়ি ও স্তূপ লকআপ" },
      { en: "One-color and reversed versions", bn: "এক রং ও রিভার্স ভার্সন" },
      { en: "Color and type direction", bn: "রং ও টাইপের দিকনির্দেশনা" },
      { en: "SVG, PDF, and PNG files", bn: "SVG, PDF, ও PNG ফাইল" },
      { en: "Two rounds of revision", bn: "দুই রাউন্ড রিভিশন" },
      { en: "10–14 days", bn: "১০–১৪ দিন" },
    ],
  },
  {
    id: "identity",
    name: { en: "The Identity", bn: "আইডেন্টিটি" },
    price: "৳65,000",
    blurb: {
      en: "For a brand that needs a system, not just a symbol.",
      bn: "শুধু সিম্বল নয় — একটা সিস্টেম দরকার, যাদের।",
    },
    featured: true,
    label: { en: "Most chosen", bn: "সবচেয়ে বেশি বেছে নেওয়া" },
    features: [
      { en: "Everything in The Mark", bn: "মার্ক প্যাকেজের সবকিছু" },
      { en: "Full color system", bn: "পুরো কালার সিস্টেম" },
      { en: "Social avatars and cover", bn: "সোশ্যাল অ্যাভাটার ও কভার" },
      { en: "Business card and letterhead", bn: "বিজনেস কার্ড ও লেটারহেড" },
      { en: "Mini guidelines, 8–12 pages", bn: "মিনি গাইডলাইন, ৮–১২ পাতা" },
      { en: "Bangla wordmark, if you need it", bn: "দরকার হলে বাংলা ওয়ার্ডমার্ক" },
      { en: "Three rounds of revision", bn: "তিন রাউন্ড রিভিশন" },
      { en: "3–4 weeks", bn: "৩–৪ সপ্তাহ" },
    ],
  },
  {
    id: "signature",
    name: { en: "The Signature", bn: "সিগনেচার" },
    price: "৳1,40,000",
    blurb: {
      en: "For a launch, a rebrand, or a room that has to feel like you.",
      bn: "লঞ্চ, রিব্র্যান্ড, বা এমন একটা জায়গা — যা আপনার মতো দেখাতে হবে।",
    },
    featured: false,
    features: [
      { en: "Everything in The Identity", bn: "আইডেন্টিটি প্যাকেজের সবকিছু" },
      { en: "Naming support, if the name is still open", bn: "নাম খোলা থাকলে নেমিং সাপোর্ট" },
      { en: "Packaging or signage direction", bn: "প্যাকেজিং বা সাইনেজের দিক" },
      { en: "Brand voice notes", bn: "ব্র্যান্ড ভয়েসের নোট" },
      { en: "Launch kit for your printer and developer", bn: "প্রিন্টার ও ডেভেলপারের জন্য লঞ্চ কিট" },
      { en: "Priority timeline", bn: "অগ্রাধিকার সময়" },
      { en: "Four rounds of revision", bn: "চার রাউন্ড রিভিশন" },
      { en: "4–6 weeks", bn: "৪–৬ সপ্তাহ" },
    ],
  },
];
