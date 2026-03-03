import Link from "next/link";
import Button from "@/components/ui/Button";
import { BookOpen, Star, PenTool, MessageCircle, Check, Users, Clock, Gift } from "lucide-react";

export const metadata = {
  title: "Online Quran & Arabic Courses | Hafiza Sania",
  description:
    "Explore 4 specialist online courses with Hafiza Sania: Quran Nazra, Quran Hafiz (memorisation), Arabic Language, and Arabic Speaking. Live 1-on-1 Zoom classes. First 3 lessons free.",
  keywords: [
    "online Quran course", "Quran Hafiz course online", "Arabic language course online",
    "learn Quran online", "Arabic speaking course", "Quran nazra online",
    "online Islamic classes", "Quran memorisation course",
  ],
  openGraph: {
    title: "Online Quran & Arabic Courses | Hafiza Sania",
    description:
      "4 specialist online courses for children and adults. Live 1-on-1 Zoom classes with certified Hafiza. First 3 lessons completely free.",
    type: "website",
  },
};

const COURSES = [
  {
    slug:     "quran-nazra",
    label:    "Foundation",
    title:    "Quran Nazra",
    arabic:   "ناظرة",
    tagline:  "Read the Quran fluently with correct Tajweed",
    icon:     <BookOpen className="h-7 w-7 text-brand" />,
    audience: "Ages 5+ · Beginners to intermediate",
    duration: "30–45 min / session",
    price:    "$15",
    per:      "per session",
    badge:    "Most Popular",
    outcomes: [
      "Arabic alphabet & correct pronunciation",
      "Tajweed rules applied from day one",
      "Fluent Quran recitation Surah by Surah",
      "Full Quran Khatam completion milestone",
    ],
  },
  {
    slug:     "quran-hafiz",
    label:    "Memorisation",
    title:    "Quran Hafiz",
    arabic:   "حفظ",
    tagline:  "Memorise the complete Quran, Juz by Juz",
    icon:     <Star className="h-7 w-7 text-gold-mid" />,
    audience: "Ages 7+ · Fluent Quran readers",
    duration: "45–60 min / session",
    price:    "$20",
    per:      "per session",
    badge:    "Prestigious",
    outcomes: [
      "Personalised Hifz plan at your own pace",
      "Daily revision system to retain memorisation",
      "Correct Maqam and Tajweed throughout",
      "Certificate of completion upon finishing",
    ],
  },
  {
    slug:     "arabic-language",
    label:    "Language",
    title:    "Arabic Language",
    arabic:   "لغة عربية",
    tagline:  "Master Classical & Modern Standard Arabic",
    icon:     <PenTool className="h-7 w-7 text-brand-mid" />,
    audience: "Ages 10+ · All levels welcome",
    duration: "45 min / session",
    price:    "$18",
    per:      "per session",
    badge:    "Quran Understanding",
    outcomes: [
      "Arabic reading, writing & grammar foundations",
      "Quran comprehension — understand what you recite",
      "Classical Arabic & Modern Standard Arabic",
      "Reading Islamic texts with understanding",
    ],
  },
  {
    slug:     "arabic-speaking",
    label:    "Conversational",
    title:    "Arabic Speaking",
    arabic:   "محادثة",
    tagline:  "Speak Arabic confidently in real conversation",
    icon:     <MessageCircle className="h-7 w-7 text-brand-light" />,
    audience: "Ages 12+ · Basic Arabic readers preferred",
    duration: "45 min / session",
    price:    "$18",
    per:      "per session",
    badge:    "Speak Fluently",
    outcomes: [
      "Day-to-day conversational Arabic fluency",
      "Core vocabulary for real-life situations",
      "Islamic conversation phrases and expressions",
      "Confidence to speak with native speakers",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-surface">
      {/* ── PREMIUM LIGHT HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:pt-32">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand-faint/50 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-gold-faint/40 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-block rounded-full border border-brand/10 bg-brand-faint px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-sm">
            Our Courses
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            4 Courses.{" "}
            <span className="text-brand">One Dedicated Teacher.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Live, 1-on-1 Zoom classes with Hafiza Sania — MPhil, Certified Hafiza, 10+ years
            experience. Choose the course that matches your goal.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-ink-muted">
            <span className="text-gold-light text-lg">★★★★★</span>
            <span className="font-bold text-ink">5.0</span>
            <span>· 500+ students · 20+ countries · First 3 classes free</span>
          </div>
        </div>
      </section>

      {/* ── COURSE CARDS (SaaS PRICING STYLE) ───────────────────────────── */}
      <section className="relative z-10 bg-surface-2 px-4 py-16 sm:py-24 border-t border-border/50" aria-labelledby="courses-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center animate-fade-up">
            <h2 id="courses-heading" className="text-3xl font-extrabold text-ink sm:text-4xl">
              All Courses Include a Free Trial
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted">
              Start with 3 free lessons. Experience the teaching style, set your goals, and
              continue only if you love it.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            {COURSES.map(({ slug, label, title, arabic, tagline, icon, audience, duration, price, per, outcomes, badge }, index) => {
              const isPopular = badge === "Most Popular";

              return (
                <article
                  key={slug}
                  className={`group relative flex flex-col rounded-3xl bg-white p-8 transition-all duration-300 animate-fade-up ${
                    isPopular 
                      ? "border-2 border-brand-mid shadow-2xl shadow-brand/10 lg:-translate-y-4 hover:-translate-y-6 z-10" 
                      : "border border-border/60 shadow-lg hover:-translate-y-2 hover:shadow-xl"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Badge */}
                  {badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-sm ${isPopular ? "bg-brand-mid text-white" : "bg-surface-2 text-ink-muted border border-border"}`}>
                      {badge}
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mt-4">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-4 ${isPopular ? "bg-brand-faint" : "bg-surface-2"}`}>
                      {icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand">{label}</span>
                    <h3 className="mt-1 text-2xl font-extrabold text-ink">{title}</h3>
                    <p className="arabic mt-1 text-lg text-ink-muted" dir="rtl">{arabic}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted min-h-[40px]">{tagline}</p>
                  </div>

                  {/* Details */}
                  <div className="my-6 rounded-2xl bg-surface-2 p-4 text-xs font-medium text-ink-muted space-y-2">
                    <div className="flex items-center gap-2"><Users className="h-4 w-4 text-brand-mid" /> {audience}</div>
                    <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-mid" /> {duration}</div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-ink">{price}</span>
                    <span className="text-sm font-medium text-ink-muted">{per}</span>
                  </div>

                  {/* Outcomes */}
                  <ul className="mb-8 flex-1 space-y-4">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-ink-muted">
                        <Check className="h-5 w-5 shrink-0 text-brand-mid" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-auto space-y-3 pt-6 border-t border-border/50">
                    <Button href="/book" variant={isPopular ? "primary" : "outline"} className="w-full justify-center">
                      Start Free Trial
                    </Button>
                    <Link
                      href={`/courses/${slug}`}
                      className="block text-center text-xs font-semibold text-ink-muted transition-colors hover:text-brand"
                    >
                      View full curriculum →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TUTOR STRIP ───────────────────────────────────────────────────── */}
      <section className="border-y border-border/50 bg-white px-4 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand text-2xl font-extrabold text-white shadow-lg shadow-brand/20">
            HS
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">Your Teacher</p>
            <h3 className="mt-1 text-2xl font-bold text-ink">Hafiza Sania</h3>
            <p className="mt-2 text-sm text-ink-muted">
              MPhil in Islamic &amp; Arabic Studies (16-year degree) · Certified Hafiza · 10+ Years Experience · 500+ Students Worldwide
            </p>
          </div>
          <Button href="/about" variant="secondary" size="md" className="shrink-0">
            Meet Hafiza Sania
          </Button>
        </div>
      </section>

      {/* ── FINAL CTA (LIGHT & PREMIUM) ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-faint/30 px-4 py-20 sm:py-24">
        <div className="relative mx-auto max-w-2xl text-center animate-fade-up">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Not Sure Which Course to Pick?</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-muted">
            Book your free trial and Hafiza Sania will personally assess your level and recommend the perfect path for you or your child.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" variant="gold" size="xl" className="shadow-lg shadow-gold-mid/20 hover:scale-105 transition-transform w-full sm:w-auto justify-center inline-flex items-center gap-2">
              <Gift className="h-4 w-4" /> Claim 3 Free Classes
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium text-ink-muted">
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-brand" /> No credit card</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-brand" /> Ages 5–50</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-brand" /> Female teacher</span>
          </div>
        </div>
      </section>
    </div>
  );
}

