'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface LeadershipModalProps {
  isOpen: boolean
  onClose: () => void
  experience: {
    title: string
    organization: string
    date: string
    shortDescription: string
    detailedDescription: string
    achievements: string[]
    skills: string[]
    images?: string[]
    website: string
  }
}

export function LeadershipModal({ 
  isOpen, 
  onClose, 
  experience
}: LeadershipModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[rgb(18,18,18)] border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl"
          >
            <div className="relative p-6">
              <div className="flex justify-between items-start mb-6">
                <p className="text-sm text-green-500">press <kbd className="px-2 py-1 bg-gray-800 rounded">esc</kbd> to close</p>
                <div className="flex items-center gap-4">
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-500 hover:underline"
                  >
                    visit organization
                  </a>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">description</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {experience.detailedDescription}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">key achievements</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">skills & competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {experience.images && experience.images.length > 0 && (
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      {experience.images.slice(0, 2).map((image, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                          <Image
                            src={image}
                            alt={`Leadership image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

