'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has a saved preference or if dark mode is preferred
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    
    setIsDark(isDarkMode)
    applyTheme(isDarkMode)
  }, [])

  const applyTheme = (dark: boolean) => {
    const htmlElement = document.documentElement
    if (dark) {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      suppressHydrationWarning
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  )
}

export default ThemeToggle
