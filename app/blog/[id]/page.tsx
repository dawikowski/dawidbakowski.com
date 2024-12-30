import { getPostData, getSortedPostsData } from '@/lib/blog'
import Link from 'next/link'
import { KeyboardNav } from '@/components/KeyboardNav'
import { ThemeToggle } from '@/components/ThemeToggle'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function Post({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id)
  
  if (!postData) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[rgb(18,18,18)] text-gray-900 dark:text-white">
      <KeyboardNav currentPage="blog" />
      <ThemeToggle />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="text-sm text-green-500 hover:underline"
          >
            ← back to all posts
          </Link>
        </div>
        <article>
          <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-500 mb-8">{postData.date}</div>
          <div className="prose dark:prose-invert max-w-none">
            {postData.content}
          </div>
        </article>
      </main>
    </div>
  )
}

