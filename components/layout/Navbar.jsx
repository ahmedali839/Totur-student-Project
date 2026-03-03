"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About",   href: "/about" },
  { label: "Book",    href: "/book" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 text-brand font-bold text-xl tracking-tight"
        >
          {/* Arabic crescent ornament */}
          <span className="text-gold-mid text-2xl leading-none" aria-hidden="true">
            ☽
          </span>
          <span>Quran Academy</span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-faint hover:text-brand"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand"
          >
            Login
          </Link>
          <Link
            href="/book"
            className="rounded-lg bg-gold-mid px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-mid focus-visible:ring-offset-2"
          >
            Free Trial
          </Link>
        </div>

        {/* ── Mobile Hamburger Button ── */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink-muted transition-colors hover:bg-brand-faint hover:text-brand"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? (
            /* X icon */
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface md:hidden"
        >
          <nav
            className="mx-auto max-w-7xl space-y-1 px-4 py-3"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-faint hover:text-brand"
              >
                {label}
              </Link>
            ))}

            {/* Mobile CTA row */}
            <div className="flex flex-col gap-2 border-t border-border pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-ink-muted transition-colors hover:bg-surface-2"
              >
                Login
              </Link>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-gold-mid px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gold"
              >
                Book Free Trial
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
