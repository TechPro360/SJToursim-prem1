import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';

const TOUR_STOPS = [
  {
    id: 'gateway',
    name: 'Welcome Arch',
    km: 'KM 148',
    title: 'The Northern Gateway',
    desc: 'The stately highway arch welcoming travelers to San Jose City as they enter from central Nueva Ecija.',
    tip: 'Popular photo-op landmark marking entry into the Onion Heartland.',
    tag: 'Highway Landmark',
    pct: 0
  },
  {
    id: 'plaza',
    name: 'City Plaza & Cathedral',
    km: 'KM 155',
    title: 'Historic Heart of San Jose',
    desc: 'Home of the historic St. Joseph Cathedral, heritage trees, and the starting venue of the Tanduyong street parades.',
    tip: 'Best visited during late afternoon to experience local street delicacies and vibrant plaza life.',
    tag: 'Heritage & Faith',
    pct: 25
  },
  {
    id: 'market',
    name: 'Agri-Trading Post',
    km: 'KM 158',
    title: 'Tanduyong Onion Trade Hub',
    desc: 'The bustling epicenter where millions of red and yellow bulb onions, garlic, and fresh harvest are sorted and traded.',
    tip: 'Pick up farm-fresh onions and carabao milk pastillas directly from local growers.',
    tag: 'Agri-Commerce',
    pct: 50
  },
  {
    id: 'tayabo',
    name: 'Tayabo Eco-Reserve',
    km: 'KM 164',
    title: 'Freshwater Mountain Sanctuary',
    desc: 'Cool pine and mahogany woods encircling a scenic reservoir with wooden viewing decks facing the Caraballo peaks.',
    tip: 'Bring binoculars for bird watching and enjoy relaxing bamboo boat cruises.',
    tag: 'Eco-Park',
    pct: 75
  },
  {
    id: 'diamond',
    name: 'Diamond Park Hilltop',
    km: 'KM 172',
    title: 'Caraballo Mountain Overlook',
    desc: 'Climb 100+ stone steps nestled in mountain pine groves to witness unobstructed 360-degree views of Nueva Ecija plains.',
    tip: 'Climb during golden hour for magnificent sunset photography across Central Luzon.',
    tag: 'Scenic Summit',
    pct: 100
  }
];

export default function JeepneyRouteTour() {
  const [selectedStop, setSelectedStop] = useState(0);
  const jeepneyRef = useRef(null);
  const roadTrackRef = useRef(null);
  const progressLineRef = useRef(null);

  const updateJeepneyPosition = (targetStopIndex) => {
    const targetStop = TOUR_STOPS[targetStopIndex];
    if (jeepneyRef.current && roadTrackRef.current) {
      const trackWidth = roadTrackRef.current.offsetWidth;
      const jeepWidth = jeepneyRef.current.offsetWidth;
      const maxTravel = Math.max(0, trackWidth - jeepWidth);
      const targetX = (targetStop.pct / 100) * maxTravel;

      gsap.to(jeepneyRef.current, {
        x: targetX,
        duration: 0.75,
        ease: "power2.out"
      });

      if (progressLineRef.current) {
        gsap.to(progressLineRef.current, {
          width: `${targetStop.pct}%`,
          duration: 0.75,
          ease: "power2.out"
        });
      }
    }
  };

  useEffect(() => {
    updateJeepneyPosition(selectedStop);

    const handleResize = () => updateJeepneyPosition(selectedStop);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedStop]);

  const active = TOUR_STOPS[selectedStop];

  return (
    <section 
      id="jeepney-tour"
      style={{
        padding: 'clamp(60px, 8vh, 100px) 0',
        backgroundColor: 'var(--bg-subtle)',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Header */}
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
            <Navigation size={13} />
            INTERACTIVE JEEPNEY EXPEDITION
          </div>
          <h2 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '12px'
          }}>
            Ride the Virtual Jeepney Safari
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
            Tap on any station along the Maharlika Highway route to watch the Jeepney navigate directly to key historical, agrarian, and eco-tourism stops across San Jose City.
          </p>
        </div>

        {/* The Interactive Highway Roadway Card */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            padding: 'clamp(20px, 3.5vw, 36px) clamp(16px, 3vw, 32px)',
            boxShadow: '0 15px 35px -15px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            marginBottom: 'clamp(24px, 4vh, 36px)'
          }}
        >
          {/* Station Selection Pills (Touch-scrollable on mobile) */}
          <div 
            className="hide-scrollbar"
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '14px',
              marginBottom: '20px'
            }}
          >
            {TOUR_STOPS.map((stop, idx) => {
              const isCurrent = idx === selectedStop;
              return (
                <button
                  key={stop.id}
                  onClick={() => setSelectedStop(idx)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: isCurrent ? 'var(--seal-green)' : '#F1F5F9',
                    color: isCurrent ? '#FFFFFF' : 'var(--text-headline)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    textAlign: 'left',
                    minWidth: 'clamp(130px, 30vw, 160px)',
                    flex: '0 0 auto',
                    scrollSnapAlign: 'start',
                    transition: 'all 0.2s ease',
                    boxShadow: isCurrent ? '0 6px 14px rgba(0, 132, 61, 0.25)' : 'none'
                  }}
                >
                  <div style={{
                    fontSize: '9px',
                    opacity: 0.8,
                    marginBottom: '2px',
                    textTransform: 'uppercase'
                  }}>
                    {stop.km} • STOP 0{idx + 1}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '12px' }}>
                    {stop.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Road Baseline & Animated Jeepney Track */}
          <div 
            ref={roadTrackRef}
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: 'clamp(46px, 8vw, 62px)',
              paddingBottom: '20px',
              marginTop: '6px'
            }}
          >
            {/* The Jeepney Object Moving to Target Stop */}
            <div 
              ref={jeepneyRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'clamp(75px, 18vw, 105px)',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 10
              }}
            >
              <div className="animate-jeepney-idle">
                <img 
                  src="/assets/jeepney.png" 
                  alt="Interactive Philippine Jeepney"
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.14))'
                  }}
                />
              </div>
            </div>

            {/* The Highway Line */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                height: '4px',
                backgroundColor: '#E2E8F0',
                borderRadius: '999px',
                marginTop: '6px'
              }}
            >
              {/* Progress Line */}
              <div 
                ref={progressLineRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: `${active.pct}%`,
                  background: 'linear-gradient(90deg, var(--seal-green) 0%, var(--seal-gold) 70%, var(--seal-crimson) 100%)',
                  borderRadius: '999px',
                  boxShadow: '0 0 10px rgba(0, 132, 61, 0.4)'
                }}
              />

              {/* Station Markers on Highway Line */}
              {TOUR_STOPS.map((stop, idx) => (
                <div 
                  key={stop.id}
                  onClick={() => setSelectedStop(idx)}
                  style={{
                    position: 'absolute',
                    left: `${stop.pct}%`,
                    top: '-5px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: idx <= selectedStop ? 'var(--seal-green)' : '#CBD5E1',
                    border: '2px solid #FFFFFF',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  title={stop.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Station Deep Dive Showcase */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            padding: 'clamp(20px, 4vw, 36px)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 3.5vw, 32px)',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '999px',
              backgroundColor: 'var(--seal-gold-soft)',
              color: 'var(--seal-gold-deep)',
              marginBottom: '12px'
            }}>
              <MapPin size={11} />
              {active.tag} • {active.km}
            </div>
            
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 800,
              marginBottom: '8px',
              color: 'var(--text-headline)'
            }}>
              {active.name}
            </h3>

            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'var(--text-body)',
              marginBottom: '18px'
            }}>
              {active.desc}
            </p>

            <div style={{
              padding: '14px 18px',
              borderRadius: '12px',
              backgroundColor: 'var(--seal-green-soft)',
              borderLeft: '4px solid var(--seal-green)',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}>
              <CheckCircle2 size={16} color="var(--seal-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '12px', color: 'var(--seal-green-dark)', marginBottom: '2px' }}>
                  Insider Tip:
                </strong>
                <span style={{ fontSize: '12px', color: 'var(--text-body)' }}>
                  {active.tip}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Route Summary Card */}
          <div style={{
            backgroundColor: 'var(--bg-subtle)',
            borderRadius: '16px',
            padding: '22px',
            border: '1px solid rgba(0, 0, 0, 0.06)'
          }}>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '14px'
            }}>
              ROUTE LOGISTICS & TRANSIT
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Highway Corridor</span>
                <strong style={{ fontSize: '12px', color: 'var(--text-headline)' }}>Maharlika Hwy (AH26)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Jeepney Fare</span>
                <strong style={{ fontSize: '12px', color: 'var(--seal-green)' }}>₱15 - ₱35 PHP</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Transit Mode</span>
                <strong style={{ fontSize: '12px', color: 'var(--text-headline)' }}>Jeepney / Tricycle</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Total Route</span>
                <strong style={{ fontSize: '12px', color: 'var(--seal-crimson)' }}>24 km End-to-End</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}