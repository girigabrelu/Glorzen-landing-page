import React from 'react'
import { Link } from 'react-router-dom'
import { Code2, Mail, ArrowRight } from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'
import developerPhoto from '../assets/developer-giri.jpg'

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Feels Showcase', href: '#feels' },
    { name: 'About Us', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true, highlight: true },
    { name: 'Terms of Service', href: '#about' }
  ]

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(7, 9, 14, 0.95)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px' }}>
            <a href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1rem' }}>
              <img
                src={glorzenLogo}
                alt="Glorzen"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                Glorzen
              </span>
            </a>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              A place for thoughts, feelings, and connections. Built for genuine human expression.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6366f1' }}>
              <Mail size={15} />
              <a href="mailto:team.glorzen@gmail.com" style={{ color: '#818cf8', textDecoration: 'none' }}>
                team.glorzen@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>Navigation</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              {footerLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    id="footer-privacy-policy-link"
                    style={{
                      fontSize: '0.875rem',
                      color: link.highlight ? '#a5b4fc' : '#94a3b8',
                      fontWeight: link.highlight ? 600 : 400,
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = link.highlight ? '#a5b4fc' : '#94a3b8')}
                  >
                    <span>{link.name}</span>
                    {link.highlight && (
                      <span
                        style={{
                          fontSize: '0.65rem',
                          background: 'rgba(99, 102, 241, 0.25)',
                          color: '#c7d2fe',
                          padding: '0.1rem 0.35rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(99, 102, 241, 0.4)'
                        }}
                      >
                        Official
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#94a3b8',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Platform Vision Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>Contact & Support</h4>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1rem' }}>
              Have inquiries, feedback, or need community support? Reach out directly to our team.
            </p>
            <a
              href="#suggestion"
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              Submit Feedback
            </a>
          </div>
        </div>

        {/* Developer Spotlight Banner & Button at the Bottom */}
        <div
          style={{
            margin: '2.5rem 0 1.25rem',
            padding: '1.25rem 1.75rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.09) 0%, rgba(236, 72, 153, 0.06) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ position: 'relative', width: '46px', height: '46px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(99, 102, 241, 0.5)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src={developerPhoto}
                  alt="Giri Gabrelu"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transform: 'scale(1.12)',
                    transformOrigin: '50% 25%',
                    display: 'block'
                  }}
                />
              </div>
              <span
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-2px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#10b981',
                  border: '2px solid #07090e'
                }}
              />
            </div>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Built by Giri Gabrelu</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.2)',
                    color: '#a5b4fc',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    fontWeight: 600
                  }}
                >
                  Creator
                </span>
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                Developer of Glorzen &bull; B.Tech Student
              </div>
            </div>
          </div>

          <Link
            to="/developer"
            id="bottom-meet-developer-btn"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.7rem 1.45rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(99, 102, 241, 0.35), 0 0 12px rgba(236, 72, 153, 0.2)',
            }}
          >
            <Code2 size={15} />
            <span>Meet the Developer</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>© 2026 Glorzen. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link
              to="/privacy-policy"
              id="footer-bottom-privacy-link"
              style={{
                color: '#818cf8',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#818cf8')}
            >
              Privacy Policy
            </Link>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
