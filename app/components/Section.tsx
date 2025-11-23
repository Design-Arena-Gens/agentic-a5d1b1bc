"use client";

import { motion } from "framer-motion";
import clsx from "classnames";
import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ eyebrow, title, lead, children, className }: SectionProps) => (
  <section
    className={clsx(
      "relative overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-xl shadow-emerald-900/[0.08] ring-1 ring-black/[0.05] sm:px-12",
      className
    )}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 flex flex-col gap-5"
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ecogic-green">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-ecogic-forest sm:text-4xl">{title}</h2>
      {lead && <p className="max-w-2xl text-base text-neutral-700">{lead}</p>}
      <div className="text-base text-neutral-800">{children}</div>
    </motion.div>
    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 shadow-glow" />
  </section>
);

export default Section;
