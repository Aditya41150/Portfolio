import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Aditya
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-2xl md:text-3xl font-semibold text-neutral-300"
        >
          Full-Stack Developer | Mobile App Specialist | Cloud Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed"
        >
          I build <span className="text-blue-400 font-semibold">high-performance applications</span> using{" "}
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-blue-400 font-semibold">Flutter</span>, and{" "}
          <span className="text-blue-400 font-semibold">Cloud technologies</span>.
          Passionate about creating scalable solutions with clean architecture and exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-lg border-2 border-neutral-700 text-neutral-300 hover:text-white hover:border-blue-500 transition-all inline-flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-neutral-500">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-neutral-700 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
