import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export function ContactForm() {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold text-text">Contact HyroGlyphX</h3>
      <p className="mt-2 text-sm text-textMuted">
        Tell us whether you are exploring pilot deployments, partnerships, or investment opportunities.
      </p>
      <form className="mt-5 grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full name"
            className="h-11 rounded-xl border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
            aria-label="Full name"
          />
          <input
            type="email"
            placeholder="Work email"
            className="h-11 rounded-xl border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
            aria-label="Work email"
          />
        </div>
        <select
          className="h-11 rounded-xl border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
          aria-label="Inquiry type"
          defaultValue=""
        >
          <option value="" disabled>
            Inquiry type
          </option>
          <option>Customer / Waitlist</option>
          <option>Business / Partnership</option>
          <option>Investor Relations</option>
          <option>Developer Program</option>
        </select>
        <textarea
          rows={5}
          placeholder="How can we help?"
          className="rounded-xl border border-line bg-[#0c1219] px-4 py-3 text-sm text-text outline-none transition focus:border-accent/60"
          aria-label="Message"
        />
        <div className="flex justify-end">
          <Button type="submit">Send Inquiry</Button>
        </div>
      </form>
    </GlassCard>
  );
}