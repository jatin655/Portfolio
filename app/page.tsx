"use client"

import { AnimatedAvatar } from "@/components/animated-avatar"
import { AnimatedEducation } from "@/components/animated-education"
import {
  AnimatedAboutIcon,
  AnimatedCertificatesIcon,
  AnimatedContactIcon,
  AnimatedEducationIcon,
  AnimatedHomeIcon,
  AnimatedSkillsIcon,
} from "@/components/animated-nav-icons"
import { CosmicBackground } from "@/components/cosmic-background"
import { DarkFluidBackground } from "@/components/dark-fluid-background"
import { FloatingCertificates } from "@/components/floating-certificates"
import { FluidContact } from "@/components/fluid-contact"
import { IntroAnimation } from "@/components/intro-animation"
import { MusicPlayer } from "@/components/music-player"
import { SpaceshipLaptop } from "@/components/spaceship-laptop"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { ChevronUp, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

// Portfolio data
const portfolioData = {
  personal: {
    name: "Jatin Sachdeva",
    title: "Full Stack Developer",
    summary:
      "Full Stack Developer with 1.5+ years of experience building fast, responsive web applications using React, Node.js, and JavaScript. Proficient in developing scalable front-end and back-end solutions, integrating APIs, and writing clean, maintainable code in collaborative, agile environments.",
    email: "sachdevajatin45@gmail.com",
    phone: "+1 (437) 603-3483",
    location: "Toronto. Canada",
    github: "https://github.com/jatin655",
    linkedin: "https://www.linkedin.com/in/jatin-sachdeva-59177136a/",
  },
  skills: [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "React Native", level: 78 },
    { name: "PostgreSQL", level: 82 },
    { name: "AWS", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Next.js", level: 92 },
  ],
  education: {
    bachelor: {
      degree: "Bachelor of Computer Science in Software Engineering with Specialisation in AR & VR",
      institution: "Golgotias University, India",
      year: "2019-2023",
      gpa: "8.4/10.0",
    },
    diploma: {
      title: "Computer Software and Database Development",
      institution: "Loyalist College",
      year: "2024-2026",
      specialization: "Full Stack Development & Database Management",
    },
  },
  certificates: [
    {
      title: "Full Stack Developer Certification",
      issuer: "Udemy",
      date: "2023",
      id: "cert-001",
    },
    {
      title: "Microsoft 365",
      issuer: "Microsoft",
      date: "2024",
      id: "cert-002",
    },
    {
      title: "Modern Javascript: ES6 Edition",
      issuer: "Coursera",
      date: "2022",
      id: "cert-003",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      id: "cert-004",
    },
  ],
}

export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const sections = ["home", "about", "skills", "education", "certificates", "contact"]
  const navIcons = [
    AnimatedHomeIcon,
    AnimatedAboutIcon,
    AnimatedSkillsIcon,
    AnimatedEducationIcon,
    AnimatedCertificatesIcon,
    AnimatedContactIcon,
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top button logic
  const [showScrollTop, setShowScrollTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CosmicBackground />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-gradient-to-br from-purple-700 via-cyan-600 to-blue-700 shadow-xl flex items-center justify-center border-2 border-white/20"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px #7c3aed" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronUp className="w-8 h-8 text-white drop-shadow-lg" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-2 md:p-4">
        <motion.div
          className="w-full max-w-4xl bg-black/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-purple-500/30"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Navigation */}
          <motion.nav
            className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <motion.div
                  className="font-bold text-xl text-white"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
                  }}
                >
                  {portfolioData.personal.name}
                </motion.div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 items-center">
                  {sections.map((section, index) => {
                    const IconComponent = navIcons[index]
                    return (
                      <div key={section} className="flex flex-col items-center group">
                        <IconComponent onClick={() => scrollToSection(section)} isActive={activeSection === section} />
                        <motion.span
                          className="text-xs mt-1 capitalize text-purple-300 group-hover:text-cyan-400 transition-colors"
                          animate={{
                            opacity: activeSection === section ? 1 : 0.7,
                            fontWeight: activeSection === section ? 600 : 400,
                            textShadow: activeSection === section ? "0 0 8px rgba(6, 182, 212, 0.8)" : "none",
                          }}
                        >
                          {section}
                        </motion.span>
                      </div>
                    )
                  })}
                </div>
                {/* Mobile Menu Button */}
                <motion.button
                  className="md:hidden p-2 text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
            {/* Mobile Navigation */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  className="md:hidden bg-black/90 border-t border-purple-500/30"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="px-4 py-4 grid grid-cols-3 gap-4">
                    {sections.map((section, index) => {
                      const IconComponent = navIcons[index]
                      return (
                        <div key={section} className="flex flex-col items-center">
                          <IconComponent
                            onClick={() => scrollToSection(section)}
                            isActive={activeSection === section}
                          />
                          <span className="text-xs mt-1 capitalize text-purple-300">{section}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          {/* Portfolio Content */}
          <div className="relative">
            {/* Hero Section */}
            <section id="home" className="h-[60vh] relative overflow-hidden">
              <DarkFluidBackground />
              <AnimatedAvatar />
              <MusicPlayer />
              <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="text-center">
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(200, 200, 200, 0.2), 0 0 60px rgba(150, 150, 150, 0.1)",
                      background: "linear-gradient(45deg, #ffffff, #e5e5e5, #cccccc)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {portfolioData.personal.name}
                  </motion.h1>
                  <motion.p
                    className="text-base md:text-lg lg:text-xl text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                      textShadow: "0 0 10px rgba(200, 200, 200, 0.3)",
                    }}
                  >
                    {portfolioData.personal.title}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full border border-blue-400/50 transition-all duration-300"
                      onClick={() => scrollToSection("about")}
                      style={{
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(123, 104, 238, 0.3)",
                      }}
                    >
                      <span className="mr-2">✨</span>
                      Explore My Journey
                    </Button>
                  </motion.div>
                </div>
              </div>
              {/* Magical flowing elements */}
              <motion.div
                className="absolute top-1/4 left-0 w-2 h-32 bg-gradient-to-b from-blue-400 via-purple-500 to-transparent opacity-40"
                animate={{
                  x: ["-100px", "100vw"],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 8,
                  ease: "easeOut",
                }}
                style={{
                  transform: "rotate(45deg)",
                  filter: "drop-shadow(0 0 10px #4a90e2)",
                }}
              />
              <motion.div
                className="absolute top-3/4 left-0 w-2 h-24 bg-gradient-to-b from-purple-400 via-pink-500 to-transparent opacity-35"
                animate={{
                  x: ["-100px", "100vw"],
                  opacity: [0, 0.35, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 10,
                  ease: "easeOut",
                  delay: 4,
                }}
                style={{
                  transform: "rotate(45deg)",
                  filter: "drop-shadow(0 0 10px #7b68ee)",
                }}
              />
            </section>

            {/* About Section */}
            <section id="about" className="py-12 px-4 lg:px-6 bg-black/50">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-center">About Me</h2>
                  <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                    {portfolioData.personal.summary}
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-4 lg:px-6 bg-gray-900/50">
              <div className="w-full mx-auto">
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-16 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Skills & Technologies
                </motion.h2>
                <SpaceshipLaptop skills={portfolioData.skills} />
              </div>
            </section>

            {/* Education Section */}
            <section id="education">
              <AnimatedEducation educationData={portfolioData.education} />
            </section>

            {/* Certificates Section */}
            <section id="certificates">
              <FloatingCertificates certificates={portfolioData.certificates} />
            </section>

            {/* Contact Section */}
            <section id="contact">
              <FluidContact personalData={portfolioData.personal} />
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}