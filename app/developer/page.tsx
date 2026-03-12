import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs } from "@/components/ui/tabs";
import { MetricCard } from "@/components/ui/metric-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { devTabs, developerCards } from "@/data/site";

export default function DeveloperPage() {
  return (
    <div className="section-shell space-y-14 pb-12 pt-14 md:pt-16">
      <section className="rounded-[1.75rem] border border-line bg-[linear-gradient(180deg,rgba(15,22,30,0.94),rgba(7,11,16,0.99))] p-6 shadow-panel">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="rounded-2xl border border-line bg-[#0a1117] p-4 shadow-metal">
            <Image
              src="/brand/hyroglyphx-logo-icon.png"
              alt="HyroGlyphX icon"
              width={128}
              height={128}
              className="h-16 w-16 object-contain"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Developer Signature</p>
            <h2 className="mt-2 text-2xl font-semibold text-text md:text-3xl">
              GlyphOS is the programmable layer behind the HyroGlyphX brand system.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-textMuted">
              The developer platform extends the same precision language used in the physical identity: controlled,
              modular, and optimized for adaptive symbolic workflows.
            </p>
          </div>
        </div>
      </section>

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
          <div
            key={card.title}
            className="rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(19,28,37,0.88),rgba(10,15,22,0.96))] p-5 shadow-metal"
          >
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
