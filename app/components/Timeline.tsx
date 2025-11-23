"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  phase: string;
  period: string;
  focus: string;
  deliverables: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline = ({ items }: TimelineProps) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-4 w-0.5 bg-emerald-900/10 sm:left-6" />
    <ul className="flex flex-col gap-8">
      {items.map((item, index) => (
        <motion.li
          key={item.phase}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="relative flex gap-6"
        >
          <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ecogic-green text-xs font-semibold text-white shadow-lg">
            {index + 1}
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-emerald-900/10 bg-ecogic-sand/50 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="text-lg font-semibold text-ecogic-forest">{item.phase}</p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ecogic-green shadow-sm">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-neutral-700">{item.focus}</p>
            <ul className="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
              {item.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-start gap-2 rounded-xl bg-white/80 p-3 shadow-sm"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ecogic-green" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
);

export type { TimelineItem };
export default Timeline;
