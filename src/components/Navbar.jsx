import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Mountain, Utensils, RotateCcw, ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar({ onReplayLoader }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '10px 0' : '16px 0',
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        {/* Brand / Official Seal */}
        <a 
          href="#hero" 
          onClick={() => setMobileMenuOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
        >
          <img 
            src="/assets/san-jose-seal.png" 
            alt="San Jose City Official Seal" 
            style={{ 
              width: scrolled ? '38px' : '44px', 
              height: scrolled ? '38px' : '44px', 
              objectFit: 'contain',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))'
            }}
          />
          <div>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(14px, 3.8vw, 18px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-headline)',
              lineHeight: 1.1
            }}>
              SAN JOSE CITY
            </span>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(8px, 2vw, 10px)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--seal-green)',
              textTransform: 'uppercase'
            }}>
              NUEVA ECIJA • PHILIPPINES
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px'
          }}
          className="desktop-nav"
        >
          <a href="#destinations" className="nav-link">Destinations</a>
          <a href="#tanduyong" className="nav-link">Tanduyong Festival</a>
          <a href="#jeepney-tour" className="nav-link">Jeepney Safari</a>
          <a href="#culture" className="nav-link">Agricultural Heartland</a>
          <a href="#travel-guide" className="nav-link">Visitor Guide</a>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Replay Loading Journey Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onReplayLoader();
            }}
            title="Replay the Jeepney Loading Animation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '999px',
              backgroundColor: 'var(--seal-green-soft)',
              color: 'var(--seal-green-dark)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              border: '1px solid rgba(0, 132, 61, 0.2)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--seal-green)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--seal-green-soft)';
              e.currentTarget.style.color = 'var(--seal-green-dark)';
            }}
          >
            <RotateCcw size={13} />
            <span className="navbar-replay-label">Replay Journey</span>
          </button>

          {/* Desktop Primary CTA */}
          <a
            href="#destinations"
            className="navbar-desktop-cta"
            style={{
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '999px',
              backgroundColor: 'var(--seal-green)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              boxShadow: '0 4px 14px var(--seal-green-glow)',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Explore</span>
            <ChevronRight size={14} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '8px',
              borderRadius: '10px',
              backgroundColor: mobileMenuOpen ? 'var(--seal-green-soft)' : 'transparent',
              color: 'var(--text-headline)',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} color="var(--seal-green)" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 25px 40px -10px rgba(0,0,0,0.1)',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 999
        }}>
          <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
            <span>📍 Destinations & Landmarks</span>
            <ChevronRight size={16} />
          </a>
          <a href="#tanduyong" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
            <span>🎉 Tanduyong Festival</span>
            <ChevronRight size={16} />
          </a>
          <a href="#jeepney-tour" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
            <span>🛞 Jeepney Virtual Safari</span>
            <ChevronRight size={16} />
          </a>
          <a href="#culture" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
            <span>🌾 Agricultural Heartland & Seal</span>
            <ChevronRight size={16} />
          </a>
          <a href="#travel-guide" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
            <span>🚌 Visitor & Route Guide</span>
            <ChevronRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .navbar-desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 959px) {
          .desktop-nav {
            display: none !important;
          }
          .navbar-desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-replay-label {
            display: none !important;
          }
        }
        .nav-link {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-body);
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--seal-green);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--seal-green);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-item {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          padding: 12px 16px;
          border-radius: 12px;
          background-color: var(--bg-subtle);
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: var(--text-headline);
          text-decoration: none;
        }
        .mobile-nav-item:active {
          background-color: var(--seal-green-soft);
          color: var(--seal-green);
        }
      `}</style>
    </header>
  );
}