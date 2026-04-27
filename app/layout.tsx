import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Commercial Display & Professional AV Solutions | Abans IT Corporate Solutions",
  description:
    "End-to-end commercial display and professional audio-visual solutions from Abans — displays, video walls, digital signage, conferencing, LED and control-room systems for enterprise, retail, hospitality and education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
