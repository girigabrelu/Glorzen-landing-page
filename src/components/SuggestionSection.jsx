import React, { useState } from 'react'
import { Send, AlertCircle, Check, Copy, Mail, Lightbulb } from 'lucide-react'

export default function SuggestionSection() {
  const [suggestion, setSuggestion] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const recipientEmail = 'team.glorzen@gmail.com'

  const handleSendSuggestion = (e) => {
    e.preventDefault()

    const trimmed = suggestion.trim()
    if (!trimmed) {
      setErrorMessage('Write a suggestion first.')
      return
    }

    setErrorMessage('')

    // Predefined email body template
    const bodyTemplate = `Hello Glorzen Team,

I have a suggestion for Glorzen:

${trimmed}

Thank you,
Glorzen Community`

    const subject = 'Glorzen Website Suggestion'

    // Properly encode mailto URI parameters
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`

    // Trigger user default email client
    window.location.href = mailtoUrl

    // Reset suggestion input state after triggering client
    setSuggestion('')
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="suggestion" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: '3rem 2rem',
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
            <div className="glass-pill" style={{ marginBottom: '1rem' }}>
              <Lightbulb size={15} style={{ color: '#fbbf24' }} />
              <span>Community Feedback</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Have an Idea for <span className="gradient-text">Glorzen?</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              We're building Glorzen with the community. Have a feature idea, improvement, or suggestion? Tell us.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSendSuggestion} style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <textarea
                value={suggestion}
                onChange={(e) => {
                  setSuggestion(e.target.value)
                  if (errorMessage) setErrorMessage('')
                }}
                placeholder="Write your suggestion…"
                rows={4}
                style={{
                  width: '100%',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: errorMessage ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                  transition: 'border-color 0.2s ease'
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
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginTop: '0.5rem',
                    paddingLeft: '0.25rem'
                  }}
                >
                  <AlertCircle size={16} />
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
              {/* Fallback Email Copy Option */}
              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '0.65rem 1rem',
                  color: copied ? '#10b981' : '#94a3b8',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? <Check size={16} /> : <Mail size={16} />}
                <span>{copied ? 'Copied Email!' : `Direct: ${recipientEmail}`}</span>
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
              >
                Send Suggestion
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
