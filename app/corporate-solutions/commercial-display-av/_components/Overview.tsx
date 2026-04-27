import OverviewSlider from "./OverviewSlider";

const features = [
  {
    title: "Commercial Display Systems",
    description:
      "From fine-pitch LED walls to 98″ commercial panels — engineered for 24/7 operation with maximum visual impact.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Professional Audio & Sound Systems",
    description:
      "PA arrays, ceiling speakers, DSP processors and amplifiers — precision acoustic design from boardrooms to stadiums.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    title: "Unified AV Control & Integration",
    description:
      "Centralised management platforms — control every display, audio zone and conferencing system from a single interface.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Digital Signage & Content Networks",
    description:
      "Dynamic, scheduled content across single screens or multi-site networks — powered by leading CMS platforms.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 11a9 9 0 0 1 9-9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="2" />
      </svg>
    ),
  },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-paper">
      <div className="container-page py-20 md:py-28">

        {/* Centre heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow text-brand">Overview</span>
          <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.1] tracking-tight text-ink font-semibold">
            Commercial Display &amp; Professional AV Solutions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Abans IT brings together category-leading hardware, expert integration and long-term service under one accountable partner — from a single screen to full-scale audio-visual environments across Sri Lanka.
          </p>
        </div>

        {/* Two-column body */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left — image slider, fills the height set by the right grid */}
          <div className="h-full">
            <OverviewSlider />
          </div>

          {/* Right — 1-col on mobile, 2×2 on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col gap-4 h-full items-center text-center sm:items-start sm:text-left rounded-[var(--radius-card)] border border-line bg-paper p-6 transition-all duration-300 hover:border-brand-200 hover:bg-brand-50 cursor-default"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-all duration-300 group-hover:border-brand-200 group-hover:bg-brand-100 group-hover:text-brand">
                  {f.icon}
                </span>
                <div>
                  <h3 className="text-base leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-700">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted hidden sm:block">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
