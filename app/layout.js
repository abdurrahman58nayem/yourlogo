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
    default: "YourLogo — Identity studio in Dhaka",
    template: "%s — YourLogo",
  },
  description:
    "YourLogo is a Dhaka identity studio. We design logos and brand systems people recognize at a glance — shop signs, app icons, and everything between. লোগো ডিজাইন ও ব্র্যান্ড আইডেন্টিটি, ঢাকা।",
  keywords: [
    "logo design",
    "brand identity",
    "Dhaka",
    "Bangladesh",
    "logo designer",
    "লোগো ডিজাইন",
    "ব্র্যান্ড আইডেন্টিটি",
    "লোগো ডিজাইনার ঢাকা",
  ],
  applicationName: "YourLogo",
  authors: [{ name: "YourLogo" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    siteName: "YourLogo",
    title: "YourLogo — A logo should feel inevitable.",
    description:
      "Identity studio in Dhaka. Marks, systems, and rebrands — in Bangla and Latin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourLogo — Identity studio",
    description: "Marks and brand systems from a studio in Dhaka.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#EFE8DC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description:
      "Identity studio in Dhaka designing logos and brand systems in Bangla and Latin.",
    url,
    email: site.email,
    image: `${url}/images/studio.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    areaServed: ["Bangladesh", "Worldwide"],
    priceRange: "৳৳",
    knowsLanguage: ["en", "bn"],
    ...(site.phoneDisplay ? { telephone: site.phoneDisplay } : {}),
  };

  return (
    <html lang="en" suppressHydrationWarning>
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
