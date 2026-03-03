import Link from "next/link";

const COURSES_LINKS = [
  { label: "Quran Nazra",       href: "/courses/quran-nazra"     },
  { label: "Quran Hafiz",       href: "/courses/quran-hafiz"     },
  { label: "Arabic Language",   href: "/courses/arabic-language" },
  { label: "Arabic Speaking",   href: "/courses/arabic-speaking" },
  { label: "Book Free Trial",   href: "/book"                    },
];

const ACADEMY_LINKS = [
  { label: "About Hafiza Sania", href: "/about"             },
  { label: "All Courses",        href: "/courses"           },
  { label: "Book a Session",     href: "/book"              },
  { label: "Student Dashboard",  href: "/dashboard/student" },
];

const LEGAL_LINKS = [];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white">

      {/* ── Top CTA strip ──────────────────────────────────────────────── */}
      <div className="gradient-brand border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-faint">
              Limited spots · This week only
            </p>
            <h2 className="mt-1 text-xl font-bold text-white">
              Start with 3 FREE Trial Classes
            </h2>
          </div>
          <Link
            href="/book"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold-mid px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-gold hover:shadow-lg active:scale-[0.98]"
          >
            🎁 Book Free Trial
          </Link>
        </div>
      </div>

      {/* ── Main Footer ─────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* ── Brand / Tutor Column ────────────────────────────────────── */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="text-gold-mid text-2xl leading-none" aria-hidden="true">☽</span>
              <span>Quran Academy</span>
            </Link>

            {/* Tutor intro */}
            <div className="mt-4 flex items-start gap-3">
              {/* Avatar */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-mid/30 text-lg font-bold text-white">
                HS
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Hafiza Sania</p>
                <p className="text-xs text-white/60 leading-relaxed">
                  MPhil — Islamic &amp; Arabic Studies<br />
                  16-Year Degree · Certified Hafiza
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Online Quran &amp; Arabic education for children and adults worldwide.
              One-on-one live Zoom sessions — patient, professional, and personalised.
            </p>

            {/* Arabic verse */}
            <p className="arabic mt-5 text-xl text-gold-light" dir="rtl">
              اقْرَأْ بِاسْمِ رَبِّكَ
            </p>
            <p className="mt-1 text-xs italic text-white/40">
              &ldquo;Read in the name of your Lord&rdquo; — Al-Alaq 96:1
            </p>

            {/* Contact details */}
            <div className="mt-5 space-y-2 text-sm">
              <a
                href="mailto:saniaqueen1212@gmail.com"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <svg className="h-4 w-4 text-brand-mid shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                saniaqueen1212@gmail.com
              </a>
              <a
                href="https://wa.me/923366375012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <svg className="h-4 w-4 text-brand-mid shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                +92 336 6375012 (WhatsApp)
              </a>
            </div>
          </div>

          {/* ── Courses Column ──────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Courses
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COURSES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Academy Column ──────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Academy
            </h3>
            <ul className="mt-4 space-y-2.5">
              {ACADEMY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Trust Badges Column ─────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Why Choose Us
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                ["🏆", "Certified Hafiza"],
                ["🎓", "MPhil Islamic Studies"],
                ["👩‍👧", "Female Teacher"],
                ["🌍", "20+ Countries"],
                ["⭐", "5.0 Average Rating"],
                ["🎁", "First 3 Classes Free"],
                ["📅", "Flexible Scheduling"],
                ["🔒", "Safe & Private"],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-2 text-xs text-white/60">
                  <span>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {year} Quran Academy by Hafiza Sania. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className="transition-colors hover:text-white/80">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-white/30">
            Built with <span className="text-brand-mid">Next.js</span> &amp;{" "}
            <span className="text-brand-mid">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
