import React, { useState } from 'react'
import { Layout, User, Users, MessageSquare, Sparkles, CheckCircle2, Heart, Search, Send, Flame } from 'lucide-react'

export default function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState('feels')

  const tabs = [
    { id: 'feels', label: 'Feels Feed', icon: Layout },
    { id: 'profile', label: 'Profile Space', icon: User },
    { id: 'discover', label: 'People Discovery', icon: Users },
    { id: 'chat', label: 'Direct Chat', icon: MessageSquare }
  ]

  return (
    <section className="section-spacing" style={{ position: 'relative', background: 'rgba(7, 9, 14, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Product Showcase</span>
          <h2>
            Designed <span className="gradient-text">Around You.</span>
          </h2>
          <p>
            Explore the clean, distraction-free interface engineered for human reflection and intuitive connection.
          </p>
        </div>

        {/* Tab Switcher Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
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
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive
                    ? '1px solid rgba(99, 102, 241, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(236, 72, 153, 0.15))'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  boxShadow: isActive ? '0 4px 20px rgba(99, 102, 241, 0.2)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <IconComp size={18} style={{ color: isActive ? '#ec4899' : '#94a3b8' }} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content Display Window */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            background: 'rgba(11, 15, 25, 0.9)',
            minHeight: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {activeTab === 'feels' && (
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>Latest Feels Feed</h4>
                <span className="badge">Updated Live</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#6366f1', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>MA</div>
                    <span style={{ fontWeight: 600, color: '#f1f5f9' }}>Marcus Aurelius Fan</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>@marcus_reflections</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '1rem' }}>
                    "You have power over your mind - not outside events. Realize this, and you will find strength."
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ec4899', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>NL</div>
                    <span style={{ fontWeight: 600, color: '#f1f5f9' }}>Nina Lin</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>@nina_words</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '1rem' }}>
                    "The night sky doesn't explain itself to the stars; it just holds them."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <img
                src="/glorzen-logo.png"
                alt="Glorzen Profile"
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  margin: '0 auto 1rem auto',
                  display: 'block',
                  boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.25rem' }}>
                Your Custom Profile
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                @creator_mindset &bull; Writer, Thinker & Dreamer
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>128</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Feels Shared</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>1.4k</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Connections</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>98%</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Resonance</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'discover' && (
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.75rem 1.25rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '1.5rem' }}>
                <Search size={18} style={{ color: '#94a3b8' }} />
                <input
                  type="text"
                  placeholder="Discover people sharing thoughts on philosophy, art, growth..."
                  readOnly
                  style={{ background: 'none', border: 'none', color: '#e2e8f0', width: '100%', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {[
                  { name: 'Dr. Sophia Vance', bio: 'Cognitive Science & Reflection', followers: '840' },
                  { name: 'Liam O\'Connor', bio: 'Poetry & Late Night Thoughts', followers: '1.2k' },
                  { name: 'Amara Chen', bio: 'Minimalist Design & Life', followers: '950' }
                ].map((user, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0.25rem 0 0.75rem 0' }}>{user.bio}</div>
                    <button className="btn btn-secondary" style={{ width: '100%', padding: '0.4rem', fontSize: '0.8rem' }}>
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div style={{ width: '100%', maxWidth: '700px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                  SC
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Sarah Connor</div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Online now</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.06)', padding: '0.75rem 1rem', borderRadius: '16px 16px 16px 4px', maxWidth: '80%', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  I really resonated with your Feel about finding quiet moments in chaotic days.
                </div>
                <div style={{ alignSelf: 'flex-end', background: 'var(--brand-gradient)', padding: '0.75rem 1rem', borderRadius: '16px 16px 4px 16px', maxWidth: '80%', fontSize: '0.9rem', color: '#fff' }}>
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
