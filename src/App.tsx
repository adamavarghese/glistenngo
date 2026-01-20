import { useState } from "react";
import type { FormEvent } from "react";

const steps = [
  { id: 1, label: "1) Vehicle" },
  { id: 2, label: "2) Package" },
  { id: 3, label: "3) Time + Contact" },
];

export default function App() {
  const [step, setStep] = useState(1);
  const year = new Date().getFullYear();

  const goNext = () => setStep((current) => Math.min(3, current + 1));
  const goBack = () => setStep((current) => Math.max(1, current - 1));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};

    formData.forEach((value, key) => {
      if (key === "addons") {
        return;
      }
      payload[key] = value;
    });

    payload.addons = formData.getAll("addons");
    console.log("Booking request", payload);
  };

  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-10 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a className="flex items-center gap-3" href="#" aria-label="Home">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-500 text-lg font-bold text-slate-900 shadow-[0_10px_30px_rgba(34,211,238,0.5)]">
              G
            </div>
            <div className="leading-tight">
              <strong className="block text-base">Glisten N' Go</strong>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Booking
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a className="btn btn-ghost" href="#">
              Back
            </a>
            <a className="btn btn-primary" href="tel:+12015551234">
              Call or Text
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <section className="panel-card">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true"></span>
              <span>Step-by-step, about 2 minutes</span>
              <span className="pill">
                Color match: <span className="text-cyan-600">#28E8F0</span>
              </span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl">Book your detail</h1>
            <p className="mt-2 text-sm text-slate-500">
              Pick vehicle, package, add-ons, then submit your request.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {steps.map((item) => (
                <span
                  key={item.id}
                  className={`step ${step === item.id ? "step-active" : ""}`}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="field-label">Vehicle type</span>
                      <select className="field-input" name="vehicleType" required>
                        <option value="">Select...</option>
                        <option>Sedan / Coupe</option>
                        <option>SUV / Crossover</option>
                        <option>Truck / Van</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="field-label">Town / Area</span>
                      <input
                        className="field-input"
                        name="town"
                        placeholder="e.g., Clifton"
                        required
                      />
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <span>Next: choose a package</span>
                    <button className="btn btn-primary" type="button" onClick={goNext}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <label className="block">
                    <span className="field-label">Package</span>
                    <select className="field-input" name="package" required>
                      <option value="">Select...</option>
                      <option>Exterior Detail</option>
                      <option>Interior Detail</option>
                      <option>Deluxe Package</option>
                    </select>
                  </label>

                  <div>
                    <span className="field-label">Add-ons</span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Wax",
                        "Engine Bay",
                        "Steam",
                        "Ceramic",
                        "Paint Correction",
                      ].map((addon) => (
                        <label key={addon} className="pill cursor-pointer gap-2">
                          <input
                            className="accent-cyan-500"
                            type="checkbox"
                            name="addons"
                            value={addon}
                          />
                          {addon}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button className="btn btn-ghost" type="button" onClick={goBack}>
                      Back
                    </button>
                    <button className="btn btn-primary" type="button" onClick={goNext}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="field-label">Preferred date</span>
                      <input className="field-input" name="date" type="date" required />
                    </label>

                    <label className="block">
                      <span className="field-label">Preferred time window</span>
                      <select className="field-input" name="time" required>
                        <option value="">Select...</option>
                        <option>Morning (9-12)</option>
                        <option>Midday (12-3)</option>
                        <option>Afternoon (3-6)</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="field-label">Name</span>
                      <input
                        className="field-input"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="field-label">Phone</span>
                      <input
                        className="field-input"
                        name="phone"
                        inputMode="tel"
                        placeholder="(201) 555-1234"
                        required
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="field-label">Address + parking notes</span>
                    <textarea
                      className="field-input min-h-[110px]"
                      name="address"
                      placeholder="Street address + notes (gate code, parking, etc.)"
                      required
                    />
                  </label>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button className="btn btn-ghost" type="button" onClick={goBack}>
                      Back
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Submit booking request
                    </button>
                  </div>

                  <p className="text-xs text-slate-500">
                    Demo submission prints to console. Next step: connect to your real
                    booking system.
                  </p>
                </div>
              )}
            </form>
          </section>

          <aside className="space-y-6">
            <div className="panel-card">
              <h3 className="text-xl">What happens next?</h3>
              <p className="mt-2 text-sm text-slate-500">
                After you submit, confirm via call or text, take a deposit, or route into a
                scheduler.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-slate-600">
                <div className="pill">Fast confirmation window</div>
                <div className="pill">We come to you</div>
                <div className="pill">Premium results</div>
                <div className="pill">Prefer text? Use the Call or Text button</div>
              </div>
            </div>

            <div className="panel-card">
              <div className="h-48 rounded-3xl bg-[radial-gradient(circle_at_top,#22d3ee,transparent_65%),radial-gradient(circle_at_bottom,#f97316,transparent_60%)]"></div>
              <p className="mt-4 text-xs text-slate-500">
                Swap this for a before-and-after image or your setup.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="h-px w-full bg-slate-200"></div>
        <div className="pt-4 text-xs text-slate-500">© {year} Glisten N' Go Detailing</div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 border-t border-white/60 bg-white/85 px-6 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <a className="btn btn-ghost" href="tel:+12015551234">
            Call or Text
          </a>
          <a className="btn btn-primary" href="#">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
