import { SectionHeading } from "@/components/ui/section-heading";
import { MetricCard } from "@/components/ui/metric-card";
import { DashboardPanel } from "@/components/ui/dashboard-panel";
import { businessMetrics, businessPanels, roadmapMilestones } from "@/data/site";
import { StatusBadge } from "@/components/ui/status-badge";

export default function BusinessPage() {
  return (
    <div className="section-shell space-y-14 pb-12 pt-14 md:pt-16">
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Business / Investor View"
          title="A premium hardware + software company with scalable platform economics"
          description="This dashboard-style view summarizes market context, strategy, revenue architecture, and staged execution readiness."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessMetrics.map((metric) => (
            <MetricCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {businessPanels.map((panel) => (
          <DashboardPanel key={panel.title} title={panel.title} points={panel.points} />
        ))}
      </section>

      <section className="rounded-2xl border border-line bg-[#0a0f16]/95 p-6 shadow-panel">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Launch Roadmap Snapshot</p>
            <h3 className="mt-2 text-xl font-semibold text-text">Execution phases and readiness markers</h3>
          </div>
          <StatusBadge status="In Progress" />
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.13em] text-textMuted">
                <th className="px-3 py-3">Milestone</th>
                <th className="px-3 py-3">Timing</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Focus</th>
              </tr>
            </thead>
            <tbody>
              {roadmapMilestones.slice(0, 6).map((item) => (
                <tr key={item.title} className="border-b border-line/70 text-textMuted">
                  <td className="px-3 py-3 font-medium text-text">{item.title}</td>
                  <td className="px-3 py-3">{item.quarter}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-3 py-3">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}