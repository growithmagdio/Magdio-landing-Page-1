import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, CheckCircle2, Search } from 'lucide-react';
import { HERO_CONTENT, BOOKING_CTA_URL } from '../../content';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern">
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

          {/* Right Visual: Stylized Google Maps "Local Pack" Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Map Container */}
            <div className="relative glass-card rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl bg-[#111831]/90">
              
              {/* Fake Search Header Bar */}
              <div className="flex items-center gap-3 bg-[#151D3B] px-4 py-2.5 rounded-xl border border-white/10 mb-4 shadow-inner">
                <Search className="w-4 h-4 text-[#F5B82E]" />
                <span className="text-xs sm:text-sm text-white font-medium">Best Local Services Near Me</span>
                <span className="ml-auto text-xs bg-[#2F6BFF]/20 text-[#60A5FA] px-2 py-0.5 rounded font-mono">Google Pack</span>
              </div>

              {/* Map SVG Canvas Graphic */}
              <div className="relative h-44 w-full bg-[#0E1528] rounded-xl overflow-hidden border border-white/5 mb-4 flex items-center justify-center">
                {/* SVG Stylized Roads & Pins */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <path d="M -10 40 Q 80 120 200 40 T 400 100" fill="none" stroke="#2F6BFF" strokeWidth="3" opacity="0.6"/>
                  <path d="M 120 0 Q 150 100 100 200" fill="none" stroke="#F5B82E" strokeWidth="2" strokeDasharray="4 4" opacity="0.8"/>
                </svg>

                {/* Map Pin Pulsing for Top 1 */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#F5B82E]/30 animate-ping absolute inset-0"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F5B82E] to-[#FFD166] flex items-center justify-center text-[#0A0F1F] font-black text-sm shadow-xl">
                      #1
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-[#0A0F1F] text-[#FFD166] px-2 py-0.5 rounded-full border border-[#F5B82E]/50 mt-1 shadow-md whitespace-nowrap">
                    Your Business
                  </span>
                </div>

                {/* Secondary Competitor Pins */}
                <div className="absolute top-8 left-12 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-[#A7B0C8]/20 border border-white/20 flex items-center justify-center text-xs text-[#A7B0C8]">
                    #2
                  </div>
                </div>
                <div className="absolute bottom-6 right-16 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-[#A7B0C8]/20 border border-white/20 flex items-center justify-center text-xs text-[#A7B0C8]">
                    #3
                  </div>
                </div>
              </div>

              {/* Business Listings Stack */}
              <div className="space-y-3">
                {/* #1 Highlighted Your Business */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#2F6BFF]/20 via-[#151D3B] to-[#F5B82E]/10 border-2 border-[#F5B82E] shadow-lg flex items-center justify-between relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5B82E] text-[#0A0F1F] font-black text-sm flex items-center justify-center shadow-md">
                      #1
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">Your Business</span>
                        <CheckCircle2 className="w-4 h-4 text-[#F5B82E]" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#F5B82E] font-medium mt-0.5">
                        <div className="flex text-[#F5B82E]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-white ml-1">5.0</span>
                        <span className="text-[#A7B0C8]">(140+ reviews)</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#F5B82E] bg-[#F5B82E]/10 px-2.5 py-1 rounded-full border border-[#F5B82E]/30">
                    Top 3 Rank
                  </span>
                </div>

                {/* Competitor Listing #2 */}
                <div className="p-3 rounded-xl bg-[#151D3B]/50 border border-white/5 flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/10 text-[#A7B0C8] font-bold text-xs flex items-center justify-center">
                      #2
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#A7B0C8]">Competitor Business A</span>
                      <div className="flex items-center gap-1 text-[10px] text-[#A7B0C8]">
                        <span>4.2 ★ (34 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitor Listing #3 */}
                <div className="p-3 rounded-xl bg-[#151D3B]/40 border border-white/5 flex items-center justify-between opacity-40">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/10 text-[#A7B0C8] font-bold text-xs flex items-center justify-center">
                      #3
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#A7B0C8]">Competitor Business B</span>
                      <div className="flex items-center gap-1 text-[10px] text-[#A7B0C8]">
                        <span>3.9 ★ (19 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Ranking Growth Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 glass-card p-3 sm:p-4 rounded-xl border border-[#F5B82E]/40 shadow-2xl bg-[#0A0F1F]/95 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#2F6BFF] to-[#60A5FA] flex items-center justify-center text-white shadow-md">
                  <TrendingUp className="w-6 h-6 text-[#F5B82E]" />
                </div>
                <div>
                  <div className="text-xs text-[#A7B0C8] font-medium">90-Day Visibility Trajectory</div>
                  <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1">
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
