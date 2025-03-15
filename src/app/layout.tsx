import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import style from "./layout.module.css";

import "./globals.css";

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
          <aside className={style.mainAside}>
            <h3>Menu</h3>
            <nav>
              <Link href="/" className={style.navLink}>
                Home
              </Link>
              <Link href="/server-side-render" className={style.navLink}>
                Server Side Render
              </Link>
              <Link href="/client-side-render" className={style.navLink}>
                Client Side Render
              </Link>
            </nav>
          </aside>
          <main className={style.mainContainer}>{children}</main>
        </div>
      </body>
    </html>
  );
}
