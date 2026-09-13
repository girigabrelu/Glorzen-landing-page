import React from 'react'
import { Download, Compass, ShieldCheck, FlaskConical, ArrowRight } from 'lucide-react'

export default function FinalCta() {
  const downloadUrl = 'https://github.com/girigabrelu/Glorzen-landing-page/releases/tag/v1.0.0'

  return (
    <section id="download" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '32px',
            padding: '4.5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.15), rgba(11, 15, 25, 0.95))',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(99, 102, 241, 0.2)'
          }}
        >
          {/* Ambient Glow Orbs */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
              <Compass size={14} style={{ color: '#ec4899' }} />
              <span>Begin Your Journey Today</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Your Story <span className="gradient-text">Deserves A Place.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                color: '#cbd5e1',
                marginBottom: '2.5rem',
                lineHeight: 1.6
              }}
            >
              Join Glorzen and start sharing what matters to you with a community that listens.
            </p>

            {/* Professional Download Beta Button */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}
            >
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary download-cta-btn"
                style={{
                  padding: '1.1rem 2.8rem',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  boxShadow: '0 8px 28px rgba(99, 102, 241, 0.4), 0 0 16px rgba(236, 72, 153, 0.25)',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none'
                }}
              >
                {/* Premium Ultra-Smooth Animated Download Icon */}
                <div className="premium-download-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Fixed Base Tray */}
                    <path
                      className="download-tray"
                      d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Continuous Smooth Arrow Group */}
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
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
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
                  color: '#94a3b8',
                  fontSize: '0.875rem'
                }}
              >
                <ShieldCheck size={16} style={{ color: '#10b981' }} />
                <span>Official Release &bull; Free on GitHub</span>
              </div>
            </div>

            {/* Professional Beta Testing & Feedback Notice */}
            <div
              style={{
                marginTop: '2.25rem',
                padding: '1.25rem 1.5rem',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                maxWidth: '620px',
                margin: '2.25rem auto 0 auto',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.4rem'
                }}
              >
                <FlaskConical size={15} />
                <span>Beta Preview & Testing</span>
              </div>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#94a3b8',
                  lineHeight: 1.55,
                  margin: 0
                }}
              >
                You are downloading an early preview build of Glorzen. As we continue optimizing and refining features, your testing and feedback directly help us fix bugs and elevate the experience.
              </p>
              <div style={{ marginTop: '0.65rem' }}>
                <a
                  href="#suggestion"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#a5b4fc',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#a5b4fc')}
                >
                  <span>Share Feedback or Report an Issue</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

