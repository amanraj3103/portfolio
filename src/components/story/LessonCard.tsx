import { Quote } from "lucide-react";

export function LessonCard({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-7 flex gap-3 rounded-2xl border border-blue-300/10 bg-blue-300/[0.035] p-4 text-sm leading-6 text-zinc-300">
      <Quote className="mt-0.5 size-4 shrink-0 text-blue-300" strokeWidth={1.6} aria-hidden="true" />
      <p>“{children}”</p>
    </blockquote>
  );
}
