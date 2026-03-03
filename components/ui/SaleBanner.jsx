"use client";

import Link from "next/link";
import { useState } from "react";

export default function SaleBanner() {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        aria-label="Show free trial offer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-mid text-2xl shadow-xl transition-transform hover:scale-110 animate-pulse-ring"
      >
        🎁
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-gold-mid bg-brand shadow-[0_-4px_24px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-6">

        {/* Left — offer text */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 text-2xl" aria-hidden="true">🎁</span>
          <div className="min-w-0">
            <p className="font-semibold text-white text-sm leading-tight">
              3 FREE Trial Classes — Limited Spots This Week!
            </p>
            <p className="text-xs text-brand-faint mt-0.5 hidden sm:block">
              500+ students joined this way · No credit card · All ages &amp; levels welcome
            </p>
          </div>
        </div>

        {/* Right — CTA + collapse */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/book"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gold-mid px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold hover:shadow-md active:scale-95"
          >
            Claim Free Spot
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <button
            onClick={() => setCollapsed(true)}
            aria-label="Minimise offer banner"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-faint transition-colors hover:bg-white/10 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
