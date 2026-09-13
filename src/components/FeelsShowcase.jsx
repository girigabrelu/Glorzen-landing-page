import React, { useState } from 'react'
import { Heart, MessageCircle, Share2, Feather, Send, Check } from 'lucide-react'

export default function FeelsShowcase() {
  const initialFeels = [
    {
      id: 1,
      author: 'Julian Vance',
      handle: '@julian_v',
      avatar: 'JV',
      avatarGradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
      content: 'Some thoughts don\'t need an answer. They just need somewhere to exist.',
      tag: '💭 Solitude',
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
      avatarGradient: 'linear-gradient(135deg, #ec4899, #a855f7)',
      content: 'Maybe growing up is learning that not every goodbye needs an explanation.',
      tag: '💡 Perspective',
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
      avatarGradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      content: 'Finding peace isn\'t about escaping the noise; it\'s about making peace with the silence within.',
      tag: '🌌 Late Night',
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
    <section id="feels" className="section-spacing" style={{ position: 'relative', background: 'rgba(11, 15, 25, 0.4)' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill" style={{ marginBottom: '1rem' }}>
            <Feather size={14} style={{ color: '#ec4899' }} />
            <span>The Core of Glorzen</span>
          </div>
          <h2>
            Say What You Can’t <span className="gradient-text">Always Say Out Loud.</span>
          </h2>
          <p>
            Feels gives you a place to put your thoughts into words, share your perspective, and connect with people who understand.
          </p>
        </div>

        {/* Feels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
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
                borderRadius: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(15, 23, 42, 0.75)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
            >
              <div>
                {/* Author Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: item.avatarGradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                      }}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>{item.author}</h4>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.handle} &bull; {item.time}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#c7d2fe',
                      background: 'rgba(99, 102, 241, 0.12)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(99, 102, 241, 0.25)'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Feels Quote Content */}
                <div
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: '#e2e8f0',
                    fontStyle: 'italic',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    borderLeft: '4px solid #ec4899',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  « “{item.content}” »
                </div>
              </div>

              {/* Action Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <button
                    onClick={() => toggleLike(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: item.isLiked ? '#ec4899' : '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                    aria-label="Like this feel"
                  >
                    <Heart size={19} fill={item.isLiked ? '#ec4899' : 'none'} />
                    <span>{item.likes}</span>
                  </button>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#94a3b8',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    <MessageCircle size={19} />
                    <span>{item.comments}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleShare(item.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.65rem',
                    color: copiedId === item.id ? '#10b981' : '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} />
                      <span>Share</span>
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
