import Link from "next/link";
import Image from "next/image";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export const metadata = {
  title: "Corporate Solutions | Abans Laptops",
  description:
    "Corporate Solutions by Abans Laptops — Hardware Solutions, Enterprise Solutions, and Audio Visual & Commercial Display Solutions for businesses across Sri Lanka.",
};

type Card = {
  line1: string;
  line2: string;
  href: string;
  image: string;
  alt: string;
};

const cards: Card[] = [
  {
    line1: "HARDWARE",
    line2: "SOLUTIONS",
    href: "/hardware-solutions",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1400&q=80",
    alt: "Laptops, desktops and monitors arranged in a flat-lay composition",
  },
  {
    line1: "ENTERPRISE",
    line2: "SOLUTIONS",
    href: "/enterprise-solutions",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    alt: "Server stack and enterprise networking equipment",
  },
  {
    line1: "AUDIO VISUAL & COMMERCIAL",
    line2: "DISPLAY SOLUTIONS",
    href: "/corporate-solutions/commercial-display-av",
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1400&q=80",
    alt: "Commercial video wall and conference room AV",
  },
];

export default function CorporatePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-paper">
        {/* Breadcrumb */}
        <div className="container-page pt-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-semibold tracking-[0.16em] text-muted">
            <Link href="/" className="hover:text-brand transition-colors">HOME</Link>
            <span className="mx-2 text-muted/60">›</span>
            <span className="text-ink">CORPORATE</span>
          </nav>
        </div>

        {/* Title */}
        <section className="container-page pt-10 pb-12 md:pt-14 md:pb-16">
          <h1 className="text-center font-bold uppercase leading-tight tracking-tight">
            <span className="block text-[length:var(--text-h1)] text-ink">
              Corporate Solutions
            </span>
            <span className="block mt-2 text-[length:var(--text-h1)] text-brand">
              By Abans Laptops
            </span>
          </h1>
        </section>

        {/* 3 cards */}
        <section className="container-page pb-12">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {cards.map((c) => (
              <Link
                key={c.line1 + c.line2}
                href={c.href}
                className="group flex flex-col items-center rounded-[var(--radius-card)] border border-line bg-paper px-6 py-10 md:px-8 md:py-12 transition-all duration-300 hover:border-brand hover:shadow-[var(--shadow-lift)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <h2 className="text-center font-bold uppercase tracking-tight leading-tight">
                  <span className="block text-2xl text-ink">{c.line1}</span>
                  <span className="block text-2xl text-brand">{c.line2}</span>
                </h2>
                <div className="relative mt-8 w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  View solutions
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Annual report CTA */}
        <section className="container-page pb-20 md:pb-28">
          <p className="text-center text-sm text-ink-soft">
            Check out corporate profile &amp; annual report for more details.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="https://abansgroup.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-brand px-6 text-[11px] font-semibold tracking-[0.16em] uppercase text-white transition-colors hover:bg-brand-700"
            >
              Abans PLC Annual Report
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
