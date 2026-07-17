import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StoryCTA() {
  return (
    <section aria-labelledby="story-cta-heading" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 id="story-cta-heading" className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">Let&apos;s Build Something Meaningful</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Whether you&apos;re looking for an AI engineer, backend developer, or someone who enjoys solving business problems through software, I&apos;d love to connect.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/#projects" className={cn(buttonVariants({ size: "lg" }), "group")}>View Projects<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}><Mail className="size-4" aria-hidden="true" />Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
