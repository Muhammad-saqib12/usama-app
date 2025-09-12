import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowRight,
  Heart,
  Code,
  Palette,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Globe,
  Clock,
  Award,
  Users,
  Star
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Web Development", icon: <Code className="w-4 h-4" /> },
    { name: "Mobile Apps", icon: <Smartphone className="w-4 h-4" /> },
    { name: "UI/UX Design", icon: <Palette className="w-4 h-4" /> },
    { name: "Cloud Solutions", icon: <Cloud className="w-4 h-4" /> },
    { name: "Database Design", icon: <Database className="w-4 h-4" /> },
    { name: "Cybersecurity", icon: <Shield className="w-4 h-4" /> }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ]

  const companyLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" }
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#", color: "hover:text-gray-400" }
  ]

  const stats = [
    { icon: <Users className="w-5 h-5" />, number: "50+", label: "Happy Clients" },
    { icon: <Award className="w-5 h-5" />, number: "150+", label: "Projects Done" },
    { icon: <Star className="w-5 h-5" />, number: "5.0", label: "Average Rating" },
    { icon: <Clock className="w-5 h-5" />, number: "24/7", label: "Support" }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Raja Usama
                  </span>
                </h3>
                <p className="text-gray-300 text-sm">
                  Full-Stack Developer & Digital Solutions Expert
                </p>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Creating exceptional digital experiences with cutting-edge technology and innovative design solutions for businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">usama@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">+92 300 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">Pakistan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm">{service.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter & Stats */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Stay Updated</h4>
              
              {/* Newsletter Signup */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to our newsletter for the latest updates and tech insights.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-blue-400">{stat.icon}</div>
                    </div>
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} Raja Usama. All rights reserved.
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by Raja Usama</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  )
}
