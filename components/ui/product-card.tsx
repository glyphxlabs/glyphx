import { MotionReveal } from "@/components/ui/motion-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";

type ProductCardProps = {
  name: string;
  status: string;
  audience: string;
  overview: string;
  features: string[];
  useCases: string[];
  delay?: number;
};

export function ProductCard({
  name,
  status,
  audience,
  overview,
  features,
  useCases,
  delay = 0
}: ProductCardProps) {
  return (
    <MotionReveal delay={delay}>
      <GlassCard className="h-full">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold text-text">{name}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="mt-2 text-sm uppercase tracking-[0.14em] text-textMuted">{audience}</p>
        <p className="mt-4 text-sm leading-relaxed text-textMuted">{overview}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-accent">Features</p>
            <ul className="mt-2 space-y-2 text-sm text-textMuted">
              {features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-accent">Use Cases</p>
            <ul className="mt-2 space-y-2 text-sm text-textMuted">
              {useCases.map((useCase) => (
                <li key={useCase} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </MotionReveal>
  );
}