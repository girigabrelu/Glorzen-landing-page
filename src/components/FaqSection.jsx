import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is Glorzen?',
      answer: 'Glorzen is a modern social platform focused on self-expression. It gives people a dedicated, calm space for sharing thoughts, feelings, writings, and building genuine human connections without the distraction of algorithmic feeds.'
    },
    {
      question: 'What are Feels?',
      answer: 'Feels is Glorzen’s signature post format designed specifically for sharing thoughts, short prose, emotions, and personal reflections. Feels allow you to tag mood tones and connect with others on a deeper emotional wavelength.'
    },
    {
      question: 'Can I follow people?',
      answer: 'Yes. Glorzen allows you to discover interesting writers and minds, follow their profiles, and stay updated with their latest Feels in your chronological home feed.'
    },
    {
      question: 'Can I communicate with other users?',
      answer: 'Yes, Glorzen features built-in direct messaging and comment interactions designed for calm, respectful, and natural communication with your circle.'
    },
    {
      question: 'Is Glorzen free to use?',
      answer: 'Yes, Glorzen is 100% free for individual users to create an account, customize their profile, publish Feels, and connect with the community.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill" style={{ marginBottom: '0.9rem' }}>
            <HelpCircle size={14} style={{ color: 'var(--accent-primary-light)' }} />
            <span>Got Questions?</span>
          </div>
          <h2>
            Frequently Asked <span className="gradient-text">Questions.</span>
          </h2>
          <p>
            Everything you need to know about Glorzen, Feels, and how to get started.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid var(--border-hover)' : '1px solid var(--border-subtle)',
                  background: isOpen ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                  transition: 'background var(--transition-fast), border-color var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--accent-primary-light)' : 'var(--text-muted)',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }}
                  >
                    <ChevronDown size={19} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.4rem 1.25rem 1.4rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.9rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
