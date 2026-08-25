import { useEffect, useRef, useState } from 'react'

/**
 * A small dot + soft ring that follows the pointer, expanding slightly
 * over interactive elements. Automatically disabled on touch devices
 * and when the user prefers reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReducedMotion) return
    setEnabled(true)
    document.body.classList.add('cursor-ready')

    let ringX = 0
    let ringY = 0
    let targetX = 0
    let targetY = 0
    let rafId: number

    function onMove(e: MouseEvent) {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`
      }
      const target = e.target as HTMLElement
      setHoveringInteractive(Boolean(target.closest('a, button, input, textarea, [role="button"]')))
    }

    function tick() {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      document.body.classList.remove('cursor-ready')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
        style={
          hoveringInteractive
            ? { width: 46, height: 46, borderColor: 'rgb(var(--accent))', backgroundColor: 'rgb(var(--accent) / 0.08)' }
            : undefined
        }
      />
    </>
  )
}
