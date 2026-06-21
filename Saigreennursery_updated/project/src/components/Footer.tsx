import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const links = {
  'Products': ['HDPE Grow Bags', 'GEO Fabric Grow Bags', 'PCNF Grow Bags', 'Azolla Beds', 'Seedling Trays', 'Garden Tools'],
  'Company': ['About Us', 'Our Story', 'Blog', 'Press', 'Careers', 'Contact Us'],
  'Support': ['FAQs', 'Shipping Policy', 'Return Policy', 'Track Order', 'Bulk Orders', 'Dealer Enquiry'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f3d00] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#1a6b00] rounded-full flex items-center justify-center border-2 border-[#2d8a0a]">
                <span className="text-white font-extrabold text-xl">G</span>
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-wider block">Saigreennursery</span>
                <span className="text-green-400 text-[10px] tracking-widest uppercase">Hometech Global3</span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-6 max-w-sm">
              India's leading manufacturer of premium grow bags for home gardens, terraces, and commercial farming. Quality you can trust, plants will love.
            </p>
            <div className="space-y-2.5 text-sm text-green-200">
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-green-400 flex-shrink-0" />
                <span>+91 7042007262</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-green-400 flex-shrink-0" />
                <span>saigreennursery2@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Hometech Global3</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-[#1a6b00] hover:bg-[#2d8a0a] rounded-full flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-base mb-4 text-white">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-green-200 hover:text-white text-sm transition-colors hover:underline underline-offset-2">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment badges */}
        <div className="mt-12 pt-8 border-t border-[#1a6b00] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-300 text-sm text-center md:text-left">
            © 2024 Saigreennursery. All rights reserved. Made with love for Indian gardeners.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xs mr-2">We Accept:</span>
            {['UPI', 'Visa', 'MC', 'PayTM', 'RazorPay'].map((p) => (
              <span key={p} className="bg-[#1a6b00] text-green-200 text-xs font-bold px-2.5 py-1 rounded border border-[#2d8a0a]">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
