import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, EyeOff, Lock, UserX, AlertTriangle, Sliders, FileText, ArrowRight } from 'lucide-react'

export default function PrivacyTrust() {
  const privacyFeatures = [
    {
      icon: EyeOff,
      title: 'Privacy-Conscious Design',
      description: 'Choose who can see your Feels. Keep thoughts personal, share strictly with close friends, or open them to the wider community.'
    },
    {
      icon: Sliders,
      title: 'Granular Interaction Control',
      description: 'Control exactly who can reply to your writing, send direct message requests, or view your current active status.'
    },
    {
      icon: UserX,
      title: 'Direct Blocking & Muting',
      description: 'Mute or block accounts without friction or notification. Your space remains peaceful and entirely under your command.'
    },
    {
      icon: AlertTriangle,
      title: 'Community Safety & Reporting',
      description: 'Prompt inline reporting mechanisms ensure toxic behavior is swiftly flagged and reviewed by human moderators.'
    },
    {
      icon: Lock,
      title: 'Account Ownership',
      description: 'Your data belongs strictly to you. Export your writings or delete your entire account anytime with a single click.'
    },
    {
      icon: Shield,
      title: 'Transparent Philosophy',
      description: 'Built for genuine human expression, not surveillance-advertising tracking or addictive outrage loops.'
    }
  ]

  return (
    <section id="privacy" className="section-spacing" style={{ position: 'relative', background: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Trust & Safety</span>
          <h2>
            Your Expression. <span className="gradient-text">Your Control.</span>
          </h2>
          <p>
            We believe a thoughtful social network must provide complete authority over your privacy, safety, and personal boundaries.
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
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--accent-primary-subtle)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary-light)',
                    flexShrink: 0
                  }}
                >
                  <IconComp size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlighted Official Privacy Policy Callout */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1100px',
            margin: '2.5rem auto 0',
            padding: '1.5rem 2rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-accent)',
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
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--accent-primary-subtle)',
                border: '1px solid var(--border-regular)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary-light)',
                flexShrink: 0
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Official Privacy Policy
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'var(--accent-primary-subtle)',
                    color: '#c7d2fe',
                    border: '1px solid rgba(91, 101, 220, 0.3)',
                    fontWeight: 600
                  }}
                >
                  Legally Compliant
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
                Learn how we handle data storage, security, account management, and transparency in detail.
              </p>
            </div>
          </div>

          <Link
            to="/privacy-policy"
            id="privacy-section-view-policy-btn"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              fontSize: '0.88rem',
              textDecoration: 'none'
            }}
          >
            <span>Read Full Policy</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
