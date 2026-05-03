import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-glow app-glow-one" />
      <div className="app-glow app-glow-two" />
      <div className="app-grid" />

      <Nav />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
