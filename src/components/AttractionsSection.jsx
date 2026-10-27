import React from 'react';
import { MapPin, Compass } from 'lucide-react';

const ATTRACTIONS = [
  {
    id: 'tanduyong',
    name: 'Tanduyong Festival',
    tagline: 'The Philippines’ Onion & Harvest Extravaganza',
    category: 'Cultural Spectacle',
    badgeColor: 'var(--seal-crimson)',
    image: '/assets/tanduyong_festival.jpg',
    description: 'Every April, the streets of San Jose City burst into an explosion of color, sound, and dance. Performers dressed in vivid native garb decorated with Tanduyong onions and golden rice stalks dance to rhythmic percussion, honoring patron saint Saint Joseph for bountiful harvests.',
    location: 'Maharlika Highway & City Plaza',
    season: 'Annual April Festivities',
    highlights: ['Street Dancing Competition', 'Agri-Trade Fair', 'Grand Floral & Onion Floats']
  },
  {
    id: 'tayabo',
    name: 'Tayabo Nature Reserve',
    tagline: 'Pristine Eco-Sanctuary in the Caraballo Foothills',
    category: 'Eco-Tourism',
    badgeColor: 'var(--seal-green)',
    image: '/assets/tayabo_reserve.jpg',
    description: 'A serene freshwater sanctuary surrounded by verdant hills and mahogany forests. Features peaceful wooden eco-viewing decks, refreshing mountain breezes, boating, and scenic trails where visitors reconnect with nature.',
    location: 'Barangay Tayabo, San Jose City',
    season: 'Year-Round Destination',
    highlights: ['Eco-Deck Mountain Views', 'Forest Canopy Walking', 'Freshwater Reservoir Boating']
  },
  {
    id: 'diamond-park',
    name: 'Diamond Park & Hilltop Shrine',
    tagline: '100+ Stone Steps to Panoramic Central Luzon Vistas',
    category: 'Adventure & Scenic Viewpoint',
    badgeColor: 'var(--seal-gold-deep)',
    image: '/assets/hero_landscape.jpg',
    description: 'Nestled on the northern gateway between Nueva Ecija and Nueva Vizcaya, Diamond Park invites adventurers to climb hundreds of stone steps through lush pine-scented trees to reach panoramic hilltop lookouts over the Caraballo mountain ranges.',
    location: 'Maharlika Highway, Northern Gateway',
    season: 'Best at Sunrise & Golden Hour',
    highlights: ['Challenging Stair Trek', 'Caraballo Valley Panorama', 'Cool Hilltop Picnic Groves']
  }
];

export default function AttractionsSection() {
  return (
    <section 
      id="destinations" 
      style={{
        padding: 'clamp(60px, 8vh, 100px) 0',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: 'clamp(32px, 5vh, 50px)' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(9px, 2vw, 11px)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--seal-green)',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              <Compass size={13} />
              CURATED TOURIST ATTRACTIONS
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              Icons of San Jose City
            </h2>
          </div>

          <p style={{ maxWidth: '440px', color: 'var(--text-muted)', fontSize: 'clamp(13px, 2vw, 15px)' }}>
            From adrenaline-infused street dancing to tranquil mountain reservoirs, discover the multifaceted soul of Nueva Ecija’s northern crown jewel.
          </p>
        </div>

        {/* Featured Showcase Grid (Mobile Safe) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)'
          }}
        >
          {ATTRACTIONS.map((spot) => (
            <article 
              key={spot.id}
              style={{
                borderRadius: 'clamp(16px, 3vw, 20px)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 24px -10px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Card Image */}
              <div style={{ position: 'relative', height: 'clamp(190px, 28vh, 250px)', overflow: 'hidden' }}>
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: spot.badgeColor,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  {spot.category}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: 'clamp(18px, 3.5vw, 26px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginBottom: '8px'
                }}>
                  <MapPin size={12} color={spot.badgeColor} />
                  <span>{spot.location}</span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(18px, 2.8vw, 22px)',
                  fontWeight: 800,
                  marginBottom: '4px',
                  color: 'var(--text-headline)'
                }}>
                  {spot.name}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: spot.badgeColor,
                  fontWeight: 600,
                  marginBottom: '12px'
                }}>
                  {spot.tagline}
                </p>

                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'var(--text-body)',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  {spot.description}
                </p>

                {/* Highlights list */}
                <div style={{
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  paddingTop: '14px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {spot.highlights.map((item, hIdx) => (
                    <span 
                      key={hIdx}
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-subtle)',
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-body)'
                      }}
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}