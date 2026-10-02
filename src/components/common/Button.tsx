import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline-gold' | 'outline-burgundy' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  href,
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-6 py-3 text-xs md:text-sm tracking-widest',
    lg: 'px-8 py-4 text-sm md:text-base tracking-widest',
  };

  const variantStyles = {
    primary:
      'bg-burgundy text-white hover:bg-burgundy-secondary border border-gold/40 shadow-sm hover:border-gold hover:shadow-gold-glow',
    gold:
      'bg-gold text-burgundy-deep font-semibold hover:bg-gold-light border border-gold-light shadow-md hover:shadow-gold-glow',
    'outline-gold':
      'bg-transparent text-gold hover:text-white border border-gold/60 hover:border-gold hover:bg-gold/15 backdrop-blur-xs',
    'outline-burgundy':
      'bg-transparent text-burgundy border border-burgundy/60 hover:bg-burgundy hover:text-white',
    ghost:
      'bg-transparent text-gold hover:text-gold-light underline underline-offset-8 decoration-gold/50 hover:decoration-gold p-0',
    white:
      'bg-white text-burgundy hover:bg-ivory border border-gold/30 hover:border-gold shadow-sm',
  };

  const baseStyles =
    'inline-flex items-center justify-center font-medium uppercase transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold';

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold group-hover:text-gold-light" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
