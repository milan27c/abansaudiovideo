import Image from "next/image";
import AnimateIn from "@/app/_components/AnimateIn";

type AVSolution = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const solutions: AVSolution[] = [
  {
    title: "Professional Audio Solutions",
    body:
      "Clear, powerful and reliable sound for enterprise and large-scale environments — expertly designed, integrated and supported.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=100",
    alt: "Professional line array audio system in a venue",
  },
  {
    title: "Conference & Discussion Systems",
    body:
      "Structured, effective communication in meeting and conference environments — designed for seamless discussions and decision-making.",
    image:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=2400&q=100",
    alt: "Conference table with discussion microphones",
  },
  {
    title: "Building PA Systems",
    body:
      "Consistent sound distribution, centralised control and reliable performance across large facilities, campuses and public spaces.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2400&q=100",
    alt: "Public address ceiling speaker installation",
  },
  {
    title: "Smart Meeting Room Solutions",
    body:
      "Integrated audio, video and collaboration technology for productive, frictionless meetings in modern enterprise spaces.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=100",
    alt: "Smart meeting room with video conferencing",
  },
  {
    title: "Smart Classroom Solutions",
    body:
      "Audio, visual and interactive technology that enhances engagement, collaboration and effective teaching in modern learning spaces.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2400&q=100",
    alt: "Modern smart classroom with interactive display",
  },
  {
    title: "Auditorium & Large Venue",
    body:
      "Powerful audio and immersive visuals engineered for auditoriums, theatres, halls and large public venues — built for clarity and scale.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=2400&q=100",
    alt: "Auditorium with large-venue AV system",
  },
  {
    title: "Control Room & Command Centre",
    body:
      "Mission-critical environments for real-time monitoring, seamless control and reliable decision-making — engineered for continuous operation.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2400&q=100",
    alt: "Operations control room with multiple displays",
  },
  {
    title: "AV Distribution & Integration",
    body:
      "Seamless distribution of audio and visual signals across enterprise environments through expertly integrated AV systems.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=100",
    alt: "AV equipment rack with cable management",
  },
  {
    title: "Lighting Solutions",
    body:
      "Advanced lighting that enhances visibility, ambience and functionality across commercial and professional environments.",
    image:
      "https://images.unsplash.com/photo-1545972154-9bb223aac798?auto=format&fit=crop&w=2400&q=100",
    alt: "Architectural lighting in a commercial space",
  },
  {
    title: "Library Automation Systems",
    body:
      "Modern library management to simplify cataloguing, circulation and resource access for educational and institutional environments.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2400&q=100",
    alt: "Modern library reading area",
  },
];

export default function AVSolutions() {
  return (
    <section id="av-solutions" className="bg-paper">
      {/* ── Section body ── */}
      <div className="container-page py-20 md:py-28">
        <AnimateIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-brand">Audio Visual Solutions</span>
            <h2 className="mt-4 leading-[1.1] tracking-tight text-ink uppercase" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.65rem, 2.5vw, 3rem)", fontWeight: 900 }}>
              Built for how modern organisations meet, teach and broadcast.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Abans IT delivers professional Audio Visual solutions that
              enable seamless communication, collaboration and engagement
              across modern business environments. Our solutions span
              conference rooms, boardrooms, training facilities, auditoriums,
              control rooms and hybrid collaboration spaces — combining
              high-quality audio, visual and control technologies.
            </p>
          </div>
        </AnimateIn>

        {/* Solution grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 [&>:nth-last-child(2)]:lg:col-start-2">
          {solutions.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 60} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[var(--radius-card)] aspect-[4/5] cursor-pointer">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1280px) 230px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-night/95 via-night/40 to-transparent transition-all duration-500 group-hover:sm:h-2/3" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <h3 className="text-base font-bold text-white leading-snug uppercase" style={{ fontFamily: "var(--font-raleway)" }}>
                    {s.title}
                  </h3>
                  <div className="overflow-hidden max-h-full opacity-100 sm:max-h-0 sm:opacity-0 group-hover:sm:max-h-40 group-hover:sm:opacity-100 transition-all duration-500 ease-out">
                    <p className="mt-2 text-xs leading-relaxed text-white/80">
                      {s.body}
                    </p>
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
