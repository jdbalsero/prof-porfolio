import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { projects } from '../data/portfolio'

const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(32px, 5vw, 80px)' }

const categoryIcon = {
  'AI / Sustainability': 'AI',
  'Data Engineering / AI Agents': 'DE',
  'Machine Learning / FinTech': 'ML',
  'Big Data / ML': 'BD',
  'Data Engineering': 'ETL',
}

function ProjectCard({ title, category, description, tech, image, accent, wide, link, linkLabel }) {
  return (
    <FadeIn>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', gridColumn: wide ? 'span 2' : 'span 1', transition: 'border-color 0.2s' }}
        onMouseEnter={event => event.currentTarget.style.borderColor = `${accent}35`}
        onMouseLeave={event => event.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
      >
        {image ? (
          <div style={{ position: 'relative', overflow: 'hidden', height: '220px', background: '#0a0a0a' }}>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', transition: 'transform 0.5s', transform: 'scale(1.12)' }}
              onMouseEnter={event => event.target.style.transform = 'scale(1.16)'}
              onMouseLeave={event => event.target.style.transform = 'scale(1.12)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, #111111 100%)' }} />
          </div>
        ) : (
          <div style={{ height: '7rem', background: `${accent}07`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${accent} 1px, transparent 1px)`, backgroundSize: '20px 20px', opacity: 0.03 }} />
            <span style={{ fontSize: '1.2rem', opacity: 0.25, fontWeight: 700, letterSpacing: '0.1em' }}>{categoryIcon[category] || 'PR'}</span>
          </div>
        )}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.72rem', padding: '0.3rem 0.85rem', borderRadius: '999px', background: `${accent}12`, color: accent, border: `1px solid ${accent}22` }}>{category}</span>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ color: accent, fontSize: '0.75rem', textDecoration: 'none', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }}
                onMouseEnter={event => event.currentTarget.style.opacity = '1'}
                onMouseLeave={event => event.currentTarget.style.opacity = '0.8'}
              >
                {linkLabel || 'View ->'}
              </a>
            ) : (
              <span style={{ color: '#374151', fontSize: '1rem' }}>{'->'}</span>
            )}
          </div>
          <p className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '0.875rem' }}>{title}</p>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.8, flex: 1, marginBottom: '1.5rem' }}>{description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tech.map(item => <span key={item} style={{ fontSize: '0.72rem', padding: '0.3rem 0.7rem', borderRadius: '0.3rem', background: '#1a1a1a', color: '#555' }}>{item}</span>)}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '9rem 0', position: 'relative' }}>
      <div style={wrap}>
        <FadeIn>
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>03 - Projects</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '3.5rem' }}>
            Selected Work
          </h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              tech={project.tech}
              image={project.image}
              accent={project.color}
              wide={project.wide}
              link={project.link}
              linkLabel={project.linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
