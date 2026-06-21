import { useState } from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

const tabs = ['All', 'HDPE', 'GEO Fabric', 'PCNF', 'Azolla'];

const products = [
  {
    id: 1, tab: 'HDPE',
    name: 'HDPE Grow Bag 12x12 inch',
    price: 149, originalPrice: 199,
    rating: 4.8, reviews: 1240,
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Best Seller',
    sizes: ['9x9', '12x12', '15x15', '18x18'],
  },
  {
    id: 2, tab: 'GEO Fabric',
    name: 'GEO Fabric Bag 5 Gallon',
    price: 179, originalPrice: 229,
    rating: 4.9, reviews: 876,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Popular',
    sizes: ['1 Gal', '3 Gal', '5 Gal', '10 Gal'],
  },
  {
    id: 3, tab: 'HDPE',
    name: 'HDPE Rectangular Grow Bag',
    price: 299, originalPrice: 399,
    rating: 4.7, reviews: 543,
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'New',
    sizes: ['12x24', '18x24', '24x24'],
  },
  {
    id: 4, tab: 'Azolla',
    name: 'Azolla Cultivation Bed 4x2 ft',
    price: 599, originalPrice: 799,
    rating: 4.6, reviews: 231,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Organic',
    sizes: ['2x2', '4x2', '4x4'],
  },
  {
    id: 5, tab: 'PCNF',
    name: 'PCNF Premium Grow Bag Set',
    price: 249, originalPrice: 349,
    rating: 4.8, reviews: 412,
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Bundle',
    sizes: ['Small (6pk)', 'Medium (4pk)', 'Large (3pk)'],
  },
  {
    id: 6, tab: 'GEO Fabric',
    name: 'GEO Fabric Planter 10 Gallon',
    price: 329, originalPrice: 429,
    rating: 4.9, reviews: 678,
    image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Top Rated',
    sizes: ['7 Gal', '10 Gal', '15 Gal', '20 Gal'],
  },
  {
    id: 7, tab: 'HDPE',
    name: 'HDPE Vertical Garden Pocket',
    price: 199, originalPrice: 279,
    rating: 4.5, reviews: 334,
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Trending',
    sizes: ['12 Pocket', '18 Pocket', '24 Pocket'],
  },
  {
    id: 8, tab: 'PCNF',
    name: 'PCNF Round Grow Bag 15x15',
    price: 129, originalPrice: 179,
    rating: 4.7, reviews: 567,
    image: 'https://images.pexels.com/photos/2286921/pexels-photo-2286921.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: '',
    sizes: ['9x9', '12x12', '15x15'],
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = activeTab === 'All' ? products : products.filter((p) => p.tab === activeTab);

  const toggleWish = (id: number) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <section id="products" className="py-16 bg-[#f7fdf4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#1a6b00] text-sm font-bold tracking-widest uppercase">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Featured Products</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Premium quality grow bags trusted by home gardeners and commercial growers alike
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[#1a6b00] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-[#f0f9eb] hover:text-[#1a6b00] border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="relative h-52 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#1a6b00] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-3 right-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
                <button
                  onClick={() => toggleWish(product.id)}
                  className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                >
                  <Heart
                    size={14}
                    className={wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#1a6b00] transition-colors leading-snug">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>

                {/* Size chips */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.sizes.slice(0, 3).map((s) => (
                    <span key={s} className="text-[10px] border border-gray-200 rounded px-1.5 py-0.5 text-gray-600 hover:border-[#1a6b00] hover:text-[#1a6b00] cursor-pointer transition-colors">
                      {s}
                    </span>
                  ))}
                  {product.sizes.length > 3 && (
                    <span className="text-[10px] text-gray-400 py-0.5">+{product.sizes.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#1a6b00]">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-[#1a6b00] text-white p-2 rounded-xl hover:bg-[#145500] transition-colors shadow-sm hover:shadow-md">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-[#1a6b00] text-[#1a6b00] font-semibold px-10 py-3 rounded-full hover:bg-[#1a6b00] hover:text-white transition-colors">
            View All Products →
          </a>
        </div>
      </div>
    </section>
  );
}
