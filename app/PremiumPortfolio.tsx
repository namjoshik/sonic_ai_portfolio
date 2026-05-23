"use client";

import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function PremiumPortfolio() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground font-sans">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(139,115,86,0.14),_transparent_45%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(148,126,103,0.12),_transparent_40%)] blur-3xl" />

      <Header />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-28">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

