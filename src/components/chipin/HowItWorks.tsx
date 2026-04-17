import React from 'react';
import { UserPlus, FileSignature, CreditCard, BellRing } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create a Split',
    desc: 'Add participants, upload the bill, and choose how to divide it — equal, custom, or by share.',
  },
  {
    icon: FileSignature,
    title: 'Sign the Agreement',
    desc: 'Each party digitally signs a legally binding agreement with timestamps and audit trail.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    desc: 'Funds move through bank-grade rails with escrow protection until conditions are met.',
  },
  {
    icon: BellRing,
    title: 'Auto Reminders',
    desc: 'Smart nudges via SMS, email, and push until everyone has paid — you never have to ask.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] tracking-tight">
            From split to settled in 4 steps
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The whole flow takes under 2 minutes. Your money stays protected the entire way.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-cyan-300 to-teal-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="relative">
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                    <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-white font-bold flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                    <Icon className="w-10 h-10 text-teal-500 mt-4 mb-4" />
                    <h3 className="text-xl font-bold text-[#1a2332]">{s.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
