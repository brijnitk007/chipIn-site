import React from 'react';
import {
  Users, Plane, Briefcase, Home, Coffee, Gift,
  FileCheck, Bell, Lock, Split, Banknote, RefreshCcw
} from 'lucide-react';

const useCases = [
  { icon: Home, title: 'Roommate Bills', desc: 'Rent, utilities, groceries — split fairly, paid on time, every month.', color: 'from-teal-400 to-cyan-500' },
  { icon: Plane, title: 'Group Travel', desc: 'Track every expense from flights to dinners across your whole crew.', color: 'from-blue-400 to-indigo-500' },
  { icon: Briefcase, title: 'Freelance Payments', desc: 'Milestone-based payouts secured with digitally-signed agreements.', color: 'from-amber-400 to-orange-500' },
  { icon: Users, title: 'Team Events', desc: 'Office lunches, birthdays, and outings — no more spreadsheets.', color: 'from-purple-400 to-pink-500' },
  { icon: Coffee, title: 'Small IOUs', desc: 'That coffee run adds up. Log it, split it, forget it.', color: 'from-rose-400 to-red-500' },
  { icon: Gift, title: 'Group Gifts', desc: 'Collect contributions for gifts with transparent tracking.', color: 'from-emerald-400 to-teal-500' },
  { icon: FileCheck, title: 'Legal Agreements', desc: 'E-signed contracts attached to every large transfer. Court-valid.', color: 'from-yellow-400 to-amber-500' },
  { icon: Bell, title: 'Auto Reminders', desc: 'Smart nudges via email, SMS, and push. Zero awkwardness.', color: 'from-cyan-400 to-blue-500' },
  { icon: Lock, title: 'Escrow Protection', desc: 'Funds held securely until both parties confirm delivery.', color: 'from-indigo-400 to-purple-500' },
];

const keyFeatures = [
  { icon: Split, title: 'Smart Splits', desc: 'Equal, percentage, custom, or by shares — any way you need.' },
  { icon: Banknote, title: 'Instant Transfer', desc: 'Move money in seconds via Stripe, Plaid, and ACH rails.' },
  { icon: RefreshCcw, title: 'Recurring Payments', desc: 'Set it once. Rent, subscriptions, and allowances run on autopilot.' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            EVERYTHING YOU NEED
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] tracking-tight">
            One app for every money moment
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From roommate rent to freelance contracts, ChipIn handles the awkward, the complex, and the critical — with legal-grade security built in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 hover:border-teal-300 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a2332]">{uc.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{uc.desc}</p>
                <p className="mt-4 text-sm font-semibold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </p>
              </div>
            );
          })}
        </div>

        {/* Key feature trio */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {keyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-[#1a2332] to-[#0f1823] rounded-2xl p-8 text-white">
                <Icon className="w-10 h-10 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
