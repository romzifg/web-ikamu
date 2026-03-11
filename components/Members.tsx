import { M, N } from "@/lib/palette";
import { MEMBERS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Divider from "@/components/ui/Divider";

export default function Members({ dark }: { dark: boolean }) {
  const bg   = dark ? N[900] : N[0];
  const card = dark ? N[800] : N[50];
  const brd  = dark ? N[700] : N[200];
  const head = dark ? N[50]  : N[900];
  const sub  = dark ? N[400] : N[500];

  return (
    <section id="anggota" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <Eyebrow>Pengurus IKAMU</Eyebrow>
          <h2
            className="text-4xl font-black leading-tight"
            style={{ fontFamily: "'Georgia',serif", color: head }}
          >
            Anggota Pengurus <span style={{ color: M[700] }}>Periode</span>
            <br />
            2025–2028
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MEMBERS.map((m) => (
            <div
              key={m.id}
              className="rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
              style={{ border: `1px solid ${brd}` }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-4" style={{ background: card }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0 select-none"
                  style={{ background: `linear-gradient(135deg, ${M[700]}, ${M[900]})` }}
                >
                  {m.initials}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: M[700] }}>
                    {m.role}
                  </div>
                </div>
              </div>

              <Divider dark={dark} />

              {/* Card body */}
              <div className="px-5 py-4" style={{ background: bg }}>
                <div className="font-bold text-sm leading-snug mb-1" style={{ color: head }}>
                  {m.name}
                </div>
                <div className="text-xs" style={{ color: sub }}>
                  Angkatan {m.generation}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
