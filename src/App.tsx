import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"

function App() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
    </main>
  )
}

export default App
