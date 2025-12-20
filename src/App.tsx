import { useState } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import ChaiButton from "./components/ChaiButton"
import Contact from "./components/Contact"
import CommandPalette from "./components/CommandPalette"

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="bg-neutral-950 text-neutral-100 relative min-h-screen">
      {/* Passing the state setter to the CommandPalette */}
      <CommandPalette openContact={() => setIsContactOpen(true)} />
      
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      
      <ChaiButton />

      {isContactOpen && (
        <Contact onClose={() => setIsContactOpen(false)} />
      )}
    </main>
  )
}

export default App