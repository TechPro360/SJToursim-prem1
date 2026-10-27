import React from 'react';
import { RotateCcw, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ onReplayLoader }) {
  return (
    <footer 
      style={{
        backgroundColor: '#09131D',
        color: '#FFFFFF',
        paddingTop: 'clamp(50px, 7vh, 80px)',
        paddingBottom: '36px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            marginBottom: 'clamp(36px, 5vh, 60px)'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <img 
                src="/assets/san-jose-seal.png" 
                alt="San Jose City Official Seal" 
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
              <div>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF'
                }}>
                  SAN JOSE CITY
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--seal-gold)',
                  textTransform: 'uppercase'
                }}>
                  NUEVA ECIJA • 1969
                </span>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.65, marginBottom: '20px' }}>
              The Official Tourism Portal of San Jose City. Dedicated to celebrating the rich agrarian legacy, vibrant festivals, and natural splendor of Nueva Ecija.
            </p>

            {/* Replay loader button in footer */}
            <button
              onClick={onReplayLoader}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s ease',
                touchAction: 'manipulation'
              }}
            >
              <RotateCcw size={13} />
              <span>Replay Loading Journey</span>
            </button>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--seal-gold)',
              marginBottom: '16px'
            }}>
              EXPLORE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#destinations" style={{ color: '#CBD5E1' }}>Tanduyong Festival</a></li>
              <li><a href="#destinations" style={{ color: '#CBD5E1' }}>Tayabo Nature Reserve</a></li>
              <li><a href="#destinations" style={{ color: '#CBD5E1' }}>Diamond Park Hilltop</a></li>
              <li><a href="#jeepney-tour" style={{ color: '#CBD5E1' }}>Jeepney Route Safari</a></li>
              <li><a href="#culture" style={{ color: '#CBD5E1' }}>City Seal & Symbols</a></li>
            </ul>
          </div>

          {/* Visitor Assistance */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--seal-gold)',
              marginBottom: '16px'
            }}>
              TOURIST ASSISTANCE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', color: '#CBD5E1' }}>
              <li style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={15} color="var(--seal-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>City Hall Complex, Maharlika Highway, San Jose City, Nueva Ecija</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <Phone size={15} color="var(--seal-green)" style={{ flexShrink: 0 }} />
                <span>(044) 958-8123 • Tourist Hotline</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <Mail size={15} color="var(--seal-green)" style={{ flexShrink: 0 }} />
                <span>tourism@sanjosecity.gov.ph</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#64748B'
          }}
        >
          <div>
            © {new Date().getFullYear()} City Government of San Jose, Nueva Ecija.
          </div>
          <div>
            Crafted for the Onion Capital of the Philippines
          </div>
        </div>
      </div>
    </footer>
  );
}