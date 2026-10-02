import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <a href="#" className={`group flex items-center gap-3 focus:outline-none ${className}`}>
      {/* Official 3D Metallic Emblem Frame */}
      <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-sm border border-gold/40 bg-black/60 overflow-hidden shadow-md backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
        <img
          src="/images/client/logo-official.jpeg"
          alt="AI Realty Emblem"
          className="w-full h-full object-contain p-0.5 filter brightness-110 contrast-115"
          onError={(e) => {
            // Fallback to geometric monogram if image not loaded
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Brand Typographic Identity */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif text-xl md:text-2xl font-bold tracking-[0.18em] transition-colors ${
              isDark ? 'text-burgundy' : 'text-ivory-light'
            }`}
          >
            AI
          </span>
          <span
            className={`font-serif text-xl md:text-2xl font-light tracking-[0.22em] transition-colors ${
              isDark ? 'text-charcoal' : 'text-gold-light'
            }`}
          >
            REALTY
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.24em] text-gold font-medium mt-0.5">
          A PERENNIAL GROUP COMPANY &bull; EST. 1996
        </span>
      </div>
    </a>
  );
};
