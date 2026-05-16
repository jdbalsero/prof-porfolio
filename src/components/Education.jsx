import { useState } from 'react'
import FadeIn from './FadeIn'
import { education } from '../data/portfolio'

function InstitutionLogo({ domain, name, color }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="font-display"
        style={{
          width: '3.4rem',
          height: '3.4rem',
          borderRadius: '1rem',
          display: 'grid',
          placeItems: 'center',
          background: `${color}20`,
          color,
          border: `1px solid ${color}38`,
          fontWeight: 800,
        }}
      >
        {name}
      </div>
    )
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      onError={() => setFailed(true)}
      style={{ width: '3.4rem', height: '3.4rem', borderRadius: '1rem', objectFit: 'contain', background: '#fff', padding: '0.35rem' }}
    />
  )
}

export default function Education() {
  return (
    <section id="education" style={{ padding: '1rem 0 5rem' }}>
      <div className="section-wrap">
        <div className="grid xl:grid-cols-[0.42fr_0.58fr] gap-5 items-stretch">
          <FadeIn className="h-full">
            <div className="panel panel-strong xl:sticky top-28" style={{ padding: '2rem', height: '100%' }}>
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Education</p>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Academic grounding with <span style={{ color: 'var(--accent)' }}>strong practical direction</span>
              </h2>
              <p className="section-copy" style={{ marginBottom: '1.8rem' }}>
                Formal study sharpened the engineering, analytics, and AI work already present in my project experience.
              </p>
            </div>
          </FadeIn>

          <div style={{ position: 'relative', paddingLeft: '1.2rem', height: '100%' }}>
            <div style={{ position: 'absolute', top: '0.5rem', bottom: '0.5rem', left: '0.2rem', width: '1px', background: 'linear-gradient(to bottom, rgba(var(--accent-rgb),0.55), rgba(255,255,255,0.08))' }} />

            <div className="grid gap-4">
              {education.map((entry, index) => (
                <FadeIn key={entry.degree} delay={index * 0.08}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-1.2rem', top: '2rem', width: '0.9rem', height: '0.9rem', borderRadius: '999px', background: entry.color, boxShadow: `0 0 0 6px ${entry.color}18` }} />

                    <div className="panel" style={{ padding: '2rem' }}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4" style={{ marginBottom: '1.4rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                          <InstitutionLogo domain={entry.domain} name={entry.shortName} color={entry.color} />
                          <div>
                            <p className="font-display" style={{ color: '#fff', fontSize: '1.45rem', lineHeight: 1.05, marginBottom: '0.35rem' }}>
                              {entry.degree}
                            </p>
                            <p style={{ color: entry.color, fontSize: '0.92rem', marginBottom: '0.3rem' }}>{entry.institution}</p>
                            <p style={{ color: '#8b93a1', fontSize: '0.82rem' }}>{entry.domain}</p>
                          </div>
                        </div>

                        <span style={{ alignSelf: 'flex-start', padding: '0.45rem 0.9rem', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                          {entry.period}
                        </span>
                      </div>

                      <p style={{ color: '#d2d8e1', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '1.35rem', maxWidth: '46rem' }}>
                        {entry.detail}
                      </p>

                      <div className="grid lg:grid-cols-[auto_1fr_auto] gap-3 items-center">
                        <span style={{ padding: '0.5rem 0.85rem', borderRadius: '999px', background: `${entry.color}12`, border: `1px solid ${entry.color}30`, color: entry.color, fontSize: '0.8rem', fontWeight: 600, justifySelf: 'start' }}>
                          {entry.badge}
                        </span>
                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', width: '100%' }} />
                        <a href={entry.url} target="_blank" rel="noreferrer" style={{ color: '#d8dde5', textDecoration: 'none', fontSize: '0.84rem', fontWeight: 500, justifySelf: 'start' }}>
                          {'Visit institution ->'}
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
