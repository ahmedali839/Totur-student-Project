"use client";

// app/dashboard/admin/page.jsx
// TODO (Phase 3): Protect — redirect to /login unless session.user.role === "admin"
// TODO: Replace mock data with real DB queries via connectDB()

import { useState } from "react";

/* ── Mock data ───────────────────────────────────────────────────────────── */
const STATS = {
  totalStudents:    24,
  sessionsWeek:     18,
  revenueMonth:     1200,   // USD
  pendingApprovals: 3,
};

const PENDING = [
  { id: "p1", name: "Yusuf Ibrahim",  email: "y.ibrahim@email.com",  course: "Quran Nazra",     requestedAt: "2 days ago" },
  { id: "p2", name: "Mariam Saeed",   email: "m.saeed@email.com",    course: "Arabic Language",  requestedAt: "1 day ago"  },
  { id: "p3", name: "Hassan Ali",     email: "h.ali@email.com",      course: "Quran Nazra",     requestedAt: "3 hours ago" },
];

const STUDENTS = [
  { id: "1", name: "Ahmed Khan",      email: "a.khan@email.com",    course: "Quran Nazra",     paymentStatus: "active",    nextSession: "Mon, 3 Mar",  sessionsCompleted: 22, isActive: true  },
  { id: "2", name: "Fatima Ali",      email: "f.ali@email.com",     course: "Arabic Language",  paymentStatus: "active",    nextSession: "Wed, 5 Mar",  sessionsCompleted: 15, isActive: true  },
  { id: "3", name: "Omar Siddiqui",   email: "o.sid@email.com",     course: "Quran Nazra",     paymentStatus: "active",    nextSession: "Thu, 6 Mar",  sessionsCompleted: 8,  isActive: true  },
  { id: "4", name: "Aisha Rahman",    email: "a.rahman@email.com",  course: "Arabic Language",  paymentStatus: "paused",    nextSession: "—",           sessionsCompleted: 12, isActive: false },
  { id: "5", name: "Bilal Hussain",   email: "b.hussain@email.com", course: "Quran Nazra",     paymentStatus: "active",    nextSession: "Fri, 7 Mar",  sessionsCompleted: 30, isActive: true  },
  { id: "6", name: "Zainab Malik",    email: "z.malik@email.com",   course: "Arabic Language",  paymentStatus: "active",    nextSession: "Tue, 4 Mar",  sessionsCompleted: 7,  isActive: true  },
];

const SCHEDULE_TODAY = [
  { id: "sc1", student: "Ahmed Khan",    course: "Quran Nazra",    time: "10:00 AM", durationMins: 60, zoomLink: "#", status: "scheduled" },
  { id: "sc2", student: "Omar Siddiqui", course: "Quran Nazra",    time: "11:30 AM", durationMins: 60, zoomLink: "#", status: "scheduled" },
  { id: "sc3", student: "Zainab Malik",  course: "Arabic Language", time: "2:00 PM",  durationMins: 60, zoomLink: "#", status: "scheduled" },
  { id: "sc4", student: "Bilal Hussain", course: "Quran Nazra",    time: "4:00 PM",  durationMins: 60, zoomLink: "#", status: "scheduled" },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */
const PAYMENT_BADGE = {
  active:    "bg-emerald-50 text-emerald-700",
  paused:    "bg-amber-50 text-amber-700",
  cancelled: "bg-red-50 text-red-700",
  pending:   "bg-gray-100 text-gray-600",
};

function StatCard({ label, value, sublabel, accent = "green", alert = false }) {
  const left = alert
    ? "border-l-4 border-red-400"
    : accent === "gold"
    ? "border-l-4 border-gold-mid"
    : "border-l-4 border-brand-mid";
  return (
    <div className={`rounded-2xl border border-border bg-surface p-5 ${left}`}>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{label}</p>
      <p className={`mt-1 text-3xl font-bold ${alert ? "text-red-600" : "text-ink"}`}>
        {value}
      </p>
      {sublabel && <p className="mt-0.5 text-xs text-ink-muted">{sublabel}</p>}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [pendingList, setPendingList] = useState(PENDING);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const filteredStudents = STUDENTS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase())
  );

  function handleApprove(id) {
    setPendingList((prev) => prev.filter((p) => p.id !== id));
    // TODO: PATCH /api/admin/approve-student { userId: id }
  }
  function handleDecline(id) {
    setPendingList((prev) => prev.filter((p) => p.id !== id));
    // TODO: DELETE /api/admin/decline-student { userId: id }
  }

  return (
    <div className="space-y-8">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-ink-muted">{today}</p>
        </div>
        <a
          href="/courses"
          className="inline-flex items-center gap-1.5 rounded-xl border border-brand-mid bg-surface px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand-faint"
        >
          + Add Course
        </a>
      </div>

      {/* ── Stats ──────────────────────────────────────────────────── */}
      <section aria-label="Academy statistics">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Total Students"     value={STATS.totalStudents}             sublabel="all time"       />
          <StatCard label="Sessions This Week" value={STATS.sessionsWeek}              sublabel="scheduled"      accent="gold" />
          <StatCard label="Monthly Revenue"    value={`$${STATS.revenueMonth.toLocaleString()}`} sublabel="USD / current month" accent="gold" />
          <StatCard label="Pending Approvals"  value={pendingList.length}              sublabel="action required" alert={pendingList.length > 0} />
        </div>
      </section>

      {/* ── Pending approvals ──────────────────────────────────────── */}
      {pendingList.length > 0 && (
        <section aria-labelledby="pending-heading">
          <h2 id="pending-heading" className="mb-3 text-lg font-semibold text-ink">
            Pending Approvals
            <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">
              {pendingList.length}
            </span>
          </h2>

          <div className="overflow-hidden rounded-2xl border border-red-200 bg-surface">
            {pendingList.map((p, idx) => (
              <div
                key={p.id}
                className={`flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between ${idx !== 0 ? "border-t border-red-100" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                    {p.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{p.name}</p>
                    <p className="text-xs text-ink-muted">
                      {p.email} &middot; {p.course} &middot; Requested {p.requestedAt}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => handleApprove(p.id)}
                    className="rounded-lg bg-brand-mid px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecline(p.id)}
                    className="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Today's Schedule ───────────────────────────────────────── */}
      <section aria-labelledby="schedule-heading">
        <h2 id="schedule-heading" className="mb-3 text-lg font-semibold text-ink">
          Today&apos;s Schedule
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          {SCHEDULE_TODAY.length === 0 ? (
            <p className="p-6 text-sm text-ink-muted">No sessions scheduled for today.</p>
          ) : (
            SCHEDULE_TODAY.map((s, idx) => (
              <div
                key={s.id}
                className={`flex items-center justify-between gap-4 px-5 py-3.5 ${idx !== 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-faint text-sm font-bold text-brand">
                    {s.time.replace(" ", "")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{s.student}</p>
                    <p className="text-xs text-ink-muted">
                      {s.course} &middot; {s.durationMins} min
                    </p>
                  </div>
                </div>
                <a
                  href={s.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-ink-muted transition-colors hover:bg-brand-faint hover:text-brand"
                >
                  Start Zoom
                </a>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── All Students ───────────────────────────────────────────── */}
      <section aria-labelledby="students-heading">
        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="students-heading" className="text-lg font-semibold text-ink">
            All Students
            <span className="ml-2 text-sm font-normal text-ink-muted">
              ({filteredStudents.length})
            </span>
          </h2>

          {/* Search */}
          <div className="relative max-w-xs w-full">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"/>
            </svg>
            <input
              type="search"
              placeholder="Search by name, email, or course…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface py-2 pl-9 pr-4 text-sm text-ink placeholder-ink-muted focus:border-brand-mid focus:outline-none focus:ring-2 focus:ring-brand-mid focus:ring-offset-1"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
                <th className="px-5 py-3">Student</th>
                <th className="px-5 py-3">Course</th>
                <th className="px-5 py-3">Payment</th>
                <th className="px-5 py-3">Sessions</th>
                <th className="px-5 py-3">Next Session</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-ink-muted">
                    No students match your search.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s, idx) => (
                  <tr
                    key={s.id}
                    className={`transition-colors hover:bg-surface-2 ${idx !== 0 ? "border-t border-border" : ""}`}
                  >
                    {/* Student name + email */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-faint text-xs font-bold text-brand">
                          {s.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-medium text-ink">{s.name}</p>
                          <p className="text-xs text-ink-muted">{s.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Course */}
                    <td className="px-5 py-3.5 text-ink-muted">{s.course}</td>

                    {/* Payment badge */}
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${PAYMENT_BADGE[s.paymentStatus] ?? PAYMENT_BADGE.pending}`}>
                        {s.paymentStatus}
                      </span>
                    </td>

                    {/* Sessions count */}
                    <td className="px-5 py-3.5 text-ink-muted">{s.sessionsCompleted}</td>

                    {/* Next session */}
                    <td className="px-5 py-3.5 text-ink-muted">{s.nextSession}</td>

                    {/* Active status */}
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${s.isActive ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${s.isActive ? "bg-emerald-500" : "bg-gray-400"}`} />
                        {s.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <button className="rounded-lg px-2.5 py-1 text-xs font-medium text-brand-mid transition-colors hover:bg-brand-faint">
                          View
                        </button>
                        <button className="rounded-lg px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors hover:bg-surface-2">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
