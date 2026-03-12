import { GlassCard } from "@/components/ui/glass-card";

type MetricCardProps = {
  label: string;
  value: string;
  note?: string;
};

export function MetricCard({ label, value, note }: MetricCardProps) {
  return (
    <GlassCard className="h-full p-5">
      <div className="mb-4 h-px w-14 bg-[linear-gradient(90deg,rgba(9,191,209,0.85),transparent)]" />
      <p className="text-xs uppercase tracking-[0.16em] text-textMuted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-text">{value}</p>
      {note && <p className="mt-2 text-sm text-textMuted">{note}</p>}
    </GlassCard>
  );
}
