import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "McAssist | AI Agent for McDonald's",
  description:
    "AI-powered assistant that helps you explore the McDonald's menu, plan meals, and get quick answers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="bg-neutral-100 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
