"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

interface RotateWordsProps {
  text?: string
  words: string[]
}

/**
 * Rotates between the given words every 5 seconds.
 * Specifically styles "you be on" and "ubeon" as requested:
 * - "you be on": "you" & "on" => gray, "be" => green
 * - "ubeon": "u" & "on" => gray, "be" => green
 */
export function RotateWords({
  text = "",
  words = ["you be on", "ubeon"],
}: RotateWordsProps) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="text-4xl text-center sm:text-4xl font-bold tracking-tighter md:text-4xl w-fit flex items-center justify-center mx-auto gap-1.5">
      {text}{" "}
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          {words[index] === "you be on" ? (
            <>
              <span className="text-green-600">you</span>{" "}
              <span className="text-gray-500">be</span>{" "}
              <span className="text-green-600">on</span>
            </>
          ) : (
            <>
              <span className="text-green-600">u</span>
              <span className="text-gray-500">be</span>
              <span className="text-green-600">on</span>
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
