const categories = [
  {
    title: 'HDPE Grow Bags',
    desc: 'High-density polyethylene bags, durable and UV-resistant for long-lasting garden use.',
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Best Seller',
    href: '#hdpe',
  },
  {
    title: 'GEO Fabric Grow Bags',
    desc: 'Breathable fabric bags that air-prune roots for stronger, healthier plants.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Popular',
    href: '#geo',
  },
  {
    title: 'PCNF Grow Bags',
    desc: 'Premium cross non-woven fabric bags — perfect for terrace & balcony gardens.',
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'New',
    href: '#pcnf',
  },
  {
    title: 'Azolla Beds',
    desc: 'Specialized grow beds for cultivating nutrient-rich azolla, ideal for organic farming.',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Organic',
    href: '#azolla',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1a6b00] text-sm font-bold tracking-widest uppercase">Our Range</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Shop by Category</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Discover our complete range of premium grow bags for every gardening need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#1a6b00] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {cat.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#1a6b00] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                <div className="mt-4 flex items-center text-[#1a6b00] text-sm font-semibold gap-1">
                  View Products
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
