import { useState, useEffect } from "react";
import { Clock, MapPin, Phone, Copy } from "lucide-react";
import type { Branch } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
    <ul className="space-y-1.5 flex-1 min-w-0">
      {branch.serviceTimes.map((s) => (
        <li key={s.label} className="flex gap-2 text-sm min-w-0">
          <span className="min-w-0 shrink-0 font-medium text-foreground">{s.label}:</span>
          <span className="flex-1 min-w-0 text-muted-foreground break-words">{s.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function BranchCard({ branch }: { branch: Branch }) {
  const [open, setOpen] = useState(false);
  const place = branch.address ?? branch.venue ?? "";

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
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-card min-w-0 w-full">
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg text-card-foreground break-words">{branch.name}</h3>
          <p className="mt-0.5 flex items-start gap-1.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="break-words">{branch.location}</span>
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3 min-w-0">
        {branch.serviceTimes?.length ? (
          <div className="flex gap-2.5 min-w-0">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <ServiceTimes branch={branch} />
          </div>
        ) : null}

        <p className="flex gap-2.5 text-sm text-muted-foreground min-w-0">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span className="flex-1 min-w-0 break-words">{place}</span>
        </p>
      </div>

      <div className="mt-5 pt-1">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
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
                      <div
                        key={p}
                        className="flex items-center overflow-hidden rounded-lg border border-border bg-secondary"
                      >
                        <a
                          href={`tel:${p}`}
                          className="px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent/50"
                          title="Click to dial"
                        >
                          {p}
                        </a>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(p);
                            toast.success("Phone number copied to clipboard!");
                          }}
                          className="border-l border-border px-2 py-1.5 text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground cursor-pointer"
                          title="Copy to clipboard"
                          aria-label="Copy phone number"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                      </div>
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
