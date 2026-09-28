import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'blue' | 'gold' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
}) => {
  const glowClasses = {
    blue: 'relative before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-[#2F6BFF]/20 before:to-transparent before:-z-10',
    gold: 'relative before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-[#F5B82E]/20 before:to-transparent before:-z-10',
    none: '',
  };

  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 ${
        hoverEffect ? 'glass-card-hover' : ''
      } ${glowClasses[glow]} ${className}`}
    >
      {children}
    </div>
  );
};
