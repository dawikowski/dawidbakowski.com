'use client'

import { useState } from 'react'
import { ScrambleHeading } from './ScrambleHeading'
import { LeadershipModal } from './LeadershipModal'
import { motion } from 'framer-motion'

const leadershipExperience = {
  title: "head of it",
  organization: "heinrich heine consulting",
  website: "https://www.hhc-duesseldorf.de",
  date: "jun 2022 - sep 2023",
  shortDescription: "led the it team of a student-run enterprise",
  detailedDescription: "as head of it at heinrich heine consulting, i led strategic planning and operations for the it department. i managed a team of 8 students while serving on the extended management board. my role involved overseeing infrastructure of our systems, technical projects, and driving process improvements.",
  achievements: [
    "streamlined it processes for 90+ members",
    "successfully handled a critical security incident and rebuilt systems",
    "improved technical documentation and processes",
    "organized regular team building events to strengthen collaboration",
    "part of interviews and selections for new team members",
    "got to work with talented students who shared passion for tech and consulting"
  ],
  skills: ["strategic planning", "infrastructure management", "system administration", "team leadership"],
  images: ["/images/hhc1.jpg", "/images/hhc2.jpg"]
}

export function LeadershipSection({ className }: { className?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="leadership" className={`${className}`}>
      <ScrambleHeading
        text="# leadership"
        className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        scramble={false}
      />
      <motion.div 
        className="px-4 py-2 rounded-lg cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-200 group-hover:text-green-500 transition-colors">
          {leadershipExperience.organization}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-500 italic mt-1">
          {leadershipExperience.title} ({leadershipExperience.date})
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {leadershipExperience.shortDescription}
        </p>
      </motion.div>
      <LeadershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={leadershipExperience}
      />
    </section>
  )
}


