"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(
        cursorX.get(),
        cursorY.get()
      )
      if (hoveredElement) {
        setIsPointer(
          window.getComputedStyle(hoveredElement).cursor === "pointer"
        )
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", updateCursorType)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", updateCursorType)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white/80 mix-blend-difference pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: "translate(-50%, -50%)",
        }}
      />
      <motion.div
        className="fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-white/30 mix-blend-difference pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: "translate(-50%, -50%)",
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
    </>
  )
}

