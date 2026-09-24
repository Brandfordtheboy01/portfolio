import HeroSection from '../heroSection'
import About from '../aboutSection'
import Skills from '../skillsSection'
import Experience from '../experienceSection'
import Gallery from '../gallerySection'
import Projects from '../projectsSection'
import Education from '../educationSection'
import Contact from '../contactSection'
import Footer from '../footer'
import Preloader from '../preloader'

function App() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Gallery />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
