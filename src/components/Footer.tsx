import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Flame, Zap, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-extrabold text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white text-base">
                M
              </div>
              <span>
                Maintenance<span className="text-amber-500">UK</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              The United Kingdom's premier property maintenance provider. Certified in-house engineers, transparent fixed pricing, and 60-minute emergency response for private homeowners, residential landlords, and commercial portfolios.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Gas Safe #618923</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>NICEIC Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>£5M Insured</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Plumbing & Boiler Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Electrical & Fuse Box Upgrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Landlord EICR & CP12 Certificates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  General Handyman & Carpentry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial Facility Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  24/7 Emergency Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Regional Coverage */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Regional Hubs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Greater London (Inside M25)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Birmingham & West Midlands
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Manchester & North West
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Leeds & Yorkshire
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Bristol & South West
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Edinburgh & Glasgow
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              24/7 Operations Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="block text-slate-500">Emergency Telephone:</span>
                <a href="tel:08004567890" className="text-white font-bold hover:text-amber-400">
                  0800 456 7890
                </a>
              </div>
              <div>
                <span className="block text-slate-500">Dispatch Email:</span>
                <a href="mailto:enquiries@maintenanceuk.com" className="text-white font-medium hover:text-amber-400">
                  enquiries@maintenanceuk.com
                </a>
              </div>
              <div>
                <span className="block text-slate-500">London Head Office:</span>
                <span className="text-slate-300">124 City Road, London, EC1V 2NX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 MaintenanceUK Ltd. All rights reserved. MaintenanceUk.com
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>Company No. 09482710</span>
            <span>·</span>
            <span>VAT Reg GB 294 8839 12</span>
            <span>·</span>
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
