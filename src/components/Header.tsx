// Top navigation header with desktop and mobile menus.
import { useState } from "react";
import { navLinks } from "../data/siteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            >
              {link.label}
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
              >
                {link.label}
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
