"use client";

import Image from "next/image";
import { useState } from "react";
import AnimateIn from "@/app/_components/AnimateIn";

const TABS = [
  { id: "tvs",      label: "Commercial TVs" },
  { id: "led",      label: "LED Signage" },
  { id: "monitor",  label: "Monitor Signage" },
  { id: "software", label: "Software & Services" },
] as const;

type TabId = (typeof TABS)[number]["id"];

type Item = { title: string; body: string; image: string; alt: string };

const CONTENT: Record<TabId, Item[]> = {
  tvs: [
    {
      title: "Hospitality TV",
      body: "Avant offers Hospital TV solutions built for healthcare settings, combining dependable performance with simple usability. Designed to improve patient comfort and information access, our TVs are ideal for hospitals, clinics, and medical facilities.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=100",
      alt: "Hospital room with patient TV",
    },
    {
      title: "Hotel TV",
      body: "Avant offers professional Hotel TV solutions tailored for hotels, serviced apartments, and resorts. Featuring UHD picture quality, smart functionality, and centralised management, our TVs are built to elevate guest satisfaction and operational efficiency.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=100",
      alt: "Hotel room with smart TV",
    },
  ],
  led: [
    {
      title: "Outdoor LED Signage",
      body: "High-brightness outdoor LED displays engineered for all-weather performance — ideal for advertising, wayfinding and large-format brand communications in any lighting condition.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1600&q=100",
      alt: "Outdoor LED billboard at night",
    },
    {
      title: "Indoor LED Signage",
      body: "Vibrant, high-resolution indoor LED walls for lobbies, retail environments, control rooms and large venues that demand immersive, seamless visual experiences.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=100",
      alt: "Indoor LED display installation",
    },
    {
      title: "All in One LED",
      body: "Integrated LED display solutions combining screen, media player and management in a single compact unit — quick to deploy, easy to manage and built for modern commercial spaces.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1600&q=100",
      alt: "All-in-one LED display unit",
    },
  ],
  monitor: [
    {
      title: "OLED",
      body: "Self-illuminating panels delivering perfect blacks, infinite contrast and ultra-thin form factors — ideal for luxury retail, hospitality and premium installations.",
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1600&q=100",
      alt: "OLED commercial display",
    },
    {
      title: "High Brightness",
      body: "Sunlight-readable displays engineered for bright environments — shop windows, transport hubs and outdoor-facing installations where standard screens fall short.",
      image: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?auto=format&fit=crop&w=1600&q=100",
      alt: "High brightness window display",
    },
    {
      title: "Video Wall",
      body: "Seamless multi-panel display systems creating impactful large-scale visuals for control rooms, lobbies, retail flagship stores and large venues.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=100",
      alt: "Video wall in a control room",
    },
    {
      title: "Interactive Smartboard",
      body: "Touch-enabled collaboration displays transforming meeting rooms, classrooms and training spaces into dynamic, engaging environments.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=100",
      alt: "Interactive smartboard in a classroom",
    },
    {
      title: "Stretch Display",
      body: "Ultra-wide bar displays purpose-built for shelf-edge retail, transport information boards and wayfinding applications where conventional screens won't fit.",
      image: "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?auto=format&fit=crop&w=1600&q=100",
      alt: "Stretch bar display installation",
    },
    {
      title: "UHD Display",
      body: "4K Ultra HD commercial displays delivering exceptional detail and clarity for professional environments that demand the highest image quality.",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1600&q=100",
      alt: "UHD 4K commercial display",
    },
    {
      title: "FHD Display",
      body: "Full HD commercial displays offering reliable, consistent performance and clear visuals for everyday business applications across offices, retail and hospitality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=100",
      alt: "FHD commercial display",
    },
  ],
  software: [
    {
      title: "Software & Services",
      body: "Centralised content management, scheduling, remote monitoring and analytics for your complete display network — backed by configuration, training and after-sales support.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=100",
      alt: "Signage software management dashboard",
    },
    {
      title: "Super Sign Solution",
      body: "LG's professional signage platform providing advanced content management, real-time device monitoring and multi-screen control for enterprise display networks.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=100",
      alt: "Super Sign digital signage platform",
    },
  ],
};

function SubCard({ item }: { item: Item }) {
  return (
    <article className="group relative overflow-hidden rounded-[var(--radius-card)] aspect-[4/5] cursor-pointer">
      {/* Full-bleed image */}
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      {/* Base dark tint */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/45" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-all duration-500 group-hover:sm:h-2/3" />

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-center">
        {/* Title — always visible */}
        <h3 className="text-lg font-bold text-white leading-snug uppercase" style={{ fontFamily: "var(--font-raleway)" }}>
          {item.title}
        </h3>

        {/* Description — visible on mobile, revealed on hover on desktop */}
        <div className="overflow-hidden max-h-full opacity-100 sm:max-h-0 sm:opacity-0 group-hover:sm:max-h-48 group-hover:sm:opacity-100 transition-all duration-500 ease-out">
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {item.body}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CommercialDisplays() {
  const [active, setActive] = useState<TabId>("tvs");
  const items = CONTENT[active];

  return (
    <section id="commercial-displays" className="bg-surface">
      <div className="container-page py-20 md:py-28">

        {/* Heading */}
        <AnimateIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-brand">Commercial Display Solutions</span>
            <h2 className="mt-4 leading-[1.1] tracking-tight text-ink uppercase" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.65rem, 2.5vw, 3rem)", fontWeight: 900 }}>
              Professional displays, end-to-end.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted mx-auto">
              From commercial TVs and LED walls to monitor signage and content
              management — every display solution backed by Abans IT&apos;s
              expertise and trusted global brand partnerships.
            </p>
          </div>
        </AnimateIn>

        {/* 4 main category tabs */}
        <AnimateIn delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-6 sm:items-end sm:border-b sm:border-line w-full sm:w-auto max-w-sm sm:max-w-none">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative px-3 py-2 text-sm sm:text-base font-normal tracking-normal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-lg sm:rounded-none border sm:border-0 sm:pb-3 sm:pt-1 leading-normal ${
                    active === tab.id
                      ? "text-brand border-brand bg-brand/5 sm:border-b-2 sm:border-brand sm:bg-transparent"
                      : "text-muted border-line hover:text-ink hover:border-ink sm:hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Subcategory grid */}
        <div
          className="mt-10 grid gap-5 md:gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 380px))", justifyContent: "center" }}
        >
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 70} className="h-full">
              <SubCard item={item} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
