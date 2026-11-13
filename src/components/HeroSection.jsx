import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ArrowRight, Shield } from 'lucide-react'

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
        paddingTop: '7.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 15%, #121726 0%, #0a0d14 70%)',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        {/* Top Pill Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div className="glass-pill" style={{ padding: '0.35rem 1rem' }}>
            <Heart size={14} style={{ color: 'var(--accent-rose)' }} />
            <span style={{ letterSpacing: '0.03em', fontWeight: 600 }}>GLORZEN &bull; Express &bull; Connect &bull; Belong</span>
          </div>
        </div>

        {/* Hero Headline & Subtext */}
        <div style={{ maxWidth: '860px', margin: '0 auto 1.5rem auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)',
              lineHeight: 1.12,
              marginBottom: '1.2rem',
              fontWeight: 800,
              letterSpacing: '-0.025em'
            }}
          >
            Where feelings become <span className="gradient-text">connections.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Share what you feel. Discover people. Build genuine connections without the noise.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: '2.75rem',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#feels"
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            <span>Explore Glorzen</span>
            <ArrowRight size={17} />
          </a>
          <Link
            to="/privacy-policy"
            id="hero-privacy-policy-btn"
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.85rem',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              textDecoration: 'none'
            }}
          >
            <Shield size={17} style={{ color: 'var(--accent-primary-light)' }} />
            <span>Privacy Policy</span>
          </Link>
        </div>

        {/* PURE TYPOGRAPHY 3D ROTATING CIRCULAR WHEEL */}
        <div className="wheel-scene-wrapper">
          <div className="wheel-3d-stage">
            {/* Architectural Guide Ring */}
            <div className="orbit-guide-ring" />
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
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--border-regular)' }} />
            Glorzen is a place for every feeling
            <span style={{ width: '24px', height: '1px', background: 'var(--border-regular)' }} />
          </p>
        </div>
      </div>

      <style>{`
        :root {
          --orbit-radius: 320px;
          --orbit-pitch: 58deg;
          --orbit-speed: 40s;
        }

        .wheel-scene-wrapper {
          position: relative;
          width: 100%;
          max-width: 860px;
          height: 420px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          perspective-origin: 50% 50%;
          contain: layout style;
        }

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
          background: radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 75%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .orbit-center-empty {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

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
          padding: 0.45rem 1.05rem;
          border-radius: 9999px;
          background: #121624;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          will-change: transform;
        }

        .orbital-card:hover {
          background: #192033;
          border-color: rgba(255, 255, 255, 0.25);
          transform: translate(-50%, -50%) rotateZ(0deg) rotateX(calc(-1 * var(--orbit-pitch))) scale(1.05);
        }

        .orbital-word-text {
          font-family: var(--font-heading);
          font-size: 0.98rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #e2e8f0;
        }

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

        @media (max-width: 768px) {
          :root {
            --orbit-radius: 145px;
            --orbit-pitch: 56deg;
            --orbit-speed: 34s;
          }

          .hero-section {
            padding-top: 6rem !important;
            padding-bottom: 2.5rem !important;
          }

          .wheel-scene-wrapper {
            max-width: 340px;
            height: 260px;
          }

          .orbit-center-empty {
            width: 80px;
            height: 80px;
          }

          .orbital-card {
            padding: 0.3rem 0.75rem;
          }

          .orbital-word-text {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  )
}
