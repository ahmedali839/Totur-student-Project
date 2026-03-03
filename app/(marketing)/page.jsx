import Link from "next/link";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata = {
  title: "Online Quran & Arabic Classes | Hafiza Sania — First 3 Classes FREE",
  description:
    "Learn Quran Nazra, Quran Hafiz (Memorization), Arabic Language & Arabic Speaking online with Hafiza Sania — MPhil in Islamic & Arabic Studies. Live 1-on-1 Zoom sessions. Ages 5–50. 500+ students. First 3 classes FREE.",
  keywords: [
    "learn Quran online", "Quran classes for kids", "online Quran academy",
    "Hafiz course online", "Arabic language course", "Arabic speaking online",
    "female Quran teacher", "Quran for beginners", "online Islamic education",
    "Tajweed classes", "Quran memorization online", "Arabic for children",
    "Hafiza Sania", "MPhil Islamic studies", "best Quran teacher online",
  ],
  alternates: { canonical: "https://quranacademy.online" },
};

/* ── JSON-LD for FAQ (SEO rich snippet) ─────────────────────────────────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do online Quran classes work?",
      acceptedAnswer: { "@type": "Answer", text: "Sessions are conducted live on Zoom, one-on-one with Hafiza Sania. You book a time slot, receive a Zoom link, and learn from the comfort of your home." },
    },
    {
      "@type": "Question",
      name: "Are these classes suitable for young children?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Hafiza Sania specialises in teaching children as young as 5. Sessions are fun, patient, and adapted to each child's pace." },
    },
    {
      "@type": "Question",
      name: "Is there a free trial available?",
      acceptedAnswer: { "@type": "Answer", text: "Yes! Your first 3 classes are completely free — no credit card, no commitment. Simply book your slot and join." },
    },
    {
      "@type": "Question",
      name: "Do you offer separate classes for sisters and women?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Hafiza Sania is a female teacher, making her classes ideal for sisters and mothers seeking a comfortable, Islamic environment." },
    },
    {
      "@type": "Question",
      name: "What qualifications does Hafiza Sania hold?",
      acceptedAnswer: { "@type": "Answer", text: "Hafiza Sania holds an MPhil in Islamic and Arabic Studies (16-year degree) and is a certified Hafiza — meaning she has memorised the full Quran." },
    },
  ],
};

/* ── Static data ─────────────────────────────────────────────────────────── */
const STATS = [
  { value: "500+",  label: "Students Worldwide"  },
  { value: "10+",   label: "Years Teaching"       },
  { value: "20+",   label: "Countries Reached"    },
  { value: "5.0 ★", label: "Average Rating"       },
  { value: "4",     label: "Courses Offered"       },
  { value: "3",     label: "Free Trial Classes"    },
];

const COURSES = [
  {
    slug:    "quran-nazra",
    icon:    "📖",
    title:   "Quran Nazra",
    subtitle:"Correct Reading with Tajweed",
    color:   "gradient-card-green",
    badge:   "Most Popular",
    audience:"Ages 5+ · All levels",
    outcomes: ["Proper pronunciation (Makharij)", "Full Tajweed rules", "Read with confidence", "Fluent recitation"],
    price:   "£25/session",
  },
  {
    slug:    "quran-hafiz",
    icon:    "🌟",
    title:   "Quran Hafiz",
    subtitle:"Full Memorisation Programme",
    color:   "gradient-card-gold",
    badge:   "Premium",
    audience:"Ages 7+ · Intermediate",
    outcomes: ["Structured Hifz plan", "Daily revision system", "Ijazah path", "Progress tracking"],
    price:   "£30/session",
  },
  {
    slug:    "arabic-language",
    icon:    "✏️",
    title:   "Arabic Language",
    subtitle:"Grammar, Vocabulary & Reading",
    color:   "gradient-card-teal",
    badge:   "New Intake",
    audience:"Ages 8+ · Beginners welcome",
    outcomes: ["Classical Arabic grammar", "Quran vocabulary", "Reading comprehension", "Written Arabic"],
    price:   "£25/session",
  },
  {
    slug:    "arabic-speaking",
    icon:    "🗣️",
    title:   "Arabic Speaking",
    subtitle:"Conversational Arabic",
    color:   "gradient-card-navy",
    badge:   "Trending",
    audience:"Ages 10+ · All levels",
    outcomes: ["Everyday conversation", "Modern Standard Arabic", "Listening skills", "Confidence to speak"],
    price:   "£25/session",
  },
];

const FEATURES = [
  { icon: "👩‍🏫", title: "Female Teacher",          body: "Hafiza Sania is a female scholar — perfect for sisters, mothers, and children." },
  { icon: "🎓", title: "MPhil Certified",            body: "16-year academic degree in Islamic & Arabic Studies. Not just a teacher — a scholar." },
  { icon: "📹", title: "Live 1-on-1 Zoom",           body: "Private sessions, no distractions. Full attention for your child or yourself." },
  { icon: "🕐", title: "Flexible Scheduling",        body: "Morning, evening, weekend — sessions around your timezone, not ours." },
  { icon: "👶", title: "Ages 5 to 50",               body: "Whether your child is 5 or you are 50 — there is a course designed for you." },
  { icon: "📝", title: "Monthly Progress Reports",   body: "Written reports each month so parents always know their child's progress." },
];

const ACHIEVEMENTS = [
  { icon: "📜", number: "120+", label: "Quran Khatam Completions",    sublabel: "Students who completed full Quran recitation" },
  { icon: "🌟", number: "35+",  label: "Students on Hifz Journey",    sublabel: "Currently memorising Juz by Juz"              },
  { icon: "✅", number: "200+", label: "Certificates Issued",         sublabel: "Official course completion certificates"      },
  { icon: "🌍", number: "20+",  label: "Countries",                   sublabel: "Students from UK, USA, Canada, Australia…"   },
];

const TESTIMONIALS = [
  {
    name:    "Umm Ibrahim",
    country: "🇬🇧 United Kingdom",
    stars:   5,
    course:  "Quran Nazra",
    quote:   "Hafiza Sania has been teaching my daughter for 8 months. Her patience and teaching style are exceptional — my daughter went from struggling with basic letters to reading Surah Al-Baqarah confidently. SubhanAllah!",
  },
  {
    name:    "Sister Amina",
    country: "🇺🇸 United States",
    stars:   5,
    course:  "Arabic Language",
    quote:   "As an adult beginner, I was nervous about starting. Hafiza Sania made every lesson comfortable and encouraging. Her teaching method is structured and I feel genuine progress week by week.",
  },
  {
    name:    "Brother Yusuf",
    country: "🇨🇦 Canada",
    stars:   5,
    course:  "Quran Hafiz",
    quote:   "My son has been working towards Hifz for 18 months. The structured revision system and Ustazah's dedication have been remarkable. We recommend this academy to everyone.",
  },
  {
    name:    "Sister Fatima",
    country: "🇦🇺 Australia",
    stars:   5,
    course:  "Arabic Speaking",
    quote:   "I always wanted to speak Arabic but never had the opportunity. Hafiza Sania's conversational Arabic course is fun, interactive, and actually works. I can now hold basic conversations — Alhumdulillah!",
  },
];

const FAQS = [
  { q: "How do online Quran classes work?",          a: "Sessions are conducted live on Zoom, one-on-one with Hafiza Sania. You book a time slot, receive a Zoom link by email, and learn from the comfort of your home — anywhere in the world." },
  { q: "Are these classes suitable for young children?", a: "Yes — Hafiza Sania specialises in teaching children as young as 5. Sessions are fun, patient, and fully adapted to each child's age and attention span." },
  { q: "Is there a free trial?",                     a: "Yes! Your first 3 classes (or 3 individual sessions) are completely free — no credit card required, no commitment. Book your slot and experience the quality first-hand." },
  { q: "Do you offer classes specifically for sisters?", a: "Absolutely. Hafiza Sania is a female Aalima, making her classes ideal for sisters and mothers who prefer learning in a comfortable, Islamic environment." },
  { q: "What qualifications does Hafiza Sania have?", a: "Hafiza Sania holds an MPhil in Islamic and Arabic Studies — a 16-year degree. She is also a certified Hafiza, meaning she has memorised the complete Quran." },
  { q: "What if my schedule is irregular?",          a: "Scheduling is fully flexible. Sessions can be booked across different time slots each week to fit your timezone and lifestyle." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                          */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="gradient-hero relative overflow-hidden px-4 pb-16 pt-14 text-white sm:pb-20 sm:pt-20">
        {/* Islamic geometric pattern overlay */}
        <div className="pointer-events-none absolute inset-0 pattern-overlay" aria-hidden="true" />
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-mid/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-60 w-60 rounded-full bg-gold-mid/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* ── Left: content ── */}
          <div className="animate-fade-up text-center lg:text-left">
            {/* Bismillah */}
            <p className="arabic mb-2 text-3xl text-gold-shine" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p className="mb-6 text-xs tracking-widest text-brand-faint/70">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-brand-faint backdrop-blur-sm">
              <span className="text-gold-light">★★★★★</span>
              <span>500+ students · 10+ years · 20+ countries</span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn{" "}
              <span className="text-gold-light">Quran</span> &amp; Arabic<br className="hidden sm:block" />
              from a Certified{" "}
              <span className="text-gold-light">Hafiza</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-faint lg:mx-0">
              One-on-one live Zoom sessions with <strong className="text-white">Hafiza Sania</strong> —
              MPhil in Islamic &amp; Arabic Studies. Patient, professional, and trusted by
              families in 20+ countries. <strong className="text-gold-light">First 3 classes FREE.</strong>
            </p>

            {/* Trust chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["✓ No credit card", "✓ Ages 5–50", "✓ Female teacher", "✓ Any timezone"].map(t => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-brand-faint">
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="/book" variant="gold" size="xl">
                🎁 Book 3 Free Classes
              </Button>
              <Button href="/courses" variant="secondary" size="xl">
                View All Courses
              </Button>
            </div>
          </div>

          {/* ── Right: instructor card ── */}
          <div className="animate-fade-up delay-200 flex justify-center">
            <div className="glass w-full max-w-sm rounded-3xl p-6 shadow-2xl">
              {/* Avatar + name */}
              <div className="flex items-center gap-4 border-b border-black/5 pb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-mid text-2xl font-extrabold text-white shadow-lg">
                  HS
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Hafiza Sania</p>
                  <p className="text-xs text-ink-muted">Quran &amp; Arabic Teacher</p>
                  <p className="mt-0.5 flex items-center gap-1">
                    <span className="text-gold-light text-sm">★★★★★</span>
                    <span className="text-xs font-semibold text-ink">5.0</span>
                    <span className="text-xs text-ink-muted">(87 reviews)</span>
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="mt-4 space-y-3">
                {[
                  ["🎓", "MPhil Islamic & Arabic Studies"],
                  ["📜", "Certified Hafiza (Full Quran)"],
                  ["👩‍🏫", "10+ Years Teaching Experience"],
                  ["🌍", "500+ Students Worldwide"],
                  ["🏫", "4 Specialist Courses"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <span className="text-base">{icon}</span>
                    <span className="text-xs font-medium text-ink">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/book"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-mid py-3 text-sm font-semibold text-white shadow transition-all hover:bg-brand hover:shadow-md active:scale-[0.98]"
              >
                Book Your Free Trial →
              </Link>
              <p className="mt-2 text-center text-xs text-ink-muted">
                First 3 classes free · Zoom link sent instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 2. STATS BAR                                                     */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-surface" aria-label="Academy statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="py-6 text-center border-r border-border last:border-r-0 [&:nth-child(3)]:border-r-0 sm:[&:nth-child(3)]:border-r">
                <p className="text-2xl font-extrabold text-brand sm:text-3xl">{value}</p>
                <p className="mt-0.5 text-xs text-ink-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 3. COURSES                                                       */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-2 px-4 py-16 sm:py-20" aria-labelledby="courses-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-brand-faint text-brand">Our Courses</span>
            <h2 id="courses-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Four Specialist Courses — One Expert Teacher
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-muted">
              From learning to read Quran correctly to full memorisation and conversational Arabic —
              every course is taught live, one-on-one, by Hafiza Sania.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map(({ slug, icon, title, subtitle, color, badge, audience, outcomes, price }) => (
              <article
                key={slug}
                className="card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
              >
                {/* Gradient header */}
                <div className={`${color} px-5 pb-5 pt-5 text-white`}>
                  <div className="flex items-start justify-between">
                    <span className="text-3xl" aria-hidden="true">{icon}</span>
                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                      {badge}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{title}</h3>
                  <p className="mt-0.5 text-xs text-white/75">{subtitle}</p>
                  <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px]">
                    👤 {audience}
                  </p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <ul className="flex-1 space-y-1.5">
                    {outcomes.map(o => (
                      <li key={o} className="flex items-start gap-2 text-xs text-ink-muted">
                        <span className="mt-0.5 text-brand-mid font-bold">✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <p className="text-sm font-bold text-ink">{price}</p>
                    <Link
                      href={`/courses/${slug}`}
                      className="rounded-lg bg-brand-faint px-3 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand-mid hover:text-white"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/book" variant="gold" size="lg">
              🎁 Start with 3 Free Classes
            </Button>
            <p className="mt-2 text-xs text-ink-muted">No credit card · No commitment · All courses included</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 4. ABOUT HAFIZA SANIA (teaser)                                  */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface px-4 py-16 sm:py-20" aria-labelledby="tutor-heading">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Credential card */}
            <div className="relative rounded-3xl bg-brand p-8 text-white pattern-overlay overflow-hidden">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-mid/30 blur-2xl" aria-hidden="true" />
              <div className="relative">
                {/* Avatar */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-mid text-3xl font-extrabold text-white shadow-lg">
                  HS
                </div>
                <h3 className="mt-4 text-2xl font-bold">Hafiza Sania</h3>
                <p className="text-sm text-brand-faint">Founder &amp; Lead Teacher — Quran Academy</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: "🎓", label: "MPhil", sub: "Islamic & Arabic Studies" },
                    { icon: "📜", label: "Hafiza", sub: "Full Quran Memorised" },
                    { icon: "👩‍🏫", label: "10+ Years", sub: "Teaching Experience" },
                    { icon: "🌍", label: "500+", sub: "Students Taught" },
                  ].map(({ icon, label, sub }) => (
                    <div key={label} className="rounded-xl bg-white/10 p-3">
                      <p className="text-lg">{icon}</p>
                      <p className="mt-1 text-sm font-bold">{label}</p>
                      <p className="text-xs text-brand-faint">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-white/10 px-4 py-3 text-center">
                  <p className="arabic text-xl text-gold-light" dir="rtl">
                    خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                  </p>
                  <p className="mt-1 text-xs italic text-brand-faint">
                    &ldquo;The best of you are those who learn the Quran and teach it.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <span className="section-chip bg-brand-faint text-brand">Meet Your Teacher</span>
              <h2 id="tutor-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                A Scholar Who Loves to Teach
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted">
                <p>
                  Hafiza Sania completed her full Quran memorisation at an early age and went
                  on to earn an <strong className="text-ink">MPhil in Islamic and Arabic Studies</strong> — a
                  16-year academic journey that combined traditional Islamic scholarship with
                  modern linguistic expertise.
                </p>
                <p>
                  Over the past decade, she has taught <strong className="text-ink">500+ students</strong> from
                  the UK, USA, Canada, Australia, and Pakistan — children as young as 5 and
                  adults up to 50. Her teaching is warm, structured, and deeply effective.
                </p>
                <p>
                  As a <strong className="text-ink">female teacher</strong>, Hafiza Sania creates a safe,
                  comfortable learning environment — particularly valued by sisters, mothers,
                  and parents of young girls.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Quran Nazra", "Quran Hafiz", "Arabic Language", "Arabic Speaking"].map(c => (
                  <span key={c} className="badge-green">{c}</span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <Button href="/about" variant="primary" size="md">Read Full Bio</Button>
                <Button href="/book" variant="gold" size="md">Book Free Trial</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 5. WHY CHOOSE US                                                 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-warm pattern-overlay-gold px-4 py-16 sm:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-gold-faint text-gold">Why Choose Us</span>
            <h2 id="why-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Why Families Trust Hafiza Sania
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-muted">
              Thousands of families have started here. Here is what makes us different.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon, title, body }) => (
              <div
                key={title}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-faint text-2xl shadow-sm">
                  {icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 6. STUDENT ACHIEVEMENTS (trust builder)                          */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand px-4 py-16 sm:py-20 pattern-overlay relative overflow-hidden" aria-labelledby="achievements-heading">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/0 to-black/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="section-chip border border-white/20 bg-white/10 text-white">Alhumdulillah</span>
            <h2 id="achievements-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Our Students&apos; Achievements
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-faint">
              Real milestones from real students — the results speak for themselves.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map(({ icon, number, label, sublabel }) => (
              <div
                key={label}
                className="card-hover glass rounded-2xl p-6 text-center"
              >
                <div className="text-4xl" aria-hidden="true">{icon}</div>
                <p className="mt-3 text-3xl font-extrabold text-brand">{number}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{label}</p>
                <p className="mt-1 text-xs text-ink-muted">{sublabel}</p>
              </div>
            ))}
          </div>

          {/* Quran verse */}
          <div className="mt-10 text-center">
            <p className="arabic text-2xl text-gold-light" dir="rtl">
              وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
            </p>
            <p className="mt-2 text-xs italic text-brand-faint">
              &ldquo;And whoever fears Allah — He will make for him a way out.&rdquo; — At-Talaq 65:2
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 7. HOW IT WORKS                                                  */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface px-4 py-16 sm:py-20" aria-labelledby="how-heading">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-brand-faint text-brand">Simple Process</span>
            <h2 id="how-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Start Learning in 3 Easy Steps
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step:"01", icon:"🗒️", title:"Fill the Form", body:"Tell us your name, email, and which course interests you. Takes under 60 seconds." },
              { step:"02", icon:"📅", title:"Get Confirmation", body:"Hafiza Sania will contact you within 2 hours to confirm your free trial time slot." },
              { step:"03", icon:"📹", title:"Join Your First Class", body:"Receive a Zoom link by email. Open it, and your Islamic education journey begins." },
            ].map(({ step, icon, title, body }) => (
              <div key={step} className="text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
                  <span className="text-2xl" aria-hidden="true">{icon}</span>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-mid text-xs font-bold text-white">
                    {step.replace("0","")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/book" variant="gold" size="lg">Start My Free Trial Now →</Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 8. TESTIMONIALS                                                  */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-2 px-4 py-16 sm:py-20" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-brand-faint text-brand">Student Reviews</span>
            <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-ink-muted">
              Real words from real families — 87 reviews, 5.0 average rating.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map(({ name, country, stars, course, quote }) => (
              <blockquote
                key={name}
                className="card-hover flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                {/* Stars */}
                <p className="text-gold-light text-lg">{"★".repeat(stars)}</p>
                {/* Course badge */}
                <span className="mt-2 self-start badge-green">{course}</span>
                {/* Quote */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">
                  &ldquo;{quote}&rdquo;
                </p>
                {/* Author */}
                <footer className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-xs text-ink-muted">{country}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 9. FAQ                                                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface px-4 py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="section-chip bg-brand-faint text-brand">Common Questions</span>
            <h2 id="faq-heading" className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-border bg-surface p-0 open:border-brand-mid open:shadow-sm transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink marker:content-none hover:text-brand">
                  {q}
                  <svg
                    className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180 group-open:text-brand"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-ink-muted">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 10. CONTACT / ENROLMENT FORM                                     */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-2 px-4 py-16 sm:py-20" aria-labelledby="enrol-heading">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left: persuasion copy */}
            <div className="flex flex-col justify-center">
              <span className="section-chip bg-gold-faint text-gold">Limited Spots</span>
              <h2 id="enrol-heading" className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
                Reserve Your Child&apos;s<br />
                <span className="text-brand-mid">3 Free Trial Classes</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Take the first step today. Fill in the form and Hafiza Sania will personally
                reach out within 2 hours to confirm your slot.
              </p>

              {/* Mini testimonial */}
              <blockquote className="mt-6 rounded-2xl border border-border bg-surface p-5">
                <p className="text-gold-light text-xl">★★★★★</p>
                <p className="mt-2 text-sm italic text-ink">
                  &ldquo;The best decision for our family. Our son started with the free trial and
                  never looked back. Alhumdulillah!&rdquo;
                </p>
                <footer className="mt-3 text-xs text-ink-muted">— Umm Bilal, 🇬🇧 UK</footer>
              </blockquote>

              {/* What you get */}
              <ul className="mt-6 space-y-3">
                {[
                  "3 full 60-minute classes — completely free",
                  "Personal attention from Hafiza Sania",
                  "Honest feedback on student level",
                  "Zero pressure to continue",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-faint text-brand text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: the form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* 11. FINAL CTA                                                    */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="gradient-hero relative overflow-hidden px-4 py-16 text-white pattern-overlay">
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="arabic mb-3 text-2xl text-gold-light" dir="rtl">
            وَقُلْ رَبِّ زِدْنِي عِلْمًا
          </p>
          <p className="text-xs italic text-brand-faint">
            &ldquo;And say: My Lord, increase me in knowledge.&rdquo; — Ta-Ha 20:114
          </p>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Your Journey Starts with<br />
            <span className="text-gold-light">One Free Class</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-faint">
            Join 500+ students worldwide who began exactly this way. No credit card.
            No commitment. Just genuine Islamic education.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book" variant="gold" size="xl">
              🎁 Start My 3 Free Classes
            </Button>
            <Button href="/courses" variant="secondary" size="xl">
              Browse All Courses
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-brand-faint">
            <span>✓ No credit card required</span>
            <span>✓ Instant Zoom link by email</span>
            <span>✓ All ages and levels welcome</span>
          </div>
        </div>
      </section>
    </>
  );
}
