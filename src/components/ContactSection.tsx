// Contact section with info and demo inquiry form.
import type { FormEvent } from "react";

export default function ContactSection() {
  const handleDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Demo contact form", Object.fromEntries(formData.entries()));
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section pt-0">
      <div className="site-container grid gap-4 lg:grid-cols-2">
        <div className="service-card">
          <h2 className="m-0 text-[clamp(24px,2.6vw,34px)] tracking-[-0.3px]">
            Contact Us
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Interested in working together? Fill out some info and we will be in touch
            shortly.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a className="btn btn-ghost" href="tel:+19176831007">
              Call/Text
            </a>
            <a
              className="btn btn-primary"
              href="https://www.glistenngo.com/appointments"
              target="_blank"
              rel="noopener"
            >
              Book now
            </a>
          </div>
          <p className="mt-3 text-xs text-[color:var(--muted)]">
            Tip: If you already collect leads elsewhere (Squarespace form / CRM), link
            that here.
          </p>
        </div>

        <div className="service-card">
          <form className="grid gap-3" onSubmit={handleDemoSubmit}>
            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="name">
                Name
              </label>
              <input
                className="input-field"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="phone">
                Phone
              </label>
              <input
                className="input-field"
                id="phone"
                name="phone"
                placeholder="(917) 683-1007"
                inputMode="tel"
                required
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="msg">
                Message
              </label>
              <textarea
                className="input-field min-h-[110px]"
                id="msg"
                name="msg"
                placeholder="Vehicle type, service needed, town, preferred date/time..."
                required
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Send message
            </button>
            <div className="text-xs text-[color:var(--muted)]">
              Demo only — replace with your real form action.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
