const decisions = [
  { title: "Why OpenAI?", reason: "Strong conversational quality and efficient token usage." },
  { title: "Why Twilio?", reason: "Meta Business verification became a deployment blocker, so Twilio provided a faster and more reliable production path." },
  { title: "Why Google Sheets?", reason: "Simple, accessible, cost-effective, and perfectly suited to the client’s operational needs." },
] as const;

export function EngineeringDecisions() {
  return <ul className="grid gap-3 md:grid-cols-3" aria-label="Engineering decisions">{decisions.map(({ title, reason }, index) => <li key={title} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"><span className="text-xs font-medium tabular-nums text-blue-300/70">0{index + 1}</span><h4 className="mt-5 text-lg font-medium tracking-tight text-white">{title}</h4><p className="mt-3 text-sm leading-6 text-zinc-400">{reason}</p></li>)}</ul>;
}
