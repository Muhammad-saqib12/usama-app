import React from 'react'
import { 
  Star, 
  Heart, 
  Eye, 
  ArrowRight, 
  Code, 
  Palette, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function Cards() {
  const serviceCards = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Create stunning, responsive websites with modern technologies and best practices.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
      price: "From $299",
      rating: 4.9,
      projects: 150,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Build powerful mobile applications for iOS and Android with cross-platform solutions.",
      features: ["React Native", "Flutter", "Native Development"],
      price: "From $599",
      rating: 4.8,
      projects: 89,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 3,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Design beautiful, intuitive user interfaces that provide exceptional user experiences.",
      features: ["Figma & Adobe XD", "User Research", "Prototyping"],
      price: "From $199",
      rating: 4.9,
      projects: 120,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      id: 4,
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Deploy and manage scalable cloud infrastructure with AWS, Azure, and Google Cloud.",
      features: ["AWS & Azure", "DevOps", "Auto Scaling"],
      price: "From $399",
      rating: 4.7,
      projects: 67,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 5,
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      features: ["Python & R", "Machine Learning", "Data Visualization"],
      price: "From $499",
      rating: 4.8,
      projects: 45,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 6,
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and monitoring.",
      features: ["Security Audit", "Penetration Testing", "24/7 Monitoring"],
      price: "From $699",
      rating: 4.9,
      projects: 32,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ]

  const testimonialCards = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "UsamaAbbasi delivered an exceptional website that exceeded our expectations. The attention to detail and modern design is outstanding.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The mobile app development was flawless. Professional, fast, and exactly what we needed for our startup.",
      rating: 5,
      project: "Mobile Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Amazing UI/UX design work! Our conversion rates increased by 40% after the redesign. Highly recommended!",
      rating: 5,
      project: "Website Redesign"
    }
  ]

  const statsCards = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: <Award className="w-6 h-6" />, number: "150+", label: "Projects Done", color: "text-purple-600" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "99%", label: "Success Rate", color: "text-green-600" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "Support", color: "text-orange-600" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the modern world.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${card.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={card.iconColor}>
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {card.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{card.rating}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {card.projects} projects
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  {card.price}
                </div>
                <button className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h3>
          <p className="text-xl text-gray-600">Don't just take our word for it</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialCards.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center opacity-20">
                <span className="text-2xl">"</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Project */}
              <div className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
