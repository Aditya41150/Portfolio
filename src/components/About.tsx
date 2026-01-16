import { motion } from "framer-motion"
import { Code2, Rocket, Users, Zap } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building scalable applications with modern frameworks"
    },
    {
        icon: Rocket,
        title: "Mobile Development",
        description: "Cross-platform apps with Flutter & React Native"
    },
    {
        icon: Zap,
        title: "Performance Focused",
        description: "Optimizing for speed and user experience"
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Open-source contributor and team player"
    }
]

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-neutral-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        About Me
                    </h2>

                    <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
                        {/* Bio Section */}
                        <div className="space-y-6">
                            <p className="text-neutral-300 leading-relaxed text-lg">
                                I'm a passionate <span className="text-blue-400 font-semibold">Software Developer</span> with
                                expertise in building high-performance web and mobile applications. I specialize in
                                <span className="text-blue-400 font-semibold"> React</span>,
                                <span className="text-blue-400 font-semibold"> Flutter</span>, and
                                <span className="text-blue-400 font-semibold"> Cloud technologies</span>.
                            </p>

                            <p className="text-neutral-300 leading-relaxed text-lg">
                                With hands-on experience in <span className="text-blue-400 font-semibold">blockchain development</span>,
                                <span className="text-blue-400 font-semibold"> IoT systems</span>, and
                                <span className="text-blue-400 font-semibold"> open-source contributions</span>, I bring a
                                unique blend of technical skills and problem-solving abilities to every project.
                            </p>

                            <p className="text-neutral-300 leading-relaxed text-lg">
                                I'm currently seeking opportunities to contribute to innovative teams building
                                impactful products. Let's build something amazing together!
                            </p>

                            <div className="flex gap-4 pt-4">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all transform hover:scale-105 inline-flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-blue-500/50 transition-all group"
                                >
                                    <item.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-neutral-400">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
