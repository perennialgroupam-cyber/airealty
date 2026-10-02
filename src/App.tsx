import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { LandSection } from './components/sections/LandSection';
import { SRASection } from './components/sections/SRASection';
import { RedevelopmentSection } from './components/sections/RedevelopmentSection';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { WhyUs } from './components/sections/WhyUs';
import { Leadership } from './components/sections/Leadership';
import { PerennialGroup } from './components/sections/PerennialGroup';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';
import { ProjectModal } from './components/modals/ProjectModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState<string | undefined>(undefined);
  const [modalAudience, setModalAudience] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (interest?: string, audience?: string) => {
    setModalInterest(interest);
    setModalAudience(audience);
    setModalOpen(true);
  };

  const handleSelectProject = (projectId: string) => {
    setModalInterest(`Opportunity Inquiry: ${projectId}`);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-burgundy selection:text-gold-pale">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* Fullscreen Hero */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Burgundy Trust Stats */}
        <Stats />

        {/* Split-screen About */}
        <About />

        {/* 3 Interactive Expertise Cards */}
        <Expertise />

        {/* Editorial Land Section */}
        <LandSection onOpenConsultation={(interest) => handleOpenConsultation(interest)} />

        {/* Burgundy SRA 5-Step Process Section */}
        <SRASection onOpenConsultation={(interest) => handleOpenConsultation(interest)} />

        {/* 6-Stage Redevelopment Process Section */}
        <RedevelopmentSection onOpenConsultation={(interest) => handleOpenConsultation(interest)} />

        {/* Portfolio & Opportunities with Placeholders */}
        <Projects onSelectProject={handleSelectProject} />

        {/* Compliant Industry Experience Associations */}
        <Experience />

        {/* 4 Corporate Pillars */}
        <WhyUs />

        {/* Executive Leadership & Quote */}
        <Leadership onOpenConsultation={() => handleOpenConsultation()} />

        {/* Perennial Group Timeline (1996 - Present) */}
        <PerennialGroup />

        {/* Final CTA with 3 Audience Pathways */}
        <CTA onOpenConsultation={(interest, audience) => handleOpenConsultation(interest, audience)} />

        {/* Direct Contact Advisory Form & Coordinates */}
        <Contact prefilledInterest={modalInterest} prefilledAudience={modalAudience} />
      </main>

      {/* Corporate Burgundy Footer */}
      <Footer />

      {/* Floating Luxury WhatsApp CTA */}
      <WhatsAppFloat onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Project Consultation Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultInterest={modalInterest}
        defaultAudience={modalAudience}
      />
    </div>
  );
}

export default App;
