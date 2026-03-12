import { SectionHeading } from "@/components/ui/section-heading";
import { RoadmapTimeline } from "@/components/ui/roadmap-timeline";
import { roadmapMilestones } from "@/data/site";
import { StatusBadge } from "@/components/ui/status-badge";

export default function RoadmapPage() {
  const completed = roadmapMilestones.filter((item) => item.status === "Completed").length;
  const inProgress = roadmapMilestones.filter((item) => item.status === "In Progress").length;
  const planned = roadmapMilestones.filter((item) => item.status === "Planned").length;

  return (
    <div className="section-shell space-y-12 pb-12 pt-14 md:pt-16">
      <section className="space-y-5">
        <SectionHeading
          eyebrow="Roadmap"
          title="From concept to ecosystem expansion"
          description="A staged, execution-focused roadmap for hardware, firmware, software, manufacturing, and platform scale."
        />
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-panel/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-textMuted">Completed</p>
            <p className="mt-2 text-2xl font-semibold text-text">{completed}</p>
            <StatusBadge className="mt-2" status="Completed" />
          </div>
          <div className="rounded-xl border border-line bg-panel/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-textMuted">In Progress</p>
            <p className="mt-2 text-2xl font-semibold text-text">{inProgress}</p>
            <StatusBadge className="mt-2" status="In Progress" />
          </div>
          <div className="rounded-xl border border-line bg-panel/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-textMuted">Planned</p>
            <p className="mt-2 text-2xl font-semibold text-text">{planned}</p>
            <StatusBadge className="mt-2" status="Planned" />
          </div>
        </div>
      </section>

      <section>
        <RoadmapTimeline milestones={roadmapMilestones} />
      </section>
    </div>
  );
}