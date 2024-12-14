"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlurFadeTextProps {
  delay: number;
  className: string;
  yOffset: number;
  text: string;
}

export function Title({ delay, className, yOffset, text }: BlurFadeTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!mounted) return null;

  const words = text.split(" ");
  const emoji = words.pop(); // Assuming the emoji is always the last "word"

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: yOffset }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {words.join(" ")}{" "}
      <span className="waving-emoji inline-block">{emoji}</span>
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .waving-emoji {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </motion.div>
  );
}
