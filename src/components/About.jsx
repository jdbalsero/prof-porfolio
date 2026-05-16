import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { about, journey } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" style={{ padding: '2rem 0 5rem', position: 'relative' }}>
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-5 items-stretch">
          <FadeIn className="h-full">
            <div
              className="panel panel-strong"
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
                height: '100%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: "url('/prof-porfolio/assets/globe-bg.png')",
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

          <div className="grid gap-5 h-full">
            <FadeIn delay={0.08} className="h-full">
              <div className="panel" style={{ padding: '2rem', height: '100%' }}>
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
          </div>
        </div>
      </div>
    </section>
  )
}
