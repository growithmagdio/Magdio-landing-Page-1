import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { HERO_CONTENT, BOOKING_CTA_URL } from '../../content';
import { Button } from '../ui/Button';
import { IndiaMapGraphic } from '../ui/IndiaMapGraphic';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Soft Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] glow-blue rounded-full pointer-events-none -z-10 blur-3xl opacity-70"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] glow-gold rounded-full pointer-events-none -z-10 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#60A5FA] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5B82E] animate-ping"></span>
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Get Your Business Into the Top 3 on Google <span className="text-gradient-gold">Within 90 Days</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Body */}
            <p className="text-base sm:text-lg text-[#A7B0C8] font-normal leading-relaxed">
              We improve your <strong className="text-white font-semibold">Google Maps and local search visibility</strong> through a focused SEO strategy built around your business, services and location.
            </p>

            {/* Primary Gold CTA */}
            <div className="pt-2 space-y-3">
              <Button href={BOOKING_CTA_URL} size="lg" variant="gold" className="w-full sm:w-auto text-center">
                {HERO_CONTENT.ctaText}
              </Button>
              <p className="text-xs sm:text-sm text-[#A7B0C8] italic font-normal">
                *{HERO_CONTENT.underCta}*
              </p>
            </div>
          </motion.div>

          {/* Right Visual: Real Vector India Map Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* India Map Graphic Container */}
            <div className="relative">
              <IndiaMapGraphic />

              {/* Floating Mini Ranking Growth Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 glass-card p-3 sm:p-3.5 rounded-xl border border-[#F5B82E]/40 shadow-2xl bg-[#0A0F1F]/95 flex items-center gap-3 z-10"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#2F6BFF] to-[#60A5FA] flex items-center justify-center text-white shadow-md">
                  <TrendingUp className="w-5 h-5 text-[#F5B82E]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#A7B0C8] font-medium">90-Day Visibility Trajectory</div>
                  <div className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1">
                    <span>+315% Google Maps Traffic</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
