import type { Metadata } from "next";

import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/navbar";

const description = "Engineering case study for an AI-powered WhatsApp lead automation workflow using OpenAI, Twilio, n8n, and Google Sheets.";

export const metadata: Metadata = {
  title: { absolute: "AI Lead Automation Platform | Aman Raj" },
  description,
  openGraph: {
    title: "AI Lead Automation Platform | Aman Raj",
    description,
  },
};

export default function AILeadAutomationPage() {
  return (
    <>
      <Navbar />
      <main><CaseStudySection showBackLink /></main>
      <Footer />
    </>
  );
}
