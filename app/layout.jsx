import { Poppins, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ── Fonts ──────────────────────────────────────────────────────────────── */
const poppins = Poppins({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display:  "swap",
});

const amiri = Amiri({
  subsets:  ["arabic", "latin"],
  weight:   ["400", "700"],
  variable: "--font-amiri",
  display:  "swap",
});

/* ── Root Metadata (overridden per-page) ────────────────────────────────── */
export const metadata = {
  metadataBase: new URL("https://quranacademy.online"),

  title: {
    default:  "Quran Academy | Online Quran & Arabic Classes by Hafiza Sania",
    template: "%s | Quran Academy",
  },
  description:
    "Learn Quran Nazra, Quran Hafiz, Arabic Language & Arabic Speaking online with Hafiza Sania — MPhil in Islamic & Arabic Studies. One-on-one live Zoom sessions. Ages 5–50. 500+ students worldwide. First 3 classes FREE.",

  keywords: [
    // Primary — high volume
    "learn Quran online", "online Quran classes", "Quran tutor online",
    "online Arabic classes", "Arabic language online", "learn Arabic",
    // Course-specific
    "Quran Nazra online", "Hifz classes online", "Quran memorization online",
    "Arabic speaking course", "Tajweed classes online",
    // Audience-specific
    "online Quran classes for kids", "Quran classes for beginners",
    "online Quran classes for sisters", "female Quran teacher online",
    "Quran classes for children", "Islamic studies online",
    // Academy brand
    "Quran academy online", "Islamic academy", "Arabic academy online",
    "best online Quran teacher", "certified Quran teacher",
    "Hafiza Sania Quran teacher", "MPhil Islamic studies teacher",
    // Geographic
    "online Quran classes UK", "online Quran classes USA",
    "online Quran classes Canada", "online Quran classes Australia",
    "Quran teacher Pakistan",
  ],

  authors:  [{ name: "Hafiza Sania", url: "https://quranacademy.online/about" }],
  creator:  "Hafiza Sania",
  publisher:"Quran Academy",

  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  openGraph: {
    type:        "website",
    locale:      "en_US",
    siteName:    "Quran Academy",
    title:       "Online Quran & Arabic Classes | Hafiza Sania",
    description: "Join 500+ students learning Quran & Arabic online with Hafiza Sania — certified Hafiza & MPhil in Islamic Studies. First 3 classes FREE.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Quran Academy — Online Learning" }],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Online Quran & Arabic Classes | Hafiza Sania",
    description: "First 3 lessons FREE. One-on-one Zoom sessions with a certified Hafiza. All ages welcome.",
    images:      ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://quranacademy.online",
  },

};

/* ── JSON-LD Structured Data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       "EducationalOrganization",
      "@id":         "https://quranacademy.online/#org",
      "name":        "Quran Academy",
      "alternateName": ["Quran Academy Online", "Hafiza Sania's Quran Academy"],
      "url":         "https://quranacademy.online",
      "logo":        "https://quranacademy.online/logo.png",
      "description": "Online Quran and Arabic education academy founded by Hafiza Sania — MPhil in Islamic & Arabic Studies. Offering Quran Nazra, Quran Hafiz, Arabic Language, and Arabic Speaking courses.",
      "founder": {
        "@type":   "Person",
        "name":    "Hafiza Sania",
        "jobTitle": "Quran & Arabic Language Teacher",
        "description": "Hafiza Sania holds an MPhil in Islamic and Arabic Studies (16-year degree) and is a certified Hafiza with over a decade of teaching experience.",
        "knowsAbout": ["Quran", "Arabic Language", "Islamic Studies", "Tajweed", "Hifz", "Arabic Speaking"],
        "alumniOf": { "@type": "EducationalOrganization", "name": "Islamic Studies University" },
        "sameAs": [],
      },
      "contactPoint": [
        {
          "@type":          "ContactPoint",
          "contactType":    "customer service",
          "telephone":      "+923366375012",
          "email":          "saniaqueen1212@gmail.com",
          "availableLanguage": ["English", "Arabic", "Urdu"],
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name":  "Quran & Arabic Courses",
        "itemListElement": [
          { "@type": "Course", "name": "Quran Nazra", "url": "https://quranacademy.online/courses/quran-nazra",
            "description": "Learn to read the Quran correctly with Tajweed rules.",
            "provider": { "@id": "https://quranacademy.online/#org" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "First 3 classes free" } },
          { "@type": "Course", "name": "Quran Hafiz (Hifz)", "url": "https://quranacademy.online/courses/quran-hafiz",
            "description": "Full Quran memorization program with supervision and revision system.",
            "provider": { "@id": "https://quranacademy.online/#org" } },
          { "@type": "Course", "name": "Arabic Language", "url": "https://quranacademy.online/courses/arabic-language",
            "description": "Classical and Modern Standard Arabic — grammar, vocabulary, and reading.",
            "provider": { "@id": "https://quranacademy.online/#org" } },
          { "@type": "Course", "name": "Arabic Speaking", "url": "https://quranacademy.online/courses/arabic-speaking",
            "description": "Conversational Arabic for everyday communication.",
            "provider": { "@id": "https://quranacademy.online/#org" } },
        ],
      },
      "aggregateRating": {
        "@type":       "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "87",
        "bestRating":  "5",
        "worstRating": "1",
      },
      "areaServed": ["Worldwide", "UK", "USA", "Canada", "Australia", "Pakistan"],
      "audience":   { "@type": "Audience", "audienceType": "Students aged 5–50, children, women" },
    },
    {
      "@type":        "WebSite",
      "@id":          "https://quranacademy.online/#website",
      "url":          "https://quranacademy.online",
      "name":         "Quran Academy",
      "publisher":    { "@id": "https://quranacademy.online/#org" },
      "potentialAction": {
        "@type":       "SearchAction",
        "target":      "https://quranacademy.online/courses?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

/* ── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${poppins.variable} ${amiri.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-surface text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
