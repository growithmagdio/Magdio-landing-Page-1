import React from 'react';
import { Button } from './ui/Button';
import { BOOKING_CTA_URL } from '../content';

export const FloatingMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0A0F1F]/90 backdrop-blur-xl border-t border-white/10 md:hidden shadow-2xl">
      <Button
        href={BOOKING_CTA_URL}
        size="md"
        variant="gold"
        className="w-full justify-center text-sm py-3"
      >
        Get My Free SEO Audit
      </Button>
    </div>
  );
};
