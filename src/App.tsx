import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';

// Pages
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import HowItWorks from './pages/HowItWorks';
import Partners from './pages/Partners';
import Corporate from './pages/Corporate';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FoundingFleetPage from './pages/FoundingFleetPage';
import AdminFoundingFleet from './pages/AdminFoundingFleet';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased selection:bg-burgundy selection:text-ivory">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/partner" element={<Partners />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/founding-fleet" element={<FoundingFleetPage />} />
            <Route path="/admin/founding-fleet" element={<AdminFoundingFleet />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
