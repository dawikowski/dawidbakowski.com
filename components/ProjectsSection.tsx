'use client'

import { useState } from 'react'
import { ScrambleHeading } from './ScrambleHeading'
import Link from 'next/link'
import { ProjectModal } from './ProjectModal'

const projects = [
  {
    title: "AR Shopping Experience",
    description: "Developed an augmented reality solution for virtual product visualization in e-commerce.",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["AR", "React Native", "Three.js"],
    achievements: [
      "Increased user engagement by 40%",
      "Reduced product return rates by 25%",
      "Implemented AR features for over 1000 products"
    ]
  },
  {
    title: "Energy Crisis Solution",
    description: "Created an AI-powered system for optimizing energy consumption in smart buildings.",
    image: "/placeholder.svg?height=100&width=100",
    skills: ["AI", "IoT", "Data Analysis"],
    achievements: [
      "Reduced energy consumption by 30% in pilot buildings",
      "Developed predictive maintenance algorithms",
      "Integrated with major smart home platforms"
    ]
  }
]

export function ProjectsSection({ scramble, className }: { scramble: boolean; className?: string }) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className={className}>
      <div className="flex justify-between items-center mb-4">
        <ScrambleHeading
          text="# projects"
          className="text-2xl sm:text-3xl font-bold"
          scramble={scramble}
        />
        <Link 
          href="/projects" 
          className="text-sm text-green-500 hover:underline"
        >
          view all projects →
        </Link>
      </div>
      <div className="space-y-8">
        {projects.slice(0, 2).map((project) => (
          <div 
            key={project.title} 
            className="px-4 py-2 rounded-lg cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-medium text-white group-hover:text-green-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

