import Image from "next/image";
import { M, N } from "@/lib/palette";
import { UNI } from "@/lib/data";

export default function Footer({ dark }: { dark: boolean }) {
  return (
    <footer style={{ background: dark ? N[950] : N[900], borderTop: `1px solid ${N[800]}` }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo + name */}
        <div className="flex items-center gap-2.5">
          <div
            className="rounded flex items-center justify-center transition-colors"
            style={{ background: dark ? "#ffffff" : "transparent", padding: dark ? "3px" : "0" }}
          >
            <Image
              src="/logo_ikamu.svg"
              alt="IKAMU Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-bold" style={{ color: N[400] }}>
            IKAM–{UNI.abbr}
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center" style={{ color: N[500] }}>
          © {new Date().getFullYear()} Ikatan Alumni {UNI.name}. Seluruh hak cipta dilindungi.
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: M[700] }} />
          <span className="text-xs" style={{ color: N[500] }}>Bandung, Indonesia</span>
        </div>

      </div>
    </footer>
  );
}
