"use client"

import { AnimatePresence, motion } from "framer-motion"
import { BookOpen, Briefcase, Calendar, Clock, School } from "lucide-react"
import { useState } from "react"

interface EducationData {
  bachelor: {
    degree: string
    school: string
    year: string
    gpa: string
  }
  diploma: {
    title: string
    institution: string
    year: string
    specialization: string
  }
}

interface AnimatedEducationProps {
  educationData: EducationData
}

const fairyGlow = {
  animate: {
    opacity: [0.7, 1, 0.7],
    filter: [
      "drop-shadow(0 0 20px #8B5CF6)",
      "drop-shadow(0 0 40px #06B6D4)",
      "drop-shadow(0 0 20px #8B5CF6)",
    ],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

export function AnimatedEducation({ educationData }: AnimatedEducationProps) {
  const [activeTab, setActiveTab] = useState<"bachelor" | "diploma">("bachelor")

  const educationDetails = {
    bachelor: {
      ...educationData.bachelor,
      icon: School,
      color: "#8B5CF6",
      details: [
        { icon: Calendar, label: "Duration", value: educationData.bachelor.year },
        { icon: BookOpen, label: "GPA", value: educationData.bachelor.gpa },
      ],
      courses: [
        "Advanced Algorithms",
        "Software Architecture",
        "Database Systems",
        "Web Development",
      ],
    },
    diploma: {
      ...educationData.diploma,
      icon: Briefcase,
      color: "#06B6D4",
      details: [
        { icon: Calendar, label: "Completed", value: educationData.diploma.year },
        { icon: Clock, label: "Duration", value: "6 months" },
      ],
      courses: [
        "Full Stack Development",
        "Cloud Architecture",
        "DevOps & CI/CD",
        "API Design",
      ],
    },
  }

  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-[#1e2340] via-[#232b4d] to-[#1a1d2e] py-12 px-4 lg:px-6 overflow-hidden">
      {/* Magical floating orbs */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-blue-400/30 blur-2xl pointer-events-none"
        {...fairyGlow}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-purple-400/20 blur-2xl pointer-events-none"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-cyan-400/30 blur-xl pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3], x: [-30, 30, -30], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 1 }}
      />

      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: "linear-gradient(90deg, #b993f8 30%, #6ee7f7 70%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 24px #8B5CF6, 0 0 40px #06B6D4",
          zIndex: 2,
          position: "relative",
        }}
      >
        Education Path
      </motion.h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 z-10 relative">
        {(["bachelor", "diploma"] as const).map((tab) => {
          const isActive = activeTab === tab
          const details = educationDetails[tab]
          const IconComponent = details.icon
          return (
            <motion.button
              key={tab}
              className={`px-7 py-2 rounded-full mx-2 flex items-center space-x-2 transition-all shadow-lg border border-transparent ${
                isActive
                  ? "bg-gradient-to-r from-purple-500/80 to-cyan-400/80 text-white font-semibold border-purple-400/40 scale-105"
                  : "bg-black/40 text-gray-300 hover:bg-purple-400/10"
              }`}
              whileHover={{ scale: 1.08, boxShadow: "0 0 16px #8B5CF6" }}
              onClick={() => setActiveTab(tab)}
              style={{
                boxShadow: isActive
                  ? "0 0 24px #8B5CF6, 0 0 40px #06B6D4"
                  : "0 2px 8px #232b4d44",
                zIndex: 2,
              }}
            >
              <IconComponent size={20} style={{ color: isActive ? details.color : "#b993f8" }} />
              <span className="capitalize">{tab}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Education Content */}
      <div className="relative max-w-4xl mx-auto z-10">
        <AnimatePresence mode="wait">
          {(["bachelor", "diploma"] as const).map((tab) => {
            if (tab !== activeTab) return null
            const details = educationDetails[tab]
            const IconComponent = details.icon
            return (
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Card */}
                <motion.div
                  className="md:col-span-2 bg-gradient-to-br from-[#232b4d]/80 to-[#1e2340]/80 rounded-xl p-8 border border-purple-400/20 shadow-2xl relative overflow-hidden"
                  initial={{ boxShadow: "0 0 0 #000" }}
                  animate={{
                    boxShadow:
                      "0 4px 32px 0 #8B5CF6aa, 0 0 40px 0 #06B6D4aa",
                  }}
                  transition={{ duration: 1.2, type: "spring" }}
                >
                  {/* Fairy sparkle */}
                  <motion.div
                    className="absolute -top-4 -right-4 text-blue-200 text-3xl pointer-events-none select-none"
                    animate={{ rotate: [0, 360], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${details.color}, ${details.color}80)`,
                        boxShadow: `0 0 16px ${details.color}88`,
                      }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_8px_#8B5CF6aa]">
                        {tab === "bachelor" ? "Bachelor's Degree" : "Professional Diploma"}
                      </h3>
                      <div
                        className="h-1 w-16 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${details.color}, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_8px_#06B6D4aa]">
                    {tab === "bachelor" ? details.degree : details.title}
                  </h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <School className="w-5 h-5" style={{ color: details.color }} />
                    <span className="text-lg text-blue-100">
                      {tab === "bachelor" ? details.school : details.institution}
                    </span>
                  </div>
                  {tab === "diploma" && (
                    <div className="mb-4 p-3 rounded-lg bg-white/5 border-l-4" style={{ borderColor: details.color }}>
                      <span className="text-sm text-cyan-200">{details.specialization}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {details.details.map((detail) => {
                      const DetailIcon = detail.icon
                      return (
                        <div key={detail.label} className="flex items-center space-x-2">
                          <DetailIcon className="w-4 h-4 text-purple-300" />
                          <div>
                            <p className="text-xs text-blue-200">{detail.label}</p>
                            <p className="text-white">{detail.value}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
                {/* Courses */}
                <motion.div
                  className="bg-gradient-to-br from-[#232b4d]/60 to-[#1e2340]/60 rounded-xl p-6 border border-cyan-400/20 shadow-xl relative"
                  initial={{ boxShadow: "0 0 0 #000" }}
                  animate={{
                    boxShadow: "0 2px 24px 0 #06B6D4aa",
                  }}
                  transition={{ duration: 1.2, type: "spring" }}
                >
                  {/* Fairy sparkle */}
                  <motion.div
                    className="absolute -top-3 -left-3 text-purple-200 text-2xl pointer-events-none select-none"
                    animate={{ rotate: [0, -360], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                  <h5
                    className="text-lg font-bold mb-4 flex items-center space-x-2"
                    style={{ color: details.color }}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Key Courses</span>
                  </h5>
                  <ul className="space-y-2">
                    {details.courses.map((course) => (
                      <li key={course} className="flex items-center space-x-2 text-blue-100">
                        <span className="w-2 h-2 rounded-full" style={{ background: details.color }} />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}