import React from 'react'
import { UserPlus, Feather, HeartHandshake } from 'lucide-react'

export default function ProductExperience() {
  const steps = [
    {
      number: '01',
      title: 'Create',
      tagline: 'Claim your handle and define your space.',
      description: 'Set up your profile in moments. Choose your username, write a brief bio, and configure your personal privacy boundaries.',
      icon: UserPlus,
      color: '#7c85ec',
      bg: 'rgba(124, 133, 236, 0.1)'
    },
    {
      number: '02',
      title: 'Express',
      tagline: 'Share your thoughts, feelings, and stories.',
      description: 'Publish your thoughts as "Feels" with optional mood tags. No pressure to create video loops or perform for vanity metrics.',
      icon: Feather,
      color: '#d96288',
      bg: 'rgba(217, 98, 136, 0.1)'
    },
    {
      number: '03',
      title: 'Connect',
      tagline: 'Discover people and build meaningful connections.',
      description: 'Engage with people who genuinely resonate with your words. Build your circle and exchange thoughtful, sincere dialogue.',
      icon: HeartHandshake,
      color: '#14b8a6',
      bg: 'rgba(20, 184, 166, 0.1)'
    }
  ]

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Simple Onboarding</span>
          <h2>
            How <span className="gradient-text">Glorzen Works.</span>
          </h2>
          <p>
            Experience a social space designed for genuine human interaction in three straightforward steps.
          </p>
        </div>

        {/* 3-Step Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => {
            const IconComp = step.icon
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Step Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: 'var(--text-muted)',
                        opacity: 0.5,
                        lineHeight: 1
                      }}
                    >
                      {step.number}
                    </span>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: step.bg,
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.color
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 500, color: step.color, marginBottom: '0.85rem' }}>
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div
                  style={{
                    marginTop: '2rem',
                    height: '2px',
                    width: '100%',
                    background: 'var(--border-subtle)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${(idx + 1) * 33.33}%`,
                      background: step.color,
                      borderRadius: '2px'
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
