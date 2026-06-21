import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { BranchFinder } from "@/components/BranchFinder";
import { TransportSection } from "@/components/TransportSection";
import { SiteFooter } from "@/components/SiteFooter";

const title = "The Goodland — Church Branch & Transport Locator";
const description =
  "Find church branches across Nigeria and internationally, view service times, and locate the bus transport pickup point nearest to you.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <BranchFinder />
        <TransportSection />
      </main>
      <SiteFooter />
    </div>
  );
}
