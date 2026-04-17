import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Zap, ArrowLeft, Plus, TrendingUp, Users, FileCheck, Bell } from 'lucide-react';
import UserMenu from '@/components/chipin/UserMenu';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const fullName = (user?.user_metadata?.full_name as string) || user?.email?.split('@')[0] || 'there';

  const stats = [
    { label: 'Total chipped in', value: '₹3,54,000', icon: TrendingUp, color: 'from-teal-400 to-cyan-500' },
    { label: 'Active splits', value: '7', icon: Users, color: 'from-blue-400 to-indigo-500' },
    { label: 'Signed agreements', value: '12', icon: FileCheck, color: 'from-amber-400 to-orange-500' },
    { label: 'Pending reminders', value: '3', icon: Bell, color: 'from-purple-400 to-pink-500' },
  ];

  const recent = [
    { title: 'Goa Beach Trip', people: 6, amount: 18400, status: 'active' },
    { title: 'Apartment Rent · Koramangala', people: 4, amount: 48000, status: 'pending' },
    { title: 'Freelance Milestone #2', people: 2, amount: 75000, status: 'paid' },
    { title: 'Team Lunch Friday', people: 8, amount: 4200, status: 'active' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-[#1a2332]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#0f1823]" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-[#1a2332]">Dashboard</span>
            </div>
          </div>
          <div className="bg-[#1a2332] rounded-full">
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1a2332]">Welcome back, {fullName} 👋</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your splits.</p>
          </div>
          <button className="px-5 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-teal-500/40 transition-all">
            <Plus className="w-4 h-4" />
            New Split
          </button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-[#1a2332]">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Recent splits */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-[#1a2332]">Recent splits</h2>
            <button className="text-sm text-teal-600 font-semibold hover:underline">View all</button>
          </div>
          <div className="divide-y divide-gray-100">
            {recent.map((r, i) => (
              <div key={i} className="py-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1a2332]">{r.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{r.people} participants</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-[#1a2332]">₹{r.amount.toLocaleString('en-IN')}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      r.status === 'paid'
                        ? 'bg-green-100 text-green-700'
                        : r.status === 'pending'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-teal-100 text-teal-700'
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
