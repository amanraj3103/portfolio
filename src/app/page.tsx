import type { Metadata } from "next";

import { AboutSection } from "@/components/about/AboutSection";
import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";
import { ResumeCTA } from "@/components/home/ResumeCTA";
import { SkillsSection } from "@/components/home/SkillsSection";
import { Navbar } from "@/components/navbar";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";

export const metadata: Metadata = {
  title: "Home",
  description: "Product-focused engineering portfolio featuring polished, scalable digital experiences.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <SkillsSection />
      <ResumeCTA />
      <ContactSection />
      <Footer />
    </>
  );
}
