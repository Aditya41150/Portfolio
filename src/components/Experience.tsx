import { motion } from "framer-motion"

const experiences = [
  {
    role: "Summer Trainee",
    company: "Metacrafters",
    duration: "Apr 2024 – Jul 2024",
    points: [
      "Developed smart contracts using Solidity and Ethereum, improving blockchain app performance by ~30%",
      "Explored smart contract debugging tools and gas optimization techniques",
      "Delivered a high-impact project and earned a $175 merit-based scholarship"
    ]
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSOC)",
    duration: "May 2024 – Aug 2024",
    points: [
      "Contributed to a Flutter-based application by adding new features and fixing 10+ bugs",
      "Improved application performance by ~20% through optimizations",
      "Performed code reviews and debugging to enhance app stability and security"
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight">
          Experience
        </h2>

        <p className="text-neutral-400 mt-3 max-w-xl">
          Hands-on experience through internships and open-source
          contributions focused on real-world impact.
        </p>

        <div className="mt-16 relative border-l border-neutral-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="ml-6 mb-16"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-neutral-100" />

              <h3 className="text-lg font-medium">
                {exp.role} ·{" "}
                <span className="text-neutral-400">
                  {exp.company}
                </span>
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                {exp.duration}
              </p>

              <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
