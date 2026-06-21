import { Bus, MapPin } from "lucide-react";


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">


          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Branch & Transport Locator
          </span>

          <h1 className="mt-5 text-4xl leading-tight text-balance sm:text-5xl">
            Find Global Impact Church branch and transport pickup point
          </h1>

          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Locate the nearest branch, check service times, and find the bus stop
            closest to you — all in one simple place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#branches"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              <MapPin className="h-4 w-4" /> Find a Branch
            </a>
            <a
              href="#transport"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Bus className="h-4 w-4 text-primary" /> Bus Transport
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
