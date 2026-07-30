import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window === 'undefined') return 'dark'

        const savedTheme = window.localStorage.getItem('theme')
        return savedTheme === 'light' ? 'light' : 'dark'
    })

    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light')
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        window.localStorage.setItem('theme', newTheme)
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-all"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-blue-400" />
            )}
        </button>
    )
}
