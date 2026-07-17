import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function ResumeCTA() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="bg-[#050505] px-5 py-12 text-white sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-9 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="resume-heading" className="text-balance text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">Looking for a graduate engineer who combines AI, automation, and business thinking?</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">I&apos;m available immediately and open to opportunities across Europe.</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href="/resume.pdf" download className={buttonVariants({ size: "default" })}><Download className="size-4" aria-hidden="true" />Download Resume</a>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "default" })}><Mail className="size-4" aria-hidden="true" />Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
