import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal-text", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.15
      });

      gsap.from(".hero-card-float", {
        y: 40,
        opacity: 0,
        scale: 0.97,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.4
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'clamp(95px, 13vh, 130px)',
        paddingBottom: 'clamp(50px, 8vh, 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF'
      }}
    >
      {/* Background radial glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1000px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 132, 61, 0.08) 0%, rgba(255, 199, 44, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow Tag */}
        <div 
          className="hero-reveal-text"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            backgroundColor: 'var(--seal-green-soft)',
            border: '1px solid rgba(0, 132, 61, 0.2)',
            marginBottom: 'clamp(14px, 3vh, 24px)'
          }}
        >
          <Sparkles size={13} color="var(--seal-green)" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 2.2vw, 11px)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--seal-green-dark)'
          }}>
            OFFICIAL TOURISM PORTAL • CENTRAL LUZON
          </span>
        </div>

        {/* Main Headline */}
        <div style={{ maxWidth: '1050px', marginBottom: 'clamp(20px, 3vh, 28px)' }}>
          <h1 
            className="hero-reveal-text"
            style={{
              fontSize: 'clamp(2.1rem, 6.2vw, 5.2rem)',
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: 'var(--text-headline)',
              marginBottom: '14px'
            }}
          >
            Where Golden Fields <br />
            Meet <span className="text-gradient-seal">Emerald Peaks</span>.
          </h1>

          <p 
            className="hero-reveal-text"
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
              maxWidth: '680px',
              color: 'var(--text-body)',
              lineHeight: 1.6
            }}
          >
            Welcome to <strong>San Jose City, Nueva Ecija</strong> — the revered <em>Onion Capital of the Philippines</em> and gateway to Northern Luzon, where agrarian heritage, vibrant festivals, and mountain adventures converge.
          </p>
        </div>

        {/* Hero Actions (Stacks vertically on small screens) */}
        <div 
          className="hero-reveal-text hero-actions-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px',
            marginBottom: 'clamp(32px, 5vh, 48px)'
          }}
        >
          <a
            href="#destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '999px',
              backgroundColor: 'var(--seal-green)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              boxShadow: '0 8px 20px -4px rgba(0, 132, 61, 0.35)',
              transition: 'all 0.25s ease'
            }}
          >
            <Compass size={17} />
            <span>Discover Landmarks</span>
          </a>

          <a
            href="#jeepney-tour"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 26px',
              borderRadius: '999px',
              backgroundColor: '#FFFFFF',
              color: 'var(--text-headline)',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'all 0.25s ease'
            }}
          >
            <span style={{ fontSize: '16px' }}>🛞</span>
            <span>Ride the Jeepney Safari</span>
          </a>
        </div>

        {/* Feature Visual Showcase with Responsive Layout */}
        <div 
          className="hero-card-float"
          style={{
            position: 'relative',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -18px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(0, 0, 0, 0.06)'
          }}
        >
          <img 
            src="/assets/hero_landscape.jpg" 
            alt="Scenic morning sunrise over San Jose Nueva Ecija rice paddies and Caraballo Mountains"
            style={{
              width: '100%',
              height: 'clamp(280px, 46vh, 580px)',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(9, 19, 29, 0.88) 0%, rgba(9, 19, 29, 0.2) 45%, transparent 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Lower caption on image */}
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(16px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              color: '#FFFFFF'
            }}
          >
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(9px, 1.8vw, 11px)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--seal-gold)',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}>
                PANORAMIC GATEWAY • CARABALLO RIDGE
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
                fontWeight: 700,
                color: '#FFFFFF'
              }}>
                The Verdant Plains of Nueva Ecija
              </div>
            </div>

            {/* Quick Stat Indicators (Wraps nicely on mobile) */}
            <div 
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}
            >
              <div className="glass-pill" style={{ padding: '8px 14px', borderRadius: '12px', color: 'var(--text-headline)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)' }}>DISTANCE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px' }}>160 km from Manila</div>
              </div>
              <div className="glass-pill" style={{ padding: '8px 14px', borderRadius: '12px', color: 'var(--text-headline)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)' }}>FESTIVAL</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', color: 'var(--seal-crimson)' }}>Tanduyong Festival</div>
              </div>
              <div className="glass-pill" style={{ padding: '8px 14px', borderRadius: '12px', color: 'var(--text-headline)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)' }}>ELEVATION</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', color: 'var(--seal-green)' }}>120m - 400m ASL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}