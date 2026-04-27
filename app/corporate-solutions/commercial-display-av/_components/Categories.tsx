"use client";

import Image from "next/image";
import { useState } from "react";

const TABS = [
  { id: "av", label: "Audio Video Solutions" },
  { id: "display", label: "Commercial Displays" },
] as const;

type TabId = (typeof TABS)[number]["id"];

type Category = { title: string; image: string; alt: string };

const AV_CATEGORIES: Category[] = [
  {
    title: "HiFi Systems",
    image: "/images/categories/HIFI%20systems.png",
    alt: "High-fidelity audio system",
  },
  {
    title: "Speakers",
    image: "/images/categories/Speakers.png",
    alt: "Professional speaker",
  },
  {
    title: "Headphones",
    image: "/images/categories/Headphones.png",
    alt: "Over-ear headphones",
  },
  {
    title: "Earphones",
    image: "/images/categories/Earphones.png",
    alt: "In-ear earphones",
  },
];

const DISPLAY_CATEGORIES: Category[] = [
  {
    title: "Smartboards",
    image: "/images/categories/Smartboards.png",
    alt: "Interactive smartboard",
  },
  {
    title: "Signages",
    image: "/images/categories/Signages.png",
    alt: "Digital signage display",
  },
];

const ALL_CATEGORIES: Record<TabId, Category[]> = {
  av: AV_CATEGORIES,
  display: DISPLAY_CATEGORIES,
};

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="group cursor-pointer rounded-[var(--radius-card)] border border-line bg-paper overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-paper">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 50vw"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.07]"
          draggable={false}
        />
      </div>
      <div className="px-4 py-4 text-center border-t border-line">
        <p className="text-base font-semibold tracking-tight text-ink group-hover:text-brand transition-colors duration-300">
          {category.title}
        </p>
      </div>
    </div>
  );
}

export default function Categories() {
  const [activeTab, setActiveTab] = useState<TabId>("av");
  const categories = ALL_CATEGORIES[activeTab];
  const isDisplay = activeTab === "display";

  return (
    <section id="categories" className="relative bg-surface">
      <div className="container-page py-20 md:py-28">

        {/* Centre heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-brand">Product Categories</span>
          <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.1] tracking-tight text-ink font-semibold">
            Explore Our Solutions
          </h2>
        </div>

        {/* Tabs — underline spans exact text width */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-end gap-10 border-b border-line">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-3 pt-1 text-lg font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  activeTab === tab.id ? "text-brand" : "text-muted hover:text-ink"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-brand" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div
          className={`mt-10 grid grid-cols-2 gap-6 md:gap-8 ${
            isDisplay
              ? "sm:grid-cols-2 max-w-2xl mx-auto"
              : "sm:grid-cols-4"
          }`}
        >
          {categories.map((c) => (
            <CategoryCard key={c.title} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
