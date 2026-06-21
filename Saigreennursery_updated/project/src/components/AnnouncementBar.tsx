import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  'Hometech Global3',
  'Free Shipping on Orders Above ₹499',
  'Use Code GARDEN10 for 10% Off Your First Order',
  'Premium Quality Grow Bags — Trusted by 50,000+ Gardeners',
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + announcements.length) % announcements.length);
  const next = () => setCurrent((c) => (c + 1) % announcements.length);

  return (
    <div className="bg-[#1a6b00] text-white text-sm font-medium h-10 flex items-center justify-between px-4">
      <button onClick={prev} className="hover:opacity-70 transition-opacity p-1">
        <ChevronLeft size={16} />
      </button>
      <span className="tracking-wide animate-fade-in">{announcements[current]}</span>
      <button onClick={next} className="hover:opacity-70 transition-opacity p-1">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
