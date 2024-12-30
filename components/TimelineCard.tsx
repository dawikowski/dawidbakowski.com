'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TimelineModal } from './TimelineModal'

interface TimelineCardProps {
  year: string
  title: string
  company: string
  website: string
  isLeft: boolean
  additionalInfo?: string
  modalImages: string[]
  skills: string[]
  description: string
  achievements: string[]
  className?: string;
}

export function TimelineCard({ 
  year, 
  title, 
  company, 
  website,
  isLeft, 
  additionalInfo,
  modalImages,
  skills,
  description,
  achievements,
  className = ''
}: TimelineCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-4 ${className}`}
      >
        <div className={`w-[calc(50%-1rem)] ${isLeft ? 'pr-4' : 'pl-4'} ${isLeft ? 'text-right' : 'text-left'}`}>
          <motion.div
            className="space-y-2 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsModalOpen(true)}
          >
            <span className="text-lg text-gray-500 dark:text-gray-400">{year}</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            <span className="text-green-500 group-hover:underline">{company}</span>
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{title}</p>
            {additionalInfo && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">{additionalInfo}</p>
            )}
          </motion.div>
        </div>
      </motion.div>

      <TimelineModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        year={year}
        title={title}
        company={company}
        website={website}
        additionalInfo={additionalInfo}
        images={modalImages}
        skills={skills}
        description={description}
        achievements={achievements}
      />
    </>
  )
}

