import React from 'react'
import { 
  Code, 
  Palette, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Award, 
  Users, 
  Star, 
  Clock, 
  TrendingUp,
  Heart,
  Target,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import Navbar from '../Components/Navbar'

export default function About() {
  const skills = [
    { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500" },
    { name: "Next.js", level: 88, color: "from-gray-500 to-gray-700" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", level: 82, color: "from-blue-600 to-blue-800" },
    { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" }
  ]

  const achievements = [
    { icon: <Award className="w-8 h-8" />, title: "50+ Projects", desc: "Successfully completed", color: "text-yellow-500" },
    { icon: <Users className="w-8 h-8" />, title: "50+ Clients", desc: "Happy customers worldwide", color: "text-blue-500" },
    { icon: <Star className="w-8 h-8" />, title: "5.0 Rating", desc: "Average client satisfaction", color: "text-purple-500" },
    { icon: <Clock className="w-8 h-8" />, title: "3+ Years", desc: "Professional experience", color: "text-green-500" }
  ]

  const services = [
    { icon: <Code className="w-6 h-6" />, name: "Frontend Development", desc: "React, Next.js, Vue.js" },
    { icon: <Database className="w-6 h-6" />, name: "Backend Development", desc: "Node..js, Express, APIs" },
    { icon: <Smartphone className="w-6 h-6" />, name: "Mobile Apps", desc: "React Native, Flutter" },
    { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design", desc: "Figma, Adobe XD" },
    { icon: <Cloud className="w-6 h-6" />, name: "Cloud Solutions", desc: "AWS, Azure, GCP" },
    { icon: <Shield className="w-6 h-6" />, name: "Security", desc: "Authentication, Encryption" }
  ]

  const timeline = [
    {
      year: "2021",
      title: "Started Journey",
      desc: "Began learning web development with HTML, CSS, and JavaScript"
    },
    {
      year: "2022",
      title: "First Projects",
      desc: "Completed first freelance projects and built portfolio"
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      desc: "Mastered React, Node.js, and database technologies"
    },
    {
      year: "2024",
      title: "Professional Growth",
      desc: "Expanded to mobile development and cloud solutions"
    }
  ]

  return (
    <>
    <Navbar/>
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
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-blue-200 font-medium">About Me</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meet
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Raja Usama
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Passionate Full-Stack Developer creating exceptional digital experiences with modern technologies and innovative solutions.
            </p>
          </div>

          {/* Profile Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
                  <img
                    src="/img.1 .jpeg"
                    alt="Raja Usama"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-4">Raja Usama</h2>
                  <p className="text-blue-300 text-xl mb-4">Full-Stack Developer & Digital Solutions Expert</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate developer with 3+ years of experience in creating modern web applications. 
                    I specialize in React, Node.js, and cloud technologies, helping businesses transform their ideas into reality.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                  <div className={achievement.color}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</div>
                <div className="text-gray-600">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Professional development timeline</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div></>
  )
}
