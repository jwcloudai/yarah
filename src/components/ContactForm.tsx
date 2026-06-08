import { JotFormEmbed } from "./JotFormEmbed";

export function ContactForm() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
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
              Get In Touch
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

          <h2
            className="font-display text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Contact <span style={{ color: "var(--crimson)" }}>Yarah Life</span>
          </h2>
          
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--charcoal)", opacity: 0.85 }}
          >
            Have questions about our Kingdom curriculum? Want to support the mission? 
            We'd love to hear from you.
          </p>
        </div>

        {/* JotForm embed */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg p-6 md:p-8"
          style={{
            background: "white",
            border: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)",
          }}
        >
          <JotFormEmbed />
        </div>

        {/* Alternative contact info */}
        <div className="mt-12 text-center">
          <p
            className="text-sm"
            style={{ color: "var(--charcoal)", opacity: 0.75 }}
          >
            Or email us directly at{" "}
            <a
              href="mailto:info@yarahlife.com"
              className="font-semibold hover:underline"
              style={{ color: "var(--crimson)" }}
            >
              info@yarahlife.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
