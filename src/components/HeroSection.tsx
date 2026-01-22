// Hero section introducing the brand and primary calls to action.
export default function HeroSection() {
  return (
    <section id="top" className="section">
      <div className="site-container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--muted)]">
            <span className="pill">Convenience • Excellence</span>
            <span className="pill">We come to you</span>
            <span className="pill">Premium results</span>
          </div>

          <h1 className="mt-3 text-[clamp(36px,4.2vw,56px)] leading-[1.02] tracking-[-0.8px]">
            Revolutionizing
            <br />
            Car Detailing
          </h1>

          <p className="mt-3 max-w-[60ch] text-sm text-[color:var(--muted)]">
            At Glisten N' Go, we redefine convenience and excellence in automotive care
            with a passion for pristine vehicles and a commitment to superior service. We
            bring the car wash and detailing experience directly to you, wherever you
            are.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="btn btn-primary"
              href="https://www.glistenngo.com/appointments"
              target="_blank"
              rel="noopener"
            >
              Book appointment
            </a>
            <a className="btn btn-ghost" href="#services">
              Discover our services
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="pill">Exterior • Interior • Protection</span>
            <span className="pill">Add-ons available</span>
          </div>
        </div>

        <div className="card flex flex-col gap-3 p-5">
          <div className="photo" role="img" aria-label="Detailing photo placeholder"></div>
          <div className="pill">Tip: Replace with a clean "after" shot for instant premium feel.</div>
        </div>
      </div>
    </section>
  );
}
