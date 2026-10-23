import React, { useState } from 'react';
import { Droplet, Zap, Hammer, Building, ArrowRight, ShieldCheck, Check, Clock, FileCheck } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'plumbing' | 'electrical' | 'handyman' | 'commercial'>('all');

  const services = [
    {
      id: 'plumbing',
      number: '01',
      title: 'Plumbing & Central Heating',
      subtitle: 'Gas Safe registered engineers for boiler breakdowns, leaks, power flushes, and central heating maintenance.',
      icon: Droplet,
      iconColor: 'text-sky-600 bg-sky-50',
      pricing: 'From £85/hr or Fixed Quote',
      sla: '60–90 min emergency response',
      tag: 'Gas Safe #618923',
      photoUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      photoBadge: 'Gas Safe Verified',
      features: [
        'Boiler repairs, servicing & replacements (Worcester, Vaillant, Ideal)',
        'Emergency burst pipe, valve & stopcock repairs',
        'Landlord Gas Safety Inspection & CP12 Certificates',
        'Radiator power flushing, balancing & TRV valve replacements',
        'Bathroom sanitation, drain unblocking & high-pressure jetting',
      ],
      idealFor: 'Homeowners with heating faults, landlords requiring CP12 compliance, commercial washrooms.',
    },
    {
      id: 'electrical',
      number: '02',
      title: 'Electrical & NICEIC Certification',
      subtitle: 'Fully accredited electricians for consumer unit upgrades, rewiring, and statutory landlord testing.',
      icon: Zap,
      iconColor: 'text-amber-600 bg-amber-50',
      pricing: 'From £90/hr or Fixed Quote',
      sla: 'Same-day or planned booking',
      tag: 'NICEIC Approved Contractor',
      photoUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      photoBadge: 'NICEIC 18th Edition',
      features: [
        'Electrical Installation Condition Reports (EICR) for landlords',
        'Modern consumer unit (fuse box) upgrades with surge protection (SPD)',
        'Emergency short circuit fault-finding & tripping clearance',
        'Commercial lighting retrofits, emergency lighting testing & LED upgrades',
        'EV charger installations & PAT testing for workplace equipment',
      ],
      idealFor: 'Landlords needing 5-year EICR renewals, HMO property managers, office refurbishments.',
    },
    {
      id: 'handyman',
      number: '03',
      title: 'General Handyman & Carpentry',
      subtitle: 'Multi-skilled tradespeople for precision repairs, carpentry, painting, and tenant changeover repairs.',
      icon: Hammer,
      iconColor: 'text-indigo-600 bg-indigo-50',
      pricing: 'From £60/hr or Fixed Day Rate',
      sla: 'Flexible scheduling / 24-hr notice',
      tag: 'Multi-Trade Master Guild',
      photoUrl: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=800&q=80',
      photoBadge: 'Multi-Trade Guild',
      features: [
        'Door hanging, lock replacements & British Standard Euro cylinder upgrades',
        'Drywall patching, plaster repairs & full interior redecoration',
        'Silicone resealing for showers, baths, and kitchen worktops',
        'Flatpack furniture assembly, TV wall mounting & fixture fitting',
        'Minor masonry repairs, fence repairs & gutter cleaning',
      ],
      idealFor: 'Letting agents conducting end-of-tenancy refreshes, busy homeowners with to-do lists.',
    },
    {
      id: 'commercial',
      number: '04',
      title: 'Commercial Property Maintenance',
      subtitle: 'Comprehensive facilities management and Planned Preventative Maintenance (PPM) for UK businesses.',
      icon: Building,
      iconColor: 'text-slate-800 bg-slate-100',
      pricing: 'Custom Retainer or SLA Rate Card',
      sla: 'SLA-backed priority emergency dispatch',
      tag: 'SafeContractor Certified',
      photoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      photoBadge: 'Commercial SLA Facilities',
      features: [
        'Planned Preventative Maintenance (PPM) contracts & asset auditing',
        'Statutory compliance filing (Fire doors, emergency lighting, water hygiene)',
        'Office refurbishments, partitioning & workspace reconfiguration',
        'Retail multi-site rapid response & void unit turnarounds',
        'Dedicated UK account manager with consolidated monthly itemised invoicing',
      ],
      idealFor: 'Property managing agents, retail chains, corporate head offices, logistics facilities.',
    },
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
              02. Professional Trade Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Specialist Trades for Every Property Requirement
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Whether booking a single emergency plumber or establishing a multi-site commercial facilities contract, all work is executed by accredited, in-house specialists.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Trades' },
              { id: 'plumbing', label: 'Plumbing' },
              { id: 'electrical', label: 'Electrical' },
              { id: 'handyman', label: 'Handyman' },
              { id: 'commercial', label: 'Commercial' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner with Fallback */}
                  <div className="h-48 w-full relative">
                    <SafeImage
                      src={service.photoUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      badge={service.photoBadge}
                      fallbackTitle={service.title}
                      fallbackSubtitle={service.tag}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-mono font-bold text-amber-400">
                        {service.number} // TRADE
                      </span>
                      <span className="bg-slate-900/80 px-2 py-0.5 rounded font-mono text-[11px]">
                        {service.pricing}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-7">
                    {/* Title & Description */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
                      <Icon className="w-4 h-4 text-amber-600" />
                      <span>{service.tag}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-medium">{service.sla}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.subtitle}
                    </p>

                    {/* Feature Checklist */}
                    <div className="space-y-2 mb-5 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Core Work Scope
                      </div>
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Common clients note */}
                    <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 mb-2 border border-slate-200">
                      <strong className="text-slate-800">Ideal For: </strong>
                      {service.idealFor}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-3"
                  >
                    <span>Request {service.title.split('&')[0]} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="tel:08004567890"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 pt-3"
                  >
                    Emergency Dispatch
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Landlord Package Banner */}
        <div id="pricing" className="mt-12 p-8 bg-slate-900 text-white rounded-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20 inline-block mb-3">
                UK Landlord Compliance Bundle
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Gas Safety (CP12) + 5-Year EICR Electrical Certificate
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Ensure statutory compliance for your rental properties in a single visit. Full digital certificate delivery within 24 hours of inspection. Suitable for single lets and HMOs across the UK.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
              <div className="text-left lg:text-right">
                <span className="text-xs text-slate-400 block">Combined Bundle Rate:</span>
                <span className="text-3xl font-extrabold text-white font-mono">
                  £189<span className="text-xs font-normal text-slate-400"> + VAT</span>
                </span>
                <span className="text-xs text-emerald-400 block mt-0.5">Save £55 vs separate bookings</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
              >
                Book Compliance Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
