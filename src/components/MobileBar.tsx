// Mobile sticky action bar for quick booking links.
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick actions">
      <div className="site-container flex gap-2">
        <a className="btn btn-ghost flex-1" href="tel:+19176831007">
          Call/Text
        </a>
        <a
          className="btn btn-primary flex-1"
          href="https://www.glistenngo.com/appointments"
          target="_blank"
          rel="noopener"
        >
          Book
        </a>
      </div>
    </div>
  );
}
