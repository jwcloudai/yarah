import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { ContactPage } from "@/components/ContactPage";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="h-[120px] sm:h-[168px]" />
      <ContactPage />
      <Footer />
    </div>
  );
}
