'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const sections = [
  { key: 'h', label: 'home', id: 'home' },
  { key: 'w', label: 'work', id: 'work' },
  { key: 'l', label: 'leadership', id: 'leadership' },
  { key: 'p', label: 'projects', id: 'projects' },
  { key: 'b', label: 'blog', id: 'blog' }
]

export function KeyboardNav({ currentPage = 'home' }: { currentPage?: string }) {
  const router = useRouter()

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      const section = sections.find(s => s.key === event.key.toLowerCase())
      if (section) {
        event.preventDefault()
        if (currentPage !== 'home') {
          if (section.key === 'h') {
            router.push('/')
          } else if (section.key === 'p') {
            router.push('/projects')
          } else if (section.key === 'b') {
            router.push('/blog')
          }
        } else {
          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
          window.dispatchEvent(new CustomEvent('scrambleHeading', { detail: { sectionId: section.id } }))
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentPage, router])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 dark:bg-black/5 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex justify-center space-x-4 sm:space-x-8">
          {sections.filter(section => currentPage === 'home' || ['h', 'p', 'b'].includes(section.key)).map((section) => (
            <li key={section.key}>
              <button
                onClick={() => {
                  if (currentPage !== 'home') {
                    if (section.key === 'h') {
                      router.push('/')
                    } else if (section.key === 'p') {
                      router.push('/projects')
                    } else if (section.key === 'b') {
                      router.push('/blog')
                    }
                  } else {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                    window.dispatchEvent(new CustomEvent('scrambleHeading', { detail: { sectionId: section.id } }))
                  }
                }}
                className="text-xs sm:text-sm transition-colors group"
              >
                <span className="text-gray-500 dark:text-gray-400 group-hover:text-green-500">[{section.key}]</span>{' '}
                <span className="group-hover:text-green-500">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

