import { MotionReveal } from "@/components/ui/motion-reveal";
import { GlassCard } from "@/components/ui/glass-card";

type FeatureItem = {
  title: string;
  subtitle?: string;
  description: string;
};

type FeatureGridProps = {
  items: FeatureItem[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item, idx) => (
        <MotionReveal key={item.title} delay={idx * 0.04}>
          <GlassCard className="h-full">
            {item.subtitle && <p className="text-xs uppercase tracking-[0.16em] text-accent">{item.subtitle}</p>}
            <h3 className="mt-2 text-xl font-semibold text-text">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-textMuted">{item.description}</p>
          </GlassCard>
        </MotionReveal>
      ))}
    </div>
  );
}