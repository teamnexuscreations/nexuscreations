import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessSection from './components/Process/ProcessSection';
import ServicesSection from './components/Services/ServicesSection';
import BathroomSection from './components/Bathroom/BathroomSection';
import KitchenSection from './components/Kitchen/KitchenSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CustomTileInstallations from './pages/CustomTileInstallations';
import BathroomRenovations from './pages/BathroomRenovations';
import KitchenTransformations from './pages/KitchenTransformations';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

// Home page component
const Home = () => {
  return (
    <>
      <Hero />
      <ProcessSection />
      <ServicesSection />
      <BathroomSection />
      <KitchenSection />
      <CTASection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/custom-tile-installations" element={<CustomTileInstallations />} />
          <Route path="/services/bathroom-renovations" element={<BathroomRenovations />} />
          <Route path="/services/kitchen-transformations" element={<KitchenTransformations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;