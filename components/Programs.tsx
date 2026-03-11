import { M, N } from "@/lib/palette";
import { PROGRAMS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import StatusPill from "@/components/ui/StatusPill";

export default function Programs({ dark }: { dark: boolean }) {
  const bg   = dark ? N[950] : N[50];
  const card = dark ? N[900] : N[0];
  const brd  = dark ? N[800] : N[200];
  const head = dark ? N[50]  : N[900];
  const sub  = dark ? N[400] : N[500];

  return (
    <section id="program-kerja" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>Program Kerja</Eyebrow>
            <h2
              className="text-4xl font-black leading-tight"
              style={{ fontFamily: "'Georgia',serif", color: head }}
            >
              Inisiatif &amp; Program
              <br />
              <span style={{ color: M[700] }}>Unggulan IKAMU</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: sub }}>
            Program-program strategis untuk memperkuat ekosistem alumni, mendukung almamater, dan
            memberikan dampak nyata bagi masyarakat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.id}
              className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
              style={{ background: card, border: `1px solid ${brd}` }}
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded"
                  style={{ background: dark ? "#1a0202" : M[50], color: M[700] }}
                >
                  {p.cat}
                </span>
                <StatusPill status={p.status} />
              </div>
              <div
                className="text-[2.4rem] font-black leading-none mb-3 select-none"
                style={{ color: M[700], fontFamily: "'Georgia',serif", opacity: 0.12 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: head }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: sub }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
