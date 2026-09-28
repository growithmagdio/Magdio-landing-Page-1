import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, CheckCircle2, Sparkles } from 'lucide-react';
import { PROOF_CONTENT, BOOKING_CTA_URL } from '../../content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Lightbox } from '../ui/Lightbox';

export const ProofSection: React.FC = () => {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    caption: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxState({ isOpen: true, src, alt, caption });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="results" className="py-20 lg:py-28 relative bg-[#0E1528] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] glow-gold rounded-full pointer-events-none -z-10 blur-3xl opacity-25"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] glow-blue rounded-full pointer-events-none -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title={PROOF_CONTENT.h2}
          align="center"
        />

        {/* A) Stat Strip Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROOF_CONTENT.statTiles.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="text-center p-6 border border-white/10 hover:border-[#F5B82E]/40 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-[#A7B0C8] font-medium leading-snug">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* B) Case Study Cards */}
        <div className="space-y-16">
          {PROOF_CONTENT.proofItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-6 sm:p-8 lg:p-10 border border-white/10 bg-[#111831]/95 relative">
                
                {/* Header Tag & Title */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#F5B82E] bg-[#F5B82E]/10 px-3 py-1.5 rounded-xl border border-[#F5B82E]/30 shrink-0 self-start md:self-auto">
                    Verified Client Case Study
                  </span>
                </div>

                {/* Details & Table / Results Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  
                  {/* Left Specs */}
                  <div className="lg:col-span-6 space-y-4">
                    {item.challenge && (
                      <div className="p-4 rounded-xl bg-[#151D3B]/60 border border-white/5">
                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Challenge</h4>
                        <p className="text-sm text-[#A7B0C8] leading-relaxed">{item.challenge}</p>
                      </div>
                    )}

                    {item.whatWeDid && (
                      <div className="p-4 rounded-xl bg-[#151D3B]/60 border border-white/5">
                        <h4 className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider mb-1">What We Did</h4>
                        <p className="text-sm text-[#A7B0C8] leading-relaxed">{item.whatWeDid}</p>
                      </div>
                    )}

                    {item.resultsList && (
                      <div className="p-4 rounded-xl bg-[#151D3B]/80 border border-[#F5B82E]/20 space-y-2">
                        <h4 className="text-xs font-bold text-[#F5B82E] uppercase tracking-wider mb-2">Verified Results</h4>
                        {item.resultsList.map((res) => (
                          <div key={res} className="flex items-start gap-2 text-sm text-white font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Table (if available) */}
                  <div className="lg:col-span-6">
                    {item.beforeAfterTable && (
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0A0F1F]">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-[#151D3B] text-xs uppercase text-[#A7B0C8] font-bold border-b border-white/10">
                            <tr>
                              <th className="px-4 py-3">Metric</th>
                              <th className="px-4 py-3 text-red-400">Before</th>
                              <th className="px-4 py-3 text-[#F5B82E]">After</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {item.beforeAfterTable.map((row) => (
                              <tr key={row.metric} className="hover:bg-white/5 transition-colors">
                                <td className="px-4 py-3 font-semibold text-white">{row.metric}</td>
                                <td className="px-4 py-3 text-[#A7B0C8] opacity-75">{row.before}</td>
                                <td className="px-4 py-3 font-bold text-[#F5B82E] flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-[#F5B82E]" />
                                  {row.after}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                </div>

                {/* Screenshots Gallery in Dark Browser Windows */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-[#A7B0C8] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-[#F5B82E]" />
                    <span>Proof Screenshots (Click to expand)</span>
                  </h4>

                  <div className={`grid grid-cols-1 ${item.screenshots.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl'} gap-6`}>
                    {item.screenshots.map((img) => (
                      <div
                        key={img.src}
                        onClick={() => openLightbox(img.src, img.alt, img.caption)}
                        className="group cursor-pointer rounded-xl bg-[#0A0F1F] border border-white/10 overflow-hidden shadow-xl hover:border-[#F5B82E] transition-all duration-300"
                      >
                        {/* Dark Browser Frame Bar */}
                        <div className="px-3 py-2 bg-[#151D3B] border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                          </div>
                          <span className="text-[10px] text-[#A7B0C8] font-mono truncate max-w-[150px]">{img.caption}</span>
                          <ZoomIn className="w-3.5 h-3.5 text-[#A7B0C8] group-hover:text-[#F5B82E]" />
                        </div>

                        {/* Screenshot Image */}
                        <div className="relative overflow-hidden bg-[#050814] aspect-video flex items-center justify-center">
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-[#0A0F1F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-3 py-1.5 rounded-lg bg-[#F5B82E] text-[#0A0F1F] text-xs font-bold shadow-lg flex items-center gap-1">
                              <ZoomIn className="w-3.5 h-3.5" /> Expand Screenshot
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-[#111831] border-t border-white/5 text-center">
                          <p className="text-xs font-semibold text-[#F5B82E] truncate">{img.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* C) Testimonial Slot (Controlled by showTestimonial flag) */}
        {PROOF_CONTENT.showTestimonial && (
          <div className="mt-12">
            <GlassCard className="text-center p-8 max-w-2xl mx-auto border-l-4 border-l-[#F5B82E]">
              <p className="text-lg text-white italic font-medium">
                "{PROOF_CONTENT.testimonialPlaceholder.text}"
              </p>
              <p className="text-sm font-bold text-[#F5B82E] mt-3">
                — {PROOF_CONTENT.testimonialPlaceholder.author}, <span className="text-[#A7B0C8] font-normal">{PROOF_CONTENT.testimonialPlaceholder.company}</span>
              </p>
            </GlassCard>
          </div>
        )}

        {/* Muted Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#A7B0C8] italic font-normal">
            *{PROOF_CONTENT.disclaimerNote}*
          </p>
        </div>

        {/* Ending Gold CTA */}
        <div className="mt-10 text-center">
          <Button href={BOOKING_CTA_URL} size="lg" variant="gold">
            {PROOF_CONTENT.ctaText}
          </Button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxState.src}
        imageAlt={lightboxState.alt}
        caption={lightboxState.caption}
      />
    </section>
  );
};
