export default function StatusPill({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    Aktif:      { bg: "#dcfce7", color: "#166534" },
    Berjalan:   { bg: "#dbeafe", color: "#1e40af" },
    Berkembang: { bg: "#fef9c3", color: "#854d0e" },
  };
  const s = map[status] || { bg: "#f3f4f6", color: "#374151" };
  return (
    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={s}>
      {status}
    </span>
  );
}
