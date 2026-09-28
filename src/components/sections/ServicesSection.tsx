import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Target, ShieldCheck, LineChart } from 'lucide-react';
import { SERVICES_CONTENT } from '../../content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-[#F5B82E]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#2F6BFF]" />;
      case 'Target':
        return <Target className="w-8 h-8 text-[#F5B82E]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#2F6BFF]" />;
      case 'LineChart':
        return <LineChart className="w-8 h-8 text-[#F5B82E]" />;
      default:
        return <MapPin className="w-8 h-8 text-[#F5B82E]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#0A0F1F] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 glow-gold rounded-full pointer-events-none -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          title={SERVICES_CONTENT.h2}
          align="center"
        />

        {/* 5 Glass Cards Grid Layout (First 3 top, last 2 centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {SERVICES_CONTENT.items.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#151D3B] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#F5B82E]/40 transition-transform duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F5B82E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#A7B0C8] font-normal leading-relaxed">
                    {item.id === 3 ? (
                      <>
                        Build stronger relevance around <strong className="text-white font-semibold">what you offer and where you offer it.</strong>
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}

        </div>

        {/* Last Row Centered (2 items) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICES_CONTENT.items.slice(3, 5).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#151D3B] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#2F6BFF]/40 transition-transform duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F5B82E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#A7B0C8] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
