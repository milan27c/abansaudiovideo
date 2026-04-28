import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "HOME",         href: "/" },
  { label: "PRODUCTS",     href: "/products" },
  { label: "CORPORATE",    href: "/corporate" },
  { label: "SMART DEVICES",href: "/smart-devices" },
  { label: "TECH SUPPORT", href: "/tech-support" },
  { label: "BLOG",         href: "/blog" },
  { label: "CONTACT US",   href: "/contact" },
  { label: "SHOWROOMS",    href: "/showrooms" },
];

const recentProducts = [
  { brand: "APPLE", name: "Apple MacBook Air 15.3inch M5 chip 16GB RAM | 512GB SSD | Sky Blue" },
  { brand: "APPLE", name: "Apple MacBook Air 15.3inch M5 chip 16GB RAM | 512GB SSD | Midnight" },
  { brand: "APPLE", name: "Apple MacBook Air 13.6inch M5 chip 16GB RAM | 512GB SSD | Sky Blue" },
];

const categories = [
  "CORPORATE", "EDUCATION", "GAMING",
  "SMARTBOARDS", "SIGNAGES",
  "PROFESSIONAL", "TABLETS", "PRINTERS",
  "ACCESSORIES", "MONITORS",
  "ALL-IN-ONE", "LAPTOPS",
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

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-xs text-white/65">
      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center text-brand-300" aria-hidden>
        {icon}
      </span>
      <span className="flex-1 leading-relaxed">{children}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="text-white/80" style={{ backgroundColor: "#3a3a3a" }}>

      {/* Main grid */}
      <div className="container-page pt-14 pb-10 md:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-start text-left">
            <Link href="/" aria-label="Abans IT — home" className="shrink-0">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/Abans IT Logo/logo-footer.png"
                  alt="Abans IT"
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-5 text-xs leading-relaxed text-white/60 max-w-xs">
              Abans IT delivers end-to-end Commercial Display and Professional
              Audio Video solutions — from consultation and system design to
              installation and after-sales support, backed by 20+ leading global brands.
            </p>

            <div className="mt-6 space-y-2.5 w-full">
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <rect x="6" y="2" width="12" height="20" rx="2" />
                    <path d="M11 18h2" />
                  </svg>
                }
              >
                GENERAL :{" "}
                <a href="tel:+94115555888" className="text-white/85 underline-offset-2 hover:text-white hover:underline">
                  011 55 55 888
                </a>
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                }
              >
                EMAIL :{" "}
                <a href="mailto:itservices@abansgroup.com" className="text-white/85 hover:text-white">
                  ITSERVICES@ABANSGROUP.COM
                </a>
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                }
              >
                <a href="mailto:itbrand@abansgroup.com" className="text-white/85 hover:text-white">
                  ITBRAND@ABANSGROUP.COM
                </a>
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z" />
                    <circle cx="12" cy="9" r="2.5" fill="#3a3a3a" />
                  </svg>
                }
              >
                ADDRESS : 498, GALLE ROAD, COLOMBO 03 SRI LANKA
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                }
              >
                <a href="https://abansgroup.com" target="_blank" rel="noreferrer" className="text-white/85 hover:text-white">
                  ABANSGROUP.COM
                </a>
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                }
              >
                <a href="https://buyabans.com" target="_blank" rel="noreferrer" className="text-white/85 hover:text-white">
                  BUYABANS.COM
                </a>
              </ContactRow>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase">
              Quick Links
            </h4>
            <span className="mt-2 block h-px w-8 bg-white/20" />
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[11px] font-medium tracking-[0.12em] text-white/65 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Products */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase">
              Recent Products
            </h4>
            <span className="mt-2 block h-px w-8 bg-white/20" />
            <ul className="mt-4 flex flex-col gap-4">
              {recentProducts.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-10 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-white/40"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="18" height="11" rx="1.5" />
                      <path d="M2 19h20" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-white/85">
                      {p.brand}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      {p.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase">
              Categories
            </h4>
            <span className="mt-2 block h-px w-8 bg-white/20" />
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((c) => (
                <a
                  key={c}
                  href="#"
                  className="inline-flex h-7 items-center rounded-full border border-white/20 bg-white/5 px-3 text-[10px] font-semibold tracking-[0.14em] text-white/75 hover:border-brand-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {c}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "#2a2a2a" }}>
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/55">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Abans. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white/50 hover:text-brand-300 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp + agent (bottom-left, fixed) */}
      <div className="fixed bottom-4 left-4 z-50 flex items-end gap-2 pointer-events-none">
        <span
          aria-hidden
          className="inline-flex h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-lg bg-brand-100"
        >
          <svg viewBox="0 0 24 24" className="h-12 w-12 text-brand" fill="currentColor">
            <circle cx="12" cy="9" r="4" />
            <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </span>
        <a
          href="https://wa.me/94715555888"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
            <path d="M20.5 3.5A11 11 0 0 0 3.4 17.1L2 22l5-1.4a11 11 0 0 0 5 1.3 11 11 0 0 0 8.5-18.4zM12 19.6a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.6 8.6 0 1 1 7.1 3.8zm5-6.4c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1c-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5s-.6-1.5-.9-2-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.4S6 7.4 6 8.7c0 1.4 1 2.7 1.2 2.9s2 3.1 4.9 4.4c1.8.7 2.5.8 3.4.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4z" />
          </svg>
        </a>
      </div>

    </footer>
  );
}
