import AnimateIn from "@/app/_components/AnimateIn";

/**
 * Service drop-off points — Sri Lanka outline with brand-coloured
 * location dots, mirroring the equivalent section on /hardware-solutions.
 *
 * The map is rendered with an inline SVG outline (approximate Sri Lanka
 * silhouette) so the prototype works without external geo data. Replace
 * with the real branded SVG before launch.
 */
export default function ServicePoints() {
  // 36 representative dot positions across the silhouette (approximate)
  const dots = [
    [55, 18], [60, 22], [50, 25], [58, 28], [52, 32],
    [48, 36], [54, 38], [60, 40], [46, 42], [52, 45],
    [44, 48], [50, 51], [56, 52], [42, 55], [48, 58],
    [54, 60], [60, 62], [38, 62], [44, 65], [50, 67],
    [56, 70], [42, 72], [48, 75], [54, 78], [44, 80],
    [50, 82], [40, 85], [46, 88], [38, 70], [40, 60],
    [40, 50], [42, 42], [44, 32], [50, 20], [62, 30], [62, 50],
  ];

  return (
    <section className="bg-paper">
      <div className="container-page py-16 md:py-24">
        <div className="bg-surface rounded-[var(--radius-card)] grid lg:grid-cols-[1fr_1.1fr] items-center gap-10 px-6 md:px-12 py-12 md:py-16">

          {/* Left — eyebrow + title */}
          <AnimateIn>
            <div className="text-center lg:text-left">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted">
                Abans Service Points
              </span>
              <h2 className="mt-3 text-[length:var(--text-h1)] font-bold uppercase tracking-tight text-ink leading-tight">
                Service Drop Off
                <br />
                Points
              </h2>
              <span className="mt-4 inline-block h-px w-10 bg-brand" aria-hidden />
              <p className="mt-5 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed text-ink-soft">
                Island-wide drop-off and service points so your AV and display
                systems stay supported wherever they&apos;re deployed.
              </p>
            </div>
          </AnimateIn>

          {/* Right — Sri Lanka silhouette with dots */}
          <AnimateIn delay={120}>
            <div className="relative mx-auto w-full max-w-md aspect-[2/3]">
              <svg viewBox="0 0 100 150" className="absolute inset-0 h-full w-full" aria-hidden>
                {/* Approximate Sri Lanka outline */}
                <path
                  d="M55 8
                     C 64 12, 68 22, 66 32
                     C 70 42, 70 56, 64 70
                     C 60 86, 56 100, 50 116
                     C 44 128, 36 134, 30 128
                     C 26 118, 28 104, 32 94
                     C 30 82, 30 68, 36 56
                     C 38 44, 42 32, 48 22
                     C 50 14, 52 10, 55 8 Z"
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="0.6"
                  opacity="0.7"
                />
                {dots.map(([x, y], i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="0.9"
                    fill="var(--color-brand)"
                  />
                ))}
              </svg>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
