import { useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import type { Branch } from "@/data/locations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapEmbed } from "@/components/MapEmbed";

function ServiceTimes({ branch }: { branch: Branch }) {
  if (!branch.serviceTimes?.length) return null;
  return (
    <ul className="space-y-1.5">
      {branch.serviceTimes.map((s) => (
        <li key={s.label} className="flex gap-2 text-sm">
          <span className="min-w-0 shrink-0 font-medium text-foreground">{s.label}:</span>
          <span className="min-w-0 text-muted-foreground">{s.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function BranchCard({ branch }: { branch: Branch }) {
  const [open, setOpen] = useState(false);
  const place = branch.address ?? branch.venue ?? "";

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-card">
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg text-card-foreground">{branch.name}</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">{branch.location}</span>
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {branch.serviceTimes?.length ? (
          <div className="flex gap-2.5">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <ServiceTimes branch={branch} />
          </div>
        ) : null}

        <p className="flex gap-2.5 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{place}</span>
        </p>
      </div>

      <div className="mt-5 pt-1">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">{branch.name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-5">
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {branch.location}
              </p>

              {branch.serviceTimes?.length ? (
                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Clock className="h-4 w-4 text-primary" /> Service Times
                  </h4>
                  <ServiceTimes branch={branch} />
                </div>
              ) : null}

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {branch.address ? "Address" : "Venue"}
                </h4>
                <p className="text-sm text-muted-foreground">{place}</p>
              </div>

              {branch.enquiries?.length ? (
                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Phone className="h-4 w-4 text-primary" /> Enquiries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.enquiries.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              <MapEmbed query={branch.mapQuery} title={branch.name} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}
