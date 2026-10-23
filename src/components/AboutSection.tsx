import React, { useState } from 'react';
import { ShieldCheck, Clock, Users, CheckCircle, FileCheck, Award, Building2, Eye } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'boiler' | 'electrical' | 'tenancy'>('boiler');

  const projectExamples = {
    boiler: {
      title: 'Emergency Combi Boiler Upgrade in Kensington, London',
      trade: 'Plumbing & Gas Safe #618923',
      beforeLabel: 'Failing 18-Year-Old Leaking System',
      afterLabel: 'A-Rated Worcester Bosch Combi System',
      description: 'Replaced a leaking, inefficient system within 24 hours of total breakdown, restoring central heating and hot water to a 4-bedroom Victorian home.',
      outcome: '30% heating bill reduction + 10-year manufacturer warranty',
      photoUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    },
    electrical: {
      title: 'Full 18th Edition Consumer Unit Replacement in Manchester',
      trade: 'NICEIC Approved Contractor',
      beforeLabel: 'Dangerous Rewireable Wooden Fuse Box',
      afterLabel: 'Metal Dual RCD Surge-Protected Board',
      description: 'Upgraded outdated electrical consumer unit to pass landlord EICR statutory requirements with full certification issued on the same day.',
      outcome: 'Satisfactory EICR certificate filed with local council',
      photoUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    },
    tenancy: {
      title: '48-Hour Void Turnaround for Landlord Portfolio in Birmingham',
      trade: 'Multi-Trade Handyman & Redecoration',
      beforeLabel: 'Worn Walls & Damaged Door Latches',
      afterLabel: 'Clean Repaint, New Locks & Resealed Bath',
      description: 'Repaired drywall, replaced 4 internal door latches, renewed bathroom silicone, and applied two coats of washable trade emulsion before new tenant move-in.',
      outcome: 'Zero void period loss for property investor',
      photoUrl: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=800&q=80',
    },
  };

  const currentProject = projectExamples[activeProjectTab];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            01. Dedicated British Property Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5 text-balance">
            Setting the Benchmark for Reliability, Quality & Safety Across the UK
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded to eliminate the chronic unpredictability of freelance trades, MaintenanceUK delivers a singular, dependable standard of care for British homes, rental portfolios, and commercial premises.
          </p>
        </div>

        {/* 2-Column Story with Engineer Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Story & Accreditations */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-base">
            <p>
              Whether dealing with an urgent midnight pipe burst in Mayfair, an annual landlord gas safety inspection in Manchester, or routine facilities maintenance for a Birmingham office block, our clients deal with a vetted, accountable organisation.
            </p>
            <p>
              Every technician in our network is full-time vetted, DBS-checked, carries photographic identification, and operates under our strict <strong className="text-slate-900">£5,000,000 Public Liability Insurance</strong>. We do not gamble with your safety or property value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  Guaranteed Response
                </div>
                <p className="text-xs text-slate-500">
                  Priority emergency dispatch within 60–90 minutes across all serviced metropolitan zones.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  Compliance Made Simple
                </div>
                <p className="text-xs text-slate-500">
                  Instant digital certificates for Landlord Gas Safety (CP12), EICR electrical certificates, and PAT testing.
                </p>
              </div>
            </div>
          </div>

          {/* Engineer & Team Photo Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <SafeImage
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="MaintenanceUK qualified engineer on site"
                className="w-full h-80 sm:h-96 object-cover"
                badge="Vetted & Accredited"
                fallbackTitle="Fully Insured British Tradespeople"
                fallbackSubtitle="Gas Safe #618923 and NICEIC certified technicians on duty 24/7."
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Floating trust overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                    UK Field Operations
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Uniformed, Insured & Background Checked
                </h4>
                <p className="text-xs text-slate-300">
                  Direct employee accountability with GPS job tracking and digital sign-off reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Work Transformation Showcase */}
        <div className="bg-white border border-slate-200 rounded-2xl p-7 lg:p-9 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                Field Case Studies & Photographic Proof
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Recent UK Property Transformations
              </h3>
            </div>

            {/* Project Tabs */}
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveProjectTab('boiler')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeProjectTab === 'boiler'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gas & Heating
              </button>
              <button
                onClick={() => setActiveProjectTab('electrical')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeProjectTab === 'electrical'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Electrical
              </button>
              <button
                onClick={() => setActiveProjectTab('tenancy')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeProjectTab === 'tenancy'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Void Refresh
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <SafeImage
                src={currentProject.photoUrl}
                alt={currentProject.title}
                className="w-full h-full object-cover"
                badge={currentProject.trade}
                fallbackTitle={currentProject.title}
                fallbackSubtitle={currentProject.outcome}
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block border border-emerald-200">
                ✓ Completed on time & fully certified
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {currentProject.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-slate-700 block mb-0.5">Initial Problem:</span>
                  <span className="text-slate-500">{currentProject.beforeLabel}</span>
                </div>
                <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg">
                  <span className="font-bold text-amber-900 block mb-0.5">Engineered Solution:</span>
                  <span className="text-amber-800">{currentProject.afterLabel}</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Verified Outcome: {currentProject.outcome}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accountability Comparison Table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="text-sm font-bold uppercase tracking-wider text-amber-400">
              The MaintenanceUK Difference
            </div>
            <span className="text-xs text-slate-400">Why UK landlords & estates switch to our managed model</span>
          </div>

          <div className="divide-y divide-slate-200 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 items-center gap-2">
              <div className="md:col-span-4 font-bold text-slate-900">Trade Vetting & Qualifications</div>
              <div className="md:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Gas Safe, NICEIC & DBS background verified
              </div>
              <div className="md:col-span-4 text-slate-400 text-xs">
                Typical independent trades: Unverified subcontracting, variable insurance
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 items-center gap-2">
              <div className="md:col-span-4 font-bold text-slate-900">Pricing Transparency</div>
              <div className="md:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Fixed, upfront quotes with zero hidden callout charges
              </div>
              <div className="md:col-span-4 text-slate-400 text-xs">
                Typical independent trades: Open-ended hourly billing, vague materials markup
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 items-center gap-2">
              <div className="md:col-span-4 font-bold text-slate-900">Emergency Availability</div>
              <div className="md:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                24/7/365 active dispatch desk with tracked ETA
              </div>
              <div className="md:col-span-4 text-slate-400 text-xs">
                Typical independent trades: Voicemail out-of-hours, frequent no-shows
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 items-center gap-2">
              <div className="md:col-span-4 font-bold text-slate-900">Legal Compliance & Invoicing</div>
              <div className="md:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Digital landlord certificates & full VAT receipts
              </div>
              <div className="md:col-span-4 text-slate-400 text-xs">
                Typical independent trades: Handwritten paper notes, delays in compliance filings
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
