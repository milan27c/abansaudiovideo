import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Seamless pixel pitches from 0.9mm",
    body: "Fine-pitch DvLED with pixel densities tuned for close-viewing corporate and broadcast environments.",
  },
  {
    title: "HDR-capable, colour-accurate",
    body: "Factory-calibrated brightness and colour uniformity with 24/7 industrial reliability.",
  },
  {
    title: "Turn-key installation",
    body: "Structural engineering, rigging, power, AV control and content — from survey to sign-off.",
  },
];

export default function Spotlight() {
  return (
    <section className="relative bg-night text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div
        className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-40 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, #791F7E 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container-page relative py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80"
              alt="Fine-pitch LED video wall installation in a corporate lobby"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 right-6 rounded-[var(--radius-card)] border border-white/15 bg-night-2/80 backdrop-blur p-5">
              <p className="eyebrow text-brand-300">Featured case study</p>
              <p className="mt-2 text-lg leading-snug text-white">
                Flagship retail atrium — 7.5 × 3.2m fine-pitch DvLED, delivered in 6 weeks.
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow text-brand-300">Solution spotlight</span>
            <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.1] tracking-tight font-semibold">
              Direct-view LED that commands the room.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Abans IT delivers end-to-end DvLED programmes — from specification
              and structural engineering to rigging, power distribution,
              processing and creative content. Built for brand flagships,
              broadcast, XR stages and mission-critical control rooms.
            </p>

            <ul className="mt-8 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-300">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10l4 4 8-9" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-lg text-white">{f.title}</p>
                    <p className="mt-1 text-sm text-white/60 leading-relaxed">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-sm text-white hover:bg-brand-700 transition-colors"
            >
              Scope a DvLED project
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
