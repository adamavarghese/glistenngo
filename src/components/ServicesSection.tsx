// Services grid showing core detailing packages.
import { services } from "../data/siteData";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[clamp(24px,2.6vw,34px)] tracking-[-0.3px]">
              Discover our services
            </h2>
            <div className="text-sm text-[color:var(--muted)]">
              Clean tiers, easy booking, premium results.
            </div>
            <div className="mt-2 text-xs text-[color:var(--muted)]">
              SUV add-on: $24.99 • Trucks/3rd row SUV add-on: $49.99
            </div>
          </div>
          <a
            className="btn btn-primary"
            href="https://www.glistenngo.com/appointments"
            target="_blank"
            rel="noopener"
          >
            Book now
          </a>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`service-card ${service.popular ? "popular" : ""}`}
            >
              {service.popular && <div className="tag mb-2">Popular</div>}
              {service.image && (
                <img
                  className="service-image mb-3"
                  src={service.image}
                  alt={service.imageAlt ?? service.title}
                />
              )}
              <h3 className="text-lg">{service.title}</h3>
              <div className="text-2xl tracking-[-0.4px]">{service.price}</div>
              <div className="mt-2 text-xs text-[color:var(--muted)]">INCLUDES</div>
              <ul className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-[18px] w-[18px] rounded-[7px] border border-[rgba(37,99,235,0.45)] bg-[rgba(37,99,235,0.15)]" />
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <div className="mt-3 text-xs text-[color:var(--muted)]">
                  {service.note}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
