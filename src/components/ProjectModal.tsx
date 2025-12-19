import { Github, X } from "lucide-react"

type ProjectModalProps = {
  project: any
  onClose: () => void
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 max-w-2xl w-full mx-4 rounded-xl
                      bg-neutral-950 border border-neutral-800 p-6 text-neutral-100">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-neutral-400 mt-2">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          {project.details.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full
                         bg-neutral-800 text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md
                       border border-neutral-700 text-neutral-300
                       hover:text-white hover:border-neutral-500 transition"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  )
}
