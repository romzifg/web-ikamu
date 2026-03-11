"use client";

import Image from "next/image";
import { Maroon, Neutral } from "@/lib/palette";
import { UNI, NAV } from "@/lib/data";

export default function Footer({ dark }: { dark: boolean }) {
  const scroll = (item: string) => {
    const id = item.toLowerCase().replace(/ /g, "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: dark ? Neutral[950] : Neutral[900] }}>

      {/* ── Main footer body ── */}
      <div
        className="max-w-6xl mx-auto px-8 py-16"
        style={{ borderBottom: `1px solid ${dark ? Neutral[800] : Neutral[800]}` }}
      >
        <div className="grid sm:grid-cols-[1fr_auto] gap-12 items-start">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: 6,
                }}
              >
                <Image
                  src="/logo_ikamu.svg"
                  alt="IKAMU"
                  width={24}
                  height={24}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <p
                  className="font-bold text-white text-[15px] leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  IKAM–{UNI.abbr}
                </p>
                <p
                  className="text-[10px] mt-0.5"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}
                >
                  Ikatan Alumni Matematika
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              Menghimpun dan menghubungkan seluruh lulusan Matematika {UNI.name} dari berbagai angkatan.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: Maroon[500] }} />
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
              >
                Bandung, Indonesia
              </span>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
            >
              Navigasi
            </p>
            <div className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <button
                  key={item}
                  onClick={() => scroll(item)}
                  className="text-sm text-left transition-colors"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.22)", fontFamily: "'Inter', sans-serif" }}
        >
          © {new Date().getFullYear()} Ikatan Alumni {UNI.name}. Seluruh hak cipta dilindungi.
        </p>
        <div
          className="text-xs px-3 py-1 rounded-full"
          style={{
            background: "rgba(140,15,15,0.15)",
            border: "1px solid rgba(140,15,15,0.25)",
            color: Maroon[400],
            fontFamily: "'Inter', sans-serif",
          }}
        >
          IKAMU 2025
        </div>
      </div>

    </footer>
  );
}
