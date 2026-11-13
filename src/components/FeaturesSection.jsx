import React from 'react'
import { HeartHandshake, Compass, MessageSquare, UserCheck, Users, ShieldCheck } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: HeartHandshake,
      badge: 'Core Expression',
      title: 'Feels',
      tagline: 'Express what you feel.',
      description: 'Share thoughts, writings, emotions, and personal reflections through Glorzen Feels—a format designed for depth over mindless clicks.',
      accentColor: '#d96288',
      accentBg: 'rgba(217, 98, 136, 0.1)'
    },
    {
      icon: Compass,
      badge: 'Intentional Discovery',
      title: 'Discover People',
      tagline: 'Find people worth connecting with.',
      description: 'Discover thoughtful profiles and connect with people who share your philosophical perspective, passions, and emotional frequency.',
      accentColor: '#7c85ec',
      accentBg: 'rgba(124, 133, 236, 0.1)'
    },
    {
      icon: MessageSquare,
      badge: 'Direct Dialogue',
      title: 'Meaningful Conversations',
      tagline: 'Talk. Connect. Stay close.',
      description: 'Built-in direct messaging and reflective comments designed for calm, distraction-free, and respectful communication with your inner circle.',
      accentColor: '#14b8a6',
      accentBg: 'rgba(20, 184, 166, 0.1)'
    },
    {
      icon: UserCheck,
      badge: 'Identity',
      title: 'Your Profile',
      tagline: 'Your identity. Your space.',
      description: 'Create a quiet, minimalist profile that truly represents you—your curated Feels, favorite thoughts, and authentic character.',
      accentColor: '#a78bfa',
      accentBg: 'rgba(167, 139, 250, 0.1)'
    },
    {
      icon: Users,
      badge: 'Inner Circle',
      title: 'Follow & Connect',
      tagline: 'Build your circle.',
      description: 'Follow writers, thinkers, and friends to receive updates from people you respect, free from algorithmic manipulation.',
      accentColor: '#38bdf8',
      accentBg: 'rgba(56, 189, 248, 0.1)'
    },
    {
      icon: ShieldCheck,
      badge: 'Safety First',
      title: 'Privacy & Control',
      tagline: 'Your space should stay yours.',
      description: 'Granular controls over visibility, interactions, mute lists, and reporting to preserve a tranquil and secure personal sanctuary.',
      accentColor: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.1)'
    }
  ]

  return (
    <section id="features" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Platform Architecture</span>
          <h2>
            More Than Just <span className="gradient-text">Another Social App.</span>
          </h2>
          <p>
            Glorzen is intentionally designed around human expression, quiet discovery, and genuine connection—leaving behind the noise of engagement algorithms.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {features.map((feature, idx) => {
            const IconComp = feature.icon
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: feature.accentBg,
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: feature.accentColor
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 500, color: feature.accentColor, marginBottom: '0.85rem' }}>
                    {feature.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div
                  style={{
                    marginTop: '1.75rem',
                    height: '2px',
                    width: '32px',
                    background: feature.accentColor,
                    borderRadius: '2px',
                    opacity: 0.6
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
