import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import img1 from "@/assets/prophecy-1.png.asset.json";
import img2 from "@/assets/prophecy-2.png.asset.json";
import img3 from "@/assets/prophecy-3.png.asset.json";
import img4 from "@/assets/prophecy-4.png.asset.json";

const slides = [
  {
    pre: "The",
    accent1: "Last",
    mid: "Generation.",
    line2pre: "Born to See the",
    accent2: "King",
    line2post: "Return.",
    body: "To see the King return, to reign with Him, and to enforce His victory on the earth.",
    cta: "Stand With Us",
    image: img1.url,
    alt: "Multitudes worshipping as the King returns in glory",
  },
  {
    pre: "The Mark Is Coming.",
    accent1: "The King",
    mid: "Is Coming.",
    line2pre: "Only One Requires Your",
    accent2: "Preparation",
    line2post: ".",
    body: "Yarah Life does not raise a generation in fear of the mark — it raises a generation so shaped in Christ that the choice is never in doubt.",
    cta: "Prepare a Child",
    image: img2.url,
    alt: "The choice between the mark of the beast and the crown of Christ",
  },
  {
    pre: "A",
    accent1: "he Kingdom of Heaven",
    mid: "coming",
    line2pre: "Sons & Daughters of",
    accent2: "Light",
    line2post: ".",
    body: "is not  to a passive generation — it is coming through a prepared one. They do not wait for the world to change. They are the change.",
    cta: "Join the Movement",
    image: img3.url,
    alt: "A radiant generation walking forward into the light",
  },
  {
    pre: "Prophets",
    accent1: "Saw It.",
    mid: "Apostles Longed For It.",
    line2pre: "Your Children Will",
    accent2: "Stand",
    line2post: "In It.",
    body: "the apostles longed for it the saints died for it your children will stand in it the question is whether they will stand firm.",
    cta: "Secure Early-Bird Access",
    image: img4.url,
    alt: "Prophets beholding the scrolls of Isaiah, Daniel and Revelation",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Image with diagonal mask (desktop) / full background (mobile) */}
      <div className="absolute inset-0">
        <img
          src={s.image}
          alt={s.alt}
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover hero-image"
        />
        {/* White diagonal accent — desktop only */}
        <div
          className="hidden md:block absolute top-0 right-0 h-full w-[28%]"
          style={{
            background: "var(--canvas)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 0.92,
          }}
        />
        {/* Navy overlay — heavier on mobile for legibility */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "linear-gradient(180deg, rgba(10,31,77,0.85) 0%, rgba(10,31,77,0.92) 100%)" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: "linear-gradient(90deg, rgba(10,31,77,0.96) 0%, rgba(10,31,77,0.88) 40%, rgba(10,31,77,0) 60%)",
          }}
        />
        <style>{`@media (min-width: 768px){.hero-image{clip-path: polygon(45% 0, 100% 0, 100% 100%, 30% 100%);} }`}</style>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-20 sm:py-32 md:py-44 min-h-[520px] sm:min-h-[640px] flex items-center">
        <div className="max-w-2xl text-white">
          <div
            className="inline-block mb-4 sm:mb-6 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ color: "var(--gold)" }}
          >
            — Heritage Academy · Class of 2026
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight">
            {s.pre} <span style={{ color: "var(--crimson)" }}>{s.accent1}</span> {s.mid}
            <br />
            {s.line2pre} <span style={{ color: "var(--gold)" }}>{s.accent2}</span> {s.line2post}
          </h1>
          <p className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl opacity-90">{s.body}</p>
          <div className="mt-7 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              className="px-6 sm:px-8 h-11 sm:h-12 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-transform hover:scale-[1.04]"
              style={{
                background: "var(--gold)",
                color: "var(--charcoal)",
                boxShadow: "0 12px 30px -10px rgba(253,184,19,0.55)",
              }}
            >
              {s.cta}
            </button>
          </div>

          {/* Controls */}
          <div className="mt-10 sm:mt-16 flex items-center gap-4">
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
                    background: idx === i ? "var(--crimson)" : "rgba(255,255,255,0.4)",
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
