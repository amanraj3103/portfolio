import { Bot, FileSpreadsheet, ListChecks, Mail, ShieldCheck, Trash2 } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Conversations", description: "OpenAI-powered contextual replies." },
  { icon: ShieldCheck, title: "GDPR Consent", description: "Collect consent before storing customer information." },
  { icon: ListChecks, title: "Lead Qualification", description: "Automatically capture structured customer details." },
  { icon: FileSpreadsheet, title: "Google Sheets Integration", description: "Lightweight administration for businesses." },
  { icon: Mail, title: "Email Notifications", description: "Notify administrators immediately when new leads arrive." },
  { icon: Trash2, title: "Data Deletion", description: "Users can delete their data using a simple command." },
] as const;

export function FeatureGrid() {
  return <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Platform features">{features.map(({ icon: Icon, title, description }) => <li key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-[border-color,background-color] duration-300 hover:border-blue-300/15 hover:bg-white/[0.03]"><Icon className="size-5 text-blue-300" strokeWidth={1.6} aria-hidden="true" /><h4 className="mt-5 text-sm font-medium text-zinc-100">{title}</h4><p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p></li>)}</ul>;
}
