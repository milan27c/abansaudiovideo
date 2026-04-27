"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Overview",   href: "#overview" },
  { label: "Products",   href: "#categories" },
  { label: "Brands",     href: "#brands" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us",     href: "#why-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Abans IT — home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-ink">Abans<span className="text-brand">IT</span></span>
            <span className="text-[10px] tracking-[0.22em] text-muted uppercase">Corporate Solutions</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Contact Us
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink hover:border-brand hover:text-brand transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <nav className="container-page py-5 flex flex-col gap-1" aria-label="Mobile navigation">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-ink hover:bg-surface hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
