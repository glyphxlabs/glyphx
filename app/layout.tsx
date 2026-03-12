import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "HyroGlyphX | Adaptive Input Systems",
  description:
    "HyroGlyphX builds premium adaptive keyboards, intelligent input systems, and GlyphOS - the software platform for symbolic computing.",
  icons: [{ rel: "icon", url: "/images/hyroglyphx-symbol.svg" }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text antialiased">
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_15%_20%,rgba(93,212,241,0.11),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(105,123,163,0.14),transparent_32%),linear-gradient(145deg,#06080b,#040506_66%)]" />
          <div className="pointer-events-none fixed inset-0 z-[-1] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}