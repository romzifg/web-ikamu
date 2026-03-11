import { N } from "@/lib/palette";

export default function Divider({ dark }: { dark: boolean }) {
  return <div className="w-full h-px" style={{ background: dark ? N[800] : N[200] }} />;
}
