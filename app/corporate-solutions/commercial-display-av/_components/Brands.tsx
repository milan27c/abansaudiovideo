import Image from "next/image";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "20+",  label: "Global Brand Partners" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "15yr", label: "Industry Experience" },
];

const logos = [
  { name: "LG",        src: "/images/logos/LG.png" },
  { name: "Philips",   src: "/images/logos/Philips.png" },
  { name: "JBL",       src: "/images/logos/JBL.png" },
  { name: "Marshall",  src: "/images/logos/Marshall.png" },
  { name: "Huawei",    src: "/images/logos/Huawei.png" },
  { name: "Toshiba",   src: "/images/logos/Toshiba.png" },
  { name: "Xiaomi",    src: "/images/logos/Xiaomi.png" },
  { name: "Oppo",      src: "/images/logos/Oppo.png" },
  { name: "Realme",    src: "/images/logos/Realme.png" },
  { name: "Joyroom",   src: "/images/logos/Joyroom.png" },
  { name: "Fasttrack", src: "/images/logos/Fasttrack.png" },
  { name: "Abans",     src: "/images/logos/Abans.png" },
];

export default function Brands() {
  return (
    <section id="brands">
      {/* ── Purple stats strip ── */}
      <div className="bg-brand">
        <div className="container-page py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-8 md:py-6 px-6 text-center">
                <p className="text-4xl md:text-5xl font-medium text-white leading-none tracking-tight">
                  {s.value}
                </p>
                <p className="mt-3 text-[0.65rem] font-semibold text-white/60 tracking-[0.18em] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Brand logos ── */}
      <div className="bg-paper">
        <div className="container-page py-20 md:py-28">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-brand">Our Brands</span>
            <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.1] tracking-tight text-ink font-semibold">
              Brands We Carry
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We partner with the world's leading manufacturers to deliver
              certified, warranty-backed commercial AV solutions.
            </p>
          </div>

          {/* Logo grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-line border border-line rounded-[var(--radius-card)] overflow-hidden">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group relative flex h-32 sm:h-28 items-center justify-center bg-paper transition-all duration-300 hover:bg-brand-50 cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="(min-width: 1024px) 213px, (min-width: 768px) 25vw, 50vw"
                    className="object-contain p-3 sm:p-5 transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-sm text-muted">
            + Many more authorised brands
          </p>
        </div>
      </div>
    </section>
  );
}
