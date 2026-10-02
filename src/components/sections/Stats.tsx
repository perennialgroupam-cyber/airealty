import React from 'react';
import { motion } from 'framer-motion';
import { STATS, BRAND } from '../../data/content';
import { Info } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section id="stats-section" className="bg-burgundy text-ivory py-16 sm:py-20 border-y border-gold/30 relative overflow-hidden">
      {/* Background Accent Grid / Shimmer */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.26em] text-gold font-semibold block mb-2">
              Heritage & Capability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-light font-normal tracking-tight">
              Experience That Builds Confidence.
            </h2>
            <div className="w-12 h-[1px] bg-gold/60 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* 4 Pillars / Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${
                index !== 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              {/* Champagne Gold Large Stat Number */}
              <span className="font-serif text-5xl sm:text-6xl font-medium tracking-tight text-gold-gradient drop-shadow-sm mb-2">
                {stat.number}
              </span>

              {/* Stat Label */}
              <span className="text-sm uppercase tracking-[0.2em] font-semibold text-ivory-light mb-2">
                {stat.label}
              </span>

              {/* Subtext */}
              <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed max-w-xs">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footnote / Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-6 border-t border-gold/20 flex items-center justify-center gap-2 text-center text-xs text-gold-pale/60"
        >
          <Info className="w-3.5 h-3.5 text-gold/60 shrink-0" />
          <span>{BRAND.disclaimer}</span>
        </motion.div>
      </div>
    </section>
  );
};
