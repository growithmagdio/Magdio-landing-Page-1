import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { WHY_US_CONTENT } from '../../content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-[#0A0F1F] overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 glow-gold rounded-full pointer-events-none -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title={WHY_US_CONTENT.h2}
          align="left"
          className="mb-8"
        />

        {/* Split Layout: Text Left, Checklist Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5B82E]/10 border border-[#F5B82E]/30 text-[#F5B82E] text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Tailored SEO Strategy</span>
            </div>

            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              {WHY_US_CONTENT.leadLine}
            </p>

            <p className="text-base sm:text-lg text-[#A7B0C8] font-normal leading-relaxed">
              We don't use standard cookie-cutter templates or automated, low-quality software runs. Every market, location, and competitor landscape is distinct.
            </p>

            <div className="p-4 rounded-xl bg-[#151D3B]/70 border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#2F6BFF] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base font-semibold text-white">
                {WHY_US_CONTENT.closing}
              </p>
            </div>
          </motion.div>

          {/* Right Checklist Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <h3 className="text-xl font-bold text-white">
                  {WHY_US_CONTENT.checklistIntro}
                </h3>
                <span className="text-xs font-bold text-[#F5B82E] bg-[#F5B82E]/10 px-3 py-1 rounded-full border border-[#F5B82E]/30">
                  Audit Parameters
                </span>
              </div>

              {/* Checklist Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_US_CONTENT.checklist.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#151D3B]/60 border border-white/5 hover:border-[#F5B82E]/30 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#F5B82E]/20 text-[#F5B82E] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 fill-current text-[#0A0F1F]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
