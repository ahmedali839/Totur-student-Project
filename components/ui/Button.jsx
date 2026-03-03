"use client";

import Link from "next/link";

// components/ui/Button.jsx
// Variants: primary (green) | gold | secondary | ghost | danger

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    // ── Green (primary academy CTA)
    primary:
      "bg-brand-mid text-white hover:bg-brand focus:ring-brand-mid shadow-sm",
    // ── Gold (trial / enroll CTA — highest priority action)
    gold:
      "bg-gold-mid text-white hover:bg-gold focus:ring-gold-mid shadow-sm",
    // ── Outlined green
    secondary:
      "bg-surface text-brand border border-brand-mid hover:bg-brand-faint focus:ring-brand-mid",
    // ── Outlined gold
    "secondary-gold":
      "bg-surface text-gold border border-gold-mid hover:bg-gold-faint focus:ring-gold-mid",
    // ── Transparent
    ghost:
      "text-brand hover:bg-brand-faint focus:ring-brand-mid",
    // ── White outline (for use on dark/green backgrounds)
    outline:
      "border border-white/60 text-white hover:bg-white/10 focus:ring-white",
    // ── Destructive
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
    xl: "px-9 py-4 text-lg",
  };

  const classes = [
    base,
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
