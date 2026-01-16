import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiPython,
  SiDart,
  SiC,
  SiRust,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiGooglecloud,
} from "react-icons/si"

type Skill = {
  name: string
  icon: any
  level: number
}

const skillCategories = [
  {
    title: "Frontend Development",
    color: "blue",
    skills: [
      { name: "React", icon: SiReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 88 },
      { name: "JavaScript", icon: SiJavascript, level: 92 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    title: "Mobile Development",
    color: "cyan",
    skills: [
      { name: "Flutter", icon: SiFlutter, level: 90 },
      { name: "Dart", icon: SiDart, level: 88 },
      { name: "Firebase", icon: SiFirebase, level: 85 },
    ],
  },
  {
    title: "Backend & Cloud",
    color: "purple",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 82 },
      { name: "AWS", icon: SiAmazon, level: 75 },
      { name: "Google Cloud", icon: SiGooglecloud, level: 70 },
    ],
  },
  {
    title: "Systems & IoT",
    color: "green",
    skills: [
      { name: "C++", icon: SiCplusplus, level: 85 },
      { name: "C", icon: SiC, level: 82 },
      { name: "Rust", icon: SiRust, level: 75 },
      { name: "Python", icon: SiPython, level: 80 },
    ],
  },
  {
    title: "Databases",
    color: "orange",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "red",
    skills: [
      { name: "Git", icon: SiGit, level: 90 },
      { name: "Docker", icon: SiDocker, level: 75 },
    ],
  },
]

const getColorClasses = (color: string) => {
  const colors: Record<string, { border: string; bg: string; text: string }> = {
    blue: { border: "border-blue-500/50", bg: "bg-blue-500", text: "text-blue-400" },
    cyan: { border: "border-cyan-500/50", bg: "bg-cyan-500", text: "text-cyan-400" },
    purple: { border: "border-purple-500/50", bg: "bg-purple-500", text: "text-purple-400" },
    green: { border: "border-green-500/50", bg: "bg-green-500", text: "text-green-400" },
    orange: { border: "border-orange-500/50", bg: "bg-orange-500", text: "text-orange-400" },
    red: { border: "border-red-500/50", bg: "bg-red-500", text: "text-red-400" },
  }
  return colors[color] || colors.blue
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-neutral-900/30 light:bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 light:text-neutral-900">
            Skills & Technologies
          </h2>

          <p className="text-neutral-400 light:text-neutral-600 mt-3 max-w-2xl text-lg">
            A comprehensive toolkit for building <span className="text-blue-400 light:text-blue-600 font-semibold">modern</span>,{" "}
            <span className="text-blue-400 light:text-blue-600 font-semibold">scalable</span>, and{" "}
            <span className="text-blue-400 light:text-blue-600 font-semibold">high-performance</span> applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skillCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color)
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl border border-neutral-700/50 light:border-neutral-200 hover:${colorClasses.border} bg-neutral-800/50 light:bg-white p-6 transition-all group shadow-sm light:shadow-md`}
                >
                  <h3 className={`text-lg font-semibold mb-6 ${colorClasses.text}`}>
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill: Skill, skillIndex: number) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700/30 light:hover:bg-neutral-100 transition-colors"
                      >
                        <skill.icon className={`w-5 h-5 ${colorClasses.text}`} />
                        <span className="text-sm font-medium text-neutral-200 light:text-neutral-800">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
