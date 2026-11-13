import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Layers, Terminal, Code2, Compass, ArrowRight } from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'

/* Dedicated Social Button with exclusive subtle hover glows */
function SocialButton({ label, href, icon, title, external, glowClass }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={title}
      title={title}
      id={`dev-social-${label.toLowerCase()}`}
      className={glowClass}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '12px',
        cursor: 'pointer',
        textDecoration: 'none'
      }}
    >
      {icon}
    </a>
  )
}

/* Social Icons */
function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function DeveloperPage() {
  const roles = [
    { label: 'Developer of Glorzen', icon: <Code2 size={13} style={{ color: 'var(--accent-primary-light)' }} /> },
    { label: 'B.Tech Student', icon: <Layers size={13} style={{ color: 'var(--accent-rose)' }} /> },
  ]

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/girigabrelu',
      icon: <GitHubIcon />,
      title: 'View GitHub Profile',
      external: true,
      glowClass: 'social-link-github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/giri-gabrelu-850917380',
      icon: <LinkedInIcon />,
      title: 'View LinkedIn Profile',
      external: true,
      glowClass: 'social-link-linkedin'
    },
    {
      label: 'Email',
      href: 'mailto:girigabrelu04@gmail.com',
      icon: <EmailIcon />,
      title: 'Send Email to Giri Gabrelu',
      external: false,
      glowClass: 'social-link-email'
    },
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-dark)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Top Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(10, 13, 20, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '0.85rem 0',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Link
            to="/"
            id="dev-back-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.88rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)',
              padding: '0.4rem 0.8rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = 'var(--border-regular)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
            }}
          >
            <ArrowLeft size={15} />
            <span>Back to Glorzen</span>
          </Link>

          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
          >
            <img
              src={glorzenLogo}
              alt="Glorzen Logo"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                objectFit: 'cover',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              Glorzen
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          maxWidth: '740px',
          width: '100%',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Developer Identity Card */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem', width: '100%' }}>
          <div style={{ marginBottom: '0.85rem' }}>
            <span className="glass-pill" style={{ fontSize: '0.78rem', padding: '0.3rem 0.85rem' }}>
              <Terminal size={13} style={{ color: 'var(--accent-primary-light)' }} />
              <span>Developer Profile</span>
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              marginBottom: '0.6rem',
            }}
          >
            <span className="gradient-text">Giri Gabrelu</span>
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.55rem',
              justifyContent: 'center',
              marginTop: '0.85rem',
            }}
          >
            {roles.map(({ label, icon }) => (
              <span
                key={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                {icon}
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* About the Developer Card */}
        <div
          className="glass-card"
          style={{
            width: '100%',
            padding: '2.25rem',
            borderRadius: '20px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-regular)',
            marginBottom: '1.75rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              marginBottom: '0.85rem',
            }}
          >
            <Compass size={16} style={{ color: 'var(--accent-primary-light)' }} />
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              About the Developer
            </h2>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: '#cbd5e1',
              margin: 0,
            }}
          >
            Hi, I'm Giri Gabrelu — passionate about building expressive, meaningful digital platforms. I love turning human-centric concepts into clean, fluid, and intuitive user experiences. Glorzen is the primary product I am developing — uniting thoughtful frontend engineering, calm aesthetics, and authentic emotional expression into a unified sanctuary.
          </p>
        </div>

        {/* Glorzen Connection Card */}
        <div
          className="glass-card"
          style={{
            width: '100%',
            padding: '2.25rem',
            borderRadius: '20px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-accent)',
            marginBottom: '2.5rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '0.85rem',
            }}
          >
            <img
              src={glorzenLogo}
              alt="Glorzen"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '7px',
                objectFit: 'cover',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              Glorzen Platform
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '0.6rem',
              lineHeight: 1.3,
            }}
          >
            Where feelings become <span className="gradient-text">connections.</span>
          </h3>

          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
            }}
          >
            Glorzen was created to give genuine human emotions a home in modern digital media. Designed with care to empower authentic connections that truly matter without algorithmic clutter.
          </p>

          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#c7d2fe',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#c7d2fe')}
          >
            <span>Explore Glorzen Platform</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Contact Links with Special Subtle Glows (GitHub, LinkedIn, Email ONLY) */}
        <div style={{ textAlign: 'center', width: '100%' }}>
          <p
            style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.15rem',
            }}
          >
            Get in Touch
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {socials.map((social) => (
              <SocialButton key={social.label} {...social} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '1.75rem 1.5rem',
          textAlign: 'center',
          background: '#090c13',
        }}
      >
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
          © 2026 Glorzen &bull; Built with intention by Giri Gabrelu
        </p>
      </footer>
    </div>
  )
}
