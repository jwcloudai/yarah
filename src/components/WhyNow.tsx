import { Bird, Flame, Hourglass } from "lucide-react";

function Label() {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-px w-16 md:w-24" style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
      <span className="text-xs md:text-sm tracking-[0.35em] uppercase font-semibold" style={{ color: "var(--gold)" }}>
        The Urgent Call &amp; Signs of the Times
      </span>
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
      <span className="h-px w-16 md:w-24" style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />
    </div>
  );
}

const signs = [
  {
    icon: Bird,
    color: "var(--crimson)",
    title: "Israel — God's Signpost",
    body: "Wars beginning and ending on God's sacred feasts confirm history is moving precisely on His prophetic calendar.",
  },
  {
    icon: Flame,
    color: "var(--gold)",
    title: "The Age of Sons of Light",
    body: "The Feast of Tabernacles has officially ushered in the era the Scriptures call the Age of the Sons of Light.",
  },
  {
    icon: Hourglass,
    color: "var(--canvas)",
    title: "The 2067 Deadline",
    body: "The timeline is narrowing. Israel will not see the second Jubilee of 2067. The preparation window is finite.",
  },
];

export function WhyNow() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--navy)", color: "var(--canvas)" }}>
      <div className="mx-auto max-w-3xl px-6">
        <Label />

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.15]" style={{ color: "var(--canvas)" }}>
          Why <span style={{ color: "var(--gold)" }}>Yarah Life?</span> Why{" "}
          <span style={{ color: "var(--crimson)" }}>Now?</span>
        </h2>

        <div className="flex items-center justify-center gap-2 my-6">
          <span className="h-px w-10" style={{ background: "var(--crimson)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-px w-10" style={{ background: "var(--crimson)" }} />
        </div>

        <p
          className="font-display italic text-base md:text-lg leading-relaxed text-center mt-6"
          style={{ color: "color-mix(in oklab, var(--canvas) 90%, transparent)" }}
        >
          We are the <strong style={{ color: "var(--gold)" }}>most privileged generation</strong> that has ever walked the earth — and the{" "}
          <strong style={{ color: "var(--crimson)" }}>most urgently called.</strong> Every sign that Jesus and the prophets spoke of concerning the last days is unfolding before our eyes. The generation alive today will stand at the{" "}
          <strong style={{ color: "var(--gold)" }}>greatest crossroads in human history</strong> — and they are called to prepare the way for the second coming of Christ.
        </p>

        <div className="mt-10 space-y-4">
          {signs.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-xl p-6 text-center"
                style={{
                  background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
                  borderTop: `3px solid ${s.color}`,
                  border: "1px solid color-mix(in oklab, var(--canvas) 12%, transparent)",
                  borderTopWidth: "3px",
                  borderTopColor: s.color,
                }}
              >
                <Icon className="h-7 w-7 mx-auto mb-3" style={{ color: s.color }} />
                <h3 className="font-display font-bold text-sm mb-2" style={{ color: s.color }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}>
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-10 rounded-xl py-8 px-6 text-center"
          style={{
            background: "color-mix(in oklab, var(--canvas) 4%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
          }}
        >
          <p className="font-display italic text-base md:text-lg leading-relaxed" style={{ color: "color-mix(in oklab, var(--canvas) 90%, transparent)" }}>
            "The children sitting in our living rooms today are the very generation tasked with fighting the{" "}
            <strong style={{ color: "var(--gold)" }}>ultimate spiritual and physical battles</strong> to claim the{" "}
            <strong style={{ color: "var(--crimson)" }}>Lord's inheritance</strong> before He returns to reign —{" "}
            <strong style={{ color: "var(--gold)" }}>and the time to prepare them is now.</strong>"
          </p>
        </div>
      </div>
    </section>
  );
}
