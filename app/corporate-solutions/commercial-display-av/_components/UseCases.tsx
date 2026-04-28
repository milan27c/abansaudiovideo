import Image from "next/image";
import AnimateIn from "@/app/_components/AnimateIn";

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
    name: "Corporate Offices",
    tag: "Workplace",
    tagColor: "var(--color-brand)",
    description:
      "Boardrooms, hybrid meeting rooms, lobbies and town-hall spaces with smart displays, conferencing and integrated AV.",
    image:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1400&q=80",
    alt: "Corporate boardroom with AV system",
    chips: ["Smart Meeting Rooms", "Lobby Displays", "Conferencing"],
  },
  {
    name: "Retail",
    tag: "Customer Experience",
    tagColor: "var(--color-orange)",
    description:
      "In-store digital signage, brand walls and audio environments that guide customers and drive engagement at every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1400&q=80",
    alt: "Digital signage in a retail store",
    chips: ["Digital Signage", "LED Walls", "In-Store Audio"],
  },
  {
    name: "Hospitality",
    tag: "Guest Experience",
    tagColor: "var(--color-green)",
    description:
      "Hotel and resort environments — guestroom TVs, lobby signage, banquet AV and centralised content management.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
    alt: "Hotel lobby with ambient signage",
    chips: ["Hotel TVs", "Lobby Signage", "Banquet AV"],
  },
  {
    name: "Education",
    tag: "Learning",
    tagColor: "var(--color-blue)",
    description:
      "Smart classrooms, lecture-capture auditoriums, library automation and interactive displays for engaged learning.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern classroom with interactive display",
    chips: ["Smart Classrooms", "Auditorium AV", "Library Automation"],
  },
  {
    name: "Healthcare",
    tag: "Clinical",
    tagColor: "var(--color-purple)",
    description:
      "Hospital TVs, patient information signage, wayfinding and clinical-grade audio that improve care and communication.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    alt: "Hospital lobby with digital information display",
    chips: ["Hospital TVs", "Patient Signage", "Wayfinding"],
  },
];

export default function UseCases() {
  return (
    <section id="industries" className="relative bg-surface">
      <div className="container-page py-20 md:py-28">
        <AnimateIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-brand">Industry Use Cases</span>
            <h2 className="mt-4 leading-[1.1] tracking-tight text-ink uppercase" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.65rem, 2.5vw, 3rem)", fontWeight: 900 }}>
              Solutions across every sector we serve.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              From corporate offices and retail to hospitality, education,
              healthcare and the public sector — Abans IT&apos;s display and
              AV solutions are trusted across Sri Lanka&apos;s most demanding
              environments.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {useCases.map((u, i) => (
            <AnimateIn key={u.name} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-[var(--radius-card)] aspect-[2/3] cursor-pointer">
                <Image
                  src={u.image}
                  alt={u.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-center sm:text-left">
                  <span
                    className="inline-block text-[0.6rem] font-semibold tracking-[0.16em] uppercase"
                    style={{ color: u.tagColor }}
                  >
                    {u.tag}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white leading-tight uppercase" style={{ fontFamily: "var(--font-raleway)" }}>
                    {u.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    {u.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[0.65rem] text-white/80 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
