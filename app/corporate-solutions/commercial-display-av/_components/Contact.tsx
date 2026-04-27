const inputBase =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 h-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-300 focus:bg-white/10 transition-colors";

const contacts = [
  {
    label: "Call the AV team",
    value: "+94 11 479 7979",
    href: "tel:+94114797979",
    icon: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />,
  },
  {
    label: "Email corporate sales",
    value: "corporate@abansit.lk",
    href: "mailto:corporate@abansit.lk",
    icon: <path d="M4 4h16v16H4zM4 6l8 6 8-6" />,
  },
  {
    label: "Visit our showroom",
    value: "498 Galle Rd, Colombo 03",
    href: "#",
    icon: <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-night text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div
        className="absolute -right-32 top-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-40 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, #791F7E 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container-page relative py-20 md:py-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left: copy + contact strip */}
          <div className="text-center lg:text-left">
            <span className="eyebrow text-brand-300">Start a conversation</span>
            <h2 className="mt-4 text-[length:var(--text-h1)] leading-[1.05] tracking-[-0.02em] font-semibold">
              Let&apos;s design your next display &amp; AV experience.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70 max-w-xl mx-auto lg:mx-0">
              Tell us about the space, the audience and the outcome you want.
              An Abans IT specialist will respond within one business day with
              next steps and a proposed scope of work.
            </p>

            <div className="mt-10 space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-3 sm:gap-5 rounded-[var(--radius-card)] border border-white/10 bg-night-2 p-5 hover:border-brand-300 transition-colors"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand-300 group-hover:bg-brand group-hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {c.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-white/50">{c.label}</span>
                    <span className="block text-lg text-white">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: inquiry form */}
          <form className="rounded-[var(--radius-card)] border border-white/10 bg-night-2 p-7 md:p-8">
            <p className="eyebrow text-white/50">Request a consultation</p>
            <h3 className="mt-2 text-2xl tracking-tight">Tell us about your project</h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-white/60 mb-2">Full name</label>
                <input id="name" name="name" className={inputBase} placeholder="Jane Perera" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs text-white/60 mb-2">Company</label>
                <input id="company" name="company" className={inputBase} placeholder="Acme Holdings" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-white/60 mb-2">Work email</label>
                <input id="email" name="email" type="email" className={inputBase} placeholder="jane@acme.lk" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-white/60 mb-2">Phone</label>
                <input id="phone" name="phone" className={inputBase} placeholder="+94 77 123 4567" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="interest" className="block text-xs text-white/60 mb-2">Area of interest</label>
                <select id="interest" name="interest" className={`${inputBase} appearance-none`}>
                  <option className="bg-night" value="">Select a solution</option>
                  <option className="bg-night">Commercial Displays</option>
                  <option className="bg-night">Video Walls / DvLED</option>
                  <option className="bg-night">Interactive / Collaboration</option>
                  <option className="bg-night">Digital Signage</option>
                  <option className="bg-night">Conference &amp; UC rooms</option>
                  <option className="bg-night">Professional Audio</option>
                  <option className="bg-night">Control Rooms</option>
                  <option className="bg-night">Projection Systems</option>
                  <option className="bg-night">Not sure — please advise</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-xs text-white/60 mb-2">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${inputBase} h-auto py-3 resize-none`}
                  placeholder="Share space dimensions, expected audience, timelines or any existing equipment."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full md:w-auto items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm text-white hover:bg-brand-700 transition-colors"
            >
              Send inquiry
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
            <p className="mt-4 text-xs text-white/50">
              By submitting this form you agree to our privacy policy. We&apos;ll only use your details to respond to this inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
