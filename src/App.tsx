import CustomCursor from './components/ui/CustomCursor'
import Hero from './components/Hero/Hero'
import ProjectsSection from './components/Projects/ProjectsSection'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <ProjectsSection />
        <About />
        <Footer />
      </main>
    </>
  )
}
