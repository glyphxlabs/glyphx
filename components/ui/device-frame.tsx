import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function DeviceFrame() {
  return (
    <GlassCard className="overflow-hidden p-0">
      <div className="relative aspect-[16/10] bg-[#070a0f]">
        <Image
          src="/images/glyphx-keyboard.avif"
          alt="GlyphX adaptive keyboard render"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/45 p-3 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">GlyphX Live Surface</p>
          <p className="mt-1 text-sm text-textMuted">
            Dynamic display keys, profile scene switching, and tactile precision housed in a matte metal frame.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}