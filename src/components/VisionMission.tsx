import { Globe2, Swords, Crown } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-px w-20 md:w-28" style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--crimson)" }} />
      <span
        className="text-xs md:text-sm tracking-[0.4em] uppercase font-semibold"
        style={{ color: "var(--navy)" }}
      >
        {children}
      </span>
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--crimson)" }} />
      <span className="h-px w-20 md:w-28" style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }} />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <span className="h-px w-8" style={{ background: "var(--navy)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--crimson)" }} />
      <span className="h-px w-8" style={{ background: "var(--gold)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--navy)" }} />
      <span className="h-px w-8" style={{ background: "color-mix(in oklab, var(--navy) 30%, transparent)" }} />
    </div>
  );
}

function QuoteCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mt-8 rounded-md px-8 md:px-16 py-10 md:py-12"
      style={{
        background: "#FBF1DC",
        borderLeft: "6px solid var(--gold)",
        boxShadow: "0 1px 0 color-mix(in oklab, var(--navy) 10%, transparent)",
      }}
    >
      <span
        className="absolute top-3 left-4 font-display text-5xl leading-none select-none"
        style={{ color: "color-mix(in oklab, var(--gold) 85%, var(--navy))" }}
        aria-hidden
      >
        “
      </span>
      <p
        className="font-display italic text-base md:text-lg leading-[1.9] text-center"
        style={{ color: "color-mix(in oklab, var(--charcoal) 92%, transparent)" }}
      >
        {children}
      </p>
    </div>
  );
}

const pillars = [
  {
    icon: Globe2,
    title: "Global Reach",
    body: "Communities of light rising from every nation, every background, every season of faith.",
    color: "var(--navy)",
  },
  {
    icon: Swords,
    title: "Unshakeable Authority",
    body: "Operating with the mind of Christ — conquering deception and enforcing God's Kingdom on earth.",
    color: "var(--crimson)",
  },
  {
    icon: Crown,
    title: "Destined to Reign",
    body: "Fully qualified to present the Lord's inheritance to Him and reign with Christ for one thousand years.",
    color: "var(--gold)",
  },
];

export function VisionMission() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: "var(--canvas)", color: "var(--navy)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* ============ VISION ============ */}
        <SectionLabel>Vision Statement</SectionLabel>

        <h2
          className="font-display text-2xl md:text-4xl font-bold text-center leading-[1.3]"
          style={{ color: "var(--navy)" }}
        >
          A <span style={{ color: "var(--crimson)" }}>Global</span>,{" "}
          <span style={{ color: "var(--crimson)" }}>Unshakeable</span> Generation —
          <br />
          Sons and Daughters of{" "}
          <span style={{ color: "var(--crimson)" }}>Light</span>
        </h2>

        <Divider />

        <QuoteCard>
          "To raise a{" "}
          <strong style={{ color: "var(--navy)" }}>global, unshakeable, and matured generation</strong>{" "}
          of the Sons and Daughters of Light —{" "}
          <strong style={{ color: "var(--navy)" }}>anchored in God's love, filled with the Holy Spirit</strong>,
          and operating with the{" "}
          <strong style={{ color: "var(--navy)" }}>mind of Christ</strong>. We are set apart to equip
          children and adults with{" "}
          <strong style={{ color: "var(--navy)" }}>Kingdom wisdom, prophetic insight</strong>, and{" "}
          <strong style={{ color: "var(--navy)" }}>practical survival skills</strong> to conquer deception,
          preserve life, and{" "}
          <strong style={{ color: "var(--navy)" }}>enforce God's authority on earth</strong> — boldly
          prepared to present the{" "}
          <strong style={{ color: "var(--crimson)" }}>Lord's inheritance</strong> to Him at His glorious
          second coming, and{" "}
          <strong style={{ color: "var(--crimson)" }}>destined to reign with Christ for one thousand years.</strong>"
        </QuoteCard>

        {/* ============ PILLARS ============ */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-lg p-6 text-center transition-transform hover:-translate-y-1"
                style={{
                  background: "#fff",
                  border: `1px solid color-mix(in oklab, ${p.color} 25%, transparent)`,
                  boxShadow: "0 10px 24px -18px color-mix(in oklab, var(--navy) 40%, transparent)",
                }}
              >
                <div
                  className="mx-auto h-11 w-11 rounded-full flex items-center justify-center mb-3"
                  style={{ background: `color-mix(in oklab, ${p.color} 14%, transparent)`, color: p.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: p.color }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--charcoal) 80%, transparent)" }}>
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============ MISSION ============ */}
        <div className="mt-24 md:mt-32">
          <SectionLabel>Mission Statement</SectionLabel>

          <h2
            className="font-display text-2xl md:text-4xl font-bold text-center leading-[1.3]"
            style={{ color: "var(--navy)" }}
          >
            Deploying a{" "}
            <span style={{ color: "var(--crimson)" }}>Stage-by-Stage</span> Kingdom Academy —
            <br />
            Transforming{" "}
            <span style={{ color: "var(--crimson)" }}>Passive Observers</span> into{" "}
            <span style={{ color: "var(--crimson)" }}>Active Christ-Bearers</span>
          </h2>

          <Divider />

          <QuoteCard>
            "Yarah Life exists to deliver a{" "}
            <strong style={{ color: "var(--navy)" }}>comprehensive, stage-by-stage interactive discipleship academy</strong>{" "}
            — deploying{" "}
            <strong style={{ color: "var(--navy)" }}>720+ structured, Spirit-led lessons</strong> that
            integrate deep scriptural truth, Hebrew roots, the practice of His presence, science, and{" "}
            <strong style={{ color: "var(--navy)" }}>practical survival skills.</strong> By transforming
            hearts into the image of Christ and awakening a wholehearted love for the Lord, we empower
            children and adults to transition from{" "}
            <strong style={{ color: "var(--crimson)" }}>passive observers into active Christ-bearers.</strong>{" "}
            Together, we raise faithful stewards who discern the signs of the times, walk daily in His
            presence, and stand fully equipped to{" "}
            <strong style={{ color: "var(--navy)" }}>survive the last days, rescue many alive,</strong> and{" "}
            <strong style={{ color: "var(--navy)" }}>redeem God's inheritance</strong> — ready for the
            King's return and fully qualified to{" "}
            <strong style={{ color: "var(--crimson)" }}>reign alongside Him."</strong>
          </QuoteCard>
        </div>
      </div>
    </section>
  );
}
