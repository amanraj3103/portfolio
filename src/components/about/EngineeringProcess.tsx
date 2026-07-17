"use client";

import { motion } from "framer-motion";
import { BarChart3, Blocks, Code2, Search, Workflow } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Understand the Business",
    description: "Find the real need behind the request.",
  },
  {
    icon: Workflow,
    title: "Design the Workflow",
    description: "Map a clear path from input to outcome.",
  },
  {
    icon: Blocks,
    title: "Choose the Right Technology",
    description: "Use tools that fit the problem and context.",
  },
  {
    icon: Code2,
    title: "Build & Iterate",
    description: "Deliver, learn, and refine in focused cycles.",
  },
  {
    icon: BarChart3,
    title: "Measure the Impact",
    description: "Check whether the solution creates value.",
  },
] as const;

export function EngineeringProcess() {
  return (
    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">How I Think</p>
      <h3 className="mt-4 max-w-xl text-xl font-medium tracking-tight text-white sm:text-2xl">
        Every solution starts with understanding the problem.
      </h3>

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="mt-8 grid gap-3 md:grid-cols-5"
        aria-label="Engineering process"
      >
        {processSteps.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {index < processSteps.length - 1 && (
              <span
                className="absolute left-5 top-full h-3 w-px bg-white/15 md:left-full md:top-7 md:h-px md:w-3"
                aria-hidden="true"
              />
            )}
            <div className="h-full rounded-2xl border border-white/[0.08] bg-black/20 p-4 transition-[border-color,background-color] duration-300 hover:border-blue-300/20 hover:bg-white/[0.025]">
              <span className="grid size-8 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.035]">
                <Icon className="size-4 text-blue-300" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h4 className="mt-4 text-sm font-medium leading-5 text-zinc-100">{title}</h4>
              <p className="mt-2 text-xs leading-5 text-zinc-500">{description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
