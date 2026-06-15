import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SupportHero } from "@/components/SupportHero";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/support")({
  component: Support,
});

function Support() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="h-[120px] sm:h-[168px]" />
      <SupportHero />
      <Footer />
    </div>
  );
}
