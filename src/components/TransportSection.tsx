import { useMemo, useState, useEffect } from "react";
import { Bus, MapPin, Phone, User, Copy } from "lucide-react";
import { transportStates, type BusStop } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapEmbed } from "@/components/MapEmbed";

function StopCard({ stop }: { stop: BusStop }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => setOpen(false);
    window.addEventListener("hashchange", handleClose);
    window.addEventListener("popstate", handleClose);
    return () => {
      window.removeEventListener("hashchange", handleClose);
      window.removeEventListener("popstate", handleClose);
    };
  }, []);

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft min-w-0 w-full">
      <h4 className="flex items-start gap-2 text-lg text-card-foreground">
        <Bus className="mt-1 h-4 w-4 shrink-0 text-primary" />
        <span className="break-words font-medium">{stop.name}</span>
      </h4>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" /> {stop.area}
      </p>
      <div className="mt-4 space-y-2 text-sm">
        <p className="flex items-center gap-2 text-muted-foreground">
          <User className="h-4 w-4 shrink-0 text-primary" /> {stop.managerName}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${stop.phone}`}
            className="flex items-center gap-2 font-medium text-primary hover:underline"
            title="Click to dial"
          >
            <Phone className="h-4 w-4 shrink-0" /> {stop.phone}
          </a>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(stop.phone);
              toast.success("Phone number copied to clipboard!");
            }}
            className="rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
            title="Copy to clipboard"
            aria-label="Copy phone number"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              View on Map
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">{stop.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {stop.area} · Manager: {stop.managerName} · {stop.phone}
              </p>
              <MapEmbed query={stop.mapQuery} title={stop.name} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function TransportSection() {
  const [state, setState] = useState<string>("");
  const [area, setArea] = useState<string>("");

  const hasData = transportStates.length > 0;

  const selectedState = useMemo(
    () => transportStates.find((s) => s.name === state),
    [state],
  );
  const areas = selectedState?.areas ?? [];
  const selectedArea = useMemo(
    () => areas.find((a) => a.name === area),
    [areas, area],
  );

  return (
    <section id="transport" className="scroll-mt-20 bg-secondary/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Bus Transport
          </p>
          <h2 className="mt-2 flex items-center gap-2.5 text-3xl sm:text-4xl">
            <Bus className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" />
            <span>Find your nearest pickup point</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose a state and area to see available bus stops and contact your bus manager.
          </p>
        </header>

        {!hasData ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <Bus className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 font-medium text-foreground">
              Transport pickup points coming soon
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Bus stop details will appear here once they’re added.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  State
                </label>
                <div className="relative">
                  <Select
                    value={state}
                    onValueChange={(v) => {
                      setState(v);
                      setArea("");
                    }}
                  >
                    <SelectTrigger className="bg-card relative z-0">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {transportStates.map((s) => (
                        <SelectItem key={s.name} value={s.name}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <select
                    className="absolute inset-0 z-10 h-full w-full opacity-0 sm:hidden cursor-pointer disabled:cursor-not-allowed"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setArea("");
                    }}
                    aria-label="Select state"
                  >
                    <option value="" disabled>Select state</option>
                    {transportStates.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Area
                </label>
                <div className="relative">
                  <Select value={area} onValueChange={setArea} disabled={!selectedState}>
                    <SelectTrigger className="bg-card relative z-0">
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((a) => (
                        <SelectItem key={a.name} value={a.name}>
                          {a.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <select
                    className="absolute inset-0 z-10 h-full w-full opacity-0 sm:hidden cursor-pointer disabled:cursor-not-allowed"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    disabled={!selectedState}
                    aria-label="Select area"
                  >
                    <option value="" disabled>Select area</option>
                    {areas.map((a) => (
                      <option key={a.name} value={a.name}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {selectedArea ? (
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {selectedArea.stops.map((stop) => (
                  <StopCard key={stop.id} stop={stop} />
                ))}
              </div>
            ) : (
              <p className="mt-8 text-sm text-muted-foreground">
                {selectedState
                  ? "Select an area to view bus stops."
                  : "Select a state to begin."}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
