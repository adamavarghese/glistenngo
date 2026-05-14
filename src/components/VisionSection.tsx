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
              className="inline-flex h-24 w-24 items-center justify-center rounded-[28px] border border-[rgba(255,255,255,0.22)] bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] shadow-[0_18px_40px_rgba(214,36,159,0.35)] transition hover:scale-105"
              href="https://www.instagram.com/glisten.n.go/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <svg
                aria-hidden="true"
                className="h-12 w-12 text-white"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.087 3.269.222 2.76.42a3.94 3.94 0 0 0-1.417.923A3.94 3.94 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.702.01 5.555 0 5.827 0 8c0 2.172.01 2.444.048 3.297.039.852.174 1.433.372 1.942.206.527.48.974.923 1.417.443.443.89.717 1.417.923.51.198 1.09.333 1.943.372C5.556 15.99 5.828 16 8 16s2.444-.01 3.298-.048c.851-.039 1.434-.174 1.943-.372a3.94 3.94 0 0 0 1.416-.923c.444-.443.718-.89.924-1.417.198-.51.333-1.09.372-1.943C15.99 10.444 16 10.172 16 8c0-2.173-.01-2.445-.048-3.298-.039-.851-.174-1.433-.372-1.942a3.94 3.94 0 0 0-.924-1.417A3.94 3.94 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.444.01 10.172 0 8 0m0 1.441h3.232c.747.034 1.153.16 1.423.265.357.139.612.305.88.573.268.268.434.523.573.88.105.27.231.676.265 1.423.037.808.045 1.05.045 3.418 0 2.367-.008 2.61-.045 3.417-.034.747-.16 1.153-.265 1.423a2.5 2.5 0 0 1-.573.88 2.5 2.5 0 0 1-.88.573c-.27.105-.676.231-1.423.265-.808.037-1.05.045-3.418.045-2.367 0-2.61-.008-3.417-.045-.747-.034-1.153-.16-1.423-.265a2.5 2.5 0 0 1-.88-.573 2.5 2.5 0 0 1-.573-.88c-.105-.27-.231-.676-.265-1.423C1.449 10.61 1.441 10.367 1.441 8c0-2.368.008-2.61.045-3.418.034-.747.16-1.153.265-1.423.139-.357.305-.612.573-.88.268-.268.523-.434.88-.573.27-.105.676-.231 1.423-.265A41 41 0 0 1 8 1.441m0 2.458a4.1 4.1 0 1 0 0 8.203A4.1 4.1 0 0 0 8 3.9m0 6.762A2.66 2.66 0 1 1 8 5.34a2.66 2.66 0 0 1 0 5.32m4.262-6.93a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92" />
              </svg>
            </a>
          </div>
        </div>

        <div className="service-card">
          <img
            className="vision-image"
            src="/assets/brand-vision.jpeg"
            alt="Brand vision detailing shot"
          />
        </div>
      </div>
    </section>
  );
}
