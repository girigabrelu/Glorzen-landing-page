import React from 'react'
import { Shield, EyeOff, Lock, UserX, AlertTriangle, Sliders } from 'lucide-react'

export default function PrivacyTrust() {
  const privacyFeatures = [
    {
      icon: EyeOff,
      title: 'Privacy-Conscious Design',
      description: 'Choose who can see your Feels. Keep thoughts personal, share with inner circles, or open them to the community.'
    },
    {
      icon: Sliders,
      title: 'Granular Interaction Control',
      description: 'Control who can reply to your writing, send message requests, or view your online status.'
    },
    {
      icon: UserX,
      title: 'Direct Blocking & Muting',
      description: 'Easily mute or block accounts with zero friction. Your space stays completely peaceful.'
    },
    {
      icon: AlertTriangle,
      title: 'Community Safety & Reporting',
      description: 'Prompt inline reporting tools to ensure toxic behavior is swiftly flagged and reviewed by moderators.'
    },
    {
      icon: Lock,
      title: 'Account Ownership',
      description: 'Your data belongs to you. Export your writings or delete your account anytime with one click.'
    },
    {
      icon: Shield,
      title: 'Transparent Philosophy',
      description: 'Built for genuine human expression, not surveillance-ad targeting or addictive outrage algorithms.'
    }
  ]

  return (
    <section className="section-spacing" style={{ position: 'relative', background: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Trust & Safety</span>
          <h2>
            Your Expression. <span className="gradient-text">Your Control.</span>
          </h2>
          <p>
            We believe an expressive platform must give you complete authority over your privacy, safety, and social boundaries.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {privacyFeatures.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8',
                    flexShrink: 0
                  }}
                >
                  <IconComp size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {item.description}
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
