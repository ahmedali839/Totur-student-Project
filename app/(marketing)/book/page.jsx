import CalEmbed from "@/components/ui/CalEmbed";
import Button from "@/components/ui/Button";
import { Target, BookOpen, Users, CalendarDays, ShieldCheck, Video, Zap } from "lucide-react";

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
    icon: <Target className="h-6 w-6 text-brand" />,
    text: "Hafiza Sania assesses your current level — comfortable, conversational, no pressure.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-brand" />,
    text: "You see exactly how the course works and what the weekly structure feels like.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand" />,
    text: "You meet Hafiza Sania and can ask any question about the course or her teaching style.",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-brand" />,
    text: "If you'd like to continue, we set your recurring weekly schedule together.",
  },
];

const TRUST_ITEMS = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-gold-mid" />,
    title: "Completely Free",
    body: "No credit card, no deposit. The first 3 trial classes are a gift — zero obligation.",
  },
  {
    icon: <Video className="h-8 w-8 text-brand-mid" />,
    title: "Live & 1-on-1",
    body: "A private Zoom session with Hafiza Sania — not a group class, not a sales call.",
  },
  {
    icon: <Zap className="h-8 w-8 text-gold-light" />,
    title: "Instant Confirmation",
    body: "A Zoom link arrives in your inbox the moment you complete booking.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function BookPage() {
  const rawLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "hafiza-sania/free-trial";
  const calLink = rawLink.replace(/^https?:\/\/cal\.com\//, "");

  return (
    <div className="bg-surface">
      {/* ── PREMIUM LIGHT HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:pt-32">
        {/* Soft background glows for a premium white layout */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-faint/50 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-gold-faint/50 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
          <p className="arabic mb-4 text-2xl text-gold-mid sm:text-3xl" dir="rtl">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </p>
          <p className="mb-8 text-xs font-medium tracking-widest text-ink-faint uppercase">
            &ldquo;Read in the name of your Lord who created.&rdquo; — Al-Alaq 96:1
          </p>

          <span className="inline-block rounded-full border border-brand/10 bg-brand-faint px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-sm">
            3 Free Classes
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Book Your{" "}
            <span className="text-brand">Free Trial Classes</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Pick a date and time below. Your first 3 classes with{" "}
            <strong className="text-ink">Hafiza Sania</strong> are completely free — no credit card, no commitment.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-ink-muted">
            <span className="text-gold-light text-lg">★★★★★</span>
            <span className="font-bold text-ink">5.0</span>
            <span>· Trusted by 500+ students in 20+ countries</span>
          </div>

          {/* Premium Tutor Badge */}
          <div className="mx-auto mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-border/60 bg-white p-4 text-left shadow-lg shadow-brand/5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-extrabold text-white shadow-inner">
              HS
            </div>
            <div>
              <p className="text-base font-bold text-ink">Hafiza Sania</p>
              <p className="text-xs font-medium text-ink-muted">MPhil · Certified Hafiza · 10+ yrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALENDAR & WHAT HAPPENS SECTION ─────────────────────────────── */}
      <section className="relative z-10 bg-surface-2 px-4 py-16 sm:py-24 border-t border-border/50" aria-labelledby="book-section-heading">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-8 items-start">
          
          <h2 id="book-section-heading" className="sr-only">Book your free trial</h2>

          {/* Left: Cal.com embed */}
          <div className="order-2 lg:order-1 flex flex-col">
            <div className="mb-6 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-ink">Choose Your Time</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Times shown in your local timezone · Sessions run securely on Zoom
              </p>
            </div>
            
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-xl shadow-brand/5 animate-fade-up delay-200">
              <CalEmbed calLink={calLink} />
            </div>
          </div>

          {/* Right: What Happens Context */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-up">
            <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-lg shadow-brand/5">
              <h3 className="mb-6 text-xl font-bold text-ink">
                What Happens in Your Free Trial?
              </h3>
              <div className="space-y-6">
                {WHAT_HAPPENS.map(({ icon, text }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-faint">
                      {icon}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST SIGNALS ─────────────────────────────────────────────────── */}
      <section className="bg-surface px-4 py-16 sm:py-24" aria-label="Booking assurances">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center animate-fade-up">
            <h2 className="text-3xl font-extrabold text-ink">No Surprises. No Pressure.</h2>
            <p className="mx-auto mt-4 max-w-md text-base text-ink-muted">
              The trial exists purely for you to experience the teaching methodology.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {TRUST_ITEMS.map(({ icon, title, body }, idx) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-3xl border border-border/50 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 animate-fade-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-ink-muted">
            Questions before booking?{" "}
            <a href="mailto:saniaqueen1212@gmail.com" className="font-semibold text-brand transition-colors hover:text-brand-mid">
              Email Hafiza Sania
            </a>{" "}
            or{" "}
            <a href="https://wa.me/923366375012" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand transition-colors hover:text-brand-mid">
              WhatsApp +92 336 6375012
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}