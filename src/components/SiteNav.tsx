import { useEffect, useState } from "react";
import { Mail, Clock, Search, BookOpen, Facebook, Instagram, Linkedin } from "lucide-react";

const links = ["Home", "Programs", "Tracks", "Stories", "Sponsor"];

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
      {/* Top utility bar */}
      <div
        className="text-white text-xs"
        style={{ background: "var(--navy)" }}
      >
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-end gap-6">
          <span className="hidden sm:flex items-center gap-2 opacity-90">
            <Mail className="h-3.5 w-3.5" /> hello@heritage-edu.org
          </span>
          <span className="hidden md:flex items-center gap-2 opacity-90">
            <Clock className="h-3.5 w-3.5" /> Mon – Sat · 8:00 AM – 7:00 PM
          </span>
          <div className="flex items-center gap-3 opacity-90">
            <Facebook className="h-3.5 w-3.5" />
            <Instagram className="h-3.5 w-3.5" />
            <Linkedin className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ background: "var(--canvas)" }}
      >
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="h-11 w-11 rounded-md flex items-center justify-center"
              style={{ background: "var(--emerald)" }}
            >
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <div
                className="font-display text-2xl font-bold"
                style={{ color: "var(--emerald)" }}
              >
                Heritage
              </div>
              <div
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--charcoal)", opacity: 0.7 }}
              >
                Academy of Learning
              </div>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l, i) => (
              <a
                key={l}
                href="#"
                className="px-5 py-2.5 rounded-full text-[15px] font-medium transition-all"
                style={
                  i === 0
                    ? {
                        background: "var(--crimson)",
                        color: "white",
                      }
                    : { color: "var(--charcoal)" }
                }
                onMouseEnter={(e) => {
                  if (i !== 0) e.currentTarget.style.color = "var(--crimson)";
                }}
                onMouseLeave={(e) => {
                  if (i !== 0) e.currentTarget.style.color = "var(--charcoal)";
                }}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="h-10 w-10 rounded-full flex items-center justify-center border transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--charcoal)" }}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              className="hidden sm:inline-flex items-center px-6 h-11 rounded-full font-semibold text-sm tracking-wide transition-transform hover:scale-[1.03]"
              style={{
                background: "var(--gold)",
                color: "var(--charcoal)",
                boxShadow: "0 8px 20px -8px rgba(253,184,19,0.6)",
              }}
            >
              Secure Early-Bird Access
            </button>
          </div>
        </div>

        {/* Policy strip */}
        <div
          className="text-xs"
          style={{ background: "var(--emerald)", color: "white" }}
        >
          <div className="mx-auto max-w-7xl px-6 py-2 flex items-center gap-3">
            <span
              className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider"
              style={{ background: "var(--gold)", color: "var(--charcoal)" }}
            >
              POLICY UPDATE
            </span>
            <span className="opacity-95 truncate">
              Senior leaders from the world's leading research institutes
              join our 2026 advisory board…
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
