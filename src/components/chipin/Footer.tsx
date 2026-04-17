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
            <a
              href="https://play.google.com/store/apps/details?id=com.chipin.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm text-white font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
                <path d="M17.556 8.248l-3.764 3.751 3.764 3.752 4.247-2.39a1.003 1.003 0 000-1.722l-4.247-2.39z" fill="#FBBC04"/>
                <path d="M3.609 1.814L13.792 12l3.764-3.752L6.006.397a1.157 1.157 0 00-2.397 1.417z" fill="#34A853"/>
                <path d="M13.792 12L3.61 22.186a1.157 1.157 0 002.397 1.417l11.55-6.851L13.792 12z" fill="#EA4335"/>
              </svg>
              Google Play
            </a>
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
