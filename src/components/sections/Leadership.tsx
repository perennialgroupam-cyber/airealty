import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../common/Button';
import { Quote, Sparkles, Building, HardHat, Compass } from 'lucide-react';
import { BRAND } from '../../data/content';

interface LeadershipProps {
  onOpenConsultation: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenConsultation }) => {
  const portraits = [
    {
      id: 'main',
      title: 'Executive Portrait',
      image: BRAND.assets.leaderMain,
      context: 'Executive Leadership & Strategic Direction',
      badge: 'Directorate',
      icon: Building,
    },
    {
      id: 'blueprint',
      title: 'Planning & Legal',
      image: BRAND.assets.leaderBlueprint,
      context: 'Architectural Due Diligence & SRA Structuring',
      badge: 'Masterplanning',
      icon: Compass,
    },
    {
      id: 'executive',
      title: 'Penthouse Advisory',
      image: BRAND.assets.leaderExecutive,
      context: 'Investment Advisory & Society Consensus',
      badge: 'Strategic Vision',
      icon: Sparkles,
    },
    {
      id: 'site',
      title: 'Site Execution',
      image: BRAND.assets.leaderSite,
      context: 'Licensed Civil General Contracting Depth',
      badge: 'On-Site Delivery',
      icon: HardHat,
    },
  ];

  const [activePortraitIndex, setActivePortraitIndex] = useState(0);
  const currentPortrait = portraits[activePortraitIndex];

  return (
    <section id="leadership" className="py-24 sm:py-32 bg-ivory-light relative overflow-hidden border-t border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Leader Photograph Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luxury Gold Border Accent */}
              <div className="absolute -inset-3 border border-gold/40 rounded-sm -z-0 translate-x-2 translate-y-2 pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="relative z-10 bg-burgundy-deep rounded-sm overflow-hidden shadow-luxury border-2 border-gold/60 aspect-[4/5] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPortrait.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0"
                  >
                    <img
                      src={currentPortrait.image}
                      alt={currentPortrait.title}
                      className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-burgundy-deep/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex items-center justify-between text-gold/90 text-[10px] uppercase tracking-[0.24em] bg-burgundy-deep/60 backdrop-blur-xs">
                  <span className="font-semibold">{currentPortrait.badge}</span>
                  <span className="border-l border-gold/40 pl-2">AI Realty &bull; Est. 1996</span>
                </div>

                {/* Bottom Card Plate with Leader Info */}
                <div className="relative z-10 bg-burgundy-deep/90 border-t border-gold/40 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">
                      Founder / Director
                    </p>
                    <span className="text-[10px] uppercase tracking-wider text-ivory/60">
                      Leadership
                    </span>
                  </div>
                  <p className="font-serif text-lg sm:text-xl text-ivory-light font-medium">
                    [Director Name to be provided by client]
                  </p>
                  <p className="text-xs text-gold-pale/80 font-light mt-0.5">
                    {currentPortrait.context}
                  </p>
                </div>
              </div>

              {/* Thumbnail Selector Below Photograph */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {portraits.map((p, idx) => {
                  const isSelected = activePortraitIndex === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePortraitIndex(idx)}
                      className={`relative rounded-sm overflow-hidden aspect-[4/3] border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-gold shadow-gold-glow scale-105 ring-1 ring-gold'
                          : 'border-ivory-border opacity-70 hover:opacity-100 hover:border-gold/50'
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Quotes & Stated Client Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-dark">
                Founder & Executive Vision
              </span>
            </div>

            {/* Primary Editorial Quote */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-gold">
              <Quote className="w-8 h-8 text-gold/30 -mb-2" />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy font-normal leading-tight tracking-tight">
                "Building relationships today. <br />
                <span className="italic font-light text-charcoal">Creating landmarks for tomorrow."</span>
              </h2>
            </div>

            {/* Secondary Slogans from Client Document */}
            <div className="p-4 bg-burgundy/5 border border-gold/30 rounded-xs space-y-1">
              <p className="font-serif italic text-burgundy text-base sm:text-lg font-medium">
                "{BRAND.slogan}"
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
                {BRAND.secondaryTagline} &bull; {BRAND.visionSlogan}
              </p>
            </div>

            {/* Role & Name Designation */}
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-gold-dark font-semibold block">
                Founder / Director
              </span>
              <h3 className="font-serif text-2xl text-charcoal font-medium mt-0.5">
                [Name to be provided by client]
              </h3>
            </div>

            {/* Verbatim Insights from Client Materials */}
            <div className="space-y-4 text-charcoal-secondary font-light text-base leading-relaxed">
              <p>
                Backed by the stated experience of <strong>Perennial Group</strong> since 1996, AI Realty unites senior civil engineering discipline with sophisticated transaction structuring for landowners, housing societies, and institutional partners across Mumbai.
              </p>
              <p>
                From title scrutiny and initial General Body deliberations through Slum Rehabilitation Authority (SRA) execution and final key handover, our leadership is hands-on at every milestone — ensuring every project is <em>carried through from paperwork to possession</em>.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={onOpenConsultation}
              >
                Connect With Our Team
              </Button>

              <span className="text-xs text-charcoal-secondary font-light">
                Confidential advisory &bull; Direct leadership consultation
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
