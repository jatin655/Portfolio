"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedIconProps {
  onClick: () => void
  isActive: boolean
}

export function AnimatedHomeIcon({ onClick, isActive }: AnimatedIconProps) {
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
        <motion.rect x="13" y="22" width="6" height="8" fill={isActive ? "#374151" : "#ffffff"} rx="0.5" />
        <motion.circle cx="17.5" cy="26" r="0.5" fill={isActive ? "#ffffff" : "#374151"} />
        <motion.rect x="8" y="20" width="3" height="3" fill={isActive ? "#374151" : "#ffffff"} rx="0.5" />
        <motion.rect x="21" y="20" width="3" height="3" fill={isActive ? "#374151" : "#ffffff"} rx="0.5" />

        <motion.path
          d="M4 18 L16 6 L16 18 Z"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          strokeLinejoin="round"
          animate={{ rotateZ: isHovering ? -15 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: "16px 18px" }}
        />

        <motion.path
          d="M28 18 L16 6 L16 18 Z"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          strokeLinejoin="round"
          animate={{ rotateZ: isHovering ? 15 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: "16px 18px" }}
        />

        <motion.rect
          x="20"
          y="8"
          width="3"
          height="6"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1"
          rx="0.5"
          animate={{ y: isHovering ? 6 : 8, height: isHovering ? 8 : 6 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        <motion.g
          animate={{ opacity: isHovering ? 1 : 0.6, y: isHovering ? -2 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.circle
            cx="21.5"
            cy="6"
            r="1"
            fill="#9ca3af"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.circle
            cx="22"
            cy="4"
            r="0.8"
            fill="#9ca3af"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.g>
      </svg>
    </motion.div>
  )
}

export function AnimatedAboutIcon({ onClick, isActive }: AnimatedIconProps) {
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <motion.circle
          cx="16"
          cy="10"
          r="6"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          animate={{ scale: isHovering ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Body */}
        <motion.path
          d="M6 28 C6 22 10 18 16 18 C22 18 26 22 26 28"
          fill="none"
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ pathLength: isHovering ? 1 : 0.8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Eyes */}
        <motion.circle
          cx="13"
          cy="9"
          r="1"
          fill={isActive ? "#374151" : "#ffffff"}
          animate={{
            scaleY: isHovering ? [1, 0.1, 1] : 1,
            y: isHovering ? [0, 1, 0] : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.circle
          cx="19"
          cy="9"
          r="1"
          fill={isActive ? "#374151" : "#ffffff"}
          animate={{
            scaleY: isHovering ? [1, 0.1, 1] : 1,
            y: isHovering ? [0, 1, 0] : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        />

        {/* Smile */}
        <motion.path
          d="M12 12 Q16 15 20 12"
          fill="none"
          stroke={isActive ? "#374151" : "#ffffff"}
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            d: isHovering ? "M12 12 Q16 16 20 12" : "M12 12 Q16 15 20 12",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Floating hearts */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0,
            y: isHovering ? -5 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.path
            d="M8 6 C8 4 9 3 10 3 C11 3 12 4 12 6 C12 4 13 3 14 3 C15 3 16 4 16 6 C16 8 12 12 12 12 C12 12 8 8 8 6 Z"
            fill="#ef4444"
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.g>
      </svg>
    </motion.div>
  )
}

export function AnimatedSkillsIcon({ onClick, isActive }: AnimatedIconProps) {
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brain outline */}
        <motion.path
          d="M10 8 C8 8 6 10 6 12 C6 14 7 15 8 16 C6 17 5 19 5 21 C5 23 7 25 9 25 L23 25 C25 25 27 23 27 21 C27 19 26 17 24 16 C25 15 26 14 26 12 C26 10 24 8 22 8 C21 8 20 8.5 19 9 C18 8 17 7 16 7 C15 7 14 8 13 9 C12 8.5 11 8 10 8 Z"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          animate={{
            scale: isHovering ? 1.05 : 1,
            fill: isHovering ? "#8b5cf6" : isActive ? "#ffffff" : "#374151",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Brain details */}
        <motion.path
          d="M12 12 Q16 10 20 12 M12 16 Q16 14 20 16 M12 20 Q16 18 20 20"
          fill="none"
          stroke={isActive ? "#374151" : "#ffffff"}
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            pathLength: isHovering ? [0, 1, 0] : 1,
            stroke: isHovering ? "#ffffff" : isActive ? "#374151" : "#ffffff",
          }}
          transition={{ duration: 1.5, repeat: isHovering ? Number.POSITIVE_INFINITY : 0, ease: "easeInOut" }}
        />

        {/* Sparkling effects */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {[
            { x: 8, y: 6, delay: 0 },
            { x: 24, y: 8, delay: 0.2 },
            { x: 6, y: 18, delay: 0.4 },
            { x: 26, y: 20, delay: 0.6 },
          ].map((spark, index) => (
            <motion.g
              key={index}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: spark.delay,
                ease: "easeInOut",
              }}
            >
              <path
                d={`M${spark.x} ${spark.y - 2} L${spark.x + 1} ${spark.y} L${spark.x} ${spark.y + 2} L${spark.x - 1} ${spark.y} Z`}
                fill="#fbbf24"
              />
            </motion.g>
          ))}
        </motion.g>
      </svg>
    </motion.div>
  )
}

export function AnimatedEducationIcon({ onClick, isActive }: AnimatedIconProps) {
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graduation cap base */}
        <motion.path
          d="M4 16 L16 10 L28 16 L16 22 L4 16 Z"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          animate={{
            rotateY: isHovering ? 15 : 0,
            scale: isHovering ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: "16px 16px" }}
        />

        {/* Graduation cap top */}
        <motion.ellipse
          cx="16"
          cy="14"
          rx="12"
          ry="3"
          fill={isActive ? "#374151" : "#6b7280"}
          animate={{
            ry: isHovering ? 4 : 3,
            opacity: isHovering ? 0.8 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Tassel */}
        <motion.g
          animate={{
            rotate: isHovering ? [0, 20, -20, 0] : 0,
            x: isHovering ? 2 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "26px 12px" }}
        >
          <motion.line
            x1="26"
            y1="12"
            x2="26"
            y2="18"
            stroke={isActive ? "#374151" : "#6b7280"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <motion.circle
            cx="26"
            cy="19"
            r="1.5"
            fill={isActive ? "#374151" : "#6b7280"}
            animate={{
              scale: isHovering ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Books stack */}
        <motion.g
          animate={{
            y: isHovering ? -2 : 0,
            rotate: isHovering ? -5 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.rect x="6" y="24" width="8" height="2" fill="#ef4444" rx="0.5" />
          <motion.rect x="7" y="22" width="8" height="2" fill="#3b82f6" rx="0.5" />
          <motion.rect x="8" y="20" width="8" height="2" fill="#10b981" rx="0.5" />
        </motion.g>

        {/* Floating knowledge symbols */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0,
            y: isHovering ? -3 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.text
            x="20"
            y="8"
            fontSize="8"
            fill="#8b5cf6"
            animate={{
              y: [8, 6, 8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            ∑
          </motion.text>
          <motion.text
            x="24"
            y="6"
            fontSize="6"
            fill="#f59e0b"
            animate={{
              y: [6, 4, 6],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          >
            π
          </motion.text>
        </motion.g>
      </svg>
    </motion.div>
  )
}

export function AnimatedCertificatesIcon({ onClick, isActive }: AnimatedIconProps) {
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Certificate background */}
        <motion.rect
          x="4"
          y="8"
          width="24"
          height="18"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          rx="2"
          animate={{
            rotateY: isHovering ? 10 : 0,
            boxShadow: isHovering ? "0 10px 20px rgba(0,0,0,0.2)" : "0 2px 4px rgba(0,0,0,0.1)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: "16px 17px" }}
        />

        {/* Certificate lines */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0.7,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.line
            x1="7"
            y1="12"
            x2="25"
            y2="12"
            stroke={isActive ? "#374151" : "#ffffff"}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <motion.line
            x1="7"
            y1="15"
            x2="22"
            y2="15"
            stroke={isActive ? "#374151" : "#ffffff"}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <motion.line
            x1="7"
            y1="18"
            x2="20"
            y2="18"
            stroke={isActive ? "#374151" : "#ffffff"}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Award ribbon */}
        <motion.g
          animate={{
            scale: isHovering ? 1.1 : 1,
            rotate: isHovering ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.circle cx="22" cy="20" r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
          <motion.path
            d="M20 24 L22 26 L24 24 L24 28 L22 27 L20 28 Z"
            fill="#f59e0b"
            animate={{
              y: isHovering ? [0, 1, 0] : 0,
            }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.text
            x="22"
            y="22"
            fontSize="6"
            fill="#ffffff"
            textAnchor="middle"
            animate={{
              scale: isHovering ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            ★
          </motion.text>
        </motion.g>

        {/* Floating certificates */}
        <motion.g
          animate={{
            opacity: isHovering ? 0.6 : 0,
            x: isHovering ? -2 : 0,
            y: isHovering ? -1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.rect
            x="2"
            y="6"
            width="24"
            height="18"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1"
            rx="2"
            animate={{
              rotate: isHovering ? -5 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.g>

        <motion.g
          animate={{
            opacity: isHovering ? 0.3 : 0,
            x: isHovering ? -4 : 0,
            y: isHovering ? -2 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          <motion.rect
            x="0"
            y="4"
            width="24"
            height="18"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="1"
            rx="2"
            animate={{
              rotate: isHovering ? -10 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.g>
      </svg>
    </motion.div>
  )
}

export function AnimatedContactIcon({ onClick, isActive }: AnimatedIconProps) {
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone body */}
        <motion.rect
          x="10"
          y="4"
          width="12"
          height="24"
          fill={isActive ? "#ffffff" : "#374151"}
          stroke={isActive ? "#374151" : "#6b7280"}
          strokeWidth="1.5"
          rx="3"
          animate={{
            rotateZ: isHovering ? [0, -10, 10, 0] : 0,
            scale: isHovering ? 1.05 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Screen */}
        <motion.rect
          x="12"
          y="7"
          width="8"
          height="14"
          fill={isActive ? "#374151" : "#ffffff"}
          rx="1"
          animate={{
            fill: isHovering ? "#3b82f6" : isActive ? "#374151" : "#ffffff",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Home button */}
        <motion.circle
          cx="16"
          cy="24"
          r="1.5"
          fill={isActive ? "#374151" : "#ffffff"}
          animate={{
            scale: isHovering ? [1, 1.3, 1] : 1,
            fill: isHovering ? "#10b981" : isActive ? "#374151" : "#ffffff",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Signal waves */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {[1, 2, 3].map((wave, index) => (
            <motion.path
              key={wave}
              d={`M${6 - wave} ${12 - wave} Q${6 - wave} ${8 - wave} ${6 - wave * 0.5} ${8 - wave}`}
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.g>

        {/* Message bubbles */}
        <motion.g
          animate={{
            opacity: isHovering ? 1 : 0,
            y: isHovering ? 0 : 5,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.ellipse
            cx="26"
            cy="10"
            rx="3"
            ry="2"
            fill="#ef4444"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -2, 0],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.path d="M25 12 L26 14 L27 12" fill="#ef4444" />

          <motion.ellipse
            cx="24"
            cy="6"
            rx="2.5"
            ry="1.5"
            fill="#3b82f6"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -1, 0],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path d="M23 7.5 L24 9 L25 7.5" fill="#3b82f6" />
        </motion.g>

        {/* Ringing effect */}
        <motion.g
          animate={{
            opacity: isHovering ? 0.6 : 0,
            scale: isHovering ? [1, 1.5, 1] : 1,
          }}
          transition={{ duration: 0.8, repeat: isHovering ? Number.POSITIVE_INFINITY : 0, ease: "easeInOut" }}
        >
          <motion.circle cx="16" cy="16" r="15" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 4" />
        </motion.g>
      </svg>
    </motion.div>
  )
}
