import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "HyroGlyphX | Adaptive Input Systems",
  description:
    "HyroGlyphX builds premium adaptive keyboards, intelligent input systems, and GlyphOS - the software platform for symbolic computing.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "256x256", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text antialiased">
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_15%_20%,rgba(9,191,209,0.11),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(115,126,147,0.12),transparent_32%),linear-gradient(145deg,#06080b,#040506_66%)]" />
          <div className="pointer-events-none fixed inset-0 z-[-1] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
