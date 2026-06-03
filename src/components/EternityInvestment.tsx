import { Clock, GraduationCap, Crown } from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <span className="h-1 w-1 rotate-45" style={{ background: "var(--gold)" }} />
      <span
        className="h-px w-12"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
      <span
        className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-bold"
        style={{ color: "var(--crimson)" }}
      >
        {children}
      </span>
      <span
        className="h-px w-12"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
      <span className="h-1 w-1 rotate-45" style={{ background: "var(--gold)" }} />
    </div>
  );
}

export function EternityInvestment() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Top label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
          <span
            className="h-px w-16 md:w-24"
            style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
          />
          <span
            className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-semibold"
            style={{ color: "var(--navy)", opacity: 0.75 }}
          >
            Educating for Eternity, Not Just a Lifespan
          </span>
          <span
            className="h-px w-16 md:w-24"
            style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
          />
          <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
        </div>

        <h2
          className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.2]"
          style={{ color: "var(--navy)" }}
        >
          12 Years for{" "}
          <span style={{ color: "var(--gold)" }}>70 Years of Life</span> —
          <br />
          How Much More for{" "}
          <span style={{ color: "var(--crimson)" }}>
            Millions of Years of Reign?
          </span>
        </h2>

        <div className="flex items-center justify-center gap-1.5 mt-5 mb-10">
          <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--crimson)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--navy)" }} />
        </div>

        <p
          className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
          style={{ color: "var(--charcoal)" }}
        >
          As parents and leaders, we willingly send our children to school for at
          least <strong>12 long years</strong> to prepare them for an earthly
          career that lasts barely <strong>70 years.</strong> How much more must
          we invest in equipping them for{" "}
          <em style={{ color: "var(--crimson)" }}>
            an eternal life that spans millions of years
          </em>{" "}
          — as{" "}
          <strong>
            ruling co-heirs with Christ in the eternal Kingdom?
          </strong>
        </p>

        {/* Two comparison cards */}
        <div className="mt-14 space-y-6">
          {/* Card 1 - current investment */}
          <div
            className="rounded-2xl px-8 py-10 text-center"
            style={{
              background: "var(--canvas)",
              border: "1px solid color-mix(in oklab, var(--navy) 18%, transparent)",
              boxShadow: "0 10px 30px -20px rgba(15,23,55,0.35)",
            }}
          >
            <Eyebrow>What We Currently Invest</Eyebrow>
            <div
              className="font-display text-6xl md:text-7xl font-bold leading-none my-3"
              style={{ color: "var(--navy)" }}
            >
              12
            </div>
            <div
              className="text-[11px] tracking-[0.4em] uppercase font-semibold mb-4"
              style={{ color: "var(--charcoal)", opacity: 0.7 }}
            >
              Years of School
            </div>
            <div className="flex items-center justify-center gap-2 mb-3" style={{ color: "var(--navy)" }}>
              <GraduationCap className="h-5 w-5" />
            </div>
            <p
              className="text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto"
              style={{ color: "var(--charcoal)" }}
            >
              Preparing children for approximately 70 years of natural earthly
              life — a career, a livelihood, a season.
            </p>
          </div>

          {/* Card 2 - greater investment */}
          <div
            className="rounded-2xl px-8 py-10 text-center"
            style={{
              background: "var(--navy)",
              border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
              boxShadow: "0 20px 50px -25px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-1 w-1 rotate-45" style={{ background: "var(--gold)" }} />
              <span className="h-px w-12" style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }} />
              <span
                className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-bold"
                style={{ color: "var(--crimson)" }}
              >
                What Demands Greater Investment
              </span>
              <span className="h-px w-12" style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }} />
              <span className="h-1 w-1 rotate-45" style={{ background: "var(--gold)" }} />
            </div>
            <div
              className="font-display text-5xl md:text-7xl font-bold leading-none my-3"
              style={{ color: "var(--gold)" }}
            >
              Millions
            </div>
            <div
              className="text-[11px] tracking-[0.4em] uppercase font-semibold mb-4"
              style={{ color: "color-mix(in oklab, var(--canvas) 75%, transparent)" }}
            >
              Years of Reign
            </div>
            <div className="flex items-center justify-center gap-2 mb-3" style={{ color: "var(--gold)" }}>
              <Crown className="h-5 w-5" />
            </div>
            <p
              className="text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto"
              style={{ color: "color-mix(in oklab, var(--canvas) 88%, transparent)" }}
            >
              Reigning as co-heirs with Christ across cities, nations, and an
              eternal Kingdom with no end.
            </p>
          </div>

          {/* Timeline callout */}
          <div
            className="rounded-2xl px-8 py-7 flex items-start gap-4"
            style={{
              background: "color-mix(in oklab, var(--crimson) 6%, var(--canvas))",
              border: "1px solid color-mix(in oklab, var(--crimson) 30%, transparent)",
              borderLeft: "4px solid var(--crimson)",
            }}
          >
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{
                background: "color-mix(in oklab, var(--crimson) 15%, transparent)",
                color: "var(--crimson)",
              }}
            >
              <Clock className="h-5 w-5" />
            </div>
            <p
              className="text-sm md:text-[15px] leading-relaxed"
              style={{ color: "var(--charcoal)" }}
            >
              <strong style={{ color: "var(--navy)" }}>
                God's timeline is precise.
              </strong>{" "}
              Israel will not see the second Jubilee of{" "}
              <strong style={{ color: "var(--crimson)" }}>2067.</strong> The
              generation alive <em>today</em> must be ready — not tomorrow, not
              eventually. Yarah Life was created because this preparation cannot
              wait. It cannot be left to chance, to one Sunday a week, or to
              secular systems that do not know the King.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
