import Image from "next/image";
import AnimateIn from "@/app/_components/AnimateIn";

/**
 * "WHAT WE DO" panel — full-bleed brand-purple band with
 * floating product image on the left and white copy on the right.
 * Mirrors the equivalent section on /hardware-solutions.
 */
export default function WhatWeDo() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #5B1860 0%, #791F7E 45%, #9A359F 100%)",
      }}
    >
      <div className="container-page py-14 md:py-20">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Image */}
          <AnimateIn>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1400&q=80"
                alt="Boardroom with integrated audio-visual and display systems"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-contain object-center"
              />
            </div>
          </AnimateIn>

          {/* Copy */}
          <AnimateIn delay={120}>
            <div className="text-white">
              <h2 className="text-[length:var(--text-h1)] font-bold uppercase tracking-tight leading-tight">
                What We Do
              </h2>
              <span className="mt-3 inline-block h-px w-10 bg-white/70" aria-hidden />
              <p className="mt-5 text-sm md:text-base leading-relaxed text-white/85">
                At Abans, we are your trusted AV &amp; display partner — providing
                professional solutions tailored to how modern organisations meet,
                teach, broadcast and serve their customers. We work with the
                world&apos;s leading brands to bring you the latest in display,
                conferencing, sound and control technology.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/85">
                Our dedicated engineering team takes care of every stage —
                consultation, system design, installation, integration,
                maintenance and after-sales support — across Sri Lanka. From
                boardrooms and lobbies to auditoriums and command centres,
                we&apos;re up for the challenge.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
