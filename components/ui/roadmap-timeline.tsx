import { MotionReveal } from "@/components/ui/motion-reveal";
import { StatusBadge } from "@/components/ui/status-badge";

type Milestone = {
  title: string;
  quarter: string;
  status: string;
  detail: string;
};

type RoadmapTimelineProps = {
  milestones: Milestone[];
};

export function RoadmapTimeline({ milestones }: RoadmapTimelineProps) {
  return (
    <div className="relative space-y-4 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-line md:before:left-1/2">
      {milestones.map((milestone, idx) => (
        <MotionReveal key={milestone.title} delay={idx * 0.03}>
          <article className="relative grid gap-4 pl-10 md:grid-cols-2 md:gap-6 md:pl-0">
            <span className="absolute left-[10px] top-6 h-3 w-3 rounded-full border border-accent/60 bg-accent/20 shadow-glow md:left-1/2 md:-ml-[6px]" />
            <div className={idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
              <div className="rounded-2xl border border-line bg-gradient-to-b from-[#121a25] to-[#0b1119] p-5 shadow-metal">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xl font-semibold text-text">{milestone.title}</p>
                  <StatusBadge status={milestone.status} />
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-accent">{milestone.quarter}</p>
                <p className="mt-3 text-sm leading-relaxed text-textMuted">{milestone.detail}</p>
              </div>
            </div>
          </article>
        </MotionReveal>
      ))}
    </div>
  );
}