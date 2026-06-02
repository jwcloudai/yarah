import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-education.jpg";

const slides = [
  {
    pre: "Don't",
    accent1: "Let",
    mid: "This Heritage",
    line2pre: "Fade.",
    accent2: "Learn",
    line2post: "With Us.",
    body: "Help us bring world-class classrooms to every child. Generations of curious minds are waiting for the spark only education can ignite.",
    cta: "Sponsor a Classroom",
  },
  {
    pre: "Empower",
    accent1: "Every",
    mid: "Child's Voice.",
    line2pre: "Ignite",
    accent2: "Lifelong",
    line2post: "Wonder.",
    body: "Our scholarship tracks pair mentors with motivated learners across 40+ communities — building futures one lesson at a time.",
    cta: "Secure Early-Bird Access",
  },
  {
    pre: "Heritage",
    accent1: "Roots,",
    mid: "Modern Tools.",
    line2pre: "Built",
    accent2: "For",
    line2post: "Tomorrow.",
    body: "Blending classical pedagogy with adaptive technology to nurture artisans, scientists, and storytellers of the next century.",
    cta: "Join Our Community",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Image with diagonal mask */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Students reading together in a classroom"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 30% 100%)" }}
        />
        {/* Emerald diagonal accent */}
        <div
          className="absolute top-0 right-0 h-full w-[28%]"
          style={{
            background: "var(--emerald)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 0.92,
          }}
        />
        {/* Navy overlay on left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,59,139,0.96) 0%, rgba(26,59,139,0.85) 40%, rgba(26,59,139,0) 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44 min-h-[640px] flex items-center">
        <div className="max-w-2xl text-white">
          <div
            className="inline-block mb-6 text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ color: "var(--gold)" }}
          >
            — Heritage Academy · Class of 2026
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            {s.pre}{" "}
            <span style={{ color: "var(--emerald)" }}>{s.accent1}</span>{" "}
            {s.mid}
            <br />
            {s.line2pre}{" "}
            <span style={{ color: "var(--crimson)" }}>{s.accent2}</span>{" "}
            {s.line2post}
          </h1>
          <p className="mt-8 text-base md:text-lg leading-relaxed max-w-xl opacity-90">
            {s.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              className="px-8 h-12 rounded-full font-bold text-sm tracking-wider uppercase transition-transform hover:scale-[1.04]"
              style={{
                background: "var(--gold)",
                color: "var(--charcoal)",
                boxShadow: "0 12px 30px -10px rgba(253,184,19,0.55)",
              }}
            >
              {s.cta}
            </button>
            <button
              className="px-8 h-12 rounded-full font-semibold text-sm tracking-wider uppercase border-2 border-white/30 hover:border-white transition-colors"
            >
              Watch the Story
            </button>
          </div>

          {/* Controls */}
          <div className="mt-16 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: idx === i ? 28 : 10,
                    background: idx === i ? "var(--emerald)" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
