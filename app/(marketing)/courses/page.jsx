import Link from "next/link";
import Button from "@/components/ui/Button";

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
    gradient: "gradient-card-green",
    icon:     "📖",
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
    gradient: "gradient-card-gold",
    icon:     "🌟",
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
    gradient: "gradient-card-teal",
    icon:     "✍️",
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
    gradient: "gradient-card-navy",
    icon:     "🗣️",
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

const FEATURES = [
  { icon: "🎯", title: "100% Live & 1-on-1",      body: "Every class is a private session. No group classes, no pre-recorded videos."    },
  { icon: "🌍", title: "Any Timezone Worldwide",  body: "Schedule at your convenience — morning, afternoon, or evening wherever you are."  },
  { icon: "👩‍🏫", title: "Female Aalima Teacher", body: "Hafiza Sania: MPhil in Islamic Studies, Certified Hafiza, 10+ years experience."  },
  { icon: "📋", title: "Structured Curriculum",   body: "Clear lesson plans, monthly progress reports, and measurable milestones."         },
  { icon: "🎁", title: "3 Free Trial Classes",    body: "Try before you commit — no credit card, no contract, no pressure."               },
  { icon: "📜", title: "Course Certificates",     body: "Official completion certificates issued upon finishing each course."              },
];

export default function CoursesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="gradient-hero pattern-overlay relative overflow-hidden px-4 py-16">
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-mid/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-gray/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Our Courses
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            4 Courses.{" "}
            <span className="text-gold-light">One Dedicated Teacher.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-black/80">
            Live, 1-on-1 Zoom classes with Hafiza Sania — MPhil, Certified Hafiza, 10+ years
            experience. Choose the course that matches your goal.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm text-gray-500">
            <span className="text-gold-light">★★★★★</span>
            <span className="font-semibold">5.0</span>
            <span>· 500+ students · 20+ countries · First 3 classes free</span>
          </div>
        </div>
      </section>

      {/* ── Course cards ──────────────────────────────────────────────────── */}
      <section className="bg-surface-2 px-4 py-16" aria-labelledby="courses-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-brand-faint text-brand">Choose Your Course</span>
            <h2 id="courses-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              All Courses Include a Free Trial
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink-muted">
              Start with 3 free lessons. Experience the teaching style, set your goals, and
              continue only if you love it.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {COURSES.map(({ slug, label, title, arabic, tagline, gradient, icon, audience, duration, price, per, outcomes, badge }) => (
              <article
                key={slug}
                className="card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
              >
                <div className={`${gradient} relative flex flex-col items-center px-5 py-7 text-center text-white`}>
                  {badge && (
                    <span className="absolute right-3 top-3 rounded-full border border-white/25 bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {badge}
                    </span>
                  )}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl shadow-inner backdrop-blur-sm">
                    {icon}
                  </div>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                    {label}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold">{title}</h3>
                  <p className="arabic mt-1 text-base text-white/70" dir="rtl">{arabic}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/80">{tagline}</p>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 space-y-1 text-xs text-ink-muted">
                    <div>👥 {audience}</div>
                    <div>⏱ {duration}</div>
                  </div>

                  <ul className="mb-5 space-y-2">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-xs text-ink-muted">
                        <span className="mt-0.5 shrink-0 text-brand">✓</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-border pt-4">
                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-ink">{price}</span>
                      <span className="text-xs text-ink-muted">{per}</span>
                    </div>
                    <Button href="/book" variant="primary" size="sm" className="w-full justify-center">
                      Start Free Trial
                    </Button>
                    <Link
                      href={`/courses/${slug}`}
                      className="mt-2 block text-center text-xs text-brand hover:underline"
                    >
                      View full curriculum →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

          {/* ── Tutor strip ───────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-surface-2 px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand text-2xl font-extrabold text-white shadow-lg">
            HS
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Your Teacher</p>
            <h3 className="mt-0.5 text-xl font-bold text-ink">Hafiza Sania</h3>
            <p className="mt-1 text-sm text-ink-muted">
              MPhil in Islamic &amp; Arabic Studies (16-year degree) · Certified Hafiza ·
              10+ Years Experience · 500+ Students Worldwide
            </p>
          </div>
          <Button href="/about" variant="secondary" size="sm" className="shrink-0">
            Meet Hafiza Sania
          </Button>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="gradient-hero pattern-overlay relative overflow-hidden px-4 py-16 text-white">
        <div className="relative mx-auto max-w-xl text-center">
          <p className="arabic mb-3 text-2xl text-gold-light" dir="rtl">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </p>
          <p className="mb-6 text-xs italic text-gray-500">
            &ldquo;Read in the name of your Lord who created.&rdquo; — Al-Alaq 96:1
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl text-gray-700">Not Sure Which Course to Pick?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
            Book your free trial and Hafiza Sania will assess your level and recommend the
            perfect course for you or your child.
          </p>
          <Button href="/book" variant="gold" size="lg" className="mt-6">
            🎁 Claim 3 Free Classes
          </Button>
          <p className="mt-3 text-xs text-gray-500">
            ✓ No credit card &nbsp;·&nbsp; ✓ Ages 5–50 &nbsp;·&nbsp; ✓ Female teacher
          </p>
        </div>
      </section>
    </>
  );
}
