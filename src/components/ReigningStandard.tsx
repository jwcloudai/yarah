import { AlertTriangle } from "lucide-react";

export function ReigningStandard() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="rounded-2xl px-8 md:px-12 py-10 md:py-12"
          style={{
            background: "var(--navy)",
            border: "1px solid color-mix(in oklab, var(--gold) 20%, transparent)",
            boxShadow: "0 20px 50px -25px rgba(0,0,0,0.5)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle
              className="h-3.5 w-3.5"
              style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
            />
            <span
              className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Revelation 20:4–6 — The Reigning Standard
            </span>
            <AlertTriangle
              className="h-3.5 w-3.5"
              style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
            />
          </div>

          {/* Body */}
          <p
            className="font-display italic text-base md:text-lg leading-relaxed text-center"
            style={{ color: "color-mix(in oklab, var(--canvas) 92%, transparent)" }}
          >
            Only those who{" "}
            <strong className="not-italic" style={{ color: "var(--crimson)" }}>
              refuse the mark of the beast
            </strong>{" "}
            and remain{" "}
            <strong className="not-italic" style={{ color: "var(--canvas)" }}>
              faithful to Jesus' testimony
            </strong>{" "}
            will reign with Him on{" "}
            <strong className="not-italic" style={{ color: "var(--canvas)" }}>
              thrones of judgement.
            </strong>{" "}
            The mark — a chip in the right hand or forehead controlling every
            transaction and identity — is{" "}
            <strong className="not-italic" style={{ color: "var(--crimson)" }}>
              not distant prophecy.
            </strong>{" "}
            It is the horizon our children are walking toward. They need to be
            prepared with{" "}
            <strong className="not-italic" style={{ color: "var(--gold)" }}>
              faith, wisdom, and the fullness of the Holy Spirit.
            </strong>
          </p>

          {/* Citation */}
          <div
            className="mt-8 text-[11px] tracking-[0.4em] uppercase font-semibold text-center"
            style={{ color: "color-mix(in oklab, var(--gold) 70%, transparent)" }}
          >
            Revelation 20:4–6
          </div>
        </div>
      </div>
    </section>
  );
}
