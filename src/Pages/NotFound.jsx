import React from 'react'
import { 
  Home, 
  ArrowLeft, 
  Search,
  Heart,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                404
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Page Not Found</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Looking for something specific?
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search our website..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Popular Links */}
          <div className="mt-8">
            <p className="text-gray-600 mb-4">Or try these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                About
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/portfolio"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Portfolio
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">
                Made with love by Raja Usama
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
