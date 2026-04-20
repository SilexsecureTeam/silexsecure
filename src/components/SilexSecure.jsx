import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "About", "Case Studies", "Contact"];

const SECTORS = [
  { label: "Aviation", size: "sm" },
  { label: "E-Commerce", size: "lg" },
  { label: "Enterprise", size: "md" },
  { label: "Oil And Gas", size: "sm" },
  { label: "Government", size: "lg" },
];

export default function SilexSecure() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full font-sans relative overflow-hidden"
      style={{ backgroundColor: "#7B0C0C" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, #9B1111 0%, transparent 70%)",
        }}
      />

      {/* ── NAVBAR ── */}
      <nav className="relative z-20 flex items-center justify-between px-8 pt-6 pb-2">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            <Shield size={16} color="#fff" strokeWidth={2} />
            <span className="text-white text-sm font-semibold tracking-widest uppercase">
              Silex
            </span>
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#F87171" }}
            >
              Secure
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5"
          style={{
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                link === "Home"
                  ? "text-white"
                  : "text-white/60 hover:text-white/90"
              }`}
              style={
                link === "Home"
                  ? {
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }
                  : {}
              }
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-16 left-4 right-4 z-30 rounded-2xl p-4 flex flex-col gap-2"
          style={{
            background: "#5A0808",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="text-left px-4 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <main className="relative z-10 flex flex-col lg:flex-row items-start justify-between px-8 lg:px-12 pt-10 pb-16 gap-10 max-w-7xl mx-auto">
        {/* Left column */}
        <div className="flex-1 max-w-xl">
          {/* Headline */}
          <h1
            className="text-white leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="font-normal text-4xl lg:text-5xl">
              Elevating Your{" "}
            </span>
            <span
              className="font-bold text-5xl lg:text-6xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Digital
            </span>
            <br />
            <span className="font-bold text-5xl lg:text-6xl">Presence </span>
            <span className="font-normal text-4xl lg:text-5xl">With </span>
            <span className="font-bold text-4xl lg:text-5xl">Custom</span>
            <br />
            <span className="font-bold text-4xl lg:text-5xl">
              Web Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/65 text-sm leading-relaxed mb-10 max-w-sm">
            Silex Secure has developed and implemented digital platforms across
            multiple sectors including,
          </p>

          {/* Sector pills — scattered layout matching mockup */}
          <div className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="flex items-center gap-3">
              <SectorPill label="Aviation" small />
              <div className="w-5" />
              <SectorPill label="E-Commerce" large />
            </div>
            {/* Row 2 */}
            <div className="flex items-center gap-3 pl-20">
              <SectorPill label="Enterprise" />
            </div>
            {/* Row 3 */}
            <div className="flex items-center gap-3">
              <SectorPill label="Oil And Gas" small />
              <div className="w-8" />
              <SectorPill label="Government" large />
            </div>
          </div>
        </div>

        {/* Right column — image placeholder */}
        <div className="flex-shrink-0 w-full lg:w-[420px] xl:w-[480px] mt-4 lg:mt-0">
          <div
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: "rgba(0,0,0,0.20)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Decorative corner accent */}
            <div
              className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, #F87171 0%, transparent 60%)",
              }}
            />

            {/* Browser chrome mockup bar */}
            <div
              className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-2"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <div
                className="flex-1 mx-2 h-4 rounded-sm text-white/30 text-[9px] flex items-center px-2"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                insurancecompany.com
              </div>
            </div>

            {/* Image slot — user replaces this */}
            <div className="flex flex-col items-center gap-2 opacity-30 pt-6">
              <Shield size={36} color="#fff" strokeWidth={1} />
              <p className="text-white/50 text-xs tracking-wide">
                Your image goes here
              </p>
            </div>

            {/* Decorative bottom gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background:
                  "linear-gradient(to top, rgba(100,0,0,0.4), transparent)",
              }}
            />
          </div>

          {/* Floating card accent beneath */}
          <div
            className="mt-3 mx-4 h-3 rounded-b-xl opacity-30"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
        </div>
      </main>

      {/* Bottom subtle vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(60,0,0,0.5), transparent)",
        }}
      />
    </div>
  );
}

function SectorPill({ label, small, large }) {
  return (
    <button
      className={`
        relative group
        inline-flex items-center justify-center
        rounded-full font-semibold text-white
        transition-all duration-200
        hover:scale-105 active:scale-95
        ${small ? "px-4 py-2 text-xs" : large ? "px-7 py-3 text-base" : "px-5 py-2.5 text-sm"}
      `}
      style={{
        background: "rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      {label}
    </button>
  );
}
