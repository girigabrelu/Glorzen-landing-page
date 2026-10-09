import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Shield,
  FileText,
  Database,
  Cpu,
  UserCheck,
  Cloud,
  Bell,
  Lock,
  Trash2,
  AlertCircle,
  RefreshCw,
  Mail,
  Copy,
  Check,
  ChevronRight,
  ArrowUp
} from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'

export default function PrivacyPolicyPage() {
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('section-1')

  useEffect(() => {
    document.title = 'Privacy Policy — Glorzen'
    window.scrollTo(0, 0)
  }, [])

  // Track active section for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'section-1',
        'section-2',
        'section-3',
        'section-4',
        'section-5',
        'section-6',
        'section-7',
        'section-8',
        'section-9',
        'section-10',
        'section-11'
      ]

      const scrollPos = window.scrollY + 200
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('team.glorzen@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'section-1', label: '1. Introduction', icon: Shield },
    { id: 'section-2', label: '2. Information We Collect', icon: Database },
    { id: 'section-3', label: '3. How We Use Information', icon: Cpu },
    { id: 'section-4', label: '4. User Content', icon: UserCheck },
    { id: 'section-5', label: '5. Firebase and Cloud Services', icon: Cloud },
    { id: 'section-6', label: '6. Notifications', icon: Bell },
    { id: 'section-7', label: '7. Data Security', icon: Lock },
    { id: 'section-8', label: '8. Account Deletion', icon: Trash2 },
    { id: 'section-9', label: '9. Children\'s Privacy', icon: AlertCircle },
    { id: 'section-10', label: '10. Changes to This Policy', icon: RefreshCw },
    { id: 'section-11', label: '11. Contact Us', icon: Mail }
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#07090e',
        color: '#f8fafc',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '-150px',
          right: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Sticky Top Navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(7, 9, 14, 0.9)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.9rem 0'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand & Home Link */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
          >
            <img
              src={glorzenLogo}
              alt="Glorzen"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                objectFit: 'cover',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}
            >
              Glorzen
            </span>
          </Link>

          {/* Quick Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              className="badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                fontSize: '0.72rem'
              }}
            >
              <FileText size={12} />
              <span>Native Legal Document</span>
            </span>

            <Link
              to="/"
              id="privacy-back-home-btn"
              className="btn btn-secondary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ position: 'relative', zIndex: 1, padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          {/* Breadcrumb / Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: '#94a3b8',
              marginBottom: '1.5rem'
            }}
          >
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#c7d2fe', fontWeight: 500 }}>Privacy Policy</span>
          </div>

          {/* Hero Header Card */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(20, 27, 45, 0.9) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45), 0 0 30px rgba(99, 102, 241, 0.1)',
              marginBottom: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '320px',
                height: '100%',
                background: 'radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.18), transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(99, 102, 241, 0.18)',
                    color: '#a5b4fc',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  <Shield size={13} style={{ color: '#818cf8' }} />
                  Official Policy
                </span>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  11 Numbered Sections &bull; Native Legal Document
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '1rem',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em'
                }}
              >
                Privacy Policy
              </h1>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}
              >
                <span style={{ color: '#818cf8', fontWeight: 700 }}>Last updated</span>
                <span>August 07, 2026</span>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                This is the native legal privacy document for the Glorzen platform and mobile applications. Below are the 11 complete sections outlining our data handling, cloud services, and user rights.
              </p>
            </div>
          </div>

          {/* Quick Jump Mobile Navigation (Horizontal Scrollable Pills) */}
          <div
            className="mobile-toc-bar"
            style={{
              marginBottom: '2rem',
              display: 'none',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              whiteSpace: 'nowrap',
              gap: '0.5rem'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  background: activeSection === item.id ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeSection === item.id ? '#ffffff' : '#94a3b8',
                  border: `1px solid ${activeSection === item.id ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Layout Grid: Desktop TOC Sidebar + Content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '2.5rem',
              alignItems: 'start'
            }}
            className="privacy-layout-grid"
          >
            {/* Desktop Table of Contents Sidebar */}
            <aside
              className="privacy-sidebar"
              style={{
                position: 'sticky',
                top: '90px',
                background: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#818cf8',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Table of Contents</span>
                <span
                  style={{
                    background: 'rgba(99, 102, 241, 0.15)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem'
                  }}
                >
                  11
                </span>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        padding: '0.6rem 0.75rem',
                        borderRadius: '10px',
                        background: isActive ? 'rgba(99, 102, 241, 0.18)' : 'transparent',
                        border: `1px solid ${isActive ? 'rgba(99, 102, 241, 0.35)' : 'transparent'}`,
                        color: isActive ? '#ffffff' : '#94a3b8',
                        fontSize: '0.82rem',
                        fontWeight: isActive ? 600 : 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.18s ease',
                        width: '100%'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#e2e8f0'
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#94a3b8'
                          e.currentTarget.style.background = 'transparent'
                        }
                      }}
                    >
                      <Icon
                        size={14}
                        style={{
                          color: isActive ? '#818cf8' : '#64748b',
                          flexShrink: 0
                        }}
                      />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </nav>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.6rem' }}>
                  Have questions?
                </div>
                <a
                  href="mailto:team.glorzen@gmail.com"
                  style={{
                    fontSize: '0.8rem',
                    color: '#818cf8',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontWeight: 600
                  }}
                >
                  <Mail size={13} />
                  <span>team.glorzen@gmail.com</span>
                </a>
              </div>
            </aside>

            {/* Privacy Policy 11 Sections Stream */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

              {/* 1. Introduction */}
              <article
                id="section-1"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px',
                  transition: 'border-color 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818cf8',
                      flexShrink: 0
                    }}
                  >
                    <Shield size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    1. Introduction
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  Glorzen respects user privacy and aims to protect personal information. We are committed to transparency in how we handle your data and ensuring your experience remains secure and private.
                </p>
              </article>

              {/* 2. Information We Collect */}
              <article
                id="section-2"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      flexShrink: 0
                    }}
                  >
                    <Database size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    2. Information We Collect
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    marginBottom: '1.25rem'
                  }}
                >
                  We collect only the necessary data required to provide a seamless social experience:
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  {[
                    'Account information (Email, UID)',
                    'Username and Display Name',
                    'Profile images and Bio',
                    'Content users choose to post (Feels)',
                    'Social graph (Followers/Following)',
                    'Interactions (Likes, Comments, Moods)',
                    'Device tokens for push notifications (where enabled)'
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.75rem',
                        fontSize: '0.98rem',
                        lineHeight: 1.6,
                        color: '#cbd5e1'
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#38bdf8',
                          boxShadow: '0 0 8px #38bdf8',
                          flexShrink: 0,
                          transform: 'translateY(-2px)'
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* 3. How We Use Information */}
              <article
                id="section-3"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a78bfa',
                      flexShrink: 0
                    }}
                  >
                    <Cpu size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    3. How We Use Information
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    marginBottom: '1.25rem'
                  }}
                >
                  Your information is utilized strictly to facilitate core social functionality, authenticate your account, and enable real-time interactions.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  {[
                    'Facilitate core social functionality',
                    'Authenticate and secure your account',
                    'Enable real-time interactions and notifications',
                    'Prevent abuse and maintain platform security',
                    'Continuously improve app features and stability'
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.75rem',
                        fontSize: '0.98rem',
                        lineHeight: 1.6,
                        color: '#cbd5e1'
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#a78bfa',
                          boxShadow: '0 0 8px #a78bfa',
                          flexShrink: 0,
                          transform: 'translateY(-2px)'
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* 4. User Content */}
              <article
                id="section-4"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(236, 72, 153, 0.15)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f472b6',
                      flexShrink: 0
                    }}
                  >
                    <UserCheck size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    4. User Content
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  Users maintain full control over the content they share. While Glorzen supports anonymity features, you are encouraged to avoid sharing highly sensitive or private information in public spaces.
                </p>
              </article>

              {/* 5. Firebase and Cloud Services */}
              <article
                id="section-5"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fbbf24',
                      flexShrink: 0
                    }}
                  >
                    <Cloud size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    5. Firebase and Cloud Services
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  Glorzen leverages industry-standard Firebase infrastructure for authentication, database storage, and file hosting. All data is handled according to Google's rigorous security standards.
                </p>
              </article>

              {/* 6. Notifications */}
              <article
                id="section-6"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818cf8',
                      flexShrink: 0
                    }}
                  >
                    <Bell size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    6. Notifications
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  You may choose to receive notifications for activity related to your account. These can be toggled at any time within the app settings.
                </p>
              </article>

              {/* 7. Data Security */}
              <article
                id="section-7"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#34d399',
                      flexShrink: 0
                    }}
                  >
                    <Lock size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    7. Data Security
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  We implement robust technical and organizational measures to safeguard your data. However, please note that no method of electronic transmission or storage is 100% secure.
                </p>
              </article>

              {/* 8. Account Deletion */}
              <article
                id="section-8"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f87171',
                      flexShrink: 0
                    }}
                  >
                    <Trash2 size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    8. Account Deletion
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  You have the right to delete your account and associated data at any time. This process can be initiated directly from the Settings menu within the application.
                </p>
              </article>

              {/* 9. Children's Privacy */}
              <article
                id="section-9"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fbbf24',
                      flexShrink: 0
                    }}
                  >
                    <AlertCircle size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    9. Children's Privacy
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  Glorzen is not intended for users under the age of 13. We do not knowingly collect personal information from individuals in this age group.
                </p>
              </article>

              {/* 10. Changes to This Policy */}
              <article
                id="section-10"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      flexShrink: 0
                    }}
                  >
                    <RefreshCw size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    10. Changes to This Policy
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    margin: 0
                  }}
                >
                  This Privacy Policy may be updated periodically. Significant changes will be communicated within the app, and the latest version will always be accessible here.
                </p>
              </article>

              {/* 11. Contact Us */}
              <article
                id="section-11"
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(20, 30, 55, 0.85) 100%)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                  scrollMarginTop: '100px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.2)',
                      border: '1px solid rgba(99, 102, 241, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818cf8',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={19} />
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    11. Contact Us
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#cbd5e1',
                    marginBottom: '1.5rem'
                  }}
                >
                  If you have any questions regarding this policy, please reach out to our support team.
                </p>

                {/* Dedicated Interactive Email Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(99, 102, 241, 0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a5b4fc'
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Official Support Email
                      </div>
                      <a
                        href="mailto:team.glorzen@gmail.com"
                        id="privacy-contact-email-link"
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#818cf8',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#c7d2fe')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#818cf8')}
                      >
                        team.glorzen@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={copyEmail}
                      id="privacy-copy-email-btn"
                      className="btn btn-secondary"
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.82rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                      <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                    </button>
                    <a
                      href="mailto:team.glorzen@gmail.com"
                      className="btn btn-primary"
                      style={{
                        padding: '0.55rem 1.2rem',
                        fontSize: '0.82rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        textDecoration: 'none'
                      }}
                    >
                      <Mail size={14} />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Back to Top Quick Action */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem' }}>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.82rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <ArrowUp size={14} />
                  <span>Back to top</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* FOOTER CONTENT AS SPECIFIED */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(7, 9, 14, 0.96)',
          padding: '3.5rem 0 2.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div className="container" style={{ maxWidth: '1180px', textAlign: 'center' }}>
          {/* Exact Required Footer Block */}
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: '2rem 1.5rem',
              borderRadius: '20px',
              background: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem'
              }}
            >
              GLORZEN
            </div>

            <div
              style={{
                fontSize: '0.95rem',
                color: '#818cf8',
                fontWeight: 600,
                marginBottom: '0.6rem',
                letterSpacing: '0.02em'
              }}
            >
              Privacy & Safety • Native Legal Document
            </div>

            <div
              style={{
                fontSize: '0.85rem',
                color: '#94a3b8'
              }}
            >
              Last updated August 07, 2026
            </div>
          </div>

          {/* Navigation Links in Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '2rem',
              fontSize: '0.85rem',
              color: '#64748b'
            }}
          >
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Home
            </Link>
            <span>&bull;</span>
            <Link to="/developer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Meet the Developer
            </Link>
            <span>&bull;</span>
            <a href="mailto:team.glorzen@gmail.com" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              team.glorzen@gmail.com
            </a>
            <span>&bull;</span>
            <span>© 2026 Glorzen. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Responsive Styles for Sidebar & Layout */}
      <style>{`
        @media (max-width: 900px) {
          .privacy-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .privacy-sidebar {
            display: none !important;
          }
          .mobile-toc-bar {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  )
}
