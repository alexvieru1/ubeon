"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";

export function GradualSpacing({
  text = "Gradual Spacing",
  leftSide = true,
  className = "text-black",
  delay = 0, // You can now control the total delay
}: {
  text: string;
  leftSide: boolean;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center" ref={ref}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={leftSide ? { opacity: 0, x: -28 } : { opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: delay + i * 0.1 }}
            className={`${className} tracking-tighter font-bold md:text-4xl`}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
