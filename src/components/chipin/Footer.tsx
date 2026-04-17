import React from 'react';
import { Zap, Twitter, Linkedin, Facebook, Instagram, Shield, Lock } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Split Calculator', 'Legal Agreements', 'API Docs', 'Changelog'],
  },
  {
    title: 'Use Cases',
    links: ['Roommates', 'Travel Groups', 'Freelancers', 'Small Business', 'Events', 'Clubs & Teams'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Blog', 'Partners', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Security', 'Trust Center', 'Status', 'System Updates', 'Community'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Compliance', 'SOC 2 Report', 'GDPR'],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1018] text-gray-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#0f1823]" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">ChipIn</span>
            </div>
            <p className="text-sm leading-relaxed">
              Split, send, and secure money with legal agreements and auto reminders.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-500/20 hover:text-teal-400 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-teal-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">© 2026 ChipIn Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-teal-400" /> 256-bit SSL</div>
            <div className="flex items-center gap-2 text-amber-400">★ PCI DSS Compliant</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
