import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { Building2, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      {/* Subtle architectural background line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Architectural Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Picture Frame */}
            <div className="relative z-10 overflow-hidden shadow-luxury border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                alt="Mumbai Architecture and Modern High-Rise Transformation"
                className="w-full h-[460px] sm:h-[560px] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlaid Badge Frame */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 z-20 bg-burgundy text-white p-6 shadow-luxury border border-gold/40 max-w-xs sm:max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold font-semibold">
                  ESTABLISHED 1996
                </span>
              </div>
              <p className="font-serif text-lg leading-snug text-ivory">
                Engineering durability and disciplined delivery across decades.
              </p>
            </div>

            {/* Subtle decorative gold outline box behind */}
            <div className="hidden sm:block absolute -top-5 -left-5 w-48 h-48 border border-gold/40 pointer-events-none -z-0" />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-dark">
                About AI Realty
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy font-normal leading-[1.15] tracking-tight">
              Real Estate Expertise. <br />
              <span className="italic font-light text-charcoal">Built on Experience.</span>
            </h2>

            {/* Body Content */}
            <div className="space-y-4 text-charcoal-secondary font-light text-base sm:text-lg leading-relaxed">
              <p>
                AI Realty operates across land, SRA and redevelopment opportunities, combining real-estate expertise with project-focused execution.
              </p>
              <p>
                Backed by the experience of Perennial Group, a construction company established in 1996, AI Realty brings a long-term approach to real estate opportunities.
              </p>
            </div>

            {/* Feature Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-ivory-border">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 mt-1">
                  <Building2 className="w-4 h-4 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-burgundy">Institutional Rigor</h4>
                  <p className="text-xs text-charcoal-secondary font-light mt-0.5">Comprehensive feasibility and transparent title vetting.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 mt-1">
                  <Layers className="w-4 h-4 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-burgundy">Execution Focus</h4>
                  <p className="text-xs text-charcoal-secondary font-light mt-0.5">Translating urban blueprints into physical landmarks.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                href="#perennial-group"
              >
                Discover Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
