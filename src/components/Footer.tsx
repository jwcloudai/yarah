export function Footer() {
  return (
    <footer
      className="py-16 md:py-20"
      style={{ background: "var(--navy)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo and tagline */}
        <div className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            <span style={{ color: "var(--crimson)" }}>Yarah</span>{" "}
            <span style={{ color: "var(--canvas)" }}>Life</span>
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8" style={{ background: "var(--crimson)" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            <span className="h-px w-8" style={{ background: "var(--crimson)" }} />
          </div>
          <p
            className="text-base md:text-lg italic max-w-3xl leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--canvas) 70%, transparent)" }}
          >
            Raising the Sons of Light — Equipped for the Times. Prepared for His Glory. Destined to Reign.
          </p>
        </div>

        {/* Navigation sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Pages */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              The Joseph Ministries
            </h3>
            <h4
              className="text-sm tracking-[0.2em] uppercase font-semibold mb-3"
              style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
            >
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#why"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Why YARAH LIFE?
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Kingdom Curriculum
                </a>
              </li>
              <li>
                <a
                  href="#beliefs"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Our Core Beliefs
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] uppercase font-semibold mb-3"
              style={{ color: "color-mix(in oklab, var(--canvas) 80%, transparent)" }}
            >
              Courses
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#katan"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Ohr Katan · Ages 6-8
                </a>
              </li>
              <li>
                <a
                  href="#noga"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Ohr Noga · Ages 9-11
                </a>
              </li>
              <li>
                <a
                  href="#mishkan"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Mishkan Ohr · Ages 12-14
                </a>
              </li>
              <li>
                <a
                  href="#eitan"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Ohr Eitan · Ages 15-18
                </a>
              </li>
              <li>
                <a
                  href="#bnei"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Bnei HaOhr · Adults
                </a>
              </li>
              <li>
                <a
                  href="#shomrei"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}
                >
                  Shomrei HaOhr · Veterans
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="pt-8 border-t text-center md:text-left"
          style={{ borderColor: "color-mix(in oklab, var(--canvas) 15%, transparent)" }}
        >
          <p
            className="text-xs md:text-sm"
            style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
          >
            © 2025 Yarah Life · The Joseph Ministries ·{" "}
            <a
              href="https://yarahlife.com"
              className="hover:underline"
              style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
            >
              yarahlife.com
            </a>{" "}
            · Free resource — share freely
          </p>
          <p
            className="text-xs italic mt-2"
            style={{ color: "color-mix(in oklab, var(--canvas) 45%, transparent)" }}
          >
            Surely I am coming quickly — Revelation 22:20 · Maranatha!
          </p>
        </div>
      </div>
    </footer>
  );
}
