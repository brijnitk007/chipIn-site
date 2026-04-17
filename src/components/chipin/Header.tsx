import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from './UserMenu';

interface HeaderProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStarted, onSignIn }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const links = [
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1823]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#0f1823]" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">ChipIn</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-gray-300 hover:text-teal-400 transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <UserMenu />
          ) : (
            <>
              <button
                onClick={onSignIn}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors font-medium"
              >
                Sign In
              </button>
              <button
                onClick={onGetStarted}
                className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0f1823] border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="block w-full text-left text-gray-300 hover:text-teal-400 py-2"
            >
              {l.label}
            </button>
          ))}
          {user ? (
            <div className="pt-2 border-t border-white/10">
              <UserMenu />
            </div>
          ) : (
            <>
              <button onClick={onSignIn} className="block w-full text-left text-gray-300 py-2">Sign In</button>
              <button
                onClick={onGetStarted}
                className="w-full py-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-lg font-semibold"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
