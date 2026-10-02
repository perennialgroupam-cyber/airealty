import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { WHY_US_PILLARS } from '../../data/content';
import { ShieldCheck, Target, Layers, Handshake } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const icons = [ShieldCheck, Target, Layers, Handshake];

  return (
    <section className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The AI Realty Distinction"
          title="Building Opportunities. Creating Landmarks."
          subtitle="A disciplined corporate framework built on engineering heritage, localized Mumbai intelligence, and collaborative stakeholder outcomes."
          align="center"
          theme="light"
          className="mb-16 sm:mb-20"
        />

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_US_PILLARS.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group bg-white p-8 rounded-sm border border-ivory-border shadow-subtle hover:border-gold/70 transition-all duration-300 hover:shadow-luxury flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-ivory-border mb-6">
                    <span className="font-serif text-3xl font-light text-gold-dark">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-burgundy/5 group-hover:bg-burgundy group-hover:text-gold text-burgundy flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-burgundy group-hover:text-burgundy-secondary transition-colors font-medium mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-secondary font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle gold line accent */}
                <div className="mt-8 pt-4 border-t border-ivory-border">
                  <div className="w-8 h-[2px] bg-gold/40 group-hover:w-full group-hover:bg-gold transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
