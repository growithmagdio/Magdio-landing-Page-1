import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, PhoneCall, Trophy } from 'lucide-react';
import { OUTCOME_CONTENT } from '../../content';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const OutcomeSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-7 h-7 text-[#F5B82E]" />;
      case 1:
        return <Eye className="w-7 h-7 text-[#60A5FA]" />;
      case 2:
        return <PhoneCall className="w-7 h-7 text-[#F5B82E]" />;
      default:
        return <Trophy className="w-7 h-7 text-[#F5B82E]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-[#0E1528] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 glow-blue rounded-full pointer-events-none -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          title={OUTCOME_CONTENT.h2}
          subtitle={OUTCOME_CONTENT.body}
          align="center"
        />

        {/* 3 Step Connected Flow Container */}
        <div className="relative mt-12 mb-16">
          
          {/* Animated Gold Arrow Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-[#2F6BFF] via-[#F5B82E] to-[#FFD166] -translate-y-1/2 -z-0 rounded-full opacity-60">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {OUTCOME_CONTENT.steps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <GlassCard className="h-full text-center flex flex-col items-center p-8 border border-white/10 hover:border-[#F5B82E]/50 transition-all duration-300">
                  
                  {/* Step Badge & Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#151D3B] to-[#0A0F1F] border border-[#F5B82E]/40 flex items-center justify-center shadow-xl">
                      {getStepIcon(index)}
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F5B82E] text-[#0A0F1F] text-xs font-black flex items-center justify-center shadow-md">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {index < 2 && (
                    <div className="lg:hidden mt-4 text-[#F5B82E] flex justify-center">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Disclaimer */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#A7B0C8] italic font-normal leading-relaxed">
            *{OUTCOME_CONTENT.disclaimer}*
          </p>
        </div>

      </div>
    </section>
  );
};
