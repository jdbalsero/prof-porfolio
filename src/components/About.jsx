import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { getPortfolioContent, getUiCopy } from '../data/portfolio'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { language } = useLanguage()
  const { about, journey } = getPortfolioContent(language)
  const { aboutSection: aboutCopy } = getUiCopy(language)

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
                <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>{aboutCopy.narrativeEyebrow}</p>
                <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
                  {aboutCopy.title} <span style={{ color: 'var(--accent)' }}>{aboutCopy.titleAccent}</span>
                </h2>
                <p className="section-copy" style={{ fontSize: '1rem', marginBottom: '1.1rem', color: '#d4d9e0' }}>
                  {about.intro}
                </p>
                <p className="section-copy" style={{ marginBottom: '2rem' }}>
                  {aboutCopy.outro}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div style={{ padding: '1rem', borderRadius: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="section-eyebrow" style={{ marginBottom: '0.55rem' }}>{aboutCopy.bringTitle}</p>
                    <p style={{ color: '#fff', lineHeight: 1.65 }}>{aboutCopy.bringBody}</p>
                  </div>
                  <div style={{ padding: '1rem', borderRadius: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="section-eyebrow" style={{ marginBottom: '0.55rem' }}>{aboutCopy.workingStyleTitle}</p>
                    <p style={{ color: '#fff', lineHeight: 1.65 }}>{aboutCopy.workingStyleBody}</p>
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
                    <p className="section-eyebrow" style={{ marginBottom: '0.9rem' }}>{aboutCopy.careerEyebrow}</p>
                    <h3 className="font-display" style={{ color: '#fff', fontSize: '2rem', lineHeight: 1 }}>
                      {aboutCopy.careerTitle}
                    </h3>
                  </div>
                  <p style={{ color: '#7b8190', maxWidth: '20rem', lineHeight: 1.65 }}>
                    {aboutCopy.careerBody}
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
