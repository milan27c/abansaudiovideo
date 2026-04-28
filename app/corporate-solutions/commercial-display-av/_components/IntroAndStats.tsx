import AnimateIn from "@/app/_components/AnimateIn";
import CountUp from "@/app/_components/CountUp";

const stats = [
  { to: 20, suffix: "+", label: "Authorized Partners" },
  { to: 500, suffix: "+", label: "Project Deployments" },
  { to: 14, suffix: "", label: "Solution Types" },
];

/**
 * "WHO WE ARE" intro + 3 stat house-cards, mirroring
 * the hardware-solutions page section directly under the banner.
 */
export default function IntroAndStats() {
  return (
    <section className="bg-paper">
      <div className="container-page py-16 md:py-20">
        <AnimateIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted">
              Who We Are
            </span>
            <h2 className="mt-3 text-[length:var(--text-h1)] font-bold uppercase tracking-tight text-ink leading-[1.15]">
              Audio Visual &amp; Commercial Display Solutions by Abans IT
            </h2>
            <span className="mt-4 inline-block h-px w-12 bg-brand" aria-hidden />
            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink-soft">
              Abans IT delivers comprehensive Commercial Display and Audio Visual
              solutions designed to support communication, collaboration and
              engagement across professional environments — for corporate
              offices, retail, hospitality, education, healthcare and the public
              sector.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-soft">
              Backed by trusted global technology partners and experienced local
              teams, we offer end-to-end services from consultation and system
              design to installation and after-sales support.
            </p>
          </div>
        </AnimateIn>

        {/* Stat row — house-shaped cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 100}>
              <div className="relative flex flex-col items-center justify-center px-6 pt-8 pb-6 mx-auto w-[78%] sm:w-full max-w-[220px]">
                {/* House-shape outline behind */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full text-line"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M100 8 L188 60 L188 192 L12 192 L12 60 Z" />
                </svg>

                <p className="relative text-4xl md:text-5xl font-bold leading-none tracking-tight text-ink">
                  <CountUp to={s.to} />
                  <sup className="text-brand text-xl md:text-2xl ml-0.5 align-super">
                    {s.suffix}
                  </sup>
                </p>
                <span className="relative mt-2 block h-px w-6 bg-brand" aria-hidden />
                <p className="relative mt-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-ink-soft text-center">
                  {s.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
