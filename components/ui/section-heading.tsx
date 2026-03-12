import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className="inline-flex items-center rounded-full border border-line bg-panel/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-text md:text-4xl">{title}</h2>
      {description && <p className="text-pretty text-base text-textMuted md:text-lg">{description}</p>}
    </div>
  );
}