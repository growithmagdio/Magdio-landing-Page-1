import { FloatingMobileCTA } from './components/FloatingMobileCTA';
import { Footer } from './components/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { OutcomeSection } from './components/sections/OutcomeSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { ProofSection } from './components/sections/ProofSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white selection:bg-[#F5B82E] selection:text-[#0A0F1F] antialiased overflow-x-hidden">
      {/* Main Single Page Sections */}
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <OutcomeSection />
        <WhyUsSection />
        <ProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom CTA Bar for Mobile */}
      <FloatingMobileCTA />
    </div>
  );
}

export default App;
