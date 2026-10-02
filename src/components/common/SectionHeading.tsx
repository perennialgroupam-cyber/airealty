import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[1px] bg-gold" />
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-gold" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] tracking-tight ${
          isDark ? 'text-ivory-light' : 'text-burgundy-dark'
        }`}
      >
        {title.split('\n').map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-light ${
            isDark ? 'text-ivory/80' : 'text-charcoal-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mt-6 h-[1.5px] w-16 bg-gold/50 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
