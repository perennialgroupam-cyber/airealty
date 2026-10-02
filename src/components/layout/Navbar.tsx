import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Our Group', href: '#perennial-group' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-light/95 backdrop-blur-md py-3.5 shadow-subtle border-b border-ivory-border'
            : 'bg-gradient-to-b from-burgundy-deep/90 via-burgundy-deep/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant={isScrolled ? 'dark' : 'light'} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm uppercase tracking-[0.16em] font-medium transition-all duration-300 relative py-1 hover:text-gold ${
                    isScrolled
                      ? 'text-charcoal hover:text-burgundy'
                      : 'text-ivory/90 hover:text-gold-light'
                  } group`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-burgundy' : 'bg-gold'
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <Button
                variant={isScrolled ? 'primary' : 'primary'}
                size="sm"
                onClick={onOpenConsultation}
                className="shadow-md"
              >
                Discuss a Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenConsultation}
                aria-label="Call Advisory"
                className={`p-2 rounded-sm border transition-colors ${
                  isScrolled
                    ? 'border-burgundy/30 text-burgundy bg-burgundy/5'
                    : 'border-gold/40 text-gold bg-burgundy/40'
                }`}
              >
                <PhoneCall className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`p-2 rounded-sm transition-colors ${
                  isScrolled
                    ? 'text-burgundy hover:bg-ivory'
                    : 'text-gold-light hover:bg-burgundy/50'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Luxury Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-burgundy-deep/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-burgundy-surface border-l border-gold/30 p-6 flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-gold/20">
              <Logo variant="light" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gold p-1 hover:text-gold-light"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-4 py-2">
              <span className="text-[10px] uppercase tracking-[0.24em] text-gold/70 block mb-3">
                Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-base font-serif tracking-wider text-ivory hover:text-gold py-2 border-b border-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold/60" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-6 border-t border-gold/20 space-y-4">
            <Button
              variant="gold"
              size="md"
              className="w-full text-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
            >
              Discuss a Project
            </Button>
            <p className="text-center text-[10px] text-ivory/50 uppercase tracking-[0.2em]">
              A Perennial Group Company • Est. 1996
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
