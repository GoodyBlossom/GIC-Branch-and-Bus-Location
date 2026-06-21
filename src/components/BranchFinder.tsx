import { useMemo, useState } from "react";
import { branches, type Branch } from "@/data/locations";
import { BranchCard } from "@/components/BranchCard";
import { cn } from "@/lib/utils";

type Scope = "Nigeria" | "International";

function groupByRegion(list: Branch[]) {
  const map = new Map<string, Branch[]>();
  for (const b of list) {
    const arr = map.get(b.region) ?? [];
    arr.push(b);
    map.set(b.region, arr);
  }
  return Array.from(map.entries());
}

export function BranchFinder() {
  const [scope, setScope] = useState<Scope>("Nigeria");

  const grouped = useMemo(
    () => groupByRegion(branches.filter((b) => b.scope === scope)),
    [scope],
  );

  const scopes: Scope[] = ["Nigeria", "International"];

  return (
    <section id="branches" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Branch Finder
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Find a church branch near you</h2>
          <p className="mt-3 text-muted-foreground">
            Select a location to see available branches, service times and directions.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Select location"
          className="mt-8 inline-flex rounded-xl border border-border bg-card p-1 shadow-soft"
        >
          {scopes.map((s) => (
            <button
              key={s}
              role="tab"
              aria-selected={scope === s}
              onClick={() => setScope(s)}
              className={cn(
                "rounded-lg px-5 py-2 text-sm font-medium transition-colors",
                scope === s
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-12">
          {grouped.map(([region, list]) => (
            <div key={region}>
              <h3 className="mb-5 flex items-center gap-3 text-xl">
                <span>{region}</span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-sm font-normal text-muted-foreground">
                  {list.length} {list.length === 1 ? "branch" : "branches"}
                </span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {list.map((b) => (
                  <BranchCard key={b.id} branch={b} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
