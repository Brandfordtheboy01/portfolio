import { useState } from 'react'
import Navbar from '../navbar'
import HeroSection from '../heroSection'
import About from '../aboutSection'
import Skills from '../skillsSection'
import Experience from '../experienceSection'
import Gallery from '../gallerySection'
import Projects from '../projectsSection'
import Education from '../educationSection'
import Contact from '../contactSection'
import Footer from '../footer'
import FinalSheet from '../finalSheet'
import Preloader from '../preloader'

function App() {
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <>
      <Preloader />
      <Navbar isVisible={showNavbar} />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Gallery />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <FinalSheet onVisibleChange={(visible) => setShowNavbar(!visible)} />
    </>
  )
}

export default App
