import { Hand, Sprout, Compass, CircleDashed, Crown } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className="h-px w-16 md:w-24" style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
      <span className="text-xs md:text-sm tracking-[0.4em] uppercase font-semibold" style={{ color: "var(--gold)" }}>
        {children}
      </span>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
      <span className="h-px w-16 md:w-24" style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <span className="h-px w-12" style={{ background: "var(--gold)" }} />
      <span className="h-2 w-2 rotate-45" style={{ background: "var(--gold)" }} />
      <span className="h-px w-12" style={{ background: "var(--gold)" }} />
      <span className="h-2 w-2 rotate-45" style={{ background: "var(--gold)" }} />
      <span className="h-px w-12" style={{ background: "var(--gold)" }} />
    </div>
  );
}

const pillars = [
  { icon: Hand, title: "Love God Deeply", body: "Forming a face-to-face relationship with the Lord above all knowledge or ministry.", color: "var(--crimson)" },
  { icon: Sprout, title: "Walk in the Spirit", body: "Building daily habits of His presence so character is transformed, not just informed.", color: "#3a7a3a" },
  { icon: Compass, title: "Know the Times", body: "Understanding the last days with clarity, courage, and Kingdom hope — not fear.", color: "var(--navy)" },
  { icon: CircleDashed, title: "Prepare to Survive", body: "Preparing to survive and to keep others alive as a covenant community.", color: "var(--charcoal)" },
  { icon: Crown, title: "Reign with Christ", body: "Preparing to be faithful rulers in the coming Kingdom — cities, nations, and beyond.", color: "var(--gold)" },
];

const tracks = [
  { age: "Ages 6–8", name: "Little Lights", hebrew: "אוֹר קָטָן" },
  { age: "Ages 9–11", name: "Radiant Lights", hebrew: "אוֹר נֹגַהּ" },
  { age: "Ages 12–14", name: "Dwelling Lights", hebrew: "מִשְׁכַּן אוֹר" },
  { age: "Ages 15–18", name: "Unshakeable Lights", hebrew: "אוֹר אֵיתָן" },
  { age: "Adults · New", name: "Sons of Light", hebrew: "בְּנֵי הָאוֹר" },
  { age: "Veterans", name: "Watchmen of Light", hebrew: "שׁוֹמְרֵי הָאוֹר" },
];

const stats = [
  { n: "720", label: "Structured lessons across six complete courses" },
  { n: "All Ages", label: "Age 6 through faith veteran — no one left behind" },
  { n: "10", label: "Deep formation pillars woven into every single lesson" },
];

export function KingdomJourney() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--canvas)", color: "var(--charcoal)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Our Mission in Full</SectionLabel>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center leading-[1.15]" style={{ color: "var(--navy)" }}>
          A Continuous Kingdom Journey —<br />
          From Little Lights to Watchmen of Light
        </h2>

        <Divider />

        <p className="mt-6 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "var(--charcoal)" }}>
          Through <strong>six carefully designed curriculum tracks</strong> — from Little Lights aged 6 through Watchmen of Light — Yarah Life creates a continuous learning journey that partners with <strong>parents, teachers, and churches</strong> to disciple an entire generation. Each of the <strong>120 lessons in every course</strong> weaves together biblical truth, Hebrew culture, end-time understanding, survival wisdom, meditation in God's presence, science through a Kingdom lens, and practical life application — because the call to know God is both <em style={{ color: "var(--crimson)" }}>eternal</em> and <em style={{ color: "var(--crimson)" }}>immediately urgent.</em>
        </p>

        {/* 5 pillars */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 mt-14">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl p-5 text-center bg-white"
                style={{ borderTop: `3px solid ${p.color}`, boxShadow: "0 4px 14px -8px rgba(10,31,77,0.18)" }}
              >
                <div className="flex justify-center mb-3"><Icon className="h-7 w-7" style={{ color: p.color }} /></div>
                <h3 className="font-display text-sm font-bold mb-2" style={{ color: p.color }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--charcoal)" }}>{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* tracks heading */}
        <div className="flex items-center justify-center gap-3 mt-16 mb-5">
          <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
          <span className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: "var(--navy)" }}>
            The Six Kingdom Curriculum Tracks
          </span>
          <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gold)" }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {tracks.map((t) => (
            <div key={t.name} className="rounded-lg p-4 text-center" style={{ background: "var(--navy)", color: "var(--canvas)" }}>
              <div className="text-[10px] tracking-widest uppercase opacity-70 mb-1">{t.age}</div>
              <div className="font-display font-bold text-sm" style={{ color: "var(--gold)" }}>{t.name}</div>
              <div className="text-xs mt-1 opacity-70">{t.hebrew}</div>
            </div>
          ))}
        </div>

        {/* stats */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl p-5 flex items-center gap-4" style={{ background: "color-mix(in oklab, var(--gold) 10%, white)", border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)" }}>
              <div className="h-10 w-10 rounded-md flex-shrink-0" style={{ border: "1.5px solid var(--navy)" }} />
              <div>
                <div className="font-display font-bold text-lg" style={{ color: "var(--navy)" }}>{s.n}</div>
                <div className="text-xs leading-relaxed" style={{ color: "var(--charcoal)" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* scripture */}
        <div className="mt-12 rounded-xl py-10 px-6 text-center" style={{ background: "var(--navy)", color: "var(--canvas)" }}>
          <p className="font-display italic text-lg md:text-xl" style={{ color: "var(--canvas)" }}>
            "The people who know their God shall be strong,<br />and carry out great exploits."
          </p>
          <div className="mt-4 text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: "var(--gold)" }}>
            Daniel 11:32 · NKJV
          </div>
        </div>
      </div>
    </section>
  );
}
