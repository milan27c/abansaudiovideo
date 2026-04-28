import Image from "next/image";
import AnimateIn from "@/app/_components/AnimateIn";

const inputBase =
  "w-full rounded-md border border-line bg-paper px-3 h-11 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brand transition-colors";

/**
 * "INQUIRE NOW" section — image left, form right, centered card,
 * mirrors the inquiry form on /hardware-solutions.
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="container-page py-16 md:py-20">
        <div className="rounded-[var(--radius-card)] bg-surface overflow-hidden grid lg:grid-cols-[1fr_1.1fr] gap-0">

          {/* Left: marketing image */}
          <AnimateIn>
            <div
              className="relative h-full min-h-[260px]"
              style={{
                background:
                  "linear-gradient(135deg, #5B1860 0%, #791F7E 50%, #C9277E 100%)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Hybrid meeting room with integrated AV"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-center mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/70 via-brand/30 to-transparent" aria-hidden />
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn delay={120}>
            <form className="px-6 md:px-10 py-10 md:py-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand">
                Inquire Now
              </span>
              <p className="mt-2 text-sm text-ink-soft max-w-md">
                Add details about your inquiry to help us better understand your
                requirement.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-[11px] font-medium text-muted mb-1.5">
                    <span aria-hidden className="text-brand">*</span> Name
                  </label>
                  <input id="name" name="name" required className={inputBase} placeholder="Jane Perera" />
                </div>
                <div>
                  <label htmlFor="designation" className="block text-[11px] font-medium text-muted mb-1.5">
                    Designation
                  </label>
                  <input id="designation" name="designation" className={inputBase} placeholder="Operations Lead" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[11px] font-medium text-muted mb-1.5">
                    Company
                  </label>
                  <input id="company" name="company" className={inputBase} placeholder="Acme Holdings" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-muted mb-1.5">
                    <span aria-hidden className="text-brand">*</span> Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputBase} placeholder="jane@acme.lk" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-medium text-muted mb-1.5">
                    <span aria-hidden className="text-brand">*</span> Contact No
                  </label>
                  <input id="phone" name="phone" required className={inputBase} placeholder="+94 77 123 4567" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="attachment" className="block text-[11px] font-medium text-muted mb-1.5">
                    Attachments
                  </label>
                  <div className="flex items-center justify-between rounded-md border border-line bg-paper px-3 h-11">
                    <span className="text-xs text-muted">No file chosen</span>
                    <span className="inline-flex items-center gap-2 text-xs text-ink-soft">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M21.4 11.05l-9.19 9.19a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.5 3.5 0 1 1 4.95 4.95L9.4 17.39a1.5 1.5 0 0 1-2.12-2.12l8.49-8.49" />
                      </svg>
                      Browse
                    </span>
                  </div>
                  <p className="mt-1.5 text-[10px] text-muted">
                    *Maximum allowed file size: 2MB
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-[11px] font-medium text-muted mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${inputBase} h-auto py-3 resize-none`}
                    placeholder="Share space dimensions, expected audience, timelines or any existing equipment."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center rounded-full bg-brand px-7 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-colors hover:bg-brand-700"
                >
                  Submit
                </button>
                <p className="text-xs text-ink-soft">
                  OR CALL US NOW —{" "}
                  <a href="tel:+94114797979" className="font-semibold text-brand hover:text-brand-700">
                    011 479 7979
                  </a>
                </p>
              </div>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
