import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { SiLeetcode } from "react-icons/si"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
    ]

    const socialLinks = [
        { icon: Github, href: "https://github.com/Aditya41150", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: SiLeetcode, href: "https://leetcode.com/u/Aditya_57/", label: "LeetCode" },
        { icon: BookOpen, href: "https://medium.com/@yourusername", label: "Medium" },
        { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    ]

    return (
        <footer className="border-t border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Aditya.dev</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Building scalable applications with clean architecture and great user experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-400 hover:text-blue-400 transition text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-blue-500 transition-all group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-neutral-800 text-center">
                    <p className="text-neutral-500 text-sm">
                        © {currentYear} Aditya. All rights reserved. Built with React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    )
}
