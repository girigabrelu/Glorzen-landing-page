import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Feels', href: '#feels' },
    { name: 'About', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Download', href: '#download', hasIcon: true }
  ]

  // Reusable Animated Download SVG Icon
  const renderDownloadIcon = (size = 17) => (
    <div className="premium-download-icon" style={{ width: `${size}px`, height: `${size}px` }}>
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
  )

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(7, 9, 14, 0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src={glorzenLogo}
            alt="Glorzen"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}
          >
            Glorzen
          </span>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: link.hasIcon ? 600 : 500,
                color: link.hasIcon ? '#c7d2fe' : '#94a3b8',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.hasIcon ? '#c7d2fe' : '#94a3b8')}
            >
              {link.hasIcon && renderDownloadIcon(16)}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
          <a href="#suggestion" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            Have an Idea?
          </a>
          <a
            href="#download"
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem'
            }}
          >
            {renderDownloadIcon(17)}
            <span>Download Beta</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '0.5rem',
            color: '#fff',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(9, 13, 22, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#e2e8f0',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              {link.hasIcon && renderDownloadIcon(18)}
              <span>{link.name}</span>
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', gap: '0.6rem' }}
            >
              {renderDownloadIcon(18)}
              <span>Download Beta</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
