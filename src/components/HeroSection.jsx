import React, { useState } from 'react'
import { Sparkles, Heart, MessageCircle, Share2, Compass, User, Bookmark, Flame, CheckCircle2, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(142)

  const handleLikeToggle = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        background: 'var(--hero-glow)'
      }}
    >
      {/* Background ambient radial glows */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="glass-pill">
            <Sparkles size={15} style={{ color: '#ec4899' }} />
            <span>Introducing Glorzen 2.0 &bull; Express &bull; Connect &bull; Belong</span>
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 1.5rem auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              fontWeight: 800
            }}
          >
            Share What You Feel.{' '}
            <span className="gradient-text">Connect With What Matters.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Glorzen is a social space built for thoughts, feelings, stories, and meaningful connections.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}
        >
          <a href="#feels" className="btn btn-primary" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
            Explore Glorzen
            <ArrowRight size={18} />
          </a>
          <a href="#features" className="btn btn-secondary" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
            Get Started
          </a>
        </div>

        {/* Hero Visual Mockup Component */}
        <div
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Main App Frame Mockup */}
          <div
            className="glass-card animate-float"
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '1.25rem',
              background: 'rgba(11, 15, 25, 0.85)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(99, 102, 241, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            {/* Mockup Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.25rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <img src="/glorzen-logo.png" alt="" style={{ width: '16px', height: '16px', borderRadius: '4px', objectFit: 'cover' }} />
                <span>glorzen.app &bull; Feels Feed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#64748b' }}>
                <Compass size={18} />
                <User size={18} />
              </div>
            </div>

            {/* Mockup Feed Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
                gap: '1.25rem'
              }}
              className="mockup-grid"
            >
              {/* Left Column: Sample Writing/Post */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#fff',
                        boxShadow: '0 2px 10px rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      AR
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>Aria Rivers</span>
                        <CheckCircle2 size={14} style={{ color: '#6366f1' }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>@aria_reflects &bull; 12m ago</span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: '#a5b4fc',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Flame size={12} /> Late Night Feel
                  </span>
                </div>

                {/* Post Content */}
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: '#e2e8f0',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    marginBottom: '1.25rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    borderLeft: '3px solid #6366f1'
                  }}
                >
                  “Sometimes the quietest conversations are the ones that change us the most. You don't need to shout to be understood by the right people.”
                </p>

                {/* Interactive Action Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <button
                      onClick={handleLikeToggle}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: liked ? '#ec4899' : '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'transform 0.15s ease'
                      }}
                    >
                      <Heart size={18} fill={liked ? '#ec4899' : 'none'} />
                      <span>{likeCount}</span>
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                      <MessageCircle size={18} />
                      <span>38 Comments</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Bookmark size={18} style={{ cursor: 'pointer' }} />
                    <Share2 size={18} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>

              {/* Right Column: Trending Connections & Conversations */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Active Conversations Widget */}
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    borderRadius: '16px',
                    padding: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Connections
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem 0.75rem', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>
                          LC
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f1f5f9' }}>Leo Chen</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Connected over "Quiet Mornings"</div>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, background: 'rgba(16, 185, 129, 0.15)', padding: '0.15rem 0.5rem', borderRadius: '10px' }}>Active</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem 0.75rem', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>
                          SK
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f1f5f9' }}>Siddharth K.</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Shared a new Feel</div>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#818cf8', fontWeight: 600 }}>2m ago</span>
                    </div>
                  </div>
                </div>

                {/* Explore Topics Widget */}
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    borderRadius: '16px',
                    padding: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Trending Mindspaces
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['#DeepThought', '#PoetryInMotion', '#GrowthMindset', '#Solitude'].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#cbd5e1',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mockup-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
