import React from 'react'
import { Heart, Feather, MessageCircle, Compass, Users } from 'lucide-react'

export default function CommunitySection() {
  const pillars = [
    { title: 'Expression', text: 'Share your genuine feelings, prose, and internal reflections without fear of judgment.', icon: Heart, color: '#d96288', bg: 'rgba(217, 98, 136, 0.1)' },
    { title: 'Creativity', text: 'Turn fleeting thoughts into beautifully formatted Feels that speak directly to the reader.', icon: Feather, color: '#7c85ec', bg: 'rgba(124, 133, 236, 0.1)' },
    { title: 'Dialogue', text: 'Engage in thoughtful discussions that go far deeper than one-word comments and surface reactions.', icon: MessageCircle, color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.1)' },
    { title: 'Discovery', text: 'Explore perspectives from diverse minds around the globe based on resonance rather than hype.', icon: Compass, color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.1)' },
    { title: 'Belonging', text: 'Form meaningful circles grounded in shared values, emotional truth, and mutual respect.', icon: Users, color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.1)' }
  ]

  return (
    <section id="community" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Guiding Principles</span>
          <h2>
            A Place For <span className="gradient-text">Every Voice.</span>
          </h2>
          <p>
            Glorzen is built from the ground up for authentic human self-expression, mutual respect, and intentional connection.
          </p>
        </div>

        {/* Pillars Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: pillar.bg,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.color
                  }}
                >
                  <IconComp size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {pillar.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
