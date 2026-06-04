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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar — deep navy background */}
      <div 
        className="hidden sm:block transition-all duration-300"
        style={{ 
          background: "#0B1F4D",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6" style={{ color: "rgba(253, 251, 247, 0.85)" }}>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span className="font-medium">info@yarahlife.com</span>
            </span>
            <span className="hidden md:flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon – Fri · 9:00 AM – 4:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4" style={{ color: "rgba(253, 251, 247, 0.85)" }}>
            <a href="#" aria-label="Facebook" className="hover:opacity-100 transition-opacity">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-100 transition-opacity">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-100 transition-opacity">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* White floating navigation card */}
      <div className="px-4 sm:px-6 pt-3 sm:pt-4 pb-3">
        <div
          className={`mx-auto max-w-7xl rounded-3xl flex items-center justify-between px-4 sm:px-6 h-[68px] sm:h-[80px] transition-all duration-300 ${
            scrolled ? "shadow-xl" : "shadow-lg"
          }`}
          style={{ 
            background: "white",
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src={logoAsset}
              alt="Yarah Life"
              width={56}
              height={56}
              className="h-11 w-11 sm:h-14 sm:w-14 object-contain shrink-0"
            />
            <div className="leading-tight min-w-0">
              <div
                className="font-display text-xl sm:text-2xl font-bold tracking-tight"
                style={{ color: "#0B1F4D" }}
              >
                YARAH <span style={{ color: "#DC143C" }}>LIFE</span>
              </div>
              <div
                className="hidden sm:block text-[9px] tracking-[0.2em] uppercase font-medium"
                style={{ color: "#0B1F4D", opacity: 0.6 }}
              >
                Kingdom Learning Community
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap"
                style={
                  i === 0
                    ? { 
                        background: "#0B1F4D", 
                        color: "white",
                        boxShadow: "0 2px 8px rgba(11, 31, 77, 0.2)"
                      }
                    : { 
                        color: "#0B1F4D", 
                        background: "transparent"
                      }
                }
                onMouseEnter={(e) => {
                  if (i !== 0) {
                    e.currentTarget.style.background = "rgba(11, 31, 77, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== 0) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Search"
              className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center transition-all hover:bg-gray-100"
              style={{ color: "#0B1F4D" }}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Cart"
              className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center transition-all hover:bg-gray-100"
              style={{ color: "#0B1F4D" }}
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
            <button
              className="hidden sm:inline-flex items-center px-6 h-11 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "#FDB813",
                color: "#0B1F4D",
                boxShadow: "0 4px 12px rgba(253, 184, 19, 0.3)",
              }}
            >
              Support Us
            </button>
            
            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ color: "#0B1F4D" }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div
            className="lg:hidden mx-auto max-w-7xl mt-3 rounded-3xl p-4 shadow-xl"
            style={{ 
              background: "white",
            }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3.5 rounded-2xl text-[15px] font-semibold transition-all"
                  style={
                    i === 0
                      ? { background: "#0B1F4D", color: "white" }
                      : { color: "#0B1F4D", background: "rgba(11, 31, 77, 0.05)" }
                  }
                >
                  {l.label}
                </a>
              ))}
              <button
                className="mt-2 inline-flex items-center justify-center px-6 h-12 rounded-full font-bold text-sm tracking-wide"
                style={{ 
                  background: "#FDB813", 
                  color: "#0B1F4D",
                  boxShadow: "0 4px 12px rgba(253, 184, 19, 0.3)",
                }}
              >
                Support Us
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Announcement strip */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div
            className="rounded-br-3xl text-[11px] sm:text-xs py-2.5 overflow-hidden relative"
            style={{ 
              background: "#0B1F4D",
              color: "white",
              boxShadow: "0 4px 12px rgba(11, 31, 77, 0.15)"
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap animate-[marquee_18s_linear_infinite] px-4">
              <span
                className="px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold tracking-wider shrink-0"
                style={{ background: "#FDB813", color: "#0B1F4D" }}
              >
                ANNOUNCEMENT
              </span>
              <span className="font-medium opacity-95">
                Youth courses launching 1st May 2027 · Adult courses launching 1st September 2027 — support us to launch on time. &nbsp;&nbsp;&nbsp;&nbsp; Youth courses launching 1st May 2027 · Adult courses launching 1st September 2027 — support us to launch on time. &nbsp;&nbsp;&nbsp;&nbsp; Youth courses launching 1st May 2027 · Adult courses launching 1st September 2027 — support us to launch on time.
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
