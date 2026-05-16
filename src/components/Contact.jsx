import FadeIn from './FadeIn'
import { getPortfolioContent, getUiCopy } from '../data/portfolio'
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { language } = useLanguage()
  const { contact, personal } = getPortfolioContent(language)
  const { contactSection: contactCopy } = getUiCopy(language)
  const links = [
    { label: contactCopy.email, value: personal.email, href: `mailto:${personal.email}` },
    { label: contactCopy.linkedIn, value: personal.linkedinLabel, href: personal.linkedin, external: true },
    { label: contactCopy.github, value: personal.githubLabel, href: personal.github, external: true },
    { label: contactCopy.phone, value: personal.phone, href: `tel:${personal.phone}` },
  ]

  return (
    <section id="contact" style={{ padding: '5rem 0 3.5rem' }}>
      <div className="section-wrap">
        <FadeIn>
          <div
            className="panel panel-strong accent-ring"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '2rem',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 12% 16%, rgba(var(--accent-rgb), 0.16), transparent 24%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.08), transparent 18%)',
              }}
            />

            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-5 relative z-10">
              <div>
                <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>{contactCopy.eyebrow}</p>
                <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                  {contactCopy.title} <span style={{ color: 'var(--accent)' }}>{contactCopy.titleAccent}</span>
                </h2>
                <p className="section-copy" style={{ color: '#d0d6df', marginBottom: '1.5rem' }}>
                  {contact.blurb}
                </p>

                <div style={{ display: 'grid', gap: '0.8rem', marginBottom: '1.5rem' }}>
                  {links.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{
                        padding: '1rem 1.1rem',
                        borderRadius: '1rem',
                        border: '1px solid rgba(255,255,255,0.07)',
                        background: 'rgba(255,255,255,0.03)',
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ color: '#7d8593', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{link.label}</span>
                      <span style={{ color: '#fff', fontSize: '0.92rem', textAlign: 'right' }}>{link.value}</span>
                    </a>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <a
                    href={personal.cvUrl}
                    download
                    style={{
                      padding: '0.9rem 1.2rem',
                      borderRadius: '999px',
                      background: 'var(--accent)',
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    {contactCopy.downloadCv}
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '0.9rem 1.2rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.09)',
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    {contactCopy.messageLinkedIn}
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-4 items-stretch">
                <div className="panel" style={{ overflow: 'hidden', minHeight: '100%' }}>
                  <div style={{ position: 'relative', height: '100%', minHeight: '20rem' }}>
                    <img
                      src={personal.photoUrl}
                      alt={personal.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,8,0.12) 10%, rgba(8,8,8,0.84) 100%)' }} />
                    <div style={{ position: 'absolute', left: '1rem', right: '1rem', bottom: '1rem' }}>
                      <p className="font-display" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{personal.name}</p>
                      <p style={{ color: '#d0d6df', fontSize: '0.85rem' }}>{personal.location}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="panel" style={{ padding: '1.35rem' }}>
                    <p className="section-eyebrow" style={{ marginBottom: '0.8rem' }}>{contactCopy.availabilityEyebrow}</p>
                    <p className="font-display" style={{ color: '#fff', fontSize: '1.4rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                      {personal.availability}
                    </p>
                    <p style={{ color: '#9aa1af', lineHeight: 1.7, fontSize: '0.9rem' }}>
                      {contactCopy.availabilityBody}
                    </p>
                  </div>

                  <div className="panel" style={{ padding: '1.35rem' }}>
                    <p className="section-eyebrow" style={{ marginBottom: '0.8rem' }}>{contact.cvTitle}</p>
                    <p className="font-display" style={{ color: '#fff', fontSize: '1.4rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                      {contact.cvSubtitle}
                    </p>
                    <p style={{ color: '#9aa1af', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {contactCopy.cvBody}
                    </p>
                    <a href={personal.cvUrl} download style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
                      {contactCopy.downloadPdf}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', padding: '1.4rem 0 0.2rem' }}>
          <p style={{ color: '#5b6270', fontSize: '0.82rem' }}>
            (c) {new Date().getFullYear()} {personal.name} | {contact.footerLocation}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: '#8b93a1', textDecoration: 'none', fontSize: '0.82rem' }}>LinkedIn</a>
            <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: '#8b93a1', textDecoration: 'none', fontSize: '0.82rem' }}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
