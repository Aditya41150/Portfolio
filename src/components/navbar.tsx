import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">
          Aditya.dev
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-sm text-neutral-300 hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="text-sm text-neutral-300 hover:text-white transition">
            Contact
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-neutral-300 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-neutral-300 hover:text-white transition" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-neutral-300 hover:text-white"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-950/90 backdrop-blur z-50"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-6 text-lg">
                <a onClick={() => setOpen(false)} href="#projects">
                  Projects
                </a>
                <a onClick={() => setOpen(false)} href="#contact">
                  Contact
                </a>

                <div className="flex gap-4 mt-6">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
