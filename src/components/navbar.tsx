import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Menu, X, BookOpen } from "lucide-react"
import { SiLeetcode } from "react-icons/si"
import { useState } from "react"

type NavbarProps = {
  onContactClick: () => void;
};

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [open, setOpen] = useState(false)

  // Helper to handle contact click and close mobile menu
  const handleContactClick = () => {
    onContactClick();
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-white">
          Aditya.dev
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 mr-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Available for Hire
            </span>
          </div>

          <a href="#projects" className="text-sm text-neutral-300 hover:text-white transition cursor-pointer">
            Projects
          </a>
          <button onClick={onContactClick} className="text-sm text-neutral-300 hover:text-white transition cursor-pointer">
            Contact
          </button>

          <div className="flex items-center gap-4 border-l border-neutral-800 pl-6">
            <a href="https://github.com/Aditya41150" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 text-neutral-400 hover:text-white" /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-neutral-400 hover:text-white" /></a>
            <a href="https://leetcode.com/u/Aditya_57/" target="_blank" rel="noopener noreferrer"><SiLeetcode className="w-5 h-5 text-neutral-400 hover:text-white" /></a>
            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer"><BookOpen className="w-5 h-5 text-neutral-400 hover:text-white" /></a>
          </div>
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
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur z-50"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button onClick={() => setOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-8 text-2xl text-white">
                <a onClick={() => setOpen(false)} href="#projects" className="cursor-pointer hover:text-blue-400 transition">
                  Projects
                </a>

                <button
                  onClick={handleContactClick}
                  className="text-left cursor-pointer text-blue-400 font-semibold"
                >
                  Contact Me
                </button>

                <div className="flex gap-8 mt-10 border-t border-neutral-800 pt-8">
                  <a href="https://github.com/Aditya41150" target="_blank" rel="noopener noreferrer">
                    <Github className="w-8 h-8" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="https://leetcode.com/u/Aditya_57/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="w-8 h-8" />
                  </a>
                  <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-8 h-8" />
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

export default Navbar