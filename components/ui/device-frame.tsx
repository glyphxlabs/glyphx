import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/cn";

type DeviceFrameVariant = "premium" | "lite";

type DeviceFrameProps = {
  variant?: DeviceFrameVariant;
  className?: string;
  priority?: boolean;
};

const variantContent: Record<
  DeviceFrameVariant,
  { src: string; alt: string; label: string; description: string }
> = {
  premium: {
    src: "/images/products/glyphx-premium-render.png",
    alt: "HyroGlyphX flagship adaptive keyboard render",
    label: "Flagship Render",
    description:
      "A premium adaptive keyboard render used for hero and social showcase surfaces."
  },
  lite: {
    src: "/images/products/glyphx-lite.png",
    alt: "GlyphX Lite product render",
    label: "GlyphX Lite",
    description:
      "The GlyphX Lite layout pairs display keys, tactile controls, and luminous underglow in a studio-ready frame."
  }
};

export function DeviceFrame({ variant = "premium", className, priority = false }: DeviceFrameProps) {
  const content = variantContent[variant];

  return (
    <GlassCard className={cn("overflow-hidden p-0", className)}>
      <div className="relative aspect-[16/10] bg-[#070a0f]">
        <Image
          src={content.src}
          alt={content.alt}
          fill
          className="object-contain p-4 md:p-6"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/45 p-3 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">{content.label}</p>
          <p className="mt-1 text-sm text-textMuted">{content.description}</p>
        </div>
      </div>
    </GlassCard>
  );
}
