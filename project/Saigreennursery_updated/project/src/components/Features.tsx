import { Shield, Truck, RefreshCw, Award, Sprout, Sun } from 'lucide-react';

const whyUs = [
  {
    icon: Shield,
    title: 'Premium Quality',
    desc: 'Made from food-grade, BPA-free materials that are safe for growing vegetables and herbs.',
  },
  {
    icon: Sprout,
    title: 'Better Root Growth',
    desc: 'Air-pruning technology encourages healthier, more fibrous root systems for robust plants.',
  },
  {
    icon: Sun,
    title: 'UV Stabilized',
    desc: 'Our bags are treated to resist UV damage, ensuring they last multiple growing seasons.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Orders dispatched within 24 hours. Free shipping on orders above ₹499 across India.',
  },
  {
    icon: RefreshCw,
    title: 'Reusable & Durable',
    desc: 'Wash and reuse season after season. Our bags are built to withstand years of gardening.',
  },
  {
    icon: Award,
    title: '50,000+ Happy Gardeners',
    desc: 'Trusted by home gardeners, farmers, and commercial growers across India since 2018.',
  },
];

const stats = [
  { value: '50,000+', label: 'Happy Customers' },
  { value: '200+', label: 'Products' },
  { value: '28', label: 'States Served' },
  { value: '5 Yr', label: 'Warranty' },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats bar */}
        <div className="bg-[#1a6b00] rounded-3xl p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
              <div className="text-green-200 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <span className="text-[#1a6b00] text-sm font-bold tracking-widest uppercase">Why Saigreennursery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Built for Better Gardens</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything we make is designed to help your plants thrive and your garden flourish
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5 group p-6 rounded-2xl hover:bg-[#f7fdf4] transition-colors border border-transparent hover:border-[#d4edcc]">
              <div className="flex-shrink-0 w-14 h-14 bg-[#e8f5e2] group-hover:bg-[#1a6b00] rounded-2xl flex items-center justify-center transition-colors">
                <Icon size={26} className="text-[#1a6b00] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How to use */}
        <div className="mt-20 bg-[#f7fdf4] rounded-3xl p-10 border border-[#d4edcc]">
          <div className="text-center mb-10">
            <span className="text-[#1a6b00] text-sm font-bold tracking-widest uppercase">Getting Started</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">How to Use Grow Bags</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choose Your Bag', desc: 'Pick the right size based on your plant type and available space.' },
              { step: '02', title: 'Fill with Mix', desc: 'Use quality potting mix with cocopeat, perlite, and compost.' },
              { step: '03', title: 'Plant & Water', desc: 'Sow seeds or transplant seedlings, then water gently.' },
              { step: '04', title: 'Watch it Grow', desc: 'Enjoy lush, healthy plants growing in your Saigreennursery bags!' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#1a6b00] text-white font-extrabold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
