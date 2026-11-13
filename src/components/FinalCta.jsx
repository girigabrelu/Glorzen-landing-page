import React from 'react'
import { Compass, ShieldCheck, FlaskConical, ArrowRight } from 'lucide-react'

export default function FinalCta() {
  const downloadUrl = 'https://github.com/girigabrelu/Glorzen-landing-page/releases/tag/v1.0.0'

  return (
    <section id="download" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-regular)'
          }}
        >
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
            <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
              <Compass size={14} style={{ color: 'var(--accent-rose)' }} />
              <span>Begin Your Journey Today</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.15rem'
              }}
            >
              Your Story <span className="gradient-text">Deserves A Place.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                lineHeight: 1.6
              }}
            >
              Join Glorzen and start sharing what matters to you with a community that listens with intention.
            </p>

            {/* Professional Download Beta Button */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem'
              }}
            >
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary download-cta-btn"
                style={{
                  padding: '1rem 2.4rem',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none'
                }}
              >
                {/* Clean Animated Download Icon */}
                <div className="premium-download-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="download-tray"
                      d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g className="download-arrow-group">
                      <path
                        d="M12 3v11"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 10l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>

                <span>Download Glorzen Beta</span>
                <span
                  style={{
                    background: 'rgba(255, 255, 255, 0.16)',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  v1.0.0
                </span>
              </a>

              {/* Verified Release Subtext */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem'
                }}
              >
                <ShieldCheck size={15} style={{ color: '#10b981' }} />
                <span>Official Release &bull; Free on GitHub</span>
              </div>
            </div>

            {/* Professional Beta Testing Notice */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.15rem 1.4rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                maxWidth: '580px',
                margin: '2rem auto 0 auto',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--accent-amber-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.35rem'
                }}
              >
                <FlaskConical size={14} />
                <span>Beta Preview & Testing</span>
              </div>
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                  margin: 0
                }}
              >
                You are downloading an early preview release of Glorzen. Your testing and feedback directly help refine features and elevate performance.
              </p>
              <div style={{ marginTop: '0.55rem' }}>
                <a
                  href="#suggestion"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: '#c7d2fe',
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c7d2fe')}
                >
                  <span>Share Feedback or Suggest an Idea</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
