import { useEffect, useState } from "react";
import { Mail, Clock, Search, Facebook, Instagram, Linkedin, ShoppingBag } from "lucide-react";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative" style={{ background: "var(--canvas)", borderBottom: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}>
        {/* Top utility bar */}
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-end gap-6 text-xs" style={{ color: "var(--navy)" }}>
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
        <div className="px-4 pb-3">
          <div
            className={`mx-auto max-w-7xl rounded-2xl flex items-center justify-between pl-5 pr-3 h-[78px] transition-shadow ${
              scrolled ? "shadow-xl" : "shadow-md"
            }`}
            style={{ background: "var(--canvas)" }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Yarah Life"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div className="leading-tight">
                <div
                  className="font-display text-2xl font-bold tracking-tight"
                  style={{ color: "var(--navy)" }}
                >
                  YARAH <span style={{ color: "var(--crimson)" }}>LIFE</span>
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase"
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
            <div className="flex items-center gap-2">
              <button
                aria-label="Search"
                className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-black/5"
                style={{ color: "var(--charcoal)" }}
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                aria-label="Cart"
                className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-black/5"
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
            </div>
          </div>
        </div>

        {/* Announcement strip */}
        <div className="px-4 pb-2">
          <div className="mx-auto max-w-7xl">
            <div
              className="max-w-4xl rounded-br-3xl text-xs text-white py-2 pl-5 pr-10 flex items-center gap-3"
              style={{ background: "var(--navy)" }}
            >
            <span
              className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider shrink-0"
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
    </header>
  );
}
