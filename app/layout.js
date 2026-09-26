import "./globals.css";
import "@/lib/fonts";
import Script from "next/script";
import { langBoot } from "@/lib/lang";
import { site, siteUrl } from "@/lib/site";
import Shell from "@/components/Shell";

const url = siteUrl();

export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: "অ্যাডভোকেট মো. আবদুল লতিফ — আইনজীবী, বাংলাদেশ সুপ্রিম কোর্ট",
    template: "%s — অ্যাডভোকেট মো. আবদুল লতিফ",
  },
  description:
    "২৭ বছরের অভিজ্ঞ আইনজীবী — ফৌজদারি জামিন, ভূমি ও সম্পত্তি, পারিবারিক ও উত্তরাধিকার, হাইকোর্ট রিট, বাণিজ্যিক ও কর মামলা। সুপ্রিম কোর্ট বার অ্যাসোসিয়েশন, ঢাকা। Criminal bail, land, family, writ, corporate and tax matters — Supreme Court of Bangladesh.",
  keywords: [
    "আইনজীবী",
    "অ্যাডভোকেট",
    "উকিল",
    "ঢাকার আইনজীবী",
    "জামিনের আইনজীবী",
    "ভূমি মামলার আইনজীবী",
    "পারিবারিক আইনজীবী",
    "রিট আবেদন",
    "lawyer in Dhaka",
    "advocate Supreme Court Bangladesh",
    "criminal lawyer Dhaka",
    "land dispute lawyer Bangladesh",
  ],
  applicationName: site.nameEn,
  authors: [{ name: site.nameEn }],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    siteName: site.nameEn,
    title: "অ্যাডভোকেট মো. আবদুল লতিফ — আইনজীবী, বাংলাদেশ সুপ্রিম কোর্ট",
    description:
      "ফৌজদারি জামিন, ভূমি, পারিবারিক, রিট, বাণিজ্যিক ও কর — ২৭ বছরের অভিজ্ঞতা। চেম্বার: এসসিবিএ, শাহবাগ, ঢাকা।",
  },
  twitter: {
    card: "summary_large_image",
    title: "অ্যাডভোকেট মো. আবদুল লতিফ — আইনজীবী",
    description: "২৭ বছরের অভিজ্ঞতা — সুপ্রিম কোর্ট, ঢাকা।",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0E1626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Attorney", "LegalService"],
    name: site.name,
    alternateName: site.nameEn,
    description:
      "Senior advocate with 27+ years before the Supreme Court of Bangladesh and Dhaka courts — criminal bail, land, family, writ, corporate and tax matters.",
    url,
    email: site.email,
    telephone: site.phoneDisplay,
    image: `${url}/images/portrait.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room 512, SCBA Annex Building, Shahbagh",
      addressLocality: "Dhaka",
      postalCode: "1000",
      addressCountry: "BD",
    },
    areaServed: ["Dhaka", "Bangladesh"],
    priceRange: "৳৳",
    knowsLanguage: ["bn", "en"],
    openingHours: "Su-Th 10:00-19:00",
    knowsAbout: [
      "Criminal defence and bail",
      "Land and property law",
      "Family and inheritance law",
      "Constitutional writ petitions",
      "Corporate and commercial disputes",
      "Tax and VAT",
    ],
  };

  return (
    <html lang="bn" suppressHydrationWarning>
      <body>
        <Script id="lang-boot" strategy="beforeInteractive">
          {langBoot}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
