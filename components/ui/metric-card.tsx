import { GlassCard } from "@/components/ui/glass-card";

type MetricCardProps = {
  label: string;
  value: string;
  note?: string;
};

export function MetricCard({ label, value, note }: MetricCardProps) {
  return (
    <GlassCard className="h-full p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-textMuted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-text">{value}</p>
      {note && <p className="mt-2 text-sm text-textMuted">{note}</p>}
    </GlassCard>
  );
}