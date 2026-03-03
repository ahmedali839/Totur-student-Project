// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Courses", href: "/courses" },
//   { label: "About", href: "/about" },
//   { label: "Book", href: "/book" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handler, { passive: true });
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 z-50 w-full transition-colors ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}
//       aria-label="Site header"
//     >
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* ── Logo ── */}
//         <Link href="/" className="group flex items-center gap-2.5">
//           <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-gold-light text-lg font-bold shadow-sm transition-transform duration-200 group-hover:scale-110">
//             ☽
//           </span>
//           <span className="text-lg font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand">
//             Quran Academy
//           </span>
//         </Link>

//         {/* ── Desktop Navigation ── */}
//         <nav
//           className="hidden md:flex items-center gap-0.5"
//           aria-label="Main navigation"
//         >
//           {NAV_LINKS.map(({ label, href }) => {
//             const active =
//               pathname === href || (href !== "/" && pathname.startsWith(href));
//             return (
//               <Link
//                 key={href}
//                 href={href}
//                 className={`relative px-3 py-2 text-sm font-medium transition-colors ${active ? "text-brand" : "text-ink-muted hover:text-brand"}`}
//               >
//                 {label}
//                 <span
//                   className={`absolute bottom-0 left-0 h-0.5 w-full bg-brand transition-all duration-200 ${active ? "opacity-100" : "opacity-0"}`}
//                 />
//               </Link>
//             );
//           })}
//         </nav>

//         {/* ── Desktop CTA ── */}
//         <div className="hidden md:flex items-center gap-2">
//           <Link
//             href="/book"
//             className="btn-shine relative rounded-xl bg-linear-to-r from-gold-mid to-gold-light px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition-all duration-200 hover:shadow-brand hover:scale-[1.03]"
//           >
//             Free Trial ✨
//           </Link>
//         </div>

//         {/* ── Mobile Hamburger ── */}
//         <button
//           type="button"
//           onClick={() => setOpen((v) => !v)}
//           className="md:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-ink-muted transition-colors hover:bg-brand-faint hover:text-brand"
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//           aria-label="Toggle navigation menu"
//         >
//           <svg
//             className="h-5 w-5"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             {open ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* ── Mobile Menu ── */}
//       {open && (
//         <div
//           id="mobile-menu"
//           className="border-t border-border/40 bg-white/95 backdrop-blur-md md:hidden"
//         >
//           <nav
//             className="mx-auto max-w-7xl px-4 py-4"
//             aria-label="Mobile navigation"
//           >
//             <div className="space-y-1">
//               {NAV_LINKS.map(({ label, href }) => {
//                 const active =
//                   pathname === href ||
//                   (href !== "/" && pathname.startsWith(href));
//                 return (
//                   <Link
//                     key={href}
//                     href={href}
//                     onClick={() => setOpen(false)}
//                     className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${active ? "bg-brand-faint text-brand" : "text-ink-muted hover:bg-surface-2 hover:text-brand"}`}
//                   >
//                     {active && (
//                       <span
//                         className="h-1.5 w-1.5 rounded-full bg-brand"
//                         aria-hidden="true"
//                       />
//                     )}
//                     {label}
//                   </Link>
//                 );
//               })}
//             </div>

//             <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
//               <Link
//                 href="/book"
//                 onClick={() => setOpen(false)}
//                 className="btn-shine block rounded-xl bg-linear-to-r from-gold-mid to-gold-light px-4 py-3 text-center text-sm font-semibold text-white"
//               >
//                 Book 3 Free Classes ✨
//               </Link>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }














"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Book", href: "/book" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent"
      }`}
      aria-label="Site header"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* ── Logo (Left Aligned) ── */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-gold-light text-lg font-bold shadow-sm transition-transform duration-200 group-hover:scale-110">
            ☽
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand">
            Quran Academy
          </span>
        </Link>

        {/* ── Desktop Navigation (Center Aligned) ── */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-brand ${
                  active ? "text-brand font-semibold" : "text-ink-muted"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-5 left-0 h-0.5 w-full bg-brand transition-all duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ── Desktop CTA & Mobile Toggle (Right Aligned) ── */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="btn-shine relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-mid to-gold-light px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-gold-mid/20 transition-all duration-200 hover:shadow-lg hover:shadow-brand/20 hover:scale-[1.02]"
            >
              Free Trial ✨
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-ink-muted transition-colors hover:bg-brand-faint hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand-mid"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full border-b border-border bg-white shadow-lg"
        >
          <nav
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {NAV_LINKS.map(({ label, href }) => {
                const active =
                  pathname === href || (href !== "/" && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active
                        ? "bg-brand-faint text-brand"
                        : "text-ink hover:bg-surface-2 hover:text-brand"
                    }`}
                  >
                    {/* Active indicator dot */}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                    )}
                    <span className={!active ? "ml-4" : ""}>{label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="btn-shine flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-gold-mid to-gold-light px-4 py-3 text-base font-semibold text-white shadow-md shadow-gold-mid/20 transition-transform active:scale-95"
              >
                Book 3 Free Classes ✨
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}