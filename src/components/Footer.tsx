import React from 'react';
import { FOOTER_CONTENT } from '../content';
import { MagdioLogo } from './ui/MagdioLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080C19] border-t border-white/10 pt-16 pb-24 md:pb-12 text-[#A7B0C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <MagdioLogo height={40} />
            </div>
            <p className="text-sm text-[#A7B0C8] max-w-sm font-medium leading-relaxed">
              {FOOTER_CONTENT.tagline} — Driving top-tier Google visibility, local search authority, and revenue growth for ambitious businesses.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {FOOTER_CONTENT.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-sm text-[#A7B0C8] hover:text-[#F5B82E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact & Legal */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Official Website</h3>
            <p className="text-sm">
              <a
                href={FOOTER_CONTENT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#60A5FA] hover:underline font-semibold"
              >
                {FOOTER_CONTENT.website}
              </a>
            </p>
            <p className="text-xs text-[#A7B0C8]/70 pt-2">
              Focusing on sustainable Google Maps rankings & local search dominance.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7B0C8]/60 gap-4">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p className="text-right">Magdio Local SEO Service · Google Maps Growth</p>
        </div>
      </div>
    </footer>
  );
};
