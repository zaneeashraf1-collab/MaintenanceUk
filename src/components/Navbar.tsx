import React, { useState } from 'react';
import { Phone, FileCode, Check, ShieldCheck, Clock, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenExport: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExport, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm">
              <span className="font-extrabold text-amber-500 text-lg">M</span>
            </div>
            <span>
              Maintenance<span className="text-amber-600">UK</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded bg-amber-100 text-amber-800 ml-1">
              24/7 Nationwide
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              About Us
            </a>
            <a href="#why-us" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Why Choose Us
            </a>
            <a href="#coverage" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              UK Coverage
            </a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Pricing Guide
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Tools */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Direct emergency telephone */}
            <a
              href="tel:08004567890"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors px-2 py-1"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[11px] text-slate-500 font-medium">Free 24/7 Helpline</span>
                <span>0800 456 7890</span>
              </div>
            </a>

            {/* Standalone HTML Export Modal Trigger */}
            <button
              onClick={onOpenExport}
              title="View and copy standalone .html code to send to client"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <FileCode className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Export Single-File</span> HTML
            </button>

            {/* Primary Quote CTA */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              Get a Free Quote
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              About Us
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Why Choose Us
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              UK Coverage
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Pricing Guide
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="tel:08004567890"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-slate-900 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call 0800 456 7890 (24/7)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
