"use client";

import { motion } from "framer-motion";
import { Bot, CheckCheck, FileSpreadsheet, Mail, MessageCircle, Radio, User, Workflow } from "lucide-react";

const steps = [
  { icon: User, label: "User" }, { icon: MessageCircle, label: "WhatsApp" },
  { icon: Radio, label: "Twilio API" }, { icon: Workflow, label: "n8n Automation" },
  { icon: Bot, label: "OpenAI" }, { icon: CheckCheck, label: "Lead Qualification" },
  { icon: FileSpreadsheet, label: "Google Sheets" }, { icon: Mail, label: "Email Notification" },
] as const;

export function ArchitectureDiagram() {
  return (
    <motion.ol initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }} className="grid gap-3 md:grid-cols-4 xl:grid-cols-8" aria-label="Lead automation architecture workflow">
      {steps.map(({ icon: Icon, label }, index) => (
        <motion.li key={label} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="relative">
          {index < steps.length - 1 && <span aria-hidden="true" className="absolute left-6 top-full h-3 w-px bg-blue-300/30 md:hidden xl:left-full xl:top-1/2 xl:block xl:h-px xl:w-3" />}
          <div className="flex h-full min-h-24 items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/25 p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-blue-300/20 hover:shadow-[0_12px_35px_rgba(59,130,246,0.07)] md:flex-col md:items-start md:justify-between">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-blue-300/15 bg-blue-300/[0.06]"><Icon className="size-4 text-blue-300" strokeWidth={1.6} aria-hidden="true" /></span>
            <span className="text-sm leading-5 text-zinc-300">{label}</span>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
