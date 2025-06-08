"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedHomeIconProps {
  onClick: () => void
  isActive: boolean
}

export function AnimatedHomeIcon({ onClick, isActive }: AnimatedHomeIconProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      className={`w-10 h-10 cursor-pointer flex items-center justify-center ${isActive ? "scale-110" : ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* House Base */}
        <motion.rect
          x="6"
          y="18"
          width="20"
          height="12"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          rx="1"
        />

        {/* Door */}
        <motion.rect x="13" y="22" width="6" height="8" fill={isActive ? "#374151" : "#ffffff"} rx="0.5" />

        {/* Door Handle */}
        <motion.circle cx="17.5" cy="26" r="0.5" fill={isActive ? "#ffffff" : "#374151"} />

        {/* Windows */}
        <motion.rect x="8" y="20" width="3" height="3" fill={isActive ? "#374151" : "#ffffff"} rx="0.5" />
        <motion.rect x="21" y="20" width="3" height="3" fill={isActive ? "#374151" : "#ffffff"} rx="0.5" />

        {/* Roof - Left Side */}
        <motion.path
          d="M4 18 L16 6 L16 18 Z"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          strokeLinejoin="round"
          animate={{
            rotateZ: isHovering ? -15 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "16px 18px",
          }}
        />

        {/* Roof - Right Side */}
        <motion.path
          d="M28 18 L16 6 L16 18 Z"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          strokeLinejoin="round"
          animate={{
            rotateZ: isHovering ? 15 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "16px 18px",
          }}
        />

        {/* Chimney */}
        <motion.rect
          x="20"
          y="8"
          width="3"
          height="6"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1"
          rx="0.5"
          animate={{
            y: isHovering ? 6 : 8,
            height: isHovering ? 8 : 6,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />

        {/* Chimney Smoke */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0.6,
            y: isHovering ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <motion.circle
            cx="21.5"
            cy="6"
            r="1"
            fill="#9ca3af"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="22"
            cy="4"
            r="0.8"
            fill="#9ca3af"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.g>
      </svg>
    </motion.div>
  )
}
