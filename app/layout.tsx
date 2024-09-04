import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Header } from "./header";

import { Analytics } from "@components/analytics";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        {
          // Not everyone will want to host envshare on Vercel, so it makes sense to make this opt-in.
          process.env.ENABLE_VERCEL_ANALYTICS ? <Analytics /> : null
        }
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
