import FadeIn from './FadeIn'
import TechBadge from './TechBadge'
import { getPortfolioContent, getUiCopy } from '../data/portfolio'
import { useLanguage } from './LanguageProvider'

const groupColors = ['#FF5555', '#8B5CF6', '#3B82F6', '#F59E0B', '#10B981']

export default function Skills() {
  const { language } = useLanguage()
  const { skillsGroups } = getPortfolioContent(language)
  const { skillsSection: skillsCopy } = getUiCopy(language)

  return (
    <section id="skills" style={{ padding: '5rem 0' }}>
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-5 items-start">
          <FadeIn>
            <div className="panel panel-strong lg:sticky top-28" style={{ padding: '2rem' }}>
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>{skillsCopy.eyebrow}</p>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                {skillsCopy.title} <span style={{ color: 'var(--accent)' }}>{skillsCopy.titleAccent}</span>
              </h2>
              <p className="section-copy" style={{ marginBottom: '1.8rem' }}>
                {skillsCopy.intro}
              </p>

              <div style={{ display: 'grid', gap: '0.9rem' }}>
                {skillsCopy.notes.map(note => (
                  <div key={note} style={{ display: 'flex', gap: '0.8rem', padding: '0.95rem 1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'var(--accent)' }}>+</span>
                    <p style={{ color: '#d4dae3', lineHeight: 1.65, fontSize: '0.9rem' }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4">
            {skillsGroups.map(({ group, items }, index) => {
              const color = groupColors[index] || 'var(--accent)'

              return (
                <FadeIn key={group} delay={index * 0.05}>
                  <div className="panel" style={{ padding: '1.5rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '0.72rem', height: '0.72rem', borderRadius: '999px', background: color, boxShadow: `0 0 16px ${color}` }} />
                        <h3 className="font-display" style={{ color: '#fff', fontSize: '1.2rem' }}>{group}</h3>
                      </div>
                      <span style={{ color: '#6b7280', fontSize: '0.76rem' }}>{items.length} {skillsCopy.toolsLabel}</span>
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
