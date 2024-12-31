'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectModal } from '@/components/ProjectModal'
import { ScrambleHeading } from '@/components/ScrambleHeading'
import { KeyboardNav } from '@/components/KeyboardNav'
// import { ThemeToggle } from '@/components/ThemeToggle'

type Project = {
  title: string
  date: string
  description: string
  detailedDescription: string
  image: string
  skills: string[]
  achievements: string[]
  website?: string
  isNDA?: boolean
}

const projects: Project[] = [
  {
    title: "my personal website and portfolio",
    date: "dec 2024",
    description: "developed a responsive personal website to showcase projects and skills",
    detailedDescription: "built a personal portfolio from the ground up during christmas break to establish an online presence and display my projects",
    website: "https://github.com/dawikowski/personal-website-2025",
    image: "/images/myname.jpg",
    skills: ["software engineering", "typescript", "next.js", "tailwind css"],
    achievements: [
      "made the text do a little japanese scramble",
      "optimizations to keep the site speed on point",
      "implemented responsive layouts",
      "had a lot of fun using v0 by vercel"
    ],
  },
  {
    title: "easyfind retail navigation",
    date: "jul 2024",
    description: "designed a store navigation concept integrating ar with indoor positioning",
    detailedDescription: "created ar retail navigation app concept with intuitive design and scalable cloud backend for the information systems development course",
    website: "https://drive.google.com/file/d/1E4XtXmCgUS3gMlhpVgt2mktw5xe2j0f6/view?usp=sharing",
    image: "/images/easyfind.jpg",
    skills: ["cloud architecture", "system design", "ui/ux design"],
    achievements: [
      "planned and designed scalable cloud architecture",
      "researched ar applications in retail",
      "prototyped user-friendly interfaces",
      "created agile development and timeline"
    ],
  },
  {
    title: "azure openai enterprise demo",
    date: "aug 2023",
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
  },
  {
    title: "sandbox iot smart energy monitoring",
    date: "feb 2023",
    description: "designed a home energy monitoring system concept",
    detailedDescription: "designed a home energy monitoring system concept using iot sensors and a mobile app for the system analysis and design course",
    website: "https://drive.google.com/file/d/1_K985Eh4BYebRQjR2SaaEGdVnZejEZtR/view?usp=sharing",
    image: "/images/sandbox.jpg",
    skills: ["system analysis", "system design", "requirements engineering"],
    achievements: [
      "designed a layered architecture using azure",
      "modeled system functionality and structure",
      "prototyped an intuitive mobile app ui",
      "gathered and prioritized system requirements"
    ]
  },
  {
    title: "hr survey analysis tool",
    date: "feb 2022",
    description: "developed an excel dashboard to automate hr surveys",
    detailedDescription: "created an automated excel tool as a freelance consultant to optimize the processing and analysis of employee surveys for a defense company's hr team",
    image: "/images/surveyautomation.jpg",
    skills: ["automation", "data processing", "it-consulting"],
    achievements: [
      "enhanced ability to quickly derive insights from data",
      "automated data processing tasks",
    ],
    isNDA: true
  },
  {
    title: "contactless payment at gas stations",
    date: "dec 2021",
    description: "tested a new payment feature at gas stations across europe",
    detailedDescription: "worked as a freelance consultant to test a contactless payment solution at gas stations in germany, benelux, and austria for a major european mobility services company",
    image: "/images/contactlesspayment.jpg",
    skills: ["software testing", "data analysis", "it-consulting"],
    achievements: [
      "analyzed test results and user feedback data",
      "executed comprehensive test cases",
      "evaluated functionality and security",
    ],
    isNDA: true
  }
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hasScrambled, setHasScrambled] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-[rgb(18,18,18)] text-gray-900 dark:text-white">
      <KeyboardNav currentPage="projects" />
      {/* <ThemeToggle /> */}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <ScrambleHeading
            text="# projects"
            className="text-3xl font-bold text-gray-900 dark:text-white"
            scramble={!hasScrambled}
            onScrambleComplete={() => setHasScrambled(true)}
          />
        </div>

        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm sm:text-base mb-8">
          here are some of the projects i&apos;ve worked on along the way.
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
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.date}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
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
          project={{
            ...selectedProject,
            website: selectedProject.website || '',
            isNDA: selectedProject.isNDA
          }}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

