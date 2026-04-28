"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Overview",    href: "#overview" },
  { label: "Products",    href: "#categories" },
  { label: "Brands",      href: "#brands" },
  { label: "Industries",  href: "#industries" },
  { label: "Why Us",      href: "#why-us" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.41a8.16 8.16 0 0 0 4.77 1.52V7.49a4.85 4.85 0 0 1-1-.8z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper">

      {/* ── Top utility bar ── */}
      <div className="hidden md:block border-b border-line bg-surface">
        <div className="container-page flex h-12 items-center justify-between">

          {/* Social icons */}
          <ul className="flex items-center gap-4" style={{ fontFamily: "var(--font-questrial)" }}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center text-muted transition-colors duration-200 hover:text-brand"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Job number form */}
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Job number lookup"
            style={{ fontFamily: "var(--font-questrial)" }}
          >
            <input
              type="text"
              placeholder="Enter your job number here..."
              className="h-9 w-72 rounded-full border border-line bg-paper px-5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none"
              style={{ fontFamily: "var(--font-questrial)" }}
            />
            <button
              type="submit"
              className="inline-flex h-9 items-center rounded-full bg-brand px-6 text-xs font-medium tracking-wider text-white transition-colors hover:bg-brand-700"
              style={{ fontFamily: "var(--font-questrial)" }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="border-b border-line">
        <div className="container-page flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" aria-label="Abans IT — home" className="shrink-0">
            <div className="relative h-10 w-36">
              <Image
                src="/images/Abans IT Logo/logo (2).png"
                alt="Abans IT"
                fill
                sizes="144px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav + Search */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <nav className="flex items-center gap-1" aria-label="Main navigation" style={{ fontFamily: "var(--font-questrial)" }}>
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center px-4 py-2 text-xs font-normal tracking-wide text-ink-soft rounded-full transition-all duration-200 hover:bg-brand hover:text-white"
                >
                  {item.label.toUpperCase()}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center px-4 py-2 text-xs font-normal tracking-wide text-ink-soft rounded-full transition-all duration-200 hover:bg-brand hover:text-white"
                style={{ fontFamily: "var(--font-questrial)" }}
              >
                CONTACT
              </a>
            </nav>

            {/* Search icon */}
            <button
              aria-label="Search"
              className="inline-flex items-center justify-center text-ink-soft hover:text-brand transition-colors duration-200 ml-2"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink hover:border-brand hover:text-brand transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line bg-paper shadow-md" style={{ fontFamily: "var(--font-questrial)" }}>
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-xs font-normal tracking-wide text-ink hover:bg-brand hover:text-white transition-colors"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-xs font-normal tracking-wide text-ink hover:bg-brand hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
