import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Droplets, Wind, RefreshCw } from 'lucide-react';

const slides = [
  {
    headline1: 'Grow Better,',
    headline2: 'LIVE GREENER',
    sub: 'Premium Grow Bags for Healthy Plants',
    bg: 'from-[#e8f5e2] to-[#c8ead8]',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    headline1: 'Urban Farming',
    headline2: 'MADE EASY',
    sub: 'Durable GEO Fabric Bags for Every Garden',
    bg: 'from-[#e6f4e1] to-[#d0ecd8]',
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    headline1: 'Roots That',
    headline2: 'BREATHE FREE',
    sub: 'Air-Pruning Technology for Stronger Plants',
    bg: 'from-[#eaf5e3] to-[#cce8d4]',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

const features = [
  { icon: Leaf, label: 'Eco-Friendly', color: 'bg-[#1a6b00]' },
  { icon: Droplets, label: 'Good Drainage', color: 'bg-[#1a6b00]' },
  { icon: Wind, label: 'Breathable', color: 'bg-[#1a6b00]' },
  { icon: RefreshCw, label: 'Reusable', color: 'bg-[#1a6b00]' },
];

const sideFeatures = [
  { label: 'Lightweight & Durable' },
  { label: 'Perfect for Home & Terrace' },
  { label: 'UV Stabilized' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + slides.length) % slides.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${slide.bg} transition-all duration-700 min-h-[520px] md:min-h-[600px]`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-[#1a6b00]" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-[#1a6b00]" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-2 border-[#1a6b00]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Text */}
        <div className={`flex-1 transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          {/* Brand mark */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#1a6b00] rounded-full flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">G</span>
            </div>
            <span className="text-[#1a6b00] font-bold tracking-widest text-sm uppercase">Saigreennursery</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a4a1a] leading-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {slide.headline1}
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a6b00] leading-tight mb-6 uppercase tracking-tight">
            {slide.headline2}
          </h1>
          <p className="text-lg md:text-xl text-[#3a5a2a] font-medium mb-8">{slide.sub}</p>

          <div className="flex flex-wrap gap-3">
            <a href="#products" className="bg-[#1a6b00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#145500] transition-colors shadow-lg shadow-green-900/20">
              Shop Now
            </a>
            <a href="#categories" className="border-2 border-[#1a6b00] text-[#1a6b00] px-8 py-3 rounded-full font-semibold hover:bg-[#1a6b00] hover:text-white transition-colors">
              View Products
            </a>
          </div>

          {/* Feature icons */}
          <div className="flex flex-wrap gap-5 mt-10">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#1a6b00] rounded-full flex items-center justify-center shadow-md">
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-[#2a4a1a] text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className={`flex-1 flex justify-center items-center relative transition-all duration-300 ${animating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-green-900/20">
              <img
                src={slide.image}
                alt="Saigreennursery products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Side feature badges */}
            <div className="absolute right-0 top-8 flex flex-col gap-3">
              {sideFeatures.map((f, i) => (
                <div
                  key={f.label}
                  className="bg-white border-2 border-[#1a6b00] rounded-full px-3 py-2 flex items-center gap-2 shadow-md ml-8"
                  style={{ marginLeft: i % 2 === 0 ? '2rem' : '0' }}
                >
                  <div className="w-6 h-6 bg-[#e8f5e2] border border-[#1a6b00] rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf size={12} className="text-[#1a6b00]" />
                  </div>
                  <span className="text-xs font-semibold text-[#1a6b00] whitespace-nowrap">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-20"
      >
        <ChevronLeft size={18} className="text-[#1a6b00]" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-20"
      >
        <ChevronRight size={18} className="text-[#1a6b00]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? 'bg-[#1a6b00] w-6 h-2' : 'bg-[#1a6b00]/30 w-2 h-2'}`}
          />
        ))}
      </div>
    </section>
  );
}
