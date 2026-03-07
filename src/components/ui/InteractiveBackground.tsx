'use client'

import { useEffect } from 'react'
import { m, useMotionValue, useSpring } from 'motion/react'

// Interactive Background Component
export const InteractiveBackground = () => {
  // Mouse Position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring Configuration
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Mouse Move Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Moving Blob */}
      <m.div
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-[2px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  )
}