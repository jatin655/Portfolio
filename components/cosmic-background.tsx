"use client"

export function CosmicBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full z-0"
      style={{
        backgroundImage: "url('/space-room.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}