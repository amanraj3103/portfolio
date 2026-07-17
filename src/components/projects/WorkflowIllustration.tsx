import { ArrowDown, ArrowRight, Bot, FileSpreadsheet, Mail, MessageCircle, Radio } from "lucide-react";

const workflow = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Radio, label: "Twilio" },
  { icon: Bot, label: "OpenAI" },
  { icon: FileSpreadsheet, label: "Google Sheets" },
  { icon: Mail, label: "Email" },
] as const;

export function WorkflowIllustration() {
  return (
    <div className="relative flex h-full min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-white/[0.07] bg-black/30 p-6 sm:p-8">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(96,165,250,0.08),transparent_55%)]" />
      <ol className="relative flex w-full max-w-lg flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-1" aria-label="Project workflow">
        {workflow.map(({ icon: Icon, label }, index) => (
          <li key={label} className="contents">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:flex-col sm:px-2 sm:py-4 sm:text-center">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-blue-300/15 bg-blue-300/[0.06]">
                <Icon className="size-4 text-blue-300" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="text-xs text-zinc-300">{label}</span>
            </div>
            {index < workflow.length - 1 && (
              <span className="flex justify-center text-blue-300/40" aria-hidden="true">
                <ArrowDown className="size-4 sm:hidden" />
                <ArrowRight className="hidden size-4 sm:block" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
