import React, { useState } from 'react';
import { Button } from '../common/Button';
import { User, Users, Briefcase, ArrowRight } from 'lucide-react';

interface CTAProps {
  onOpenConsultation: (interest?: string, audience?: string) => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenConsultation }) => {
  const [selectedAudience, setSelectedAudience] = useState<'Landowners' | 'Societies' | 'Development Partners'>('Landowners');

  const audienceOptions = [
    {
      id: 'Landowners' as const,
      label: 'Landowners',
      icon: User,
      subtitle: 'Clear title monetization, outright sale, or Joint Development Agreements with guaranteed commitments.'
    },
    {
      id: 'Societies' as const,
      label: 'Societies',
      icon: Users,
      subtitle: 'Transparent feasibility, incremental carpet area, and bank-guaranteed execution under 79A guidelines.'
    },
    {
      id: 'Development Partners' as const,
      label: 'Development Partners',
      icon: Briefcase,
      subtitle: 'Strategic co-investment, development management (DM), and institutional real estate structuring.'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-burgundy-deep">
      {/* Background Full-Width Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architectural High-Rise"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
        />
        {/* Burgundy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/95 via-burgundy/85 to-burgundy-deep/90" />
        <div className="absolute inset-0 bg-radial-gradient-burgundy opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-gold" />
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold">
            Strategic Consultation
          </span>
          <span className="w-8 h-[1px] bg-gold" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-light font-normal tracking-tight max-w-4xl mx-auto leading-tight">
          Have a Land or Redevelopment Opportunity?
        </h2>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-xl text-ivory/80 font-light max-w-2xl mx-auto">
          Let's explore the possibilities together.
        </p>

        {/* Three Audience Options Selector */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {audienceOptions.map((opt) => {
            const isSelected = selectedAudience === opt.id;
            const Icon = opt.icon;

            return (
              <button
                key={opt.id}
                onClick={() => setSelectedAudience(opt.id)}
                className={`p-6 rounded-sm border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-burgundy/90 border-gold shadow-gold-glow scale-102'
                    : 'bg-burgundy-deep/60 border-gold/30 hover:border-gold/60 hover:bg-burgundy/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm uppercase tracking-widest font-semibold text-gold">
                      {opt.label}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-gold-light' : 'text-gold/60'}`} />
                  </div>
                  <p className="text-xs text-ivory/75 font-light leading-relaxed">
                    {opt.subtitle}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gold font-medium">
                  <span>Select Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <Button
            variant="gold"
            size="lg"
            withArrow
            onClick={() => onOpenConsultation(undefined, selectedAudience)}
            className="shadow-luxury"
          >
            Start a Conversation
          </Button>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/50 mt-4">
            Confidential Consultation &bull; Institutional Discretion Guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};
