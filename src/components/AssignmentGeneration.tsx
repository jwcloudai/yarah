import { Sprout, Cross, Swords, ArrowRight } from "lucide-react";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
      <span
        className="h-px w-20 md:w-32"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
      <span
        className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-semibold"
        style={{ color: "var(--navy)", opacity: 0.75 }}
      >
        The Assignment of This Generation
      </span>
      <span
        className="h-px w-20 md:w-32"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
    </div>
  );
}

function TriDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-5 mb-10">
      <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--crimson)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--crimson)" }} />
      <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--gold)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
      <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--navy)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--navy)" }} />
    </div>
  );
}

const cards = [
  {
    icon: Sprout,
    title: "What Adam Lost",
    color: "var(--crimson)",
    body: "A man surrendered dominion over the earth, its nations, and its children to the enemy.",
  },
  {
    icon: Cross,
    title: "What Jesus Redeemed",
    color: "var(--gold)",
    body: "At the cross and through resurrection, Jesus legally reclaimed everything Adam surrendered — fully.",
  },
  {
    icon: Swords,
    title: "What We Must Enforce",
    color: "var(--navy)",
    body: "Sons and Daughters of Light are assigned to enforce that purchased victory on earth before His return.",
  },
];

export function AssignmentGeneration() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: "var(--canvas)", color: "var(--charcoal)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <Label />

        <h2
          className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.2]"
          style={{ color: "var(--navy)" }}
        >
          What <span style={{ color: "var(--gold)" }}>Adam Lost</span>{" "}
          <span style={{ color: "var(--charcoal)", opacity: 0.5 }}>·</span> What Jesus{" "}
          <span style={{ color: "var(--crimson)" }}>Redeemed</span>{" "}
          <span style={{ color: "var(--charcoal)", opacity: 0.5 }}>·</span> What{" "}
          <span style={{ color: "var(--navy)" }}>We Must Enforce</span>
        </h2>

        <TriDivider />

        <p
          className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
          style={{ color: "var(--charcoal)" }}
        >
          What Adam, a man, lost to the devil —{" "}
          <em style={{ color: "var(--crimson)" }}>
            Jesus redeemed at the cross.
          </em>{" "}
          But what was{" "}
          <strong>lost by mankind must be reclaimed by mankind.</strong> What
          Jesus purchased through His resurrection must be{" "}
          <strong>enforced by the Sons and Daughters of Light</strong> so that
          God's Kingdom can fully come. That is your child's calling. That is
          your calling.
        </p>

        {/* Cards */}
        <div className="mt-14 space-y-5">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div key={c.title}>
                <div
                  className="rounded-2xl px-8 py-8 text-center transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "var(--canvas)",
                    border: `1px solid color-mix(in oklab, ${c.color} 35%, transparent)`,
                    boxShadow: `0 10px 30px -20px color-mix(in oklab, ${c.color} 50%, transparent)`,
                  }}
                >
                  <div
                    className="mx-auto h-10 w-10 flex items-center justify-center mb-3"
                    style={{ color: c.color }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3
                    className="font-display text-lg font-bold mb-2"
                    style={{ color: c.color }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {c.body}
                  </p>
                </div>
                {idx < cards.length - 1 && (
                  <div className="flex items-center justify-center py-3">
                    <ArrowRight
                      className="h-5 w-5"
                      style={{ color: "var(--gold)" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
