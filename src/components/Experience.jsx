import { useState } from 'react'
import FadeIn from './FadeIn'
import { experience } from '../data/portfolio'

const companyInfo = {
  Synogize: { domain: 'synogize.io', url: 'https://synogize.io', color: '#FF5555' },
  'NFQ Advisory Services & Solutions': { color: '#8B5CF6' },
  'Assisttu (Tu Plan Live LLC)': { color: '#F59E0B' },
  'Informa Colombia': { color: '#3B82F6' },
  'Coally SAS': { color: '#EC4899' },
}

function CompanyLogo({ name, color }) {
  const info = companyInfo[name]
  const [failed, setFailed] = useState(false)

  if (!info?.domain || failed) {
    return (
      <div
        className="font-display"
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '1rem',
          background: `${color}22`,
          color,
          border: `1px solid ${color}40`,
          display: 'grid',
          placeItems: 'center',
          fontWeight: 800,
        }}
      >
        {name[0]}
      </div>
    )
  }

  return (
    <img
      src={`https://logo.clearbit.com/${info.domain}`}
      alt={name}
      onError={() => setFailed(true)}
      style={{ width: '3rem', height: '3rem', borderRadius: '1rem', objectFit: 'contain', background: '#fff', padding: '0.3rem' }}
    />
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 0' }}>
      <div className="section-wrap">
        <div className="grid xl:grid-cols-[0.45fr_0.55fr] gap-5 items-start">
          <FadeIn>
            <div className="panel panel-strong xl:sticky top-28" style={{ padding: '2rem' }}>
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Experience</p>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                A consulting-led <span style={{ color: 'var(--accent)' }}>career timeline</span>
              </h2>
              <p className="section-copy" style={{ marginBottom: '1.8rem' }}>
                My experience spans backend delivery, infrastructure, full-stack work, reporting, AI experimentation, and hands-on data engineering. That breadth is part of the value I bring.
              </p>

              <div className="grid sm:grid-cols-3 xl:grid-cols-1 gap-3">
                <div style={{ padding: '1rem', borderRadius: '1.1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-display" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem' }}>{experience.length}</p>
                  <p style={{ color: '#7b8190', fontSize: '0.76rem' }}>Professional roles captured in the portfolio</p>
                </div>
                <div style={{ padding: '1rem', borderRadius: '1.1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-display" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem' }}>Data + Delivery</p>
                  <p style={{ color: '#7b8190', fontSize: '0.76rem' }}>Built across product, platform, analytics, and automation contexts</p>
                </div>
                <div style={{ padding: '1rem', borderRadius: '1.1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-display" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem' }}>AU + Remote</p>
                  <p style={{ color: '#7b8190', fontSize: '0.76rem' }}>Experience working across distributed and consulting environments</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div style={{ position: 'relative', paddingLeft: '1.2rem' }}>
            <div style={{ position: 'absolute', top: '0.5rem', bottom: '0.5rem', left: '0.2rem', width: '1px', background: 'linear-gradient(to bottom, rgba(var(--accent-rgb),0.55), rgba(255,255,255,0.08))' }} />

            <div className="grid gap-4">
              {experience.map((entry, index) => {
                const info = companyInfo[entry.company]
                const color = info?.color || 'var(--accent)'

                return (
                  <FadeIn key={`${entry.company}-${entry.role}`} delay={index * 0.06}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '-1.2rem', top: '1.75rem', width: '0.9rem', height: '0.9rem', borderRadius: '999px', background: color, boxShadow: `0 0 0 6px ${color}18` }} />

                      <div className="panel" style={{ padding: '1.6rem' }}>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4" style={{ marginBottom: '1.3rem' }}>
                          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <CompanyLogo name={entry.company} color={color} />
                            <div>
                              <p className="font-display" style={{ color: '#fff', fontSize: '1.35rem', lineHeight: 1.05, marginBottom: '0.3rem' }}>
                                {entry.role}
                              </p>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', alignItems: 'center' }}>
                                {info?.url ? (
                                  <a href={info.url} target="_blank" rel="noreferrer" style={{ color, textDecoration: 'none', fontSize: '0.86rem' }}>
                                    {entry.company}
                                  </a>
                                ) : (
                                  <span style={{ color, fontSize: '0.86rem' }}>{entry.company}</span>
                                )}
                                <span style={{ color: '#6b7280', fontSize: '0.84rem' }}>{entry.location}</span>
                              </div>
                            </div>
                          </div>

                          <span style={{ alignSelf: 'flex-start', padding: '0.45rem 0.9rem', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                            {entry.period}
                          </span>
                        </div>

                        <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-start">
                          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.7rem' }}>
                            {entry.bullets.map(bullet => (
                              <li key={bullet} style={{ display: 'flex', gap: '0.7rem', color: '#c8cfd8', lineHeight: 1.7, fontSize: '0.92rem' }}>
                                <span style={{ color, marginTop: '0.15rem' }}>+</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', maxWidth: '16rem' }}>
                            {entry.tech.map(item => (
                              <span
                                key={item}
                                style={{
                                  padding: '0.4rem 0.75rem',
                                  borderRadius: '999px',
                                  background: 'rgba(255,255,255,0.03)',
                                  border: '1px solid rgba(255,255,255,0.06)',
                                  color: '#9ca3af',
                                  fontSize: '0.76rem',
                                }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
