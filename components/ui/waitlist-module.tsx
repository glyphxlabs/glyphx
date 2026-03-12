import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export function WaitlistModule() {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold text-text">Join the GlyphX Waitlist</h3>
      <p className="mt-2 text-sm text-textMuted">
        Receive prototype updates, launch windows, and early access invitations for creators, teams, and developers.
      </p>
      <form className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          type="email"
          placeholder="you@company.com"
          className="h-11 rounded-full border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
          aria-label="Waitlist email"
        />
        <Button type="submit">Request Early Access</Button>
      </form>
      <p className="mt-3 text-xs text-textMuted">By joining, you will receive roadmap and product communications.</p>
    </GlassCard>
  );
}