"use client";

import { motion } from "framer-motion";

import { StoryCard } from "@/components/story/StoryCard";

const chapters = [
  { year: "2018", title: "Learning to Love Difficult Problems", paragraphs: ["Long before I discovered software engineering, I loved solving mathematical problems.", "One day in school, a challenging mathematics question was left unsolved by the class and was even assumed to be incorrect. Instead of accepting that conclusion, I took the problem home, spent hours working through it, and returned the next day with the complete solution.", "That moment taught me something much more valuable than mathematics.", "Sometimes difficult problems simply require patience, curiosity, and another perspective."], lesson: "Difficult problems rarely need shortcuts—they usually need persistence." },
  { year: "2019–2021", title: "Discovering Technology", paragraphs: ["Growing up, I spent a lot of time around my mother's government online service centre.", "Watching technology simplify everyday services made me curious about how software actually worked behind the scenes.", "That curiosity led me to choose Computer Science for higher secondary school, where I learned Python and SQL for the first time.", "Programming wasn't just about writing code anymore. It became another way of solving problems."], lesson: "Technology becomes meaningful when it improves someone's everyday life." },
  { year: "2021", title: "My First Software Failure", paragraphs: ["One of my first ambitions was building a billing system for my mother's business.", "I coded almost 300 lines in Python. But I quickly realised that writing code and building software were completely different things.", "I knew nothing about APIs, databases, authentication, deployment, or frontend development. Eventually another software solution was adopted.", "Although the project never launched, it became one of the most important lessons of my career. It showed me how much there was still to learn."], lesson: "Software engineering is much bigger than programming." },
  { year: "2022", title: "Choosing Independence", paragraphs: ["After finishing school, I successfully cleared JEE Main and progressed through JEE Advanced Mathematics, giving me valuable opportunities to pursue engineering in India.", "Instead of taking the familiar path, I decided to study abroad. My goal wasn't simply earning a degree. I wanted to become independent, experience a different culture, support myself financially, and grow outside my comfort zone.", "I prepared for Sapienza University in Rome, completed the SAT, achieved an IELTS Overall Band Score of 7, and came close to admission before narrowly missing out because of limited seats.", "Eventually my journey led me to Poland. Looking back, that unexpected change shaped my future in ways I couldn't have predicted."], lesson: "Sometimes the path you didn't plan becomes the one that changes you the most." },
  { year: "2023", title: "Poland Changed Me", paragraphs: ["Moving to Poland was one of the biggest challenges of my life.", "Everything was different: a new education system, a different language, a new culture, homesickness, financial pressure, night shifts, balancing university with part-time work, and learning how to manage life independently.", "University taught me engineering. Life taught me resilience."], lesson: "The greatest growth usually happens outside your comfort zone." },
  { year: "2024–2025", title: "AI Changed How I Learn", paragraphs: ["As a bachelor's student, I understood that I couldn't master every framework and technology overnight.", "Instead of waiting until graduation, I began using AI as a learning partner. Not to replace thinking, but to accelerate learning.", "AI helped me understand unfamiliar technologies faster, experiment with new ideas, and transform business problems into working software much sooner than I could have otherwise.", "It completely changed the way I approach engineering."], lesson: "AI doesn't replace engineers—it amplifies engineers who know how to think." },
  { year: "Today", title: "Building Real Software", paragraphs: ["Instead of waiting for experience, I decided to create it.", "I started speaking directly with businesses, understanding their challenges, designing solutions, and building software.", "This journey led to projects such as Dream Axis Travel Solutions, Lava Lublin, the WSEI Student Management System, and my AI-powered WhatsApp Lead Automation Platform.", "Each project reinforced the same lesson. Real users expose problems that tutorials never can."], lesson: "Good software starts with understanding the business before choosing the technology." },
  { year: "Future", title: "Where I'm Going", paragraphs: ["Today I'm continuing to strengthen my backend engineering, cloud development, and AI automation skills while pursuing graduate software engineering opportunities across Europe.", "My long-term ambition extends beyond writing code.", "I want to become an AI Solutions Architect who understands both technology and business—someone trusted to design intelligent systems that solve meaningful problems at scale."], lesson: "The best engineers don't just build software—they design better ways of working." },
] as const;

export function Timeline() {
  return (
    <section id="story-timeline" aria-label="Aman Raj's engineering journey" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <ol className="space-y-8 sm:space-y-12">
        {chapters.map((chapter, index) => (
          <motion.li key={chapter.year} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, delay: Math.min(index * 0.02, 0.1), ease: [0.22, 1, 0.36, 1] }} className="relative grid gap-5 lg:grid-cols-[160px_1fr] lg:gap-10">
            <div className="relative hidden lg:block">
              <p className="sticky top-28 pt-2 text-sm font-medium text-blue-300">{chapter.year}</p>
              {index < chapters.length - 1 && <span aria-hidden="true" className="absolute left-[3px] top-10 h-[calc(100%+3rem)] w-px bg-gradient-to-b from-blue-300/30 to-white/[0.06]" />}
              <span aria-hidden="true" className="absolute left-0 top-3 size-[7px] rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.45)]" />
            </div>
            <StoryCard {...chapter} />
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
