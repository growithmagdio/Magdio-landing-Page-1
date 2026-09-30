import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle2, Navigation } from 'lucide-react';

interface IndiaMapGraphicProps {
  className?: string;
}

export const IndiaMapGraphic: React.FC<IndiaMapGraphicProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden glass-card border border-white/10 bg-[#0B1124] shadow-2xl p-4 sm:p-5 ${className}`}>
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between bg-[#131B35] px-3.5 py-2.5 rounded-xl border border-white/10 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2F6BFF] animate-pulse"></div>
          <span className="font-semibold text-white tracking-wide flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-[#60A5FA]" />
            Google Maps · Local Search Visibility
          </span>
        </div>
        <span className="text-[10px] font-mono bg-[#F5B82E]/20 text-[#F5B82E] px-2 py-0.5 rounded border border-[#F5B82E]/30 font-bold">
          Top 3 Local Pack
        </span>
      </div>

      {/* Main Google Maps Image Container */}
      <div className="relative h-72 sm:h-80 w-full bg-[#080D1C] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center group">
        
        {/* Map Image */}
        <img
          src="/google-maps-tamilnadu.jpg"
          alt="Google Maps Local Search Visibility"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/70 via-transparent to-[#0A0F1F]/20 pointer-events-none"></div>

        {/* Animated Pulse Ring & Overlay Pin on Map */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[48%] left-[46%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer Glowing Pulse */}
            <span className="absolute w-12 h-12 rounded-full bg-[#F5B82E]/40 animate-ping"></span>
            <span className="absolute w-8 h-8 rounded-full bg-[#2F6BFF]/50 animate-pulse"></span>
            
            {/* Center Badge Pin */}
            <div className="relative z-10 bg-[#0A0F1F] text-[#F5B82E] border-2 border-[#F5B82E] px-2.5 py-1 rounded-full text-[11px] font-extrabold shadow-xl flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 fill-[#F5B82E] text-[#0A0F1F]" />
              <span>#1 Local SEO</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Rank Boost Tag in Map Corner */}
        <div className="absolute bottom-3 right-3 bg-[#0A0F1F]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#F5B82E]/50 text-xs font-bold text-white flex items-center gap-2 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-[#F5B82E] animate-ping"></span>
          <span>Google Maps #1 Ranked</span>
        </div>
      </div>

      {/* Business Listings Stack below Map */}
      <div className="mt-3.5 space-y-2.5">
        {/* #1 Highlighted Business */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#2F6BFF]/20 via-[#151D3B] to-[#F5B82E]/15 border-2 border-[#F5B82E] shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#F5B82E] text-[#0A0F1F] font-black text-xs flex items-center justify-center shadow-md">
              #1
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-bold text-white">Your Business (Google Maps)</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B82E]" />
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#F5B82E] font-medium mt-0.5">
                <div className="flex text-[#F5B82E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
                <span className="text-white ml-0.5">5.0</span>
                <span className="text-[#A7B0C8]">(140+ Google reviews)</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#F5B82E] bg-[#F5B82E]/10 px-2 py-0.5 rounded-full border border-[#F5B82E]/30 whitespace-nowrap">
            Top 3 Rank
          </span>
        </div>

        {/* Competitor Listing #2 */}
        <div className="p-2.5 rounded-xl bg-[#151D3B]/50 border border-white/5 flex items-center justify-between opacity-60">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-white/10 text-[#A7B0C8] font-bold text-[11px] flex items-center justify-center">
              #2
            </div>
            <div>
              <span className="text-xs font-medium text-[#A7B0C8]">Competitor Business</span>
              <div className="text-[10px] text-[#A7B0C8]">4.2 ★ (34 reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
