import React from 'react';
import { Bus, Sun, Utensils, CheckCircle } from 'lucide-react';

export default function VisitorGuide() {
  return (
    <section 
      id="travel-guide"
      style={{
        padding: 'clamp(60px, 8vh, 100px) 0',
        backgroundColor: 'var(--bg-subtle)',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto clamp(32px, 5vh, 50px)' }}>
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
            <Bus size={13} />
            ESSENTIAL VISITOR DISPATCH
          </div>
          
          <h2 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '12px'
          }}>
            Planning Your Journey
          </h2>
          
          <p style={{ color: 'var(--text-body)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
            San Jose City is directly accessible along the central highway artery of Northern Luzon. Here is everything you need for a comfortable visit.
          </p>
        </div>

        {/* 3 Travel Cards (Mobile Safe) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(18px, 2.5vw, 28px)'
          }}
        >
          {/* Transit Info */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(20px, 3.5vw, 32px)',
            borderRadius: 'clamp(14px, 2.5vw, 20px)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 6px 20px -8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'var(--seal-green-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--seal-green)',
              marginBottom: '16px'
            }}>
              <Bus size={22} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>
              How to Get Here
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--text-body)', marginBottom: '14px', lineHeight: 1.6 }}>
              Air-conditioned public bus lines (Five Star, Baliwag Transit, Genesis) operate daily trips from Cubao and Pasay terminals straight to the San Jose City Integrated Terminal.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Travel Time:</strong> 3.5 to 4.5 hours from Metro Manila</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Expressways:</strong> NLEX ➔ SCTEX ➔ TPLEX ➔ CLLEX</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Highway:</strong> Maharlika Highway (AH26)</span>
              </li>
            </ul>
          </div>

          {/* Best Time to Visit */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(20px, 3.5vw, 32px)',
            borderRadius: 'clamp(14px, 2.5vw, 20px)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 6px 20px -8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'var(--seal-gold-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--seal-gold-deep)',
              marginBottom: '16px'
            }}>
              <Sun size={22} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>
              Seasons & Climate
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--text-body)', marginBottom: '14px', lineHeight: 1.6 }}>
              The city enjoys tropical warmth year-round, with refreshing mountain breezes descending from the Caraballo ranges during the dry months.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-gold-deep)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>April:</strong> Tanduyong Festival street celebrations</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-gold-deep)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Nov - Feb:</strong> Crisp, cool weather for mountain hikes</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-gold-deep)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Harvest:</strong> Golden grain seas in Oct & March</span>
              </li>
            </ul>
          </div>

          {/* Culinary Souvenirs */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(20px, 3.5vw, 32px)',
            borderRadius: 'clamp(14px, 2.5vw, 20px)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 6px 20px -8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'var(--seal-crimson-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--seal-crimson)',
              marginBottom: '16px'
            }}>
              <Utensils size={22} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>
              Must-Taste Delicacies
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--text-body)', marginBottom: '14px', lineHeight: 1.6 }}>
              Never leave San Jose City without tasting and bringing home authentic agricultural delicacies crafted by local artisans.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-crimson)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Pastillas de Leche:</strong> 100% pure carabao milk treats</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-crimson)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Tanduyong Onions:</strong> Farm bags of sweet red bulbs</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text-body)' }}>
                <CheckCircle size={15} color="var(--seal-crimson)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Batutay Longganisa:</strong> Savory sweet beef sausage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}