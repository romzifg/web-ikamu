"use client";

import { useState } from "react";
import Image from "next/image";
import { Maroon, Neutral } from "@/lib/palette";
import { NAV, UNI } from "@/lib/data";
import { SunSVG, MoonSVG, HamSVG, CloseSVG } from "@/components/ui/Icons";

interface NavbarProps {
  dark: boolean;
  onToggle: () => void;
  scrollY: number;
}

export default function Navbar({ dark, onToggle, scrollY }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 60;

  const go = (item: string) => {
    const id = item.toLowerCase().replace(/ /g, "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // ── Scrolled styles ──────────────────────────────────────────────
  const navBg = scrolled
    ? dark
      ? "rgba(14,12,11,0.96)"
      : "rgba(255,255,255,0.97)"
    : "transparent";

  const navShadow = scrolled
    ? dark
      ? `0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)`
      : `0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.06)`
    : "none";

  const logoTextColor = scrolled ? (dark ? Neutral[50] : Neutral[900]) : "#fff";
  const logoAccent = scrolled ? Maroon[700] : "#f2a0a0";
  const linkColor = scrolled ? (dark ? Neutral[200] : Neutral[600]) : "rgba(255,255,255,0.8)";
  const linkHover = scrolled ? (dark ? "#fff" : Neutral[900]) : "#fff";
  const iconColor = scrolled ? (dark ? Neutral[300] : Neutral[500]) : "rgba(255,255,255,0.65)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: navBg, boxShadow: navShadow, backdropFilter: scrolled ? "blur(20px)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-8 h-[68px] flex items-center justify-between">

        {/* ── Logo ── */}
        <button onClick={() => go("beranda")} className="flex items-center gap-3 group">
          <div
            className="flex items-center justify-center rounded-lg transition-all duration-300"
            style={{
              width: scrolled ? 36 : 30,
              height: scrolled ? 36 : 30,
              background: scrolled
                ? (dark ? "rgba(255,255,255,0.08)" : Maroon[50])
                : "rgba(255,255,255,0.12)",
              border: scrolled
                ? (dark ? "1px solid rgba(255,255,255,0.1)" : `1px solid ${Maroon[200]}`)
                : "1px solid rgba(255,255,255,0.2)",
              padding: 5,
            }}
          >
            <Image
              src="/logo_ikamu.svg"
              alt="IKAMU"
              width={scrolled ? 22 : 18}
              height={scrolled ? 22 : 18}
              className="object-contain"
              style={{
                filter: scrolled && !dark
                  ? "brightness(0) saturate(100%) invert(8%) sepia(80%) saturate(800%) hue-rotate(340deg)"
                  : "brightness(0) invert(1)",
              }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: scrolled ? 16 : 15,
                fontWeight: 800,
                color: logoTextColor,
                letterSpacing: "-0.01em",
                transition: "all 0.3s",
              }}
            >
              IKAM–<span style={{ color: logoAccent }}>{UNI.abbr}</span>
            </span>
            {scrolled && (
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: dark ? Neutral[500] : Neutral[400],
                  marginTop: 1,
                }}
              >
                Ikatan Alumni Matematika
              </span>
            )}
          </div>
        </button>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className="relative px-4 py-2 text-[13px] font-medium transition-colors group"
              style={{ color: linkColor, fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{ color: iconColor }}
          >
            {dark ? <SunSVG /> : <MoonSVG />}
          </button>
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ color: iconColor }}
          >
            {open ? <CloseSVG /> : <HamSVG />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: dark ? Neutral[950] : "#fff",
            borderColor: dark ? Neutral[800] : Neutral[100],
          }}
        >
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className="w-full text-left px-8 py-4 text-sm font-medium border-b"
              style={{
                color: dark ? Neutral[200] : Neutral[700],
                borderColor: dark ? Neutral[800] : Neutral[100],
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
