import { Maroon, Neutral } from "@/lib/palette";
import { PROGRAMS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import StatusPill from "@/components/ui/StatusPill";

export default function Programs({ dark }: { dark: boolean }) {
  const bg   = dark ? Neutral[950] : Neutral[50];
  const card = dark ? Neutral[900] : Neutral[0];
  const brd  = dark ? Neutral[800] : Neutral[200];
  const head = dark ? Neutral[50]  : Neutral[900];
  const sub  = dark ? Neutral[300] : Neutral[500];

  return (
    <section id="program-kerja" className="py-28 px-8" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Eyebrow>Program Kerja</Eyebrow>
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
              Inisiatif &amp; Program
              <br />
              <span style={{ color: Maroon[700] }}>Unggulan IKAMU</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed lg:max-w-xs lg:text-right"
            style={{ color: sub, fontFamily: "'Inter', sans-serif" }}
          >
            Program strategis untuk memperkuat ekosistem alumni, mendukung almamater,
            dan memberikan dampak nyata bagi masyarakat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.id}
              className="group rounded-xl p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{
                background: card,
                border: `1px solid ${brd}`,
              }}
            >
              {/* top meta */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-md"
                  style={{
                    background: dark ? "rgba(140,15,15,0.15)" : Maroon[50],
                    color: Maroon[dark ? 400 : 700],
                    fontFamily: "'Inter', sans-serif",
                    border: `1px solid ${dark ? "rgba(140,15,15,0.25)" : Maroon[100]}`,
                  }}
                >
                  {p.cat}
                </span>
                <StatusPill status={p.status} />
              </div>

              {/* number watermark */}
              <div
                className="font-black leading-none mb-4 select-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "3.5rem",
                  color: Maroon[700],
                  opacity: dark ? 0.08 : 0.06,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3
                className="font-semibold text-[15px] leading-snug mb-3"
                style={{ color: head, fontFamily: "'Inter', sans-serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-[1.75]"
                style={{ color: sub, fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
