// Top navigation header with desktop and mobile menus.
import { useState } from "react";
import { navLinks } from "../data/siteData";

function InstagramIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-[7px] bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]">
      <svg
        aria-hidden="true"
        className="h-4 w-4 text-white"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.087 3.269.222 2.76.42a3.94 3.94 0 0 0-1.417.923A3.94 3.94 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.702.01 5.555 0 5.827 0 8c0 2.172.01 2.444.048 3.297.039.852.174 1.433.372 1.942.206.527.48.974.923 1.417.443.443.89.717 1.417.923.51.198 1.09.333 1.943.372C5.556 15.99 5.828 16 8 16s2.444-.01 3.298-.048c.851-.039 1.434-.174 1.943-.372a3.94 3.94 0 0 0 1.416-.923c.444-.443.718-.89.924-1.417.198-.51.333-1.09.372-1.943C15.99 10.444 16 10.172 16 8c0-2.173-.01-2.445-.048-3.298-.039-.851-.174-1.433-.372-1.942a3.94 3.94 0 0 0-.924-1.417A3.94 3.94 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.444.01 10.172 0 8 0m0 1.441h3.232c.747.034 1.153.16 1.423.265.357.139.612.305.88.573.268.268.434.523.573.88.105.27.231.676.265 1.423.037.808.045 1.05.045 3.418 0 2.367-.008 2.61-.045 3.417-.034.747-.16 1.153-.265 1.423a2.5 2.5 0 0 1-.573.88 2.5 2.5 0 0 1-.88.573c-.27.105-.676.231-1.423.265-.808.037-1.05.045-3.418.045-2.367 0-2.61-.008-3.417-.045-.747-.034-1.153-.16-1.423-.265a2.5 2.5 0 0 1-.88-.573 2.5 2.5 0 0 1-.573-.88c-.105-.27-.231-.676-.265-1.423C1.449 10.61 1.441 10.367 1.441 8c0-2.368.008-2.61.045-3.418.034-.747.16-1.153.265-1.423.139-.357.305-.612.573-.88.268-.268.523-.434.88-.573.27-.105.676-.231 1.423-.265A41 41 0 0 1 8 1.441m0 2.458a4.1 4.1 0 1 0 0 8.203A4.1 4.1 0 0 0 8 3.9m0 6.762A2.66 2.66 0 1 1 8 5.34a2.66 2.66 0 0 1 0 5.32m4.262-6.93a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92" />
      </svg>
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getExternalLinkProps = (href: string) =>
    href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <header className="nav">
      <div className="site-container nav-inner">
        <a className="flex min-w-[220px] items-center gap-3" href="#top" aria-label="Home">
          <img className="logo-mark" src="/assets/logo.png" alt="Glisten N' Go logo" />
          <span className="leading-tight">
            <strong className="block tracking-[0.2px]">Glisten N' Go</strong>
            <span className="text-xs text-[color:var(--muted)]">Mobile Detailing</span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-sm text-[color:var(--muted)] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="rounded-xl px-2.5 py-2 hover:bg-[color:var(--surface)] hover:text-[color:var(--text)]"
              href={link.href}
              aria-label={link.label}
              {...getExternalLinkProps(link.href)}
            >
              {link.label === "Instagram" ? <InstagramIcon /> : link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn btn-small btn-ghost" href="tel:+19176831007">
            Call/Text
          </a>
          <a
            className="btn btn-small btn-primary"
            href="#booking"
          >
            Book now
          </a>
          <button
            className="btn btn-small lg:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobilePanel"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobilePanel"
          className="site-container border-t border-[color:var(--line)] pb-4 pt-2 lg:hidden"
        >
          <div className="grid gap-1 text-sm text-[color:var(--muted)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-xl px-3 py-2 hover:bg-[color:var(--surface)] hover:text-[color:var(--text)]"
                href={link.href}
                aria-label={link.label}
                {...getExternalLinkProps(link.href)}
              >
                {link.label === "Instagram" ? <InstagramIcon /> : link.label}
              </a>
            ))}
          </div>
          <a
            className="btn btn-primary mt-3 w-full"
            href="#booking"
          >
            Book now
          </a>
        </div>
      )}
    </header>
  );
}
