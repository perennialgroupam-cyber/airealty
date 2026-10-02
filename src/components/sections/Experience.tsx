import React from 'react';
import { CLIENT_ASSOCIATIONS } from '../../data/content';
import { Info } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-white border-y border-ivory-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-dark">
              Industry Experience
            </span>
            <span className="w-6 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy font-normal tracking-tight">
            Experience Across Industries
          </h2>

          <div className="w-12 h-[1px] bg-gold/50 mx-auto my-4" />

          <p className="text-sm sm:text-base text-charcoal-secondary font-light leading-relaxed">
            AI Realty's company-provided material references experience with organizations including L&T, VITS, Toyota Showroom, HDFC Bank, Kumar Builders & Developers and Atlantic Wind Infrastructure Pvt. Ltd.
          </p>
        </div>

        {/* Clean Monochrome Corporate Name Blocks (Compliant, No Fake Logos) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENT_ASSOCIATIONS.map((client, index) => (
            <div
              key={index}
              className="group p-6 rounded-sm bg-ivory/60 border border-ivory-border hover:border-gold/50 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-subtle hover:bg-white"
            >
              <div className="w-full">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-secondary/70 block mb-2 font-medium">
                  {client.tag}
                </span>
                <h4 className="font-serif text-sm sm:text-base font-semibold text-charcoal group-hover:text-burgundy transition-colors leading-snug">
                  {client.name}
                </h4>
              </div>

              <div className="mt-4 w-6 h-[1px] bg-gold/30 group-hover:w-10 group-hover:bg-gold transition-all" />
            </div>
          ))}
        </div>

        {/* Mandatory Disclosure / Compliance Badge */}
        <div className="mt-10 p-4 rounded-sm bg-ivory border border-gold/30 max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-charcoal-secondary text-center">
          <Info className="w-4 h-4 text-gold-dark shrink-0" />
          <span>
            Associations / clients cited in company-provided material. Listed solely for descriptive reference without implying direct institutional endorsement.
          </span>
        </div>
      </div>
    </section>
  );
};
