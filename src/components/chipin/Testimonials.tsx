import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Manager',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/69e28cc2eaa72a38275f74ab_1776454996841_56e0dc40.png',
    text: 'Finally no more awkward group chats asking for rent. ChipIn handles everything and my roommates actually pay on time now.',
    rating: 5,
  },
  {
    name: 'Marcus Rivera',
    role: 'Freelance Designer',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/69e28cc2eaa72a38275f74ab_1776454966248_83db7e2d.jpg',
    text: 'The legal agreement feature saved me from a scammy client. I had full court-valid proof and got paid within 48 hours.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Travel Blogger',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/69e28cc2eaa72a38275f74ab_1776454979811_4a92a9d7.png',
    text: 'Planned a 2-week Europe trip with 8 friends. ChipIn tracked every euro and settled up perfectly at the end.',
    rating: 5,
  },
  {
    name: 'James O\'Connor',
    role: 'Software Engineer',
    avatar: 'https://d64gsuwffb70l.cloudfront.net/69e28cc2eaa72a38275f74ab_1776454969542_46850433.jpg',
    text: 'The auto-reminders are gold. Zero awkwardness, zero chasing. Everyone just pays. How has this not existed before?',
    rating: 5,
  },
];

const logos = ['Stripe', 'Plaid', 'DocuSign', 'Visa', 'Mastercard', 'ACH'];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            LOVED BY 250,000+ USERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] tracking-tight">
            People trust ChipIn with their money
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all">
              <Quote className="w-8 h-8 text-teal-300 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-[#1a2332]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div className="mt-20">
          <p className="text-center text-sm font-semibold text-gray-500 tracking-widest mb-8">
            POWERED BY INDUSTRY-LEADING INFRASTRUCTURE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((l) => (
              <div key={l} className="text-2xl font-bold text-gray-400 hover:text-[#1a2332] transition-colors">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
