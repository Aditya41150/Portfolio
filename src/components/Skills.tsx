import { motion } from "framer-motion"
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiKotlin,
  SiSolidity,
  SiDart,
  SiC,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiIntellijidea,
} from "react-icons/si"

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Solidity", icon: SiSolidity },
      { name: "Dart", icon: SiDart },
      { name: "C", icon: SiC },
    ],
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
 {
  title: "Developer Tools",
  skills: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Android Studio", icon: SiAndroidstudio },
    { name: "IntelliJ IDEA", icon: SiIntellijidea },
  ],
},
]

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight">
          Skills
        </h2>

        <p className="text-neutral-400 mt-3 max-w-xl">
          Technologies and tools I use to build reliable,
          scalable, and maintainable software.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition"
            >
              <h3 className="text-lg font-medium mb-4">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 text-sm text-neutral-300
                               hover:text-white transition"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
