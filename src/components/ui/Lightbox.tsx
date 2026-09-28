import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0A0F1F]/90 backdrop-blur-xl transition-all animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
    >
      {/* Lightbox Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-[#151D3B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Window Bar */}
        <div className="w-full flex items-center justify-between pb-3 px-3 border-b border-white/10 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            <span className="ml-2 text-xs text-[#A7B0C8] font-mono hidden sm:inline">Verified Proof Result</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7B0C8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5B82E]"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image */}
        <div className="relative w-full flex-1 overflow-auto max-h-[75vh] flex items-center justify-center bg-[#0A0F1F]/60 rounded-xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="w-full pt-3 px-3 text-center">
            <p className="text-sm sm:text-base font-semibold text-[#F5B82E]">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
