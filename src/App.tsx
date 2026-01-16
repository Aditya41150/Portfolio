import { useState } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import ChaiButton from "./components/ChaiButton"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CommandPalette from "./components/CommandPalette"

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="bg-neutral-950 text-neutral-100 relative min-h-screen">
      <CommandPalette openContact={() => setIsContactOpen(true)} />

      <Navbar onContactClick={() => setIsContactOpen(true)} />

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />

      <ChaiButton />

      {isContactOpen && (
        <Contact onClose={() => setIsContactOpen(false)} />
      )}

      <Footer />
    </main>
  )
}

export default App