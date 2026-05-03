import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { contact, personal } from '../data/portfolio'

const wrap = { maxWidth: '640px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }

const contactLinks = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: '@' },
  { label: 'LinkedIn', value: personal.linkedinLabel, href: personal.linkedin, icon: 'in', external: true },
  { label: 'GitHub', value: personal.githubLabel, href: personal.github, icon: 'gh', external: true },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: 'ph' },
].filter(link => link.href)

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', borderRadius: '50%', background: 'var(--accent)', filter: 'blur(180px)', opacity: 0.05, pointerEvents: 'none' }} />

      <div style={wrap}>
        <FadeIn>
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>05 - Contact</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Let's build something <span style={{ color: 'var(--accent)' }}>together.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, textAlign: 'center', marginBottom: '3rem' }}>
            {contact.blurb}
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.875rem', marginBottom: '2rem' }}>
          {contactLinks.map((link, index) => (
            <FadeIn key={link.label} delay={0.25 + index * 0.07}>
              <motion.a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={event => event.currentTarget.style.borderColor = 'rgba(var(--accent-rgb), 0.4)'}
                onMouseLeave={event => event.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
                  {link.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: '#4b5563', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{link.label}</p>
                  <p style={{ color: '#e5e7eb', fontSize: '0.82rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.value}</p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '1.75rem 2rem', borderRadius: '1rem', background: 'rgba(var(--accent-rgb), 0.07)', border: '1px solid rgba(var(--accent-rgb), 0.2)' }}>
            <div>
              <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{contact.cvTitle}</p>
              <p style={{ color: '#6b7280', fontSize: '0.82rem' }}>{contact.cvSubtitle}</p>
            </div>
            <a
              href={personal.cvUrl}
              download
              style={{ flexShrink: 0, padding: '0.65rem 1.5rem', borderRadius: '999px', background: 'var(--accent)', color: '#fff', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={event => event.currentTarget.style.opacity = '0.85'}
              onMouseLeave={event => event.currentTarget.style.opacity = '1'}
            >
              {'Download CV ->'}
            </a>
          </div>
        </FadeIn>
      </div>

      <div style={{ maxWidth: '860px', margin: '4rem auto 0', padding: '1.5rem clamp(24px, 5vw, 80px) 0', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{personal.brand}<span style={{ color: 'var(--accent)' }}>.</span></p>
        <p style={{ color: '#374151', fontSize: '0.8rem' }}>(c) {new Date().getFullYear()} {personal.name} - {contact.footerLocation}</p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[{ label: 'LinkedIn', href: personal.linkedin }, { label: 'GitHub', href: personal.github }].filter(link => link.href).map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#374151', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={event => event.currentTarget.style.color = '#fff'}
              onMouseLeave={event => event.currentTarget.style.color = '#374151'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
