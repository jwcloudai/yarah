import { Globe2, Swords, Crown } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span
        className="h-px w-16 md:w-24"
        style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
      />
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--gold)" }}
      />
      <span
        className="text-xs md:text-sm tracking-[0.4em] uppercase font-semibold"
        style={{ color: "var(--gold)" }}
      >
        {children}
      </span>
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--gold)" }}
      />
      <span
        className="h-px w-16 md:w-24"
        style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
      <span className="h-px w-10" style={{ background: "var(--gold)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
    </div>
  );
}

function Quote({ side }: { side: "left" | "right" }) {
  return (
    <span
      className={`font-display text-7xl md:text-8xl leading-none select-none ${
        side === "left" ? "" : "rotate-180 inline-block"
      }`}
      style={{ color: "color-mix(in oklab, var(--gold) 55%, transparent)" }}
      aria-hidden
    >
      “
    </span>
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
    color: "var(--gold)",
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
      style={{ background: "var(--navy)", color: "var(--canvas)" }}
    >

      <div className="mx-auto max-w-5xl px-6">
        {/* ============ VISION ============ */}
        <SectionLabel>Vision Statement</SectionLabel>

        <h2
          className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.15]"
          style={{ color: "var(--canvas)" }}
        >
          A <span style={{ color: "var(--crimson)" }}>Global</span>,{" "}
          <span style={{ color: "var(--gold)" }}>Unshakeable</span> Generation —
          <br />
          Sons and Daughters of{" "}
          <span style={{ color: "var(--crimson)" }}>Light</span>
        </h2>

        <Divider />

        <div className="relative mt-6">
          <div className="absolute -top-4 -left-2 md:-left-6">
            <Quote side="left" />
          </div>
          <p
            className="font-display italic text-lg md:text-xl leading-relaxed text-center px-6 md:px-16"
            style={{ color: "color-mix(in oklab, var(--canvas) 88%, transparent)" }}
          >
            "To raise a{" "}
            <strong style={{ color: "var(--canvas)" }}>
              global, unshakeable, and matured generation
            </strong>{" "}
            of the Sons and Daughters of Light —{" "}
            <strong style={{ color: "var(--canvas)" }}>
              anchored in God's love, filled with the Holy Spirit
            </strong>
            , and operating with the{" "}
            <strong style={{ color: "var(--canvas)" }}>mind of Christ</strong>. We are
            set apart to equip children and adults with{" "}
            <strong style={{ color: "var(--canvas)" }}>
              Kingdom wisdom, prophetic insight
            </strong>
            , and{" "}
            <strong style={{ color: "var(--canvas)" }}>practical survival skills</strong>{" "}
            to conquer deception, preserve life, and{" "}
            <strong style={{ color: "var(--canvas)" }}>
              enforce God's authority on earth
            </strong>{" "}
            — boldly prepared to present the{" "}
            <strong style={{ color: "var(--gold)" }}>
              Lord's inheritance
            </strong>{" "}
            to Him at His glorious second coming, and{" "}
            <strong style={{ color: "var(--gold)" }}>
              destined to reign with Christ for one thousand years
            </strong>
            ."
          </p>
          <div className="absolute -bottom-4 -right-2 md:-right-6">
            <Quote side="right" />
          </div>
        </div>

        <p
          className="mt-12 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
          style={{ color: "color-mix(in oklab, var(--canvas) 88%, transparent)" }}
        >
          Yarah Life envisions a world where every child and every believer —
          regardless of age, background, or season of faith — knows{" "}
          <strong style={{ color: "var(--canvas)" }}>
            why they were born, Who they belong to
          </strong>
          , and what role they are called to fulfil in the greatest story ever told.
          We see communities of light rising from every nation: overcomers who are{" "}
          <strong style={{ color: "var(--canvas)" }}>
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
                  background: "color-mix(in oklab, var(--canvas) 6%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "color-mix(in oklab, var(--gold) 18%, transparent)",
                    color: "var(--gold)",
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
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
            className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.15]"
            style={{ color: "var(--canvas)" }}
          >
            Deploying a{" "}
            <span style={{ color: "var(--crimson)" }}>Stage-by-Stage</span> Kingdom
            Academy —
            <br />
            Transforming{" "}
            <span style={{ color: "var(--gold)" }}>Passive Observers</span> into{" "}
            <span style={{ color: "var(--crimson)" }}>Active Christ-Bearers</span>
          </h2>

          <Divider />

          <div className="relative mt-6">
            <div className="absolute -top-4 -left-2 md:-left-6">
              <Quote side="left" />
            </div>
            <p
              className="font-display italic text-lg md:text-xl leading-relaxed text-center px-6 md:px-16"
              style={{ color: "color-mix(in oklab, var(--canvas) 88%, transparent)" }}
            >
              "Yarah Life exists to deliver a{" "}
              <strong style={{ color: "var(--canvas)" }}>
                comprehensive, stage-by-stage interactive discipleship academy
              </strong>{" "}
              — deploying{" "}
              <strong style={{ color: "var(--canvas)" }}>
                720+ structured, Spirit-led lessons
              </strong>{" "}
              that integrate deep scriptural truth, Hebrew roots, the practice of
              His presence, science, and{" "}
              <strong style={{ color: "var(--canvas)" }}>
                practical survival skills
              </strong>
              . By transforming hearts into the image of Christ and awakening a
              wholehearted love for the Lord, we empower children and adults to
              transition from{" "}
              <strong style={{ color: "var(--gold)" }}>
                passive observers into active Christ-bearers
              </strong>
              . Together, we raise faithful stewards who discern the signs of the
              times, walk daily in His presence, and stand fully equipped to{" "}
              <strong style={{ color: "var(--canvas)" }}>
                survive the last days, rescue many alive
              </strong>
              , and{" "}
              <strong style={{ color: "var(--canvas)" }}>
                redeem God's inheritance
              </strong>{" "}
              — ready for the King's return and fully qualified to{" "}
              <strong style={{ color: "var(--gold)" }}>
                reign alongside Him.
              </strong>
              "
            </p>
            <div className="absolute -bottom-4 -right-2 md:-right-6">
              <Quote side="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
