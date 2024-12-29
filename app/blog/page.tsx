import { getSortedPostsData } from '@/lib/blog'
import Link from 'next/link'
import { ScrambleHeading } from '@/components/ScrambleHeading'
import { KeyboardNav } from '@/components/KeyboardNav'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="min-h-screen bg-white dark:bg-[rgb(18,18,18)] text-gray-900 dark:text-white">
      <KeyboardNav currentPage="blog" />
      <ThemeToggle />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <ScrambleHeading
            text="# blog"
            className="text-3xl font-bold"
            scramble={false}
          />
          <Link 
            href="/"
            className="text-sm text-green-500 hover:underline"
          >
            ← back home
          </Link>
        </div>

        {allPostsData.length === 0 ? (
          <p className="text-gray-400">No blog posts available yet. Check back soon!</p>
        ) : (
          <div className="space-y-4">
            {allPostsData.map(({ id, date, title }) => (
              <div
                key={id}
                className="px-4 py-2 rounded-lg cursor-pointer group"
              >
                <Link href={`/blog/${id}`}>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-200 group-hover:text-green-500 transition-colors">
                      {title}
                    </h2>
                    <span className="text-sm text-gray-500">{date}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

