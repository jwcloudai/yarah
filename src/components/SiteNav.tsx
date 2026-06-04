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
      {/* Top utility bar with curved shape */}
      <div 
        className="hidden sm:block relative"
        style={{ 
          background: "#0B1F4D",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 h-10 flex items-center justify-between text-xs relative">
          <div className="flex items-center gap-6" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span className="font-medium">info@yarahlife.com</span>
            </span>
            <span className="hidden md:flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon – Fri · 9:00 AM – 4:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
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
        
        {/* Curved bottom edge */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            background: "#0B1F4D",
            clipPath: "ellipse(50% 100% at 50% 0%)"
          }}
        />
      </div>

      {/* Main white navigation bar */}
      <div 
        className={`relative transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
        style={{ 
          background: "white",
          paddingTop: "0.5rem"
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-[72px] sm:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src={logoAsset}
              alt="Yarah Life"
              width={56}
              height={56}
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0"
            />
            <div className="leading-tight min-w-0">
              <div
                className="font-display text-xl sm:text-2xl font-bold tracking-tight"
                style={{ color: "#0B1F4D" }}
              >
                YARAH <span style={{ color: "#DC143C" }}>LIFE</span>
              </div>
              <div
                className="hidden sm:block text-[9px] tracking-[0.15em] uppercase font-medium"
                style={{ color: "#0B1F4D", opacity: 0.5 }}
              >
                Kingdom Learning Community
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap"
                style={
                  i === 0
                    ? { 
                        background: "#FF6B35", 
                        color: "white",
                        boxShadow: "0 2px 8px rgba(255, 107, 53, 0.25)"
                      }
                    : { 
                        color: "#2C3E50"
                      }
                }
                onMouseEnter={(e) => {
                  if (i !== 0) {
                    e.currentTarget.style.color = "#0B1F4D";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== 0) {
                    e.currentTarget.style.color = "#2C3E50";
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
              style={{ color: "#2C3E50" }}
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <button
              aria-label="Cart"
              className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center transition-all hover:bg-gray-100"
              style={{ color: "#2C3E50" }}
            >
              <ShoppingBag className="h-4.5 w-4.5" />
            </button>
            <button
              className="hidden sm:inline-flex items-center px-7 h-12 rounded-full font-bold text-[14px] tracking-wide transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "#FF6B35",
                color: "white",
                boxShadow: "0 4px 14px rgba(255, 107, 53, 0.3)",
              }}
            >
              Free Quote
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

        {/* Curved top edge for announcement bar */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            background: "white"
          }}
        />
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="lg:hidden mx-4 mt-2 rounded-3xl p-4 shadow-xl"
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
                className="px-5 py-3.5 rounded-full text-[15px] font-semibold transition-all"
                style={
                  i === 0
                    ? { background: "#FF6B35", color: "white" }
                    : { color: "#0B1F4D", background: "rgba(11, 31, 77, 0.05)" }
                }
              >
                {l.label}
              </a>
            ))}
            <button
              className="mt-2 inline-flex items-center justify-center px-6 h-12 rounded-full font-bold text-sm tracking-wide"
              style={{ 
                background: "#FF6B35", 
                color: "white",
                boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
              }}
            >
              Free Quote
            </button>
          </nav>
        </div>
      )}

      {/* Announcement strip with curved top */}
      <div 
        className="relative"
        style={{ 
          background: "#0B1F4D",
          paddingTop: "1rem"
        }}
      >
        {/* Curved top edge */}
        <div 
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            background: "#0B1F4D",
            clipPath: "ellipse(50% 100% at 50% 100%)"
          }}
        />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="text-[11px] sm:text-xs py-3 overflow-hidden relative"
            style={{ 
              color: "rgba(255, 255, 255, 0.95)"
            }}
          >
            <div className="flex items-center gap-3 whitespace-nowrap animate-[marquee_18s_linear_infinite]">
              <span
                className="px-3 py-1 rounded-md text-[10px] font-bold tracking-wider shrink-0 uppercase"
                style={{ background: "rgba(255, 255, 255, 0.15)", color: "white" }}
              >
                Policy Update
              </span>
              <span className="font-medium">
                Youth courses launching 1st May 2027 · Adult courses launching 1st September 2027 — support us to launch on time.
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </header>
  );
}
