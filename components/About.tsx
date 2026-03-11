import { Maroon, Neutral } from "@/lib/palette";
import { UNI, ABOUT } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function About({ dark }: { dark: boolean }) {
  const bg = dark ? Neutral[900] : Neutral[0];
  const bg2 = dark ? Neutral[850] ?? "#1e1b18" : Neutral[50];
  const txt = dark ? Neutral[200] : Neutral[600];
  const sub = dark ? Neutral[300] : Neutral[500];
  const head = dark ? Neutral[50] : Neutral[900];
  const brd = dark ? Neutral[800] : Neutral[200];

  return (
    <section id="tentang" style={{ background: bg }}>

      {/* Banner */}
      <div style={{ background: dark ? Maroon[950] : Maroon[700], borderBottom: `1px solid ${dark ? Maroon[900] : Maroon[800]}` }}>
        <div className="max-w-6xl mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              🏛️
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                {UNI.name}
              </p>
              <p className="text-white/45 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                {UNI.city} · Berdiri {UNI.founded}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            {[["Singkatan", UNI.abbr], ["Status", "Aktif 2025"]].map(([k, v]) => (
              <div key={k}>
                <p className="text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>{k}</p>
                <p className="text-white text-sm font-semibold mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-20 items-start">

          {/* Left */}
          <div>
            <Eyebrow>Tentang Kami</Eyebrow>
            <h2
              className="leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: head,
                letterSpacing: "-0.01em",
              }}
            >
              Satu Almamater,
              <br />
              <em className="not-italic" style={{ color: Maroon[700] }}>Satu Keluarga Besar</em>
            </h2>

            {ABOUT.map((p, i) => (
              <p
                key={i}
                className="text-base leading-[1.9] mb-5"
                style={{ color: txt, fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                ["Silaturahmi", "Mempererat hubungan lintas angkatan dan program studi."],
                ["Kontribusi", "Aktif berkontribusi untuk almamater dan masyarakat."],
                ["Jaringan", "Menghubungkan alumni di berbagai wilayah nasional."],
                ["Profesional", "Mendukung pertumbuhan karir setiap anggota alumni."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="p-5 rounded-xl"
                  style={{
                    background: bg2,
                    border: `1px solid ${brd}`,
                    borderLeft: `3px solid ${Maroon[700]}`,
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                    style={{ color: Maroon[700], fontFamily: "'Inter', sans-serif" }}
                  >
                    {t}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: sub, fontFamily: "'Inter', sans-serif" }}
                  >
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${brd}`, boxShadow: dark ? "none" : "0 4px 32px rgba(0,0,0,0.06)" }}
          >
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${Maroon[700]}, ${Maroon[400]})` }} />
            <div className="p-8" style={{ background: bg2 }}>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.22em] mb-6"
                style={{ color: Maroon[700], fontFamily: "'Inter', sans-serif" }}
              >
                Profil Organisasi
              </p>
              <div className="space-y-0">
                {[
                  ["Nama Resmi", `IKAMU – ${UNI.abbr}`],
                  ["Didirikan", "2025"],
                  ["Keanggotaan", `${UNI.alumni} alumni`],
                  ["Status", "Aktif & Berkembang"],
                ].map(([k, v], i, a) => (
                  <div
                    key={k}
                    className="flex items-center justify-between py-4"
                    style={{ borderBottom: i < a.length - 1 ? `1px solid ${brd}` : "none" }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: sub, fontFamily: "'Inter', sans-serif" }}
                    >
                      {k}
                    </span>
                    <span
                      className="text-sm font-semibold text-right"
                      style={{ color: head, fontFamily: "'Inter', sans-serif", maxWidth: "55%" }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="px-8 py-5"
              style={{ background: dark ? Maroon[950] : Maroon[700] }}
            >
              <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                Tagline
              </p>
              <p
                className="text-white text-sm italic font-medium"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                &ldquo;{UNI.tagline}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
