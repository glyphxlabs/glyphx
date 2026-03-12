import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(19,28,37,0.88),rgba(10,15,22,0.94)_55%,rgba(8,11,17,0.98))] p-6 shadow-panel backdrop-blur-md",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_32%)] before:opacity-70",
        "after:pointer-events-none after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(9,191,209,0.6),transparent)]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
