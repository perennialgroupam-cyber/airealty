import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { EXPERTISE_CARDS } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 sm:py-32 bg-ivory-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Core Competencies"
          title="Our Expertise"
          subtitle="Three areas. One integrated approach."
          align="center"
          theme="light"
          className="mb-16 sm:mb-20"
        />

        {/* 3 Large Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {EXPERTISE_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between h-[520px] sm:h-[580px] p-8 sm:p-10 rounded-sm overflow-hidden shadow-luxury border border-gold/30 hover:border-gold transition-all duration-500 hover:shadow-luxury-hover"
            >
              {/* Background Architectural Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.65] contrast-[1.05]"
                />
                {/* Burgundy Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-burgundy/85 to-burgundy-deep/60 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-burgundy/30 mix-blend-multiply" />
              </div>

              {/* Animated Gold Border Accent on Hover */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/90 transition-all duration-500 pointer-events-none z-20" />

              {/* Top Card Content: Vertical Identifier & Number */}
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light px-2.5 py-1 bg-burgundy-deep/70 border border-gold/40 rounded-xs">
                    CARD {card.number}
                  </span>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold mt-2 font-medium">
                    {card.category}
                  </p>
                </div>
                <span className="font-serif text-3xl font-light text-gold/40 group-hover:text-gold transition-colors">
                  {card.number}
                </span>
              </div>

              {/* Bottom Card Content: Title, Description, Highlights & CTA */}
              <div className="relative z-10 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-light font-normal leading-snug group-hover:text-gold-pale transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-ivory/80 font-light leading-relaxed">
                  {card.description}
                </p>

                {/* Micro highlights */}
                <div className="pt-2 border-t border-gold/20 space-y-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {card.highlights.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-ivory/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Animated Arrow CTA Button */}
                <div className="pt-3">
                  <a
                    href={card.link}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gold-light group-hover:text-gold py-2 transition-colors cursor-pointer"
                  >
                    <span>
                      {card.id === 'land'
                        ? 'Explore Land'
                        : card.id === 'sra'
                        ? 'Explore SRA'
                        : 'Explore Redevelopment'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
