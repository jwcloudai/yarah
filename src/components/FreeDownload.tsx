import { useState, type FormEvent } from "react";
import { BookMarked, Mail, Bell, Heart, Download, FileText } from "lucide-react";

const benefits = [
  { icon: BookMarked, title: "Free Prophetic Document" },
  { icon: Mail, title: "Weekly Kingdom Updates" },
  { icon: Bell, title: "Course Launch Alerts" },
  { icon: Heart, title: "Survival Prep Resources" },
];

const tags = [
  "Israel's Timeline",
  "Last Days Signs",
  "Three Groups",
  "2067 Jubilee",
  "How to Prepare",
];

export function FreeDownload() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="py-24 md:py-32" style={{ background: "var(--canvas)" }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
          <span className="hidden sm:block h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
          <span
            className="hidden sm:block h-px w-16 md:w-24"
            style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
          />
          <span
            className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase font-semibold text-center"
            style={{ color: "var(--navy)", opacity: 0.75 }}
          >
            Free Kingdom Resource — Subscribe &amp; Download
          </span>
          <span
            className="hidden sm:block h-px w-16 md:w-24"
            style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
          />
          <span className="hidden sm:block h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
        </div>

        <h2
          className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.2]"
          style={{ color: "var(--navy)" }}
        >
          Download Free:{" "}
          <span style={{ color: "var(--crimson)" }}>
            The New Era of the Sons of Light
          </span>
        </h2>

        <div className="flex items-center justify-center gap-1.5 mt-5 mb-10">
          <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--crimson)" }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--navy)" }} />
        </div>

        <p
          className="text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto"
          style={{ color: "var(--charcoal)" }}
        >
          Subscribe to our updates and newsletters and receive this{" "}
          <strong>free prophetic document</strong> — a comprehensive guide to
          the new era of the Sons of Light, the signs of the times, and how to
          prepare your household for what is coming.
        </p>

        {/* Document preview card */}
        <div
          className="mt-12 relative rounded-2xl px-8 py-10 text-center overflow-hidden"
          style={{
            background: "var(--navy)",
            border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
            borderLeft: "4px solid var(--crimson)",
            boxShadow: "0 20px 50px -25px rgba(0,0,0,0.5)",
          }}
        >
          <span
            className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase font-bold px-2.5 py-1 rounded"
            style={{ background: "var(--crimson)", color: "white" }}
          >
            Free
          </span>

          <div
            className="mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4"
            style={{
              background: "color-mix(in oklab, var(--gold) 18%, transparent)",
              color: "var(--gold)",
            }}
          >
            <FileText className="h-6 w-6" />
          </div>

          <h3
            className="font-display text-lg md:text-xl font-bold tracking-[0.15em]"
            style={{ color: "var(--canvas)" }}
          >
            THE NEW ERA OF THE SONS OF LIGHT
          </h3>
          <p
            className="mt-3 font-display italic text-sm md:text-base"
            style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
          >
            A Prophetic Word for the Generation Alive at the End of the Age ·
            The Joseph Ministries · Yarah Life
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "color-mix(in oklab, var(--canvas) 8%, transparent)",
                  color: "color-mix(in oklab, var(--canvas) 85%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="mt-10">
          <h3
            className="font-display text-xl md:text-2xl font-bold"
            style={{ color: "var(--navy)" }}
          >
            Subscribe &amp; Receive Your Free Download Instantly
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: "var(--charcoal)" }}>
            Join thousands of{" "}
            <strong>Sons and Daughters of Light</strong> receiving weekly
            prophetic updates, course launch news, and Kingdom preparation
            resources.
          </p>

          {submitted ? (
            <div
              className="mt-6 rounded-xl px-6 py-5 text-center"
              style={{
                background: "color-mix(in oklab, var(--gold) 12%, var(--canvas))",
                border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
                color: "var(--navy)",
              }}
            >
              <strong>Thank you!</strong> Check your inbox for the free
              prophetic document.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-3">
              <input
                type="text"
                required
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="w-full h-12 rounded-xl px-5 text-sm md:text-base outline-none transition-all focus:ring-2"
                style={{
                  background: "var(--canvas)",
                  border: "1px solid color-mix(in oklab, var(--navy) 18%, transparent)",
                  color: "var(--charcoal)",
                }}
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="w-full h-12 rounded-xl px-5 text-sm md:text-base outline-none transition-all focus:ring-2"
                style={{
                  background: "var(--canvas)",
                  border: "1px solid color-mix(in oklab, var(--navy) 18%, transparent)",
                  color: "var(--charcoal)",
                }}
              />
              <button
                type="submit"
                className="w-full h-12 rounded-xl font-bold text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
                style={{
                  background: "var(--navy)",
                  color: "white",
                  boxShadow: "0 12px 28px -12px rgba(15,23,55,0.6)",
                }}
              >
                <Download className="h-4 w-4" />
                Subscribe &amp; Download Free
              </button>
            </form>
          )}

          <p
            className="mt-4 text-xs md:text-sm text-center"
            style={{ color: "var(--charcoal)", opacity: 0.7 }}
          >
            No spam. Unsubscribe anytime. Your details are safe with us.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-10 space-y-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-xl px-6 py-5 text-center"
                style={{
                  background: "var(--canvas)",
                  border: "1px solid color-mix(in oklab, var(--navy) 12%, transparent)",
                }}
              >
                <div
                  className="mx-auto h-9 w-9 rounded-full flex items-center justify-center mb-2"
                  style={{
                    background: "color-mix(in oklab, var(--gold) 18%, transparent)",
                    color: "var(--navy)",
                  }}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div
                  className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-semibold"
                  style={{ color: "var(--navy)" }}
                >
                  {b.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
