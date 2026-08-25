import { useEffect, useState } from 'react'

/**
 * A short, quiet loading sequence styled like a terminal build step.
 * Disappears on its own after ~900ms — never blocks longer than that.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finishDelay = prefersReducedMotion ? 0 : 900
    const doneTimer = setTimeout(() => setDone(true), finishDelay)
    const hideTimer = setTimeout(() => setVisible(false), finishDelay + 350)
    return () => {
      clearTimeout(doneTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-void transition-opacity duration-300"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
    >
      <div className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> starting dev server
        <span className={done ? 'text-live' : ''}>{done ? ' — ready' : ''}</span>
        {!done && <span className="animate-blink">▍</span>}
      </div>
    </div>
  )
}
