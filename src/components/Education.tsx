import { motion } from "framer-motion"
import { GraduationCap, Award, Trophy } from "lucide-react"

const education = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Chandigarh University",
        duration: "2022 - 2026",
        gpa: "8.5 CGPA",
        highlights: [
            "Relevant Coursework: Data Structures, Algorithms, Web Development, Mobile Development",
            "Active member of coding clubs and technical societies"
        ]
    }
]

const achievements = [
    {
        icon: Trophy,
        title: "Merit-Based Scholarship",
        organization: "Metacrafters",
        description: "Earned $175 scholarship for exceptional performance in blockchain development program",
        date: "2024"
    },
    {
        icon: Award,
        title: "Open Source Contributor",
        organization: "GirlScript Summer of Code",
        description: "Successfully contributed to multiple Flutter projects, fixing 10+ bugs and adding new features",
        date: "2024"
    },
    {
        icon: Trophy,
        title: "Problem Solver",
        organization: "LeetCode",
        description: "Solved 750+ algorithmic problems across various difficulty levels",
        date: "Ongoing"
    }
]

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 light:bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 light:text-neutral-900">
                        Education & Achievements
                    </h2>

                    {/* Education */}
                    <div className="mt-12">
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="w-6 h-6 text-blue-400 light:text-blue-600" />
                            <h3 className="text-2xl font-semibold text-neutral-100 light:text-neutral-900">Education</h3>
                        </div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-xl bg-neutral-800/50 light:bg-white border border-neutral-700/50 light:border-neutral-200 hover:border-blue-500/50 transition-all shadow-sm light:shadow-md"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white light:text-neutral-900">{edu.degree}</h4>
                                        <p className="text-blue-400 light:text-blue-600 font-medium mt-1">{edu.institution}</p>
                                    </div>
                                    <div className="text-neutral-400 light:text-neutral-600 mt-2 md:mt-0 text-right">
                                        <p>{edu.duration}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-neutral-300 light:text-neutral-700">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <div className="mt-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="w-6 h-6 text-blue-400 light:text-blue-600" />
                            <h3 className="text-2xl font-semibold text-neutral-100 light:text-neutral-900">Achievements</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-neutral-800/50 light:bg-white border border-neutral-700/50 light:border-neutral-200 hover:border-blue-500/50 transition-all group shadow-sm light:shadow-md"
                                >
                                    <achievement.icon className="w-8 h-8 text-blue-400 light:text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-semibold text-white light:text-neutral-900 mb-2">{achievement.title}</h4>
                                    <p className="text-sm text-blue-400 light:text-blue-600 mb-3">{achievement.organization}</p>
                                    <p className="text-sm text-neutral-300 light:text-neutral-700 mb-3">{achievement.description}</p>
                                    <p className="text-xs text-neutral-500">{achievement.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
