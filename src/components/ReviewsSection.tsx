import React from 'react';
import { Star, Quote, Building2, Home, CheckCircle2 } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      author: 'Marcus Vance',
      role: 'Private Landlord (14 Units)',
      location: 'Manchester & Salford',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      icon: Building2,
      quote:
        'MaintenanceUK handles all my landlord certificates and tenant repair tickets. Last month a tenant had a Sunday morning boiler lock-out in winter; an engineer was on site within 48 minutes with Vaillant parts in the van. The digital sign-off and invoicing streamline my tax workflow tremendously.',
      workDone: 'Emergency Boiler Repair & Annual Landlord CP12',
    },
    {
      author: 'Eleanor Campbell',
      role: 'Homeowner',
      location: 'Richmond, London',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      icon: Home,
      quote:
        'Finding reliable trades in South West London used to be a nightmare of unreturned calls and vague quotes. MaintenanceUK provided a clear upfront fixed price to replace our antiquated fuse box with a modern surge-protected unit and rewire the kitchen. Professional, tidy, and finished on time.',
      workDone: 'Consumer Unit Upgrade & NICEIC Certification',
    },
    {
      author: 'Alistair Hughes',
      role: 'Operations Director, Apex Retail Group',
      location: 'Birmingham & West Midlands',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      icon: Building2,
      quote:
        'We retained MaintenanceUK for Planned Preventative Maintenance across four high-street storefronts. Their response times and compliance audit paperwork are exemplary. Having a single point of contact instead of wrangling five separate contractors saves us at least 15 hours every month.',
      workDone: 'Commercial PPM Facilities Management Contract',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            05. Verified Client Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by Homeowners, Letting Agents & Enterprises
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm font-bold text-slate-900 ml-2">4.9 / 5.0 Average Rating</span>
            <span className="text-xs text-slate-500">(1,840+ verified British reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Service
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <SafeImage
                      src={rev.avatarUrl}
                      alt={rev.author}
                      className="w-full h-full object-cover"
                      fallbackTitle={rev.author[0]}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                    <p className="text-xs text-slate-500">
                      {rev.role} · {rev.location}
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-slate-400 font-mono">
                  Work: {rev.workDone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
