import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKAMU | Ikatan Alumni Matematika UNISBA",
  description:
    "Ikatan Alumni Matematika Universitas Islam Bandung — menghubungkan alumni dari berbagai angkatan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
