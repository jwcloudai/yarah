import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { HeroSlider } from "@/components/HeroSlider";
import { ProphecySections } from "@/components/ProphecySections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heritage Academy — Learning, rooted in heritage" },
      {
        name: "description",
        content:
          "Heritage Academy blends classical pedagogy with modern tools. Sponsor a classroom, secure early-bird access, and join a global learning community.",
      },
      { property: "og:title", content: "Heritage Academy" },
      {
        property: "og:description",
        content:
          "Bring world-class classrooms to every child. Heritage roots, modern tools.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      {/* spacer for fixed nav (utility 36 + main 80 + policy ~32) */}
      <div style={{ height: 168 }} />
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2
          className="font-display text-4xl md:text-5xl font-bold max-w-3xl"
          style={{ color: "var(--navy)" }}
        >
          A curriculum that honors{" "}
          <span style={{ color: "var(--crimson)" }}>tradition</span> and shapes{" "}
          <span style={{ color: "var(--emerald)" }}>tomorrow</span>.
        </h2>
        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--charcoal)" }}
        >
          Three tracks. Hundreds of mentors. One mission — to make deep,
          beautiful learning available to every family, on every device, in
          every language.
        </p>
      </section>
    </div>
  );
}
