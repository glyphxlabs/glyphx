"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { GlassCard } from "@/components/ui/glass-card";

type TabItem = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  items: TabItem[];
};

export function Tabs({ items }: TabsProps) {
  const [active, setActive] = useState(items[0]?.id);
  const current = items.find((item) => item.id === active) ?? items[0];

  return (
    <MotionReveal>
      <GlassCard className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const isActive = item.id === current.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.13em] transition",
                  isActive
                    ? "border-accent/50 bg-accent/15 text-accent"
                    : "border-line bg-panel/70 text-textMuted hover:text-text"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="rounded-xl border border-line/80 bg-[#0a0f15] p-5">
          <p className="text-base leading-relaxed text-textMuted">{current.content}</p>
        </div>
      </GlassCard>
    </MotionReveal>
  );
}