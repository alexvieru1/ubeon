"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { GradualSpacing } from "./gradual-spacing";
import { BlurIn } from "./blur-in";

interface RotateWordsProps {
  text?: string;
  words: string[];
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
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-2xl text-center sm:text-4xl font-mono tracking-tighter md:text-4xl w-fit flex items-center justify-center mx-auto gap-1.5">
      {text}{" "}
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          {words[index] === "you be on" ? (
            <div className="flex text-center items-center">
              <GradualSpacing
                text="you"
                leftSide={true}
                className="text-[#8cc63e] text-4xl"
              />{" "}
              <BlurIn className="text-[#6b7071] mx-2 text-4xl">be</BlurIn>{" "}
              <GradualSpacing
                text="on"
                leftSide={false}
                className="text-[#8cc63e] text-4xl"
              />{" "}
              {/* <span className="text-[#8cc63e]">you</span>{" "}
              <span className="text-[#6b7071]">be</span>{" "}
              <span className="text-[#8cc63e]">on</span> */}
              {/* <Image className="p-6" src="/images/green.png" width={300} height={100} alt="logo"/> */}
            </div>
          ) : (
            <>
              <Image className="p-6" src="/images/green.png" width={300} height={100} alt="logo"/>
              {/* <span className="text-green-600">u</span>
              <span className="text-gray-500">be</span>
              <span className="text-green-600">on</span> */}
                {/* <span className="text-[#8cc63e]">you</span>{" "}
              <span className="text-[#6b7071]">be</span>{" "}
              <span className="text-[#8cc63e]">on</span> */}
                {/* <Image className="p-6" src="/images/green.png" width={300} height={100} alt="logo"/> */}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
