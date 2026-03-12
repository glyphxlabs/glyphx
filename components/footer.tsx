import Link from "next/link";
import { socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-[#06090d]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-base font-semibold text-text">HyroGlyphX</p>
          <p className="mt-2 max-w-sm text-sm text-textMuted">
            Building the adaptive keyboard platform where premium hardware and intelligent software converge.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-textMuted">Platform</p>
          <ul className="mt-3 space-y-2 text-sm text-textMuted">
            <li>GlyphX Keyboard</li>
            <li>GlyphOS Control Layer</li>
            <li>Developer Ecosystem</li>
            <li>Enterprise Fleet Tools</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-textMuted">Connect</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="rounded-full border border-line px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-textMuted transition hover:border-accent/40 hover:text-accent"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs text-textMuted">2026 HyroGlyphX. Precision systems for adaptive computing.</p>
        </div>
      </div>
    </footer>
  );
}