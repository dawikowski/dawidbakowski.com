'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TimelineModal } from './TimelineModal'

interface TimelineCardProps {
  year: string
  title: string
  company: string
  image: string
  isLeft: boolean
  additionalInfo?: string
  modalImages: string[]
  skills: string[]
  description: string
  achievements: string[]
}

export function TimelineCard({ 
  year, 
  title, 
  company, 
  image, 
  isLeft, 
  additionalInfo,
  modalImages,
  skills,
  description,
  achievements
}: TimelineCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-4`}
      >
        <div className={`w-[calc(50%-2rem)] ${isLeft ? 'pr-8' : 'pl-8'} ${isLeft ? 'text-right' : 'text-left'}`}>
          <motion.div
            className="space-y-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsModalOpen(true)}
          >
            <span className="text-lg text-gray-400">{year}</span>
            <h3 className="text-xl font-bold text-white">{company}</h3>
            <p className="text-lg text-gray-400">{title}</p>
            {additionalInfo && (
              <p className="text-sm text-gray-600 italic mt-1">{additionalInfo}</p>
            )}
            <div className="mt-2"> {/* Update 2: Changed mt-4 to mt-2 */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src={image}
                  alt={`${company} image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <TimelineModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        year={year}
        title={title}
        company={company}
        additionalInfo={additionalInfo}
        images={modalImages}
        skills={skills}
        description={description}
        achievements={achievements}
      />
    </>
  )
}

