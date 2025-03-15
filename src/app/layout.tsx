import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import style from "./layout.module.css";

import "./globals.css";
import { MainNav } from "./_components/MainNav/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js components notes",
  description: "Notes for Client Side and Server Side Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <h1>Next.js Rendering notes</h1>
        </header>
        <div className={style.mainDiv}>
          <MainNav />
          <main className={style.mainContainer}>{children}</main>
        </div>
      </body>
    </html>
  );
}
