import React from 'react';

interface MagdioLogoProps {
  className?: string;
  height?: number;
  showIcon?: boolean;
}

export const MagdioLogo: React.FC<MagdioLogoProps> = ({ className = '', height = 40, showIcon = true }) => {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Icon Mark from magdio icon lgo.jpeg */}
      {showIcon && (
        <img
          src="/magdio icon lgo.jpeg"
          alt="Magdio Icon"
          style={{ height: `${height}px` }}
          className="w-auto object-contain block rounded-sm shadow-sm"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/magdio-logo.png';
            }
          }}
        />
      )}

      {/* Crisp HTML Wordings */}
      <div className="flex flex-col justify-center">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none font-['Plus_Jakarta_Sans']">
          MAGDIO
        </span>
        <span className="text-[9px] sm:text-[10.5px] font-bold text-[#F5B82E] tracking-[0.2em] leading-tight mt-1 uppercase font-['Inter']">
          THE AI GROWTH STUDIO
        </span>
      </div>
    </div>
  );
};
