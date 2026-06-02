import { useEffect, useState } from "react";
import { Mail, Clock, Search, BookOpen, Facebook, Instagram, Linkedin, ShoppingBag } from "lucide-react";

const links = ["Home", "Courses", "Blog", "Tracks", "LearnPress Add-On"];

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
      {/* Dark band wraps everything; white bar floats inside with rounded edges */}
      <div
        className="relative"
        style={{ background: "var(--emerald)" }}
      >
        {/* Top utility bar */}
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-end gap-6 text-white text-xs">
          <span className="hidden sm:flex items-center gap-2 opacity-95">
            <Mail className="h-3.5 w-3.5" />
            <span>hello@heritage-edu.org</span>
          </span>
          <span className="hidden md:flex items-center gap-2 opacity-95">
            <Clock className="h-3.5 w-3.5" />
            <span>Mon – Sat · 8:00 AM – 7:00 PM</span>
          </span>
          <div className="flex items-center gap-3 opacity-95">
            <Facebook className="h-3.5 w-3.5" />
            <Instagram className="h-3.5 w-3.5" />
            <Linkedin className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* White rounded nav bar */}
        <div className="px-4 pb-3">
          <div
            className={`mx-auto max-w-7xl rounded-2xl flex items-center justify-between pl-6 pr-3 h-[72px] transition-shadow ${
              scrolled ? "shadow-xl" : "shadow-md"
            }`}
            style={{ background: "var(--canvas)" }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-md flex items-center justify-center"
                style={{ background: "var(--navy)" }}
              >
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div
                  className="font-display text-2xl font-bold"
                  style={{ color: "var(--emerald)" }}
                >
                  Heritage
                </div>
                <div
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{ color: "var(--charcoal)", opacity: 0.65 }}
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
                  className="px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors"
                  style={
                    i === 0
                      ? { background: "var(--crimson)", color: "white" }
                      : { color: "var(--charcoal)" }
                  }
                >
                  {l}
                </a>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-3">
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
                className="hidden sm:inline-flex items-center px-6 h-11 rounded-full font-semibold text-sm tracking-wide transition-transform hover:scale-[1.03]"
                style={{
                  background: "var(--gold)",
                  color: "var(--charcoal)",
                  boxShadow: "0 8px 20px -8px rgba(253,184,19,0.6)",
                }}
              >
                Secure Early-Bird
              </button>
            </div>
          </div>
        </div>

        {/* Policy strip: rounded right edge */}
        <div className="px-4 pb-2">
          <div
            className="max-w-3xl rounded-br-3xl text-xs text-white py-2 pl-6 pr-10 flex items-center gap-3"
            style={{ background: "var(--navy)" }}
          >
            <span
              className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider"
              style={{ background: "var(--gold)", color: "var(--charcoal)" }}
            >
              POLICY UPDATE
            </span>
            <span className="opacity-95 truncate">
              Senior leaders from the world's leading research institutes join our 2026 advisory board…
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
