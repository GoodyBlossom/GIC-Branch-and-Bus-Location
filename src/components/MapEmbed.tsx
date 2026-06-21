import { mapEmbedUrl, mapLinkUrl } from "@/data/locations";
import { ExternalLink } from "lucide-react";

type MapEmbedProps = {
  query: string;
  title: string;
};

export function MapEmbed({ query, title }: MapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted">
      <iframe
        title={`Map of ${title}`}
        src={mapEmbedUrl(query)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-56 w-full border-0"
      />
      <a
        href={mapLinkUrl(query)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-1.5 border-t border-border bg-card px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
      >
        Open in Google Maps
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
