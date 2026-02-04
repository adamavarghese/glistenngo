import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { bookingAddons, bookingServices, vehicleTypes } from "../data/bookingData";

const CURRENCY = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const paintCorrectionIds = new Set(["paint-1", "paint-2", "paint-3"]);

export default function ContactSection() {
  const [serviceId, setServiceId] = useState(bookingServices[0]?.id ?? "");
  const [vehicleId, setVehicleId] = useState(vehicleTypes[0]?.id ?? "");
  const [addonIds, setAddonIds] = useState<string[]>([]);

  const bookingEmail = (import.meta.env.VITE_BOOKING_EMAIL as string | undefined)?.trim();
  const bookingEndpoint = bookingEmail ? `https://formsubmit.co/${bookingEmail}` : "";
  const nextUrl =
    typeof window === "undefined"
      ? ""
      : `${window.location.origin}${window.location.pathname}#booking`;

  const selectedService =
    bookingServices.find((service) => service.id === serviceId) ?? bookingServices[0];
  const selectedVehicle =
    vehicleTypes.find((vehicle) => vehicle.id === vehicleId) ?? vehicleTypes[0];

  const selectedAddons = useMemo(
    () => bookingAddons.filter((addon) => addonIds.includes(addon.id)),
    [addonIds],
  );

  const total =
    (selectedService?.price ?? 0) +
    (selectedVehicle?.price ?? 0) +
    selectedAddons.reduce((sum, addon) => sum + addon.price, 0);

  const addonSummary =
    selectedAddons.length > 0
      ? selectedAddons.map((addon) => addon.label).join(", ")
      : "No add-ons";

  const toggleAddon = (addonId: string) => {
    setAddonIds((current) => {
      const hasAddon = current.includes(addonId);

      if (hasAddon) {
        return current.filter((id) => id !== addonId);
      }

      if (!paintCorrectionIds.has(addonId)) {
        return [...current, addonId];
      }

      return [...current.filter((id) => !paintCorrectionIds.has(id)), addonId];
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!bookingEndpoint) {
      event.preventDefault();
    }
  };

  return (
    <section id="booking" className="section pt-0">
      <div className="site-container grid gap-4 lg:grid-cols-2">
        <div className="service-card">
          <h2 className="m-0 text-[clamp(24px,2.6vw,34px)] tracking-[-0.3px]">
            Book Your Detail
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Pick your service, vehicle type, and preferred date/time. We will email you a
            full booking summary with pricing.
          </p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
              <div className="text-xs text-[color:var(--muted)]">SERVICE</div>
              <div className="mt-1 text-sm">{selectedService?.label}</div>
            </div>
            <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
              <div className="text-xs text-[color:var(--muted)]">VEHICLE TYPE</div>
              <div className="mt-1 text-sm">{selectedVehicle?.label}</div>
            </div>
            <div className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
              <div className="text-xs text-[color:var(--muted)]">ADD-ONS</div>
              <div className="mt-1 text-sm">{addonSummary}</div>
            </div>
            <div className="rounded-[14px] border border-[rgba(59,130,246,0.4)] bg-[rgba(59,130,246,0.12)] p-4">
              <div className="text-xs text-[color:var(--muted)]">ESTIMATED TOTAL</div>
              <div className="mt-1 text-xl tracking-[-0.3px]">{CURRENCY.format(total)}</div>
            </div>
          </div>
          {!bookingEmail && (
            <p className="mt-3 text-xs text-[color:var(--muted)]">
              Set <code>VITE_BOOKING_EMAIL</code> in your <code>.env</code> to activate
              email delivery.
            </p>
          )}
        </div>

        <div className="service-card">
          <form
            className="grid gap-3"
            method="POST"
            action={bookingEndpoint}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New detailing booking request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input type="hidden" name="service" value={selectedService?.label ?? ""} />
            <input type="hidden" name="vehicle_type" value={selectedVehicle?.label ?? ""} />
            <input type="hidden" name="selected_addons" value={addonSummary} />
            <input type="hidden" name="estimated_total" value={CURRENCY.format(total)} />

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="customer_name">
                Name
              </label>
              <input
                className="input-field"
                id="customer_name"
                name="customer_name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-xs text-[color:var(--muted)]" htmlFor="customer_email">
                  Email
                </label>
                <input
                  className="input-field"
                  id="customer_email"
                  name="customer_email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs text-[color:var(--muted)]" htmlFor="customer_phone">
                  Phone
                </label>
                <input
                  className="input-field"
                  id="customer_phone"
                  name="customer_phone"
                  inputMode="tel"
                  placeholder="(917) 683-1007"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-xs text-[color:var(--muted)]" htmlFor="booking_date">
                  Preferred Date
                </label>
                <input className="input-field" id="booking_date" name="booking_date" type="date" required />
              </div>
              <div className="grid gap-2">
                <label className="text-xs text-[color:var(--muted)]" htmlFor="booking_time">
                  Preferred Time
                </label>
                <input className="input-field" id="booking_time" name="booking_time" type="time" required />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="service_pick">
                Service
              </label>
              <select
                className="input-field"
                id="service_pick"
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
                required
              >
                {bookingServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.label} ({CURRENCY.format(service.price)})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="vehicle_pick">
                Vehicle
              </label>
              <select
                className="input-field"
                id="vehicle_pick"
                value={vehicleId}
                onChange={(event) => setVehicleId(event.target.value)}
                required
              >
                {vehicleTypes.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="address">
                Address
              </label>
              <input
                className="input-field"
                id="address"
                name="address"
                placeholder="Street address, city, ZIP"
                required
              />
            </div>

            <fieldset className="grid gap-2 rounded-[14px] border border-[color:var(--line)] p-3">
              <legend className="px-1 text-xs text-[color:var(--muted)]">Add-ons</legend>
              <div className="grid gap-2 text-sm text-[color:var(--muted)]">
                {bookingAddons.map((addon) => {
                  const checked = addonIds.includes(addon.id);

                  return (
                    <label key={addon.id} className="flex cursor-pointer items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAddon(addon.id)}
                        />
                        <span>{addon.label}</span>
                      </span>
                      <span>{CURRENCY.format(addon.price)}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-2">
              <label className="text-xs text-[color:var(--muted)]" htmlFor="booking_notes">
                Notes
              </label>
              <textarea
                className="input-field min-h-[100px]"
                id="booking_notes"
                name="booking_notes"
                placeholder="Address, parking notes, or anything else we should know"
              />
            </div>

            <button className="btn btn-primary" type="submit" disabled={!bookingEndpoint}>
              Request booking ({CURRENCY.format(total)})
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
