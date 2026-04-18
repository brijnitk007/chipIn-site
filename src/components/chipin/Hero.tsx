import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Play, CheckCircle2, Apple } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface HeroProps {
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onWatchDemo }) => {
  const [count, setCount] = useState(0);
  const target = 2_30_00_00_000;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const scrollToCalc = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0f1823] via-[#1a2332] to-[#0f1823]">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-teal-400/30 rounded-full text-sm text-teal-400 mb-6">
            <Shield className="w-4 h-4" />
            Bank-level security · SOC 2 Certified
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Split.{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Send.</span>{' '}
            Secure.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            The smartest way to split bills, lend items, transfer money, and lock every payment with legal agreements and automatic reminders. No more awkward chases.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onGetStarted}
              className="group px-7 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-xl font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105 transition-all"
            >
              Start for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onWatchDemo}
              className="px-7 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.chipin.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
                <path d="M17.556 8.248l-3.764 3.751 3.764 3.752 4.247-2.39a1.003 1.003 0 000-1.722l-4.247-2.39z" fill="#FBBC04"/>
                <path d="M3.609 1.814L13.792 12l3.764-3.752L6.006.397a1.157 1.157 0 00-2.397 1.417z" fill="#34A853"/>
                <path d="M13.792 12L3.61 22.186a1.157 1.157 0 002.397 1.417l11.55-6.851L13.792 12z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white -mt-0.5">Google Play</p>
              </div>
            </a>
            <button
              onClick={() => toast.info('iOS app coming soon!')}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all"
            >
              <Apple className="w-7 h-7 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white -mt-0.5">App Store</p>
              </div>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-6">
            {['No hidden fees', 'Free forever plan', 'Cancel anytime'].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Live stats card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-cyan-500/30 rounded-3xl blur-2xl" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-400">Total chipped in</p>
                <p className="text-3xl font-bold text-white mt-1">
                  ₹{count.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="px-3 py-1 bg-teal-400/20 text-teal-400 text-xs font-semibold rounded-full flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                LIVE
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Goa Beach Trip', people: 6, amount: 18400, status: 'Agreement signed' },
                { name: 'DSLR Camera Lent · Arjun', people: 2, amount: 0, status: 'Return due in 5 days' },
                { name: 'Monthly Rent · Koramangala', people: 4, amount: 48000, status: 'Reminders active' },
                { name: 'Freelance Project', people: 2, amount: 75000, status: 'Paid · Legal proof' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-teal-400/50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.people} participants</p>
                    </div>
                    <p className="text-teal-400 font-bold">{item.amount > 0 ? '₹' + item.amount.toLocaleString('en-IN') : 'Item'}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-300">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToCalc}
              className="mt-6 w-full py-3 bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all"
            >
              Try the live calculator →
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative max-w-7xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: '250K+', label: 'Active users' },
          { value: '₹230Cr+', label: 'Processed securely' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '4.9★', label: 'App Store rating' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
