import React from 'react';
import { ShieldCheck, Flame, Zap, Award, CheckCircle2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Badge 1: Gas Safe */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                Gas Safe Register
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-mono">#618923</span>
              </div>
              <p className="text-xs text-slate-400">Certified heating & boiler engineers</p>
            </div>
          </div>

          {/* Badge 2: NICEIC */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-white">NICEIC Approved</div>
              <p className="text-xs text-slate-400">Domestic & commercial electrical safety</p>
            </div>
          </div>

          {/* Badge 3: TrustMark */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-white">TrustMark Endorsed</div>
              <p className="text-xs text-slate-400">UK Government quality standard scheme</p>
            </div>
          </div>

          {/* Badge 4: SafeContractor / Insurance */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-white">SafeContractor & £5M Cover</div>
              <p className="text-xs text-slate-400">Full public & employer liability backed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
