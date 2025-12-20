import { motion } from "framer-motion"
import { useState } from "react"
import { Github } from "lucide-react"
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
          <h2 className="text-3xl font-semibold tracking-tight">
            Projects
          </h2>

          <p className="text-neutral-400 mt-3 max-w-xl">
            A selection of projects showcasing my focus on performance,
            scalability, and clean architecture.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(project)}
                className="cursor-pointer rounded-xl border border-neutral-800
                           p-6 bg-neutral-900/40 hover:border-neutral-600 transition"
              >
                <h3 className="text-lg font-medium">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mt-3">
                  {project.description}
                </p>

                {/* GitHub icon only */}
                <div className="flex justify-end mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-neutral-400 hover:text-white transition"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
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
