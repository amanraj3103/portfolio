"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { HighlightCards } from "@/components/about/HighlightCards";
import { ProfileCard } from "@/components/about/ProfileCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-20">
        <motion.div
          {...reveal}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[480px] lg:mx-0"
        >
          <ProfileCard />
        </motion.div>

        <motion.div
          {...reveal}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">The Engineer Behind the Work</p>
          <h2 id="about-heading" className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            I build with a business problem in mind.
          </h2>

          <div className="mt-7 max-w-3xl space-y-5 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8">
            <p>
              I&apos;m Aman Raj, a Computer Engineering graduate from Akademia WSEI in Poland, focused on AI automation, backend engineering, and intelligent software systems.
            </p>
            <p>
              I enjoy understanding how a business operates before deciding which technology should solve the problem. That approach led me to design an AI-powered WhatsApp lead automation workflow for a recruitment consultancy, combining conversational AI, GDPR-conscious data capture, workflow automation, and lightweight administration.
            </p>
            <p>
              I&apos;m currently strengthening my backend and cloud engineering skills while pursuing graduate and junior software opportunities across Europe.
            </p>
          </div>

          <div className="mt-9">
            <HighlightCards />
          </div>

          <Link
            href="/journey"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group mt-8")}
          >
            Read My Journey
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
