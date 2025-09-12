import React from 'react'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Search,
  Filter,
  BookOpen
} from 'lucide-react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends in web development including AI integration, WebAssembly, and modern frameworks that are shaping the future of the web.",
      content: "Web development is evolving rapidly, and 2024 promises to bring exciting new technologies and approaches...",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Raja Usama",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
      tags: ["React", "Next.js", "AI", "WebAssembly"],
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn the essential best practices for building scalable React applications that can grow with your business needs.",
      content: "Building scalable React applications requires careful planning and implementation of best practices...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Raja Usama",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Performance", "Architecture", "Best Practices"],
      views: 980,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: "Mobile-First Design: Creating Responsive User Experiences",
      excerpt: "Discover the importance of mobile-first design and how to create responsive user experiences that work across all devices.",
      content: "Mobile-first design is no longer optional in today's digital landscape. With the majority of users accessing websites on mobile devices...",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Raja Usama",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "UI/UX",
      tags: ["Mobile", "Responsive", "Design", "UX"],
      views: 750,
      likes: 45,
      comments: 12
    },
    {
      id: 4,
      title: "Node.js Performance Optimization: Tips and Tricks",
      excerpt: "Learn how to optimize your Node.js applications for better performance and scalability in production environments.",
      content: "Node.js performance optimization is crucial for building fast and scalable applications. Here are some proven techniques...",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Raja Usama",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Backend",
      tags: ["Node.js", "Performance", "Optimization", "Backend"],
      views: 1100,
      likes: 78,
      comments: 19
    },
    {
      id: 5,
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Explore essential database design patterns and how to implement them in modern web applications for better data management.",
      content: "Database design is a critical aspect of application development. Understanding and implementing the right patterns...",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Raja Usama",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Database",
      tags: ["Database", "Design Patterns", "MongoDB", "PostgreSQL"],
      views: 890,
      likes: 56,
      comments: 14
    },
    {
      id: 6,
      title: "Cloud Computing: Choosing the Right Platform for Your Project",
      excerpt: "A comprehensive guide to choosing the right cloud platform for your project, comparing AWS, Azure, and Google Cloud.",
      content: "Cloud computing has revolutionized how we build and deploy applications. Choosing the right platform is crucial...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Raja Usama",
      date: "2023-12-15",
      readTime: "10 min read",
      category: "Cloud",
      tags: ["Cloud", "AWS", "Azure", "Google Cloud"],
      views: 1200,
      likes: 92,
      comments: 28
    }
  ]

  const categories = ["All", "Web Development", "React", "UI/UX", "Backend", "Database", "Cloud"]
  const popularTags = ["React", "Node.js", "JavaScript", "CSS", "HTML", "MongoDB", "AWS", "Design"]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 font-medium">Tech Blog</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Latest
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Articles
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest trends, tutorials, and insights in web development, technology, and digital innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Featured Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {post.comments}
                            </div>
                          </div>
                          <button className="group/btn flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                    Load More Articles
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  
                  {/* Search */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Search Articles</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            index === 0 
                              ? 'bg-blue-100 text-blue-600 font-medium' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <button
                          key={index}
                          className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 px-3 py-1 rounded-full transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      Subscribe to get the latest articles and updates delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button className="w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-semibold transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
