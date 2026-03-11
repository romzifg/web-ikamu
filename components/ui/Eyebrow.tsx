import { M } from "@/lib/palette";

export default function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px" style={{ background: light ? M[400] : M[700] }} />
      <span
        className="text-[11px] font-bold tracking-[0.22em] uppercase"
        style={{ color: light ? M[300] : M[700] }}
      >
        {children}
      </span>
    </div>
  );
}
