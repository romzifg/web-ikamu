import { Neutral } from "@/lib/palette";

export default function Divider({ dark }: { dark: boolean }) {
  return <div className="w-full h-px" style={{ background: dark ? Neutral[800] : Neutral[200] }} />;
}
