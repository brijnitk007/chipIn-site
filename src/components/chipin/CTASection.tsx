import React, { useState } from 'react';
import { ArrowRight, Apple, Smartphone } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface CTASectionProps {
  onGetStarted: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }
    toast.success('Welcome aboard!', { description: `We've sent a signup link to ${email}` });
    setEmail('');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-[#1a2332] via-[#0f1823] to-[#1a2332] rounded-3xl overflow-hidden p-12 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to stop chasing people for money?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Join 250,000+ users who chip in smarter. Free forever plan. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:border-teal-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-teal-500/40 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => toast.info('App Store download coming soon')}
                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl flex items-center gap-3 justify-center hover:bg-white/20 transition-all"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.chipin.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl flex items-center gap-3 justify-center hover:bg-white/20 transition-all"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
