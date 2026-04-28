import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/app/_components/AnimateIn";
import CountUp from "@/app/_components/CountUp";

const pillars = [
  {
    eyebrow: "Commercial Displays",
    title: "Commercial Display Solutions",
    body: "Professional commercial displays that help organisations communicate, collaborate and engage more effectively — from digital signage and video walls to interactive and high-brightness displays.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1400&q=80",
    alt: "Commercial display in a corporate environment",
    href: "#commercial-displays",
    accent: "var(--color-brand)",
    stats: [
      { to: 15, suffix: "+", label: "Display Brands" },
      { to: 200, suffix: "+", label: "Deployments" },
      { to: 4, suffix: "", label: "Solution Types" },
    ],
  },
  {
    eyebrow: "Audio Visual",
    title: "Professional AV Solutions",
    body: "End-to-end AV that powers seamless communication and collaboration — across conference rooms, boardrooms, training facilities, auditoriums, control rooms and hybrid spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern hybrid conference room with AV system",
    href: "#av-solutions",
    accent: "var(--color-purple)",
    stats: [
      { to: 20, suffix: "+", label: "AV Partners" },
      { to: 300, suffix: "+", label: "Deployments" },
      { to: 10, suffix: "", label: "Solution Types" },
    ],
  },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-paper">
      <div className="container-page py-20 md:py-28">

        {/* Centre heading */}
        <AnimateIn>
          <div className="text-center max-w-4xl mx-auto">
            <span className="eyebrow text-brand">Overview</span>
            <h2 className="mt-4 leading-[1.1] tracking-tight text-ink uppercase" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.65rem, 2.5vw, 3rem)", fontWeight: 900 }}>
              Commercial Display &amp; Professional Audio Video Solutions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Abans IT delivers comprehensive Commercial Display and Audio Visual (AV) solutions designed to
              support communication, collaboration, and engagement across professional environments.
              Combining enterprise IT expertise with advanced display and AV technologies, we provide
              integrated solutions for corporate offices, retail spaces, hospitality, education, healthcare,
              and public sector applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our portfolio includes commercial displays, digital signage, LED walls, professional audio
              systems, meeting room solutions, and large-venue AV deployments. Backed by trusted global
              technology partners and experienced local teams, Abans IT offers end-to-end services — from
              consultation and system design to installation and after-sales support — ensuring reliable,
              scalable, and future-ready technology solutions across Sri Lanka.
            </p>
          </div>
        </AnimateIn>

        {/* Two pillar cards */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 120} className="h-full">
              <Link
                href={p.href}
                className="group relative flex flex-col h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-ink/5">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute left-5 top-5 inline-flex items-center rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase text-white"
                    style={{ background: p.accent }}
                  >
                    {p.eyebrow}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-7 md:p-8">
                  <h3 className="text-2xl tracking-tight text-ink font-bold uppercase group-hover:text-brand transition-colors duration-300 text-center sm:text-left" style={{ fontFamily: "var(--font-raleway)" }}>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted text-center sm:text-left">
                    {p.body}
                  </p>

                  {/* Inline stats */}
                  <div className="mt-6 flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-3 pt-6 border-t border-line justify-center sm:justify-start">
                    {p.stats.map((s, si) => (
                      <div key={s.label} className="flex flex-col text-center sm:text-center items-center sm:items-stretch gap-2 sm:gap-0">
                        <p className="text-2xl font-semibold text-ink leading-none tracking-tight">
                          <CountUp to={s.to} suffix={s.suffix} />
                        </p>
                        <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase text-muted leading-tight">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <span className="mt-6 self-center inline-flex items-center gap-2 text-sm font-medium text-brand">
                    Explore {p.eyebrow.toLowerCase()}
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
