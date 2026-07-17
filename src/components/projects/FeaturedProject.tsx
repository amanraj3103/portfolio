"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, FileText, Presentation } from "lucide-react";

import { WorkflowIllustration } from "@/components/projects/WorkflowIllustration";
import { buttonVariants } from "@/components/ui/button";

const technologies = ["OpenAI", "Twilio", "n8n", "Google Sheets"] as const;

export function FeaturedProject() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-8 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_28px_80px_rgba(0,0,0,0.3),0_0_50px_rgba(59,130,246,0.04)] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
    >
      <div className="flex flex-col justify-center py-2 lg:py-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300">Featured Project</p>
        <h3 className="mt-4 text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">AI Lead Automation Platform</h3>
        <p className="mt-5 text-[15px] leading-7 text-zinc-400">
          Designed an AI-powered recruitment workflow that automates WhatsApp conversations, collects GDPR-compliant lead information, and streamlines customer engagement using OpenAI, Twilio, and workflow automation.
        </p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {technologies.map((technology) => (
            <motion.li key={technology} variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.35 }} className="rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
              {technology}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/case-studies/ai-lead-automation" className={buttonVariants({ size: "default" })}>
            <FileText className="size-4" aria-hidden="true" />
            View Case Study
          </Link>
          <Link href="/documents/ai-lead-automation-case-study.pdf" className={buttonVariants({ variant: "outline", size: "default" })}>
            <Presentation className="size-4" aria-hidden="true" />
            View Presentation
          </Link>
          <Link href="https://github.com/amanraj3103/ai-lead-automation-platform" className={buttonVariants({ variant: "ghost", size: "default" })}>
            <Code2 className="size-4" aria-hidden="true" />
            GitHub
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <WorkflowIllustration />
    </motion.article>
  );
}
