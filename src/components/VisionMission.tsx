import { Globe2, Swords, Crown } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span
        className="h-px w-20 md:w-28"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
      <span style={{ color: "var(--crimson)" }}>✦</span>
      <span
        className="text-xs md:text-sm tracking-[0.4em] uppercase font-semibold"
        style={{ color: "var(--navy)" }}
      >
        {children}
      </span>
      <span style={{ color: "var(--crimson)" }}>✦</span>
      <span
        className="h-px w-20 md:w-28"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <span className="h-px w-10" style={{ background: "var(--navy)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--crimson)" }} />
      <span className="h-px w-10" style={{ background: "var(--gold)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--navy)" }} />
      <span className="h-px w-10" style={{ background: "color-mix(in oklab, var(--navy) 30%, transparent)" }} />
    </div>
  );
}

function QuoteCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-md mt-8 px-8 md:px-14 py-10 md:py-12"
      style={{
        background: "#FBF1DD",
        borderLeft: "4px solid var(--gold)",
      }}
    >
      <span
        className="absolute top-3 left-4 font-display select-none"
        aria-hidden
        style={{
          color: "color-mix(in oklab, var(--gold) 75%, transparent)",
          fontSize: "3.5rem",
          lineHeight: 1,
        }}
      >
        “
      </span>
      <p
        className="font-display italic text-base md:text-lg leading-relaxed text-center"
        style={{ color: "color-mix(in oklab, var(--charcoal) 90%, transparent)" }}
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
    color: "var(--crimson)",
  },
  {
    icon: Swords,
    title: "Unshakeable Authority",
    body: "Operating with the mind of Christ — conquering deception and enforcing God's Kingdom on earth.",
    color: "var(--navy)",
  },
  {
    icon: Crown,
    title: "Destined to Reign",
    body: "Fully qualified to present the Lord's inheritance to Him and reign with Christ for one thousand years.",
    color: "var(--crimson)",
  },
];

export function VisionMission() {
  return (
    <section
      className="relative py-28 md:py-36"
      style={{ background: "var(--canvas)", color: "var(--navy)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* ============ VISION ============ */}
        <SectionLabel>Vision Statement</SectionLabel>

        <h2
          className="font-display text-2xl md:text-3xl font-bold text-center leading-[1.3]"
          style={{ color: "var(--navy)" }}
        >
          A <span style={{ color: "var(--crimson)" }}>Global, Unshakeable</span> Generation —
          <br />
          Sons and Daughters of <span style={{ color: "var(--crimson)" }}>Light</span>
        </h2>

        <Divider />

        <QuoteCard>
          "To raise a{" "}
          <strong style={{ color: "var(--navy)" }}>
            global, unshakeable, and matured generation
          </strong>{" "}
          of the Sons and Daughters of Light —{" "}
          <strong style={{ color: "var(--navy)" }}>
            anchored in God's love, filled with the Holy Spirit
          </strong>
          , and operating with the{" "}
          <strong style={{ color: "var(--navy)" }}>mind of Christ</strong>. We are set
          apart to equip children and adults with{" "}
          <strong style={{ color: "var(--navy)" }}>
            Kingdom wisdom, prophetic insight
          </strong>
          , and{" "}
          <strong style={{ color: "var(--navy)" }}>practical survival skills</strong>{" "}
          to conquer deception, preserve life, and{" "}
          <strong style={{ color: "var(--navy)" }}>
            enforce God's authority on earth
          </strong>{" "}
          — boldly prepared to present the{" "}
          <strong style={{ color: "var(--crimson)" }}>Lord's inheritance</strong> to
          Him at His glorious second coming, and{" "}
          <strong style={{ color: "var(--crimson)" }}>
            destined to reign with Christ for one thousand years."
          </strong>
        </QuoteCard>

        <p
          className="mt-12 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
          style={{ color: "color-mix(in oklab, var(--charcoal) 85%, transparent)" }}
        >
          Yarah Life envisions a world where every child and every believer —
          regardless of age, background, or season of faith — knows{" "}
          <strong style={{ color: "var(--navy)" }}>
            why they were born, Who they belong to
          </strong>
          , and what role they are called to fulfil in the greatest story ever told.
          We see communities of light rising from every nation: overcomers who are{" "}
          <strong style={{ color: "var(--navy)" }}>
            not shaken by the events of the last days
          </strong>{" "}
          because they have been trained, transformed, and trusted with the Kingdom
          of God.
        </p>

        {/* ============ PILLARS ============ */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-7 text-center transition-transform hover:-translate-y-1"
                style={{
                  background: "#fff",
                  border: `1px solid color-mix(in oklab, ${p.color} 25%, transparent)`,
                  boxShadow: "0 10px 30px -18px color-mix(in oklab, var(--navy) 35%, transparent)",
                }}
              >
                <div
                  className="mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: `color-mix(in oklab, ${p.color} 12%, transparent)`,
                    color: p.color,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: p.color }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "color-mix(in oklab, var(--charcoal) 80%, transparent)" }}
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============ MISSION ============ */}
        <div className="mt-28 md:mt-36">
          <SectionLabel>Mission Statement</SectionLabel>

          <h2
            className="font-display text-2xl md:text-3xl font-bold text-center leading-[1.3]"
            style={{ color: "var(--navy)" }}
          >
            Deploying a <span style={{ color: "var(--crimson)" }}>Stage-by-Stage</span>{" "}
            Kingdom Academy —
            <br />
            Transforming{" "}
            <span style={{ color: "var(--crimson)" }}>Passive Observers</span> into{" "}
            <span style={{ color: "var(--crimson)" }}>Active Christ-Bearers</span>
          </h2>

          <Divider />

          <QuoteCard>
            "Yarah Life exists to deliver a{" "}
            <strong style={{ color: "var(--navy)" }}>
              comprehensive, stage-by-stage interactive discipleship academy
            </strong>{" "}
            — deploying{" "}
            <strong style={{ color: "var(--gold)" }}>
              720+ structured, Spirit-led lessons
            </strong>{" "}
            that integrate deep scriptural truth, Hebrew roots, the practice of His
            presence, science, and{" "}
            <strong style={{ color: "var(--navy)" }}>
              practical survival skills.
            </strong>{" "}
            By transforming hearts into the image of Christ and awakening a
            wholehearted love for the Lord, we empower children and adults to
            transition from{" "}
            <strong style={{ color: "var(--crimson)" }}>
              passive observers into active Christ-bearers.
            </strong>{" "}
            Together, we raise faithful stewards who discern the signs of the times,
            walk daily in His presence, and stand fully equipped to{" "}
            <strong style={{ color: "var(--navy)" }}>
              survive the last days, rescue many alive,
            </strong>{" "}
            and{" "}
            <strong style={{ color: "var(--navy)" }}>
              redeem God's inheritance
            </strong>{" "}
            — ready for the King's return and fully qualified to{" "}
            <strong style={{ color: "var(--crimson)" }}>
              reign alongside Him."
            </strong>
          </QuoteCard>
        </div>
      </div>
    </section>
  );
}
