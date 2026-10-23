import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, AlertCircle, FileText } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    postcode: '',
    propertyType: 'Homeowner',
    service: preselectedService || 'Plumbing & Heating',
    urgency: 'Same-Day / Next-Day',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.postcode) {
      alert('Please provide your name, phone number, and UK postcode.');
      return;
    }
    const generatedRef = `MUK-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      postcode: '',
      propertyType: 'Homeowner',
      service: 'Plumbing & Heating',
      urgency: 'Same-Day / Next-Day',
      details: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            06. Get a Fast, Transparent Quote
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Speak Directly with Our British Dispatch Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Fill in your details below for an upfront quote without obligation, or call our 24/7 UK emergency hotline for urgent dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Operational Details */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 sm:p-9 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 inline-block mb-6">
                24/7 Operations Desk
              </span>

              <h3 className="text-2xl font-bold text-white mb-4">
                Rapid UK Help & Inquiries
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Our customer coordinators and dispatchers are based in London and Manchester, handling emergency dispatches and scheduled maintenance every hour of every day.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-semibold">
                      24/7 Free Emergency Helpline
                    </span>
                    <a
                      href="tel:08004567890"
                      className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      0800 456 7890
                    </a>
                    <span className="block text-xs text-slate-400">Lines open 24 hours / 365 days</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-semibold">
                      Written Quotes & Contracts
                    </span>
                    <a
                      href="mailto:enquiries@maintenanceuk.com"
                      className="text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      enquiries@maintenanceuk.com
                    </a>
                    <span className="block text-xs text-slate-400">Guaranteed 15-minute response</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-semibold">
                      UK Registered Office
                    </span>
                    <div className="text-sm font-semibold text-white">
                      MaintenanceUK Ltd
                    </div>
                    <div className="text-xs text-slate-300">
                      124 City Road, London, EC1V 2NX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom compliance note */}
            <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Fully Bonded & Insured up to £5,000,000
              </div>
              <p>Registered in England & Wales Company #09482710 · VAT #GB 294 8839 12</p>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Quote Request Received!
                </h3>
                <div className="inline-block px-3.5 py-1.5 bg-slate-100 rounded-lg text-xs font-mono font-bold text-slate-700 mb-4">
                  Reference: {refNumber}
                </div>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your inquiry for <strong className="text-slate-900">{formData.service}</strong> in <strong className="text-slate-900">{formData.postcode}</strong> has been assigned to our local dispatch manager. We will call you on <strong className="text-slate-900">{formData.phone}</strong> within 15 minutes.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left text-xs text-slate-600 mb-6 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-slate-800">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Postcode / City:</span>
                    <span className="font-semibold text-slate-800">{formData.postcode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Urgency:</span>
                    <span className="font-semibold text-amber-700">{formData.urgency}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Get Your Free, No-Obligation Quote
                  </h3>
                  <p className="text-xs text-slate-500">
                    Upfront itemised pricing. No work begins until you approve.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. James Campbell"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07911 123456"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Email & Postcode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. james@example.co.uk"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      UK Postcode / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="e.g. SW1A 1AA or M1 1AE"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all uppercase font-mono"
                    />
                  </div>
                </div>

                {/* Service & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Trade Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    >
                      <option>Plumbing & Heating</option>
                      <option>Electrical & Rewiring (NICEIC)</option>
                      <option>General Handyman & Carpentry</option>
                      <option>Commercial Facilities Management</option>
                      <option>Landlord Safety Pack (CP12 + EICR)</option>
                      <option>24/7 Emergency Dispatch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    >
                      <option>Residential Homeowner</option>
                      <option>Landlord (Single Let)</option>
                      <option>Landlord / Letting Agent (Portfolio / HMO)</option>
                      <option>Commercial Business / Office</option>
                      <option>Retail / Hospitality</option>
                    </select>
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Required Response Window
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'Emergency (Under 2h)', label: 'Emergency', sub: '< 2 Hours' },
                      { id: 'Same-Day / Next-Day', label: 'Urgent', sub: 'Today / Tmrw' },
                      { id: 'This Week', label: 'Standard', sub: 'This Week' },
                      { id: 'Flexible / Planning', label: 'Flexible', sub: 'Quote Only' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: item.id })}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          formData.urgency === item.id
                            ? 'bg-amber-600 text-white border-amber-600'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span className="block text-xs font-bold leading-tight">{item.label}</span>
                        <span className="text-[10px] opacity-80">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Issue Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Repair or Project Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe what needs fixing (e.g. Vaillant boiler showing F.22 low pressure, new bathroom mixer tap install, HMO compliance renewal)..."
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free Upfront Quote</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2 text-center">
                  <span>✓ 15-Minute Response</span>
                  <span>·</span>
                  <span>✓ No Obligation</span>
                  <span>·</span>
                  <span>✓ Fixed Rates in GBP</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
