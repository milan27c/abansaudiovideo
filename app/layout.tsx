import type { Metadata } from "next";
import { Raleway, Questrial } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${raleway.variable} ${questrial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
