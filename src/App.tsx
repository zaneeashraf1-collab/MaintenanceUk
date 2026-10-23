import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { AboutSection } from './components/AboutSection';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoverageSection } from './components/CoverageSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { Phone, FileCode, ArrowUp } from 'lucide-react';

export default function App() {
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Plumbing & Heating');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromGrid = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Top Notification Announcement */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>
              UK-Wide 24/7 Rapid Emergency Response Active · Average dispatch: <strong>45–60 mins</strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>Direct Dispatch: <strong className="text-white">0800 456 7890</strong></span>
            <span>·</span>
            <span>Gas Safe Reg #618923</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <Navbar
        onOpenExport={() => setExportModalOpen(true)}
        onOpenQuote={scrollToContact}
      />

      {/* Hero with Postcode & Instant Estimator */}
      <main className="flex-1">
        <Hero onOpenQuoteModal={scrollToContact} />

        {/* Accreditations Strip */}
        <TrustBadges />

        {/* Services Bento Grid */}
        <ServicesGrid onSelectService={handleSelectServiceFromGrid} />

        {/* About Section & Standards */}
        <AboutSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Nationwide Coverage Hubs */}
        <CoverageSection />

        {/* Verified Reviews */}
        <ReviewsSection />

        {/* Contact & Booking Section */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Standalone HTML Code Modal (for presenting directly to John) */}
      <ExportHtmlModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />

      {/* Floating Bottom Quick Action Pill */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setExportModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-full shadow-lg border border-slate-700 text-xs font-semibold transition-all hover:scale-105"
          title="Export Standalone HTML to send to client"
        >
          <FileCode className="w-4 h-4 text-amber-400" />
          <span>Client HTML Code</span>
        </button>

        <a
          href="tel:08004567890"
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg text-xs font-bold transition-all hover:scale-105"
          title="Emergency Dispatch: 0800 456 7890"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">0800 456 7890</span>
        </a>
      </div>
    </div>
  );
}
