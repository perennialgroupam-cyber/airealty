import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import type { InterestType } from '../../types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
  defaultAudience?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  defaultInterest,
  defaultAudience,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest || 'Land Acquisition & Development',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-burgundy-deep/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-xl rounded-sm border border-gold shadow-luxury-hover p-6 sm:p-8 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-1.5 text-charcoal-secondary hover:text-burgundy transition-colors rounded-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-burgundy/10 text-burgundy border border-gold flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-burgundy" />
            </div>
            <h3 className="font-serif text-2xl text-burgundy">
              Consultation Initiated
            </h3>
            <p className="text-sm text-charcoal-secondary font-light max-w-sm mx-auto">
              Our development advisory leadership will review your mandate details and reach out within 24 business hours.
            </p>
            <div className="pt-3">
              <Button variant="primary" size="sm" onClick={onClose}>
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-gold-dark">
                  Direct Mandate Discussion
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-burgundy">
                Discuss Your Project
              </h3>
              <p className="text-xs text-charcoal-secondary font-light mt-1">
                Please provide primary details for preliminary feasibility review.
              </p>
            </div>

            {defaultAudience && (
              <div className="p-2.5 bg-ivory border border-gold/30 rounded-xs text-xs text-burgundy font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-dark" />
                <span>Pathway: {defaultAudience}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Deshmukh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold text-charcoal"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold text-charcoal"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold text-charcoal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                  Core Area of Interest *
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value as InterestType })}
                  className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold text-charcoal"
                >
                  <option value="Land Acquisition & Development">Land Acquisition & Development</option>
                  <option value="SRA Project Development">SRA Project Development</option>
                  <option value="Society Redevelopment">Society Redevelopment</option>
                  <option value="Strategic Partnership">Strategic Partnership</option>
                  <option value="Other">Other Strategic Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                  Project Brief / Location
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention location, approximate plot area, or society details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold text-charcoal resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full text-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Transmitting Mandate...' : 'Submit Confidential Enquiry'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
