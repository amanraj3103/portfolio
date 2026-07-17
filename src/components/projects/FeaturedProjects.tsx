"use client";

import { motion } from "framer-motion";

import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "WSEI Student Management System",
    description: "Academic administration platform built with Next.js and PostgreSQL.",
    primaryLabel: "Live Demo",
    primaryHref: "https://wsei.vercel.app/",
    githubHref: "https://github.com/amanraj3103/WSEI",
  },
  {
    title: "Dream Axis Travel Solutions",
    description: "Business website and lead generation platform designed for a travel consultancy.",
    primaryLabel: "Visit Website",
    primaryHref: "https://www.dreamaxis.co.in/",
    githubHref: "https://github.com/amanraj3103/dream-axis-website",
  },
  {
    title: "Lava Lublin",
    description: "Modern restaurant website focused on responsive design and customer experience.",
    primaryLabel: "Visit Website",
    primaryHref: "https://lava-lublin-nextjs.vercel.app/",
    githubHref: "https://github.com/amanraj3103/lava-lublin-nextjs",
  },
] as const;

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="featured-work-heading" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.03] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.header initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">Selected Projects</p>
          <h2 id="featured-work-heading" className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Featured Work</h2>
          <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">A selection of projects that combine software engineering, AI automation, and practical business problem solving.</p>
        </motion.header>

        <div className="mt-12"><FeaturedProject /></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mt-4 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
