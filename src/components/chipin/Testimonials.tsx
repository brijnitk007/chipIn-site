import React from 'react';
import { Star, Quote } from 'lucide-react';

const UPILogo = () => (
  <svg viewBox="0 0 80 32" className="h-8 w-auto" fill="none">
    <rect width="80" height="32" rx="4" fill="#fff" />
    <path d="M18 6l-4 20h5l4-20h-5z" fill="#097939" />
    <path d="M28 6l-4 20h5l4-20h-5z" fill="#ED752E" />
    <text x="42" y="22" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#1a2332">UPI</text>
  </svg>
);

const RazorpayLogo = () => (
  <svg viewBox="0 0 120 32" className="h-8 w-auto" fill="none">
    <rect width="120" height="32" rx="4" fill="#fff" />
    <path d="M10 8l3 16h4L21 8h-4l-2.5 10L13 8h-3z" fill="#072654" />
    <rect x="22" y="8" width="3" height="16" rx="1" fill="#3395FF" />
    <text x="30" y="21" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#072654">Razorpay</text>
  </svg>
);

const DigiLockerLogo = () => (
  <svg viewBox="0 0 130 32" className="h-8 w-auto" fill="none">
    <rect width="130" height="32" rx="4" fill="#fff" />
    <rect x="6" y="8" width="16" height="16" rx="3" fill="#1A4B8C" />
    <path d="M11 14h6v2h-6zM11 18h4v2h-4z" fill="#fff" />
    <rect x="12" y="10" width="4" height="3" rx="1.5" fill="none" stroke="#fff" strokeWidth="1.2" />
    <text x="28" y="21" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#1A4B8C">DigiLocker</text>
  </svg>
);

const RuPayLogo = () => (
  <svg viewBox="0 0 100 32" className="h-8 w-auto" fill="none">
    <rect width="100" height="32" rx="4" fill="#fff" />
    <text x="10" y="22" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="800" fill="#097939">Ru</text>
    <text x="35" y="22" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="800" fill="#F37021">Pay</text>
    <path d="M8 25h55" stroke="url(#rupayGrad)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="rupayGrad" x1="8" y1="25" x2="63" y2="25">
        <stop stopColor="#097939" />
        <stop offset="0.5" stopColor="#1A73E8" />
        <stop offset="1" stopColor="#F37021" />
      </linearGradient>
    </defs>
  </svg>
);

const NEFTLogo = () => (
  <svg viewBox="0 0 90 32" className="h-8 w-auto" fill="none">
    <rect width="90" height="32" rx="4" fill="#fff" />
    <rect x="6" y="7" width="18" height="18" rx="9" fill="#0B3D91" />
    <path d="M12 12l3 4 3-4M12 16h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="28" y="21" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#0B3D91">NEFT</text>
  </svg>
);

const IMPSLogo = () => (
  <svg viewBox="0 0 90 32" className="h-8 w-auto" fill="none">
    <rect width="90" height="32" rx="4" fill="#fff" />
    <circle cx="15" cy="16" r="9" fill="#E8392A" />
    <path d="M12 13l3 3-3 3M15 16h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="28" y="21" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#E8392A">IMPS</text>
  </svg>
);

const logoComponents = [
  { name: 'UPI', Component: UPILogo },
  { name: 'Razorpay', Component: RazorpayLogo },
  { name: 'DigiLocker', Component: DigiLockerLogo },
  { name: 'RuPay', Component: RuPayLogo },
  { name: 'NEFT', Component: NEFTLogo },
  { name: 'IMPS', Component: IMPSLogo },
];

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Product Manager, Bengaluru',
    avatar: 'https://ui-avatars.com/api/?name=Ananya+Sharma&background=0f1823&color=2dd4bf&size=128&bold=true',
    text: 'No more awkward WhatsApp messages asking flatmates for rent. ChipIn sends UPI reminders automatically and everyone pays on time now.',
    rating: 5,
  },
  {
    name: 'Rohit Mehta',
    role: 'Freelance Designer, Mumbai',
    avatar: 'https://ui-avatars.com/api/?name=Rohit+Mehta&background=0f1823&color=06b6d4&size=128&bold=true',
    text: 'A client tried to ghost me after delivery. The legal agreement feature gave me court-valid proof and I got paid within 48 hours. Lifesaver.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Travel Blogger, Kochi',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Nair&background=0f1823&color=2dd4bf&size=128&bold=true',
    text: 'Planned a 10-day Ladakh road trip with 8 friends. ChipIn tracked every rupee from fuel to dhabas and settled up perfectly at the end.',
    rating: 5,
  },
  {
    name: 'Vikram Desai',
    role: 'Software Engineer, Pune',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Desai&background=0f1823&color=06b6d4&size=128&bold=true',
    text: 'The auto-reminders are gold. Zero awkwardness, zero chasing. Everyone just pays via UPI. How has this not existed before?',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            LOVED BY 2,50,000+ USERS
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
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {logoComponents.map(({ name, Component }) => (
              <div
                key={name}
                className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-sm hover:drop-shadow-md"
                title={name}
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
