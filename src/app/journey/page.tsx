import type { Metadata } from "next";

import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/navbar";
import { FinalQuote } from "@/components/story/FinalQuote";
import { StoryCTA } from "@/components/story/StoryCTA";
import { StoryHero } from "@/components/story/StoryHero";
import { Timeline } from "@/components/story/Timeline";

export const metadata: Metadata = {
  title: "My Story",
  description: "How Aman Raj’s experiences shaped his business-first approach to software engineering.",
};

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
        <StoryHero />
        <Timeline />
        <FinalQuote />
        <StoryCTA />
      </main>
      <Footer />
    </>
  );
}
