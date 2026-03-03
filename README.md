This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



extra: 
hero section: <section className="relative overflow-hidden bg-surface pb-16 pt-14 sm:pb-24 sm:pt-24 lg:pb-32">
  {/* Soft background glow instead of harsh dark gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-faint/50 via-surface to-surface" aria-hidden="true" />
  
  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

    {/* ── Left: Copywriting ── */}
    <div className="animate-fade-up text-center lg:text-left">
      <p className="arabic mb-4 text-2xl text-gold-mid sm:text-3xl" dir="rtl">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </p>
      
      <div className="inline-flex items-center gap-2 rounded-full border border-brand-faint bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand">
        <span className="text-gold-light">★★★★★</span>
        <span>Trusted by 500+ students worldwide</span>
      </div>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
        Master the <span className="text-brand">Quran</span> &amp; Arabic<br className="hidden sm:block" />
        from your home.
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
        Live, one-on-one Zoom sessions with <strong>Hafiza Sania</strong> —
        an MPhil scholar in Islamic Studies. Patient, professional, and tailored to your pace.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
        <Button href="/book" variant="primary" size="xl" className="shadow-xl shadow-brand/20">
          Book 3 Free Classes
        </Button>
        <Button href="/courses" variant="outline" size="xl">
          Explore Courses
        </Button>
      </div>
      <p className="mt-4 text-sm text-ink-muted">✓ No credit card required &nbsp;·&nbsp; ✓ Ages 5 to 50</p>
    </div>

    {/* ── Right: Premium Image Layout ── */}
    <div className="animate-fade-up delay-200 relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Decorative Gold Border Box */}
      <div className="absolute -inset-4 rounded-3xl border-2 border-gold-mid/20 rotate-3 transform transition-transform hover:rotate-0 duration-500"></div>
      
      {/* Main Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
        <Image 
          src="/teacher-image.jpg" /* Replace with an actual high-quality image of the teacher or beautiful Quran aesthetic */
          alt="Hafiza Sania teaching Quran online"
          fill
          className="object-cover"
          priority
        />
        
        {/* Floating Trust Badge */}
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur-md shadow-lg border border-white/50">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
               <Award className="h-6 w-6" /> {/* Lucide Icon */}
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Certified Hafiza</p>
              <p className="text-xs text-ink-muted">MPhil in Islamic Studies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>



<!-- About Hafiza  -->

<section
        className="bg-surface px-4 py-16 sm:py-20"
        aria-labelledby="tutor-heading"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Credential card */}
            <div className="relative rounded-3xl bg-brand p-8 text-white pattern-overlay overflow-hidden">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-mid/30 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                {/* Avatar */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-mid text-3xl font-extrabold text-white shadow-lg">
                  HS
                </div>
                <h3 className="mt-4 text-2xl font-bold">Hafiza Sania</h3>
                <p className="text-sm text-brand-faint">
                  Founder &amp; Lead Teacher — Quran Academy
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: "🎓",
                      label: "MPhil",
                      sub: "Islamic & Arabic Studies",
                    },
                    {
                      icon: "📜",
                      label: "Hafiza",
                      sub: "Full Quran Memorised",
                    },
                    {
                      icon: "👩‍🏫",
                      label: "10+ Years",
                      sub: "Teaching Experience",
                    },
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
                    &ldquo;The best of you are those who learn the Quran and
                    teach it.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <span className="section-chip bg-brand-faint text-brand">
                Meet Your Teacher
              </span>
              <h2
                id="tutor-heading"
                className="mt-3 text-3xl font-bold text-ink sm:text-4xl"
              >
                A Scholar Who Loves to Teach
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted">
                <p>
                  Hafiza Sania completed her full Quran memorisation at an early
                  age and went on to earn an{" "}
                  <strong className="text-ink">
                    MPhil in Islamic and Arabic Studies
                  </strong>{" "}
                  — a 16-year academic journey that combined traditional Islamic
                  scholarship with modern linguistic expertise.
                </p>
                <p>
                  Over the past decade, she has taught{" "}
                  <strong className="text-ink">500+ students</strong> from the
                  UK, USA, Canada, Australia, and Pakistan — children as young
                  as 5 and adults up to 50. Her teaching is warm, structured,
                  and deeply effective.
                </p>
                <p>
                  As a <strong className="text-ink">female teacher</strong>,
                  Hafiza Sania creates a safe, comfortable learning environment
                  — particularly valued by sisters, mothers, and parents of
                  young girls.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Quran Nazra",
                  "Quran Hafiz",
                  "Arabic Language",
                  "Arabic Speaking",
                ].map((c) => (
                  <span key={c} className="badge-green">
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <Button href="/about" variant="primary" size="md">
                  Read Full Bio
                </Button>
                <Button href="/book" variant="gold" size="md">
                  Book Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>