import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: '3.5rem 2.5rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-regular)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>Our Purpose</span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              Why <span className="brand-gradient-text">Glorzen?</span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: '#cbd5e1',
                marginBottom: '1.25rem'
              }}
            >
              Modern social feeds have become overwhelmingly loud. Between endless video loops, outrage-driven algorithms, and surface-level vanity metrics, genuine human expression has gotten lost in the noise.
            </p>

            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.75,
                color: '#cbd5e1',
                marginBottom: '1.25rem'
              }}
            >
              Mainstream platforms condition people to chase perfection—pressuring everyone to act like polished creators, perform for algorithmic reach, and stage their lives rather than simply being human.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem'
              }}
            >
              Glorzen returns social connection to its authentic essence. You don't need to be an influencer or stage a performance. We built a calm sanctuary where your thoughts, writings, and feelings take center stage—allowing you to express yourself freely and connect with people who truly resonate with who you are.
            </p>

            {/* Core Values Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Intention</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Over mindless scrolling</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Depth</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Over superficial vanity</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Resonance</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Over algorithmic hype</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
