import { motion } from "framer-motion"
import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "../data/projects"
import ProjectModal from "./ProjectModal"

export default function Projects() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <>
      <section
        id="projects"
        className="pt-32 pb-24 px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>

            <p className="text-neutral-400 mt-3 max-w-2xl text-lg">
              A selection of projects showcasing my focus on{" "}
              <span className="text-blue-400 font-semibold">performance</span>,{" "}
              <span className="text-blue-400 font-semibold">scalability</span>, and{" "}
              <span className="text-blue-400 font-semibold">clean architecture</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(project)}
                className="cursor-pointer rounded-xl border border-neutral-700/50 p-6 bg-neutral-800/50 hover:border-blue-500/50 transition-all group"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mt-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-neutral-700/50 text-neutral-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-neutral-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
