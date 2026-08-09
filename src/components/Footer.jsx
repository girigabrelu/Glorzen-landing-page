import React from 'react'
import { Sparkles, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Feels Showcase', href: '#feels' },
    { name: 'About Us', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Privacy Policy', href: '#about' },
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
                src="/glorzen-logo.png"
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
              {footerLinks.map((link) => (
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
              ))}
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

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
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
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
