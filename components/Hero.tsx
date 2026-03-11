"use client";

import { Maroon } from "@/lib/palette";
import { UNI, STATS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero({ dark }: { dark: boolean }) {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: dark
          ? `linear-gradient(160deg, #1c0808 0%, #120404 45%, #0e0c0c 100%)`
          : `linear-gradient(160deg, #5a0a0a 0%, #7a1212 40%, #6b0e0e 100%)`,
      }}
    >
      {/* fine grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg,   transparent, transparent 79px, rgba(255,255,255,0.025) 79px, rgba(255,255,255,0.025) 80px),
            repeating-linear-gradient(90deg,  transparent, transparent 79px, rgba(255,255,255,0.025) 79px, rgba(255,255,255,0.025) 80px)
          `,
        }}
      />

      {/* dark desaturating overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: dark
            ? "rgba(0,0,0,0.52)"
            : "rgba(10,4,4,0.42)",
        }}
      />

      {/* radial vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(0,0,0,0.38) 100%)" }}
      />

      {/* bottom-left warm bleed */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at bottom left, rgba(120,18,18,0.35) 0%, transparent 65%)` }}
      />

      {/* left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: `linear-gradient(to bottom, ${Maroon[500]}, transparent)` }}
      />

      {/* watermark */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "32vw",
          fontWeight: 900,
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          right: "-6vw",
          bottom: "-4vw",
        }}
      >
        {UNI.abbr}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-32">
        <div className="max-w-3xl">
          <Eyebrow light>Ikatan Alumni Resmi · Sejak 2025</Eyebrow>

          <h1
            className="text-white leading-[1.04] mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 40px rgba(0,0,0,0.4)",
            }}
          >
            Ikatan Alumni
            <br />
            <span style={{ color: "#f2a8a8", fontStyle: "italic" }}>{UNI.name}</span>
          </h1>

          <p
            className="text-lg leading-[1.8] mb-10"
            style={{
              color: "rgba(255,255,255,0.58)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              maxWidth: "560px",
            }}
          >
            {UNI.tagline} — menghubungkan lebih dari{" "}
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{UNI.alumni}</span>{" "}
            lulusan dari seluruh penjuru Indonesia dan dunia.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-16">
            <button
              onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:brightness-110 hover:-translate-y-px"
              style={{
                background: Maroon[700],
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                border: `1px solid ${Maroon[600]}`,
              }}
            >
              Tentang IKAMU
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById("program-kerja")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-medium transition-all hover:bg-white/8"
              style={{
                border: "1px solid rgba(255,255,255,0.16)",
                color: "rgba(255,255,255,0.72)",
                fontFamily: "'Inter', sans-serif",
                backdropFilter: "blur(6px)",
              }}
            >
              Program Kerja
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="font-black text-white leading-none"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.38)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.15))" }}
      />
    </section>
  );
}
