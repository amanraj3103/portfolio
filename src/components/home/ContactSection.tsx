import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

const details = [
  { term: "Email", value: "iamamanraj3103@gmail.com", href: "mailto:iamamanraj3103@gmail.com" },
  { term: "LinkedIn", value: "linkedin.com/in/aman-raj-developer", href: "https://linkedin.com/in/aman-raj-developer" },
  { term: "GitHub", value: "github.com/amanraj3103", href: "https://github.com/amanraj3103" },
  { term: "Location", value: "Poland" },
  { term: "Availability", value: "Immediate" },
  { term: "Relocation", value: "Across Europe" },
] as const;

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">Contact</p>
          <h2 id="contact-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Let&apos;s build something useful.</h2>
          <a href="mailto:iamamanraj3103@gmail.com" className={`${buttonVariants({ size: "lg" })} mt-7`}><Mail className="size-4" aria-hidden="true" />Send Email</a>
        </div>
        <dl className="grid gap-x-8 gap-y-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:grid-cols-2 sm:p-8">
          {details.map(({ term, value, ...detail }) => (
            <div key={term}>
              <dt className="text-xs uppercase tracking-[0.15em] text-zinc-600">{term}</dt>
              <dd className="mt-2 text-sm text-zinc-300">{"href" in detail ? <a href={detail.href} className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">{value}</a> : value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
