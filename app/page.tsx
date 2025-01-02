'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import { ThemeToggle } from '@/components/ThemeToggle'
import { ScrambleHeading } from '@/components/ScrambleHeading'
import { KeyboardNav } from '@/components/KeyboardNav'
import { TimelineSection } from '@/components/TimelineSection'
import { LeadershipSection } from '@/components/LeadershipSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { BlogSection } from '@/components/BlogSection'
import { MapPin, Building2, GraduationCap } from 'lucide-react'

export default function Home() {
  const [nameScrambled, setNameScrambled] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      if (['h', 'w', 'l', 'p', 'b'].includes(key)) {
        const sectionId = {
          'h': 'home',
          'w': 'work',
          'l': 'leadership',
          'p': 'projects',
          'b': 'blog'
        }[key] ?? 'home'
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])


  return (
    <div className="min-h-screen bg-white dark:bg-[rgb(18,18,18)] text-gray-900 dark:text-gray-100">
      {/* <ThemeToggle /> */}
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
          <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base"> 
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
            className="text-gray-700 dark:text-gray-200 mt-8 text-sm sm:text-base" 
          >
            i&apos;m in my mid 20s, studying information systems. i&apos;ve a <span className="text-green-500">passion for solving problems</span>.
            my biggest strength is always being curious and having a drive for learning.
            currently interested in <span className="text-green-500">cloud computing</span>, latest <span className="text-green-500">ai developments</span> and how <span className="text-green-500">businesses</span> can benefit from it.
            when i&apos;m not reading about tech, you&apos;ll find me nerding about nba statistics, playing chess, or at the gym.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 sm:gap-6 mt-8 text-xs sm:text-sm" 
          >
            <a
              href="mailto:dave.bakowski@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 underline"
            >
              email
            </a>
            <a
              href="https://x.com/dawikowski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 underline"
            >
              x.com
            </a>
            <a
              href="https://github.com/dawikowski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 underline"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/dawidbakowski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 underline"
            >
              linkedin
            </a>
            <a
              href="https://drive.google.com/file/d/1Xnrz_BznFMANfttqRHSV-ysnjmlTeIAZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 underline"
            >
              resume
            </a>
          </motion.div>
        </section>

        <TimelineSection className="-mt-16 mb-12" />
        <LeadershipSection className="mb-12" />
        <ProjectsSection className="mb-12" />
        <BlogSection className="mb-12" />

        <footer className="py-8 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>made by dawid bakowski, inspired by <a href="https://x.com/nexxeln" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">nexxel</a></p>
        </footer>
      </main>
    </div>
  )
}

