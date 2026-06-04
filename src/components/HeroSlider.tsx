import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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
    pre: "The",
    accent1: "Kingdom of Heaven",
    mid: "Is Coming",
    line2pre: "Sons & Daughters of",
    accent2: "Light",
    line2post: ".",
    body: "is not coming to a passive generation — it is coming through a prepared one. They do not wait for the world to change. They are the change.",
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
    body: "The prophets longed for it, the apostles longed for it, the saints died for it — your children will stand in it. The question is whether they will stand firm.",
    cta: "Secure Early-Bird Access",
    image: img4.url,
    alt: "Prophets beholding the scrolls of Isaiah, Daniel and Revelation",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (delta: 1 | -1) => {
      setDir(delta);
      setI((p) => (p + delta + slides.length) % slides.length);
    },
    []
  );

  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handlePrev = () => {
    prev();
    resetTimer();
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  const handleDot = (idx: number) => {
    setDir(idx > i ? 1 : -1);
    setI(idx);
    resetTimer();
  };

  const s = slides[i];

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.alt}
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover hero-image transition-opacity duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ opacity: idx === i ? 1 : 0 }}
          />
        ))}

        {/* White diagonal accent — desktop only */}
        <div
          className="hidden md:block absolute top-0 right-0 h-full w-[28%]"
          style={{
            background: "var(--canvas)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 0.92,
          }}
        />

        {/* Mobile: cinematic bottom-up navy gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,31,77,0.30) 0%, rgba(10,31,77,0.55) 35%, rgba(10,31,77,0.92) 70%, rgba(10,31,77,0.98) 100%)",
          }}
        />

        {/* Mobile: gold radial glow accent */}
        <div
          className="absolute md:hidden -top-24 -right-20 h-64 w-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(253,184,19,0.35), transparent 70%)" }}
        />
        <div
          className="absolute md:hidden -bottom-28 -left-20 h-72 w-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(220,20,60,0.30), transparent 70%)" }}
        />

        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,31,77,0.96) 0%, rgba(10,31,77,0.88) 40%, rgba(10,31,77,0) 60%)",
          }}
        />

        <style>{`
          @media (min-width: 768px) {
            .hero-image { clip-path: polygon(45% 0, 100% 0, 100% 100%, 30% 100%); }
          }
          @keyframes heroZoom {
            from { transform: scale(1); }
            to   { transform: scale(1.08); }
          }
          @keyframes shimmer {
            0%, 100% { box-shadow: 0 12px 30px -10px rgba(253,184,19,0.55); }
            50%      { box-shadow: 0 12px 40px -8px rgba(253,184,19,0.85); }
          }
          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
          @keyframes slideFadeIn {
            0%   { opacity: 0; transform: translateY(${dir * 24}px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideFadeOut {
            0%   { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(${dir * -16}px); }
          }
          .hero-text-enter {
            animation: slideFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          .hero-text-exit {
            animation: slideFadeOut 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
          }
        `}</style>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-44 pb-14 sm:pt-32 sm:pb-20 md:py-44 min-h-[640px] sm:min-h-[640px] flex items-end md:items-center">
        <div className="max-w-2xl text-white w-full">
          {/* Decorative ornament row — mobile only */}
          <div className="flex md:hidden items-center gap-2 mb-4">
            <span className="h-px w-8" style={{ background: "var(--gold)" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            <span className="h-px flex-1" style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }} />
            <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--crimson)" }} />
          </div>

          {/* Text content — re-mounts with animation on slide change */}
          <div key={i} className="hero-text-enter">
            <div
              className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 rounded-full text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold"
              style={{
                color: "var(--gold)",
                background: "color-mix(in oklab, var(--gold) 12%, transparent)",
                border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
              Heritage Academy · Class of 2026
            </div>
            <h1 className="font-display text-[2.15rem] leading-[1.05] sm:text-5xl md:text-7xl font-bold sm:leading-[1.1] md:leading-[1.05] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {s.pre} <span style={{ color: "var(--crimson)" }}>{s.accent1}</span> {s.mid}
              <br />
              {s.line2pre}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, var(--gold) 0%, #ffe89a 50%, var(--gold) 100%)" }}
              >
                {s.accent2}
              </span>{" "}
              {s.line2post}
            </h1>
            <p className="mt-5 sm:mt-8 text-[15px] sm:text-base md:text-lg leading-relaxed max-w-xl opacity-95">
              {s.body}
            </p>
            <div className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                className="group inline-flex items-center gap-2 px-7 sm:px-8 h-12 sm:h-12 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-transform hover:scale-[1.04]"
                style={{
                  background: "linear-gradient(135deg, var(--gold) 0%, #ffd35c 100%)",
                  color: "var(--charcoal)",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                {s.cta}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <span
                className="hidden sm:inline-flex text-[11px] tracking-[0.25em] uppercase font-semibold"
                style={{ color: "color-mix(in oklab, var(--gold) 80%, white)" }}
              >
                Limited · Founding Cohort
              </span>
            </div>

            {/* Trust strip — mobile */}
            <div
              className="md:hidden mt-6 flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-semibold"
              style={{ color: "color-mix(in oklab, var(--canvas) 75%, transparent)" }}
            >
              <span>720+ Lessons</span>
              <span className="h-1 w-1 rounded-full" style={{ background: "var(--gold)" }} />
              <span>6 Tracks</span>
              <span className="h-1 w-1 rounded-full" style={{ background: "var(--gold)" }} />
              <span>All Ages</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 sm:mt-16 flex items-center gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors"
              style={{ borderColor: "color-mix(in oklab, var(--gold) 45%, transparent)" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDot(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className="h-2.5 rounded-full transition-all duration-500"
                  style={{
                    width: idx === i ? 28 : 10,
                    background: idx === i ? "var(--crimson)" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors"
              style={{ borderColor: "color-mix(in oklab, var(--gold) 45%, transparent)" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span
              className="ml-auto text-[10px] tracking-[0.3em] uppercase font-semibold"
              style={{ color: "color-mix(in oklab, var(--gold) 80%, transparent)" }}
            >
              0{i + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
