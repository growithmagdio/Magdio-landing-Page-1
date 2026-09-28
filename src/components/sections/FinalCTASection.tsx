import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FINAL_CTA_CONTENT, BOOKING_CTA_URL } from '../../content';
import { Button } from '../ui/Button';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#111831] via-[#0E1528] to-[#0A0F1F]">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

      {/* Gold & Blue Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-gold rounded-full pointer-events-none -z-10 blur-3xl opacity-35"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] glow-blue rounded-full pointer-events-none -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-width Glass Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#F5B82E]/40 text-center space-y-8 bg-gradient-to-b from-[#151D3B]/95 to-[#0A0F1F]/95 shadow-2xl relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5B82E]/15 border border-[#F5B82E]/40 text-[#F5B82E] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md">
            <Sparkles className="w-4 h-4" />
            <span>90-Day Google Growth Opportunity</span>
          </div>

          {/* H2 Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Get Your Business Into the Top 3 on Google?
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#A7B0C8] max-w-2xl mx-auto font-medium leading-relaxed">
            {FINAL_CTA_CONTENT.subheadline}
          </p>

          {/* Large Gold CTA Button */}
          <div className="pt-4 space-y-4">
            <Button
              href={BOOKING_CTA_URL}
              size="lg"
              variant="gold"
              className="px-10 py-5 text-xl font-black shadow-2xl hover:scale-105 transition-transform"
            >
              {FINAL_CTA_CONTENT.ctaText}
            </Button>

            <p className="text-sm sm:text-base font-bold text-white tracking-wide pt-2">
              {FINAL_CTA_CONTENT.underCta}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
