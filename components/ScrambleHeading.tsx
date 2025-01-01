'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

interface ScrambleHeadingProps {
  text: string
  className?: string
  scramble: boolean
  onScrambleComplete?: () => void
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function ScrambleHeading({ 
  text, 
  className = '', 
  scramble,
  onScrambleComplete,
  as: Component = 'h2'
}: ScrambleHeadingProps) {
  const [scrambledText, setScrambledText] = useState(text)
  const [hasScrambled, setHasScrambled] = useState(false)

  useEffect(() => {
    if (scramble && !hasScrambled) {
      let iteration = 0;
      const interval = setInterval(() => {
        setScrambledText(() =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setScrambledText(text);
          setHasScrambled(true);
          onScrambleComplete?.();
        }

        iteration += 1 / 4;
      }, 25);

      return () => clearInterval(interval);
    }
  }, [scramble, text, onScrambleComplete, hasScrambled]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      <Component className="font-bold">
        {scrambledText.split('').map((char, index) => (
          <span key={index} className={char === '#' ? 'text-green-500' : ''}>
            {char}
          </span>
        ))}
      </Component>
    </motion.div>
  )
}

