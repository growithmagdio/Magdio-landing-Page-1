import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOOKING_CTA_URL } from '../../content';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showArrow?: boolean;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href = BOOKING_CTA_URL,
  onClick,
  variant = 'gold',
  size = 'md',
  className = '',
  showArrow = true,
  isExternal = true,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:ring-offset-2 focus:ring-offset-[#0A0F1F] disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3.5 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 shadow-xl',
  };

  const variantClasses = {
    gold: 'btn-gold text-[#0A0F1F]',
    outline: 'border border-[#2F6BFF]/40 bg-[#151D3B]/60 text-white hover:bg-[#2F6BFF]/20 hover:border-[#2F6BFF] hover:text-white',
    ghost: 'text-[#A7B0C8] hover:text-white hover:bg-white/5',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4.5 h-4.5'
          }`}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`group ${combinedClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={`group ${combinedClasses}`}>
      {content}
    </button>
  );
};
