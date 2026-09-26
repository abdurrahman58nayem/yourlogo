import { brands } from "./brands";

const raw = [
  {
    slug: "nokshi",
    name: "Nokshi",
    nameBn: "নকশি",
    year: "2026",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Textile", bn: "টেক্সটাইল" },
    filter: "culture",
    layout: "wide",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, Bangla wordmark, pattern", bn: "সিম্বল, বাংলা ওয়ার্ডমার্ক, প্যাটার্ন" },
    idea: { en: "A stitch, not a souvenir.", bn: "স্মারক নয় — একটা সেলাই।" },
    brief: {
      en: "Nokshi is a Dhaka textile house. They wanted a mark that could live on a woven label, a shop window, and a pattern repeat — without looking like a folk souvenir.",
      bn: "নকশি ঢাকার একটা টেক্সটাইল হাউস। তারা এমন একটা মার্ক চেয়েছিল, যা লেবেলে, দোকানের কাচে, আর কাপড়ের প্যাটার্নে বাঁচবে — কিন্তু স্মারক-দোকানের মতো দেখাবে না।",
    },
    approach: {
      en: "We drew a single geometric flower. Alone, it is the logo. Repeated, it is the first cloth. The Bangla wordmark নকশি sits beside a tracked Latin name, so the brand is fluent in both scripts.",
      bn: "আমরা একটা জ্যামিতিক ফুল এঁকেছি। একা থাকলে সেটা লোগো। বারবার হলে সেটাই প্রথম কাপড়। বাংলায় নকশি, পাশে ল্যাটিনে Nokshi — ব্র্যান্ডটা দুই লিপিতেই স্বাচ্ছন্দ্য।",
    },
    outcome: {
      en: "It can be screen-printed in one color, embroidered small, or tiled across a yard of cotton. People describe it as “the flower.” That is the test.",
      bn: "এক রঙে প্রিন্ট করা যায়, ছোট করে সেলাই করা যায়, গজ গজ কাপড়ে ছড়ানো যায়। মানুষ বলে “ওই ফুলটা।” সেটাই পরীক্ষা।",
    },
    palette: [
      { name: { en: "Indigo", bn: "নীল" }, hex: "#1C2E4A" },
      { name: { en: "Kantha gold", bn: "কাঁথা সোনা" }, hex: "#D4B483" },
      { name: { en: "Cotton", bn: "সুতি" }, hex: "#F3EDE2" },
      { name: { en: "Madder", bn: "মেডার" }, hex: "#8E3B3B" },
    ],
    typeNote: {
      en: "A literary Bangla serif for the wordmark. A plain grotesque for labels, so the flower can stay the loudest thing.",
      bn: "ওয়ার্ডমার্কে একটা সাহিত্যিক বাংলা সেরিফ। লেবেলে সাদামাটা গ্রোটেস্ক — যাতে ফুলটাই সবচেয়ে জোরে কথা বলে।",
    },
    image: "/images/indigo.jpg",
    imageAlt: {
      en: "Indigo cloth with a gold running stitch, the material idea behind Nokshi.",
      bn: "সোনালি সেলাইয়ের নীল কাপড় — নকশির পেছনের উপাদান।",
    },
    special: "pattern",
  },
  {
    slug: "vela",
    name: "Vela",
    nameBn: "ভেলা",
    year: "2026",
    place: { en: "Singapore", bn: "সিঙ্গাপুর" },
    sector: { en: "Payments", bn: "পেমেন্ট" },
    filter: "product",
    layout: "narrow",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, color system, product icon", bn: "সিম্বল, কালার সিস্টেম, প্রোডাক্ট আইকন" },
    idea: { en: "Forward, without an arrow.", bn: "সামনে — তীর ছাড়া।" },
    brief: {
      en: "Vela is a payments product. They needed to feel precise and fast, and to avoid every fintech cliché — no circuit, no rising graph, no V made of dots.",
      bn: "ভেলা একটা পেমেন্ট প্রোডাক্ট। নির্ভুল আর দ্রুত মনে হতে হবে — সার্কিট, ওঠা গ্রাফ, বিন্দু দিয়ে বানানো V, এসব ছাড়া।",
    },
    approach: {
      en: "Two sails. The left is paper-white. The right is a single signal green, used only when something succeeds: paid, sent, confirmed. The rest of the system is midnight and type.",
      bn: "দুইটা পাল। বাঁ পাশ কাগজ-সাদা। ডান পাশ একটাই সবুজ — শুধু যখন কিছু সফল হয়: পেমেন্ট, সেন্ড, কনফার্ম। বাকি সিস্টেম মধ্যরাত আর টাইপ।",
    },
    outcome: {
      en: "A mark you can redraw from memory, and a color with a job. Green means it worked.",
      bn: "মনে রেখে আঁকা যায়। সবুজের একটা কাজ আছে। সবুজ মানে — হয়ে গেছে।",
    },
    palette: [
      { name: { en: "Midnight", bn: "মধ্যরাত" }, hex: "#0E1C2F" },
      { name: { en: "Paper", bn: "কাগজ" }, hex: "#F4F7F5" },
      { name: { en: "Signal", bn: "সিগন্যাল" }, hex: "#3DDC97" },
      { name: { en: "Slate", bn: "স্লেট" }, hex: "#8AA0B4" },
    ],
    typeNote: {
      en: "A geometric grotesque, slightly tight. Payments should feel engineered, not decorated.",
      bn: "একটা জ্যামিতিক গ্রোটেস্ক, একটু টাইট। পেমেন্ট সাজানো নয় — ইঞ্জিনিয়ার্ড মনে হওয়া উচিত।",
    },
  },
  {
    slug: "meridian",
    name: "Meridian",
    nameBn: "মেরিডিয়ান",
    year: "2026",
    place: { en: "Sylhet", bn: "সিলেট" },
    sector: { en: "Hotel", bn: "হোটেল" },
    filter: "place",
    layout: "third",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Monogram, brass system, embroidery", bn: "মনোগ্রাম, ব্রাস সিস্টেম, এমব্রয়ডারি" },
    idea: { en: "A monogram a needle can follow.", bn: "এমন মনোগ্রাম, যা সুই অনুসরণ করতে পারে।" },
    brief: {
      en: "A small hotel in Sylhet. They wanted a mark that could be embroidered on a robe, etched on a key, and set in brass at the door — without looking like a chain.",
      bn: "সিলেটের একটা ছোট হোটেল। রোবে সেলাই, চাবিতে খোদাই, দরজায় পিতল — চেইন হোটেলের মতো দেখাবে না।",
    },
    approach: {
      en: "A filled M, drawn with the logic of a stitch: down, across, down. One brass rule underneath, like a horizon. No crest. No lion. No stars.",
      bn: "একটা ভরাট M, সেলাইয়ের যুক্তিতে: নিচে, আড়াআড়ি, নিচে। নিচে একটা পিতলের রেখা, দিগন্তের মতো। ক্রেস্ট নেই। সিংহ নেই। তারা নেই।",
    },
    outcome: {
      en: "Staff can describe it over the phone. The door sign does not need a light to be read.",
      bn: "ফোনে বললেই বোঝা যায়। দরজার সাইন আলো ছাড়াও পড়া যায়।",
    },
    palette: [
      { name: { en: "Ink", bn: "কালি" }, hex: "#141210" },
      { name: { en: "Ivory", bn: "আইভরি" }, hex: "#F4EFE6" },
      { name: { en: "Brass", bn: "পিতল" }, hex: "#C6A15B" },
      { name: { en: "Stone", bn: "পাথর" }, hex: "#C8C0B4" },
    ],
    typeNote: {
      en: "A high-contrast serif, tracked like a door plaque. The name should feel engraved, not typed.",
      bn: "উঁচু কনট্রাস্টের সেরিফ, দরজার ফলকের মতো ফাঁক। নাম যেন খোদাই করা, টাইপ করা নয়।",
    },
    image: "/images/meridian.jpg",
    imageAlt: {
      en: "A limestone hotel corridor with a single brass line — the material world of Meridian.",
      bn: "চুনাপাথরের হোটেল করিডর, একটা পিতলের রেখা — মেরিডিয়ানের জগত।",
    },
  },
  {
    slug: "ember",
    name: "Ember & Oak",
    nameBn: "এম্বার অ্যান্ড ওক",
    year: "2025",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Coffee", bn: "কফি" },
    filter: "place",
    layout: "third",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, packaging, cup sleeve", bn: "সিম্বল, প্যাকেজিং, কাপ স্লিভ" },
    idea: { en: "A drop of heat.", bn: "তাপের এক ফোঁটা।" },
    brief: {
      en: "A specialty roaster needed a mark that could be stamped on a kraft bag and still feel quiet. No steaming cup. No beans arranged into a smile.",
      bn: "একটা স্পেশালিটি রোস্টার। ক্রাফট ব্যাগে সিলমোহরের মতো বসবে, কিন্তু চিৎকার করবে না। ভাপ ওঠা কাপ নয়। হাসি মুখের মতো সাজানো কফি বিন নয়।",
    },
    approach: {
      en: "The symbol is a single drop. Copper sits only in the core — crema, flame, seed — and nowhere else in the system. Quiet enough to stamp on a kraft bag.",
      bn: "মার্কটা এক ফোঁটা। কপার শুধু ভেতরের কোরে — ক্রিমা, আগুন, বীজ — সিস্টেমের আর কোথাও না। ক্রাফট ব্যাগে সিলমোহরের মতো শান্ত।",
    },
    outcome: {
      en: "It debosses into a cup sleeve, holds in white on a dark bag, and is still recognizable as a loyalty-app icon.",
      bn: "কাপের স্লিভে চাপা যায়, কালো ব্যাগে সাদায় চেনা যায়, লয়্যালটি অ্যাপের আইকনেও টিকে।",
    },
    palette: [
      { name: { en: "Roast", bn: "রোস্ট" }, hex: "#2A1812" },
      { name: { en: "Cream", bn: "ক্রিম" }, hex: "#F6E7D4" },
      { name: { en: "Copper", bn: "কপার" }, hex: "#E08A4F" },
      { name: { en: "Oak", bn: "ওক" }, hex: "#8C4A2F" },
    ],
    typeNote: {
      en: "A soft serif with a little weight. Coffee brands often shout. This one speaks at the volume of a quiet room.",
      bn: "একটু ভারী নরম সেরিফ। কফি ব্র্যান্ড সাধারণত চেঁচায়। এটা শান্ত ঘরের আওয়াজে কথা বলে।",
    },
    image: "/images/ember.jpg",
    imageAlt: {
      en: "A dark ceramic cup and an oak leaf on a wooden table.",
      bn: "কাঠের টেবিলে একটা গাঢ় সিরামিক কাপ আর ওক পাতা।",
    },
  },
  {
    slug: "lunara",
    name: "Lunara",
    nameBn: "লুনারা",
    year: "2025",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Skincare", bn: "স্কিনকেয়ার" },
    filter: "culture",
    layout: "third",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, wordmark, bottle system", bn: "সিম্বল, ওয়ার্ডমার্ক, বোতল সিস্টেম" },
    idea: { en: "Light, not leaves.", bn: "পাতা নয় — আলো।" },
    brief: {
      en: "A skincare brand that refused botanicals. The market is full of leaves. Lunara wanted quiet, mineral, almost nothing.",
      bn: "একটা স্কিনকেয়ার ব্র্যান্ড, যারা পাতা চায়নি। বাজার পাতায় ভরা। লুনারা চেয়েছিল শান্ত, খনিজ, প্রায় কিছুই না।",
    },
    approach: {
      en: "A crescent thin enough to feel like a reflection, held in a hairline circle. The wordmark is a high-contrast serif, letterspaced, never bold. Clay, blush, and ink. No green anywhere.",
      bn: "একটা চিকন চাঁদ, যেন আলোর প্রতিফলন, একটা সরু বৃত্তের ভেতর। ওয়ার্ডমার্ক উঁচু কনট্রাস্টের সেরিফ, একটু ফাঁকা, কখনো বোল্ড না। মাটি, গোলাপি, কালি। সবুজ নেই।",
    },
    outcome: {
      en: "It looks like a mirror, not a pharmacy. On a bottle it reads as a glint of light.",
      bn: "ফার্মেসির মতো নয়, আয়নার মতো। বোতলে যেন এক চিলতে আলো।",
    },
    palette: [
      { name: { en: "Blush", bn: "ব্লাশ" }, hex: "#F3D7CC" },
      { name: { en: "Ink", bn: "কালি" }, hex: "#2C2422" },
      { name: { en: "Clay", bn: "মাটি" }, hex: "#C46B56" },
      { name: { en: "Milk", bn: "দুধ" }, hex: "#FBF6F2" },
    ],
    typeNote: {
      en: "Tracked serif, small optical size, no bold. Luxury here is the space around the letters.",
      bn: "ফাঁকা সেরিফ, ছোট অপটিক্যাল সাইজ, বোল্ড নেই। এখানে বিলাসিতা অক্ষরের চারপাশের ফাঁকা জায়গা।",
    },
  },
  {
    slug: "stride",
    name: "Stride",
    nameBn: "স্ট্রাইড",
    year: "2026",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Running", bn: "রানিং" },
    filter: "product",
    layout: "wide",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, apparel, app icon", bn: "সিম্বল, অ্যাপারেল, অ্যাপ আইকন" },
    idea: { en: "Speed, said three times.", bn: "গতি, তিনবার বলা।" },
    brief: {
      en: "A Dhaka running label. They did not want a mascot, a shoe, or anything that could be mistaken for a global swoosh.",
      bn: "ঢাকার একটা রানিং লেবেল। ম্যাসকট নয়, জুতা নয়, আর এমন কিছু নয় যা বিশ্বের কোনো সুশের সঙ্গে গুলিয়ে যায়।",
    },
    approach: {
      en: "Three chevrons, cut square, moving forward. The last one is volt — chosen because it is visible at dusk, not because it is fashionable. The wordmark is italic, condensed, never playful.",
      bn: "তিনটা শেভরন, বর্গাকার কাটা, সামনের দিকে। শেষটা ভোল্ট — সন্ধ্যার সময় দেখা যায় বলে, ফ্যাশন বলে না। ওয়ার্ডমার্ক ইটালিক, ঘন, কখনো খেলো না।",
    },
    outcome: {
      en: "It works on a singlet at twenty paces, and as a 32-pixel icon. Remove one chevron and it gets quieter. That is how you know it is right.",
      bn: "জার্সিতে বিশ কদম দূর থেকে কাজ করে, ৩২ পিক্সেলের আইকনেও। একটা শেভরন বাদ দিলে শান্ত হয়ে যায়। তখন বোঝা যায় এটাই ঠিক।",
    },
    palette: [
      { name: { en: "Track", bn: "ট্র্যাক" }, hex: "#101010" },
      { name: { en: "Chalk", bn: "চক" }, hex: "#F5F5F0" },
      { name: { en: "Volt", bn: "ভোল্ট" }, hex: "#D6FF3F" },
      { name: { en: "Ash", bn: "ছাই" }, hex: "#8E8E86" },
    ],
    typeNote: {
      en: "Italic grotesque, heavy, a little forward-leaning. The type should feel like it is already moving.",
      bn: "ইটালিক গ্রোটেস্ক, ভারী, একটু সামনের দিকে ঝোঁকা। টাইপ যেন আগে থেকেই চলছে।",
    },
  },
  {
    slug: "saffron",
    name: "Saffron House",
    nameBn: "জাফরান হাউস",
    year: "2025",
    place: { en: "Chattogram", bn: "চট্টগ্রাম" },
    sector: { en: "Restaurant", bn: "রেস্তোরাঁ" },
    filter: "place",
    layout: "narrow",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, menu, signage", bn: "সিম্বল, মেনু, সাইনেজ" },
    idea: { en: "One spice, three petals.", bn: "এক মশলা, তিন পাপড়ি।" },
    brief: {
      en: "A restaurant in Chattogram. The name was already good. The old logo was a photograph of a flower, which died at small sizes and looked different on every menu reprint.",
      bn: "চট্টগ্রামের একটা রেস্তোরাঁ। নামটা আগে থেকেই ভালো। পুরনো লোগো ছিল ফুলের ছবি — ছোট হলে মরে যেত, প্রতিটা মেনুতে একটু আলাদা দেখাত।",
    },
    approach: {
      en: "Three petals, rotated, meeting at a single point. Saffron gold on a deep maroon, the color of the dining room. It debosses into a leather menu. The wordmark is a warm serif, not a script pretending to be handwriting.",
      bn: "তিনটা পাপড়ি, ঘোরানো, এক বিন্দুতে মিলে। গাঢ় মেরুনের উপর জাফরান সোনা — ডাইনিং রুমের রং। চামড়ার মেনুতে চেপে বসে। ওয়ার্ডমার্ক একটু উষ্ণ সেরিফ, হাতের লেখার ভান করা স্ক্রিপ্ট নয়।",
    },
    outcome: {
      en: "The mark survives a bad photocopy, which is a real test for a restaurant. Regulars call it the three petals.",
      bn: "খারাপ ফটোকপিতেও টিকে। রেস্তোরাঁর জন্য এটাই আসল পরীক্ষা। নিয়মিতরা বলে তিন পাপড়ি।",
    },
    palette: [
      { name: { en: "Maroon", bn: "মেরুন" }, hex: "#6E1E2A" },
      { name: { en: "Saffron", bn: "জাফরান" }, hex: "#E8A317" },
      { name: { en: "Warm paper", bn: "উষ্ণ কাগজ" }, hex: "#FBEED9" },
      { name: { en: "Petal", bn: "পাপড়ি" }, hex: "#8E3040" },
    ],
    typeNote: {
      en: "Italic serif for the name, plain grotesque for the menu. A restaurant wordmark should feel hospitable, not theatrical.",
      bn: "নামে ইটালিক সেরিফ, মেনুতে সাদামাটা গ্রোটেস্ক। রেস্তোরাঁর ওয়ার্ডমার্ক আতিথেয় হওয়া উচিত, নাটকীয় নয়।",
    },
    image: "/images/saffron.jpg",
    imageAlt: {
      en: "Saffron threads and deep red petals on handmade paper.",
      bn: "হাতে তৈরি কাগজে জাফরান আর গাঢ় লাল পাপড়ি।",
    },
  },
  {
    slug: "hale",
    name: "Hale",
    nameBn: "হেল",
    year: "2024",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Counsel", bn: "আইন" },
    filter: "practice",
    layout: "half",
    kind: { en: "Rebrand", bn: "রিব্র্যান্ড" },
    scope: { en: "Rebrand, monogram, stationery", bn: "রিব্র্যান্ড, মনোগ্রাম, স্টেশনারি" },
    idea: { en: "Structure, not a scale.", bn: "পাল্লা নয় — কাঠামো।" },
    brief: {
      en: "A Dhaka chamber had inherited a clipart scale of justice. It could have belonged to any firm on earth. They wanted to look like a house you would trust with something difficult.",
      bn: "ঢাকার একটা আইন চেম্বার। উত্তরাধিকারসূত্রে পেয়েছিল ন্যায়ের পাল্লার ক্লিপআর্ট। পৃথিবীর যেকোনো ফার্মের হতে পারত। তারা চেয়েছিল এমন একটা ঘর, যেখানে কঠিন বিষয় রাখা যায়।",
    },
    approach: {
      en: "We retired the scale. The new mark is an H built as a small building: two columns, a lintel, a pediment in brass. We kept the name and the forest green — the only things clients already remembered — and replaced everything else.",
      bn: "পাল্লা সরিয়েছি। নতুন মার্ক একটা ছোট বাড়ির মতো H: দুই কলাম, এক লিন্টেল, পিতলের পেডিমেন্ট। নাম আর ফরেস্ট গ্রিন রেখেছি — ক্লায়েন্ট এটুকুই মনে রাখত — বাকি সব বদলেছি।",
    },
    outcome: {
      en: "The firm looks like itself. The old symbol needed a caption. This one is the caption.",
      bn: "ফার্মটা এখন নিজের মতো। পুরনো চিহ্নের ক্যাপশন লাগত। এটাই ক্যাপশন।",
    },
    palette: [
      { name: { en: "Parchment", bn: "পার্চমেন্ট" }, hex: "#E7E1D4" },
      { name: { en: "Forest", bn: "ফরেস্ট" }, hex: "#1E3A32" },
      { name: { en: "Brass", bn: "পিতল" }, hex: "#C6A15B" },
      { name: { en: "Ink", bn: "কালি" }, hex: "#1A1714" },
    ],
    typeNote: {
      en: "A tracked serif, the kind a letterhead already knows how to wear. No blackletter. No fake wax seal.",
      bn: "ফাঁকা সেরিফ, যে রকম একটা লেটারহেড আগে থেকেই পরতে জানে। ব্ল্যাকলেটার নয়। নকল মোমের সিল নয়।",
    },
    special: "rebrand",
  },
  {
    slug: "orbit",
    name: "Little Orbit",
    nameBn: "লিটল অরবিট",
    year: "2026",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Learning", bn: "লার্নিং" },
    filter: "culture",
    layout: "half",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Symbol, wordmark, classroom system", bn: "সিম্বল, ওয়ার্ডমার্ক, ক্লাসরুম সিস্টেম" },
    idea: { en: "Curiosity, not cartoons.", bn: "কার্টুন নয় — কৌতূহল।" },
    brief: {
      en: "A children's learning studio. Parents decide. Children have to want to come back. The mark had to respect both — which rules out babyish mascots, and also rules out anything cold.",
      bn: "একটা শিশুদের লার্নিং স্টুডিও। সিদ্ধান্ত নেন বাবা-মা। ফিরে আসতে চায় শিশু। মার্ককে দুজনকেই সম্মান করতে হয় — তাই বাচ্চা ম্যাসকট নয়, ঠান্ডা কর্পোরেটও নয়।",
    },
    approach: {
      en: "A planet, a ring, a small moon. Yellow is the star, coral is the moon, navy is the room. No eyes, no smile, no character to age out of. Friendly because of the shapes, not because of a joke.",
      bn: "একটা গ্রহ, একটা বলয়, একটা ছোট চাঁদ। হলুদ তারা, প্রবাল চাঁদ, নেভি ঘর। চোখ নেই, হাসি নেই, এমন চরিত্র নেই যা বয়স বাড়লে পুরনো হয়ে যায়। রসের জন্য নয়, আকৃতির জন্য বন্ধুত্বপূর্ণ।",
    },
    outcome: {
      en: "A child can draw it. A parent can put it on a letter to a school. Both of those were in the brief.",
      bn: "একটা শিশু এঁকে ফেলতে পারে। একজন অভিভাবক স্কুলের চিঠিতে বসাতে পারেন। ব্রিফে দুটোই ছিল।",
    },
    palette: [
      { name: { en: "Navy", bn: "নেভি" }, hex: "#1B2744" },
      { name: { en: "Star", bn: "তারা" }, hex: "#FFC857" },
      { name: { en: "Moon", bn: "চাঁদ" }, hex: "#E07A5F" },
      { name: { en: "Paper", bn: "কাগজ" }, hex: "#FFF8EC" },
    ],
    typeNote: {
      en: "A rounded grotesque, medium weight. Approachable without a single comic letter.",
      bn: "একটু গোল গ্রোটেস্ক, মাঝারি ভার। একটাও কমিক অক্ষর ছাড়াই কাছে আসা যায়।",
    },
  },
  {
    slug: "atelier",
    name: "Atelier North",
    nameBn: "অ্যাটেলিয়ে নর্থ",
    year: "2025",
    place: { en: "Dhaka", bn: "ঢাকা" },
    sector: { en: "Architecture", bn: "আর্কিটেকচার" },
    filter: "practice",
    layout: "third",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Monogram, title block, site sign", bn: "মনোগ্রাম, টাইটেল ব্লক, সাইট সাইন" },
    idea: { en: "The letter N is a plan.", bn: "N অক্ষরটাই একটা প্ল্যান।" },
    brief: {
      en: "An architecture practice, tired of being given a compass, a building silhouette, or their initials in a square. They wanted the mark to feel like a drawing, because that is what the office actually does.",
      bn: "একটা আর্কিটেকচার প্র্যাকটিস। কম্পাস, ভবনের সিলুয়েট, বা বর্গক্ষেত্রে আদ্যক্ষর — এসব আর চায় না। মার্ক যেন একটা ড্রয়িংয়ের মতো হয়, কারণ অফিসটা আসলে সেটাই করে।",
    },
    approach: {
      en: "An N constructed like two walls and a brace. A small rust square at the corner, the way a north-mark sits on a plan. Concrete, charcoal, one note of rust. No trees. No skyline.",
      bn: "N বানানো দুই দেয়াল আর এক ব্রেস দিয়ে। কোনায় একটা মরিচা-রঙের বর্গ, প্ল্যানে উত্তর-চিহ্নের মতো। কংক্রিট, কয়লা, একটু মরিচা। গাছ নেই। স্কাইলাইন নেই।",
    },
    outcome: {
      en: "It looks correct on a title block. That was the only place it truly had to live, and we designed for that place first.",
      bn: "টাইটেল ব্লকে ঠিক দেখায়। আসলে ওখানেই তাকে বাঁচতে হয় — আমরা প্রথমে সেই জায়গার জন্যই এঁকেছি।",
    },
    palette: [
      { name: { en: "Concrete", bn: "কংক্রিট" }, hex: "#D7D2CB" },
      { name: { en: "Charcoal", bn: "কয়লা" }, hex: "#1F1F1F" },
      { name: { en: "Rust", bn: "মরিচা" }, hex: "#A34B32" },
      { name: { en: "Paper", bn: "কাগজ" }, hex: "#F4EFE6" },
    ],
    typeNote: {
      en: "Grotesque, widely tracked, all caps. It should sit on a drawing the way a north arrow does — quietly, and in the right place.",
      bn: "গ্রোটেস্ক, চওড়া ফাঁক, অল ক্যাপস। ড্রয়িংয়ের উপর উত্তর-চিহ্নের মতো বসা উচিত — শান্তভাবে, ঠিক জায়গায়।",
    },
  },
  {
    slug: "kin",
    name: "Kin",
    nameBn: "কিন",
    year: "2025",
    place: { en: "Kuala Lumpur", bn: "কুয়ালালামপুর" },
    sector: { en: "Family finance", bn: "পারিবারিক ফাইন্যান্স" },
    filter: "product",
    layout: "third",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "App icon, wordmark, color", bn: "অ্যাপ আইকন, ওয়ার্ডমার্ক, কালার" },
    idea: { en: "Overlap.", bn: "ওভারল্যাপ।" },
    brief: {
      en: "A family finance app, built in Kuala Lumpur, used across the region. Shared accounts, shared decisions. They did not want a heart, a house, or a piggy bank.",
      bn: "একটা ফ্যামিলি ফাইন্যান্স অ্যাপ, কুয়ালালামপুরে বানানো, অঞ্চলজুড়ে ব্যবহৃত। যৌথ অ্যাকাউন্ট, যৌথ সিদ্ধান্ত। হার্ট নয়, বাড়ি নয়, ব্যাংক নয়।",
    },
    approach: {
      en: "Two rounded forms sharing a width. That overlap is the product. Coral and ink, on a warm ground, so money feels like a household thing and not a trading floor.",
      bn: "দুইটা গোল আকৃতি, একটা অংশ ভাগাভাগি। ওই ওভারল্যাপই প্রোডাক্ট। কোরাল আর কালি, উষ্ণ জমিনে — টাকা যেন ঘরের বিষয়, ট্রেডিং ফ্লোরের নয়।",
    },
    outcome: {
      en: "The icon is understandable without the word. On a phone, next to a bank, it looks calmer. That is the point.",
      bn: "শব্দ ছাড়াই আইকন বোঝা যায়। ফোনের হোম স্ক্রিনে, একটা ব্যাংকের পাশে, এটা শান্ত দেখায়। সেটাই উদ্দেশ্য।",
    },
    palette: [
      { name: { en: "Warm ground", bn: "উষ্ণ জমিন" }, hex: "#F6E4DC" },
      { name: { en: "Ink", bn: "কালি" }, hex: "#2C2422" },
      { name: { en: "Coral", bn: "কোরাল" }, hex: "#E07A5F" },
      { name: { en: "Sand", bn: "বালি" }, hex: "#E7C7B4" },
    ],
    typeNote: {
      en: "A soft serif for the name, grotesque for the product UI. The icon does the talking. The word stays short.",
      bn: "নামে নরম সেরিফ, প্রোডাক্ট UI-তে গ্রোটেস্ক। কথা বলে আইকন। শব্দ ছোট থাকে।",
    },
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    nameBn: "ফিল্ডনোট",
    year: "2024",
    place: { en: "Kolkata", bn: "কলকাতা" },
    sector: { en: "Publishing", bn: "প্রকাশনা" },
    filter: "culture",
    layout: "third",
    kind: { en: "New identity", bn: "নতুন আইডেন্টিটি" },
    scope: { en: "Mark, spine, cover system", bn: "মার্ক, স্পাইন, কভার সিস্টেম" },
    idea: { en: "The page is the logo.", bn: "পাতাটাই লোগো।" },
    brief: {
      en: "An independent publisher between Kolkata and Dhaka. Books, essays, a small magazine. They wanted a mark that belonged to paper, not to a startup pitch.",
      bn: "কলকাতা আর ঢাকার মাঝে একটা স্বাধীন প্রকাশক। বই, প্রবন্ধ, একটা ছোট ম্যাগাজিন। তারা চেয়েছিল মার্কটা কাগজের হোক, স্টার্টআপ পিচের নয়।",
    },
    approach: {
      en: "A page with a folded corner. The fold is the only color — vermillion, like an index tab. Everything else is ink and the paper it sits on. The wordmark is a text serif a book already trusts.",
      bn: "একটা পাতা, কোনা ভাঁজ করা। ভাঁজটাই একমাত্র রং — ভার্মিলিয়ন, ইনডেক্স ট্যাবের মতো। বাকি সব কালি, আর যে কাগজে বসে। ওয়ার্ডমার্ক একটা টেক্সট সেরিফ, যে রকম একটা বই আগে থেকেই বিশ্বাস করে।",
    },
    outcome: {
      en: "It looks like it was always part of the object. On a spine, it is a small red triangle. That is enough.",
      bn: "মনে হয় এটা বরাবর বস্তুটার অংশ ছিল। স্পাইনে একটা ছোট লাল ত্রিভুজ। এটুকুই যথেষ্ট।",
    },
    palette: [
      { name: { en: "Paper", bn: "কাগজ" }, hex: "#F4EFE6" },
      { name: { en: "Ink", bn: "কালি" }, hex: "#1C1915" },
      { name: { en: "Index red", bn: "ইনডেক্স লাল" }, hex: "#D94A2B" },
      { name: { en: "Graphite", bn: "গ্রাফাইট" }, hex: "#5E574E" },
    ],
    typeNote: {
      en: "A book serif. If the logo has to explain that this is a publisher, the logo has already failed.",
      bn: "একটা বইয়ের সেরিফ। লোগোকে যদি বোঝাতে হয় যে এটা প্রকাশক, লোগো আগেই হেরে গেছে।",
    },
  },
];

export const projects = raw.map((p) => ({ ...p, ...brands[p.slug] }));

export const filters = [
  { id: "all", en: "All", bn: "সব" },
  { id: "place", en: "Place", bn: "জায়গা" },
  { id: "culture", en: "Culture", bn: "সংস্কৃতি" },
  { id: "product", en: "Product", bn: "প্রোডাক্ট" },
  { id: "practice", en: "Practice", bn: "প্র্যাকটিস" },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getNextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return projects[0];
  return projects[(i + 1) % projects.length];
}

export function projectIndex(slug) {
  return projects.findIndex((p) => p.slug === slug);
}
