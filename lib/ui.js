/** প্র্যাকটিস এরিয়া, প্রসেস, ক্রেডেনশিয়াল, ফলাফল, মতামত, প্রশ্ন — সাইটের সব কনটেন্ট এখানে। */

export const stats = [
  { value: { bn: "২৭+", en: "27+" }, label: { bn: "বছরের অভিজ্ঞতা", en: "Years in practice" } },
  { value: { bn: "১,২০০+", en: "1,200+" }, label: { bn: "মামলা পরিচালিত", en: "Cases handled" } },
  { value: { bn: "৬০০+", en: "600+" }, label: { bn: "জামিন মঞ্জুর", en: "Bails secured" } },
  { value: { bn: "৯৭%", en: "97%" }, label: { bn: "ক্লায়েন্ট সন্তুষ্টি", en: "Client satisfaction" } },
];

export const courts = [
  { bn: "সুপ্রিম কোর্ট — হাইকোর্ট বিভাগ", en: "Supreme Court — High Court Division" },
  { bn: "ঢাকা জেলা ও দায়রা জজ আদালত", en: "Dhaka District & Sessions Judge Court" },
  { bn: "আর্বিট্রেশন ও ট্রাইব্যুনাল", en: "Arbitration & Tribunals" },
];

export const credentials = [
  { bn: "এলএল.বি (সম্মান) — ঢাকা বিশ্ববিদ্যালয়", en: "LL.B (Hons) — University of Dhaka" },
  { bn: "এলএল.এম — ঢাকা বিশ্ববিদ্যালয়", en: "LL.M — University of Dhaka" },
  { bn: "বাংলাদেশ বার কাউন্সিলে তালিকাভুক্ত", en: "Enrolled with the Bangladesh Bar Council" },
  { bn: "সুপ্রিম কোর্ট বার অ্যাসোসিয়েশনের সদস্য", en: "Member, Supreme Court Bar Association" },
  { bn: "ঢাকা জেলা বার অ্যাসোসিয়েশনের সদস্য", en: "Member, Dhaka Bar Association" },
  { bn: "নটারি পাবলিক — ঢাকা", en: "Notary Public — Dhaka" },
];

export const practiceAreas = [
  {
    id: "criminal",
    icon: "shield",
    title: { bn: "ফৌজদারি আইন ও জামিন", en: "Criminal Defense & Bail" },
    short: {
      bn: "জামিন, অভিযোগ খারিজ, ফৌজদারি আপিল — সবচেয়ে সময়সাপেক্ষ মুহূর্তে দ্রুত পদক্ষেপ।",
      en: "Bail, quashing, criminal appeals — decisive action when hours matter.",
    },
    long: {
      bn: "গ্রেপ্তার, জামিন, অভিযোগপত্র খারিজ থেকে শুরু করে দায়রা আদালত ও হাইকোর্ট বিভাগে আপিল — ফৌজদারি মামলার প্রতিটি ধাপে অভিজ্ঞতা। জামিনের আবেদন দিনেই প্রস্তুত করা হয়; প্রতিটি হেয়ারিংয়ের পর পরিবারকে লিখিত আপডেট দেওয়া হয়।",
      en: "From arrest and bail to quashing proceedings and appeals before the Sessions Court and the High Court Division. Bail applications are prepared within the day, and the family receives a written update after every hearing.",
    },
    points: [
      { bn: "আগাম ও নিয়মিত জামিন, স্টে জামিন", en: "Anticipatory, regular and interim bail" },
      { bn: "অভিযোগ খারিজ (৪৭৩ ধারা) ও রিট", en: "Quashing petitions and writs" },
      { bn: "দায়রা ও হাইকোর্টে ফৌজদারি আপিল", en: "Criminal appeals, Sessions to High Court" },
      { bn: "নারী ও শিশু আইন সংক্রান্ত মামলা", en: "Women and children special cases" },
    ],
  },
  {
    id: "land",
    icon: "land",
    title: { bn: "ভূমি, সম্পত্তি ও রাজস্ব", en: "Land, Property & Revenue" },
    short: {
      bn: "জমির দখল, খতিয়ান, দলিল যাচাই থেকে মোকদ্দমা — তিন দশকের রেকর্ড।",
      en: "Possession, khatian, title verification and litigation — three decades of record.",
    },
    long: {
      bn: "ভূমি বিরোধ বাংলাদেশের সবচেয়ে সাধারণ মামলা — এবং সবচেয়ে বেশি সময় খায়। দলিল, খতিয়ান ও রেকর্ডের পূর্ণ যাচাই ছাড়া মামলা করতে পরামর্শ দিই না; যেখানে মধ্যস্থতায় নিষ্পত্তি সম্ভব, সেখানে বছর নষ্ট হতে দেই না। নামজারি, উত্তরাধিকার বণ্টন, দখল চাপা ও রেকর্ড সংশোধন — সব ধরনের ভূমি মামলা পরিচালনা করি।",
      en: "Land disputes are the most common — and slowest — cases in Bangladesh. I do not advise litigation before a full title verification; and where a settlement can save years, I say so. Namjari, partition, dispossession and record correction — all handled.",
    },
    points: [
      { bn: "দলিল ও খতিয়ান যাচাই (ডিউ ডিলিজেন্স)", en: "Title and khatian due diligence" },
      { bn: "নামজারি, রেকর্ড সংশোধন ও আপত্তি", en: "Namjari, record correction, objections" },
      { bn: "দখল চাপা ও অবৈধ দখল অপসারণ", en: "Dispossession and eviction suits" },
      { bn: "বংশগত সম্পত্তি বণ্টন (দাবিভাগ)", en: "Partition of inherited property" },
    ],
  },
  {
    id: "family",
    icon: "family",
    title: { bn: "পারিবারিক ও উত্তরাধিকার", en: "Family & Inheritance" },
    short: {
      bn: "বিবাহবিচ্ছেদ, দেনমোহর, অভিভাবকত্ব, ওয়ারিশ সনদ — সংবেদনশীল মামলায় শান্ত পথনির্দেশ।",
      en: "Divorce, dower, custody and succession — calm guidance in sensitive matters.",
    },
    long: {
      bn: "পারিবারিক মামলা শুধু আইনের নয় — জীবনের বিষয়। প্রতিটি মামলায় প্রথমে দেখি নিষ্পত্তি কি পরিবারের জন্য ভালো হবে না লড়াই; কিন্তু আপনার অধিকারের প্রশ্নে আপস করি না। প্রবাসী ক্লায়েন্টদের জন্য পাওয়ার অব অ্যাটর্নির মাধ্যমে পুরো প্রক্রিয়া দূর থেকে সম্পন্ন করার ব্যবস্থা আছে।",
      en: "Family matters are matters of life, not just law. Every case begins with one question — is settlement better for this family than a fight? But on your rights, I do not compromise. NRB clients can complete the entire process through power of attorney.",
    },
    points: [
      { bn: "বিবাহবিচ্ছেদ, দেনমোহর ও ভরণপোষণ", en: "Divorce, dower and maintenance" },
      { bn: "সন্তানের অভিভাবকত্ব ও হেফাজত", en: "Child custody and guardianship" },
      { bn: "ওয়ারিশ সনদ ও সম্পত্তি বণ্টন", en: "Succession certificates and distribution" },
      { bn: "প্রবাসীদের পাওয়ার অব অ্যাটর্নি", en: "Power of attorney for expatriates" },
    ],
  },
  {
    id: "writ",
    icon: "pillar",
    title: { bn: "সাংবিধানিক ও রিট", en: "Constitutional & Writ" },
    short: {
      bn: "হাইকোর্ট বিভাগে রিট — অবৈধ আটক, প্রশাসনিক অন্যায়, মৌলিক অধিকার।",
      en: "Writs in the High Court Division — unlawful detention, administrative wrongs, fundamental rights.",
    },
    long: {
      bn: "সংবিধানের ১০২ অনুচ্ছেদের অধীনে হাইকোর্ট বিভাগে রিট আবেদন — অবৈধ আটকে রাখার বিরুদ্ধে হেবিয়াস কর্পাস, সরকারি বা স্বায়ত্তশাসিত প্রতিষ্ঠানের সিদ্ধান্ত চ্যালেঞ্জ, চাকরি ও ভর্তি বঞ্চনা, এবং মৌলিক অধিকার প্রয়োগ। জরুরি মামলায় ৪৮ ঘণ্টার মধ্যে দায়েরের ব্যবস্থা থাকে।",
      en: "Writ petitions under Article 102 — habeas corpus against unlawful detention, challenges to administrative decisions, job and admission disputes, and enforcement of fundamental rights. Urgent matters can be filed within 48 hours.",
    },
    points: [
      { bn: "হেবিয়াস কর্পাস ও অবৈধ আটক", en: "Habeas corpus and unlawful detention" },
      { bn: "প্রশাসনিক সিদ্ধান্ত ও তালিকা চ্যালেঞ্জ", en: "Administrative decisions and lists" },
      { bn: "চাকরি, ভর্তি ও নিয়োগ বঞ্চনা", en: "Employment, admission and promotion" },
      { bn: "মৌলিক অধিকার প্রয়োগের আবেদন", en: "Fundamental rights enforcement" },
    ],
  },
  {
    id: "commercial",
    icon: "handshake",
    title: { bn: "কোম্পানি ও বাণিজ্যিক", en: "Corporate & Commercial" },
    short: {
 bn: "চুক্তি, চেক-প্রতারণা, অংশীদার বিরোধ, ঋণ আদায় — ব্যবসার ঝুঁকি কমানোর পরামর্শ।",
      en: "Contracts, cheque dishonour, partner disputes, debt recovery — advice that lowers business risk.",
    },
    long: {
      bn: "ছোট ও মাঝারি ব্যবসার দৈনন্দিন আইনি প্রয়োজন — চুক্তি খসড়া ও পর্যালোচনা, অংশীদার ও শেয়ারহোল্ডার বিরোধ, চেক অপরিশোধ মামলা, ঋণ ও ডেবট আদায়, এবং কোম্পানি নিবন্ধন ও কমপ্লায়েন্স। মামলার আগে চুক্তি ঠিক করলে অনেক মামলাই হয় না — সেই পরামর্শেই বিশেষ জোর।",
      en: "Everyday legal needs of SMEs — drafting and reviewing contracts, partner and shareholder disputes, dishonoured cheque cases, debt recovery, and company incorporation and compliance. The right contract prevents most disputes — that is where the emphasis lies.",
    },
    points: [
      { bn: "চুক্তি খসড়া, পর্যালোচনা ও ভেটিং", en: "Contract drafting, review and vetting" },
      { bn: "চেক অপরিশোধ (১৩৮ ধারা) মামলা", en: "Cheque dishonour cases (Section 138)" },
      { bn: "অংশীদার ও শেয়ারহোল্ডার বিরোধ", en: "Partner and shareholder disputes" },
      { bn: "ঋণ আদায় ও কোম্পানি কমপ্লায়েন্স", en: "Debt recovery and company compliance" },
    ],
  },
  {
    id: "tax",
    icon: "scale",
    title: { bn: "কর, ভ্যাট ও কাস্টমস", en: "Tax, VAT & Customs" },
    short: {
      bn: "কর রিটার্ন বিরোধ, ভ্যাট জরিমানা, ট্রাইব্যুনাল ও রেফারেন্স — ব্যবসার কর-ঝুঁকি সামলানো।",
      en: "Assessment disputes, VAT penalties, tribunal hearings and references — managing your tax exposure.",
    },
    long: {
      bn: "কর কর্মকর্তার চূড়ান্ত কর দাবি, ভ্যাট ও কাস্টমস জরিমানা, আপত্তি শুনানি থেকে ট্যাক্সেস আপিল ট্রাইব্যুনাল এবং হাইকোর্টে রেফারেন্স — পুরো ধাপ ধরে প্রতিনিধিত্ব। ব্যক্তিকরদাতা থেকে বড় প্রতিষ্ঠান — যারা বার্ষিক কমপ্লায়েন্স চান, তাদের জন্য বার্ষিক রিটেইনার আছে।",
      en: "From disputed assessments and VAT/customs penalties to appeal hearings before the Taxes & VAT Appellate Tribunals and references to the High Court. Annual retainers available for individuals and companies.",
    },
    points: [
      { bn: "কর দাবির আপত্তি ও শুনানি", en: "Objections and hearings on assessments" },
      { bn: "ভ্যাট ও কাস্টমস জরিমানা চ্যালেঞ্জ", en: "VAT and customs penalty challenges" },
      { bn: "ট্রাইব্যুনালে আপিল ও হাইকোর্টে রেফারেন্স", en: "Tribunal appeals and HC references" },
      { bn: "বার্ষিক কর কমপ্লায়েন্স রিটেইনার", en: "Annual tax compliance retainer" },
    ],
  },
];

export const steps = [
  {
    n: "০১",
    nEn: "01",
    title: { bn: "প্রথম কথা", en: "First conversation" },
    body: {
      bn: "ফোন বা হোয়াটসঅ্যাপে ১০ মিনিট — ফ্রি। মামলার প্রকৃতি শুনে বলি এটা আমার এলাকা কি না, এবং কতটা জরুরি।",
      en: "Ten minutes by phone or WhatsApp — free. I hear the matter, and tell you whether it is mine to take and how urgent it is.",
    },
  },
  {
    n: "০২",
    title: { bn: "চেম্বারে পরামর্শ", en: "Chamber consultation" },
    body: {
      bn: "আপনার দলিলপত্র দেখে মামলার শক্তি-দুর্বলতা, সম্ভাব্য খরচ আর সময় — খোলাখুলি বলি। মিথ্যা আশ্বাস নয়।",
      en: "With your papers in front of me — strengths, weaknesses, likely costs and time, stated plainly. No false comfort.",
    },
  },
  {
    n: "০৩",
    title: { bn: "কৌশল ও চুক্তি", en: "Strategy & engagement" },
    body: {
      bn: "লিখিত মতামত, ফি-কাঠামো আর ভকালতনামা — সবকিছু লিখিতভাবে, লুকানো খরচ ছাড়া।",
      en: "Written opinion, fee structure and the vakalatnama — everything in writing, with no hidden costs.",
    },
  },
  {
    n: "০৪",
    title: { bn: "মামলা পরিচালনা", en: "Case management" },
    body: {
      bn: "প্রতিটি তারিখে আদালতে উপস্থিতি, প্রতিটি হেয়ারিংয়ের পর ফোন বা হোয়াটসঅ্যাপে রিপোর্ট — আপনি সবসময় জানবেন কোথায় আছি।",
      en: "Appearance at every date, and a report by phone or WhatsApp after every hearing — you always know where the case stands.",
    },
  },
];

export const cases = [
  {
    tag: { bn: "ফৌজদারি", en: "Criminal" },
    title: {
      bn: "ব্যাংক-প্রতারণার অভিযোগ থেকে সম্পূর্ণ খালাস",
      en: "Full acquittal in a bank-fraud prosecution",
    },
    body: {
      bn: "দায়রা আদালতে ৩ বছরের বিচারের পর তথ্যপ্রমাণের অভাবে খালাস। আসামির পক্ষে ৪১টি নথি ও ৬ জন সাক্ষী পরিচালিত হয়।",
      en: "After a three-year trial before the Sessions Court, acquitted for want of evidence — 41 exhibits and six defence witnesses.",
    },
  },
  {
    tag: { bn: "ভূমি", en: "Land" },
    title: {
      bn: "তিন দশকের জমি বিরোধে দখল প্রতিষ্ঠা",
      en: "Possession restored in a three-decade land dispute",
    },
    body: {
      bn: "৪.২ একর বিতর্কিত জমিতে পূর্বসূরির রেকর্ড মিলিয়ে দাবিভাগ মোকদ্দমা — দুই ধাপের আপিলসহ জয়, পরে নামজারি সম্পন্ন।",
      en: "A partition suit over 4.2 acres, built on ancestral records — won through two appeals, followed by completed namjari.",
    },
  },
  {
    tag: { bn: "রিট", en: "Writ" },
    title: {
      bn: "অবৈধ আটকে রাখার বিরুদ্ধে ৭২ ঘণ্টায় অন্তর্বর্তী আদেশ",
      en: "Interim order within 72 hours against unlawful detention",
    },
    body: {
      bn: "হেবিয়াস কর্পাস রিটের শুনানিতে হাইকোর্ট বিভাগ আটককৃত ব্যক্তিকে আদালতে হাজির করার নির্দেশ দেন — তৃতীয় দিনেই মুক্তি।",
      en: "On a habeas corpus hearing, the High Court Division ordered production of the detainee — released on day three.",
    },
  },
  {
    tag: { bn: "পারিবারিক", en: "Family" },
    title: {
      bn: "প্রবাসী উত্তরাধিকার বিরোধ — বিনা মামলায় নিষ্পত্তি",
      en: "Expatriate inheritance settled without a suit",
    },
    body: {
      bn: "মধ্যস্থতায় ৳৪.৫ কোটি মূল্যের সম্পত্তি ওয়ারিশদের মধ্যে সমঝোতা চুক্তিতে বণ্টন — মামলা নয়, দুই সপ্তাহ লেগেছে।",
      en: "Property worth ৳4.5 crore distributed among heirs by a mediated settlement agreement — two weeks, not a decade.",
    },
  },
  {
    tag: { bn: "বাণিজ্যিক", en: "Commercial" },
    title: {
      bn: "অংশীদার বিরোধে কোম্পানি বাঁচিয়ে নিষ্পত্তি",
      en: "Partner dispute resolved, company saved",
    },
    body: {
      bn: "উইন্ডিং-আপ পিটিশনের ভয়ে থামা ব্যবসা — শেয়ারহোল্ডার চুক্তি নতুন করে লিখে অংশীদারের বিদায়, পরিচালনায় ফেরা।",
      en: "A business frozen by a winding-up threat — shareholders' agreement rewritten, one partner bought out, operations resumed.",
    },
  },
  {
    tag: { bn: "কর", en: "Tax" },
    title: {
      bn: "বেআইনি ভ্যাট জরিমানা বাতিল",
      en: "Unlawful VAT penalty set aside",
    },
    body: {
      bn: "কম রিটার্নের ভিত্তিতে আরোপিত ৳৭৮ লাখের জরিমানা — আপত্তি শুনানিতে কেটে যায়, পরে শুধু বকেয়া কর পরিশোধ।",
      en: "A ৳78 lakh penalty raised on an alleged short return — struck out at objection hearing; only the true tax remained payable.",
    },
  },
];

export const quotes = [
  {
    text: {
      bn: "আমার জমির মামলা দুই প্রজন্ম ধরে আদালতে ছিল। লতিফ সাহেব প্রথম বছরেই নিষ্পত্তি করে দিয়েছেন — আর যা বলেছিলেন, ঠিক তাই হয়েছে।",
      en: "Our land suit ran through two generations. Latif sahib settled it within the first year — and everything he predicted came true.",
    },
    name: { bn: "রফিকুল ইসলাম", en: "Rafiqul Islam" },
    role: { bn: "ব্যবসায়ী, গাজীপুর", en: "Businessman, Gazipur" },
  },
  {
    text: {
      bn: "দুবাই থেকে বাবার সম্পত্তি বণ্টন — একবারও দেশে আসতে হয়নি। পাওয়ার অব অ্যাটর্নি দিয়ে পুরোটা সম্পন্ন, প্রতিটি ধাপে হোয়াটসঅ্যাপে রিপোর্ট পেয়েছি।",
      en: "Settling my late father's estate from Dubai — I never had to fly home once. Power of attorney, and a WhatsApp report at every step.",
    },
    name: { bn: "শারমিন আক্তার", en: "Sharmin Akter" },
    role: { bn: "প্রবাসী, দুবাই", en: "Expatriate, Dubai" },
  },
  {
    text: {
      bn: "ভুল অভিযোগে আমার ছেলে গ্রেপ্তার হয়েছিল রাত ২টায়। একটা ফোন — সকালের মধ্যেই জামিনের আবেদন আদালতে। এই সাহস আর দ্রুততা কাগজে-কলমে মেপা যায় না।",
      en: "My son was arrested at 2 a.m. on a false case. One phone call — the bail petition was in court by morning. That kind of speed has no price.",
    },
    name: { bn: "মমতাজ বেগম", en: "Momtaz Begum" },
    role: { bn: "গৃহিণী, মিরপুর", en: "Homemaker, Mirpur" },
  },
  {
    text: {
      bn: "আমাদের ফ্যাক্টরির ভ্যাট জরিমানা ৭৮ লাখ ছিল। লতিফ সাহেব শুনানিতে সেটা কেটে দিয়েছেন। তারপর থেকে বার্ষিক রিটেইনারেই আছি।",
      en: "Our factory's VAT penalty was 78 lakh. Latif sahib had it set aside at hearing. We have been on his annual retainer since.",
    },
    name: { bn: "আনোয়ার হোসেন", en: "Anwar Hossain" },
    role: { bn: "ব্যবস্থাপনা পরিচালক, পোশাক কারখানা", en: "MD, garment manufacturer" },
  },
  {
    text: {
      bn: "চেক মামলায় পড়ে ব্যবসা বন্ধ করার উপক্রম হয়েছিল। তিনি মামলার দুর্বলতা যেভাবে আদালতে দেখিয়েছেন — পালোয়ানোর উপায় রইল না অন্যপক্ষের।",
      en: "A cheque case nearly closed my business. The way he exposed the other side's weakness in court — they had nowhere to run.",
    },
    name: { bn: "হারুন অর রশিদ", en: "Harun Or Rashid" },
    role: { bn: "আমদানিকারক, মোতিঝিল", en: "Importer, Motijheel" },
  },
];

export const faqs = [
  {
    q: { bn: "প্রথম পরামর্শের জন্য কী কী সঙ্গে আনব?", en: "What should I bring to the first consultation?" },
    a: {
      bn: "যা আছে তাই আনুন — জাতীয় পরিচয়পত্র, সংশ্লিষ্ট দলিল/খতিয়ান, আগের মামলার নোটিশ বা আদেশের কপি। যা নেই, তার তালিকা পরামর্শেই দেব। কিছু না থাকলেও পরামর্শ সম্ভব।",
      en: "Bring whatever you have — NID, relevant deeds or khatian, copies of any notice or order. A checklist for the missing papers follows the consultation. Even with nothing in hand, a consultation is possible.",
    },
  },
  {
    q: { bn: "মামলা নিষ্পত্তি হতে কতদিন লাগে?", en: "How long will my case take?" },
    a: {
      bn: "সোজাসাপ্টা: জামিন ১–৬ সপ্তাহ, রিট ৬–১৮ মাস, দেনমোহর/ভরণপোষণ ১–৩ বছর, ভূমি মামলা দীর্ঘতম — আদালত ও পক্ষদের ওপর নির্ভর করে। পরামর্শে প্রতিটি ধাপের বাস্তব সময় বলে দিই — কারণ ভুল প্রত্যাশার চেয়ে কঠিন সত্য ভালো।",
      en: "Frankly: bail in 1–6 weeks, writs in 6–18 months, dower and maintenance in 1–3 years, land suits longest — depending on the court and the parties. At consultation you get the honest timeline of every step, because a hard truth beats a wrong expectation.",
    },
  },
  {
    q: { bn: "আমি প্রবাসে আছি — মামলা চালাতে কি দেশে আসতে হবে?", en: "I live abroad — must I come to Bangladesh for my case?" },
    a: {
      bn: "না। বেশিরভাগ মামলা পাওয়ার অব অ্যাটর্নির মাধ্যমে চালানো যায় — দূতাবাসে নোটারি করে কূটনৈতিক ব্যাগে পাঠালেই হয়। জন্মসনদ, নামজারি, সম্পত্তি বণ্টন, এমনকি বিবাহবিচ্ছেদও অনেক ক্ষেত্রে দূর থেকে সম্পন্ন হয়। প্রক্রিয়াটা ধাপে ধাপে বুঝিয়ে দিই।",
      en: "No. Most matters proceed through power of attorney — notarised at your embassy and couriered in a diplomatic bag. Succession certificates, namjari, partition, even divorce in many cases can all be completed from abroad. The process is explained step by step.",
    },
  },
  {
    q: { bn: "পরামর্শের ফি কি পরে মামলার ফি থেকে বাদ যায়?", en: "Is the consultation fee adjusted against case fees?" },
    a: {
      bn: "হ্যাঁ — পরামর্শের ৯০ দিনের মধ্যে আমার মাধ্যমে মামলা দায়ের করলে প্রাথমিক পরামর্শের পুরো ফি চূড়ান্ত ফি থেকে বাদ যায়।",
      en: "Yes. If you engage me within 90 days of the consultation, the full consultation fee is credited against the engagement fee.",
    },
  },
  {
    q: { bn: "আপনি কোন কোন আদালতে মামলা করেন?", en: "Which courts do you practise in?" },
    a: {
      bn: "সুপ্রিম কোর্টের হাইকোর্ট বিভাগ (রিট, আপিল, রেফারেন্স), ঢাকা জেলা ও দায়রা জজ আদালত, পারিবারিক আদালত, ট্যাক্সেস ও ভ্যাট আপিল ট্রাইব্যুনাল, এবং আর্বিট্রেশন। ঢাকার বাইরের জেলা আদালতে স্থানীয় সহকারী আইনজীবীসহ মামলা পরিচালনা করি।",
      en: "The High Court Division (writs, appeals, references), Dhaka District & Sessions Court, Family Courts, the Taxes and VAT Appellate Tribunals, and arbitration. Outside Dhaka, cases run with trusted local counsel under my supervision.",
    },
  },
  {
    q: { bn: "জরুরি জামিনের প্রয়োজনে রাতে যোগাযোগ করব কীভাবে?", en: "How do I reach you at night for an urgent bail?" },
    a: {
      bn: "ফোন করুন সরাসরি — জরুরি জামিন রাতের শুনানিতেও (ম্যাজিস্ট্রেটের বাসায়) হতে পারে। গ্রেপ্তারের ২৪ ঘণ্টাই সবচেয়ে গুরুত্বপূর্ণ; সেই সময়ে আমি বা আমার চেম্বারের সহকারী সাড়া দেব ইনশাআল্লাহ।",
      en: "Call directly — urgent bail can be heard at night, even at a magistrate's residence. The first 24 hours after arrest matter most; in that window, I or a senior associate will answer.",
    },
  },
  {
    q: { bn: "আমার তথ্য কি গোপন থাকবে?", en: "Will my information stay confidential?" },
    a: {
      bn: "অবশ্যই। অ্যাডভোকেট-ক্লায়েন্ট গোপনীয়তা আইনে সুরক্ষিত — আপনি চেম্বারে যা বলবেন, তা মামলা নেওয়া হোক বা না হোক, কখনোই বাইরে যাবে না। আমার চেম্বারের সহকারীরাও একই নিয়মে বাঁধা।",
      en: "Always. Advocate–client confidentiality is protected by law — whatever you say in the chamber stays there, whether or not I take the case. My associates are bound by the same rule.",
    },
  },
];

/** /start ফর্মের অপশন */
export const matters = [
  { id: "criminal", bn: "ফৌজদারি / জামিন", en: "Criminal / Bail" },
  { id: "land", bn: "জমি ও সম্পত্তি", en: "Land & property" },
  { id: "family", bn: "পারিবারিক / উত্তরাধিকার", en: "Family / inheritance" },
  { id: "writ", bn: "রিট / সাংবিধানিক", en: "Writ / constitutional" },
  { id: "commercial", bn: "ব্যবসায়িক / চুক্তি", en: "Business / contract" },
  { id: "tax", bn: "কর / ভ্যাট", en: "Tax / VAT" },
  { id: "other", bn: "অন্যান্য", en: "Something else" },
];

export const urgencies = [
  { id: "now", bn: "এখনই — ২৪ ঘণ্টার মধ্যে", en: "Urgent — within 24 hours" },
  { id: "week", bn: "এই সপ্তাহে", en: "This week" },
  { id: "soon", bn: "মাসের মধ্যে", en: "Within a month" },
  { id: "ask", bn: "এখনো ঠিক করিনি", en: "Not sure yet" },
];

export const modes = [
  { id: "chamber", bn: "চেম্বারে সাক্ষাৎ", en: "Meet in chamber" },
  { id: "phone", bn: "ফোনে", en: "By phone" },
  { id: "video", bn: "ভিডিও কলে", en: "By video call" },
];
