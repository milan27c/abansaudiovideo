import Image from "next/image";

type UseCase = {
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  image: string;
  alt: string;
  chips: string[];
};

const useCases: UseCase[] = [
  {
    name: "Education",
    tag: "Learning",
    tagColor: "var(--color-blue)",
    description: "Interactive classrooms and collaborative learning spaces powered by smartboards, classroom speakers and headphone labs.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern classroom with interactive smartboard",
    chips: ["Interactive Smartboards", "Classroom Speakers", "Headphone Labs"],
  },
  {
    name: "Corporate & Enterprise",
    tag: "Workplace",
    tagColor: "var(--color-brand)",
    description: "Meeting rooms, lobbies and open floors equipped with smartboards, directional signage and premium conference audio.",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1400&q=80",
    alt: "Corporate meeting room with smartboard",
    chips: ["Smartboards", "Lobby Signage", "Conference Audio"],
  },
  {
    name: "Retail",
    tag: "Customer Experience",
    tagColor: "var(--color-orange)",
    description: "In-store digital signage and branded audio environments that guide customers and drive engagement at every touchpoint.",
    image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1400&q=80",
    alt: "Digital signage in a retail store",
    chips: ["Digital Signage", "In-Store Audio", "Promo Displays"],
  },
  {
    name: "Hospitality",
    tag: "Guest Experience",
    tagColor: "var(--color-green)",
    description: "Curated HiFi audio and visual display systems that elevate every guest touchpoint — from lobbies to dining areas.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
    alt: "Hotel lobby with ambient audio and signage",
    chips: ["HiFi Audio", "Lobby Signage", "Restaurant Sound"],
  },
  {
    name: "Healthcare",
    tag: "Clinical",
    tagColor: "var(--color-purple)",
    description: "Patient information signage, wayfinding displays and clinical-grade audio that improve care and communication.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    alt: "Hospital lobby with digital information display",
    chips: ["Patient Signage", "Wayfinding", "Clinical Audio"],
  },
  {
    name: "Events & Entertainment",
    tag: "Entertainment",
    tagColor: "var(--color-red)",
    description: "Professional speaker arrays, HiFi room systems and stage-ready earphone monitoring for venues and live experiences.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80",
    alt: "Live event with professional speaker system",
    chips: ["Speaker Arrays", "HiFi Systems", "Stage Monitoring"],
  },
];

export default function UseCases() {
  return (
    <section id="industries" className="relative bg-paper">
      <div className="container-page py-20 md:py-28">

        {/* Centred heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow text-brand">Industry Use Cases</span>
          <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.1] tracking-tight text-ink font-semibold">
            Solutions Across Every Industry
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            From classrooms to concert halls, our audio and display solutions are
            trusted across Sri Lanka's most demanding environments.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((u) => (
            <article
              key={u.name}
              className="group relative overflow-hidden rounded-[var(--radius-card)] aspect-[3/4] cursor-pointer"
            >
              {/* Full-bleed image */}
              <Image
                src={u.image}
                alt={u.alt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Base dark tint */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/45" />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-center sm:text-left">
                {/* Tag */}
                <span
                  className="inline-block text-[0.65rem] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: u.tagColor }}
                >
                  {u.tag}
                </span>

                {/* Name — always visible */}
                <h3 className="mt-1.5 text-xl font-semibold text-white leading-snug">
                  {u.name}
                </h3>

                {/* Description + chips — revealed on hover */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {u.description}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                    {u.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
