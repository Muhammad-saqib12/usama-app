import React from 'react'
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Clock,
  Globe,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Monitor,
  Smartphone as Mobile,
  Palette,
  BarChart3
} from 'lucide-react'

export default function Services() {
  const frontendServices = [
    { icon: <Monitor className="w-6 h-6" />, name: "React.js", desc: "Modern UI Development" },
    { icon: <Globe className="w-6 h-6" />, name: "Next.js", desc: "Full-Stack Framework" },
    { icon: <Palette className="w-6 h-6" />, name: "Tailwind CSS", desc: "Utility-First Styling" },
    { icon: <Mobile className="w-6 h-6" />, name: "Responsive Design", desc: "Mobile-First Approach" }
  ]

  const backendServices = [
    { icon: <Server className="w-6 h-6" />, name: "Node.js", desc: "JavaScript Backend" },
    { icon: <Database className="w-6 h-6" />, name: "MongoDB", desc: "NoSQL Database" },
    { icon: <Database className="w-6 h-6" />, name: "PostgreSQL", desc: "Relational Database" },
    { icon: <Cloud className="w-6 h-6" />, name: "Express.js", desc: "Web Framework" }
  ]

  const packages = [
    {
      name: "Starter Package",
      price: "$299",
      duration: "2-3 weeks",
      features: [
        "Responsive Website Design",
        "Frontend Development (React)",
        "Basic Backend API",
        "Database Integration",
        "SEO Optimization",
        "1 Month Support"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional Package",
      price: "$599",
      duration: "4-6 weeks",
      features: [
        "Full-Stack Web Application",
        "Advanced Frontend (React/Next.js)",
        "Complete Backend API",
        "Database Design & Integration",
        "User Authentication",
        "Payment Integration",
        "Admin Dashboard",
        "3 Months Support"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$999",
      duration: "8-12 weeks",
      features: [
        "Complex Full-Stack Application",
        "Microservices Architecture",
        "Advanced Database Design",
        "Real-time Features",
        "Third-party Integrations",
        "Advanced Security",
        "Performance Optimization",
        "Mobile App (Optional)",
        "6 Months Support"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ]

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Projects Completed", color: "text-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "100%", label: "Client Satisfaction", color: "text-purple-600" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support Available", color: "text-green-600" },
    { icon: <Star className="w-8 h-8" />, number: "5.0", label: "Average Rating", color: "text-yellow-600" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-200 font-medium">Full-Stack Development Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Complete
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full-Stack Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From frontend to backend, database to deployment - we deliver complete web applications that scale with your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-4">
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {frontendServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-blue-400">{service.icon}</div>
                    <div>
                      <div className="text-white font-semibold">{service.name}</div>
                      <div className="text-gray-400 text-sm">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Backend Development</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {backendServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-purple-400">{service.icon}</div>
                    <div>
                      <div className="text-white font-semibold">{service.name}</div>
                      <div className="text-gray-400 text-sm">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">Flexible pricing for every project size</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                  <div className="text-gray-400">Duration: {pkg.duration}</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Raja Usama</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full-Stack Expertise</h3>
              <p className="text-gray-300">Complete development from frontend to backend with modern technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Agile Development</h3>
              <p className="text-gray-300">Fast delivery with iterative development and regular updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-300">Thorough testing and quality checks for bug-free applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
