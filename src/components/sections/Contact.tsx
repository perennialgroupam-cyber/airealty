import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../../data/content';
import { Button } from '../common/Button';
import { MapPin, Phone, Mail, CheckCircle2, MessageCircle } from 'lucide-react';
import type { InterestType } from '../../types';

interface ContactProps {
  prefilledInterest?: string;
  prefilledAudience?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledInterest, prefilledAudience }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: (prefilledInterest as InterestType) || 'Land Acquisition & Development',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions: InterestType[] = [
    'Land Acquisition & Development',
    'SRA Project Development',
    'Society Redevelopment',
    'Strategic Partnership',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-dark">
                  Direct Advisory
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-burgundy font-normal tracking-tight leading-tight">
                Let's Talk Real Estate.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-charcoal-secondary font-light leading-relaxed">
                Whether you represent a family estate, an institutional land parcel, or a cooperative housing society seeking guidance on redevelopment or SRA frameworks, our team welcomes confidential dialogue.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 text-burgundy mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-burgundy">Corporate Headquarters</h4>
                  <p className="text-sm text-charcoal-secondary font-light mt-0.5 leading-relaxed">
                    {BRAND.contact.address}
                  </p>
                  <span className="text-[11px] text-gold-dark italic block mt-0.5">
                    [Official address placeholder to be supplied by client]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 text-burgundy mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-burgundy">Advisory Desk</h4>
                  <p className="text-sm text-charcoal font-medium mt-0.5">
                    {BRAND.contact.phone}
                  </p>
                  <span className="text-[11px] text-gold-dark italic block mt-0.5">
                    [Direct telephone placeholder]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 text-burgundy mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-burgundy">Official Communications</h4>
                  <a href={`mailto:${BRAND.contact.email}`} className="text-sm text-burgundy font-medium hover:text-gold-dark transition-colors">
                    {BRAND.contact.email}
                  </a>
                  <p className="text-xs text-charcoal-secondary font-light mt-0.5">
                    {BRAND.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="p-5 bg-burgundy-deep text-white rounded-sm border border-gold/40 flex items-center justify-between shadow-subtle">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-gold" />
                <div>
                  <h5 className="font-serif text-sm font-semibold text-ivory">Direct WhatsApp Consultation</h5>
                  <p className="text-xs text-ivory/70 font-light">Instant advisory coordination</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${BRAND.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs uppercase tracking-widest font-semibold bg-gold text-burgundy-deep hover:bg-gold-light rounded-xs transition-colors"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-ivory-border shadow-luxury">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-burgundy/10 text-burgundy border-2 border-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-burgundy">
                  Enquiry Received
                </h3>
                <p className="text-charcoal-secondary font-light text-sm sm:text-base max-w-md mx-auto">
                  Thank you for reaching out to AI Realty. Our advisory directorate will review your mandate details and connect with you under strict discretion.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline-burgundy"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        interest: 'Land Acquisition & Development',
                        message: '',
                      });
                    }}
                  >
                    Submit Another Query
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-burgundy mb-1">
                    Confidential Project Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-secondary font-light">
                    Submit your requirements for institutional review and structured discussion.
                  </p>
                </div>

                {prefilledAudience && (
                  <div className="p-2.5 bg-burgundy/5 border border-gold/40 rounded-xs text-xs text-burgundy font-medium">
                    Initiating as: <span className="font-semibold text-burgundy-secondary">{prefilledAudience}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajiv Mehra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-charcoal placeholder:text-charcoal-secondary/50 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-charcoal placeholder:text-charcoal-secondary/50 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-charcoal placeholder:text-charcoal-secondary/50 transition-all"
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    I'm Interested In *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value as InterestType })}
                    className="w-full px-4 py-3 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-charcoal transition-all"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Project / Opportunity Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please mention land parcel location, society plot size, or specific mandate scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-ivory border border-ivory-border rounded-xs focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-charcoal placeholder:text-charcoal-secondary/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full text-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing Submission...' : 'Send Enquiry'}
                </Button>

                <p className="text-center text-[11px] text-charcoal-secondary/70">
                  All discussions and project submissions are treated with rigorous professional confidentiality.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
