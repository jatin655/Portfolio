"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function AnimatedAvatar() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      className="absolute top-8 left-8 z-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="relative">
        {/* Floating glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-400/30 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Avatar container */}
        <motion.div
          className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-300/50 bg-gradient-to-br from-purple-900 to-indigo-900"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Avatar Image */}
          <motion.div
            className="w-full h-full relative"
            animate={{
              scale: isHovering ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
              className="object-cover"
              style={{
                filter: isHovering ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)",
              }}
            />
          </motion.div>

          {/* Hover overlay effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"
            animate={{
              opacity: isHovering ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Sparkle effects on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovering ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Sparkles */}
            <motion.div
              className="absolute top-2 left-2 text-yellow-300 text-xs"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute top-4 right-3 text-white text-xs"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              ⭐
            </motion.div>
            <motion.div
              className="absolute bottom-3 left-4 text-purple-300 text-xs"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              💫
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating stars around avatar */}
        <motion.div
          className="absolute -top-2 -right-2 text-yellow-300 text-lg"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -left-2 text-purple-300 text-lg"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.6, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ⭐
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-4 text-blue-300 text-lg"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          💫
        </motion.div>

        {/* Pulsing ring effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400"
          animate={{
            scale: isHovering ? [1, 1.3, 1] : 1,
            opacity: isHovering ? [0.5, 0, 0.5] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />

        {/* Secondary pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-400"
          animate={{
            scale: isHovering ? [1, 1.5, 1] : 1,
            opacity: isHovering ? [0.3, 0, 0.3] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Floating hearts on hover */}
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2"
          animate={{
            y: isHovering ? [0, -20, -40] : 0,
            opacity: isHovering ? [0, 1, 0] : 0,
            scale: isHovering ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
            ease: "easeOut",
          }}
        >
          <span className="text-red-400 text-sm">💜</span>
        </motion.div>

        <motion.div
          className="absolute -top-4 right-0"
          animate={{
            y: isHovering ? [0, -15, -30] : 0,
            x: isHovering ? [0, 10, 20] : 0,
            opacity: isHovering ? [0, 1, 0] : 0,
            scale: isHovering ? [0.3, 0.8, 0.3] : 0,
          }}
          transition={{
            duration: 1.8,
            repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <span className="text-pink-400 text-xs">💖</span>
        </motion.div>

        <motion.div
          className="absolute -top-4 left-0"
          animate={{
            y: isHovering ? [0, -18, -35] : 0,
            x: isHovering ? [0, -8, -15] : 0,
            opacity: isHovering ? [0, 1, 0] : 0,
            scale: isHovering ? [0.4, 0.9, 0.4] : 0,
          }}
          transition={{
            duration: 2.2,
            repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <span className="text-purple-400 text-xs">💜</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
