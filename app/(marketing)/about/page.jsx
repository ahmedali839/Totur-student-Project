import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Hafiza Sania | Online Quran & Arabic Teacher",
  description:
    "Meet Hafiza Sania — MPhil in Islamic & Arabic Studies (16-year degree), certified Hafiza, and online Quran teacher with 10+ years experience teaching 500+ students in 20+ countries.",
  keywords: [
    "Hafiza Sania", "female Quran teacher online", "MPhil Islamic studies teacher",
    "certified Hafiza online", "online Quran teacher", "Arabic language teacher online",
    "female Arabic teacher", "Quran teacher for sisters", "Islamic educator online",
  ],
  openGraph: {
    title: "About Hafiza Sania | Quran Academy",
    description:
      "MPhil in Islamic & Arabic Studies, certified Hafiza, 10+ years, 500+ students worldwide. Female teacher for sisters, children and families.",
    type: "website",
  },
};

/* ── Static data ─────────────────────────────────────────────────────────── */
const QUALIFICATIONS = [
  {
    icon: "🎓",
    title: "MPhil in Islamic & Arabic Studies",
    body: "A 16-year academic degree combining traditional Islamic scholarship with modern linguistic expertise — one of the most rigorous qualifications a Quran teacher can hold.",
  },
  {
    icon: "📜",
    title: "Certified Hafiza (Full Quran)",
    body: "Hafiza Sania has memorised the complete Quran. This deep personal connection with the Book of Allah shapes every lesson she teaches.",
  },
  {
    icon: "👩‍🏫",
    title: "10+ Years Teaching Experience",
    body: "Over a decade of one-on-one online teaching — children as young as 5 and adults up to 50, in more than 20 countries across the globe.",
  },
  {
    icon: "🌍",
    title: "500+ Students Worldwide",
    body: "Families from the UK, USA, Canada, Australia, and Pakistan have trusted Hafiza Sania with their Quranic and Arabic education.",
  },
];

const VALUES = [
  {
    icon: "🤲",
    title: "Patience Above All",
    body: "Every student — a 5-year-old learning Alif or an adult returning to the Quran — deserves infinite patience, kindness, and zero judgment.",
  },
  {
    icon: "🎯",
    title: "Personalised to Every Student",
    body: "No two learners are the same. Pacing, materials, and focus are adapted each month based on your progress, strengths, and goals.",
  },
  {
    icon: "📈",
    title: "Measurable, Consistent Progress",
    body: "Structured curricula, regular assessments, and written monthly reports mean parents always know exactly where their child stands.",
  },
  {
    icon: "🏡",
    title: "Safe & Comfortable Environment",
    body: "As a female Aalima, Hafiza Sania creates a warm Islamic environment — especially valued by sisters, mothers, and parents of young girls.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="gradient-hero pattern-overlay relative overflow-hidden px-4 py-16 ">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-mid/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-faint">
            Meet Your Teacher
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Meet <span className="text-gold-light">Hafiza Sania</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-faint">
            MPhil in Islamic &amp; Arabic Studies. Certified Hafiza. Female scholar dedicated to
            helping every student — young or old — build a lifelong connection with the Quran.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm text-brand-faint">
            <span className="text-gold-light">★★★★★</span>
            <span className="font-semibold text-white">5.0</span>
            <span>· Trusted by 500+ students in 20+ countries</span>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["✓ MPhil Certified", "✓ Certified Hafiza", "✓ Female Teacher", "✓ 10+ Years Experience"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-brand-faint"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Profile + Bio ─────────────────────────────────────────────────── */}
      <section className="bg-surface-2 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr]">

            {/* Profile card */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-brand p-7 text-center text-white shadow-lg">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-mid/30 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gold-mid text-3xl font-extrabold text-white shadow-lg">
                    HS
                  </div>
                  <p className="mt-4 text-xl font-bold text-white">Hafiza Sania</p>
                  <p className="mt-0.5 text-sm text-brand-faint">Quran &amp; Arabic Teacher</p>
                  <p className="mt-2 flex items-center justify-center gap-1">
                    <span className="text-gold-light">★★★★★</span>
                    <span className="text-sm font-semibold text-white">5.0</span>
                    <span className="text-xs text-brand-faint">(87 reviews)</span>
                  </p>

                  <div className="mt-5 w-full space-y-2.5 border-t border-white/10 pt-5 text-left text-sm">
                    {[
                      ["🎓", "MPhil Islamic & Arabic Studies"],
                      ["📜", "Certified Hafiza (Full Quran)"],
                      ["👩‍🏫", "10+ Years Teaching"],
                      ["🌍", "500+ Students Worldwide"],
                      ["🏫", "4 Specialist Courses"],
                      ["📅", "Flexible Worldwide Scheduling"],
                    ].map(([icon, text]) => (
                      <div key={text} className="flex items-center gap-2.5">
                        <span className="text-base">{icon}</span>
                        <span className="text-xs font-medium text-brand-faint">{text}</span>
                      </div>
                    ))}
                  </div>

                  <Button href="/book" variant="gold" size="md" className="mt-6 w-full justify-center">
                    Book Free Trial
                  </Button>
                  <a
                    href="https://wa.me/923366375012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-1.5 text-xs text-brand-faint transition-colors hover:text-white"
                  >
                    💬 WhatsApp: +92 336 6375012
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-8">
              <div>
                <span className="section-chip bg-brand-faint text-brand">Her Story</span>
                <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
                  A Scholar Who Loves to Teach
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-muted">
                  <p>
                    Hafiza Sania completed her full Quran memorisation at an early age — a journey
                    that instilled in her a deep love for the Book of Allah and a passion for sharing
                    that love with others. She went on to earn an{" "}
                    <strong className="text-ink">MPhil in Islamic and Arabic Studies</strong> — a
                    16-year academic journey combining traditional Islamic scholarship with modern
                    linguistic expertise.
                  </p>
                  <p>
                    Over the past decade, she has taught{" "}
                    <strong className="text-ink">500+ students</strong> from the UK, USA, Canada,
                    Australia, and Pakistan — children as young as 5 and adults up to 50. Her teaching
                    approach is warm, structured, patient, and deeply effective. She has seen 120+
                    students complete full Quran recitation (Khatam) and 35+ students currently
                    working towards Hifz.
                  </p>
                  <p>
                    As a <strong className="text-ink">female Aalima</strong>, Hafiza Sania creates a
                    safe, comfortable, Islamic learning environment — particularly valued by sisters,
                    mothers, and parents of young girls. Every lesson is conducted live, one-on-one on
                    Zoom, with full personal attention and a structured plan.
                  </p>
                  <p>
                    Her 4 specialist courses —{" "}
                    <strong className="text-ink">
                      Quran Nazra, Quran Hafiz, Arabic Language,
                    </strong>{" "}
                    and <strong className="text-ink">Arabic Speaking</strong> — cover everything from
                    reading the Quran for the first time to full memorisation and conversational
                    Arabic.
                  </p>
                </div>
              </div>

              {/* Quranic quote */}
              <div className="rounded-2xl border border-brand-faint bg-brand-faint px-6 py-5 text-center">
                <p className="arabic text-2xl text-brand" dir="rtl">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="mt-2 text-xs italic text-ink-muted">
                  &ldquo;The best of you are those who learn the Quran and teach it.&rdquo; —
                  Sahih al-Bukhari
                </p>
              </div>

              {/* Course links */}
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">Courses She Teaches:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    ["Quran Nazra",    "quran-nazra"],
                    ["Quran Hafiz",    "quran-hafiz"],
                    ["Arabic Language","arabic-language"],
                    ["Arabic Speaking","arabic-speaking"],
                  ].map(([label, slug]) => (
                    <Link
                      key={slug}
                      href={`/courses/${slug}`}
                      className="badge-green transition-colors hover:bg-brand-mid hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Qualifications ────────────────────────────────────────────────── */}
      <section className="bg-surface px-4 py-16" aria-labelledby="qualifications-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-brand-faint text-brand">Credentials</span>
            <h2 id="qualifications-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Qualifications &amp; Experience
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {QUALIFICATIONS.map(({ icon, title, body }) => (
              <div
                key={title}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-surface-2 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-faint text-2xl shadow-sm">
                  {icon}
                </div>
                <div>
                  <h3 className="mb-1.5 text-sm font-semibold text-ink">{title}</h3>
                  <p className="text-xs leading-relaxed text-ink-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="gradient-hero pattern-overlay relative overflow-hidden px-4 py-16 text-white">
        <div className="relative mx-auto max-w-xl text-center">
          <p className="arabic mb-3 text-2xl text-gold-light" dir="rtl">
            وَقُلْ رَبِّ زِدْنِي عِلْمًا
          </p>
          <p className="text-xs italic text-brand-faint">
            &ldquo;And say: My Lord, increase me in knowledge.&rdquo; — Ta-Ha 20:114
          </p>
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            Ready to Start Learning with Hafiza Sania?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-band-faint">
            Your first 3 classes are completely free. No credit card, no commitment — just bring a
            willingness to learn.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book" variant="gold" size="lg">
              🎁 Book 3 Free Classes
            </Button>
            <Link
              href="/courses"
              className="text-sm font-medium text-brand-faint transition-colors hover:text-white"
            >
              View All Courses →
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-brand-faint">
            <span>✓ No credit card required</span>
            <span>✓ Ages 5–50 welcome</span>
            <span>✓ Female teacher</span>
          </div>
        </div>
      </section>
    </>
  );
}
