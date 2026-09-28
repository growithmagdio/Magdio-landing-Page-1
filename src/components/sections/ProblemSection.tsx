import React from 'react';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, ArrowDown } from 'lucide-react';
import { PROBLEM_CONTENT } from '../../content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#0E1528] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-blue rounded-full pointer-events-none -z-10 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title={PROBLEM_CONTENT.h2}
          align="center"
        />

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <GlassCard className="border-l-4 border-l-[#F5B82E]">
              <p className="text-lg text-white font-medium leading-relaxed">
                {PROBLEM_CONTENT.body1}
              </p>
            </GlassCard>

            <GlassCard className="border-l-4 border-l-red-500/80">
              <p className="text-lg text-[#A7B0C8] font-normal leading-relaxed">
                If your business is buried below your competitors, <strong className="text-white font-semibold">you're missing potential customers who are already looking for what you offer.</strong>
              </p>
            </GlassCard>
          </motion.div>

          {/* Right Visual: Google Search Mock showing competitors above & Your Business faded below */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 bg-[#111831] shadow-2xl relative">
              
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 bg-[#151D3B] px-4 py-3 rounded-xl border border-white/10 mb-6 shadow-inner">
                <Search className="w-5 h-5 text-[#2F6BFF]" />
                <div className="flex-1 text-sm text-white font-mono flex items-center">
                  <span>[Your Service] near me</span>
                  <span className="w-0.5 h-4 bg-[#F5B82E] ml-1 animate-pulse"></span>
                </div>
                <span className="text-xs text-[#A7B0C8]">Google Search</span>
              </div>

              {/* Search Results Stack */}
              <div className="space-y-3.5">
                
                {/* Result 1: Competitor gets the clicks */}
                <div className="p-3.5 rounded-xl bg-[#151D3B]/80 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#60A5FA]">www.competitor-a.com</span>
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">#1 Result · Gets 70% Clicks</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">Competitor Business A — Top Rated Local Service</h4>
                  <p className="text-xs text-[#A7B0C8] mt-1">Serving your local area. Call now for immediate assistance and quotes...</p>
                </div>

                {/* Result 2: Competitor gets the leads */}
                <div className="p-3.5 rounded-xl bg-[#151D3B]/60 border border-white/5 opacity-80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#60A5FA]">www.competitor-b.com</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold">#2 Result</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">Competitor Business B — 24/7 Service</h4>
                  <p className="text-xs text-[#A7B0C8] mt-1">Leading local specialists with fast dispatch times across your district...</p>
                </div>

                {/* Divider Arrow showing dropped rankings */}
                <div className="flex items-center justify-center py-1 text-red-400 gap-2 text-xs font-mono">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                  <span>Buried Below Competitors — Zero Inquiries</span>
                </div>

                {/* Result 3: YOUR BUSINESS FADED LOWER DOWN */}
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 opacity-40 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute right-3 top-3 flex items-center gap-1 text-red-400 text-xs font-bold bg-red-900/40 px-2 py-0.5 rounded border border-red-500/40">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Page 2+ (Hidden)</span>
                  </div>
                  <span className="text-xs font-semibold text-[#A7B0C8]">www.yourbusiness.com</span>
                  <h4 className="text-sm font-bold text-[#A7B0C8] mt-1">Your Business — Local Services</h4>
                  <p className="text-xs text-[#A7B0C8]/60 mt-1">Hard to find. Potential clients leave before ever scrolling this far down...</p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Large Gradient Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-gold tracking-tight leading-tight">
            {PROBLEM_CONTENT.closingText}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
