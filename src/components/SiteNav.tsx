import { useEffect, useState } from "react";
import { Mail, Clock, Search, Facebook, Instagram, Linkedin, ShoppingBag, Menu, X } from "lucide-react";
import logoAsset from "@/assets/yarah-logo.png.asset.json";

const links = [
  { label: "Why YARAH LIFE?", href: "#" },
  { label: "Kingdom Curriculum", href: "#" },
  { label: "Our Core Beliefs", href: "#" },
  { label: "Support Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative" style={{ background: "var(--canvas)", borderBottom: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}>
        {/* Top utility bar — hidden on mobile */}
        <div className="hidden sm:flex mx-auto max-w-7xl px-6 h-10 items-center justify-end gap-6 text-xs" style={{ color: "var(--navy)" }}>
          <span className="hidden sm:flex items-center gap-2 opacity-95">
            <Mail className="h-3.5 w-3.5" />
            <span>info@yarahlife.com</span>
          </span>
          <span className="hidden md:flex items-center gap-2 opacity-95">
            <Clock className="h-3.5 w-3.5" />
            <span>Mon – Fri · 9:00 AM – 4:00 PM</span>
          </span>
          <div className="flex items-center gap-3 opacity-95">
            <a href="#" aria-label="Facebook"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-3.5 w-3.5" /></a>
          </div>
        </div>

        {/* White rounded nav bar */}
        <div className="px-3 sm:px-4 pt-2 sm:pt-0 pb-3">
          <div
            className={`mx-auto max-w-7xl rounded-2xl flex items-center justify-between pl-3 sm:pl-5 pr-2 sm:pr-3 h-[64px] sm:h-[78px] transition-shadow ${
              scrolled ? "shadow-xl" : "shadow-md"
            }`}
            style={{ background: "var(--canvas)" }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <img
                src={logoAsset.url}
                alt="Yarah Life"
                width={56}
                height={56}
                className="h-10 w-10 sm:h-14 sm:w-14 object-contain shrink-0"
              />
              <div className="leading-tight min-w-0">
                <div
                  className="font-display text-lg sm:text-2xl font-bold tracking-tight"
                  style={{ color: "var(--navy)" }}
                >
                  YARAH <span style={{ color: "var(--crimson)" }}>LIFE</span>
                </div>
                <div
                  className="hidden sm:block text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--charcoal)", opacity: 0.65 }}
                >
                  Kingdom Learning Community
                </div>
              </div>
            </a>

            {/* Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-4 py-2.5 rounded-full text-[14px] font-medium transition-colors whitespace-nowrap"
                  style={
                    i === 0
                      ? { background: "var(--crimson)", color: "white" }
                      : { color: "var(--charcoal)" }
                  }
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                aria-label="Search"
                className="hidden sm:flex h-9 w-9 rounded-full items-center justify-center hover:bg-black/5"
                style={{ color: "var(--charcoal)" }}
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                aria-label="Cart"
                className="hidden sm:flex h-9 w-9 rounded-full items-center justify-center hover:bg-black/5"
                style={{ color: "var(--charcoal)" }}
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
              <button
                className="hidden sm:inline-flex items-center px-5 h-11 rounded-full font-semibold text-sm tracking-wide transition-transform hover:scale-[1.03]"
                style={{
                  background: "var(--gold)",
                  color: "var(--charcoal)",
                  boxShadow: "0 8px 20px -8px rgba(253,184,19,0.6)",
                }}
              >
                Support Us
              </button>
              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center"
                style={{ color: "var(--navy)" }}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          {open && (
            <div
              className="lg:hidden mx-auto max-w-7xl mt-2 rounded-2xl p-3 shadow-xl"
              style={{ background: "var(--canvas)", border: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}
            >
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-[15px] font-medium"
                    style={
                      i === 0
                        ? { background: "var(--crimson)", color: "white" }
                        : { color: "var(--charcoal)" }
                    }
                  >
                    {l.label}
                  </a>
                ))}
                <button
                  className="mt-2 inline-flex items-center justify-center px-5 h-12 rounded-full font-semibold text-sm tracking-wide"
                  style={{ background: "var(--gold)", color: "var(--charcoal)" }}
                >
                  Support Us
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* Announcement strip */}
        <div className="px-3 sm:px-4 pb-2">
          <div className="mx-auto max-w-7xl">
            <div
              className="max-w-4xl rounded-br-3xl text-[11px] sm:text-xs text-white py-2 pl-3 sm:pl-5 pr-4 sm:pr-10 flex items-center gap-2 sm:gap-3"
              style={{ background: "var(--navy)" }}
            >
            <span
              className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider shrink-0"
              style={{ background: "var(--gold)", color: "var(--charcoal)" }}
            >
              ANNOUNCEMENT
            </span>
            <span className="opacity-95 truncate">
              Youth courses launching 1st May 2027 · Adult courses launching 1st September 2027 — support us to launch on time.
            </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
