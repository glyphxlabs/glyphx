import { cn } from "@/lib/cn";

type StatusBadgeProps = {
  status: string;
  className?: string;
};

const toneMap: Record<string, string> = {
  Completed: "border-emerald-300/30 bg-emerald-500/10 text-emerald-200",
  Prototype: "border-cyan-300/30 bg-cyan-500/10 text-cyan-200",
  Beta: "border-sky-300/30 bg-sky-500/10 text-sky-200",
  Upcoming: "border-violet-300/30 bg-violet-500/10 text-violet-200",
  Concept: "border-zinc-300/30 bg-zinc-500/10 text-zinc-200",
  Planned: "border-amber-300/30 bg-amber-500/10 text-amber-200",
  "In Progress": "border-blue-300/30 bg-blue-500/10 text-blue-200",
  Preview: "border-fuchsia-300/30 bg-fuchsia-500/10 text-fuchsia-200",
  "Coming Soon": "border-slate-300/30 bg-slate-500/10 text-slate-200"
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em]",
        toneMap[status] ?? "border-line bg-panel text-textMuted",
        className
      )}
    >
      {status}
    </span>
  );
}