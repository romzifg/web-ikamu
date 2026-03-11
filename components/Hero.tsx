import { M, N } from "@/lib/palette";
import { UNI, STATS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero({ dark }: { dark: boolean }) {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{
        background: dark
          ? `linear-gradient(155deg, #1a0303 0%, #0f0f0f 55%, #150101 100%)`
          : `linear-gradient(155deg, #6b1a1a 0%, #8b2a2a 35%, #7a2020 70%, #5e1414 100%)`,
      }}
    >
      {/* noise/grain overlay — mengurangi saturasi agar tidak perih */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* fine grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.025) 59px,rgba(255,255,255,0.025) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.025) 59px,rgba(255,255,255,0.025) 60px)`,
        }}
      />

      {/* softening overlay — desaturate + darken */}
      <div
        className="absolute inset-0"
        style={{
          background: dark
            ? "rgba(0,0,0,0.5)"
            : "linear-gradient(155deg, rgba(20,8,8,0.55) 0%, rgba(10,4,4,0.4) 50%, rgba(15,5,5,0.5) 100%)",
        }}
      />

      {/* radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* watermark */}
      <div
        className="absolute top-1/2 -translate-y-1/2 font-black select-none pointer-events-none"
        style={{
          fontFamily: "'Georgia',serif",
          fontSize: "28vw",
          color: "rgba(255,255,255,0.006)",
          lineHeight: 1,
          right: "-4vw",
        }}
      >
        {UNI.abbr}
      </div>

      {/* left accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: `linear-gradient(to bottom, ${M[400]}, transparent)` }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-36">
        <Eyebrow light>Ikatan Alumni Resmi · Sejak 2025</Eyebrow>

        <h1
          className="text-[clamp(2.6rem,7vw,5.2rem)] font-black text-white leading-[1.06] mb-6"
          style={{ fontFamily: "'Georgia',serif", letterSpacing: "-0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
        >
          Ikatan Alumni
          <br />
          <span style={{ color: "#f0a0a0" }}>{UNI.name}</span>
        </h1>

        <p className="text-white/60 text-lg max-w-xl mb-12 leading-relaxed">
          {UNI.tagline} — menghubungkan lebih dari{" "}
          <span className="text-white/85 font-semibold">{UNI.alumni}</span> lulusan matematika UNISBA.
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
          <button
            onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all hover:brightness-110"
            style={{ background: "rgba(128,10,10,0.9)", color: "#fff", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Tentang IKAMU <span className="opacity-60">→</span>
          </button>
          <button
            onClick={() => document.getElementById("program-kerja")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border transition-all hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}
          >
            Program Kerja
          </button>
        </div>

        {/* stats row */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="px-6 py-5"
              style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
            >
              <div className="text-2xl font-black text-white mb-0.5">{s.value}</div>
              <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}