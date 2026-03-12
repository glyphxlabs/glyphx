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
    "bg-gradient-to-b from-[#8de6ff] to-[#49bdda] text-[#041015] shadow-glow border border-[#95e9ff]/40 hover:-translate-y-0.5",
  secondary:
    "bg-[#0d151d]/80 text-text border border-line hover:border-accent/40 hover:bg-[#132131]",
  ghost:
    "bg-transparent text-textMuted border border-transparent hover:text-text hover:border-line"
};

export function Button({ href, children, variant = "primary", className, ...rest }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300",
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