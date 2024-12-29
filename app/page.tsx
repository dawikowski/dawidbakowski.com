'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ScrambleHeading } from '@/components/ScrambleHeading'
import { KeyboardNav } from '@/components/KeyboardNav'
import { TimelineSection } from '@/components/TimelineSection'
import { LeadershipSection } from '@/components/LeadershipSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { BlogSection } from '@/components/BlogSection'
import { MapPin, Building2, GraduationCap } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [nameScrambled, setNameScrambled] = useState(false)

  useEffect(() => {
    const handleScramble = (event: CustomEvent) => {
      setActiveSection(event.detail.sectionId)
    }

    window.addEventListener('scrambleHeading', handleScramble as EventListener)
    return () => {
      window.removeEventListener('scrambleHeading', handleScramble as EventListener)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[rgb(18,18,18)] text-gray-900 dark:text-white">
      <ThemeToggle />
      <KeyboardNav />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="pt-20 sm:pt-24">
          <ScrambleHeading 
            text="dawid bakowski" 
            as="h1"
            className="text-3xl sm:text-4xl font-bold mb-8" 
            scramble={!nameScrambled}
            onScrambleComplete={() => setNameScrambled(true)}
          />
          <div className="space-y-3 text-gray-400 text-sm sm:text-base"> 
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 flex-shrink-0" /> 
              <span>düsseldorf, germany</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 flex-shrink-0" /> 
              <span>cloud solution engineering @ mhp - a porsche company</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 flex-shrink-0" /> 
              <span>information systems @ university of cologne</span>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 mt-8 text-sm sm:text-base" 
          >
            Passionate about innovative technologies with extensive experience in developing
            scalable software solutions. Specialized in <span className="text-green-500">cloud computing</span>, 
            <span className="text-green-500">AI integration</span>, and <span className="text-green-500">modern web development</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 sm:gap-6 mt-8 text-xs sm:text-sm" 
          >
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-green-500 underline"
            >
              email
            </a>
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 underline"
            >
              x.com
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 underline"
            >
              linkedin
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 underline"
            >
              resume
            </a>
          </motion.div>
        </section>

        <TimelineSection scramble={activeSection === 'work'} className="-mt-16 mb-12" />
        <LeadershipSection scramble={activeSection === 'leadership'} className="mb-12" />
        <ProjectsSection scramble={activeSection === 'projects'} className="mb-12" />
        <BlogSection scramble={activeSection === 'blog'} className="mb-12" />

        <footer className="py-8 text-center text-xs text-gray-400">
          <p>made by dawid bakowski, inspired by <a href="https://x.com/nexxeln" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">nexxel</a></p>
        </footer>
      </main>
    </div>
  )
}

