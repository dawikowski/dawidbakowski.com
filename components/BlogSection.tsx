'use client'

import { ScrambleHeading } from './ScrambleHeading'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import { motion } from 'framer-motion'

const recentPosts = getSortedPostsData().slice(0, 3)

export function BlogSection({ className }: { className?: string }) {
  return (
    <section id="blog" className={className}>
      <div className="flex justify-between items-center mb-4">
        <ScrambleHeading
          text="# blog"
          className="text-2xl sm:text-3xl font-bold"
          scramble={false}
        />
        <Link 
          href="/blog" 
          className="text-sm text-green-500 hover:underline"
        >
          view all posts →
        </Link>
      </div>
      <div className="space-y-1">
        {recentPosts.length === 0 ? (
          <div className="px-4 py-2 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 text-lg">No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
          recentPosts.map((post) => (
            <motion.div 
              key={post.id} 
              className="px-4 py-2 rounded-lg cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 group-hover:text-green-500 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </section>
  )
}

