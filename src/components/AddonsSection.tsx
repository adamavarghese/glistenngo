// Optional add-on services with pricing highlights.
import { addons } from "../data/siteData";

export default function AddonsSection() {
  return (
    <section id="addons" className="section pt-0">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[clamp(24px,2.6vw,34px)] tracking-[-0.3px]">Add ons</h2>
            <div className="text-sm text-[color:var(--muted)]">
              Boost protection, restore gloss, tackle tough jobs.
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className={`service-card ${addon.fullWidth ? "md:col-span-2" : ""}`}
            >
              <strong className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <span>{addon.title}</span>
                <span className="text-[color:var(--muted)]">{addon.price}</span>
              </strong>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{addon.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
