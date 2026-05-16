import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { getPortfolioContent, getUiCopy } from '../data/portfolio'
import { useLanguage } from './LanguageProvider'

function LanguageSwitch({ language, setLanguage, compact = false }) {
  const options = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ]

  return (
    <div
      role="group"
      aria-label="Language selector"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.2rem',
        padding: compact ? '0.18rem' : '0.22rem',
        borderRadius: '999px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(14px)',
      }}
    >
      {options.map(option => {
        const active = language === option.code

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            style={{
              border: 'none',
              background: active ? 'var(--accent)' : 'transparent',
              color: active ? '#fff' : '#aab1bc',
              padding: compact ? '0.42rem 0.6rem' : '0.46rem 0.72rem',
              borderRadius: '999px',
              fontSize: compact ? '0.72rem' : '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { personal } = getPortfolioContent(language)
  const { nav: navCopy } = getUiCopy(language)
  const navLinks = navCopy.links

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, padding: scrolled ? '1rem 0' : '1.4rem 0', transition: 'padding 0.25s ease' }}
    >
      <div
        className="section-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.85rem 1.1rem',
          borderRadius: '999px',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.55)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(18px)',
          boxShadow: scrolled ? '0 16px 50px rgba(0,0,0,0.22)' : 'none',
        }}
      >
        <Link to="hero" smooth duration={600} offset={-40} className="cursor-pointer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div
              className="font-display"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '999px',
                display: 'grid',
                placeItems: 'center',
                background: 'rgba(var(--accent-rgb), 0.14)',
                border: '1px solid rgba(var(--accent-rgb), 0.22)',
                color: '#fff',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              {personal.brand}
            </div>
            <div className="hidden sm:block">
              <p className="font-display" style={{ color: '#fff', fontSize: '0.96rem', fontWeight: 700 }}>
                {personal.name}
              </p>
              <p style={{ color: '#7b8190', fontSize: '0.72rem' }}>{personal.title}</p>
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex" style={{ alignItems: 'center', gap: '1.7rem' }}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-88}
                spy
                activeClass="!text-white"
                className="cursor-pointer"
                style={{ color: '#9aa1af', fontSize: '0.84rem', letterSpacing: '0.04em', transition: 'color 0.2s ease' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <div className="hidden sm:block">
            <LanguageSwitch language={language} setLanguage={setLanguage} />
          </div>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.7rem 1rem',
              borderRadius: '999px',
              color: '#d1d5db',
              border: '1px solid rgba(255,255,255,0.08)',
              textDecoration: 'none',
              fontSize: '0.8rem',
            }}
          >
            {navCopy.github}
          </a>
          <a
            href={personal.cvUrl}
            download
            style={{
              padding: '0.72rem 1.15rem',
              borderRadius: '999px',
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
            }}
          >
            {navCopy.downloadCv}
          </a>
          </div>

          <div className="sm:hidden">
            <LanguageSwitch language={language} setLanguage={setLanguage} compact />
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={navCopy.toggleMenu}
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', background: 'transparent', color: '#fff' }}
          >
            {menuOpen ? '×' : '+'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="section-wrap lg:hidden"
            style={{ marginTop: '0.7rem' }}
          >
            <div className="panel panel-strong" style={{ padding: '1rem' }}>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem', padding: '0.3rem 0.15rem' }}>
                  <span style={{ color: '#7d8593', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {navCopy.languageLabel}
                  </span>
                  <LanguageSwitch language={language} setLanguage={setLanguage} />
                </div>

                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-88}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: '#d1d5db',
                      fontSize: '0.95rem',
                      padding: '0.8rem 0.9rem',
                      borderRadius: '0.9rem',
                      border: '1px solid rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={personal.cvUrl}
                  download
                  style={{
                    marginTop: '0.5rem',
                    textAlign: 'center',
                    padding: '0.9rem 1rem',
                    borderRadius: '0.95rem',
                    background: 'var(--accent)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  {navCopy.downloadCv}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
