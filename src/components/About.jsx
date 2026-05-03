import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { about, education, journey } from '../data/portfolio'

function InstitutionLogo({ domain, name, color }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="font-display"
        style={{
          width: '3.2rem',
          height: '3.2rem',
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
      style={{ width: '3.2rem', height: '3.2rem', borderRadius: '1rem', objectFit: 'contain', background: '#fff', padding: '0.35rem' }}
    />
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '2rem 0 5rem', position: 'relative' }}>
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-5 items-start">
          <FadeIn>
            <div
              className="panel panel-strong"
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
                minHeight: '100%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: "url('/professional-porfolio/assets/globe-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.18,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Profile Narrative</p>
                <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
                  From delivery foundations into <span style={{ color: 'var(--accent)' }}>data and AI systems</span>
                </h2>
                <p className="section-copy" style={{ fontSize: '1rem', marginBottom: '1.1rem', color: '#d4d9e0' }}>
                  {about.intro}
                </p>
                <p className="section-copy" style={{ marginBottom: '2rem' }}>
                  That path shapes how I work today: I’m comfortable moving between business needs, implementation details, data models, application logic, and deployment concerns without losing sight of the outcome.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div style={{ padding: '1rem', borderRadius: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="section-eyebrow" style={{ marginBottom: '0.55rem' }}>What I Bring</p>
                    <p style={{ color: '#fff', lineHeight: 1.65 }}>Engineering discipline, consulting pragmatism, and analytical thinking across the full data lifecycle.</p>
                  </div>
                  <div style={{ padding: '1rem', borderRadius: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="section-eyebrow" style={{ marginBottom: '0.55rem' }}>Working Style</p>
                    <p style={{ color: '#fff', lineHeight: 1.65 }}>Hands-on, delivery-oriented, and comfortable collaborating across technical and business stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            <FadeIn delay={0.08}>
              <div className="panel" style={{ padding: '2rem' }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ marginBottom: '1.7rem' }}>
                  <div>
                    <p className="section-eyebrow" style={{ marginBottom: '0.9rem' }}>Career Route</p>
                    <h3 className="font-display" style={{ color: '#fff', fontSize: '2rem', lineHeight: 1 }}>
                      A path across backend, DevOps, consulting, BI, and AI.
                    </h3>
                  </div>
                  <p style={{ color: '#7b8190', maxWidth: '20rem', lineHeight: 1.65 }}>
                    The sequence matters because each step added a new operating layer to how I solve problems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {journey.map((step, index) => (
                    <motion.div
                      key={`${step.year}-${step.title}`}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        padding: '1.1rem',
                        borderRadius: '1.15rem',
                        background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(var(--accent-rgb), 0.07)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                        <span style={{ width: '2.2rem', height: '2.2rem', borderRadius: '0.8rem', background: 'rgba(255,255,255,0.06)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                          {step.icon}
                        </span>
                        <span style={{ color: 'var(--accent)', fontSize: '0.72rem', fontFamily: 'monospace' }}>{step.year}</span>
                      </div>
                      <p className="font-display" style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.15, marginBottom: '0.25rem' }}>
                        {step.title}
                      </p>
                      <p style={{ color: '#c5ccd6', fontSize: '0.82rem', marginBottom: '0.6rem' }}>{step.where}</p>
                      <p style={{ color: '#7b8190', fontSize: '0.83rem', lineHeight: 1.6 }}>{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="panel" style={{ padding: '2rem' }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ marginBottom: '1.6rem' }}>
                  <div>
                    <p className="section-eyebrow" style={{ marginBottom: '0.9rem' }}>Education</p>
                    <h3 className="font-display" style={{ color: '#fff', fontSize: '2rem', lineHeight: 1 }}>
                      Academic grounding with strong practical direction.
                    </h3>
                  </div>
                  <p style={{ color: '#7b8190', maxWidth: '19rem', lineHeight: 1.65 }}>
                    Formal study has reinforced the engineering and analytics work I’ve been applying in real projects.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {education.map(edu => (
                    <div key={edu.degree} style={{ padding: '1.35rem', borderRadius: '1.25rem', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
                          <InstitutionLogo domain={edu.domain} name={edu.shortName} color={edu.color} />
                          <div>
                            <p className="font-display" style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.2 }}>{edu.degree}</p>
                            <p style={{ color: edu.color, fontSize: '0.82rem', marginTop: '0.2rem' }}>{edu.institution}</p>
                          </div>
                        </div>
                        <span style={{ color: '#8b93a1', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{edu.period}</span>
                      </div>

                      <p style={{ color: '#c8cfd8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{edu.detail}</p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{ padding: '0.45rem 0.8rem', borderRadius: '999px', background: `${edu.color}12`, border: `1px solid ${edu.color}30`, color: edu.color, fontSize: '0.78rem', fontWeight: 600 }}>
                          {edu.badge}
                        </span>
                        <a href={edu.url} target="_blank" rel="noreferrer" style={{ color: '#d8dde5', textDecoration: 'none', fontSize: '0.82rem' }}>
                          {'Visit institution ->'}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
