// Remove fs, path, and matter imports as they won't work in the browser
interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

// TODO: test blog functionality for multiple posts
// TODO: make sure to have styling for posts
// TODO: implement correct /posts folder which stores blog posts in the future

// Static blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 'my-first-post',
    title: 'blog coming soon!',
    date: 'jan 1, 2025',
    content: 
    `
    stay tuned for content in 2025 :)
    `
  }
];

export function getSortedPostsData() {
  return blogPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(id: string) {
  return blogPosts.find(post => post.id === id);
}

