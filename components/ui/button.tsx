import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "border border-[#39dbe5]/35 bg-[linear-gradient(180deg,rgba(16,31,36,0.96),rgba(8,16,20,0.98))] text-[#dffcff] shadow-glow hover:-translate-y-0.5 hover:border-[#62edf5]/55 hover:bg-[linear-gradient(180deg,rgba(18,40,46,0.98),rgba(9,18,23,0.99))]",
  secondary:
    "bg-[#0d151d]/80 text-text border border-line shadow-metal hover:border-accent/40 hover:bg-[#132131]",
  ghost:
    "bg-transparent text-textMuted border border-transparent hover:text-text hover:border-line"
};

export function Button({ href, children, variant = "primary", className, ...rest }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.08em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
