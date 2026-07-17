"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function StoryHero() {
  return (
    <header className="relative flex min-h-[78vh] items-center overflow-hidden px-5 pb-20 pt-32 text-center sm:px-8 sm:pt-40">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[140px]" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">My Story</p>
        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">From Solving Equations to Solving Business Problems</h1>
        <p className="mx-auto mt-7 max-w-3xl text-balance text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Every project I&apos;ve built and every challenge I&apos;ve faced has shaped the way I think about engineering. This isn&apos;t just a timeline of events—it&apos;s the story of how I learned to design software that solves real-world problems.</p>
        <a href="#story-timeline" className="mx-auto mt-12 inline-flex flex-col items-center gap-2 rounded-xl px-3 py-2 text-xs text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
          Scroll to explore
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </motion.div>
    </header>
  );
}
