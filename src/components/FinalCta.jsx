import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function FinalCta() {
  return (
    <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '32px',
            padding: '4.5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.15), rgba(11, 15, 25, 0.95))',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(99, 102, 241, 0.2)'
          }}
        >
          {/* Ambient Glow Orbs */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} style={{ color: '#ec4899' }} />
              <span>Begin Your Journey Today</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Your Story <span className="gradient-text">Deserves A Place.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                color: '#cbd5e1',
                marginBottom: '2.5rem',
                lineHeight: 1.6
              }}
            >
              Join Glorzen and start sharing what matters to you with a community that listens.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <a href="#hero" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Open Glorzen
                <ArrowRight size={20} />
              </a>
              <a href="#features" className="btn btn-secondary" style={{ padding: '1rem 2.2rem', fontSize: '1.1rem' }}>
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
