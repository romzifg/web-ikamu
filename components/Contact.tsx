import { M, N } from "@/lib/palette";
import { CONTACTS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Contact({ dark }: { dark: boolean }) {
  const bg   = dark ? N[950] : N[50];
  const card = dark ? N[900] : N[0];
  const brd  = dark ? N[800] : N[200];
  const head = dark ? N[50]  : N[900];
  const sub  = dark ? N[400] : N[500];
  const inp  = dark ? N[800] : N[50];
  const inpB = dark ? N[700] : N[200];

  return (
    <section id="kontak" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <Eyebrow>Hubungi Kami</Eyebrow>
          <h2
            className="text-4xl font-black leading-tight"
            style={{ fontFamily: "'Georgia',serif", color: head }}
          >
            Mari Terhubung &amp;
            <br />
            <span style={{ color: M[700] }}>Bergabung Bersama</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_460px] gap-10 items-start">

          {/* Contact info */}
          <div>
            <p className="text-base leading-relaxed mb-10" style={{ color: sub }}>
              Kami membuka pintu bagi seluruh alumni untuk berpartisipasi aktif dalam membangun
              organisasi yang kuat, profesional, dan berdampak.
            </p>

            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${brd}` }}>
              {CONTACTS.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 px-5 py-4"
                  style={{
                    background: i % 2 === 0 ? card : dark ? N[800] : N[50],
                    borderBottom: i < CONTACTS.length - 1 ? `1px solid ${brd}` : "none",
                  }}
                >
                  <span className="text-base mt-0.5">{c.icon}</span>
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                      style={{ color: M[700] }}
                    >
                      {c.label}
                    </div>
                    <div className="text-sm" style={{ color: head }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${brd}` }}>
            <div
              className="px-7 py-4 border-b"
              style={{ background: dark ? "#180303" : M[700], borderColor: dark ? "#300606" : M[800] }}
            >
              <div className="text-white font-bold text-sm">Kirim Pesan</div>
              <div className="text-white/50 text-xs mt-0.5">Kami akan merespons dalam 1–2 hari kerja</div>
            </div>

            <div className="p-7 space-y-4" style={{ background: card }}>
              {[
                { ph: "Nama Lengkap",            type: "text" },
                { ph: "Alamat Email",             type: "email" },
                { ph: "Angkatan / Program Studi", type: "text" },
              ].map((f) => (
                <div key={f.ph}>
                  <label
                    className="block text-[11px] font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: sub }}
                  >
                    {f.ph}
                  </label>
                  <input
                    type={f.type}
                    placeholder={`Masukkan ${f.ph.toLowerCase()}…`}
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                    style={{ background: inp, border: `1px solid ${inpB}`, color: head }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-[11px] font-semibold uppercase tracking-widest mb-1.5"
                  style={{ color: sub }}
                >
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini…"
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
                  style={{ background: inp, border: `1px solid ${inpB}`, color: head }}
                />
              </div>

              <button
                className="w-full py-3 rounded-lg text-sm font-semibold transition-all hover:brightness-110"
                style={{ background: M[700], color: "#fff" }}
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
