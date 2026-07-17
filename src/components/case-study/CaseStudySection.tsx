"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2 } from "lucide-react";

import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { EngineeringDecisions } from "@/components/case-study/EngineeringDecisions";
import { FeatureGrid } from "@/components/case-study/FeatureGrid";
import { LessonsGrid } from "@/components/case-study/LessonsGrid";
import { TechStack } from "@/components/case-study/TechStack";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const overview = [
  { term: "Role", detail: "Solution Designer & AI Automation Developer" },
  { term: "Project Type", detail: "Business Automation Platform" },
  { term: "Industry", detail: "HR & Recruitment" },
  { term: "Status", detail: "Prototype completed" },
] as const;

const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } };

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <div className="mb-7">{eyebrow && <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>}<h3 className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">{title}</h3></div>;
}

export function CaseStudySection({ showBackLink = false }: { showBackLink?: boolean }) {
  return (
    <section id="case-study" aria-labelledby="case-study-heading" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.035] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl">
        {showBackLink && (
          <Link href="/#projects" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-10 -ml-4")}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Featured Work
          </Link>
        )}
        <motion.header {...reveal} className="max-w-4xl"><p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">Flagship Case Study</p><h2 id="case-study-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">AI Lead Automation Platform</h2><p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Designed to help recruitment businesses respond instantly, qualify leads automatically, and reduce manual work using conversational AI and workflow automation.</p></motion.header>

        <motion.div {...reveal} className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8"><h3 className="sr-only">Project Overview</h3><dl className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{overview.map(({ term, detail }) => <div key={term}><dt className="text-xs uppercase tracking-[0.16em] text-zinc-600">{term}</dt><dd className="mt-2 text-sm leading-6 text-zinc-200">{detail}</dd></div>)}</dl></motion.div>

        <div className="mt-28 space-y-28">
          <motion.article {...reveal} className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><SectionHeading title="The Problem" /><div className="space-y-5 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8"><p>While discussing website development with a recruitment consultancy, I discovered they were losing potential clients because WhatsApp enquiries often went unanswered outside working hours.</p><p>The company also had no simple way to organise leads or track conversations without manually responding to every enquiry.</p><p>The challenge wasn&apos;t simply answering messages—it was creating an intelligent workflow that could respond instantly, collect GDPR consent, capture customer information, and notify the business automatically.</p></div></motion.article>

          <motion.article {...reveal} className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><SectionHeading title="The Solution" /><div className="space-y-5 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8"><p>I designed an AI-powered lead automation workflow that combines conversational AI, WhatsApp messaging, workflow automation, and lightweight data management.</p><p>Instead of acting as a simple chatbot, the platform guides customers through a structured conversation, collects GDPR consent, captures lead information, stores it securely, and automatically notifies the business whenever a qualified lead is generated.</p></div></motion.article>

          <motion.article {...reveal}><SectionHeading eyebrow="System Design" title="Architecture" /><ArchitectureDiagram /></motion.article>
          <motion.article {...reveal}><SectionHeading title="Key Features" /><FeatureGrid /></motion.article>
          <motion.article {...reveal}><SectionHeading title="Engineering Decisions" /><EngineeringDecisions /></motion.article>

          <motion.article {...reveal} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-9"><SectionHeading title="Biggest Challenge" /><div className="max-w-4xl space-y-4 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8"><p>The most difficult part wasn&apos;t building the AI workflow. It was obtaining production access to the WhatsApp Business API.</p><p>Initially I attempted to integrate directly with Meta Business Platform. Business verification requirements, compliance issues, and API restrictions delayed deployment.</p><p>Rather than abandoning the project, I redesigned the architecture using Twilio&apos;s WhatsApp API, allowing the system to achieve the same business outcome with a more practical deployment strategy.</p></div></motion.article>

          <motion.article {...reveal}><SectionHeading title="Lessons Learned" /><LessonsGrid /></motion.article>
          <motion.article {...reveal}><SectionHeading title="Technology Stack" /><TechStack /></motion.article>

          <motion.div {...reveal} className="rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-10 text-center sm:px-10 sm:py-14"><h3 className="text-balance text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">Interested in how I designed this system?</h3><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href="https://github.com/amanraj3103/ai-lead-automation-platform" className={buttonVariants({ variant: "outline", size: "lg" })}><Code2 className="size-4" aria-hidden="true" />View Source Code</Link><Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group")}>Discuss This Project<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div></motion.div>
        </div>
      </div>
    </section>
  );
}
