import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SRA_PROCESS } from '../../data/content';
import { Button } from '../common/Button';

interface SRASectionProps {
  onOpenConsultation: (interest?: string) => void;
}

export const SRASection: React.FC<SRASectionProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="sra-section" className="py-24 sm:py-32 bg-burgundy text-ivory relative overflow-hidden border-t border-gold/30">
      {/* Background radial luxury lighting */}
      <div className="absolute inset-0 bg-radial-gradient-burgundy opacity-80 pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold">
                Vertical 02 &bull; Urban Rehabilitation
              </span>
              <span className="w-6 h-[1px] bg-gold" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-ivory-light font-normal tracking-tight">
              SRA Projects
            </h2>

            <p className="font-serif italic text-gold text-lg sm:text-2xl mt-3 font-light">
              "Structured Development. Community-Focused Outcomes."
            </p>

            <div className="w-16 h-[1.5px] bg-gold/50 mx-auto mt-6" />

            <p className="mt-6 text-sm sm:text-base text-ivory/80 font-light leading-relaxed max-w-2xl mx-auto">
              Slum Rehabilitation Authority (SRA) schemes in Mumbai are government-regulated frameworks that replace dense, informal settlements with permanent, dignified housing while liberating valuable land for modern residential and commercial development. AI Realty focuses on SRA project opportunities and execution, navigating complex social dynamics and statutory procedures with professional integrity.
            </p>
          </motion.div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connecting Gold Bar */}
            <div className="absolute top-7 left-12 right-12 h-[2px] bg-gold/30 z-0" />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {SRA_PROCESS.map((item, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col items-center text-center group focus:outline-none cursor-pointer"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-sm font-semibold transition-all duration-300 border-2 ${
                        isActive
                          ? 'bg-gold text-burgundy-deep border-white shadow-gold-glow scale-110'
                          : 'bg-burgundy-deep text-gold border-gold/40 group-hover:border-gold group-hover:bg-burgundy-secondary'
                      }`}
                    >
                      {item.step}
                    </div>

                    <h4
                      className={`mt-4 font-serif text-lg tracking-wide transition-colors ${
                        isActive ? 'text-gold font-semibold' : 'text-ivory group-hover:text-gold-light'
                      }`}
                    >
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-ivory/70 font-light leading-relaxed px-2">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative mb-12">
          {/* Vertical line indicator */}
          <div className="absolute top-3 bottom-3 left-6 w-[2px] bg-gold/30" />

          {SRA_PROCESS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-4 pl-2"
            >
              <div className="w-10 h-10 rounded-full bg-gold text-burgundy-deep border-2 border-white flex items-center justify-center font-serif text-xs font-bold shrink-0 z-10 shadow-md">
                {item.step}
              </div>
              <div className="bg-burgundy-surface p-5 rounded-sm border border-gold/30 flex-1">
                <h4 className="font-serif text-lg text-gold font-medium mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom SRA Strategic Assurance */}
        <div className="bg-burgundy-surface/90 border border-gold/30 p-8 sm:p-10 rounded-sm shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-ivory-light">
              Have an SRA Cluster or Proposal under Consideration?
            </h4>
            <p className="text-xs sm:text-sm text-ivory/75 font-light max-w-xl">
              We provide strategic feasibility, documentation support, and end-to-end execution advisory for complex SRA opportunities.
            </p>
          </div>

          <Button
            variant="gold"
            size="md"
            withArrow
            onClick={() => onOpenConsultation('SRA Project Development')}
          >
            Explore SRA
          </Button>
        </div>
      </div>
    </section>
  );
};
