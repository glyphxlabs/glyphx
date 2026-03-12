import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs } from "@/components/ui/tabs";
import { MetricCard } from "@/components/ui/metric-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { devTabs, developerCards } from "@/data/site";

export default function DeveloperPage() {
  return (
    <div className="section-shell space-y-14 pb-12 pt-14 md:pt-16">
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Developer / Platform"
          title="GlyphOS developer ecosystem"
          description="A future-facing platform for custom symbolic workflows, integrations, and adaptive input tooling."
        />
        <Tabs items={devTabs} />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {developerCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-line bg-panel/80 p-5 shadow-metal">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-text">{card.title}</p>
              <StatusBadge status={card.status} />
            </div>
            <p className="mt-2 text-xl font-semibold text-accent">{card.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-textMuted">{card.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <MetricCard label="Planned API Domains" value="14" note="profiles, protocol, telemetry, automation" />
        <MetricCard label="Firmware Modules" value="9" note="scan, render, transport, updates" />
        <MetricCard label="Integrator Cohorts" value="3" note="creative, ops, enterprise pilots" />
      </section>
    </div>
  );
}