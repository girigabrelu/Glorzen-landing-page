import React from 'react'
import { Heart, MessageCircle, ShieldCheck } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: '3.5rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(11, 15, 25, 0.95))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>Our Purpose</span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              Why <span className="brand-gradient-text">Glorzen?</span>
            </h2>
            
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: '#cbd5e1',
                marginBottom: '1.25rem'
              }}
            >
              Modern social feeds have become overwhelmingly loud. Between endless short videos, outrage-bait algorithms, and surface-level likes, genuine human expression has gotten lost in the noise.
            </p>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.8,
                color: '#cbd5e1',
                marginBottom: '1.25rem'
              }}
            >
              Modern social media has conditioned people to chase perfection—pressuring everyone to act like polished creators, perform for the algorithm, and stage their lives for vanity metrics instead of simply being human.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#94a3b8',
                marginBottom: '2.5rem'
              }}
            >
              Glorzen solves this by returning social connection to its authentic essence. You don't need to be an influencer or put on a performance. We built a calm sanctuary where your real thoughts, writings, and feelings take center stage—allowing you to express yourself freely and connect with people who truly resonate with who you are.
            </p>

            {/* Core Values Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.25rem' }}>Intention</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Over mindless scrolling</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.25rem' }}>Depth</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Over superficial metrics</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.25rem' }}>Resonance</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Over algorithmic noise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
