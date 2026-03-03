import CalEmbed from "@/components/ui/CalEmbed";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Book a Free Trial Lesson | Hafiza Sania — Quran & Arabic",
  description:
    "Book your 3 free trial classes with Hafiza Sania — MPhil, Certified Hafiza, 10+ years experience. Pick a time in your local timezone. No credit card, no commitment.",
  keywords: [
    "free Quran trial", "book Quran lesson online", "free Arabic lesson",
    "try Quran classes", "book female Islamic tutor", "free Quran session",
    "Hafiza Sania free trial",
  ],
  openGraph: {
    title: "Book 3 Free Trial Classes | Hafiza Sania",
    description:
      "Book 3 free trial classes with a certified Hafiza and MPhil Islamic scholar. No credit card required.",
    type: "website",
  },
};

/* ── Static content ───────────────────────────────────────────────────────── */
const WHAT_HAPPENS = [
  {
    icon: "🎯",
    text: "Hafiza Sania assesses your current level — comfortable, conversational, no pressure.",
  },
  {
    icon: "📚",
    text: "You see exactly how the course works and what the weekly structure feels like.",
  },
  {
    icon: "👩‍🏫",
    text: "You meet Hafiza Sania and can ask any question about the course or her teaching style.",
  },
  {
    icon: "📅",
    text: "If you'd like to continue, we set your recurring weekly schedule together.",
  },
];

const TRUST_ITEMS = [
  {
    icon: "✅",
    title: "Completely Free",
    body: "No credit card, no deposit. The first 3 trial classes are a gift — zero obligation.",
  },
  {
    icon: "⏱",
    title: "Live & 1-on-1",
    body: "A private Zoom session with Hafiza Sania — not a group class, not a sales call.",
  },
  {
    icon: "📩",
    title: "Instant Confirmation",
    body: "A Zoom link arrives in your inbox the moment you complete booking.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function BookPage() {
  const rawLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "hafiza-sania/free-trial";
  // Cal embed expects a path like "username/event", not a full URL
  const calLink = rawLink.replace(/^https?:\/\/cal\.com\//, "");

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="gradient-hero pattern-overlay relative overflow-hidden px-4 pb-14 pt-14 text-white">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-brand-mid/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-brand-mid/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="arabic mb-2 text-2xl text-gold-light" dir="rtl">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </p>
          <p className="mb-7 text-xs tracking-widest text-brand-faint/70">
            &ldquo;Read in the name of your Lord who created.&rdquo; — Al-Alaq 96:1
          </p>

          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-faint">
            3 Free Classes
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Book Your{" "}
            <span className="text-gold-light">Free Trial Classes</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-brand-faint">
            Pick a date and time below. Your first 3 classes with{" "}
            <strong className="text-white">Hafiza Sania</strong> are completely
            free — no credit card, no commitment.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm text-brand-faint">
            <span className="text-gold-light">★★★★★</span>
            <span className="font-semibold text-white">5.0</span>
            <span>· Trusted by 500+ students in 20+ countries</span>
          </div>

          {/* Tutor badge */}
          <div className="mx-auto mt-6 flex max-w-xs items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left backdrop-blur-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-mid text-sm font-extrabold text-white">
              HS
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Hafiza Sania</p>
              <p className="text-xs text-brand-faint">MPhil · Certified Hafiza · 10+ yrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calendar section ──────────────────────────────────────────────── */}
      <section
        className="bg-surface-2 px-4 py-14"
        aria-labelledby="book-section-heading"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="book-section-heading" className="sr-only">
            Book your free trial
          </h2>

          {/* What happens */}
          <div className="mb-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="mb-5 text-lg font-bold text-ink">
              What Happens in Your Free Trial?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {WHAT_HAPPENS.map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xl leading-none">{icon}</span>
                  <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section label */}
          <div className="mb-4 text-center">
            <span className="rounded-full bg-brand-faint px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
              Choose Your Time
            </span>
            <p className="mt-2 text-xs text-ink-muted">
              Times shown in your local timezone · Sessions run on Zoom
            </p>
          </div>

          {/* Cal.com embed */}
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <CalEmbed calLink={calLink} />
          </div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────────────────────── */}
      <section className="bg-surface px-4 py-14" aria-label="Booking assurances">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-ink">No Surprises. No Pressure.</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
              The trial exists for you to experience the teaching — nothing more.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {TRUST_ITEMS.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl border border-border bg-surface-2 p-7 text-center"
              >
                <span className="mb-3 text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="mb-1.5 text-sm font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-ink-muted">
            Questions before booking?{" "}
            <a
              href="mailto:saniaqueen1212@gmail.com"
              className="font-medium text-brand hover:underline"
            >
              Email Hafiza Sania
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/923366375012"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              WhatsApp +92 336 6375012
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
