"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { GlassCard } from "@/components/ui/glass-card";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = idx === openItem;
        return (
          <GlassCard key={item.question} className="p-0">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-sm font-medium text-text md:text-base">{item.question}</span>
              <ChevronDown
                className={cn("h-4 w-4 text-textMuted transition-transform", isOpen && "rotate-180 text-accent")}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] border-t border-line" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 pt-3 text-sm leading-relaxed text-textMuted">{item.answer}</p>
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}