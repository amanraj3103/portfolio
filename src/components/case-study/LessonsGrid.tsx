const lessons = [
  { title: "Business-first thinking", description: "Technology follows business needs." },
  { title: "Deployment matters", description: "Building software is only part of delivering a solution." },
  { title: "APIs have constraints", description: "Technical architecture must adapt to external platforms." },
  { title: "Automation creates value", description: "The greatest impact often comes from removing repetitive manual work." },
] as const;

export function LessonsGrid() {
  return <ul className="grid gap-3 sm:grid-cols-2" aria-label="Lessons learned">{lessons.map(({ title, description }) => <li key={title} className="rounded-2xl border border-white/[0.08] bg-black/20 p-5"><h4 className="text-sm font-medium text-zinc-100">{title}</h4><p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p></li>)}</ul>;
}
