import Image from "next/image";

/**
 * Banner hero — mirrors abansit.lk/hardware-solutions:
 * compact full-width gradient bar with a floating product image
 * bleeding off the left edge and a large all-caps title centered.
 */
export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(95deg, #FF3D9A 0%, #C9277E 38%, #791F7E 100%)",
      }}
      aria-label="Audio Visual & Commercial Display"
    >
      <div className="container-page relative flex h-[180px] md:h-[240px] lg:h-[260px] items-center">
        {/* Floating product imagery on the left edge */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-[44%] lg:w-[38%] pointer-events-none">
          <Image
            src="/images/banner.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 480px, 50vw"
            className="object-cover object-center opacity-90 mix-blend-screen"
            priority
            aria-hidden
          />
          {/* Soft fade on the right edge so it blends into the gradient */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, transparent 55%, rgba(121,31,126,0.55) 80%, rgba(121,31,126,1) 100%)",
            }}
          />
        </div>

        {/* Title */}
        <h1 className="relative z-[1] ml-auto md:ml-0 md:mx-auto text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]" style={{ fontFamily: "var(--font-raleway)" }}>
          <span className="block">AUDIO VISUAL &amp;</span>
          <span className="block mt-1">COMMERCIAL DISPLAY</span>
        </h1>
      </div>
    </section>
  );
}
