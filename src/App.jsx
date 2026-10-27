import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AttractionsSection from './components/AttractionsSection';
import JeepneyRouteTour from './components/JeepneyRouteTour';
import CulturalShowcase from './components/CulturalShowcase';
import VisitorGuide from './components/VisitorGuide';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Inertial Scrolling (Awwwards standard)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleReplayLoader = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* 
        Awwwards-Level Loading Screen
        White background with line, percentage counter, and the Philippine Jeepney driving from 0% to 100%
      */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* 
        The Official Tourism Landing Page for San Jose City, Nueva Ecija
      */}
      <Navbar onReplayLoader={handleReplayLoader} />
      
      <main>
        <HeroSection />
        <AttractionsSection />
        <JeepneyRouteTour />
        <CulturalShowcase />
        <VisitorGuide />
      </main>

      <Footer onReplayLoader={handleReplayLoader} />
    </div>
  );
}
