"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SpecializationSection } from "@/components/specialization-section"
import { EmploymentSection } from "@/components/employment-section"
import { AdministrativeSection } from "@/components/administrative-section"
import { PublicationsSection } from "@/components/publications-section"
import { TeachingSection } from "@/components/teaching-section"
import { TrainingSection } from "@/components/training-section"
import { ConferencesSection } from "@/components/conferences-section"
import { ContactSection } from "@/components/contact-section"
import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />

      <Header />

      <main className="pt-16 lg:pt-20 relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <SectionWrapper id="about">
          <AboutSection />
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper id="education">
          <EducationSection />
        </SectionWrapper>

        {/* Research/Specialization Section */}
        <SectionWrapper id="research">
          <SpecializationSection />
        </SectionWrapper>

        {/* Publications Section */}
        <SectionWrapper id="publications">
          <PublicationsSection />
        </SectionWrapper>

        {/* Employment Section */}
        <SectionWrapper id="employment">
          <EmploymentSection />
        </SectionWrapper>

        {/* Teaching Section */}
        <SectionWrapper id="teaching">
          <TeachingSection />
        </SectionWrapper>

        {/* Administrative Work Section */}
        <SectionWrapper id="admin">
          <AdministrativeSection />
        </SectionWrapper>

        {/* Training Section */}
        <SectionWrapper id="training">
          <TrainingSection />
        </SectionWrapper>

        {/* Conferences Section */}
        <SectionWrapper id="conferences">
          <ConferencesSection />
        </SectionWrapper>

        {/* Contact Section - Now Complete */}
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}
