import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { churchName } from "@/data/locations";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { href: "#branches", label: "Branches" },
  { href: "#transport", label: "Transport" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl">
            <img src="/logo.png" alt="Global Impact Church logo" className="h-full w-full object-contain" />
          </span>
          <span className="truncate font-display text-lg font-semibold">{churchName}</span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground transition-colors hover:bg-secondary sm:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>


      <div
        className={cn(
          "overflow-hidden border-t border-border transition-all sm:hidden",
          open ? "max-h-40" : "max-h-0 border-t-0",
        )}
      >
        <nav className="mx-auto flex max-w-5xl flex-col px-5 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
