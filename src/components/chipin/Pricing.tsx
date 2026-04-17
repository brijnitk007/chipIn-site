import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'forever',
    desc: 'Perfect for occasional splits with friends.',
    priceLabel: 'Free',
    features: [
      'Unlimited splits up to 5 people',
      'Basic auto-reminders',
      'Email & WhatsApp notifications',
      'UPI & bank transfer support',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pay As You Go',
    price: null,
    period: '',
    desc: 'Only pay when you create legal documents or agreements.',
    priceLabel: 'Per document',
    features: [
      'Unlimited splits & participants',
      'Legal agreement — ₹49/document',
      'E-signed contract with audit trail',
      'Court-valid digital proof',
      'SMS + email + WhatsApp reminders',
      'Export agreements to PDF',
      'Priority support',
    ],
    cta: 'Start Splitting',
    highlight: true,
  },
  {
    name: 'Business',
    price: null,
    period: '',
    desc: 'Volume pricing for teams & freelancers who need agreements regularly.',
    priceLabel: 'Custom',
    features: [
      'Everything in Pay As You Go',
      'Bulk agreements at ₹29/doc',
      'Custom legal templates',
      'Multi-user team accounts',
      'Milestone-based payouts',
      'API access & webhooks',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  const handleSelect = (plan: string) => {
    toast.success(`${plan} plan selected`, {
      description: 'Redirecting to checkout...',
    });
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] tracking-tight">
            Simple plans, big impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Free forever for splits. Pay only when you need legal agreements or documents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 border-2 transition-all ${
                p.highlight
                  ? 'bg-gradient-to-br from-[#1a2332] to-[#0f1823] border-teal-400 text-white scale-105 shadow-2xl shadow-teal-500/20'
                  : 'bg-white border-gray-200 text-[#1a2332] hover:shadow-xl hover:border-teal-300'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <h3 className={`text-xl font-bold ${p.highlight ? 'text-white' : 'text-[#1a2332]'}`}>{p.name}</h3>
              <p className={`text-sm mt-2 ${p.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{p.desc}</p>

              <div className="mt-6 flex items-baseline gap-2">
                {p.price !== null ? (
                  <>
                    <span className="text-5xl font-extrabold">₹{p.price}</span>
                    <span className={p.highlight ? 'text-gray-300' : 'text-gray-500'}>/{p.period}</span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold">{p.priceLabel}</span>
                )}
              </div>

              <button
                onClick={() => handleSelect(p.name)}
                className={`mt-6 w-full py-3.5 rounded-xl font-semibold transition-all ${
                  p.highlight
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] hover:shadow-lg hover:shadow-teal-500/40'
                    : 'bg-[#1a2332] text-white hover:bg-[#0f1823]'
                }`}
              >
                {p.cta}
              </button>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.highlight ? 'text-teal-400' : 'text-teal-500'}`} />
                    <span className={p.highlight ? 'text-gray-200' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
