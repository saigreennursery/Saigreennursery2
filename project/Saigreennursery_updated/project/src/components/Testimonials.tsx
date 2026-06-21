import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'I have been using Saigreennursery grow bags for two seasons now. My tomatoes and chillies have never been healthier! The drainage is excellent and the bags are very durable.',
    product: 'GEO Fabric 5 Gal',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'Perfect for my terrace garden! The HDPE bags are sturdy, UV-resistant, and look great too. Delivery was super fast. Highly recommend for urban gardeners.',
    product: 'HDPE Grow Bag 12x12',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Meena Iyer',
    location: 'Chennai',
    rating: 5,
    text: 'Bought the azolla beds for my farm. The quality is outstanding and the customer support team was very helpful in guiding me on setup. Worth every rupee!',
    product: 'Azolla Bed 4x2 ft',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Amit Patel',
    location: 'Ahmedabad',
    rating: 4,
    text: 'Great value for money. The PCNF bags are lightweight and breathable. My herb garden is thriving. Would love to see more size options.',
    product: 'PCNF Grow Bag Set',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f7fdf4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1a6b00] text-sm font-bold tracking-widest uppercase">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Gardeners Say</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Join thousands of happy gardeners who trust Saigreennursery for their growing needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative group"
            >
              <Quote className="text-[#c8e6b8] absolute top-4 right-4" size={32} />
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#1a6b00]"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>

              <div className="pt-3 border-t border-gray-100">
                <span className="text-xs text-[#1a6b00] font-semibold bg-[#e8f5e2] px-2.5 py-1 rounded-full">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
          {[
            { val: '4.9/5', label: 'Average Rating' },
            { val: '10,000+', label: 'Verified Reviews' },
            { val: '98%', label: 'Recommend Us' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-extrabold text-[#1a6b00]">{b.val}</div>
              <div className="text-sm text-gray-500 font-medium">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
