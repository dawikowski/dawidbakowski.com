'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const characters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (scramble) {
      let iteration = 0;
      const interval = setInterval(() => {
        setScrambledText(prevText =>
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
          onScrambleComplete?.();
        }

        iteration += 1 / 4; // Update: Changed iteration increment
      }, 25); // Update: Changed interval timing

      return () => clearInterval(interval);
    }
  }, [scramble, text, onScrambleComplete]);

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

