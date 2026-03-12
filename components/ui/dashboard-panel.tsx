import { GlassCard } from "@/components/ui/glass-card";

type DashboardPanelProps = {
  title: string;
  points: string[];
};

export function DashboardPanel({ title, points }: DashboardPanelProps) {
  return (
    <GlassCard className="h-full">
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-textMuted">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}