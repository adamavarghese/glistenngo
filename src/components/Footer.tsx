// Footer copyright line and end-of-page divider.
interface FooterProps {
  year: number;
}

export default function Footer({ year }: FooterProps) {
  return (
    <footer className="site-container pb-20">
      <div className="divider"></div>
      <div className="py-4 text-xs text-[color:var(--muted)]">
        © {year} Glisten N' Go — Sample template. Replace placeholders with your photos
        and final copy.
      </div>
    </footer>
  );
}
