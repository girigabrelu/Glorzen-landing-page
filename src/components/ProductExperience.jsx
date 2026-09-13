import React from 'react'
import { UserPlus, Feather, HeartHandshake, ArrowRight } from 'lucide-react'

export default function ProductExperience() {
  const steps = [
    {
      number: '01',
      title: 'Create',
      tagline: 'Create your profile and make Glorzen yours.',
      description: 'Set up your space in seconds. Choose your username, express your vibe, and set your personal interaction boundaries.',
      icon: UserPlus,
      color: '#6366f1'
    },
    {
      number: '02',
      title: 'Express',
      tagline: 'Share your thoughts, feelings, and stories.',
      description: 'Publish your thoughts as "Feels" with custom mood tags. No forced short videos or clickbait algorithms required.',
      icon: Feather,
      color: '#ec4899'
    },
    {
      number: '03',
      title: 'Connect',
      tagline: 'Discover people and build meaningful connections.',
      description: 'Engage with people who resonance with your mind. Build your authentic circle and converse freely.',
      icon: HeartHandshake,
      color: '#10b981'
    }
  ]

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Simple Workflow</span>
          <h2>
            How <span className="gradient-text">Glorzen Works.</span>
          </h2>
          <p>
            Experience a social space designed for genuine human interaction in three intuitive steps.
          </p>
        </div>

        {/* 3-Step Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
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
                  borderRadius: '24px',
                  position: 'relative',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Step Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: 'rgba(255, 255, 255, 0.15)',
                        lineHeight: 1
                      }}
                    >
                      {step.number}
                    </span>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${step.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.color
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.4rem', color: '#f8fafc' }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: step.color, marginBottom: '1rem' }}>
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div
                  style={{
                    marginTop: '2rem',
                    height: '3px',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '2px',
                    position: 'relative',
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
