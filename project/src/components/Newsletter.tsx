import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 bg-[#1a6b00] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <Mail className="text-white" size={26} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Gardening Tips & Exclusive Offers
        </h2>
        <p className="text-green-100 mb-8 text-lg">
          Subscribe to our newsletter and get 10% off your first order plus expert gardening advice.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-white">
            <CheckCircle size={28} />
            <span className="text-xl font-semibold">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full outline-none text-gray-800 placeholder-gray-400 bg-white shadow-lg"
            />
            <button
              type="submit"
              className="bg-[#f5a623] hover:bg-[#e0951a] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-green-200 text-xs mt-4">No spam ever. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
