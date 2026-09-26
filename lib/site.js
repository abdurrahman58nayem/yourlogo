/**
 * ★ ডেমো সাইট — লাইভ করার আগে এই ফাইলটা এডিট করুন।
 * ইমেইল, ফোন, হোয়াটসঅ্যাপ, ঠিকানা — ক্লায়েন্ট এখান থেকেই আপনাকে পাবে।
 *
 * whatsapp: দেশ কোডসহ, শুধু সংখ্যা। যেমন "8801712345678"
 *   খালি রাখলে হোয়াটসঅ্যাপ বাটন লুকানো থাকবে।
 */

export const site = {
  name: "অ্যাডভোকেট মো. আবদুল লতিফ",
  nameEn: "Advocate Md. Abdul Latif",
  wordmark: { bn: "আবদুল লতিফ", en: "A. Latif" },
  role: {
    bn: "সিনিয়র আইনজীবী — বাংলাদেশ সুপ্রিম কোর্ট",
    en: "Senior Advocate — Supreme Court of Bangladesh",
  },
  email: "chamber@latiflaw.com.bd",
  phoneDisplay: "+880 1712-345678",
  phone: "+8801712345678",
  whatsapp: "8801712345678",
  location: {
    bn: "সুপ্রিম কোর্ট বার অ্যাসোসিয়েশন, শাহবাগ, ঢাকা-১০০০",
    en: "Supreme Court Bar Association, Shahbagh, Dhaka 1000",
  },
  chamber: {
    bn: "রুম ৫১২, এসসিবিএ অ্যানেক্স বিল্ডিং, শাহবাগ, ঢাকা-১০০০",
    en: "Room 512, SCBA Annex Building, Shahbagh, Dhaka 1000",
  },
  hours: {
    bn: "রবি – বৃহস্পতি · সকাল ১০টা – সন্ধ্যা ৭টা",
    en: "Sun – Thu · 10:00 AM – 7:00 PM",
  },
  availability: {
    bn: "নতুন মামলা ও পরামর্শ নিচ্ছি",
    en: "Accepting new cases & consultations",
  },
  barReg: { bn: "বার কাউন্সিল রেজি. নং ঢাকা-১০৯৪ (ডেমো)", en: "Bar Council Reg. DHA-1094 (demo)" },
  enrolled: { bn: "তালিকাভুক্ত: ১৯৯৮ (জেলা) · ২০০২ (হাইকোর্ট)", en: "Enrolled: 1998 (District) · 2002 (High Court)" },
  facebook: "",
  linkedin: "",
  founded: "1998",
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

export function telLink() {
  return `tel:${String(site.phone || site.phoneDisplay).replace(/[^\d+]/g, "")}`;
}

export function mailLink(subject, body) {
  const q = new URLSearchParams();
  if (subject) q.set("subject", subject);
  if (body) q.set("body", body);
  const qs = q.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ""}`;
}

/** পরামর্শ / এনগেজমেন্ট — দাম ডেমোর জন্য, ক্লায়েন্ট বদলে নেবে */
export const engagements = [
  {
    id: "consult",
    name: { bn: "প্রাথমিক পরামর্শ", en: "Initial Consultation" },
    price: "৳১,০০০",
    priceEn: "৳1,000",
    per: { bn: "৩০ মিনিট · চেম্বারে বা অনলাইনে", en: "30 min · in chamber or online" },
    blurb: {
      bn: "মামলার প্রকৃতি বুঝে সামনের পথ কী, সেটা পরিষ্কার করা।",
      en: "Understand where you stand and what the road ahead looks like.",
    },
    featured: false,
    features: [
      { bn: "মামলার প্রকৃতি ও শ্রেণিবিন্যাস", en: "Nature and classification of your matter" },
      { bn: "সম্ভাব্য আইনি পথসমূহ", en: "Possible legal routes" },
      { bn: "প্রয়োজনীয় কাগজপত্রের তালিকা", en: "Checklist of documents to bring" },
      { bn: "জরুরি হলে তাৎক্ষণিক পদক্ষেপের পরামর্শ", en: "Urgent steps, if the matter is time-sensitive" },
    ],
  },
  {
    id: "strategy",
    name: { bn: "বিস্তারিত পরামর্শ ও কৌশল", en: "Strategy & Opinion" },
    price: "৳৩,০০০",
    priceEn: "৳3,000",
    per: { bn: "দলিলপত্র যাচাইসহ · ৩–৫ দিনে লিখিত মতামত", en: "with document review · written opinion in 3–5 days" },
    blurb: {
      bn: "দলিল দেখে, আইন মিলিয়ে — একটা লিখিত, দায়বদ্ধ মতামত।",
      en: "A considered, written opinion after reviewing your papers.",
    },
    featured: true,
    label: { bn: "সবচেয়ে বেশি নেওয়া হয়", en: "Most chosen" },
    features: [
      { bn: "সব দলিলপত্রের পূর্ণ যাচাই", en: "Full review of all documents" },
      { bn: "লিখিত আইনি মতামত (বাংলা/ইংরেজি)", en: "Written legal opinion (Bangla/English)" },
      { bn: "সাফল্যের সম্ভাবনা ও ঝুঁকি মূল্যায়ন", en: "Merit, risk and cost assessment" },
      { bn: "মামলার সম্ভাব্য খরচ ও সময়সীমার অনুমান", en: "Estimated fees, costs and timeline" },
      { bn: "পরবর্তী ৯০ দিনের কর্মপরিকল্পনা", en: "A 90-day action plan" },
    ],
  },
  {
    id: "representation",
    name: { bn: "পূর্ণাঙ্গ প্রতিনিধিত্ব", en: "Full Representation" },
    price: { bn: "মামলা অনুযায়ী", en: "Case-by-case" },
    per: { bn: "কোট পরামর্শের পর লিখিতভাবে", en: "quoted in writing after consultation" },
    blurb: {
      bn: "আদালত থেকে নিষ্পত্তি — শুরু থেকে শেষ পর্যন্ত দায়িত্ব।",
      en: "From filing to final order — the whole road, handled.",
    },
    featured: false,
    features: [
      { bn: "মামলা দায়ের, লিখিত বক্তব্য ও আবেদন", en: "Filing, pleadings and applications" },
      { bn: "প্রতিটি হেয়ারিংয়ে আদালতে উপস্থিতি", en: "Court appearance at every hearing" },
      { bn: "প্রতি হেয়ারিংয়ের পর লিখিত আপডেট", en: "Written update after every hearing" },
      { bn: "জামিন, রিট ও আপিল — প্রয়োজন অনুযায়ী", en: "Bail, writ and appeal — as the case needs" },
      { bn: "নিষ্পত্তির পরও ৬ মাস ফলো-আপ", en: "Six months of follow-up after disposal" },
    ],
  },
];
