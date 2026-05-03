import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { projects } from '../data/portfolio'

function ProjectLink({ href, label, color }) {
  if (!href) {
    return (
      <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>
        Link coming later
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color, textDecoration: 'none', fontSize: '0.84rem', fontWeight: 600 }}
    >
      {label || 'Open project ->'}
    </a>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="section-wrap">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4" style={{ marginBottom: '2rem' }}>
            <div>
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Projects</p>
              <h2 className="section-title">
                Selected builds across <span style={{ color: 'var(--accent)' }}>AI, data engineering, and applied ML</span>
              </h2>
            </div>
            <p className="section-copy" style={{ maxWidth: '23rem' }}>
              This branch keeps the same work history and project content, but presents it in a more editorial format with stronger hierarchy and a more product-style reading flow.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="panel panel-strong" style={{ overflow: 'hidden', marginBottom: '1.25rem' }}>
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div style={{ position: 'relative', minHeight: '22rem' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.04)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,8,8,0.08) 0%, rgba(8,8,8,0.46) 100%), linear-gradient(180deg, transparent 35%, rgba(8,8,8,0.7) 100%)' }} />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ padding: '0.38rem 0.8rem', borderRadius: '999px', background: `${featured.color}16`, border: `1px solid ${featured.color}30`, color: featured.color, fontSize: '0.75rem' }}>
                      Featured project
                    </span>
                    <ProjectLink href={featured.link} label={featured.linkLabel} color={featured.color} />
                  </div>

                  <p style={{ color: '#cdd3dc', fontSize: '0.82rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    {featured.category}
                  </p>
                  <h3 className="font-display" style={{ color: '#fff', fontSize: '2rem', lineHeight: 1, marginBottom: '1rem' }}>
                    {featured.title}
                  </h3>
                  <p className="section-copy" style={{ color: '#c8cfd8', marginBottom: '1.5rem' }}>
                    {featured.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {featured.tech.map(item => (
                    <span key={item} style={{ padding: '0.42rem 0.75rem', borderRadius: '999px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#b5bdc8', fontSize: '0.77rem' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((project, index) => (
            <FadeIn key={project.title} delay={0.08 + index * 0.05}>
              <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="panel" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ position: 'relative', height: '14rem', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,8,0.04) 25%, rgba(8,8,8,0.78) 100%)' }} />
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                    <span style={{ color: project.color, fontSize: '0.76rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {project.category}
                    </span>
                    <ProjectLink href={project.link} label={project.linkLabel} color={project.color} />
                  </div>

                  <h3 className="font-display" style={{ color: '#fff', fontSize: '1.35rem', lineHeight: 1.15, marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#9aa1af', lineHeight: 1.75, fontSize: '0.92rem', marginBottom: '1.2rem' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map(item => (
                      <span key={item} style={{ fontSize: '0.74rem', padding: '0.34rem 0.7rem', borderRadius: '999px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#b5bdc8' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
