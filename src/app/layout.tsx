import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSR PMI Universitas Merdeka Malang | Siap Mengabdi untuk Kemanusiaan",
  description: "Website resmi KSR PMI Unit Universitas Merdeka Malang. Organisasi relawan kemanusiaan, penanggulangan bencana, dan pelayanan sosial.",
  keywords: ["KSR PMI", "UNMER Malang", "Relawan", "Kemanusiaan", "Malang", "Universitas Merdeka"],
};

import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
