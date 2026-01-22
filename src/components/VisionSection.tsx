// Brand vision story and supporting imagery.
export default function VisionSection() {
  return (
    <section id="vision" className="section">
      <div className="site-container grid gap-4 lg:grid-cols-2">
        <div className="service-card">
          <h2 className="m-0 text-[clamp(24px,2.6vw,34px)] tracking-[-0.3px]">
            Our brand vision
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Welcome to the frontier of car detailing, where we transcend the
            conventional and redefine automotive aesthetics. With cutting-edge techniques
            and a passion for perfection, we transform every vehicle into a masterpiece.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="h-11 w-11 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface-2)] text-center leading-[44px]"
              href="https://www.instagram.com/glisten.n.go/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              IG
            </a>
            <span className="h-11 w-11 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface-2)] text-center leading-[44px]">
              ★
            </span>
            <span className="h-11 w-11 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface-2)] text-center leading-[44px]">
              ✓
            </span>
          </div>
          <p className="mt-3 text-xs text-[color:var(--muted)]">
            Swap the icons above for real social icons or SVGs.
          </p>
        </div>

        <div className="service-card">
          <div className="photo h-[320px]" role="img" aria-label="Brand image placeholder"></div>
          <p className="mt-3 text-xs text-[color:var(--muted)]">
            Replace with a "wow" after photo, or a clean shot of your setup/truck for
            trust.
          </p>
        </div>
      </div>
    </section>
  );
}
