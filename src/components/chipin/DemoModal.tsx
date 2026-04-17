import React from 'react';
import { X, Play } from 'lucide-react';

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-gradient-to-br from-[#1a2332] to-[#0f1823] rounded-3xl p-10 shadow-2xl border border-white/10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center border border-white/10">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
            <p className="text-white font-semibold">Product walkthrough · 2:14</p>
            <p className="text-gray-400 text-sm mt-1">See ChipIn in action</p>
          </div>
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">How ChipIn works in 2 minutes</h3>
        <p className="mt-2 text-gray-300">Watch how a simple dinner bill becomes a legally protected, auto-reminded, fully split payment — all in under 2 minutes.</p>
      </div>
    </div>
  );
};

export default DemoModal;
