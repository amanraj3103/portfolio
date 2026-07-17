import { LessonCard } from "@/components/story/LessonCard";

type StoryCardProps = {
  year: string;
  title: string;
  paragraphs: readonly string[];
  lesson: string;
};

export function StoryCard({ year, title, paragraphs, lesson }: StoryCardProps) {
  return (
    <article className="rounded-3xl border border-white/[0.08] bg-white/[0.022] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.035)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-[0_28px_75px_rgba(0,0,0,0.28)] sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300 lg:hidden">{year}</p>
      <h2 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl lg:mt-0">{title}</h2>
      <div className="mt-6 space-y-4 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <LessonCard>{lesson}</LessonCard>
    </article>
  );
}
