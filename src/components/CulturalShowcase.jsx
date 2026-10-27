import React from 'react';
import { Award, Sparkles } from 'lucide-react';

const SEAL_ELEMENTS = [
  {
    icon: '🧅',
    title: 'The Tanduyong Onion',
    token: 'var(--seal-crimson)',
    bg: 'var(--seal-crimson-soft)',
    desc: 'San Jose City produces the vast majority of the nation’s bulb onions, earning its title as the Onion Capital of the Philippines and giving birth to the legendary Tanduyong Festival.'
  },
  {
    icon: '🌾',
    title: 'Golden Palay (Grain)',
    token: 'var(--seal-gold-deep)',
    bg: 'var(--seal-gold-soft)',
    desc: 'Bountiful golden rice fields nurtured by the fresh waterways of Central Luzon, symbolizing sustained agricultural prosperity and food sovereignty.'
  },
  {
    icon: '🐃',
    title: 'Carabao & The Plow',
    token: 'var(--seal-brown)',
    bg: '#F5EFEB',
    desc: 'Embodying the tireless perseverance, integrity, and industrious grit of the San Joseño farmers who shaped the fertile soil of Nueva Ecija.'
  },
  {
    icon: '☀️',
    title: 'The Golden Sun Cross',
    token: 'var(--seal-gold)',
    bg: 'var(--seal-gold-soft)',
    desc: 'Radiating spiritual guidance, optimism, and warm tropical sunshine that ripens the harvest across the four corners of the city.'
  },
  {
    icon: '⚙️',
    title: 'Gear & Enterprise',
    token: 'var(--seal-sky)',
    bg: 'var(--seal-sky-soft)',
    desc: 'Representing modern rice milling, progressive agribusiness technology, and thriving commercial trade along the northern highway.'
  },
  {
    icon: '⛰️',
    title: 'Caraballo Peaks & Sky',
    token: 'var(--seal-green)',
    bg: 'var(--seal-green-soft)',
    desc: 'The emerald mountain backdrop providing natural protection, refreshing cool micro-climates, and scenic eco-tourism reserves.'
  }
];

export default function CulturalShowcase() {
  return (
    <section 
      id="culture"
      style={{
        padding: 'clamp(60px, 8vh, 100px) 0',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(36px, 5vh, 60px)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 2vw, 11px)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--seal-green)',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            <Award size={13} />
            HERITAGE & CIVIC IDENTITY
          </div>
          
          <h2 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '14px'
          }}>
            The Symbols Behind Our City
          </h2>
          
          <p style={{ color: 'var(--text-body)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
            Every hue and element in our design is drawn directly from the <strong>Official Seal of San Jose City (1969)</strong>, chronicling generations of fertile harvest and community solidarity.
          </p>
        </div>

        {/* The Seal Heraldry Grid (Mobile Safe) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)',
            marginBottom: 'clamp(40px, 6vh, 64px)'
          }}
        >
          {SEAL_ELEMENTS.map((elem, idx) => (
            <div 
              key={idx}
              style={{
                padding: 'clamp(20px, 3.5vw, 30px)',
                borderRadius: 'clamp(14px, 2.5vw, 20px)',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 6px 20px -8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: elem.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px'
                }}
              >
                {elem.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-headline)',
                marginBottom: '8px'
              }}>
                {elem.title}
              </h3>

              <p style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--text-body)',
                flex: 1
              }}>
                {elem.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Special Tanduyong Festival Deep-Dive Banner */}
        <div 
          id="tanduyong"
          style={{
            position: 'relative',
            borderRadius: 'clamp(18px, 3vw, 24px)',
            overflow: 'hidden',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: 'clamp(24px, 4.5vw, 56px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            alignItems: 'center'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(184, 38, 62, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 132, 61, 0.25) 0%, transparent 60%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '999px',
              backgroundColor: 'rgba(184, 38, 62, 0.3)',
              border: '1px solid var(--seal-crimson)',
              color: 'var(--seal-gold)',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              <Sparkles size={12} />
              ANNUAL CULTURAL HIGHLIGHT • EVERY APRIL
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '14px',
              color: '#FFFFFF'
            }}>
              The Tanduyong Festival Experience
            </h3>

            <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#CBD5E1', marginBottom: '22px' }}>
              Named after the prized bulb onion variety <em>"Tanduyong"</em>, this grand celebration transforms the city into a kaleidoscope of theatrical street dances, giant floats sculpted entirely from agricultural crops, and festive music echoing through the valley.
            </p>

            <div style={{ display: 'flex', gap: 'clamp(14px, 3vw, 24px)', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 800, color: 'var(--seal-gold)' }}>APRIL</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94A3B8' }}>ANNUAL FIESTA</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: 'clamp(14px, 3vw, 24px)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 800, color: 'var(--seal-crimson)' }}>10,000+</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94A3B8' }}>DANCERS</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: 'clamp(14px, 3vw, 24px)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 800, color: '#38BDF8' }}>100%</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94A3B8' }}>FILIPINO PRIDE</div>
              </div>
            </div>
          </div>

          {/* Festival Photo Showcase */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)'
            }}>
              <img 
                src="/assets/tanduyong_festival.jpg" 
                alt="Joyful street dancers at Tanduyong Festival in San Jose City Nueva Ecija"
                style={{ width: '100%', height: 'clamp(220px, 34vh, 340px)', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}