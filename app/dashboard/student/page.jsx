// app/dashboard/student/page.jsx
// TODO (Phase 3): Add auth guard — redirect to /login if no session
// TODO: Replace MOCK_STUDENT with real DB fetch: connectDB() → User.findById(session.user.id).populate(...)

export const metadata = {
  title: "My Dashboard",
  description: "View your enrolled courses, upcoming Zoom sessions, and learning progress.",
};

/* ── Mock data ───────────────────────────────────────────────────────────── */
const STUDENT = {
  name: "Ahmed",
  stats: {
    coursesEnrolled:   2,
    sessionsCompleted: 22,
    upcomingSessions:  3,
    streakDays:        5,
  },
  enrolledCourses: [
    {
      id:                "quran-nazra",
      title:             "Quran Nazra",
      category:          "quran",
      level:             "Intermediate",
      progress:          45,
      currentLesson:     "Surah Al-Baqarah – Juz 2",
      completedSessions: 18,
      totalSessions:     40,
      paymentStatus:     "active",
      color:             "green",
    },
    {
      id:                "arabic-language",
      title:             "Arabic Language",
      category:          "arabic",
      level:             "Beginner",
      progress:          20,
      currentLesson:     "Lesson 4 – Nouns & Pronouns",
      completedSessions: 5,
      totalSessions:     24,
      paymentStatus:     "active",
      color:             "gold",
    },
  ],
  upcomingSessions: [
    {
      id:            "s1",
      course:        "Quran Nazra",
      date:          "Mon, 3 Mar 2026",
      time:          "10:00 AM",
      timezone:      "PKT",
      durationMins:  60,
      zoomLink:      "https://zoom.us/j/00000000000",
      tutorName:     "Hafiza Sania",
      sessionNumber: 19,
      isNext:        true,
    },
    {
      id:            "s2",
      course:        "Arabic Language",
      date:          "Wed, 5 Mar 2026",
      time:          "2:00 PM",
      timezone:      "PKT",
      durationMins:  60,
      zoomLink:      "https://zoom.us/j/11111111111",
      tutorName:     "Hafiza Sania",
      sessionNumber: 6,
      isNext:        false,
    },
    {
      id:            "s3",
      course:        "Quran Nazra",
      date:          "Mon, 10 Mar 2026",
      time:          "10:00 AM",
      timezone:      "PKT",
      durationMins:  60,
      zoomLink:      "https://zoom.us/j/00000000000",
      tutorName:     "Hafiza Sania",
      sessionNumber: 20,
      isNext:        false,
    },
  ],
};

/* ── Sub-components ──────────────────────────────────────────────────────── */
function StatCard({ label, value, sublabel, accent = "green" }) {
  const accent_cls =
    accent === "gold" ? "border-l-4 border-gold-mid" : "border-l-4 border-brand-mid";
  return (
    <div className={`rounded-2xl border border-border bg-surface p-5 ${accent_cls}`}>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{label}</p>
      <p className="mt-1 text-3xl font-bold text-ink">{value}</p>
      {sublabel && <p className="mt-0.5 text-xs text-ink-muted">{sublabel}</p>}
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div
      className="mt-3 h-2 w-full overflow-hidden rounded-full bg-brand-faint"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${value}% complete`}
    >
      <div className="h-full rounded-full bg-brand-mid" style={{ width: `${value}%` }} />
    </div>
  );
}

function CourseCard({ course }) {
  const gold = course.color === "gold";
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${gold ? "bg-gold-faint text-gold" : "bg-brand-faint text-brand"}`}>
            {course.category === "quran" ? "Quran" : "Arabic"}
          </span>
          <h3 className="text-lg font-semibold text-ink">{course.title}</h3>
          <p className="text-xs text-ink-muted">{course.level}</p>
        </div>
        <span className={`rounded-xl px-3 py-1 text-sm font-bold ${gold ? "bg-gold-faint text-gold" : "bg-brand-faint text-brand"}`}>
          {course.progress}%
        </span>
      </div>

      <ProgressBar value={course.progress} />

      <div className="mt-4 space-y-1">
        <p className="text-xs text-ink-muted">Current lesson</p>
        <p className="text-sm font-medium text-ink">{course.currentLesson}</p>
      </div>

      <p className="mt-2 text-xs text-ink-muted">
        {course.completedSessions} of {course.totalSessions} sessions completed
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${course.paymentStatus === "active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
          {course.paymentStatus === "active" ? "Active" : "Paused"}
        </span>
        <a href={`/courses/${course.id}`} className="text-xs font-medium text-brand-mid hover:underline">
          View curriculum →
        </a>
      </div>
    </div>
  );
}

function SessionRow({ session }) {
  const highlighted = session.isNext;
  const [mo, day] = (session.date.split(",")[1]?.trim() ?? "").split(" ");
  return (
    <div className={`flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between ${highlighted ? "border-brand-mid bg-brand-faint" : "border-border bg-surface"}`}>
      <div className="flex items-start gap-3">
        {/* Date blob */}
        <div className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl text-center leading-tight ${highlighted ? "bg-brand text-white" : "bg-surface-2 text-ink"}`}>
          <span className="text-xs font-semibold">{day}</span>
          <span className="text-xs">{mo}</span>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-ink">{session.course}</p>
            {highlighted && (
              <span className="rounded-full bg-brand-mid px-2 py-0.5 text-xs font-medium text-white">
                Next class
              </span>
            )}
          </div>
          <p className="text-xs text-ink-muted">
            {session.time} {session.timezone} &middot; {session.durationMins} min &middot;{" "}
            {session.tutorName} &middot; Session #{session.sessionNumber}
          </p>
        </div>
      </div>

      <a
        href={session.zoomLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${highlighted ? "bg-brand-mid text-white hover:bg-brand" : "border border-border bg-surface text-ink-muted hover:bg-surface-2"}`}
      >
        {/* Video camera icon */}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55-2.27A1 1 0 0121 8.68v6.64a1 1 0 01-1.45.9L15 14M4 8h11a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z"/>
        </svg>
        {highlighted ? "Join Class" : "Join Zoom"}
      </a>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function StudentDashboard() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric",
  });

  return (
    <div className="space-y-8 max-w-4xl">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-ink">
          Welcome back, {STUDENT.name}! 👋
        </h1>
        <p className="mt-1 text-sm text-ink-muted">{today}</p>
      </div>

      {/* Stats */}
      <section aria-label="Learning statistics">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Courses Enrolled"   value={STUDENT.stats.coursesEnrolled}   sublabel="2 active" />
          <StatCard label="Sessions Completed" value={STUDENT.stats.sessionsCompleted} sublabel="all time" />
          <StatCard label="Upcoming Sessions"  value={STUDENT.stats.upcomingSessions}  sublabel="next 30 days" accent="gold" />
          <StatCard label="Day Streak"         value={`${STUDENT.stats.streakDays} 🔥`} sublabel="keep it up!"  accent="gold" />
        </div>
      </section>

      {/* Enrolled courses */}
      <section aria-labelledby="courses-heading">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="courses-heading" className="text-lg font-semibold text-ink">My Courses</h2>
          <a href="/courses" className="text-sm font-medium text-brand-mid hover:underline">
            Browse more →
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {STUDENT.enrolledCourses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>

      {/* Upcoming sessions */}
      <section aria-labelledby="sessions-heading">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="sessions-heading" className="text-lg font-semibold text-ink">
            Upcoming Sessions
          </h2>
          <span className="text-xs text-ink-muted">Times in PKT</span>
        </div>
        <div className="space-y-3">
          {STUDENT.upcomingSessions.map((s) => <SessionRow key={s.id} session={s} />)}
        </div>
      </section>

      {/* Quranic reminder */}
      <div className="rounded-2xl border border-brand-faint bg-brand-faint px-6 py-5 text-center">
        <p className="arabic text-2xl text-brand">وَقُلْ رَبِّ زِدْنِي عِلْمًا</p>
        <p className="mt-2 text-xs italic text-ink-muted">
          &ldquo;My Lord, increase me in knowledge.&rdquo; — Quran 20:114
        </p>
      </div>

    </div>
  );
}
