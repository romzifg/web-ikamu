import { Maroon } from "@/lib/palette";

export default function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="w-5 h-px"
        style={{ background: light ? "rgba(255,255,255,0.35)" : Maroon[700] }}
      />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: light ? "rgba(255,255,255,0.5)" : Maroon[700],
        }}
      >
        {children}
      </span>
    </div>
  );
}
