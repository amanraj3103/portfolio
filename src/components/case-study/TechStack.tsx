const technologies = ["OpenAI", "Twilio", "n8n", "Google Sheets API", "REST APIs", "Prompt Engineering", "Workflow Automation"] as const;

export function TechStack() {
  return <ul id="technology-stack" className="flex flex-wrap gap-2" aria-label="Technology stack">{technologies.map((technology) => <li key={technology} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-xs text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">{technology}</li>)}</ul>;
}
