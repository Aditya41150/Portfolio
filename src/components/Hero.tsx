import { motion } from "framer-motion"
import { Download } from "lucide-react"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Hi, I’m Aditya 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-neutral-400 max-w-2xl"
        >
          Software Engineer focused on building high-quality,
          scalable web applications with clean architecture
          and great user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300
             hover:text-white hover:border-neutral-500 transition
             inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

        </motion.div>
      </div>
    </section>
  )
}
