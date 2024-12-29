'use client'

import { useState } from 'react'
import { ScrambleHeading } from './ScrambleHeading'
import { LeadershipModal } from './LeadershipModal'

const leadershipExperience = {
  title: "head of it",
  organization: "university of cologne",
  date: "jun 2022 - sep 2023",
  description: "led the student body and represented student interests to the university administration.",
  achievements: [
    "Organized and executed the largest student-led charity event in the university's history, raising over €50,000 for local education initiatives",
    "Implemented a new feedback system that increased student participation in university decision-making by 40%",
    "Successfully negotiated for extended library hours during exam periods, benefiting over 5,000 students"
  ],
  skills: ["Leadership", "Public Speaking", "Event Planning", "Negotiation", "Student Advocacy"],
  images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"]
}

export function LeadershipSection({ scramble, className }: { scramble: boolean; className?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="leadership" className={`${className}`}>
      <ScrambleHeading
        text="# leadership"
        className="text-2xl sm:text-3xl font-bold mb-4"
        scramble={scramble}
      />
      <div 
        className="px-4 py-2 rounded-lg cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="text-xl font-medium text-white group-hover:text-green-500 transition-colors">
          {leadershipExperience.organization}
        </h3>
        <p className="text-sm text-gray-600 italic mt-1">
          {leadershipExperience.title} ({leadershipExperience.date})
        </p>
        <p className="text-gray-400 mt-2">
          {leadershipExperience.description}
        </p>
      </div>
      <LeadershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={leadershipExperience}
      />
    </section>
  )
}

