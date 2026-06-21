import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
