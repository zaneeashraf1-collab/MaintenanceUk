import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Check } from 'lucide-react';

export const CoverageSection: React.FC = () => {
  const hubs = [
    {
      region: 'Greater London & Home Counties',
      postcodes: 'EC, WC, E, N, NW, SE, SW, W, BR, CR, DA, EN, HA, IG, KT, RM, SM, TW, UB, WD',
      emergencySla: '45–60 Mins',
      depots: 'Central Hub (City Road) + 8 Mobile Response Units',
      highlight: 'Full ULEZ compliant fleet',
    },
    {
      region: 'Birmingham & West Midlands',
      postcodes: 'B, WS, WV, DY, CV, WR',
      emergencySla: '50–70 Mins',
      depots: 'Midlands Depot (Digbeth) + 5 Mobile Response Units',
      highlight: 'Gas Safe commercial specialists',
    },
    {
      region: 'Greater Manchester & North West',
      postcodes: 'M, SK, WA, WN, BL, OL, CH, L, PR',
      emergencySla: '45–60 Mins',
      depots: 'Northern Operations Hub (Salford) + 6 Units',
      highlight: 'Specialist residential rental turnarounds',
    },
    {
      region: 'Leeds & Yorkshire',
      postcodes: 'LS, BD, WF, HG, YO, HD, HX',
      emergencySla: '55–75 Mins',
      depots: 'Leeds Hub (Holbeck) + 4 Units',
      highlight: 'Complete commercial facility contracts',
    },
    {
      region: 'Bristol & South West',
      postcodes: 'BS, BA, GL, SN, TA',
      emergencySla: '55–75 Mins',
      depots: 'Avonmouth Station + 3 Units',
      highlight: 'Period property & heritage maintenance',
    },
    {
      region: 'Scotland Central Belt',
      postcodes: 'EH, G, FK, KY, ML',
      emergencySla: '60–80 Mins',
      depots: 'Edinburgh & Glasgow Regional Outposts',
      highlight: 'Scottish letting compliance compliant',
    },
  ];

  return (
    <section id="coverage" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
              04. Nationwide Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Strategic Fleet Hubs Across the United Kingdom
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              With strategically stationed response vans across major UK regions, we guarantee prompt dispatch and minimal downtime for your assets.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900">National Dispatch Status:</span>
            <span>All 6 regional hubs fully operational</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {hub.region}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800 shrink-0">
                  {hub.emergencySla}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600 mb-4">
                <div>
                  <span className="font-bold text-slate-700 block mb-0.5">Postcode Zones:</span>
                  <span className="font-mono text-slate-500 break-words">{hub.postcodes}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-700">Depot Base: </span>
                  <span>{hub.depots}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>{hub.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
