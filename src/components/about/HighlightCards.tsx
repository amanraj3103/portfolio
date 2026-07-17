const highlights = [
  { icon: "📍", label: "Based in Poland" },
  { icon: "🚀", label: "Available Immediately" },
  { icon: "🇪🇺", label: "Open to Relocation Across Europe" },
] as const;

export function HighlightCards() {
  return (
    <ul className="grid gap-3 sm:grid-cols-3" aria-label="Professional highlights">
      {highlights.map(({ icon, label }) => (
        <li
          key={label}
          className="flex min-h-28 flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-blue-300/20 hover:bg-white/[0.035] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_35px_rgba(59,130,246,0.07)]"
        >
          <span className="text-base" aria-hidden="true">{icon}</span>
          <span className="mt-5 text-sm leading-5 text-zinc-300 sm:text-balance">{label}</span>
        </li>
      ))}
    </ul>
  );
}
