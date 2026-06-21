import { Facebook, Instagram, Youtube } from "lucide-react";
import { churchName, socialLinks } from "@/data/locations";

const socials = [
  { href: socialLinks.instagram, label: "Instagram", Icon: Instagram },
  { href: socialLinks.facebook, label: "Facebook", Icon: Facebook },
  { href: socialLinks.youtube, label: "YouTube", Icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Global Impact Church logo" className="h-14 w-14 object-contain" />
          <p className="font-display text-xl font-semibold">{churchName}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-5 py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {churchName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
