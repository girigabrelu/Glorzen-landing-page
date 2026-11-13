import React from 'react'
import { Link } from 'react-router-dom'
import { Code2, Mail, ArrowRight } from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'

/* SVG Icons for Social Links */
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Feels Showcase', href: '#feels' },
    { name: 'About Us', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true, highlight: true },
    { name: 'Developer', href: '/developer', isRoute: true }
  ]

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#090c13',
        paddingTop: '3.75rem',
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
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px' }}>
            <a href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '0.85rem' }}>
              <img
                src={glorzenLogo}
                alt="Glorzen"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Glorzen
              </span>
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              A sanctuary for thoughts, feelings, and genuine human connection. Built for self-expression over algorithmic performance.
            </p>

            {/* Special Social Links (GitHub, LinkedIn, Email ONLY) with exclusive subtle hover glows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <a
                href="https://github.com/girigabrelu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-github"
                aria-label="GitHub Profile"
                title="GitHub"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px'
                }}
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/giri-gabrelu-850917380"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-linkedin"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px'
                }}
              >
                <LinkedInIcon />
              </a>

              <a
                href="mailto:girigabrelu04@gmail.com"
                className="social-link-email"
                aria-label="Email Giri Gabrelu"
                title="Email"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px'
                }}
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.15rem' }}>Navigation</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              {footerLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    id={`footer-${link.name.toLowerCase().replace(/\s+/g, '-')}-link`}
                    style={{
                      fontSize: '0.85rem',
                      color: link.highlight ? '#c7d2fe' : 'var(--text-secondary)',
                      fontWeight: link.highlight ? 600 : 400,
                      transition: 'color var(--transition-fast)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = link.highlight ? '#c7d2fe' : 'var(--text-secondary)')}
                  >
                    <span>{link.name}</span>
                    {link.highlight && (
                      <span
                        style={{
                          fontSize: '0.62rem',
                          background: 'var(--accent-primary-subtle)',
                          color: '#c7d2fe',
                          padding: '0.1rem 0.35rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(91, 101, 220, 0.3)'
                        }}
                      >
                        Policy
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact & Support Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.15rem' }}>Direct Reach</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.9rem' }}>
              Have inquiries, feedback, or need community support? Reach out directly to our team.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: '#c7d2fe', marginBottom: '1rem' }}>
              <Mail size={14} />
              <a href="mailto:team.glorzen@gmail.com" style={{ color: '#c7d2fe', textDecoration: 'none' }}>
                team.glorzen@gmail.com
              </a>
            </div>
            <a
              href="#suggestion"
              className="btn btn-secondary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
            >
              Submit Feedback
            </a>
          </div>
        </div>

        {/* Developer Spotlight Banner */}
        <div
          className="glass-card"
          style={{
            margin: '2rem 0 1.25rem',
            padding: '1.15rem 1.5rem',
            borderRadius: '16px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-regular)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Built by Giri Gabrelu</span>
              <span
                style={{
                  fontSize: '0.68rem',
                  padding: '0.12rem 0.45rem',
                  borderRadius: '9999px',
                  background: 'var(--accent-primary-subtle)',
                  color: '#c7d2fe',
                  border: '1px solid rgba(91, 101, 220, 0.3)',
                  fontWeight: 600
                }}
              >
                Creator
              </span>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.15rem' }}>
              Developer of Glorzen &bull; B.Tech Student
            </div>
          </div>

          <Link
            to="/developer"
            id="bottom-meet-developer-btn"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <Code2 size={15} />
            <span>Meet the Developer</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>© 2026 Glorzen. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <Link
              to="/privacy-policy"
              id="footer-bottom-privacy-link"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Privacy Policy
            </Link>
            <Link
              to="/developer"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Developer Profile
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
