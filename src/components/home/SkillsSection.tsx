import { Bot, Code2, Server, Wrench } from "lucide-react";

const skillGroups = [
  { icon: Bot, title: "AI & Automation", skills: ["OpenAI API", "Prompt Engineering", "n8n", "Workflow Automation"] },
  { icon: Server, title: "Backend", skills: ["Python", "FastAPI", "REST APIs", "SQL", "PostgreSQL"] },
  { icon: Code2, title: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { icon: Wrench, title: "Tools & Deployment", skills: ["Git", "Docker", "Linux", "Vercel", "Firebase"] },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">Core Skills</p>
          <h2 id="skills-heading" className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">Tools I use to build practical software.</h2>
        </header>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article key={title} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]">
              <Icon className="size-5 text-blue-300" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 text-base font-medium text-white">{title}</h3>
              <ul className="mt-5 space-y-2" aria-label={`${title} skills`}>
                {skills.map((skill) => <li key={skill} className="text-sm text-zinc-500">{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
