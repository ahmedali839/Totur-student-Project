"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Inline SVG icon set ─────────────────────────────────────────────────── */
function Icon({ id, className = "h-5 w-5" }) {
  const d = {
    grid:
      "M3 3h7v7H3zm0 11h7v7H3zm11-11h7v7h-7zm0 11h7v7h-7z",
    book:
      "M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z",
    calendar:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    users:
      "M17 20H3v-1a4 4 0 014-4h6a4 4 0 014 4v1zm4-1v-1a4 4 0 00-3-3.87M9 11a4 4 0 100-8 4 4 0 000 8zm8 0a4 4 0 10-2-7.46",
    "credit-card":
      "M3 10h18M7 15h.01M11 15h2M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z",
    settings:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    logout:
      "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
    menu:
      "M4 6h16M4 12h16M4 18h16",
    x:
      "M6 18L18 6M6 6l12 12",
  };
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d[id]} />
    </svg>
  );
}

/* ── DashboardShell ──────────────────────────────────────────────────────── */
/**
 * @param {{ navItems: {label:string, href:string, icon:string}[], user: {name:string, role:string}, children: React.ReactNode }} props
 */
export default function DashboardShell({ navItems, user, children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const initials = user?.name
    ? user.name
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    /* Fills the remaining viewport below the sticky Navbar (64px) */
    <div className="flex min-h-[calc(100vh-64px)] bg-surface-2">

      {/* ── Mobile backdrop ─────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar ─────────────────────────────────────────────────── */}
      <aside
        className={[
          "fixed left-0 top-16 z-30 flex h-[calc(100vh-64px)] w-64 flex-col",
          "border-r border-border bg-surface",
          "transition-transform duration-200 ease-in-out",
          "md:sticky md:translate-x-0 md:shrink-0",
          open ? "translate-x-0 shadow-xl" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Nav list */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {navItems.map(({ label, href, icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-brand-faint text-brand"
                        : "text-ink-muted hover:bg-surface-2 hover:text-ink",
                    ].join(" ")}
                  >
                    <Icon id={icon} />
                    {label}
                    {active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-mid" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User info + logout */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-faint text-sm font-bold text-brand">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">
                {user?.name ?? "User"}
              </p>
              <p className="text-xs capitalize text-ink-muted">
                {user?.role ?? "student"}
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="mt-3 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-ink-muted transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Icon id="logout" className="h-4 w-4" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* ── Main area ───────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <div className="sticky top-16 z-10 flex items-center gap-3 border-b border-border bg-surface px-4 py-3 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-lg p-1.5 text-ink-muted hover:bg-surface-2"
            aria-label="Open navigation"
          >
            <Icon id="menu" className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium text-ink">
            {navItems.find((n) => n.href === pathname)?.label ?? "Dashboard"}
          </span>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          {children}
        </div>
      </div>
    </div>
  );
}
