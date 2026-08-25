import { useEffect, useRef, useState } from 'react'
import { about } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(target)
      return
    }
    let start: number | null = null
    let raf: number
    function step(ts: number) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function StatCard({ label, value }: { label: string; value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const numeric = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')
  const count = useCountUp(numeric, active)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent/40"
    >
      <div className="font-display text-3xl font-semibold text-ink">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeader filename="about.tsx" title="About" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-lg text-ink' : ''}>
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-6 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
              {about.focus}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={160}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
