import FadeIn from './FadeIn'
import TechBadge from './TechBadge'
import { skills } from '../data/portfolio'

const groupColors = {
  'Data & AI': '#FF5555',
  'Data Engineering': '#8B5CF6',
  'Cloud & DevOps': '#3B82F6',
  'Software Engineering': '#F59E0B',
  'BI & Analytics': '#10B981',
}

const stackNotes = [
  'Comfortable moving from ingestion and modeling to application delivery.',
  'Strongest interest in data platforms, AI workflows, and analytics-enabling systems.',
  'Happy working across SQL, Python, app backends, dashboards, and deployment tooling.',
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 0' }}>
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-5 items-start">
          <FadeIn>
            <div className="panel panel-strong lg:sticky top-28" style={{ padding: '2rem' }}>
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Stack</p>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Technical coverage with a <span style={{ color: 'var(--accent)' }}>delivery mindset</span>
              </h2>
              <p className="section-copy" style={{ marginBottom: '1.8rem' }}>
                The portfolio sits at the intersection of data engineering, AI, analytics, and software implementation. These categories summarize the tools and domains I’m most comfortable shipping with.
              </p>

              <div style={{ display: 'grid', gap: '0.9rem' }}>
                {stackNotes.map(note => (
                  <div key={note} style={{ display: 'flex', gap: '0.8rem', padding: '0.95rem 1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'var(--accent)' }}>+</span>
                    <p style={{ color: '#d4dae3', lineHeight: 1.65, fontSize: '0.9rem' }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([group, items], index) => {
              const color = groupColors[group] || 'var(--accent)'

              return (
                <FadeIn key={group} delay={index * 0.05}>
                  <div className="panel" style={{ padding: '1.5rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '0.72rem', height: '0.72rem', borderRadius: '999px', background: color, boxShadow: `0 0 16px ${color}` }} />
                        <h3 className="font-display" style={{ color: '#fff', fontSize: '1.2rem' }}>{group}</h3>
                      </div>
                      <span style={{ color: '#6b7280', fontSize: '0.76rem' }}>{items.length} tools</span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                      {items.map(item => (
                        <TechBadge key={item} label={item} accent={color} />
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
