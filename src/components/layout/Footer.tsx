import React from 'react';
import { Logo } from '../common/Logo';
import { BRAND } from '../../data/content';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-burgundy-deep text-ivory border-t border-gold/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-gold/20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="font-serif italic text-gold text-lg mt-3">
              "{BRAND.tagline}"
            </p>
            <p className="text-sm text-ivory/70 leading-relaxed font-light max-w-sm">
              Strategic real estate advisory and development firm specializing in land acquisition, SRA project execution, and society redevelopment across the Mumbai Metropolitan Region.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] px-3 py-1 bg-burgundy/60 border border-gold/30 text-gold-light rounded-sm">
                Perennial Group • Est. 1996
              </span>
            </div>
          </div>

          {/* Quick Verticals Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-gold pb-1 border-b border-gold/20">
              Core Verticals
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-ivory/80">
              <li>
                <a href="#land-section" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold/50">›</span> Land Acquisition & Development
                </a>
              </li>
              <li>
                <a href="#sra-section" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold/50">›</span> SRA Project Development
                </a>
              </li>
              <li>
                <a href="#redevelopment-section" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold/50">›</span> Society Redevelopment
                </a>
              </li>
              <li>
                <a href="#perennial-group" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold/50">›</span> Perennial Group Heritage
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-gold pb-1 border-b border-gold/20">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-ivory/80">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold transition-colors">Projects & Opportunities</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-gold transition-colors">Leadership</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact Advisory</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-gold pb-1 border-b border-gold/20">
              Corporate Office
            </h4>
            <div className="text-sm font-light text-ivory/80 space-y-2">
              <p>{BRAND.contact.address}</p>
              <p className="text-gold pt-1">
                <span className="text-ivory/60 text-xs block">Official Inquiries:</span>
                {BRAND.contact.email}
              </p>
              <p className="text-ivory/70 text-xs">
                {BRAND.contact.hours}
              </p>
            </div>

            {/* Social Icons (Clean High-End SVGs) */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter Profile"
                className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                aria-label="Direct Email"
                className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footnote & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© 2026 AI Realty. All Rights Reserved.</p>
            <p className="text-[11px] text-gold/70">
              {BRAND.disclaimer}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors group cursor-pointer"
          >
            <span className="text-[11px] uppercase tracking-widest">Back to top</span>
            <span className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
