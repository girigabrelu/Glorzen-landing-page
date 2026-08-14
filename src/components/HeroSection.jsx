import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

const EMOTIONAL_WORDS = [
  'Happy',
  'Sad',
  'Love',
  'Hope',
  'Dreams',
  'Memories',
  'Feelings',
  'Joy',
  'Pain',
  'Thoughts',
  'Peace',
  'Excited',
  'Alone',
  'Smile',
  'Heart',
  'Connect',
  'Laugh',
  'Cry',
  'Believe',
  'Life'
]

export default function HeroSection() {
  const wordCount = EMOTIONAL_WORDS.length

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 30%, #0d1222 0%, #07090e 70%)',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Ethereal background ambient glow spots */}
      <div
        className="hero-bg-glow-top"
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(236, 72, 153, 0.07) 45%, transparent 75%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        {/* Top Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="glass-pill" style={{ padding: '0.4rem 1.1rem', background: 'rgba(255, 255, 255, 0.03)' }}>
            <Sparkles size={15} style={{ color: '#ec4899' }} />
            <span style={{ letterSpacing: '0.04em', fontWeight: 600 }}>GLORZEN &bull; Express &bull; Connect &bull; Belong</span>
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.8vw, 4.5rem)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            Where feelings become <span className="gradient-text">connections.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
              fontWeight: 400
            }}
          >
            Share what you feel. Discover people. Build genuine connections.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          <a href="#feels" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
            Explore Glorzen
            <ArrowRight size={18} />
          </a>
          <a href="#features" className="btn btn-secondary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
            Get Started
          </a>
        </div>

        {/* PURE TYPOGRAPHY 3D FIXED ROTATING CIRCULAR WHEEL (Stationary Centered Ellipse, Zero Wobble) */}
        <div className="wheel-scene-wrapper">
          {/* Static Centered 3D Tilted Stage */}
          <div className="wheel-3d-stage">
            {/* Subtle 3D Orbital Path Guide Ring */}
            <div className="orbit-guide-ring" />

            {/* Empty Center Halo */}
            <div className="orbit-center-empty" />

            {/* 3D Rotating Typography Wheel System */}
            <div className="orbital-wheel">
              {EMOTIONAL_WORDS.map((word, index) => {
                const angleDeg = (index / wordCount) * 360
                return (
                  <div
                    key={word}
                    className="orbital-slot"
                    style={{
                      transform: `rotateZ(${angleDeg}deg) translateX(var(--orbit-radius)) rotateZ(-${angleDeg}deg)`
                    }}
                  >
                    <div className="orbital-card">
                      <span className="orbital-word-text">{word}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Tagline Statement */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
              color: '#a5b4fc',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              opacity: 0.9,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ width: '20px', height: '1px', background: 'rgba(165, 180, 252, 0.5)' }} />
            Glorzen is a place for every feeling.
            <span style={{ width: '20px', height: '1px', background: 'rgba(165, 180, 252, 0.5)' }} />
          </p>
        </div>
      </div>

      <style>{`
        :root {
          --orbit-radius: 340px;
          --orbit-pitch: 60deg;
          --orbit-speed: 38s;
        }

        .wheel-scene-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 460px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          perspective-origin: 50% 50%;
          contain: layout style;
        }

        /* Static 3D Stage: Tilted once at center, never wobbles */
        .wheel-3d-stage {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform: rotateX(var(--orbit-pitch));
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-guide-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: calc(var(--orbit-radius) * 2);
          height: calc(var(--orbit-radius) * 2);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, transparent 80%);
          box-shadow: 0 0 60px rgba(99, 102, 241, 0.08), inset 0 0 50px rgba(236, 72, 153, 0.04);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .orbit-center-empty {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Pure planar Z-rotation: stays completely centered */
        .orbital-wheel {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          animation: spinWheelPure var(--orbit-speed) linear infinite;
          will-change: transform;
        }

        .orbital-slot {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .orbital-card {
          position: absolute;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
          animation: counterSpinPure var(--orbit-speed) linear infinite;
          padding: 0.5rem 1.2rem;
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(99, 102, 241, 0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
        }

        .orbital-card:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6), 0 0 28px rgba(99, 102, 241, 0.5);
        }

        .orbital-word-text {
          font-family: var(--font-heading);
          font-size: 1.12rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: #f1f5f9;
          text-shadow: 0 0 14px rgba(255, 255, 255, 0.4);
        }

        /* Fixed GPU 3D Wheel Rotation Animations (Zero Left-Right Wobble) */
        @keyframes spinWheelPure {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        @keyframes counterSpinPure {
          0% {
            transform: translate(-50%, -50%) rotateZ(0deg) rotateX(calc(-1 * var(--orbit-pitch)));
          }
          100% {
            transform: translate(-50%, -50%) rotateZ(-360deg) rotateX(calc(-1 * var(--orbit-pitch)));
          }
        }

        /* Mobile responsiveness optimization */
        @media (max-width: 768px) {
          :root {
            --orbit-radius: 145px;
            --orbit-pitch: 56deg;
            --orbit-speed: 32s;
          }

          .hero-section {
            padding-top: 6.5rem !important;
            padding-bottom: 3.5rem !important;
          }

          .wheel-scene-wrapper {
            max-width: 350px;
            height: 280px;
          }

          .hero-bg-glow-top {
            width: 320px !important;
            height: 320px !important;
          }

          .orbit-center-empty {
            width: 90px;
            height: 90px;
          }

          .orbital-card {
            padding: 0.32rem 0.75rem;
          }

          .orbital-word-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}


