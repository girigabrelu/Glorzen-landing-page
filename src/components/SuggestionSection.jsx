import React, { useState } from 'react'
import { Send, AlertCircle, Check, Mail, Lightbulb } from 'lucide-react'

export default function SuggestionSection() {
  const [suggestion, setSuggestion] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const recipientEmail = 'team.glorzen@gmail.com'

  const handleSendSuggestion = (e) => {
    e.preventDefault()

    const trimmed = suggestion.trim()
    if (!trimmed) {
      setErrorMessage('Please write your suggestion before submitting.')
      return
    }

    setErrorMessage('')

    const bodyTemplate = `Hello Glorzen Team,\n\nI have a suggestion for Glorzen:\n\n${trimmed}\n\nThank you,\nGlorzen Community Member`
    const subject = 'Glorzen Platform Suggestion'
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`

    window.location.href = mailtoUrl
    setSuggestion('')
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="suggestion" className="section-spacing" style={{ position: 'relative', background: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            borderRadius: '20px',
            padding: '3rem 2rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-regular)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            <div className="glass-pill" style={{ marginBottom: '0.9rem' }}>
              <Lightbulb size={14} style={{ color: 'var(--accent-amber-light)' }} />
              <span>Community Feedback</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, marginBottom: '0.65rem' }}>
              Have an Idea for <span className="gradient-text">Glorzen?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We are building Glorzen alongside our community. Share feature ideas, aesthetic thoughts, or questions with our core team.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSendSuggestion} style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
              <textarea
                value={suggestion}
                onChange={(e) => {
                  setSuggestion(e.target.value)
                  if (errorMessage) setErrorMessage('')
                }}
                placeholder="What would make Glorzen more meaningful to you?..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: errorMessage ? '1px solid #ef4444' : '1px solid var(--border-regular)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color var(--transition-fast)'
                }}
              />

              {/* Inline Error Message */}
              {errorMessage && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#f87171',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    marginTop: '0.45rem',
                    paddingLeft: '0.2rem'
                  }}
                >
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-regular)',
                  borderRadius: '10px',
                  padding: '0.6rem 0.95rem',
                  color: copied ? '#10b981' : 'var(--text-secondary)',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {copied ? <Check size={15} /> : <Mail size={15} />}
                <span>{copied ? 'Copied to clipboard' : `Copy: ${recipientEmail}`}</span>
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Send Suggestion</span>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
