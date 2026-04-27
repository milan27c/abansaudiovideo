"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    desktop: "/images/sliders/slider1.png",
    mobile: "/images/sliders/mobileslider1.png",
    alt: "Commercial display solution",
  },
  {
    desktop: "/images/sliders/slider2.png",
    mobile: "/images/sliders/mobileslider2.png",
    alt: "Professional AV solution",
  },
];

const DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  function goTo(index: number) {
    const next = (index + SLIDES.length) % SLIDES.length;
    setCurrent(next);
    setProgressKey((k) => k + 1);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(current + 1), DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, progressKey]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) goTo(delta > 0 ? current + 1 : current - 1);
    touchStartX.current = null;
  }

  return (
    <section className="relative w-full overflow-hidden bg-night select-none">
      {/* Mobile aspect — portrait */}
      {/* Desktop aspect — wide */}
      <div
        className="relative w-full aspect-[1122/1402] md:aspect-[2172/724]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.desktop}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            {/* Mobile image */}
            <Image
              src={slide.mobile}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center md:hidden"
              draggable={false}
            />
            {/* Desktop image */}
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center hidden md:block"
              draggable={false}
            />
          </div>
        ))}

        {/* Arrows — desktop only */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M13 5l-5 5 5 5" />
          </svg>
        </button>
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 5l5 5-5 5" />
          </svg>
        </button>

        {/* Progress bars — bottom center, all screens */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-1 w-16 overflow-hidden rounded-full bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {i === current && (
                <span
                  key={progressKey}
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  style={{ animation: `slideProgress ${DURATION}ms linear forwards` }}
                />
              )}
              {i < current && (
                <span className="absolute inset-0 rounded-full bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
