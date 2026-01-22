// Highlighted call-to-action band between sections.
export default function CtaSection() {
  return (
    <section className="section pt-2">
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[calc(var(--radius)+12px)] border border-[color:var(--line)] bg-[color:var(--surface-3)] p-6 shadow-[var(--shadow)]">
          <div>
            <h2 className="m-0 text-[clamp(24px,2.6vw,34px)] tracking-[-0.3px]">
              Secure your spot
            </h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Revolutionize the way your car shines with cutting-edge detailing. Book
              your appointment and experience the pinnacle of automotive care.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="btn btn-ghost" href="tel:+19176831007">
              Call/Text
            </a>
            <a
              className="btn btn-primary"
              href="https://www.glistenngo.com/appointments"
              target="_blank"
              rel="noopener"
            >
              Book appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
