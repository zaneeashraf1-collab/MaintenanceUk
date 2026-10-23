import React, { useState } from 'react';
import { Shield, Clock, Star, MapPin, CheckCircle2, ArrowRight, Calculator, Wrench, Sparkles, Phone, Award } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  // Postcode live checker state
  const [postcode, setPostcode] = useState('');
  const [coverageResult, setCoverageResult] = useState<{
    searched: boolean;
    area: string;
    responseTime: string;
    techniciansAvailable: number;
  } | null>(null);

  // Quick estimator state inside hero
  const [trade, setTrade] = useState('plumbing');
  const [urgency, setUrgency] = useState('standard');
  const [propertyType, setPropertyType] = useState('residential');

  // Estimate calculation
  const getEstimate = () => {
    let base = 65; // base hourly/callout in GBP
    if (trade === 'plumbing') base = 85;
    if (trade === 'electrical') base = 90;
    if (trade === 'handyman') base = 60;
    if (trade === 'commercial') base = 120;

    let multiplier = 1;
    if (urgency === 'emergency') multiplier = 1.35;
    if (propertyType === 'commercial') multiplier *= 1.2;

    const estimatedTotal = Math.round(base * multiplier);
    return {
      rate: `£${estimatedTotal}`,
      sla: urgency === 'emergency' ? 'Within 60-90 Mins' : 'Same-Day / Next-Day',
    };
  };

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;

    const pc = postcode.trim().toUpperCase();
    let areaName = 'Greater London & South East';
    let time = '45 - 60 minutes';
    let techCount = 6;

    if (pc.startsWith('M') || pc.startsWith('SK') || pc.startsWith('WA')) {
      areaName = 'Greater Manchester & North West';
      time = '45 - 60 minutes';
      techCount = 5;
    } else if (pc.startsWith('B') || pc.startsWith('WS') || pc.startsWith('WV')) {
      areaName = 'Birmingham & West Midlands';
      time = '50 - 70 minutes';
      techCount = 4;
    } else if (pc.startsWith('LS') || pc.startsWith('BD') || pc.startsWith('HG')) {
      areaName = 'Leeds & Yorkshire';
      time = '50 - 75 minutes';
      techCount = 4;
    } else if (pc.startsWith('BS') || pc.startsWith('BA') || pc.startsWith('GL')) {
      areaName = 'Bristol & South West';
      time = '55 - 75 minutes';
      techCount = 3;
    } else if (pc.startsWith('EH') || pc.startsWith('G')) {
      areaName = 'Scotland Central Belt (Edinburgh/Glasgow)';
      time = '60 - 80 minutes';
      techCount = 4;
    }

    setCoverageResult({
      searched: true,
      area: areaName,
      responseTime: time,
      techniciansAvailable: techCount,
    });
  };

  const estimate = getEstimate();

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7">
            {/* Trust Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-4">
              <span className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                Rated 4.9/5 by 1,800+ UK Homeowners & Landlords
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 font-medium normal-case">Gas Safe & NICEIC Approved</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              The UK's Trusted Property Care & Rapid Emergency Repairs
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl text-balance">
              The single accountable partner for UK homeowners, residential landlords, and commercial facilities managers. Fully insured trades, Gas Safe & NICEIC certified, with guaranteed 60-minute emergency dispatch.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="tel:08004567890"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
              >
                <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                Emergency Callout: 0800 456 7890
              </a>
            </div>

            {/* Interactive Postcode Coverage Checker */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-xl">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  Check Local Response Time in Your Postcode
                </span>
                <span className="text-[11px] text-slate-500">London, MCR, BHM, Leeds, etc.</span>
              </div>
              <form onSubmit={handlePostcodeCheck} className="flex gap-2">
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Enter UK Postcode (e.g. SW1A 1AA, M1 1AE)"
                  className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  Verify Coverage
                </button>
              </form>

              {coverageResult && (
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>{coverageResult.area}</strong>: Active Depot
                    </span>
                  </div>
                  <div className="text-slate-500">
                    Est. SLA: <span className="text-slate-900 font-semibold">{coverageResult.responseTime}</span> · {coverageResult.techniciansAvailable} vans nearby
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Hero Photo & Live Rate Estimator Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hero Photo Card with real UK property maintenance visual */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <SafeImage
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                alt="Professional UK property maintenance engineer and service van"
                className="w-full h-64 sm:h-72 object-cover"
                badge="Vetted & Gas Safe Registered"
                fallbackTitle="Certified UK Property Maintenance Team"
                fallbackSubtitle="Nationwide vans equipped with diagnostic gear and common replacement parts."
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating photo caption badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div>
                  <span className="font-bold text-sm block">Rapid Fleet Response</span>
                  <span className="text-slate-300">London · Midlands · North West · Scotland</span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-600/90 backdrop-blur-sm px-2.5 py-1 rounded text-white font-bold text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  60-Min Dispatch
                </div>
              </div>
            </div>

            {/* Quick Estimate Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Instant Rate Estimator</h3>
                  <p className="text-xs text-slate-500">Transparent rates before work starts</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
              </div>

              {/* Trade Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { id: 'plumbing', name: 'Plumbing & Gas' },
                  { id: 'electrical', name: 'Electrical (NICEIC)' },
                  { id: 'handyman', name: 'Handyman Repairs' },
                  { id: 'commercial', name: 'Commercial Facilities' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTrade(item.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all ${
                      trade === item.id
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Calculated price strip */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Starting From:</span>
                  <span className="text-xl font-extrabold text-slate-900 font-mono">
                    {estimate.rate}
                    <span className="text-xs font-normal text-slate-500"> / hr + VAT</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block">Target Dispatch:</span>
                  <span className="text-xs font-bold text-emerald-700">{estimate.sla}</span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-3 w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
              >
                Book This Trade Online
              </a>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>£5M Public Liability</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Gas Safe & NICEIC</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>12-Month Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>No Hidden Callouts</span>
          </div>
        </div>
      </div>
    </section>
  );
};
