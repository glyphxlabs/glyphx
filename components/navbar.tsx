"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[#06090dcc]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="HyroGlyphX home">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-[#0a1119] shadow-metal">
            <Image
              src="/brand/logo-icon.svg"
              alt="HyroGlyphX icon"
              width={64}
              height={64}
              className="h-7 w-7 object-contain"
            />
          </div>
          <Image
            src="/brand/logo-lockup-white.svg"
            alt="HyroGlyphX"
            width={925}
            height={218}
            className="h-6 w-auto max-w-[11rem] object-contain object-left md:h-7 md:max-w-none"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-xs uppercase tracking-[0.12em] transition",
                  isActive
                    ? "bg-accent/15 text-accent"
                    : "text-textMuted hover:bg-panel hover:text-text"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Request Access</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((state) => !state)}
          className="inline-flex rounded-xl border border-line p-2 text-text md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-[#06090df2] p-4 md:hidden">
          <nav className="grid gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm transition",
                    isActive ? "bg-accent/15 text-accent" : "text-textMuted hover:bg-panel hover:text-text"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Button href="/contact" className="mt-3 w-full" variant="secondary">
            Request Access
          </Button>
        </div>
      )}
    </header>
  );
}
