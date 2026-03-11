import { M, N } from "@/lib/palette";
import { UNI, ABOUT } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function About({ dark }: { dark: boolean }) {
  const bg   = dark ? N[900] : N[0];
  const bg2  = dark ? N[800] : N[50];
  const txt  = dark ? N[300] : N[600];
  const sub  = dark ? N[400] : N[500];
  const head = dark ? N[50]  : N[900];
  const brd  = dark ? N[800] : N[200];

  return (
    <section id="tentang" style={{ background: bg }}>

      {/* university banner */}
      <div
        className="border-b"
        style={{ background: dark ? "#180303" : M[700], borderColor: dark ? "#300606" : M[800] }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <span className="text-lg">🏛️</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm">{UNI.name}</div>
              <div className="text-white/50 text-xs">{UNI.city} · Berdiri {UNI.founded}</div>
            </div>
          </div>
          <div>
            <div className="text-white/40 text-[10px] uppercase tracking-widest">Singkatan</div>
            <div className="text-white text-sm font-semibold">{UNI.abbr}</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">

          {/* Left — text */}
          <div>
            <Eyebrow>Tentang Kami</Eyebrow>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-8"
              style={{ fontFamily: "'Georgia',serif", color: head }}
            >
              Satu Almamater,
              <br />
              <em className="not-italic" style={{ color: M[700] }}>Satu Keluarga Besar</em>
            </h2>

            {ABOUT.map((p, i) => (
              <p key={i} className="text-base leading-[1.9] mb-4" style={{ color: txt }}>
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                ["Silaturahmi", "Mempererat hubungan lintas angkatan dan program studi."],
                ["Kontribusi",  "Aktif berkontribusi untuk almamater dan masyarakat."],
                ["Jaringan",    "Menghubungkan alumni di berbagai wilayah nasional."],
                ["Profesional", "Mendukung pertumbuhan karir setiap anggota alumni."],
              ].map(([t, d]) => (
                <div key={t} className="p-4 rounded-lg border" style={{ background: bg2, borderColor: brd }}>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: M[700] }}>
                    {t}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: sub }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile card */}
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${brd}` }}>
            <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${M[700]}, ${M[400]})` }} />
            <div className="p-7" style={{ background: bg2 }}>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: M[700] }}>
                Profil Organisasi
              </div>
              {[
                ["Nama Resmi",   `IKAM–${UNI.name}`],
                ["Didirikan",    "2025"],
                ["Keanggotaan",  `${UNI.alumni} alumni`],
              ].map(([k, v], i, a) => (
                <div
                  key={k}
                  className="flex justify-between py-3.5 text-sm"
                  style={{ borderBottom: i < a.length - 1 ? `1px solid ${brd}` : "none" }}
                >
                  <span style={{ color: sub }}>{k}</span>
                  <span className="font-semibold text-right max-w-[55%]" style={{ color: head }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
