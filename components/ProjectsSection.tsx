'use client'

import { useState } from 'react'
import { ScrambleHeading } from './ScrambleHeading'
import Link from 'next/link'
import { ProjectModal } from './ProjectModal'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "easyfind retail navigation",
    description: "designed intelligent store navigation integrating ar with indoor positioning",
    detailedDescription: "created ar retail navigation app concept with intuitive design and scalable cloud backend for information systems development course",
    website: "https://google.com",
    image: "/images/easyfind.jpg",
    skills: ["cloud architecture", "system design", "ui/ux design"],
    achievements: [
      "planned and designed scalable cloud architecture",
      "researched ar applications in retail",
      "prototyped user-friendly interfaces",
      "created agile development and timeline"
    ]
  },
  {
    title: "azure openai enterprise demo",
    description: "presented a cognitive search tool that lets you chat with your business data",
    detailedDescription: "demonstrated an azure openai chatbot demo that integrates with enterprise data, enabling conversational search powered by azure cognitive search",
    website: "https://www.linkedin.com/feed/update/urn:li:activity:7069571634516398082/",
    image: "/images/openaidemo.jpg",
    skills: ["azure openai", "cognitive search", "technical presentation"],
    achievements: [
      "built an entire presentation from scratch",
      "highlighted potential enterprise applications",
      "cognitive search for document indexing and retrieval",
      "explored prompt engineering techniques",
    ]
  }
]

export function ProjectsSection({ className }: { className?: string }) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className={className}>
      <div className="flex justify-between items-center mb-4">
        <ScrambleHeading
          text="# projects"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
          scramble={false}
        />
        <Link 
          href="/projects" 
          className="text-sm text-green-500 hover:underline"
        >
          view all projects →
        </Link>
      </div>
      <div className="space-y-8">
        {projects.map((project) => (
          <motion.div 
            key={project.title} 
            className="px-4 py-2 rounded-lg cursor-pointer group"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-200 group-hover:text-green-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {project.description}
            </p>
          </motion.div>
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

