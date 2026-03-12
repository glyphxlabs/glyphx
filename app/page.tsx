import { ArrowRight, Cpu, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { DeviceFrame } from "@/components/ui/device-frame";
import { MetricCard } from "@/components/ui/metric-card";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ProductCard } from "@/components/ui/product-card";
import { Accordion } from "@/components/ui/accordion";
import { WaitlistModule } from "@/components/ui/waitlist-module";
import { ecosystemPillars, faqItems, heroStats, productCatalog } from "@/data/site";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-10 pt-12 md:space-y-28 md:pt-16">
      <section className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <MotionReveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Adaptive Input for the Next Generation of Computing
          </p>
          <h1 className="mt-5 text-balance text-4xl leading-tight text-text md:text-6xl">
            A keyboard that <span className="text-accent">changes with you</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-textMuted md:text-lg">
            HyroGlyphX combines precision hardware, intelligent input systems, and GlyphOS into one premium platform.
            Every key can become a symbol, control, or command exactly when you need it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/business" variant="secondary">
              Business Overview
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <MetricCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <DeviceFrame />
        </MotionReveal>
      </section>

      <section className="section-shell space-y-8">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Hardware, software, and symbolic interface design unified"
          description="HyroGlyphX is engineered as a full-stack adaptive input ecosystem, not a single device."
        />
        <FeatureGrid
          items={ecosystemPillars.map((pillar) => ({
            title: pillar.subtitle,
            subtitle: pillar.title,
            description: pillar.description
          }))}
        />
      </section>

      <section className="section-shell space-y-8">
        <SectionHeading
          eyebrow="Featured"
          title="Built for creators, operators, and technical teams"
          description="A premium input platform with product depth across hardware, control software, and future developer expansion."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {productCatalog.map((product, idx) => (
            <ProductCard key={product.name} {...product} delay={idx * 0.05} />
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-6 lg:grid-cols-3">
        <MotionReveal>
          <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-metal">
            <Cpu className="h-5 w-5 text-accent" />
            <h3 className="mt-4 text-xl font-semibold text-text">Adaptive Hardware Layer</h3>
            <p className="mt-3 text-sm text-textMuted">
              Premium chassis engineering, key-display matrix architecture, and robust switch dynamics designed for serious daily use.
            </p>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.06}>
          <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-metal">
            <Layers className="h-5 w-5 text-accent" />
            <h3 className="mt-4 text-xl font-semibold text-text">GlyphOS Intelligence Layer</h3>
            <p className="mt-3 text-sm text-textMuted">
              Scene orchestration, symbolic key logic, and low-latency transitions that adapt workflows in real time.
            </p>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-metal">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="mt-4 text-xl font-semibold text-text">Developer Expansion Layer</h3>
            <p className="mt-3 text-sm text-textMuted">
              SDK and API surfaces are being designed for secure integrations, profile packs, and custom interaction models.
            </p>
          </div>
        </MotionReveal>
      </section>

      <section className="section-shell grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Roadmap confidence with practical execution"
            description="HyroGlyphX is built to launch with technical discipline, premium industrial quality, and a staged ecosystem rollout."
          />
          <Accordion items={faqItems} />
        </div>
        <MotionReveal delay={0.08}>
          <WaitlistModule />
        </MotionReveal>
      </section>
    </div>
  );
}