'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectModal } from '@/components/ProjectModal'
import Link from 'next/link'
import { ScrambleHeading } from '@/components/ScrambleHeading'
import { ArrowUpRight } from 'lucide-react'
import { KeyboardNav } from '@/components/KeyboardNav'
import { ThemeToggle } from '@/components/ThemeToggle'

const projects = [
  {
    title: "AR Shopping Experience",
    date: "may 2023",
    description: "Developed an augmented reality solution for virtual product visualization in e-commerce.",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["AR", "React Native", "Three.js"],
    achievements: [
      "Increased user engagement by 40%",
      "Reduced product return rates by 25%",
      "Implemented AR features for over 1000 products"
    ],
    github: "https://github.com/yourusername/ar-shopping",
    demo: "https://ar-shopping-demo.com"
  },
  {
    title: "Energy Crisis Solution",
    date: "feb 2023",
    description: "Created an AI-powered system for optimizing energy consumption in smart buildings.",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["AI", "IoT", "Data Analysis"],
    achievements: [
      "Reduced energy consumption by 30% in pilot buildings",
      "Developed predictive maintenance algorithms",
      "Integrated with major smart home platforms"
    ],
    github: "https://github.com/yourusername/energy-crisis",
    demo: "https://energy-crisis-solution.com"
  },
  {
    title: "Blockchain Voting System",
    date: "nov 2022",
    description: "Implemented a secure and transparent voting system using blockchain technology.",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["Blockchain", "Smart Contracts", "Cryptography"],
    achievements: [
      "Successfully used in a local election with 10,000 voters",
      "Achieved 99.99% uptime during voting period",
      "Reduced vote counting time from days to minutes"
    ],
    github: "https://github.com/yourusername/blockchain-voting"
  }
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [hasScrambled, setHasScrambled] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-[rgb(18,18,18)] text-gray-900 dark:text-white">
      <KeyboardNav currentPage="projects" />
      <ThemeToggle />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <ScrambleHeading
            text="# projects"
            className="text-3xl font-bold"
            scramble={!hasScrambled}
            onScrambleComplete={() => setHasScrambled(true)}
          />
          <Link 
            href="/"
            className="text-sm text-green-500 hover:underline"
          >
            ← back home
          </Link>
        </div>

        <p className="text-gray-400 font-mono text-sm sm:text-base mb-8">
          here are some of the projects i've worked on. i love building tools that solve real problems and exploring new technologies along the way.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h2 className="text-xl font-semibold mb-1 flex items-center">
                {project.title}
                <ArrowUpRight className="ml-2 w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-sm text-gray-400 mb-2">{project.date}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

