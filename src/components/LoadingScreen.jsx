import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const roadTrackRef = useRef(null);
  const jeepneyRef = useRef(null);
  const progressLineRef = useRef(null);
  const counterRef = useRef(null);
  const milestoneRef = useRef(null);
  const dustContainerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [milestone, setMilestone] = useState("PAGHANDA SA BIYAHE • DEPARTING MANILA");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const progressObj = { val: 0 };

      // Master Timeline for Progress
      const tl = gsap.timeline({
        onComplete: () => {
          triggerExitSequence();
        }
      });

      // Animate progress with realistic road travel acceleration & cruising
      tl.to(progressObj, {
        val: 100,
        duration: 3.8,
        ease: "power2.inOut",
        onUpdate: () => {
          const current = Math.floor(progressObj.val);
          setProgress(current);

          // Update dynamic cultural milestone narrative
          if (current < 25) {
            setMilestone("PAGHANDA SA BIYAHE • CENTRAL LUZON EXPRESSWAY");
          } else if (current < 50) {
            setMilestone("ONION CAPITAL OF THE PHILIPPINES • TANDUYONG HARVEST");
          } else if (current < 75) {
            setMilestone("CARABALLO & SIERRA MADRE RIDGE • TAYABO ECO-VALLEY");
          } else if (current < 99) {
            setMilestone("ENTERING SAN JOSE CITY • GATEWAY TO CAGAYAN VALLEY");
          } else {
            setMilestone("MALIGAYANG PAGDATING SA SAN JOSE CITY! • BIYAHE TAYO!");
          }

          // Move the jeepney along the line smoothly on all screen sizes
          if (jeepneyRef.current && roadTrackRef.current) {
            const trackWidth = roadTrackRef.current.offsetWidth;
            const jeepWidth = jeepneyRef.current.offsetWidth;
            const maxTravel = Math.max(0, trackWidth - jeepWidth);
            const xPos = (current / 100) * maxTravel;
            
            gsap.set(jeepneyRef.current, {
              x: xPos,
            });
          }

          // Update the colored line progress
          if (progressLineRef.current) {
            gsap.set(progressLineRef.current, {
              width: `${current}%`,
            });
          }
        }
      });

      // Subtle suspension micro-bounce for the Jeepney
      gsap.to(".jeepney-inner", {
        y: -2.5,
        rotation: 0.5,
        duration: 0.16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Spawn subtle dust particles while moving
      const dustInterval = setInterval(() => {
        if (!dustContainerRef.current || progressObj.val >= 98) return;
        const dust = document.createElement("div");
        dust.className = "dust-particle";
        dustContainerRef.current.appendChild(dust);
        gsap.fromTo(dust, 
          { x: 10, y: 0, opacity: 0.8, scale: 0.6 },
          { 
            x: -20 - Math.random() * 15, 
            y: -6 - Math.random() * 8, 
            opacity: 0, 
            scale: 1.4, 
            duration: 0.5, 
            ease: "power1.out",
            onComplete: () => dust.remove()
          }
        );
      }, 120);

      return () => clearInterval(dustInterval);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const triggerExitSequence = () => {
    const exitTl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // 1. Jeepney zooms ahead off-screen
    exitTl.to(jeepneyRef.current, {
      x: "+=260",
      opacity: 0,
      duration: 0.45,
      ease: "power3.in"
    });

    // 2. Text and road elements dissolve up
    exitTl.to([counterRef.current, roadTrackRef.current, milestoneRef.current], {
      y: -24,
      opacity: 0,
      duration: 0.35,
      stagger: 0.04,
      ease: "power2.in"
    }, "-=0.25");

    // 3. Luxurious white curtain slides smoothly upward
    exitTl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.1");
  };

  return (
    <aside 
      aria-label="Loading Screen"
      ref={containerRef} 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Vertically centered
        alignItems: 'center',     // Horizontally centered
        padding: 'clamp(20px, 4vh, 36px) clamp(16px, 4vw, 48px)',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(0, 132, 61, 0.04) 0%, transparent 60%),
            linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 36px 36px, 36px 36px',
          pointerEvents: 'none'
        }}
      />

      {/* Center Stage: Percentage, Jeepney & The Highway Line */}
      <div 
        style={{
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Massive Editorial Percentage Indicator */}
        <div 
          ref={counterRef}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
            marginBottom: 'clamp(8px, 2vh, 18px)'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.2rem, 16vw, 9.5rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--text-headline)',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            {progress < 10 ? `0${progress}` : progress}
          </span>
          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.4rem, 4.5vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--seal-green)',
              lineHeight: 1
            }}
          >
            %
          </span>
        </div>

        {/* Dynamic Cultural Milestone Subtitle */}
        <div 
          ref={milestoneRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(10px, 2.4vw, 12px)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--seal-crimson)',
            marginBottom: 'clamp(24px, 4vh, 42px)',
            textAlign: 'center',
            padding: '0 8px',
            minHeight: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            lineHeight: 1.4
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--seal-gold-deep)',
            flexShrink: 0,
            animation: 'pulseGlow 1s ease-in-out infinite'
          }} />
          <span>{milestone}</span>
        </div>

        {/* The Road Track & Moving Jeepney */}
        <div 
          ref={roadTrackRef}
          style={{
            width: '100%',
            position: 'relative',
            paddingBottom: '20px'
          }}
        >
          {/* Responsive Jeepney Object */}
          <div 
            ref={jeepneyRef}
            style={{
              position: 'absolute',
              bottom: '16px', // Anchored precisely on top of road line
              left: 0,
              width: 'clamp(85px, 22vw, 125px)',
              height: 'auto',
              pointerEvents: 'none',
              transformOrigin: 'bottom center',
              zIndex: 5
            }}
          >
            {/* Dust Particles behind rear wheel */}
            <div 
              ref={dustContainerRef}
              style={{
                position: 'absolute',
                left: '14px',
                bottom: '10px',
                width: '8px',
                height: '8px',
                pointerEvents: 'none'
              }}
            />

            {/* Jeepney with realistic suspension motion */}
            <div className="jeepney-inner" style={{ position: 'relative' }}>
              <img 
                src="/assets/jeepney.png" 
                alt="Philippine Jeepney Indicator"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))'
                }}
              />
            </div>
          </div>

          {/* Road Baseline (The Track Line) */}
          <div 
            style={{
              position: 'relative',
              width: '100%',
              height: '3px',
              backgroundColor: '#E2E8F0',
              borderRadius: '999px',
              overflow: 'visible'
            }}
          >
            {/* Active Colored Progress Fill */}
            <div 
              ref={progressLineRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '0%',
                background: 'linear-gradient(90deg, var(--seal-green) 0%, var(--seal-gold) 60%, var(--seal-crimson) 100%)',
                borderRadius: '999px',
                boxShadow: '0 0 10px rgba(0, 132, 61, 0.4)'
              }}
            />

            {/* Milestone Notches along the Highway */}
            {[0, 25, 50, 75, 100].map((mark) => (
              <div 
                key={mark}
                style={{
                  position: 'absolute',
                  left: `${mark}%`,
                  top: '-4px',
                  width: '2px',
                  height: '11px',
                  backgroundColor: progress >= mark ? 'var(--seal-green)' : '#CBD5E1',
                  transform: 'translateX(-50%)',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Road Mileage & Route Labels */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(9px, 2vw, 11px)',
              color: 'var(--text-light)',
              letterSpacing: '0.04em'
            }}
          >
            <span>KM 00 • START</span>
            <span className="loader-route-center" style={{ color: 'var(--seal-green)', fontWeight: 600 }}>MAHARLIKA HWY ROUTE</span>
            <span>KM 160 • ARRIVAL</span>
          </div>
        </div>
      </div>

      {/* Particle styling */}
      <style>{`
        .dust-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(180, 160, 140, 0.5);
          border-radius: 50%;
        }
        @media (max-width: 520px) {
          .loader-route-center {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}