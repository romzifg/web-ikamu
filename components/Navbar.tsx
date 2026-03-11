"use client";

import { useState } from "react";
import Image from "next/image";
import { M, N } from "@/lib/palette";
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

  const navStyle = scrolled
    ? {
        background: dark ? "rgba(20,20,20,0.96)" : "rgba(255,255,255,0.97)",
        boxShadow: "0 1px 0 rgba(0,0,0,0.08)",
        backdropFilter: "blur(18px)",
      }
    : { background: "transparent" };

  const logoColor = scrolled ? (dark ? "#fff" : N[800]) : "#fff";
  const linkColor = scrolled ? (dark ? N[300] : N[600]) : "rgba(255,255,255,0.85)";
  const iconColor = scrolled ? (dark ? N[400] : N[500]) : "rgba(255,255,255,0.7)";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
      <div className="max-w-6xl mx-auto px-6 h-[66px] flex items-center justify-between">

        {/* Logo */}
        {/* Logo */}
        <button onClick={() => go("beranda")} className="flex items-center gap-2.5">
          <div
            className="rounded-md flex items-center justify-center transition-all duration-300"
            style={{
              background: scrolled && dark ? "#ffffff" : scrolled && !dark ? "transparent" : "rgba(255,255,255,0.15)",
              padding: scrolled && dark ? "3px" : !scrolled ? "5px" : "0",
              backdropFilter: !scrolled ? "blur(4px)" : "none",
              border: !scrolled ? "1px solid rgba(255,255,255,0.2)" : "none",
            }}
          >
            <Image
              src="/logo_ikamu.svg"
              alt="IKAMU Logo"
              width={scrolled ? 36 : 28}
              height={scrolled ? 36 : 28}
              className="object-contain transition-all duration-300"
              style={{
                filter: scrolled && !dark ? "brightness(0)" : scrolled && dark ? "none" : "brightness(0) invert(1)",
              }}
            />
          </div>
          <span
            className="font-black text-[17px] tracking-tight transition-colors"
            style={{ fontFamily: "'Georgia',serif", color: logoColor }}
          >
            IKAM–<span style={{ color: scrolled ? M[700] : M[300] }}>{UNI.abbr}</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className="px-4 py-2 rounded-md text-[13.5px] font-medium transition-colors"
              style={{ color: linkColor }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggle}
            className="w-9 h-9 rounded-md flex items-center justify-center"
            style={{ color: iconColor }}
          >
            {dark ? <SunSVG /> : <MoonSVG />}
          </button>
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden w-9 h-9 rounded-md flex items-center justify-center"
            style={{ color: iconColor }}
          >
            {open ? <CloseSVG /> : <HamSVG />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: dark ? N[900] : "#fff", borderColor: dark ? N[800] : N[200] }}
        >
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className="w-full text-left px-6 py-3.5 text-sm font-medium border-b"
              style={{ color: dark ? N[300] : N[700], borderColor: dark ? N[800] : N[100] }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
