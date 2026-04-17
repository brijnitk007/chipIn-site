import React, { useState } from 'react';
import Header from './chipin/Header';
import Hero from './chipin/Hero';
import Features from './chipin/Features';
import HowItWorks from './chipin/HowItWorks';
import Calculator from './chipin/Calculator';
import Pricing from './chipin/Pricing';
import Testimonials from './chipin/Testimonials';
import CTASection from './chipin/CTASection';
import Footer from './chipin/Footer';
import AuthModal from './chipin/AuthModal';
import DemoModal from './chipin/DemoModal';

const AppLayout: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [demoOpen, setDemoOpen] = useState(false);

  const openSignIn = () => {
    setAuthMode('signin');
    setAuthOpen(true);
  };
  const openSignUp = () => {
    setAuthMode('signup');
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={openSignUp} onSignIn={openSignIn} />
      <main>
        <Hero onGetStarted={openSignUp} onWatchDemo={() => setDemoOpen(true)} />
        <Features />
        <HowItWorks />
        <Calculator />
        <Pricing />
        <Testimonials />
        <CTASection onGetStarted={openSignUp} />
      </main>
      <Footer />

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={setAuthMode}
      />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default AppLayout;
