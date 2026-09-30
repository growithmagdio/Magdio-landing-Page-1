import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle2 } from 'lucide-react';

interface IndiaMapGraphicProps {
  className?: string;
}

export const IndiaMapGraphic: React.FC<IndiaMapGraphicProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden glass-card border border-white/10 bg-[#0B1124] shadow-2xl p-4 sm:p-5 ${className}`}>
      
      {/* Top Google Maps Dark Bar */}
      <div className="flex items-center justify-between bg-[#131B35] px-3.5 py-2 rounded-xl border border-white/10 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2F6BFF] animate-pulse"></div>
          <span className="font-semibold text-white tracking-wide">Google Maps India · Local Search Visibility</span>
        </div>
        <span className="text-[10px] font-mono bg-[#F5B82E]/20 text-[#F5B82E] px-2 py-0.5 rounded border border-[#F5B82E]/30 font-bold">
          Top 3 Local Pack
        </span>
      </div>

      {/* Main India Vector Map Canvas */}
      <div className="relative h-64 sm:h-72 w-full bg-[#080D1C] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
        
        {/* Dark Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <pattern id="india-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#india-grid)" />
        </svg>

        {/* India Map SVG Container */}
        <svg
          viewBox="0 0 400 240"
          className="w-full h-full max-h-full object-contain p-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Radial Glow Gradient for India Map */}
            <radialGradient id="indiaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#2F6BFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="indiaBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#2F6BFF" />
              <stop offset="100%" stopColor="#F5B82E" />
            </linearGradient>

            {/* Glowing Map Pin Shadow Filter */}
            <filter id="glowPin" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Glow Area for India Region */}
          <ellipse cx="200" cy="110" rx="110" ry="95" fill="url(#indiaGlow)" />

          {/* Connected Network / Highway Routes across India */}
          <g stroke="#2F6BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" fill="none">
            {/* Delhi to Mumbai */}
            <path d="M 185 62 Q 165 90 155 120" />
            {/* Delhi to Kolkata */}
            <path d="M 185 62 Q 220 75 250 95" />
            {/* Mumbai to Bengaluru */}
            <path d="M 155 120 Q 165 145 180 162" />
            {/* Bengaluru to Chennai */}
            <path d="M 180 162 L 205 158" />
            {/* Hyderabad to Chennai */}
            <path d="M 192 132 L 205 158" />
            {/* Mumbai to Hyderabad */}
            <path d="M 155 120 L 192 132" />
            {/* Delhi to Hyderabad */}
            <path d="M 185 62 L 192 132" />
          </g>

          {/* Realistic SVG Vector Outline of India */}
          <g>
            {/* India Main Landmass Fill */}
            <path
              d="M 195 18 C 205 25, 215 25, 222 30 C 235 40, 245 42, 255 48 C 265 42, 285 40, 298 52 C 308 62, 295 72, 282 74 C 270 76, 262 82, 255 88 C 248 98, 240 115, 225 145 C 210 170, 198 185, 190 195 C 182 185, 172 165, 162 140 C 154 122, 142 112, 125 102 C 118 92, 130 85, 142 85 C 150 72, 162 50, 178 30 Z"
              fill="#111B38"
              stroke="url(#indiaBorderGrad)"
              strokeWidth="2"
              strokeLinejoin="round"
              className="transition-all duration-500 hover:fill-[#16244C]"
            />

            {/* Sri Lanka Outline */}
            <path
              d="M 206 200 C 211 205, 213 212, 208 218 C 203 220, 199 212, 203 205 Z"
              fill="#111B38"
              stroke="#2F6BFF"
              strokeWidth="1.2"
              opacity="0.7"
            />
          </g>

          {/* Major Indian Cities / Hub Markers */}
          {/* Delhi */}
          <circle cx="185" cy="62" r="3" fill="#60A5FA" />
          <text x="191" y="65" fill="#93C5FD" fontSize="8" fontWeight="600">Delhi</text>

          {/* Mumbai */}
          <circle cx="155" cy="120" r="3" fill="#60A5FA" />
          <text x="122" y="123" fill="#93C5FD" fontSize="8" fontWeight="600">Mumbai</text>

          {/* Bengaluru */}
          <circle cx="180" cy="162" r="3" fill="#60A5FA" />
          <text x="128" y="165" fill="#93C5FD" fontSize="8" fontWeight="600">Bengaluru</text>

          {/* Chennai */}
          <circle cx="205" cy="158" r="3" fill="#60A5FA" />
          <text x="211" y="161" fill="#93C5FD" fontSize="8" fontWeight="600">Chennai</text>

          {/* Hyderabad */}
          <circle cx="192" cy="132" r="2.5" fill="#60A5FA" opacity="0.8" />
          <text x="198" y="135" fill="#93C5FD" fontSize="7" opacity="0.8">Hyderabad</text>

          {/* Kolkata */}
          <circle cx="250" cy="95" r="3" fill="#60A5FA" />
          <text x="256" y="98" fill="#93C5FD" fontSize="8" fontWeight="600">Kolkata</text>

          {/* Ahmedabad */}
          <circle cx="145" cy="90" r="2.5" fill="#60A5FA" opacity="0.7" />

          {/* Pulsing Radar Ring over India Center */}
          <circle cx="185" cy="115" r="45" fill="none" stroke="#F5B82E" strokeWidth="0.8" opacity="0.25" strokeDasharray="2 2" />
          <circle cx="185" cy="115" r="80" fill="none" stroke="#2F6BFF" strokeWidth="0.5" opacity="0.2" />

          {/* Competitor #2 Pin (Delhi region) */}
          <g transform="translate(178, 42)">
            <rect x="-12" y="-12" width="24" height="16" rx="4" fill="#0A0F1F" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text x="0" y="-1" textAnchor="middle" fill="#A7B0C8" fontSize="9" fontWeight="bold">#2</text>
          </g>

          {/* Competitor #3 Pin (Kolkata region) */}
          <g transform="translate(242, 110)">
            <rect x="-12" y="-12" width="24" height="16" rx="4" fill="#0A0F1F" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text x="0" y="-1" textAnchor="middle" fill="#A7B0C8" fontSize="9" fontWeight="bold">#3</text>
          </g>

          {/* #1 RANK PIN ("Your Business") ON INDIA MAP (Centered near Bengaluru/Mumbai hub) */}
          <g transform="translate(160, 110)" filter="url(#glowPin)">
            {/* Animated Pulse Ring */}
            <circle cx="0" cy="0" r="18" fill="#F5B82E" opacity="0.25">
              <animate attributeName="r" values="14;26;14" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* #1 Circle Pin */}
            <circle cx="0" cy="0" r="14" fill="url(#indiaBorderGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#0A0F1F" fontSize="11" fontWeight="900">#1</text>

            {/* "Your Business" Label Badge */}
            <g transform="translate(0, 22)">
              <rect x="-38" y="-10" width="76" height="18" rx="9" fill="#0A0F1F" stroke="#F5B82E" strokeWidth="1.2" />
              <text x="0" y="2" textAnchor="middle" fill="#F5B82E" fontSize="9" fontWeight="bold">Your Business</text>
            </g>
          </g>
        </svg>

        {/* Floating Rank Boost Tag in Map Corner */}
        <div className="absolute bottom-2 right-2 bg-[#0A0F1F]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#F5B82E]/40 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#F5B82E] animate-ping"></span>
          <span>India Local Pack #1</span>
        </div>
      </div>

      {/* Business Listings Stack below Map */}
      <div className="mt-3.5 space-y-2.5">
        {/* #1 Highlighted Business */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#2F6BFF]/20 via-[#151D3B] to-[#F5B82E]/10 border-2 border-[#F5B82E] shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#F5B82E] text-[#0A0F1F] font-black text-xs flex items-center justify-center shadow-md">
              #1
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-bold text-white">Your Business (India)</span>
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
              <span className="text-xs font-medium text-[#A7B0C8]">Competitor Business A</span>
              <div className="text-[10px] text-[#A7B0C8]">4.2 ★ (34 reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
