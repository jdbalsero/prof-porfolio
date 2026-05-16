import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { LanguageProvider } from './components/LanguageProvider'

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-shell">
        <div className="app-glow app-glow-one" />
        <div className="app-glow app-glow-two" />
        <div className="app-grid" />

        <Nav />

        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}
