"use client"

import { motion } from "framer-motion"
import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const trackInfo = {
    title: "Cosmic Dreams",
    artist: "Lo-Fi Ambient",
    albumArt: "/cosmic-album.jpg",
    src: "/lofi-ambient.mp3",
  }

  // Setup audio element and event listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = volume

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateTime)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateTime)
    }
  }, [volume])

  // Play/Pause logic
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Volume/mute logic
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  const togglePlay = () => setIsPlaying((p) => !p)
  const toggleMute = () => setIsMuted((m) => !m)

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) setIsMuted(false)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const newTime = Number.parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleExpanded = () => setIsExpanded((e) => !e)

  return (
    <motion.div
      className="absolute top-6 right-6 z-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <audio ref={audioRef} src={trackInfo.src} preload="auto" />
      <motion.div
        className="relative"
        animate={{
          width: isExpanded ? "280px" : "60px",
          height: isExpanded ? "320px" : "60px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Collapsed State - Mini Player */}
        {!isExpanded && (
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 border border-purple-400/30 flex items-center justify-center cursor-pointer shadow-lg"
            onClick={toggleExpanded}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.4), 0 0 40px rgba(147, 51, 234, 0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 2, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </motion.div>
          </motion.div>
        )}

        {/* Expanded State - Full Player */}
        {isExpanded && (
          <motion.div
            className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border border-purple-400/30 p-6 shadow-2xl backdrop-blur-sm flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              background: `
                linear-gradient(135deg, rgba(147, 51, 234, 0.9) 0%, rgba(126, 34, 206, 0.9) 50%, rgba(107, 33, 168, 0.9) 100%),
                radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
              `,
              boxShadow: "0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)",
            }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              onClick={toggleExpanded}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>

            {/* Album Art */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <img
                src={trackInfo.albumArt}
                alt="Album Art"
                className="w-full h-full object-cover rounded-xl"
                draggable={false}
              />
            </motion.div>

            {/* Track Info */}
            <div className="text-center mb-2">
              <div className="text-white font-semibold text-sm mb-1">{trackInfo.title}</div>
              <div className="text-purple-200 text-xs">{trackInfo.artist}</div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mb-2">
              <button
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                tabIndex={-1}
                aria-label="Previous"
                disabled
              >
                <SkipBack size={16} />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={togglePlay}
                style={{
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                tabIndex={-1}
                aria-label="Next"
                disabled
              >
                <SkipForward size={16} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-2 text-xs text-white/70 mb-2">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 1}
                step={0.01}
                value={currentTime}
                onChange={handleProgressChange}
                className="flex-1 h-1 bg-white/20 rounded-full appearance-none slider"
                style={{
                  background: `linear-gradient(to right, #ffffff 0%, #ffffff ${duration > 0 ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.2) ${duration > 0 ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.2) 100%)`,
                }}
              />
              <span>{formatTime(duration)}</span>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <button className="text-white/70 hover:text-white transition-colors" onClick={toggleMute}>
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-white/20 rounded-full appearance-none slider"
                style={{
                  background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`,
                }}
              />
              <div className="text-xs text-white/70 w-8 text-right">{Math.round(volume * 100)}</div>
            </div>
          </motion.div>
        )}
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </motion.div>
  )
}