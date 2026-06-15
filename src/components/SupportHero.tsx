import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function SupportHero() {
  // Get values from environment variables (update .env.local when you check Stripe)
  const currentAmount = Number(import.meta.env.VITE_FUNDRAISING_CURRENT_AMOUNT) || 34000;
  const totalSupporters = Number(import.meta.env.VITE_FUNDRAISING_TOTAL_SUPPORTERS) || 412;
  const daysRemaining = Number(import.meta.env.VITE_FUNDRAISING_DAYS_REMAINING) || 47;
  
  // Milestone targets (these stay fixed)
  const milestoneTarget = 100000;
  const phaseFullTarget = 1000000;
  const fullVisionTarget = 15000000;
  const percentOfMilestone = Math.round((currentAmount / milestoneTarget) * 100);
  const givingTiers = 5;

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "var(--navy)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Funding Phase Banner */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-16"
          style={{
            background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
          }}
        >
          <div
            className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-4"
            style={{ color: "var(--gold)" }}
          >
            Phase 1 — Active Now
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <div
              className="px-5 py-2.5 rounded-lg"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, #ffd35c 100%)",
                color: "var(--charcoal)",
              }}
            >
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold">
                Milestone 1A · Now
              </div>
              <div className="text-xl md:text-2xl font-bold">$100,000</div>
            </div>
            <div
              className="px-5 py-2.5 rounded-lg"
              style={{
                background: "color-mix(in oklab, var(--canvas) 8%, transparent)",
                border: "1px solid color-mix(in oklab, var(--canvas) 20%, transparent)",
              }}
            >
              <div
                className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
              >
                Phase 1 Full
              </div>
              <div
                className="text-xl md:text-2xl font-bold"
                style={{ color: "color-mix(in oklab, var(--canvas) 70%, transparent)" }}
              >
                $1,000,000
              </div>
            </div>
            <div
              className="px-5 py-2.5 rounded-lg"
              style={{
                background: "color-mix(in oklab, var(--canvas) 8%, transparent)",
                border: "1px solid color-mix(in oklab, var(--canvas) 20%, transparent)",
              }}
            >
              <div
                className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
              >
                Full Vision
              </div>
              <div
                className="text-xl md:text-2xl font-bold"
                style={{ color: "color-mix(in oklab, var(--canvas) 70%, transparent)" }}
              >
                $15,000,000
              </div>
            </div>
          </div>
          <div
            className="mt-4 text-sm"
            style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
          >
            Youth Courses: 1 May 2027
            <br />
            Adult Courses: 1 Sept 2027
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span
              className="h-px w-16 md:w-24"
              style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
            />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold"
              style={{ color: "var(--gold)" }}
            >
              יָרַד
            </span>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            <span
              className="h-px w-16 md:w-24"
              style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
            />
          </div>

          <div
            className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-4"
            style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
          >
            • The Joseph Ministries · Yarah Life •
          </div>

          <h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--canvas)" }}
          >
            Educating the <span style={{ color: "var(--gold)" }}>Generation</span> That Will
            <br />
            <span style={{ color: "var(--crimson)" }}>Bring Heaven to Earth</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--crimson)" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gold)" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            <span className="h-[3px] w-10 rounded-full" style={{ background: "var(--crimson)" }} />
          </div>

          <p
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto italic"
            style={{ color: "color-mix(in oklab, var(--canvas) 75%, transparent)" }}
          >
            A comprehensive Kingdom education platform — forming sons and daughters of light to stand ready before the King at His return.{" "}
            <span style={{ color: "var(--canvas)" }}>
              This is not a programme. It is a commissioning.
            </span>
          </p>
        </div>

        {/* Progress Card */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-12"
          style={{
            background: "color-mix(in oklab, var(--canvas) 5%, transparent)",
            border: "1px solid color-mix(in oklab, var(--gold) 25%, transparent)",
          }}
        >
          <div
            className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
          >
            Milestone 1A — Current Target
          </div>
          
          <div className="flex items-end gap-2 mb-4">
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--gold)" }}
            >
              ${(currentAmount / 1000).toFixed(0)}K
            </div>
            <div
              className="text-lg md:text-xl mb-1"
              style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
            >
              raised of ${(milestoneTarget / 1000).toFixed(0)}K
            </div>
          </div>

          {/* Progress bar */}
          <div
            className="h-3 rounded-full mb-8 overflow-hidden"
            style={{ background: "color-mix(in oklab, var(--canvas) 10%, transparent)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${percentOfMilestone}%`,
                background: "linear-gradient(90deg, var(--crimson) 0%, #ff6b6b 30%, #ffa500 60%, var(--gold) 100%)",
              }}
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "color-mix(in oklab, var(--canvas) 85%, transparent)" }}
              >
                {totalSupporters}
              </div>
              <div
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
              >
                Total Supporters
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "var(--crimson)" }}
              >
                {daysRemaining}
              </div>
              <div
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
              >
                Days Remaining
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "color-mix(in oklab, var(--canvas) 85%, transparent)" }}
              >
                {givingTiers}
              </div>
              <div
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
              >
                Giving Tiers
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "var(--gold)" }}
              >
                ${(currentAmount / 1000).toFixed(0)}K
              </div>
              <div
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
              >
                Raised So Far
              </div>
            </div>
          </div>

          {/* Progress percentage badge */}
          <div className="mt-6 text-right">
            <span
              className="inline-block text-2xl md:text-3xl font-bold"
              style={{ color: "var(--gold)" }}
            >
              {percentOfMilestone}%
            </span>
            <span
              className="text-sm ml-2"
              style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
            >
              of Milestone 1A
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <a
            href="https://buy.stripe.com/test_28E9AUaMrcfKcG6fgEdIA01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-bold text-sm tracking-[0.15em] uppercase transition-transform hover:scale-[1.04] flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, #ffd35c 100%)",
              color: "var(--charcoal)",
              boxShadow: "0 12px 30px -10px rgba(253,184,19,0.55)",
            }}
          >
            <span>✦</span> Give Now
          </a>
          <button
            className="px-8 py-4 rounded-full font-bold text-sm tracking-[0.15em] uppercase transition-colors border-2"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
              background: "transparent",
            }}
          >
            How Funds Are Used ↓
          </button>
        </div>

        {/* Social share */}
        <div className="text-center">
          <div
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
          >
            Share
          </div>
          <div className="flex justify-center items-center gap-3">
            <button
              className="px-5 py-2.5 rounded-full border transition-colors hover:bg-white/5 flex items-center gap-2 text-sm"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
            >
              <Facebook className="h-4 w-4" /> Facebook
            </button>
            <button
              className="px-5 py-2.5 rounded-full border transition-colors hover:bg-white/5 flex items-center gap-2 text-sm"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </button>
            <button
              className="px-5 py-2.5 rounded-full border transition-colors hover:bg-white/5 flex items-center gap-2 text-sm"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
            >
              <Twitter className="h-4 w-4" /> Twitter / X
            </button>
            <button
              className="px-5 py-2.5 rounded-full border transition-colors hover:bg-white/5 flex items-center gap-2 text-sm"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
            >
              <Instagram className="h-4 w-4" /> Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
