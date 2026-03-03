import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  GraduationCap, Award, BookOpen, Globe,
  Heart, Target, TrendingUp, ShieldCheck,
  Check, Gift,
} from "lucide-react";

export const metadata = {
  title: "About Hafiza Sania | Online Quran & Arabic Teacher",
  description:
    "Meet Hafiza Sania — MPhil in Islamic & Arabic Studies, certified Hafiza, and online Quran teacher with 10+ years experience teaching 500+ students worldwide.",
};

/* ── Static data ─────────────────────────────────────────────────────────── */
const QUALIFICATIONS = [
  {
    icon: <GraduationCap className="h-6 w-6 text-brand" />,
    title: "MPhil in Islamic Studies",
    body: "A 16-year rigorous academic degree combining traditional Islamic scholarship with modern linguistic expertise.",
  },
  {
    icon: <Award className="h-6 w-6 text-gold-mid" />,
    title: "Certified Hafiza",
    body: "Fully memorised the Quran. This deep, personal connection to the Book of Allah shapes every lesson.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-brand-mid" />,
    title: "10+ Years Experience",
    body: "A decade of dedicated 1-on-1 teaching, adapting to students of all ages (from 5 to 50) and skill levels.",
  },
  {
    icon: <Globe className="h-6 w-6 text-brand-light" />,
    title: "500+ Global Students",
    body: "Trusted by families across the UK, USA, Canada, Australia, and the Middle East.",
  },
];

const VALUES = [
  {
    icon: <Heart className="h-6 w-6 text-brand" />,
    title: "Infinite Patience",
    body: "Every student learns at their own pace. Lessons are completely free of pressure or judgment.",
  },
  {
    icon: <Target className="h-6 w-6 text-brand" />,
    title: "Personalised Plans",
    body: "Materials and goals are dynamically adapted each month based on your unique progress and strengths.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-brand" />,
    title: "Measurable Progress",
    body: "Structured curricula and written monthly reports mean parents always know exactly where their child stands.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand" />,
    title: "Safe & Comfortable",
    body: "A warm, secure Islamic environment lead by a female scholar—perfect for sisters, mothers, and daughters.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-surface">
      {/* ── PREMIUM LIGHT HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:pt-32">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-faint/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-gold-faint/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-block rounded-full border border-brand/10 bg-brand-faint px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-sm">
            Meet Your Teacher
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Meet <span className="text-brand">Hafiza Sania</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            MPhil Scholar. Certified Hafiza. Dedicated to helping every student
            build a lifelong, beautiful connection with the Quran.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-ink-muted">
            <span className="text-gold-light text-lg">★★★★★</span>
            <span className="font-bold text-ink">5.0</span>
            <span>· Trusted by 500+ students in 20+ countries</span>
          </div>
        </div>
      </section>

      {/* ── PROFILE + BIO (SPLIT LAYOUT) ────────────────────────────────── */}
      <section className="bg-surface-2 px-4 py-16 sm:py-24 border-y border-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] items-start">
            {/* Left: Sticky Profile Card */}
            <div className="lg:sticky lg:top-28">
              <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-border/60 bg-white p-8 text-center shadow-xl shadow-brand/5 animate-fade-up">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-brand text-4xl font-extrabold text-white shadow-inner">
                  HS
                </div>
                <p className="mt-5 text-2xl font-extrabold text-ink">
                  Hafiza Sania
                </p>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  Quran &amp; Arabic Teacher
                </p>

                <div className="mt-6 w-full space-y-3 border-t border-border/50 pt-6 text-left text-sm">
                  {[
                    {
                      icon: <GraduationCap className="h-4 w-4" />,
                      text: "MPhil Islamic Studies",
                    },
                    {
                      icon: <Award className="h-4 w-4" />,
                      text: "Certified Hafiza",
                    },
                    {
                      icon: <BookOpen className="h-4 w-4" />,
                      text: "10+ Years Teaching",
                    },
                    {
                      icon: <Globe className="h-4 w-4" />,
                      text: "500+ Students",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-ink-muted"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-faint text-brand">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button
                  href="/book"
                  variant="primary"
                  size="lg"
                  className="mt-8 w-full justify-center shadow-md shadow-brand/20"
                >
                  Book Free Trial
                </Button>
              </div>
            </div>

            {/* Right: Condensed Bio */}
            <div className="space-y-10 animate-fade-up delay-200">
              <div>
                <span className="section-chip bg-brand-faint text-brand border border-brand/10">
                  Her Story
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
                  A Scholar Who Loves to Teach
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted">
                  <p>
                    Hafiza Sania holds an{" "}
                    <strong className="font-semibold text-ink">
                      MPhil in Islamic &amp; Arabic Studies
                    </strong>
                    , bringing 16 years of rigorous academic and traditional
                    scholarship to her teaching. As a certified Hafiza, her deep
                    love for the Quran shapes every lesson she delivers.
                  </p>
                  <p>
                    With over a decade of online experience, she has
                    successfully guided{" "}
                    <strong className="font-semibold text-ink">
                      500+ students globally
                    </strong>
                    . From children learning their first Arabic letters to
                    adults perfecting their Tajweed, she provides a structured,
                    patient, and highly personalized learning environment.
                  </p>
                  <p>
                    As a{" "}
                    <strong className="font-semibold text-ink">
                      female Aalima
                    </strong>
                    , she ensures a safe and comfortable space for sisters and
                    young girls to learn and thrive with full personal
                    attention.
                  </p>
                </div>
              </div>

              {/* Elegant Quranic Quote */}
              <div className="rounded-3xl border border-brand-faint bg-brand-faint/30 p-8 text-center shadow-inner">
                <p
                  className="arabic text-3xl text-brand leading-relaxed"
                  dir="rtl"
                >
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="mt-4 text-sm font-medium italic text-ink-muted">
                  &ldquo;The best of you are those who learn the Quran and teach
                  it.&rdquo; — Sahih al-Bukhari
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS & VALUES (GRID LAYOUT) ───────────────────────── */}
      <section className="bg-surface px-4 py-12 sm:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Credentials */}
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl mb-8">
              Qualifications
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {QUALIFICATIONS.map(({ icon, title, body }, idx) => (
                <div
                  key={title}
                  className="group rounded-3xl border border-border/50 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-faint transition-colors group-hover:bg-brand group-hover:text-white">
                    {icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-ink">{title}</h3>
                  <p className="text-sm text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (LIGHT & PREMIUM) ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-faint/30 px-4 py-12 sm:py-24">
        <div className="relative mx-auto max-w-2xl text-center animate-fade-up">
          <p className="arabic mb-4 text-3xl text-brand" dir="rtl">
            وَقُلْ رَبِّ زِدْنِي عِلْمًا
          </p>
          <p className="mb-8 text-sm font-medium italic text-ink-muted">
            &ldquo;And say: My Lord, increase me in knowledge.&rdquo; — Ta-Ha
            20:114
          </p>

          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-muted">
            Your first 3 classes are completely free. No credit card, no
            commitment — just bring a willingness to learn.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/book"
              variant="gold"
              size="xl"
              className="shadow-lg shadow-gold-mid/20 hover:scale-105 transition-transform w-full sm:w-auto justify-center inline-flex items-center gap-2"
            >
              <Gift className="h-4 w-4" /> Book 3 Free Classes
            </Button>
            <Link
              href="/courses"
              className="text-sm font-bold text-ink-muted transition-colors hover:text-brand"
            >
              View All Courses →
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-medium text-ink-muted">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-brand" /> No credit card
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-brand" /> Ages 5–50
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-brand" /> Female teacher
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
