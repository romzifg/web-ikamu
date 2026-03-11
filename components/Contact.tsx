import { Maroon, Neutral } from "@/lib/palette";
import { CONTACTS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Contact({ dark }: { dark: boolean }) {
  const bg   = dark ? Neutral[950] : Neutral[50];
  const card = dark ? Neutral[900] : Neutral[0];
  const brd  = dark ? Neutral[800] : Neutral[200];
  const head = dark ? Neutral[50]  : Neutral[900];
  const sub  = dark ? Neutral[300] : Neutral[500];
  const inp  = dark ? Neutral[800] : Neutral[0];
  const inpB = dark ? Neutral[700] : Neutral[200];
  const inpText = dark ? Neutral[100] : Neutral[800];

  return (
    <section id="kontak" className="py-28 px-8" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <Eyebrow>Hubungi Kami</Eyebrow>
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
            Mari Terhubung &amp;
            <br />
            <span style={{ color: Maroon[700] }}>Bergabung Bersama</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_460px] gap-12 items-start">

          {/* ── Info ── */}
          <div>
            <p
              className="text-base leading-[1.85] mb-10"
              style={{ color: sub, fontFamily: "'Inter', sans-serif", maxWidth: 480 }}
            >
              Kami membuka pintu bagi seluruh alumni untuk berpartisipasi aktif dalam
              membangun organisasi yang kuat, profesional, dan berdampak nyata.
            </p>

            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${brd}`,
                boxShadow: dark ? "none" : "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {CONTACTS.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 px-6 py-4"
                  style={{
                    background: i % 2 === 0 ? card : dark ? Neutral[850] ?? "#1c1a17" : Neutral[50],
                    borderBottom: i < CONTACTS.length - 1 ? `1px solid ${brd}` : "none",
                  }}
                >
                  <span className="text-lg mt-0.5 flex-shrink-0">{c.icon}</span>
                  <div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-1"
                      style={{ color: Maroon[dark ? 400 : 700], fontFamily: "'Inter', sans-serif" }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: head, fontFamily: "'Inter', sans-serif" }}
                    >
                      {c.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${brd}`,
              boxShadow: dark ? "none" : "0 4px 32px rgba(0,0,0,0.07)",
            }}
          >
            {/* form header */}
            <div
              className="px-8 py-5"
              style={{ background: dark ? Maroon[950] : Maroon[700] }}
            >
              <p
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Kirim Pesan
              </p>
              <p
                className="text-white/45 text-xs mt-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Kami akan merespons dalam 1–2 hari kerja
              </p>
            </div>

            <div className="p-8 space-y-5" style={{ background: card }}>
              {[
                { ph: "Nama Lengkap",             type: "text" },
                { ph: "Alamat Email",              type: "email" },
                { ph: "Angkatan / Program Studi",  type: "text" },
              ].map((f) => (
                <div key={f.ph}>
                  <label
                    className="block text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                    style={{ color: sub, fontFamily: "'Inter', sans-serif" }}
                  >
                    {f.ph}
                  </label>
                  <input
                    type={f.type}
                    placeholder={`Masukkan ${f.ph.toLowerCase()}…`}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: inp,
                      border: `1px solid ${inpB}`,
                      color: inpText,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
                  style={{ color: sub, fontFamily: "'Inter', sans-serif" }}
                >
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini…"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all"
                  style={{
                    background: inp,
                    border: `1px solid ${inpB}`,
                    color: inpText,
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
              </div>

              <button
                className="w-full py-3.5 rounded-lg text-sm font-semibold transition-all hover:brightness-110 hover:-translate-y-px"
                style={{
                  background: Maroon[700],
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 4px 16px rgba(140,15,15,0.3)",
                }}
              >
                Kirim Pesan →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
