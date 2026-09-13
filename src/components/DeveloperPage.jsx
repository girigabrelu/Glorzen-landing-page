import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Layers, Terminal, Code2, Compass, ArrowRight } from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'
import developerPhoto from '../assets/developer-giri.jpg'

/* ─── Interactive Constellation & Node Canvas ─────────────────── */
function InteractiveConstellation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse coordinates
    let mouse = { x: width / 2, y: height / 3, isHovering: false }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.isHovering = true
    }

    const handleMouseLeave = () => {
      mouse.isHovering = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Generate ambient node particles
    const count = Math.min(48, Math.max(26, Math.floor((width * height) / 26000)))
    const colors = [
      'rgba(99, 102, 241, 0.75)',   // Indigo
      'rgba(236, 72, 153, 0.7)',    // Pink
      'rgba(139, 92, 246, 0.7)',    // Violet
      'rgba(56, 189, 248, 0.65)',   // Sky Blue
    ]

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      radius: Math.random() * 1.8 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Bounce gently off window borders
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Subtle mouse gravity / steering
        if (mouse.isHovering) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200 && dist > 0) {
            p.x += (dx / dist) * 0.3
            p.y += (dy / dist) * 0.3
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 6
        ctx.fill()
        ctx.shadowBlur = 0

        // Connect nearby particles with subtle ethereal lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.22
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`
            ctx.lineWidth = 0.85
            ctx.stroke()
          }
        }

        // Dynamic interactive connection to user's mouse
        if (mouse.isHovering) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.35
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(236, 72, 153, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

/* ─── Professional Developer Photo Avatar ─────────────────────── */
function DevAvatar() {
  return (
    <div
      style={{
        width: '144px',
        height: '144px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '144px',
          height: '144px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2.5px solid rgba(99, 102, 241, 0.5)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.55), 0 2px 10px rgba(0, 0, 0, 0.3)',
          background: 'rgba(15, 23, 42, 0.9)',
        }}
      >
        <img
          src={developerPhoto}
          alt="Giri Gabrelu - Developer of Glorzen"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            transform: 'scale(1.12)',
            transformOrigin: '50% 25%',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}

/* ─── Dedicated Social Button with Custom Hover Colors ───────── */
function SocialButton({ label, href, icon, title, external, hoverColor, hoverBg, hoverShadow }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={title}
      title={title}
      id={`dev-social-${label.toLowerCase()}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '54px',
        height: '54px',
        borderRadius: '50%',
        background: hovered ? hoverBg : 'rgba(255, 255, 255, 0.05)',
        border: `1.5px solid ${hovered ? hoverColor : 'rgba(255, 255, 255, 0.12)'}`,
        color: hovered ? hoverColor : '#94a3b8',
        boxShadow: hovered ? hoverShadow : '0 4px 12px rgba(0, 0, 0, 0.3)',
        transform: hovered ? 'translateY(-4px) scale(1.08)' : 'translateY(0) scale(1)',
        transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {icon}
    </a>
  )
}

/* ─── Social Icons ────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

/* ─── Main Developer Page Component ───────────────────────────── */
export default function DeveloperPage() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setMounted(true), 20)

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearTimeout(t)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const roles = [
    { label: 'Developer of Glorzen', icon: <Code2 size={13} style={{ color: '#818cf8' }} /> },
    { label: 'B.Tech Student',        icon: <Layers size={13} style={{ color: '#ec4899' }} /> },
  ]

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/girigabrelu',
      icon: <GitHubIcon />,
      title: 'View GitHub profile',
      external: true,
      hoverColor: '#ffffff',
      hoverBg: 'rgba(255, 255, 255, 0.18)',
      hoverShadow: '0 0 25px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.35)',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/giri-gabrelu-850917380',
      icon: <LinkedInIcon />,
      title: 'View LinkedIn profile',
      external: true,
      hoverColor: '#0077b5',
      hoverBg: 'rgba(0, 119, 181, 0.25)',
      hoverShadow: '0 0 28px rgba(0, 119, 181, 0.75), 0 0 14px rgba(0, 119, 181, 0.5)',
    },
    {
      label: 'Email',
      href: 'mailto:girigabrelu04@gmail.com',
      icon: <EmailIcon />,
      title: 'Send an email',
      external: false,
      hoverColor: '#ea4335',
      hoverBg: 'rgba(234, 67, 53, 0.25)',
      hoverShadow: '0 0 28px rgba(234, 67, 53, 0.75), 0 0 14px rgba(234, 67, 53, 0.5)',
    },
  ]

  const animStyle = (delay) => ({
    animation: mounted
      ? `devPageEnter 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
      : 'none',
    opacity: mounted ? undefined : 0,
  })

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#07090e',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* ── Layer 1: Ambient Drifting Light Orbs ── */}
      <div
        className="dev-blob-1"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '5%',
          left: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        className="dev-blob-2"
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '10%',
          right: '10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.11) 0%, transparent 70%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Layer 2: Subtle Cyber Blueprint Grid Mesh ── */}
      <div className="dev-grid-layer" aria-hidden="true" />

      {/* ── Layer 3: Interactive Dynamic Mouse Spotlight ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.04) 40%, transparent 75%)`,
        }}
      />

      {/* ── Layer 4: Interactive Floating Constellation Network Canvas ── */}
      <InteractiveConstellation />

      {/* ── Top Bar ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(7, 9, 14, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem 0',
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
              gap: '0.55rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#94a3b8',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)'
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
            }}
            aria-label="Back to Glorzen homepage"
          >
            <ArrowLeft size={16} />
            <span>Back to Glorzen</span>
          </Link>

          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
          >
            <img
              src={glorzenLogo}
              alt="Glorzen"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.35)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              Glorzen
            </span>
          </Link>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '780px',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Identity & Hero */}
        <section
          style={{
            textAlign: 'center',
            marginBottom: '2.75rem',
            width: '100%',
            ...animStyle(0.05),
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
            <DevAvatar />
          </div>

          <div style={{ marginBottom: '0.85rem' }}>
            <span
              className="glass-pill"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                padding: '0.35rem 1rem',
                background: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'rgba(99, 102, 241, 0.25)',
              }}
            >
              <Terminal size={12} style={{ color: '#818cf8' }} />
              &nbsp;Developer Profile
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 7.5vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '0.65rem',
            }}
          >
            <span className="gradient-text">Giri Gabrelu</span>
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              marginTop: '1.1rem',
            }}
          >
            {roles.map(({ label, icon }) => (
              <span key={label} className="dev-role-chip">
                {icon}&nbsp;{label}
              </span>
            ))}
          </div>
        </section>

        {/* About Card (Clean, without unrequested skills) */}
        <section style={{ width: '100%', marginBottom: '2.5rem', ...animStyle(0.25) }}>
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              borderRadius: '24px',
              background: 'rgba(15, 23, 42, 0.72)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <Compass size={16} style={{ color: '#818cf8' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#a5b4fc',
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
                fontSize: 'clamp(0.98rem, 2vw, 1.08rem)',
                lineHeight: 1.8,
                color: '#cbd5e1',
                fontWeight: 400,
                margin: 0,
              }}
            >
              Hi, I'm Giri Gabrelu — a B.Tech student and software developer passionate about building
              expressive, meaningful digital applications. I love taking bold concepts and turning them into
              clean, fluid, interactive user experiences. Glorzen is the primary product I am developing —
              combining modern engineering, elegant aesthetics, and authentic emotional expression into a unified platform.
            </p>
          </div>
        </section>

        {/* Glorzen Connection Card */}
        <section style={{ width: '100%', marginBottom: '3rem', ...animStyle(0.35) }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              background:
                'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.28)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}
            >
              <img
                src={glorzenLogo}
                alt="Glorzen"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  boxShadow: '0 0 14px rgba(99, 102, 241, 0.4)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#ffffff',
                }}
              >
                Glorzen Platform
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.2rem, 3.2vw, 1.45rem)',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}
            >
              Where feelings become <span className="gradient-text">connections.</span>
            </p>

            <p
              style={{
                fontSize: '0.97rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '1.5rem',
              }}
            >
              Glorzen was created to give genuine human emotions a home in modern digital media.
              Designed with care to empower authentic connections that truly matter.
            </p>

            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#a5b4fc',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a5b4fc')}
            >
              <span>Explore Glorzen Features</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Social / Connect with Dedicated Brand Hover Colors */}
        <section style={{ textAlign: 'center', width: '100%', ...animStyle(0.45) }}>
          <p
            style={{
              fontSize: '0.76rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#64748b',
              marginBottom: '1.25rem',
            }}
          >
            Get in Touch
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            {socials.map((social) => (
              <SocialButton key={social.label} {...social} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(255, 255, 255, 0.07)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          background: 'rgba(7, 9, 14, 0.9)',
        }}
      >
        <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>
          © 2026 Glorzen &bull; Built with passion by Giri Gabrelu
        </p>
      </footer>
    </div>
  )
}
