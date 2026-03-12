import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { aboutPrinciples } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="section-shell space-y-16 pb-12 pt-14 md:space-y-20 md:pt-16">
      <section className="space-y-6">
        <SectionHeading
          eyebrow="About HyroGlyphX"
          title="We are building adaptive input systems for intelligent computing"
          description="HyroGlyphX exists to replace static keyboard assumptions with a premium adaptive interface layer that evolves with work, context, and intent."
        />
        <MotionReveal>
          <div className="grid gap-6 rounded-2xl border border-line bg-panel/80 p-7 shadow-panel md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">Mission</p>
              <p className="mt-3 text-sm leading-relaxed text-textMuted">
                Deliver precision hardware and intelligent interface software that help people operate faster, clearer, and with less friction.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">Long-term Vision</p>
              <p className="mt-3 text-sm leading-relaxed text-textMuted">
                Make adaptive keyboards a core computing category, with GlyphOS as the trusted platform for symbolic command systems across industries.
              </p>
            </div>
          </div>
        </MotionReveal>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Design Philosophy"
          title="Industrial restraint. Intelligent flexibility."
          description="Our design philosophy combines metal-grade hardware confidence with fluid software behavior so the interface can adapt without losing tactile trust."
        />
        <FeatureGrid
          items={aboutPrinciples.map((principle) => ({
            title: principle.title,
            description: principle.body
          }))}
        />
      </section>

      <section className="rounded-2xl border border-line bg-background/70 p-7 shadow-metal">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Why Adaptive Keyboards Matter</p>
            <h3 className="mt-2 text-3xl font-semibold text-text">Static keys are outdated for modern workflows.</h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-textMuted">
              Work today is cross-disciplinary, context-heavy, and tool-dense. A keyboard that can adapt symbols, macros, and workflows
              in real time becomes a strategic productivity surface, not just a typing device.
            </p>
          </div>
          <Button href="/products" variant="secondary" className="w-fit">
            Explore GlyphX + GlyphOS <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}