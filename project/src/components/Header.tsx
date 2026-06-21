import { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'HDPE Grow Bags', href: '#hdpe' },
  { label: 'GEO Fabric Grow Bags', href: '#geo' },
  { label: 'PCNF Grow Bags', href: '#pcnf' },
  { label: 'Azolla Beds', href: '#azolla' },
];

const moreLinks = [
  'Seedling Trays',
  'Planting Pots',
  'Garden Tools',
  'Fertilizers',
  'Drip Irrigation',
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a6b00] rounded-full flex items-center justify-center">
            <span className="text-white font-extrabold text-lg leading-none">G</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-[#1a6b00] font-extrabold text-xl tracking-wider leading-none block">
              GARDECO
            </span>
            <span className="text-[#1a6b00] text-[9px] tracking-[0.2em] uppercase leading-none">
              Grow Your Dreams
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded hover:text-[#1a6b00] transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1a6b00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded hover:text-[#1a6b00] transition-colors"
            >
              More <ChevronDown size={14} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden w-44 z-50">
                {moreLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f0f9eb] hover:text-[#1a6b00] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center border border-[#1a6b00] rounded-full overflow-hidden">
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="px-4 py-1.5 text-sm outline-none w-48"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-3 py-1.5 text-gray-500 hover:text-[#1a6b00]"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-[#f0f9eb] text-gray-600 hover:text-[#1a6b00] transition-colors"
            >
              <Search size={20} />
            </button>
          )}
          <button className="p-2 rounded-full hover:bg-[#f0f9eb] text-gray-600 hover:text-[#1a6b00] transition-colors">
            <User size={20} />
          </button>
          <button className="relative p-2 rounded-full hover:bg-[#f0f9eb] text-gray-600 hover:text-[#1a6b00] transition-colors">
            <ShoppingCart size={20} />
            {cartCount >= 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#1a6b00] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-[#f0f9eb] text-gray-600 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          {[...navLinks, { label: 'More', href: '#' }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-[#1a6b00] hover:bg-[#f0f9eb] border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
