import { Maroon, Neutral } from "@/lib/palette";
import { MEMBERS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Members({ dark }: { dark: boolean }) {
  const bg   = dark ? Neutral[900] : Neutral[0];
  const card = dark ? Neutral[800] : Neutral[50];
  const brd  = dark ? Neutral[700] : Neutral[200];
  const head = dark ? Neutral[50]  : Neutral[900];
  const sub  = dark ? Neutral[300] : Neutral[500];
  const role = dark ? Neutral[200] : Neutral[700];

  return (
    <section id="anggota" className="py-28 px-8" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow>Pengurus IKAMU</Eyebrow>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: head,
                letterSpacing: "-0.01em",
              }}
            >
              Dewan Pengurus <span style={{ color: Maroon[700] }}>Periode</span>
              <br />2025–2028
            </h2>
          </div>
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm self-start lg:self-end"
            style={{
              background: dark ? "rgba(140,15,15,0.12)" : Maroon[50],
              border: `1px solid ${dark ? "rgba(140,15,15,0.2)" : Maroon[100]}`,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: Maroon[700] }} />
            <span
              className="text-xs font-medium"
              style={{ color: dark ? Maroon[300] : Maroon[700], fontFamily: "'Inter', sans-serif" }}
            >
              {MEMBERS.length} anggota pengurus aktif
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MEMBERS.map((m, i) => (
            <div
              key={m.id}
              className="rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
              style={{
                border: `1px solid ${brd}`,
                boxShadow: dark ? "none" : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* Avatar band */}
              <div
                className="px-5 py-5 flex items-start gap-4"
                style={{ background: card }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0 select-none"
                  style={{
                    background: i % 3 === 0
                      ? `linear-gradient(135deg, ${Maroon[700]}, ${Maroon[900]})`
                      : i % 3 === 1
                      ? `linear-gradient(135deg, ${Maroon[600]}, ${Maroon[800]})`
                      : `linear-gradient(135deg, ${Maroon[800]}, ${Maroon[950]})`,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[9px] font-semibold uppercase tracking-[0.15em] leading-tight mb-0.5"
                    style={{ color: Maroon[dark ? 400 : 700], fontFamily: "'Inter', sans-serif" }}
                  >
                    {m.role}
                  </p>
                  <p
                    className="font-semibold text-sm leading-snug"
                    style={{ color: head, fontFamily: "'Inter', sans-serif" }}
                  >
                    {m.name}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{
                  background: bg,
                  borderTop: `1px solid ${brd}`,
                }}
              >
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: Maroon[700] }} />
                <span
                  className="text-xs"
                  style={{ color: sub, fontFamily: "'Inter', sans-serif" }}
                >
                  Angkatan {m.generation}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
