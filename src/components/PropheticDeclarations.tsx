import { Crown, ShieldCheck, Sun, Eye } from "lucide-react";

function Label() {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className="h-px w-16 md:w-24" style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
      <span className="text-xs md:text-sm tracking-[0.35em] uppercase font-semibold" style={{ color: "var(--gold)" }}>
        Prophetic Declarations
      </span>
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
      <span className="h-px w-16 md:w-24" style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />
    </div>
  );
}

const items = [
  {
    icon: Crown,
    big: (
      <>
        The <span style={{ color: "var(--gold)" }}>last generation</span> was born to do what every other generation only{" "}
        <span style={{ color: "var(--crimson)" }}>prayed for.</span>
      </>
    ),
    body: "To see the King return — to reign with Him and to enforce His victory on the earth.",
  },
  {
    icon: ShieldCheck,
    big: (
      <>
        The <span style={{ color: "var(--crimson)" }}>mark</span> is coming. The{" "}
        <span style={{ color: "var(--gold)" }}>King</span> is coming. Only one requires your{" "}
        <span style={{ color: "var(--gold)" }}>preparation.</span>
      </>
    ),
    body: "Yarah Life does not raise a generation in fear of the mark — it raises a generation so shaped in Christ that the choice is never in doubt.",
  },
  {
    icon: Sun,
    big: (
      <>
        The <span style={{ color: "var(--gold)" }}>Kingdom of Heaven</span> is not coming to a{" "}
        <span style={{ color: "var(--crimson)" }}>passive generation</span> — it comes through a{" "}
        <span style={{ color: "var(--gold)" }}>prepared one.</span>
      </>
    ),
    body: "Yarah Life raises Sons and Daughters of Light who do not wait for the world to change — they are the change.",
  },
  {
    icon: Eye,
    big: (
      <>
        Every <span style={{ color: "var(--gold)" }}>prophet</span> saw this moment — only{" "}
        <span style={{ color: "var(--crimson)" }}>this generation</span> gets to live it.
      </>
    ),
    body: "The apostles longed for it. The saints died for it. Your children will stand in it — the question is whether they will stand firm.",
  },
];

export function PropheticDeclarations() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--navy)", color: "var(--canvas)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <Label />

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.15] mb-4" style={{ color: "var(--canvas)" }}>
          Four Truths for <span style={{ color: "var(--gold)" }}>This Generation</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mb-14">
          <span className="h-px w-10" style={{ background: "var(--crimson)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-px w-10" style={{ background: "var(--crimson)" }} />
        </div>

        <div className="space-y-8">
          {items.map((it, i) => {
            const Icon = it.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className="relative rounded-2xl p-8 md:p-10"
                style={{
                  background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="h-12 w-12 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: "color-mix(in oklab, var(--gold) 18%, transparent)",
                        color: "var(--gold)",
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className="font-display text-xs tracking-[0.3em] font-bold"
                      style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
                    >
                      {num}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p
                      className="font-display font-bold text-xl md:text-3xl leading-[1.25]"
                      style={{ color: "var(--canvas)" }}
                    >
                      {it.big}
                    </p>
                    <div className="flex items-center gap-3 my-5">
                      <span className="h-px w-10" style={{ background: "var(--gold)" }} />
                      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
                      <span className="h-px w-10" style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }} />
                    </div>
                    <p
                      className="italic text-base md:text-lg leading-relaxed"
                      style={{ color: "color-mix(in oklab, var(--canvas) 82%, transparent)" }}
                    >
                      {it.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
