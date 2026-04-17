import React, { useState } from 'react';
import { X, Mail, Lock, User, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  open: boolean;
  mode: 'signin' | 'signup';
  onClose: () => void;
  onSwitchMode: (m: 'signin' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, mode, onClose, onSwitchMode }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  if (!open) return null;

  const resetAndClose = () => {
    setForm({ name: '', email: '', password: '' });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || (mode === 'signup' && !form.name)) {
      toast.error('Please fill in all fields');
      return;
    }
    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      if (mode === 'signup') {
        const { error } = await signUp(form.email, form.password, form.name);
        if (error) {
          toast.error('Sign up failed', { description: error.message });
        } else {
          toast.success('Account created!', { description: 'You are now signed in.' });
          resetAndClose();
          navigate('/dashboard');
        }
      } else {
        const { error } = await signIn(form.email, form.password);
        if (error) {
          toast.error('Sign in failed', { description: error.message });
        } else {
          toast.success('Welcome back!');
          resetAndClose();
          navigate('/dashboard');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={resetAndClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl"
      >
        <button onClick={resetAndClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-[#1a2332]">
          {mode === 'signup' ? 'Create your account' : 'Welcome back'}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {mode === 'signup' ? 'Start splitting smarter in 30 seconds.' : 'Sign in to continue chipping in.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {mode === 'signup' && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={loading}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal-400 focus:outline-none disabled:bg-gray-50"
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={loading}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal-400 focus:outline-none disabled:bg-gray-50"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password"
              placeholder="Password (min. 6 characters)"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              disabled={loading}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal-400 focus:outline-none disabled:bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0f1823] rounded-xl font-bold hover:shadow-xl hover:shadow-teal-500/40 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading
              ? 'Please wait...'
              : mode === 'signup'
              ? 'Create Account'
              : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => onSwitchMode(mode === 'signup' ? 'signin' : 'signup')}
            className="text-teal-600 font-semibold hover:underline"
          >
            {mode === 'signup' ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
