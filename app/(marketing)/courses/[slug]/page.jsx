import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";

/* ── Course data ──────────────────────────────────────────────────────────── */
const COURSE_DATA = {
  "quran-nazra": {
    slug:             "quran-nazra",
    label:            "Foundation",
    color:            "green",
    gradient:         "gradient-card-green",
    title:            "Quran Nazra",
    subtitle:         "From the Arabic alphabet to fluent Quranic recitation",
    summary:
      "A comprehensive, structured programme that takes you from the very first Alif to reading entire Surahs with correct Tajweed — at your own pace, in private one-on-one Zoom sessions.",
    level:            "Beginner → Intermediate",
    duration:         "Ongoing",
    totalSessions:    40,
    sessionMins:      45,
    studentsEnrolled: 200,
    rating:           5.0,
    reviewCount:      87,
    pricePerSession:  15,
    verse:     { ar: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", en: "And recite the Quran with measured recitation. — Al-Muzzammil 73:4" },
    prerequisites:    "None — complete beginners are welcome. Children from age 5.",
    audience:
      "Complete beginners, children (age 5+), adult learners, and students who can already read but want to correct their Tajweed.",
    learningOutcomes: [
      "Recognise and correctly pronounce all Arabic letters",
      "Apply all 17 Tajweed rules in recitation",
      "Read Noorani Qaida from start to finish",
      "Recite short Surahs (Juz Amma) fluently",
      "Understand letter-joining rules",
      "Read independently from the Mus-haf",
    ],
    curriculum: [
      {
        title:   "Module 1 — Arabic Alphabet",
        lessons: [
          "Huroof Hijaiyya (all 28 letters)",
          "Makhaarij al-Huroof (articulation points)",
          "Short vowels: Fatha, Kasra, Damma",
          "Long vowels (Madd): Alif, Waw, Ya",
          "Tanween and Sukoon",
        ],
      },
      {
        title:   "Module 2 — Noorani Qaida",
        lessons: [
          "Joining letters — two-letter combinations",
          "Three and four-letter words",
          "Word formation and reading practice",
          "Common Quranic word patterns",
        ],
      },
      {
        title:   "Module 3 — Tajweed Rules",
        lessons: [
          "Noon Saakinah: Izhaar, Idghaam, Iqlaab, Ikhfa",
          "Meem Saakinah rules",
          "Rules of Madd (lengthening)",
          "Qalqalah (echoing letters)",
          "Tafkheem and Tarqeeq (heavy and light letters)",
          "Waqf — pausing rules",
        ],
      },
      {
        title:   "Module 4 — Quran Reading",
        lessons: [
          "Short Surahs of Juz Amma (30th Juz)",
          "Building reading fluency and rhythm",
          "Continuous recitation assessment",
          "Progress through remaining Juz (student-paced)",
        ],
      },
    ],
    related: [
      { slug: "quran-hafiz",    title: "Quran Hafiz"    },
      { slug: "arabic-language", title: "Arabic Language" },
    ],
  },

  "quran-hafiz": {
    slug:             "quran-hafiz",
    label:            "Memorisation",
    color:            "gold",
    gradient:         "gradient-card-gold",
    title:            "Quran Hafiz",
    subtitle:         "Memorise the complete Quran, Juz by Juz",
    summary:
      "A dedicated Hifz programme built around your pace. Hafiza Sania structures a personalised memorisation plan with a rigorous daily revision system to ensure lasting retention.",
    level:            "Intermediate — fluent readers",
    duration:         "Ongoing",
    totalSessions:    80,
    sessionMins:      60,
    studentsEnrolled: 45,
    rating:           5.0,
    reviewCount:      31,
    pricePerSession:  20,
    verse:     { ar: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", en: "Indeed, it is We who sent down the Quran and indeed, We will be its guardian. — Al-Hijr 15:9" },
    prerequisites:    "Must be able to recite the Quran fluently with basic Tajweed. Complete Quran Nazra first if needed.",
    audience:
      "Children (age 7+) and adults who read the Quran fluently and are ready to begin the sacred journey of memorisation.",
    learningOutcomes: [
      "Memorise the complete Quran (30 Juz)",
      "Master a structured daily Sabaq + Sabaqi + Manzil revision system",
      "Recite from memory with correct Tajweed and Makharij",
      "Build retention that lasts for years, not weeks",
      "Earn a certificate of Hifz completion",
      "Receive ongoing revision support after completion",
    ],
    curriculum: [
      {
        title:   "Phase 1 — Foundation Juz",
        lessons: [
          "Juz Amma (30th Juz) — short Surahs revision",
          "Juz Tabarak (29th Juz)",
          "Establishing the Sabaq / Sabaqi / Manzil system",
          "Daily revision targets set per student ability",
        ],
      },
      {
        title:   "Phase 2 — Building Momentum",
        lessons: [
          "Working through Juz 1–10 systematically",
          "Weekly assessment of memorised portion",
          "Addressing common retention mistakes",
          "Increasing daily Sabaq as confidence grows",
        ],
      },
      {
        title:   "Phase 3 — The Middle Juz",
        lessons: [
          "Juz 11–20 with intensive Sabaqi revision",
          "Monthly Manzil (full review) sessions",
          "Strengthening weaker portions",
          "Maintaining previously memorised Juz",
        ],
      },
      {
        title:   "Phase 4 — Completion & Consolidation",
        lessons: [
          "Juz 21–29 completion",
          "Full Quran review — Khatam assessment",
          "Certificate of Hifz issued",
          "Post-Hifz revision plan for life",
        ],
      },
    ],
    related: [
      { slug: "quran-nazra",    title: "Quran Nazra"    },
      { slug: "arabic-language", title: "Arabic Language" },
    ],
  },

  "arabic-language": {
    slug:             "arabic-language",
    label:            "Language",
    color:            "teal",
    gradient:         "gradient-card-teal",
    title:            "Arabic Language",
    subtitle:         "Understand the Quran and Islamic texts in their original language",
    summary:
      "Learn Modern Standard Arabic and Quranic Arabic through structured grammar, vocabulary building, and reading comprehension — so you can engage with the Quran far beyond just recitation.",
    level:            "All Levels",
    duration:         "Ongoing",
    totalSessions:    24,
    sessionMins:      45,
    studentsEnrolled: 120,
    rating:           5.0,
    reviewCount:      54,
    pricePerSession:  18,
    verse:     { ar: "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا", en: "Indeed, We have sent it down as an Arabic Quran. — Yusuf 12:2" },
    prerequisites:    "Basic Arabic alphabet knowledge is helpful but not required.",
    audience:
      "Beginners with no prior Arabic, students wanting Quran comprehension, any age with a desire to understand Islamic texts.",
    learningOutcomes: [
      "Read and write Arabic script confidently",
      "Understand Arabic sentence structure",
      "Apply Nahw (syntax) and Sarf (morphology) foundations",
      "Build a 500+ word core vocabulary",
      "Translate simple Quranic verses directly",
      "Read short Islamic passages with comprehension",
    ],
    curriculum: [
      {
        title:   "Module 1 — Foundation",
        lessons: [
          "Arabic alphabet reading and writing",
          "Short and long vowels",
          "Common Arabic words and phrases",
          "Masculine and feminine nouns",
        ],
      },
      {
        title:   "Module 2 — Grammar Essentials (Nahw)",
        lessons: [
          "Nominal sentences (Jumlah Ismiyyah)",
          "Verbal sentences (Jumlah Filiyyah)",
          "Definite and indefinite articles",
          "Case endings (Iraab) — Raf, Nasb, Jarr",
          "Prepositions and pronouns",
        ],
      },
      {
        title:   "Module 3 — Word Morphology (Sarf)",
        lessons: [
          "Arabic root system (3-letter roots)",
          "Common verb patterns (Maadhi and Mudaari)",
          "Derived nouns and adjectives",
          "Practice with Quranic vocabulary",
        ],
      },
      {
        title:   "Module 4 — Quranic Arabic",
        lessons: [
          "Vocabulary of Juz Amma",
          "Translating short verses with grammar analysis",
          "Reading Islamic dua texts",
          "Structured revision and assessment",
        ],
      },
    ],
    related: [
      { slug: "arabic-speaking", title: "Arabic Speaking" },
      { slug: "quran-nazra",     title: "Quran Nazra"     },
    ],
  },

  "arabic-speaking": {
    slug:             "arabic-speaking",
    label:            "Conversational",
    color:            "navy",
    gradient:         "gradient-card-navy",
    title:            "Arabic Speaking",
    subtitle:         "Speak Arabic confidently in real conversation",
    summary:
      "A conversational Arabic programme focused on building the vocabulary, pronunciation, and confidence to speak Arabic in everyday life — including Islamic phrases and expressions.",
    level:            "Beginner → Intermediate",
    duration:         "Ongoing",
    totalSessions:    20,
    sessionMins:      45,
    studentsEnrolled: 60,
    rating:           5.0,
    reviewCount:      28,
    pricePerSession:  18,
    verse:     { ar: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ", en: "And of His signs is the creation of the heavens and earth and the diversity of your languages. — Ar-Rum 30:22" },
    prerequisites:    "Basic Arabic alphabet reading is preferred. Arabic Language course recommended first.",
    audience:
      "Students who want to speak Arabic in daily life, Islamic settings, or with family. Ages 12 and above.",
    learningOutcomes: [
      "Hold basic Arabic conversations confidently",
      "Learn 300+ conversational vocabulary words",
      "Use Islamic phrases naturally (greetings, du'a, expressions)",
      "Understand spoken Arabic in Islamic content",
      "Build pronunciation and fluency through practice",
      "Gain confidence to converse with native speakers",
    ],
    curriculum: [
      {
        title:   "Module 1 — Essential Phrases",
        lessons: [
          "Greetings, introductions, and daily phrases",
          "Islamic expressions in everyday speech",
          "Numbers, time, and basic questions",
          "Pronunciation and speaking drills",
        ],
      },
      {
        title:   "Module 2 — Everyday Conversations",
        lessons: [
          "Family, home, and routines",
          "Food, shopping, and directions",
          "Describing people and places",
          "Question forms and responses",
        ],
      },
      {
        title:   "Module 3 — Vocabulary Building",
        lessons: [
          "Islamic vocabulary (masjid, salah, fasting, Hajj)",
          "Emotions, opinions, and preferences",
          "Expanding vocabulary through topics",
          "Listening and response exercises",
        ],
      },
      {
        title:   "Module 4 — Fluency Practice",
        lessons: [
          "Open conversation sessions",
          "Role-play: real-life Islamic scenarios",
          "Correcting common speaking mistakes",
          "Final fluency assessment",
        ],
      },
    ],
    related: [
      { slug: "arabic-language", title: "Arabic Language" },
      { slug: "quran-nazra",     title: "Quran Nazra"     },
    ],
  },
};

/* ── Static paths ─────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(COURSE_DATA).map((slug) => ({ slug }));
}

/* ── Dynamic SEO metadata ─────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const {slug} = await params;
  const course = COURSE_DATA[slug];
    
  if (!course) return { title: "Course Not Found" };
  return {
    title:       `${course.title} — Online Course | Hafiza Sania`,
    description: course.summary,
    keywords: [
      `${course.title} online`, "learn Quran online", "Arabic tutor online",
      "Hafiza Sania", "online Islamic classes", "live Quran classes one on one",
    ],
    openGraph: {
      title:       `${course.title} | Hafiza Sania`,
      description: course.summary,
      type:        "website",
    },
  };
}

/* ── Check icon ───────────────────────────────────────────────────────────── */
function Check({ className = "h-4 w-4 text-brand-mid" }) {
  return (
    <svg
      className={`mt-0.5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = COURSE_DATA[slug];
  if (!course) notFound();

  const isGold = course.color === "gold";
  const checkColor = isGold ? "text-gold-mid" : "text-brand-mid";

  return (
    <>
      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <nav className="border-b border-border bg-surface px-4 py-3" aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-5xl items-center gap-1.5 text-xs text-ink-muted">
          <li><Link href="/" className="hover:text-brand">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/courses" className="hover:text-brand">Courses</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-ink">{course.title}</li>
        </ol>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-surface-2 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* Left */}
            <div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold bg-brand-faint text-brand`}>
                {course.label}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
                {course.title}
              </h1>
              <p className="mt-1 text-base font-medium text-ink-muted">{course.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{course.summary}</p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <span className="font-semibold text-gold-mid">★★★★★ {course.rating}</span>
                <span className="text-ink-muted">({course.reviewCount} reviews)</span>
                <span className="text-ink-muted">{course.studentsEnrolled}+ students enrolled</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                {[
                  { label: "Sessions",  val: `${course.totalSessions}+`          },
                  { label: "Level",     val: course.level                        },
                  { label: "Length",    val: `${course.sessionMins} min/session` },
                  { label: "Schedule",  val: "Flexible worldwide"                },
                ].map(({ label, val }) => (
                  <span key={label} className="rounded-full border border-border bg-surface px-3 py-1.5">
                    <span className="text-ink-muted">{label}: </span>
                    <span className="font-semibold text-ink">{val}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="rounded-xl border border-border/50 bg-surface-2 p-3 text-center">
                <p className="arabic text-xl text-brand" dir="rtl">{course.verse.ar}</p>
                <p className="mt-1 text-xs italic text-ink-muted">{course.verse.en}</p>
              </div>

              <div className="mt-5">
                <p className="text-xs text-ink-muted">From</p>
                <p className="text-4xl font-extrabold text-ink">
                  ${course.pricePerSession}
                  <span className="text-base font-normal text-ink-muted">/session</span>
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">Live 1-on-1 · Zoom</p>
              </div>

              <Button
                href="/book"
                variant={isGold ? "gold" : "primary"}
                size="lg"
                className="mt-5 w-full justify-center"
              >
                Book Free Trial
              </Button>
              <p className="mt-2 text-center text-xs text-ink-muted">
                First 3 classes free · No credit card
              </p>

              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {[
                  `${course.sessionMins}-min live Zoom sessions`,
                  "Hafiza Sania — MPhil, Certified Hafiza",
                  "Flexible worldwide scheduling",
                  "WhatsApp progress updates",
                  "Course completion certificate",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-ink">
                    <Check className={`h-3.5 w-3.5 ${checkColor}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-4 py-12">

        {/* ── What You'll Learn ─────────────────────────────────────────── */}
        <section aria-labelledby="outcomes-heading">
          <h2 id="outcomes-heading" className="mb-6 text-2xl font-bold text-ink">
            What You&apos;ll Learn
          </h2>
          <div className="grid gap-3 rounded-2xl border border-border bg-surface-2 p-6 sm:grid-cols-2">
            {course.learningOutcomes.map((o) => (
              <div key={o} className="flex items-start gap-2">
                <Check className={`h-4 w-4 ${checkColor}`} />
                <span className="text-sm text-ink">{o}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Who It's For ──────────────────────────────────────────────── */}
        <section aria-labelledby="audience-heading">
          <h2 id="audience-heading" className="mb-3 text-2xl font-bold text-ink">
            Who This Course Is For
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted">{course.audience}</p>
          <p className="mt-2 text-sm text-ink-muted">
            <strong className="text-ink">Prerequisites:</strong> {course.prerequisites}
          </p>
        </section>

        {/* ── Curriculum ────────────────────────────────────────────────── */}
        <section aria-labelledby="curriculum-heading">
          <h2 id="curriculum-heading" className="mb-6 text-2xl font-bold text-ink">
            Course Curriculum
          </h2>
          <div className="space-y-3">
            {course.curriculum.map((mod, i) => (
              <details
                key={mod.title}
                className="group rounded-2xl border border-border bg-surface"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-faint text-xs font-bold text-brand">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-ink">{mod.title}</span>
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="space-y-2 border-t border-border px-6 py-3">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-start gap-2.5 py-1 text-sm text-ink-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/40" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* ── Instructor ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="instructor-heading"
          className="rounded-2xl border border-border bg-surface p-7"
        >
          <h2 id="instructor-heading" className="mb-5 text-2xl font-bold text-ink">
            Your Instructor
          </h2>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand text-2xl font-extrabold text-white shadow">
              HS
            </div>
            <div>
              <p className="text-lg font-bold text-ink">Hafiza Sania</p>
              <p className="text-sm text-ink-muted">Quran &amp; Arabic Teacher</p>
              <ul className="mt-3 space-y-1.5">
                {[
                  "MPhil in Islamic & Arabic Studies (16-year degree)",
                  "Certified Hafiza — full Quran memorised",
                  "10+ years of online teaching experience",
                  "500+ students taught in 20+ countries",
                  "Female Aalima — safe environment for sisters & families",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-ink">
                    <Check className={`h-4 w-4 ${checkColor}`} />
                    {q}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                <Link href="/about" className="text-xs font-medium text-brand hover:underline">
                  Full profile →
                </Link>
                <a
                  href="https://wa.me/923366375012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-brand hover:underline"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="rounded-2xl bg-brand p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Start Your Free Trial Today</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-brand-faint">
            Your first 3 classes are completely free — no credit card, no commitment.
            Experience the teaching before you decide.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book" variant="gold" size="lg">
              🎁 Book 3 Free Classes
            </Button>
            <Link
              href="/courses"
              className="text-sm font-medium text-brand-faint transition-colors hover:text-white"
            >
              Back to All Courses →
            </Link>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs text-brand-faint">
            <span>✓ No credit card</span>
            <span>✓ Ages 5–50</span>
            <span>✓ Female teacher</span>
          </div>
        </section>

        {/* ── Related courses ───────────────────────────────────────────── */}
        {course.related?.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="mb-4 text-xl font-bold text-ink">
              You May Also Like
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {course.related.map(({ slug, title }) => (
                <Link
                  key={slug}
                  href={`/courses/${slug}`}
                  className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
                >
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="text-xs text-ink-muted">
                      Live 1-on-1 · First 3 classes free
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted"
                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  );
}
