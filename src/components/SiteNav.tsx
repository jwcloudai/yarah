import { useEffect, useState } from "react";
import { Mail, Clock, Search, Facebook, Instagram, Linkedin, ShoppingBag, Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png";

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
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "var(--canvas)",
        borderBottom: scrolled
          ? "1px solid color-mix(in oklab, var(--navy) 15%, transparent)"
          : "1px solid color-mix(in oklab, var(--navy) 8%, transparent)",
        boxShadow: scrolled ? "0 2px 16px -4px rgba(0,0,0,0.12)" : "none",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
    >
      {/* ── Top utility bar ── */}
      <div
        className="hidden sm:flex items-center justify-end gap-8 text-xs px-6 h-11"
        style={{
          color: "var(--navy)",
          borderBottom: "1px solid color-mix(in oklab, var(--navy) 8%, transparent)",
        }}
      >
        <span className="flex items-center gap-2 opacity-90">
          <Mail className="h-4 w-4" />
          info@yarahlife.com
        </span>
        <span className="hidden md:flex items-center gap-2 opacity-90">
          <Clock className="h-4 w-4" />
          Mon – Fri · 9:00 AM – 4:00 PM
        </span>
        <div className="flex items-center gap-4 opacity-90">
          <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="flex items-center justify-between px-6 sm:px-8 h-[80px] sm:h-[88px]">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 sm:gap-4 shrink-0">
          <img
            src={logoAsset}
            alt="Yarah Life"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
          />
          <div className="leading-tight">
            <div
              className="font-display text-xl sm:text-2xl font-bold tracking-tight"
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

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-2">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors whitespace-nowrap hover:bg-black/5"
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
        <div className="flex items-center gap-2 shrink-0">
          <button
            aria-label="Search"
            className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center hover:bg-black/5 transition-colors"
            style={{ color: "var(--charcoal)" }}
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <button
            aria-label="Cart"
            className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center hover:bg-black/5 transition-colors"
            style={{ color: "var(--charcoal)" }}
          >
            <ShoppingBag className="h-4.5 w-4.5" />
          </button>
          <button
            className="hidden sm:inline-flex items-center px-6 h-11 rounded-full font-semibold text-sm tracking-wide ml-2 transition-transform hover:scale-[1.03]"
            style={{
              background: "var(--gold)",
              color: "var(--charcoal)",
              boxShadow: "0 6px 18px -6px rgba(253,184,19,0.55)",
            }}
          >
            Support Us
          </button>
          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-11 w-11 rounded-full flex items-center justify-center hover:bg-black/5"
            style={{ color: "var(--navy)" }}
          >
            {open ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6"
          style={{ borderTop: "1px solid color-mix(in oklab, var(--navy) 8%, transparent)" }}
        >
          <nav className="flex flex-col gap-2 pt-4">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 rounded-xl text-[15px] font-medium"
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
              className="mt-3 inline-flex items-center justify-center px-6 h-12 rounded-full font-semibold text-sm tracking-wide"
              style={{ background: "var(--gold)", color: "var(--charcoal)" }}
            >
              Support Us
            </button>
          </nav>
        </div>
      )}

      {/* ── Announcement marquee ── */}
      <div
        className="overflow-hidden text-[11px] sm:text-xs text-white py-2.5"
        style={{ background: "var(--navy)" }}
      >
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[0, 1, 2].map((n) => (
            <span key={n} className="flex items-center gap-3 px-4">
              <span
                className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider shrink-0"
                style={{ background: "var(--gold)", color: "var(--charcoal)" }}
              >
                ANNOUNCEMENT
              </span>
              <span className="opacity-90">
                Youth courses launching 1st May 2027 · Adult courses launching 1st September 2027 — support us to launch on time.
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </header>
  );
}