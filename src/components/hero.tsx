"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, BriefcaseBusiness, Server } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const capabilities = [
  { icon: Bot, label: "AI Automation" },
  { icon: Server, label: "Backend Engineering" },
  { icon: BriefcaseBusiness, label: "Business-First Problem Solving" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 pb-16 pt-28 text-white sm:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.12),transparent_35%)]" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-50" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-black/20 to-transparent" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[54%] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px] sm:h-[30rem] sm:w-[30rem]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Available immediately · Open to opportunities across Europe
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[56rem] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          <span className="block">I build AI-powered software</span>
          <span className="hero-shine block">that solves real business problems.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[47.5rem] text-balance text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
        >
          AI Automation Engineer building production-ready backend systems, intelligent workflows, and software that helps businesses operate more efficiently.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link href="/#projects" className={cn(buttonVariants({ size: "lg" }), "group")}>
            View case studies
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/resume.pdf" className={buttonVariants({ variant: "outline", size: "lg" })}>
            View resume
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid w-full max-w-3xl grid-cols-1 divide-y divide-white/[0.08] border-y border-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {capabilities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 px-4 py-4 text-xs text-zinc-500 sm:text-sm">
              <Icon className="size-4 text-zinc-300" strokeWidth={1.5} />
              {label}
            </div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
