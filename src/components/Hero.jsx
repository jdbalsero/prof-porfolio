import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { personal, education } from '../data/portfolio'

const heroPoints = [
  'Data engineering and warehouse automation',
  'Applied AI workflows with business delivery focus',
  'Software consulting across backend, BI, and DevOps',
]

export default function Hero() {
  const latestEducation = education[0]

  return (
    <section id="hero" style={{ position: 'relative', padding: '8.5rem 0 4rem' }}>
      <div className="section-wrap">
        <div
          className="panel accent-ring"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(1.2rem, 2vw, 1.5rem)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url('/prof-porfolio/assets/hero-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: '62% center',
              opacity: 0.22,
              transform: 'scale(1.08)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.72) 48%, rgba(8,8,8,0.9) 100%)',
            }}
          />

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5 relative z-10">
            <div className="panel panel-strong" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="section-eyebrow">Melbourne-based Portfolio</span>
                  <span style={{ width: '0.35rem', height: '0.35rem', borderRadius: '50%', background: 'var(--accent)' }} />
                  <span style={{ color: '#d1d5db', fontSize: '0.82rem' }}>{personal.availability}</span>
                </div>

                <h1 className="font-display" style={{ fontSize: 'clamp(3.2rem, 8vw, 6.4rem)', lineHeight: 0.92, letterSpacing: '-0.05em', marginBottom: '1.25rem', color: '#fff' }}>
                  {personal.heroNameLead}
                  <br />
                  <span style={{ color: 'var(--accent)' }}>{personal.heroNameAccent}</span> {personal.heroNameTail}
                </h1>

                <p style={{ color: '#f1f5f9', fontSize: '1.08rem', maxWidth: '40rem', lineHeight: 1.75, marginBottom: '1.2rem' }}>
                  {personal.heroSummary}
                </p>

                <p style={{ color: '#7f8795', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                  {personal.title} | {personal.subtitle}
                </p>

                <div className="grid sm:grid-cols-3 gap-3" style={{ marginBottom: '2rem' }}>
                  {heroPoints.map(point => (
                    <div
                      key={point}
                      style={{
                        padding: '1rem 1rem 1.1rem',
                        borderRadius: '1.2rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div style={{ width: '1.9rem', height: '1.9rem', borderRadius: '999px', background: 'rgba(var(--accent-rgb), 0.14)', color: 'var(--accent)', display: 'grid', placeItems: 'center', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                        +
                      </div>
                      <p style={{ color: '#d7dce5', fontSize: '0.88rem', lineHeight: 1.55 }}>{point}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                  <Link to="projects" smooth duration={650} offset={-88}>
                    <button
                      style={{
                        padding: '0.95rem 1.35rem',
                        borderRadius: '999px',
                        background: 'var(--accent)',
                        color: '#fff',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Explore Projects
                    </button>
                  </Link>
                  <Link to="experience" smooth duration={650} offset={-88}>
                    <button
                      style={{
                        padding: '0.95rem 1.35rem',
                        borderRadius: '999px',
                        background: 'transparent',
                        color: '#fff',
                        fontWeight: 500,
                        border: '1px solid rgba(255,255,255,0.1)',
                        cursor: 'pointer',
                      }}
                    >
                      View Experience
                    </button>
                  </Link>
                </div>

                <div className="grid sm:grid-cols-4 gap-3">
                  {personal.stats.map(stat => (
                    <div
                      key={stat.label}
                      style={{
                        padding: '1rem',
                        borderRadius: '1.1rem',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <p className="font-display" style={{ color: '#fff', fontSize: '1.55rem', marginBottom: '0.25rem' }}>
                        {stat.value}
                      </p>
                      <p style={{ color: '#7b8190', fontSize: '0.74rem', lineHeight: 1.35 }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid gap-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="panel panel-strong"
                style={{ overflow: 'hidden' }}
              >
                <div style={{ position: 'relative', minHeight: '430px' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(var(--accent-rgb), 0.14) 0%, rgba(8,8,8,0.18) 38%, rgba(8,8,8,0.82) 100%)',
                      zIndex: 1,
                    }}
                  />
                  <img
                    src={personal.photoUrl}
                    alt={personal.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <div style={{ position: 'relative', zIndex: 2, padding: '1.35rem', minHeight: '430px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <span style={{ padding: '0.45rem 0.8rem', borderRadius: '999px', background: 'rgba(8,8,8,0.55)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.75rem' }}>
                        Currently in {personal.location}
                      </span>
                      <span style={{ width: '2.2rem', height: '2.2rem', borderRadius: '999px', background: 'rgba(8,8,8,0.55)', display: 'grid', placeItems: 'center', color: 'var(--accent)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        JB
                      </span>
                    </div>

                    <div>
                      <p style={{ color: '#dfe5ec', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                        Current Focus
                      </p>
                      <p className="font-display" style={{ color: '#fff', fontSize: '1.65rem', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                        Building reliable data systems with practical AI.
                      </p>
                      <p style={{ color: '#d1d5db', lineHeight: 1.7, fontSize: '0.94rem' }}>
                        I’m interested in roles where data pipelines, analytics products, and automation can create clear operational value.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }} className="panel" style={{ padding: '1.35rem' }}>
                  <p className="section-eyebrow" style={{ marginBottom: '0.8rem' }}>Latest Degree</p>
                  <p className="font-display" style={{ color: '#fff', fontSize: '1.2rem', lineHeight: 1.2, marginBottom: '0.45rem' }}>
                    {latestEducation.degree}
                  </p>
                  <p style={{ color: '#c6ccd6', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{latestEducation.institution}</p>
                  <p style={{ color: '#7b8190', fontSize: '0.82rem' }}>{latestEducation.badge} | {latestEducation.period}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="panel" style={{ padding: '1.35rem' }}>
                  <p className="section-eyebrow" style={{ marginBottom: '0.8rem' }}>Reach Out</p>
                  <div style={{ display: 'grid', gap: '0.7rem' }}>
                    <a href={`mailto:${personal.email}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.93rem' }}>{personal.email}</a>
                    <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: '#c4cad3', textDecoration: 'none', fontSize: '0.9rem' }}>{personal.linkedinLabel}</a>
                    <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: '#c4cad3', textDecoration: 'none', fontSize: '0.9rem' }}>{personal.githubLabel}</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
