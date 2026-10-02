import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { BRAND } from '../../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-burgundy-deep">
      {/* Background Cinematic Architecture Image with Parallax Scale */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=85"
            alt="Mumbai Skyline & Modern Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
          />
        </motion.div>

        {/* Multi-layered Burgundy Gradient Overlay for Depth and Luxury */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-burgundy/80 to-burgundy-deep/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient-burgundy opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/90 via-transparent to-burgundy-deep/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/40 bg-burgundy/60 backdrop-blur-md mb-8 shadow-gold-glow"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-medium text-gold-light">
            AI REALTY &bull; A PERENNIAL GROUP COMPANY &bull; EST. 1996
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
        </motion.div>

        {/* Main Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-light font-normal tracking-tight leading-[1.08] max-w-5xl"
        >
          From Land <br />
          <span className="italic font-light text-gold-gradient">to Landmark.</span>
        </motion.h1>

        {/* Supporting text directly from client document */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-ivory/85 font-light max-w-2xl leading-relaxed tracking-wide"
        >
          Strategic real estate solutions across land acquisition, SRA projects and redevelopment — carried through from paperwork to possession.
        </motion.p>

        {/* Client Slogan Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 text-xs sm:text-sm uppercase tracking-[0.22em] text-gold font-medium"
        >
          {BRAND.slogan}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Button
            href="#expertise"
            variant="outline-gold"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Our Expertise
          </Button>

          <Button
            variant="gold"
            size="lg"
            withArrow
            onClick={onOpenConsultation}
            className="w-full sm:w-auto"
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => {
          const statsSection = document.getElementById('stats-section');
          statsSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.24em] text-gold/70 group-hover:text-gold transition-colors">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-9 rounded-full border border-gold/40 flex items-start justify-center p-1.5"
        >
          <span className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
