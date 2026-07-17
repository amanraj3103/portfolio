import type { Metadata } from "next";

import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16"><ContactSection /></main>
      <Footer />
    </>
  );
}
