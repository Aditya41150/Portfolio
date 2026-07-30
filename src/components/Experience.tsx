import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import metacraftersLogo from "../assets/logos/metacrafters.jpg";

const experiences = [
  {
    role: "Summer Trainee",
    company: "Metacrafters",
    logo: metacraftersLogo,
    duration: "Apr 2024 – Jul 2024",
    location: "Remote",
    certificate:
      "https://www.linkedin.com/in/aditya41150/overlay/Position/2406589181/treasury/?profileId=ACoAAD4nd8gBO7SZkR1T1jw-jk2QTiS1VayNjY8",

    points: [
      "Optimized Solidity smart contracts for security and gas efficiency, reducing execution costs by 15% and improving deployment reliability",
      "Engineered blockchain applications using Solidity, Ethereum (EVM), Avalanche Subnets, and Avalanche HyperSDK, including ERC-20 token and contract management",
      "Presented technical code walkthroughs for mentor-reviewed blockchain projects, incorporating feedback to meet requirements",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Experience
          </h2>

          <p className="mt-3 max-w-2xl text-lg text-neutral-400">
            Hands-on experience building and shipping blockchain applications in
            a fast-paced, mentor-reviewed environment.
          </p>
        </motion.div>

        <div className="relative mt-16 border-l border-neutral-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="ml-6 mb-16"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[7px] mt-5 h-3 w-3 rounded-full bg-white" />

              {/* Header */}
              <div className="flex items-center gap-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-12 w-12 rounded-xl border border-neutral-700 bg-neutral-900 object-contain p-2"
                />

                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>

                  <p className="text-neutral-400">{exp.company}</p>
                </div>
              </div>

              {/* Date */}
              <p className="mt-3 text-sm text-neutral-500">
                {exp.duration} · {exp.location}
              </p>

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-neutral-600">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>


              {/* Certificate */}
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}