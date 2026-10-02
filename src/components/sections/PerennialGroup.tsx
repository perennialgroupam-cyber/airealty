import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '../../data/content';

export const PerennialGroup: React.FC = () => {
  return (
    <section id="perennial-group" className="py-24 sm:py-32 bg-burgundy-deep text-ivory relative overflow-hidden border-t border-gold/30">
      {/* Background radial lighting */}
      <div className="absolute inset-0 bg-radial-gradient-burgundy opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
                Heritage & Strength
              </span>
              <span className="w-6 h-[1px] bg-gold" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-ivory-light font-normal tracking-tight">
              Backed by Experience Since 1996.
            </h2>

            <div className="w-16 h-[1.5px] bg-gold/50 mx-auto my-6" />

            <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
              AI Realty is backed by the stated experience of Perennial Group, a construction company established in 1996. This corporate alliance merges nearly three decades of civil contracting depth with specialized advisory in land assemblage, Slum Rehabilitation Authority schemes, and complex society redevelopment.
            </p>
          </motion.div>
        </div>

        {/* Visual Timeline (1996 -> Construction Depth -> AI Realty -> Core Verticals) */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical gold connector line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-gold/20" />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                    isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-right'
                  }`}>
                    <div className="bg-burgundy p-6 sm:p-7 rounded-sm border border-gold/30 shadow-luxury hover:border-gold transition-colors">
                      <span className="inline-block text-xs uppercase tracking-[0.24em] font-semibold text-gold px-2.5 py-0.5 bg-burgundy-deep/60 rounded-xs mb-2">
                        {event.year}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl text-ivory font-medium mb-2">
                        {event.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-ivory/75 font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node on Timeline */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold border-4 border-burgundy-deep flex items-center justify-center z-10 shadow-gold-glow">
                    <span className="w-2 h-2 rounded-full bg-burgundy-deep" />
                  </div>

                  {/* Empty Spacer on other side for desktop */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Small Bottom Disclaimer */}
        <div className="mt-16 text-center text-xs text-gold-pale/50 italic max-w-xl mx-auto">
          Corporate lineage and history presented strictly in accordance with company-provided information and Perennial Group documentation.
        </div>
      </div>
    </section>
  );
};
