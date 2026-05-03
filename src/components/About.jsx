import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { personal, education, about, journey } from '../data/portfolio'

const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(32px, 5vw, 80px)' }

function InstitutionLogo({ domain, name, color, size = 48 }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div style={{ width: size, height: size, borderRadius: '0.75rem', background: `${color}20`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.38, fontWeight: 800, flexShrink: 0, border: `1px solid ${color}30`, fontFamily: 'Cabinet Grotesk, sans-serif' }}>
        {name}
      </div>
    )
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, borderRadius: '0.75rem', objectFit: 'contain', background: '#fff', padding: '6px', flexShrink: 0 }}
    />
  )
}

export default function About() {
  const headingLead = about.heading.replace('Data & AI', '').trim()

  return (
    <section id="about" style={{ padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '-6%', backgroundImage: "url('/professional-porfolio/assets/globe-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center center', opacity: 0.34, pointerEvents: 'none', transform: 'scale(1.1)', filter: 'brightness(0.94) contrast(1.03) saturate(0.96)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.64) 0%, rgba(10,10,10,0.18) 22%, rgba(10,10,10,0.18) 78%, rgba(10,10,10,0.68) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.04), rgba(10,10,10,0.1) 35%, rgba(10,10,10,0.04))', pointerEvents: 'none' }} />

      <div style={wrap}>
        <FadeIn>
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>01 - About</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.1, marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.14)' }}>
            {headingLead} <span style={{ color: 'var(--accent)' }}>Data & AI</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ color: '#d5d9e0', fontSize: '1.05rem', lineHeight: 1.85, textAlign: 'center', maxWidth: '700px', margin: '0 auto 4.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            {about.intro}
          </p>
        </FadeIn>

        <div style={{ position: 'relative', marginBottom: '4.5rem' }}>
          <div className="hidden lg:block" style={{ position: 'absolute', top: '2.25rem', left: '5%', right: '5%', height: '1px', background: 'linear-gradient(to right, transparent, var(--accent) 10%, var(--accent) 90%, transparent)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            {journey.map((step, index) => (
              <FadeIn key={`${step.year}-${step.title}`} delay={index * 0.09}>
                <motion.div
                  whileHover={{ y: -6, borderColor: 'rgba(var(--accent-rgb), 0.4)' }}
                  transition={{ duration: 0.2 }}
                  style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '1.75rem 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', transition: 'border-color 0.2s' }}
                >
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '2px solid var(--accent)', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.875rem', flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <span style={{ color: 'var(--accent)', fontSize: '0.7rem', fontFamily: 'monospace', marginBottom: '0.3rem' }}>{step.year}</span>
                  <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem', lineHeight: 1.2 }}>{step.title}</p>
                  <p style={{ color: '#4b5563', fontSize: '0.72rem', marginBottom: '0.75rem' }}>{step.where}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.72rem', lineHeight: 1.65 }}>{step.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.05}>
          <p style={{ color: '#4b5563', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.75rem' }}>Academic Path</p>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
          {education.map((edu, index) => (
            <FadeIn key={edu.degree} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, borderColor: `${edu.color}35` }}
                transition={{ duration: 0.2 }}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', borderRadius: '50%', background: edu.color, filter: 'blur(60px)', opacity: 0.04, pointerEvents: 'none' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <InstitutionLogo domain={edu.domain} name={edu.shortName} color={edu.color} size={52} />
                  <span style={{ fontSize: '0.68rem', color: '#4b5563', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.75rem', borderRadius: '999px', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>{edu.period}</span>
                </div>

                <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', lineHeight: 1.35, marginBottom: '0.5rem' }}>{edu.degree}</p>

                <a
                  href={edu.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: edu.color, fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', width: 'fit-content' }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >
                  {edu.institution} {'->'}
                </a>

                <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.7, flex: 1 }}>{edu.detail}</p>

                {edu.badge && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <span style={{ background: `${edu.color}15`, color: edu.color, fontSize: '0.78rem', padding: '0.35rem 0.9rem', borderRadius: '999px', fontWeight: 600, border: `1px solid ${edu.color}25` }}>{edu.badge}</span>
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: '#4b5563', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact</p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem' }}>{personal.email}</span>
                <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>{personal.phone}</span>
                <span style={{ color: '#4b5563', fontSize: '0.9rem' }}>{personal.location}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[{ label: 'LinkedIn', href: personal.linkedin }, { label: 'GitHub', href: personal.github }].filter(link => link.href).map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: '0.55rem 1.5rem', textAlign: 'center', fontSize: '0.78rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
