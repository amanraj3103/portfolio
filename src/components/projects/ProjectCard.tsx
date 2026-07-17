import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  githubHref: string;
};

export function ProjectCard({ title, description, primaryLabel, primaryHref, githubHref }: ProjectCardProps) {
  return (
    <article className="group flex min-h-72 flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-white/[0.028] hover:shadow-[0_22px_55px_rgba(0,0,0,0.24)]">
      <span className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition-colors duration-300 group-hover:border-blue-300/15 group-hover:bg-blue-300/[0.05]">
        <Code2 className="size-4 text-blue-300" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3 className="mt-7 text-xl font-medium tracking-[-0.025em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        <Link href={primaryHref} className={buttonVariants({ variant: "outline", size: "sm" })}>
          {primaryLabel}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link href={githubHref} className={buttonVariants({ variant: "ghost", size: "sm" })}>
          GitHub
        </Link>
      </div>
    </article>
  );
}
