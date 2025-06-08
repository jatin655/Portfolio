"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { Code, Database, Gamepad2, Globe, Palette, Server, Smartphone, X, Zap } from "lucide-react"
import { useEffect, useState } from "react"

// Technology icons mapping
const techIcons = {
  React: Code,
  "Node.js": Server,
  TypeScript: Code,
  "React Native": Smartphone,
  PostgreSQL: Database,
  AWS: Globe,
  "UI/UX Design": Palette,
  "Next.js": Zap,
}

// Skill descriptions
const skillDescriptions = {
  React:
    "A powerful JavaScript library for building user interfaces. React's component-based architecture and virtual DOM make it perfect for creating dynamic, interactive web applications with excellent performance.",
  "Node.js":
    "A JavaScript runtime built on Chrome's V8 engine that allows server-side JavaScript execution. Perfect for building scalable network applications, APIs, and real-time applications with high concurrency.",
  TypeScript:
    "A strongly typed programming language that builds on JavaScript by adding static type definitions. Enhances code quality, developer productivity, and helps catch errors during development.",
  "React Native":
    "A framework for building native mobile applications using React. Write once, run on both iOS and Android platforms while maintaining native performance and user experience.",
  PostgreSQL:
    "A powerful, open-source relational database system with advanced features like JSON support, full-text search, and ACID compliance. Perfect for complex applications requiring data integrity.",
  AWS: "Amazon Web Services - a comprehensive cloud computing platform offering 200+ services including computing power, storage, databases, and machine learning capabilities for scalable applications.",
  "UI/UX Design":
    "The art and science of creating intuitive, beautiful, and user-centered digital experiences. Combines visual design principles with user psychology to create engaging interfaces.",
  "Next.js":
    "A React framework for production that provides hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. Perfect for building fast, SEO-friendly web applications.",
}

interface SpaceshipLaptopProps {
  skills: Array<{ name: string; level: number }>
}

export function SpaceshipLaptop({ skills }: SpaceshipLaptopProps) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [showTicTacToe, setShowTicTacToe] = useState(false)
  const [showSnakeGame, setShowSnakeGame] = useState(false)

  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      {/* Centered Laptop Container */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "450px",
        }}
      >
        {/* Desk Surface */}
        <motion.div
          className="absolute w-[500px] h-[350px] rounded-lg"
          style={{
            background: `
              linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%),
              radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `,
            transform: "rotateX(70deg) translateZ(-80px)",
            transformOrigin: "center bottom",
            left: "50px",
            bottom: "0",
          }}
          initial={{ opacity: 0, rotateX: 45 }}
          whileInView={{ opacity: 1, rotateX: 70 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-6 border border-cyan-500/20 rounded-lg" />
          <div className="absolute top-6 right-6 w-10 h-10 bg-red-500/30 rounded-full animate-pulse" />
          <div className="absolute top-6 right-20 w-8 h-8 bg-green-500/30 rounded-full animate-pulse" />
          <div className="absolute bottom-6 left-6 w-16 h-4 bg-blue-500/20 rounded-full" />
        </motion.div>

        {/* Laptop Base */}
        <motion.div
          className="absolute w-[600px] h-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg"
          style={{
            transform: "rotateX(70deg) translateZ(-30px)",
            transformOrigin: "center bottom",
            left: "0",
            bottom: "12px",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Laptop Screen */}
        <motion.div
          className="absolute w-[600px] h-96 bg-black rounded-lg border-4 border-gray-700 overflow-hidden"
          style={{
            transform: "rotateX(10deg) translateZ(20px)",
            transformOrigin: "center bottom",
            boxShadow: "0 0 40px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.3)",
            left: "0",
            bottom: "12px",
          }}
          initial={{ opacity: 0, rotateX: -30 }}
          whileInView={{ opacity: 1, rotateX: 10 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Screen Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-purple-900/20 to-black" />

          {/* Screen Content */}
          <div className="relative z-10 p-6 h-full">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-cyan-500/30">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                <div className="w-4 h-4 bg-green-500 rounded-full" />
              </div>
              <span className="text-cyan-400 text-sm font-mono">~/skills/technologies</span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-4 h-full max-h-80">
              {skills.map((skill, index) => {
                const IconComponent = techIcons[skill.name as keyof typeof techIcons] || Code
                return (
                  <motion.button
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-lg border border-purple-500/30 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all duration-300 group"
                    onClick={() => setSelectedSkill(skill.name)}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors mb-2" />
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors text-center font-medium">
                      {skill.name}
                    </span>
                  </motion.button>
                )
              })}

              {/* Tic Tac Toe Game Icon */}
              <motion.button
                className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-lg border border-pink-500/30 hover:border-pink-400/50 hover:bg-pink-900/20 transition-all duration-300 group"
                onClick={() => setShowTicTacToe(true)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: skills.length * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gamepad2 className="w-7 h-7 text-pink-400 group-hover:text-white transition-colors mb-2" />
                <span className="text-xs text-gray-300 group-hover:text-white transition-colors text-center font-medium">
                  Tic Tac Toe
                </span>
              </motion.button>

              {/* Snake Game Icon */}
              <motion.button
                className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-lg border border-green-500/30 hover:border-green-400/50 hover:bg-green-900/20 transition-all duration-300 group"
                onClick={() => setShowSnakeGame(true)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (skills.length + 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-7 h-7 text-green-400 group-hover:text-white transition-colors mb-2 flex items-center justify-center">
                  🐍
                </div>
                <span className="text-xs text-gray-300 group-hover:text-white transition-colors text-center font-medium">
                  Snake Game
                </span>
              </motion.button>
            </div>
          </div>

          {/* Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Skill Description Modal - Over the laptop screen */}
          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                className="absolute left-0 top-0 w-full h-full flex items-center justify-center z-50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  pointerEvents: "auto",
                  background: "rgba(0,0,0,0.7)",
                }}
                onClick={() => setSelectedSkill(null)}
              >
                <motion.div
                  className="bg-gray-900 border border-cyan-400/50 rounded-lg p-6 max-w-lg w-full shadow-2xl"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedSkill}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedSkill(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {skillDescriptions[selectedSkill as keyof typeof skillDescriptions]}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tic Tac Toe Game Modal - Over the laptop screen */}
          <AnimatePresence>
            {showTicTacToe && (
              <motion.div
                className="absolute left-0 top-0 w-full h-full flex items-center justify-center z-50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  pointerEvents: "auto",
                  background: "rgba(0,0,0,0.7)",
                }}
                onClick={() => setShowTicTacToe(false)}
              >
                <motion.div
                  className="bg-gray-900 border border-pink-400/50 rounded-lg p-6 max-w-md w-full"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Tic Tac Toe</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTicTacToe(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <TicTacToeGame />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Snake Game Modal - Over the laptop screen */}
          <AnimatePresence>
            {showSnakeGame && (
              <motion.div
                className="absolute left-0 top-0 w-full h-full flex items-center justify-center z-50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  pointerEvents: "auto",
                  background: "rgba(0,0,0,0.7)",
                }}
                onClick={() => setShowSnakeGame(false)}
              >
                <motion.div
                  className="bg-gray-900 border border-green-400/50 rounded-lg p-6 max-w-lg w-full"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">🐍 Snake Game</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSnakeGame(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <SnakeGame />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Holographic Elements */}
        <motion.div
          className="absolute w-20 h-16 border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm rounded"
          style={{
            top: "20px",
            left: "-80px",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            borderColor: ["rgba(6, 182, 212, 0.3)", "rgba(6, 182, 212, 0.8)", "rgba(6, 182, 212, 0.3)"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="p-2 text-xs text-cyan-400 font-mono">
            <div>CPU: 98%</div>
            <div>RAM: 76%</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-16 h-12 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm rounded"
          style={{
            top: "40px",
            right: "-80px",
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            borderColor: ["rgba(139, 92, 246, 0.3)", "rgba(139, 92, 246, 0.8)", "rgba(139, 92, 246, 0.3)"],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="p-2 text-xs text-purple-400 font-mono">
            <div>NET: OK</div>
            <div>SYS: ON</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-18 h-10 border border-pink-500/30 bg-pink-500/5 backdrop-blur-sm rounded"
          style={{
            bottom: "120px",
            left: "-80px",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            borderColor: ["rgba(236, 72, 153, 0.3)", "rgba(236, 72, 153, 0.8)", "rgba(236, 72, 153, 0.3)"],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="p-2 text-xs text-pink-400 font-mono">
            <div>PWR: MAX</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-16 h-14 border border-green-500/30 bg-green-500/5 backdrop-blur-sm rounded"
          style={{
            bottom: "140px",
            right: "-80px",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            borderColor: ["rgba(34, 197, 94, 0.3)", "rgba(34, 197, 94, 0.8)", "rgba(34, 197, 94, 0.3)"],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="p-2 text-xs text-green-400 font-mono">
            <div>CONN: ✓</div>
            <div>SYNC: ✓</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Tic Tac Toe Game Component
function TicTacToeGame() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"
    setBoard(newBoard)
    setIsXNext(!isXNext)

    const gameWinner = calculateWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  const isDraw = board.every((square) => square !== null) && !winner

  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-2 mb-4 max-w-48 mx-auto">
        {board.map((square, index) => (
          <motion.button
            key={index}
            className="w-16 h-16 bg-gray-800 border border-cyan-400/30 rounded-lg flex items-center justify-center text-2xl font-bold text-white hover:bg-gray-700 transition-colors"
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: square === "X" ? "#06B6D4" : square === "O" ? "#EC4899" : "white",
            }}
          >
            {square}
          </motion.button>
        ))}
      </div>

      <div className="mb-4">
        {winner ? (
          <p className="text-lg font-bold text-green-400">Winner: {winner}!</p>
        ) : isDraw ? (
          <p className="text-lg font-bold text-yellow-400">It's a draw!</p>
        ) : (
          <p className="text-lg text-gray-300">Next player: {isXNext ? "X" : "O"}</p>
        )}
      </div>

      <Button
        onClick={resetGame}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full"
      >
        New Game
      </Button>
    </div>
  )
}

// Snake Game Component
function SnakeGame() {
  const [snake, setSnake] = useState([[10, 10]])
  const [food, setFood] = useState([15, 15])
  const [direction, setDirection] = useState([0, 1])
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  const BOARD_SIZE = 20

  const resetGame = () => {
    setSnake([[10, 10]])
    setFood([15, 15])
    setDirection([0, 1])
    setGameOver(false)
    setScore(0)
    setGameStarted(true)
  }

  const generateFood = () => {
    const newFood = [Math.floor(Math.random() * BOARD_SIZE), Math.floor(Math.random() * BOARD_SIZE)]
    return newFood
  }

  useEffect(() => {
    if (!gameStarted || gameOver) return

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection([-1, 0])
          break
        case "ArrowDown":
          setDirection([1, 0])
          break
        case "ArrowLeft":
          setDirection([0, -1])
          break
        case "ArrowRight":
          setDirection([0, 1])
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [gameStarted, gameOver])

  useEffect(() => {
    if (!gameStarted || gameOver) return

    const gameLoop = setInterval(() => {
      setSnake((currentSnake) => {
        const newSnake = [...currentSnake]
        const head = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]]

        // Check wall collision
        if (head[0] < 0 || head[0] >= BOARD_SIZE || head[1] < 0 || head[1] >= BOARD_SIZE) {
          setGameOver(true)
          return currentSnake
        }

        // Check self collision
        if (newSnake.some((segment) => segment[0] === head[0] && segment[1] === head[1])) {
          setGameOver(true)
          return currentSnake
        }

        newSnake.unshift(head)

        // Check food collision
        if (head[0] === food[0] && head[1] === food[1]) {
          setScore((prev) => prev + 10)
          setFood(generateFood())
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, 150)

    return () => clearInterval(gameLoop)
  }, [direction, food, gameStarted, gameOver])

  return (
    <div className="text-center">
      <div className="mb-4">
        <p className="text-lg text-green-400 mb-2">Score: {score}</p>
        {!gameStarted && !gameOver && (
          <p className="text-sm text-gray-400 mb-4">Use arrow keys to control the snake!</p>
        )}
        {gameOver && <p className="text-lg font-bold text-red-400 mb-4">Game Over!</p>}
      </div>

      <div
        className="grid gap-0 mx-auto mb-4 bg-gray-800 border border-green-400/30 rounded-lg p-2"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
          width: "300px",
          height: "300px",
        }}
      >
        {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
          const row = Math.floor(index / BOARD_SIZE)
          const col = index % BOARD_SIZE
          const isSnake = snake.some((segment) => segment[0] === row && segment[1] === col)
          const isFood = food[0] === row && food[1] === col
          const isHead = snake[0] && snake[0][0] === row && snake[0][1] === col

          return (
            <div
              key={index}
              className={`w-full h-full border border-gray-700/20 ${
                isSnake ? (isHead ? "bg-green-400" : "bg-green-600") : isFood ? "bg-red-500" : "bg-gray-900"
              }`}
              style={{ aspectRatio: "1" }}
            />
          )
        })}
      </div>

      <div className="flex gap-2 justify-center">
        <Button
          onClick={resetGame}
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full"
        >
          {gameStarted ? "Restart" : "Start Game"}
        </Button>
      </div>

      {gameStarted && !gameOver && (
        <div className="mt-4 grid grid-cols-3 gap-2 max-w-32 mx-auto">
          <div></div>
          <Button
            size="sm"
            variant="outline"
            className="border-green-400/50 text-green-400 hover:bg-green-900/20"
            onClick={() => setDirection([-1, 0])}
          >
            ↑
          </Button>
          <div></div>
          <Button
            size="sm"
            variant="outline"
            className="border-green-400/50 text-green-400 hover:bg-green-900/20"
            onClick={() => setDirection([0, -1])}
          >
            ←
          </Button>
          <div></div>
          <Button
            size="sm"
            variant="outline"
            className="border-green-400/50 text-green-400 hover:bg-green-900/20"
            onClick={() => setDirection([0, 1])}
          >
            →
          </Button>
          <div></div>
          <Button
            size="sm"
            variant="outline"
            className="border-green-400/50 text-green-400 hover:bg-green-900/20"
            onClick={() => setDirection([1, 0])}
          >
            ↓
          </Button>
          <div></div>
        </div>
      )}
    </div>
  )
}