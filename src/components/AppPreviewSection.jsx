import React, { useState } from 'react'
import { Layout, User, Users, MessageSquare, Search, Heart, Send } from 'lucide-react'
import glorzenLogo from '../assets/glorzen-logo.png'

export default function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState('feels')

  const tabs = [
    { id: 'feels', label: 'Feels Feed', icon: Layout },
    { id: 'profile', label: 'Profile Space', icon: User },
    { id: 'discover', label: 'People Discovery', icon: Users },
    { id: 'chat', label: 'Direct Chat', icon: MessageSquare }
  ]

  return (
    <section className="section-spacing" style={{ position: 'relative', background: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Interface Preview</span>
          <h2>
            Designed <span className="gradient-text">Around You.</span>
          </h2>
          <p>
            Explore the calm, distraction-free interface engineered for human reflection and intentional connection.
          </p>
        </div>

        {/* Tab Switcher Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap'
          }}
        >
          {tabs.map((tab) => {
            const IconComp = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.3rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid var(--border-subtle)',
                  background: isActive
                    ? 'var(--bg-surface-elevated)'
                    : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <IconComp size={16} style={{ color: isActive ? 'var(--accent-rose)' : 'inherit' }} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content Display Window */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            borderRadius: '20px',
            padding: '2rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-regular)',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* TAB 1: FEELS FEED */}
          {activeTab === 'feels' && (
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Your Home Feed</h4>
                <span className="badge" style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem' }}>Curated Chronologically</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#312e81', color: '#c7d2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.78rem' }}>MA</div>
                      <div>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>Marcus Aurelius Fan</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>@marcus_reflections</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>24m ago</span>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.55 }}>
                    "You have power over your mind - not outside events. Realize this, and you will find inner peace."
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#831843', color: '#fbcfe8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.78rem' }}>NL</div>
                      <div>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>Nina Lin</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>@nina_words</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>2h ago</span>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.55 }}>
                    "The night sky doesn't explain itself to the stars; it simply creates a calm place for them to shine."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE SPACE */}
          {activeTab === 'profile' && (
            <div style={{ width: '100%', maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
              <img
                src={glorzenLogo}
                alt="Glorzen Profile Preview"
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '18px',
                  objectFit: 'cover',
                  margin: '0 auto 1rem auto',
                  display: 'block',
                  border: '1px solid var(--border-regular)'
                }}
              />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                Your Custom Profile
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                @creator_mindset &bull; Writer, Thinker & Dreamer
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.9rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>128</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Feels Shared</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>1.4k</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Connections</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>98%</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Resonance</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DISCOVERY */}
          {activeTab === 'discover' && (
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.7rem 1.15rem', borderRadius: '12px', border: '1px solid var(--border-regular)', marginBottom: '1.25rem' }}>
                <Search size={17} style={{ color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Discover writers sharing thoughts on philosophy, literature, personal growth..."
                  readOnly
                  style={{ background: 'none', border: 'none', color: '#e2e8f0', width: '100%', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.85rem' }}>
                {[
                  { name: 'Dr. Sophia Vance', bio: 'Cognitive Science & Reflection', followers: '840' },
                  { name: 'Liam O\'Connor', bio: 'Poetry & Late Night Thoughts', followers: '1.2k' },
                  { name: 'Amara Chen', bio: 'Minimalist Life & Architecture', followers: '950' }
                ].map((user, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0.75rem 0' }}>{user.bio}</div>
                    <button className="btn btn-secondary" style={{ width: '100%', padding: '0.4rem', fontSize: '0.8rem', borderRadius: '8px' }}>
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CHAT */}
          {activeTab === 'chat' && (
            <div style={{ width: '100%', maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#064e3b', color: '#a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>
                  SC
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>Sarah Connor</div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Active in circle</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.05)', padding: '0.75rem 1rem', borderRadius: '14px 14px 14px 4px', maxWidth: '82%', fontSize: '0.88rem', color: '#e2e8f0', border: '1px solid var(--border-subtle)' }}>
                  I really resonated with your Feel about finding quiet moments in chaotic days.
                </div>
                <div style={{ alignSelf: 'flex-end', background: 'var(--accent-primary)', padding: '0.75rem 1rem', borderRadius: '14px 14px 4px 14px', maxWidth: '82%', fontSize: '0.88rem', color: '#ffffff' }}>
                  Thank you! That means a lot. It took me a long time to learn to appreciate the pause.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
