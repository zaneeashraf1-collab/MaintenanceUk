import React from 'react';
import { PoundSterling, ShieldCheck, HeartHandshake, Zap, FileText, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      number: '01',
      title: 'Transparent Pricing & No Hidden Fees',
      icon: PoundSterling,
      iconColor: 'text-amber-700 bg-amber-50',
      description:
        'We believe in absolute financial clarity. You receive a clear, itemised quote before any work commences. We never charge hidden travel fees or unexpected parking surcharges.',
      proof: [
        'Fixed hourly and project rates in GBP',
        'Itemised VAT invoices ready for HMRC filing',
        'Zero charges for preliminary telephone consultations',
      ],
    },
    {
      number: '02',
      title: 'Certified & Vetted Local Trades',
      icon: ShieldCheck,
      iconColor: 'text-emerald-700 bg-emerald-50',
      description:
        'Every operative attending your property is thoroughly vetted, DBS background checked, and certified by UK bodies including Gas Safe, NICEIC, and the Guild of Master Craftsmen.',
      proof: [
        'Gas Safe registration #618923 verified',
        'NICEIC domestic & commercial installer accredited',
        'Fully uniformed technicians carrying digital photo ID',
      ],
    },
    {
      number: '03',
      title: '100% Satisfaction & 12-Month Warranty',
      icon: HeartHandshake,
      iconColor: 'text-blue-700 bg-blue-50',
      description:
        'Our reputation is built on pride of workmanship. If any repair or installation fails to meet British trade standards within 12 months, our senior team returns to rectify it at no extra cost.',
      proof: [
        'Comprehensive 12-month parts & labour guarantee',
        'Senior quality audit on commercial projects',
        'Over 1,800 5-star customer reviews across the UK',
      ],
    },
    {
      number: '04',
      title: '24/7 Rapid Response & Live Tracking',
      icon: Zap,
      iconColor: 'text-purple-700 bg-purple-50',
      description:
        'Burst pipes and power outages do not respect office hours. Our national dispatch center operates 24/7, 365 days a year with live SMS tracking so you know exactly when your engineer arrives.',
      proof: [
        'Average emergency response under 60 minutes',
        'Direct phone link to your assigned technician',
        'Well-stocked fleet vans carrying 90% common replacement parts',
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            03. The Trust Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Why British Homeowners & Property Managers Choose MaintenanceUK
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We operate like a modern technology-driven logistics organisation with the integrity, skill, and personal care of traditional British craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.number}. CRITERION
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.proof.map((line, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
