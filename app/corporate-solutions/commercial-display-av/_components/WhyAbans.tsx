type Value = {
  title: string;
  body: string;
  icon: React.ReactNode;
  accent: string;
};

const values: Value[] = [
  {
    title: "Consultative engineering",
    body: "Room surveys, line-of-sight studies, acoustic modelling and low-voltage design — delivered by certified AV engineers.",
    accent: "var(--color-brand)",
    icon: <path d="M4 4h16v12H4zM8 20h8M12 16v4M8 8l2 2 6-6" />,
  },
  {
    title: "Single-supplier accountability",
    body: "Hardware, installation, content, training and support — one SOW, one PM, one SLA, one point of contact.",
    accent: "var(--color-blue)",
    icon: <path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7l8-4z" />,
  },
  {
    title: "40+ brand portfolio",
    body: "Manufacturer-authorised for leading display, audio, control and signage brands — right fit for every budget.",
    accent: "var(--color-orange)",
    icon: <path d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" />,
  },
  {
    title: "24/7 service & SLA",
    body: "Preventive maintenance, remote monitoring, on-site response and spares held locally — keeping critical AV running.",
    accent: "var(--color-green)",
    icon: <path d="M12 2v3M12 19v3M5 5l2 2M17 17l2 2M2 12h3M19 12h3M5 19l2-2M17 7l2-2M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />,
  },
];

export default function WhyAbans() {
  return (
    <section id="why-us" className="relative bg-paper">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="eyebrow text-brand">Why Abans IT</span>
            <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.1] tracking-tight text-ink font-semibold">
              Built for the details. Trusted with the whole.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted text-center md:text-left">
            The Abans Group has been shaping consumer and commercial
            electronics in Sri Lanka for over 50 years. AV is in our DNA.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center sm:items-start sm:text-left rounded-[var(--radius-card)] border border-line bg-surface-2 p-7 transition-colors hover:border-brand"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: v.accent }}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {v.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-xl tracking-tight text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
