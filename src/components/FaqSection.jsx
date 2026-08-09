import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is Glorzen?',
      answer: 'Glorzen is a modern social platform focused on self-expression. It gives people a dedicated space for sharing thoughts, feelings, writings, and building genuine social connections without the clutter of traditional feeds.'
    },
    {
      question: 'What are Feels?',
      answer: 'Feels is Glorzen’s signature post format designed specifically for sharing thoughts, short prose, emotions, and personal reflections. Feels allow you to tag mood tones and connect with others on a deeper emotional wavelength.'
    },
    {
      question: 'Can I follow people?',
      answer: 'Yes! Glorzen allows you to discover interesting minds, follow their profile, and stay updated with their latest Feels in your customized home feed.'
    },
    {
      question: 'Can I communicate with other users?',
      answer: 'Yes, Glorzen features built-in direct messaging and comment interactions designed for calm, respectful, and natural communication.'
    },
    {
      question: 'Is Glorzen free?',
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
          <div className="glass-pill" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} style={{ color: '#818cf8' }} />
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
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isOpen ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0.5)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: '#f8fafc',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#ec4899' : '#94a3b8'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: '#94a3b8',
                      fontSize: '0.98rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '1rem'
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
