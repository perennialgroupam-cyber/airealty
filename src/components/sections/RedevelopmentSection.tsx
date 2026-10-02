import React from 'react';
import { motion } from 'framer-motion';
import { REDEVELOPMENT_STEPS } from '../../data/content';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowDown, Sparkles, Building, KeyRound, ShieldCheck } from 'lucide-react';

interface RedevelopmentSectionProps {
  onOpenConsultation: (interest?: string) => void;
}

export const RedevelopmentSection: React.FC<RedevelopmentSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="redevelopment-section" className="py-24 sm:py-32 bg-ivory-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Vertical 03 • Urban Transformation"
          title="Reimagining Existing Spaces."
          subtitle="Redevelopment with a structured, project-focused approach."
          align="center"
          theme="light"
          className="mb-16 sm:mb-20"
        />

        {/* Transformation Showcase: Visual Before/After Metaphor & Architectural Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Architectural Imagery Display */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-sm border border-gold/30 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=600&q=80"
                    alt="Engineering and Project Structuring"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-white text-center">
                    <span className="text-[10px] uppercase tracking-widest text-burgundy font-semibold block">
                      Planning & Structural Review
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-burgundy text-white rounded-sm border border-gold/40 shadow-luxury">
                  <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                    Value Protection
                  </span>
                  <p className="font-serif text-lg leading-snug">
                    Transparent bank guarantees and verified corpus allocations.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-6 bg-white border border-ivory-border rounded-sm shadow-subtle">
                  <Sparkles className="w-6 h-6 text-gold mb-2" />
                  <span className="text-xs uppercase tracking-wider text-charcoal-secondary font-medium block">
                    Lifestyle Upgrade
                  </span>
                  <p className="font-serif text-base text-burgundy font-normal mt-1">
                    Extra carpet area, modern earthquake-resistant engineering & high-speed elevators.
                  </p>
                </div>

                <div className="overflow-hidden rounded-sm border border-gold/30 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="Modern Luxury Redevelopment Transformation"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-white text-center">
                    <span className="text-[10px] uppercase tracking-widest text-burgundy font-semibold block">
                      Completed Landmark Living
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Perspective */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-burgundy font-normal leading-snug">
              Guiding Housing Societies from Initial Deliberation to Key Handover.
            </h3>

            <p className="text-base text-charcoal-secondary font-light leading-relaxed">
              Redeveloping a cooperative housing society requires absolute transparency, consensus building, and rigorous compliance with Section 79A directives. AI Realty acts with an institutional fiduciary mindset, ensuring all society members receive their rightful entitlements with legal safeguards.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-charcoal">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span>Zero compromise on monthly transit rent and hardship corpus safety.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal">
                <Building className="w-5 h-5 text-gold shrink-0" />
                <span>Modern architectural floor plans tailored to family living needs.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal">
                <KeyRound className="w-5 h-5 text-gold shrink-0" />
                <span>Predictable construction timelines backed by Perennial Group’s building depth.</span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onOpenConsultation('Society Redevelopment')}
              >
                Explore Redevelopment
              </Button>
            </div>
          </div>
        </div>

        {/* 6-Stage Process Timeline */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-gold-dark block mb-2">
              Structured Roadmap
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-burgundy">
              The 6-Phase Society Redevelopment Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {REDEVELOPMENT_STEPS.map((stepItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-7 rounded-sm border border-ivory-border shadow-subtle hover:border-gold/60 transition-all hover:shadow-luxury group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-ivory-border mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                      {stepItem.step}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-burgundy/5 text-burgundy font-serif text-xs font-semibold flex items-center justify-center">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl text-burgundy group-hover:text-burgundy-secondary transition-colors font-medium mb-2">
                    {stepItem.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-charcoal-secondary font-light leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {index < REDEVELOPMENT_STEPS.length - 1 && (
                  <div className="pt-4 flex justify-end text-gold/60 group-hover:text-gold transition-colors">
                    <span className="text-[10px] uppercase tracking-widest flex items-center gap-1">
                      Next Step <ArrowDown className="w-3 h-3 -rotate-90 lg:rotate-0" />
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
