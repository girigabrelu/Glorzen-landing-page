import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, EyeOff, Lock, UserX, AlertTriangle, Sliders, FileText, ArrowRight } from 'lucide-react'

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
    <section id="privacy" className="section-spacing" style={{ position: 'relative', background: 'rgba(11, 15, 25, 0.5)' }}>
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

        {/* Highlighted Official Privacy Policy Callout */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '2.5rem auto 0',
            padding: '1.5rem 2rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(56, 189, 248, 0.08) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '680px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.22)',
                border: '1px solid rgba(99, 102, 241, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a5b4fc',
                flexShrink: 0
              }}
            >
              <FileText size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                  Official Privacy Policy
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.25)',
                    color: '#c7d2fe',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    fontWeight: 700
                  }}
                >
                  Updated Aug 07, 2026
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                Read our complete 11-section Native Legal Document covering data collection, Firebase cloud infrastructure, and account deletion rights.
              </p>
            </div>
          </div>

          <Link
            to="/privacy-policy"
            id="privacy-trust-cta-btn"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.65rem 1.4rem',
              fontSize: '0.88rem',
              fontWeight: 700,
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(99, 102, 241, 0.4)'
            }}
          >
            <span>Read Privacy Policy</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
