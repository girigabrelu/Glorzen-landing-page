import React, { useState } from 'react'
import { Heart, MessageCircle, Share2, Feather, Check } from 'lucide-react'

export default function FeelsShowcase() {
  const initialFeels = [
    {
      id: 1,
      author: 'Julian Vance',
      handle: '@julian_v',
      avatar: 'JV',
      avatarBg: '#312e81',
      avatarColor: '#c7d2fe',
      content: 'Some thoughts don\'t need an answer. They just need somewhere to exist without being judged.',
      tag: 'Solitude',
      time: '18m ago',
      likes: 284,
      comments: 42,
      isLiked: false
    },
    {
      id: 2,
      author: 'Elena Rostova',
      handle: '@elena_r',
      avatar: 'ER',
      avatarBg: '#831843',
      avatarColor: '#fbcfe8',
      content: 'Maybe growing up is simply learning that not every goodbye needs a dramatic explanation.',
      tag: 'Perspective',
      time: '1h ago',
      likes: 512,
      comments: 89,
      isLiked: false
    },
    {
      id: 3,
      author: 'Kaelen Thorne',
      handle: '@kaelen_t',
      avatar: 'KT',
      avatarBg: '#064e3b',
      avatarColor: '#a7f3d0',
      content: 'Finding peace isn\'t about escaping external noise; it\'s about making peace with the silence within.',
      tag: 'Late Night',
      time: '3h ago',
      likes: 391,
      comments: 64,
      isLiked: false
    }
  ]

  const [feelsList, setFeelsList] = useState(initialFeels)
  const [copiedId, setCopiedId] = useState(null)

  const toggleLike = (id) => {
    setFeelsList(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isLiked: !item.isLiked,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1
          }
        }
        return item
      })
    )
  }

  const handleShare = (id) => {
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section id="feels" className="section-spacing" style={{ position: 'relative', background: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill" style={{ marginBottom: '0.9rem' }}>
            <Feather size={14} style={{ color: 'var(--accent-rose)' }} />
            <span>The Signature Format</span>
          </div>
          <h2>
            Say What You Can’t <span className="gradient-text">Always Say Out Loud.</span>
          </h2>
          <p>
            Feels gives you a quiet canvas to put your thoughts into words, share your perspective, and connect with people who truly understand.
          </p>
        </div>

        {/* Feels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {feelsList.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Author Info Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: item.avatarBg,
                        color: item.avatarColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.author}</h4>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.handle} &bull; {item.time}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    #{item.tag}
                  </span>
                </div>

                {/* Feel Content Quote */}
                <p
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.65,
                    color: '#e2e8f0',
                    fontStyle: 'normal',
                    marginBottom: '1.5rem',
                    minHeight: '68px'
                  }}
                >
                  "{item.content}"
                </p>
              </div>

              {/* Action Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                  fontSize: '0.84rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <button
                    onClick={() => toggleLike(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'none',
                      border: 'none',
                      color: item.isLiked ? 'var(--accent-rose)' : 'inherit',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      transition: 'color var(--transition-fast)'
                    }}
                    aria-label="Like this Feel"
                  >
                    <Heart
                      size={16}
                      fill={item.isLiked ? 'currentColor' : 'none'}
                      style={{ transition: 'transform 0.15s ease' }}
                    />
                    <span>{item.likes}</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MessageCircle size={16} />
                    <span>{item.comments}</span>
                  </div>
                </div>

                {/* Share Button */}
                <button
                  onClick={() => handleShare(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'none',
                    border: 'none',
                    color: copiedId === item.id ? '#10b981' : 'inherit',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    transition: 'color var(--transition-fast)'
                  }}
                  title="Share Feel"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={15} />
                      <span style={{ fontSize: '0.78rem' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={15} />
                      <span style={{ fontSize: '0.78rem' }}>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
