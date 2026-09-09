import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import RoomTypes from './pages/RoomTypes';
import Contact from './pages/Contact';
import Estimator from './pages/Estimator';
import CustomCursor from './components/common/CustomCursor';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  useEffect(() => {
    // Initialize Lenis - Industry standard smooth inertia scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/room-types" element={<RoomTypes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimator" element={<Estimator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
