import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-[#141f2c]/85 via-[#0d141d]/90 to-[#0b1017]/95 p-6 shadow-panel backdrop-blur-md",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_35%)] before:opacity-60",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}