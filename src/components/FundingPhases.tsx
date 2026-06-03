import { ArrowRight } from "lucide-react";

export function FundingPhases() {
  const progress = 34;

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--navy)", color: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Eyebrow */}
        <div
          className="text-center text-[11px] md:text-xs tracking-[0.4em] uppercase font-semibold mb-4"
          style={{ color: "var(--gold)" }}
        >
          ✦ Three Funding Phases ✦
        </div>

        <h2
          className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.2]"
          style={{ color: "var(--canvas)" }}
        >
          Be Part of Building the Ark.
          <br />
          The Flood Is Coming. The Days Are Few.
        </h2>

        <p
          className="mt-6 font-display italic text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto"
          style={{ color: "color-mix(in oklab, var(--canvas) 78%, transparent)" }}
        >
          We are building in phases. Every milestone reached unlocks the next.
          Your gift today moves us from proof of concept into full Kingdom
          deployment.
        </p>

        {/* PHASE 1 */}
        <div
          className="mt-12 rounded-2xl p-7 md:p-8"
          style={{
            background: "color-mix(in oklab, var(--canvas) 4%, transparent)",
            border: "1px solid var(--gold)",
            boxShadow: "0 20px 50px -25px rgba(0,0,0,0.6)",
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded"
                style={{ background: "var(--crimson)", color: "white" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Live Now
              </span>
              <div
                className="mt-3 text-[11px] tracking-[0.35em] uppercase font-semibold"
                style={{ color: "color-mix(in oklab, var(--canvas) 70%, transparent)" }}
              >
                Phase 1
              </div>
            </div>
            <div className="text-right">
              <div
                className="text-[10px] tracking-[0.3em] uppercase font-semibold"
                style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
              >
                Phase 1 Target
              </div>
              <div
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: "var(--gold)" }}
              >
                $1,000,000
              </div>
            </div>
          </div>

          <h3
            className="font-display text-lg md:text-xl font-bold mb-2"
            style={{ color: "var(--canvas)" }}
          >
            First Two Course Tracks + App MVP
          </h3>
          <p
            className="text-sm md:text-[15px] leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
          >
            Curriculum writing for youth courses 1 &amp; 2, app build (MVP),
            Teacher Mode video for the first 20 lessons, and platform launch
            framework.
          </p>

          {/* Milestone 1A */}
          <div
            className="mt-6 rounded-xl p-6"
            style={{
              background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
              border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className="h-9 w-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{
                    background: "color-mix(in oklab, var(--gold) 20%, transparent)",
                    color: "var(--gold)",
                    border: "1px solid color-mix(in oklab, var(--gold) 45%, transparent)",
                  }}
                >
                  1A
                </span>
                <div>
                  <div
                    className="font-display font-bold text-base md:text-lg"
                    style={{ color: "var(--gold)" }}
                  >
                    Proof of Concept Milestone
                  </div>
                  <div
                    className="text-[10px] tracking-[0.25em] uppercase font-semibold"
                    style={{ color: "color-mix(in oklab, var(--gold) 75%, transparent)" }}
                  >
                    Current Target — Active Now
                  </div>
                </div>
              </div>
              <div
                className="font-display text-2xl md:text-3xl font-bold"
                style={{ color: "var(--gold)" }}
              >
                $100,000
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div
                className="flex flex-wrap items-center justify-between text-[11px] tracking-[0.2em] uppercase font-semibold mb-2"
                style={{ color: "color-mix(in oklab, var(--canvas) 75%, transparent)" }}
              >
                <span>$34,000 raised · 412 supporters · 87 days left</span>
                <span style={{ color: "var(--gold)" }}>{progress}%</span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "color-mix(in oklab, var(--canvas) 10%, transparent)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--crimson), var(--gold))",
                  }}
                />
              </div>
            </div>

            <p
              className="mt-4 text-sm md:text-[15px] leading-relaxed"
              style={{ color: "color-mix(in oklab, var(--canvas) 82%, transparent)" }}
            >
              Validates the vision, builds the founding community, funds the
              first writing team, and demonstrates momentum to larger donors.{" "}
              <strong style={{ color: "var(--crimson)" }}>
                This is where your gift has the greatest early impact.
              </strong>
            </p>
          </div>

          {/* Milestone 1B */}
          <div
            className="mt-4 rounded-xl p-6 opacity-75"
            style={{
              background: "color-mix(in oklab, var(--canvas) 3%, transparent)",
              border: "1px dashed color-mix(in oklab, var(--canvas) 25%, transparent)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className="h-9 w-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{
                    background: "color-mix(in oklab, var(--canvas) 8%, transparent)",
                    color: "color-mix(in oklab, var(--canvas) 70%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--canvas) 25%, transparent)",
                  }}
                >
                  1B
                </span>
                <div>
                  <div
                    className="font-display font-bold text-base md:text-lg"
                    style={{ color: "color-mix(in oklab, var(--canvas) 85%, transparent)" }}
                  >
                    Full Phase 1 Deployment
                  </div>
                  <div
                    className="text-[10px] tracking-[0.25em] uppercase font-semibold"
                    style={{ color: "color-mix(in oklab, var(--canvas) 55%, transparent)" }}
                  >
                    Unlocks After Milestone 1A
                  </div>
                </div>
              </div>
              <div
                className="font-display text-2xl md:text-3xl font-bold"
                style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
              >
                $1,000,000
              </div>
            </div>
            <div
              className="mt-4 text-[10px] tracking-[0.25em] uppercase font-semibold"
              style={{ color: "color-mix(in oklab, var(--canvas) 55%, transparent)" }}
            >
              Activates after $100K milestone is reached
            </div>
            <p
              className="mt-3 text-sm md:text-[15px] leading-relaxed"
              style={{ color: "color-mix(in oklab, var(--canvas) 75%, transparent)" }}
            >
              Completes curriculum writing for both course tracks, full app MVP,
              all Teacher Mode videos for the first 20 lessons, and platform
              infrastructure for launch.
            </p>
          </div>
        </div>

        {/* PHASE 2 */}
        <div
          className="mt-6 rounded-2xl p-7 md:p-8"
          style={{
            background: "color-mix(in oklab, var(--canvas) 4%, transparent)",
            border: "1px solid color-mix(in oklab, var(--canvas) 15%, transparent)",
          }}
        >
          <div
            className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-2"
            style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
          >
            Phase 2
          </div>
          <div
            className="font-display text-3xl md:text-4xl font-bold"
            style={{ color: "var(--gold)" }}
          >
            $7,000,000
          </div>
          <h3
            className="mt-3 font-display text-lg md:text-xl font-bold"
            style={{ color: "var(--canvas)" }}
          >
            Full Six Course Launch + Complete App
          </h3>
          <p
            className="mt-3 text-sm md:text-[15px] leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
          >
            All 720 lessons written, produced, and published across all six
            curriculum tracks. Full app released on iOS, Android, and web.
            Complete Teacher Mode video library. Marketing and platform launch
            at scale.
          </p>
        </div>

        {/* PHASE 3 */}
        <div
          className="mt-6 rounded-2xl p-7 md:p-8"
          style={{
            background: "color-mix(in oklab, var(--canvas) 4%, transparent)",
            border: "1px solid color-mix(in oklab, var(--canvas) 15%, transparent)",
          }}
        >
          <div
            className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-2"
            style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
          >
            Phase 3
          </div>
          <div
            className="font-display text-3xl md:text-4xl font-bold"
            style={{ color: "var(--gold)" }}
          >
            $15,000,000
          </div>
          <h3
            className="mt-3 font-display text-lg md:text-xl font-bold"
            style={{ color: "var(--canvas)" }}
          >
            Global Reach + Hindi, Mandarin &amp; Tamil + 3-Year Runway
          </h3>
          <p
            className="mt-3 text-sm md:text-[15px] leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
          >
            Full translation and cultural adaptation into{" "}
            <strong style={{ color: "var(--canvas)" }}>
              Hindi, Mandarin, and Tamil
            </strong>{" "}
            — reaching the three largest unreached language communities on
            earth. Global digital marketing, church partnership programme, and
            a 3-year operational runway until subscription revenue is fully
            self-sustaining.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center gap-2 px-8 h-14 rounded-full font-bold text-sm md:text-base tracking-[0.1em] uppercase transition-transform hover:scale-[1.03]"
            style={{
              background: "var(--gold)",
              color: "var(--charcoal)",
              boxShadow: "0 14px 32px -10px rgba(253,184,19,0.6)",
            }}
          >
            Give Now — Help Us Hit $100K First
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
