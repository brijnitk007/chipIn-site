import React, { useState, useMemo } from 'react';
import { Plus, Minus, Bell, FileCheck, Send } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Calculator: React.FC = () => {
  const [amount, setAmount] = useState(240);
  const [people, setPeople] = useState(4);
  const [tipPercent, setTipPercent] = useState(15);
  const [reminderDays, setReminderDays] = useState(3);
  const [includeLegal, setIncludeLegal] = useState(false);

  const { total, perPerson, tip } = useMemo(() => {
    const tip = (amount * tipPercent) / 100;
    const total = amount + tip;
    const perPerson = total / Math.max(people, 1);
    return { total, perPerson, tip };
  }, [amount, people, tipPercent]);

  const handleSendRequest = () => {
    toast.success('Split request sent!', {
      description: `${people} people notified · $${perPerson.toFixed(2)} each · Reminder in ${reminderDays} days${includeLegal ? ' · Legal agreement attached' : ''}`,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-[#0f1823] via-[#1a2332] to-[#0f1823] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-teal-400/10 text-teal-400 rounded-full text-sm font-semibold mb-4 border border-teal-400/30">
            LIVE DEMO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Try the split calculator
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            See exactly how ChipIn divides, reminds, and secures your next payment.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 grid lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-300">Total bill amount</label>
              <div className="mt-2 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-2xl font-bold focus:border-teal-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Number of people</label>
              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => setPeople(Math.max(1, people - 1))}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 text-white hover:bg-white/10 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 text-center py-3 bg-white/5 border border-white/20 rounded-xl text-white text-2xl font-bold">
                  {people}
                </div>
                <button
                  onClick={() => setPeople(people + 1)}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 text-white hover:bg-white/10 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Tip ({tipPercent}%)</label>
              <input
                type="range"
                min="0"
                max="30"
                value={tipPercent}
                onChange={(e) => setTipPercent(Number(e.target.value))}
                className="mt-3 w-full accent-teal-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Remind every {reminderDays} days</label>
              <input
                type="range"
                min="1"
                max="14"
                value={reminderDays}
                onChange={(e) => setReminderDays(Number(e.target.value))}
                className="mt-3 w-full accent-teal-400"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-4 bg-white/5 border border-white/20 rounded-xl hover:border-teal-400/50 transition-colors">
              <input
                type="checkbox"
                checked={includeLegal}
                onChange={(e) => setIncludeLegal(e.target.checked)}
                className="w-5 h-5 accent-teal-400"
              />
              <FileCheck className="w-5 h-5 text-teal-400" />
              <div>
                <p className="text-white font-medium text-sm">Attach legal agreement</p>
                <p className="text-xs text-gray-400">Court-valid e-signed contract (+$0.50)</p>
              </div>
            </label>
          </div>

          {/* Output */}
          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-400/30 rounded-2xl p-6 flex flex-col">
            <p className="text-sm text-teal-300 font-medium">Each person pays</p>
            <p className="mt-2 text-6xl font-extrabold text-white tracking-tight">
              ${perPerson.toFixed(2)}
            </p>

            <div className="mt-6 space-y-3 flex-1">
              <div className="flex justify-between text-sm"><span className="text-gray-300">Subtotal</span><span className="text-white font-semibold">${amount.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-300">Tip ({tipPercent}%)</span><span className="text-white font-semibold">${tip.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm border-t border-white/10 pt-3"><span className="text-gray-300">Total</span><span className="text-white font-semibold">${total.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-300">Split between</span><span className="text-white font-semibold">{people} people</span></div>

              <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                <Bell className="w-4 h-4 text-teal-400 mt-0.5" />
                <p className="text-xs text-gray-300">
                  Auto-reminders will be sent every <strong className="text-white">{reminderDays} days</strong> until each participant pays.
                </p>
              </div>

              {includeLegal && (
                <div className="p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/30 flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <p className="text-xs text-yellow-100">
                    Legal agreement with digital signatures & audit trail will be attached.
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={handleSendRequest}
              className="mt-6 w-full py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-teal-500/40 transition-all"
            >
              <Send className="w-4 h-4" />
              Send Split Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
