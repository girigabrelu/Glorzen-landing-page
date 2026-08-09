import React from 'react'
import { HeartHandshake, Compass, MessageSquare, UserCheck, Users, ShieldCheck } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: HeartHandshake,
      badge: 'Feels Format',
      title: 'Feels',
      tagline: 'Express what you feel.',
      description: 'Share thoughts, writings, emotions, and moments through Glorzen Feels—a format designed for depth over clicks.',
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(99, 102, 241, 0.05))',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      iconColor: '#ec4899'
    },
    {
      icon: Compass,
      badge: 'Smart Discovery',
      title: 'Discover People',
      tagline: 'Find people worth connecting with.',
      description: 'Discover profiles and connect with people who share your interests, perspective, and emotional frequency.',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.05))',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      iconColor: '#818cf8'
    },
    {
      icon: MessageSquare,
      badge: 'Direct Messaging',
      title: 'Meaningful Conversations',
      tagline: 'Talk. Connect. Stay close.',
      description: 'Built-in conversations designed for simple, distraction-free, and natural communication with your circle.',
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.05))',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      iconColor: '#22d3ee'
    },
    {
      icon: UserCheck,
      badge: 'Identity',
      title: 'Your Profile',
      tagline: 'Your identity. Your space.',
      description: 'Create a minimalist profile that truly represents you—your curated Feels, saved thoughts, and personality.',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.05))',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      iconColor: '#a855f7'
    },
    {
      icon: Users,
      badge: 'Inner Circle',
      title: 'Follow & Connect',
      tagline: 'Build your circle.',
      description: 'Follow people and discover content from the minds you care about, without algorithmic chaos.',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(99, 102, 241, 0.05))',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      iconColor: '#34d399'
    },
    {
      icon: ShieldCheck,
      badge: 'User First',
      title: 'Privacy & Control',
      tagline: 'Your space should stay yours.',
      description: 'Granular user controls over visibility, interactions, blocking, and reporting to preserve a safe sanctuary.',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(236, 72, 153, 0.05))',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      iconColor: '#fbbf24'
    }
  ]

  return (
    <section id="features" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Built For Expression</span>
          <h2>
            More Than Just <span className="gradient-text">Another Social App.</span>
          </h2>
          <p>
            Glorzen is designed around expression, discovery, and genuine connection—leaving behind algorithm-driven noise.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
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
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(15, 23, 42, 0.6)'
                }}
              >
                {/* Background Corner Glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '180px',
                    height: '180px',
                    background: feature.gradient,
                    borderRadius: '50%',
                    filter: 'blur(35px)',
                    pointerEvents: 'none'
                  }}
                />

                <div>
                  {/* Top Row Icon + Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${feature.borderColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: feature.iconColor,
                        boxShadow: `0 4px 20px ${feature.borderColor}`
                      }}
                    >
                      <IconComp size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: feature.iconColor,
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.35rem', color: '#f8fafc' }}>
                    {feature.title}
                  </h3>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: feature.iconColor, marginBottom: '0.85rem' }}>
                    {feature.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
