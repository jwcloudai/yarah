import { BookOpen, Users, Home, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    color: "var(--crimson)",
    title: "720+ Lessons per Course",
    body: "Deep, structured, and sequenced — Kingdom shaping unto maturity across years.",
  },
  {
    icon: Users,
    color: "var(--gold)",
    title: "Every Age, Every Stage",
    body: "From 6-year-olds to lifelong believers — no one is left behind or outgrown.",
  },
  {
    icon: Home,
    color: "color-mix(in oklab, var(--canvas) 80%, var(--navy))",
    title: "Teacher & Student Modes",
    body: "Works in classrooms, homeschools, churches, and homes — fully flexible.",
  },
  {
    icon: Sparkles,
    color: "#7FD27F",
    title: "Whole-Person Formation",
    body: "Mind, heart, spirit, and practical survival skills — total Kingdom education.",
  },
];

export function CommissioningCurriculum() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--navy)", color: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
          <span
            className="h-px w-16 md:w-24"
            style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }}
          />
          <span
            className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Why Yarah Life — The Commissioning
          </span>
          <span
            className="h-px w-16 md:w-24"
            style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }}
          />
          <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
        </div>

        <h2
          className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.2]"
          style={{ color: "var(--canvas)" }}
        >
          Not Just a Curriculum —{" "}
          <span style={{ color: "var(--gold)" }}>A Commissioning</span>
        </h2>

        <div className="flex items-center justify-center gap-1.5 mt-5 mb-10">
          <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--crimson)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--gold)" }} />
        </div>

        <p
          className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
          style={{ color: "color-mix(in oklab, var(--canvas) 88%, transparent)" }}
        >
          Yarah Life bridges the gap between{" "}
          <strong style={{ color: "var(--gold)" }}>
            passive church attendance
          </strong>{" "}
          and{" "}
          <strong style={{ color: "var(--gold)" }}>
            active Kingdom leadership.
          </strong>{" "}
          We teach your children how to{" "}
          <strong style={{ color: "var(--canvas)" }}>love the Lord alone,</strong>{" "}
          walk seamlessly in the Holy Spirit,{" "}
          <strong style={{ color: "var(--canvas)" }}>
            think exactly how God thinks
          </strong>{" "}
          in every crisis, and develop a{" "}
          <strong style={{ color: "var(--canvas)" }}>
            face-to-face relationship with the Almighty
          </strong>{" "}
          — because the call to know God is both eternal and immediately urgent.
        </p>

        {/* YARAH meaning card */}
        <div
          className="mt-12 rounded-2xl px-8 py-10 text-center"
          style={{
            background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
          }}
        >
          <div
            className="font-display text-2xl md:text-3xl mb-1"
            style={{ color: "var(--gold)" }}
          >
            יָרָה
          </div>
          <div
            className="font-display text-xl md:text-2xl font-bold tracking-[0.3em]"
            style={{ color: "var(--canvas)" }}
          >
            YARAH
          </div>
          <p
            className="mt-5 font-display italic text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "color-mix(in oklab, var(--canvas) 85%, transparent)" }}
          >
            The Hebrew word{" "}
            <strong className="not-italic" style={{ color: "var(--gold)" }}>
              Yarah (יָרָה)
            </strong>{" "}
            means to teach, to instruct, to throw light upon — the same root from
            which{" "}
            <strong className="not-italic" style={{ color: "var(--gold)" }}>
              Torah
            </strong>{" "}
            is derived. This is not just a curriculum.{" "}
            <strong className="not-italic" style={{ color: "var(--canvas)" }}>
              It is a commissioning.
            </strong>
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-10 space-y-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl px-8 py-7 text-center transition-transform hover:-translate-y-0.5"
                style={{
                  background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--canvas) 10%, transparent)",
                  borderTop: `3px solid ${f.color}`,
                }}
              >
                <div
                  className="mx-auto h-10 w-10 rounded-full flex items-center justify-center mb-3"
                  style={{
                    background: `color-mix(in oklab, ${f.color} 18%, transparent)`,
                    color: f.color,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="font-display text-base md:text-lg font-bold mb-2"
                  style={{ color: f.color }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto"
                  style={{ color: "color-mix(in oklab, var(--canvas) 85%, transparent)" }}
                >
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Scripture pull-quote */}
        <div
          className="mt-12 rounded-2xl px-8 py-10 text-center"
          style={{
            background: "color-mix(in oklab, var(--canvas) 4%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 20%, transparent)",
          }}
        >
          <p
            className="font-display italic text-lg md:text-xl leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--canvas) 92%, transparent)" }}
          >
            "The people who know their God shall be strong, and carry out great
            exploits."
          </p>
          <div
            className="mt-5 text-[11px] tracking-[0.4em] uppercase font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Daniel 11:32 · NKJV
          </div>
        </div>
      </div>
    </section>
  );
}
