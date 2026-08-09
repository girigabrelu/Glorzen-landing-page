import React from 'react'
import { Heart, Sparkles, MessageCircle, Compass, Users } from 'lucide-react'

export default function CommunitySection() {
  const pillars = [
    { title: 'Expression', text: 'Share your genuine feelings, prose, and internal reflections without judgment.', icon: Heart, color: '#ec4899' },
    { title: 'Creativity', text: 'Turn raw thoughts into beautifully formatted Feels that speak directly to the heart.', icon: Sparkles, color: '#818cf8' },
    { title: 'Conversations', text: 'Engage in thoughtful discussions that go far beyond surface-level comments.', icon: MessageCircle, color: '#22d3ee' },
    { title: 'Discovery', text: 'Explore perspectives from diverse minds around the globe based on real resonance.', icon: Compass, color: '#a855f7' },
    { title: 'Connections', text: 'Form long-lasting social circles built on shared values and emotional truth.', icon: Users, color: '#34d399' }
  ]

  return (
    <section id="community" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Community Principles</span>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${pillar.color}`,
                    margin: '0 auto 1.25rem auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.color,
                    boxShadow: `0 4px 20px ${pillar.color}25`
                  }}
                >
                  <IconComp size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
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
