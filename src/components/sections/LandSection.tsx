import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { MapPin, FileCheck2, Compass } from 'lucide-react';

interface LandSectionProps {
  onOpenConsultation: (interest?: string) => void;
}

export const LandSection: React.FC<LandSectionProps> = ({ onOpenConsultation }) => {
  const features = [
    {
      icon: Compass,
      title: 'Strategic Evaluation',
      description:
        'Rigorous technical and legal analysis covering title verification, land tenure, encumbrance scrutiny, zoning parameters, and development regulations.',
      tags: ['Title Due Diligence', 'FSI/TDR Potential', 'Zoning Scrutiny']
    },
    {
      icon: MapPin,
      title: 'Opportunity Identification',
      description:
        'Sourcing off-market and institutional land holdings across primary development corridors with superior connectivity and long-term appreciation potential.',
      tags: ['Growth Corridors', 'Off-Market Sourcing', 'Assemblage Advisory']
    },
    {
      icon: FileCheck2,
      title: 'Development Planning',
      description:
        'Formulating comprehensive commercial models, master layout optimization, joint venture structures, and viable exit mechanisms for stakeholders.',
      tags: ['Financial Modeling', 'JV / DM Structuring', 'Master Layout']
    }
  ];

  return (
    <section id="land-section" className="py-24 sm:py-32 bg-ivory relative overflow-hidden border-t border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-dark">
                Vertical 01 &bull; Land
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy font-normal leading-[1.14] tracking-tight">
              Turning Land <br />
              <span className="italic font-light text-charcoal">Into Opportunity.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-secondary font-light leading-relaxed">
              AI Realty works with landowners, investors and development stakeholders to identify and structure opportunities around land acquisition and development.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onOpenConsultation('Land Acquisition & Development')}
              >
                Discuss a Land Opportunity
              </Button>
            </div>
          </div>

          {/* Right 3 Feature Points */}
          <div className="lg:col-span-7 space-y-5">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-white p-7 sm:p-8 rounded-sm shadow-subtle border border-ivory-border hover:border-gold/60 transition-all duration-300 hover:shadow-luxury"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 group-hover:bg-burgundy group-hover:text-gold transition-colors text-burgundy">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-xl sm:text-2xl text-burgundy group-hover:text-burgundy-secondary transition-colors font-medium">
                          {item.title}
                        </h3>
                        <span className="text-xs font-serif text-gold font-medium">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="text-sm text-charcoal-secondary font-light leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 bg-ivory text-charcoal-secondary border border-ivory-border rounded-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
