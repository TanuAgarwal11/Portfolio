import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { profile } from '../data/portfolio'

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    function onMove(e: MouseEvent) {
      const el = glowRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--x', `${x}%`)
      el.style.setProperty('--y', `${y}%`)
    }

    const node = glowRef.current
    node?.addEventListener('mousemove', onMove)
    return () => node?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 grid-backdrop animate-drift" aria-hidden="true" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
        style={
          {
            background: 'radial-gradient(500px circle at var(--x, 50%) var(--y, 20%), rgb(var(--accent) / 0.10), transparent 65%)',
          } as CSSProperties
        }
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-line bg-surface/70 shadow-2xl shadow-black/20 backdrop-blur-sm">
          {/* Editor chrome bar */}
          <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF6A5F]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" aria-hidden="true" />
            <span className="ml-3 font-mono text-xs text-faint">hero.tsx</span>
          </div>

          <div className="px-7 py-10 sm:px-10 sm:py-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              {profile.availability}
            </div>

            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-3 flex items-center gap-2 font-mono text-lg text-accent sm:text-xl">
              <span aria-hidden="true">{'>'}</span>
              <span>{profile.role}</span>
              <span className="inline-block h-[1.1em] w-[2px] animate-blink bg-accent" aria-hidden="true" />
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
              >
                View Projects
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-md px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                Contact Me →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
              <SocialLink href={profile.social.github} label="GitHub">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </SocialLink>
              <SocialLink href={profile.social.linkedin} label="LinkedIn">
                <path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-6.05c0-1.44-.03-3.3-2.02-3.3-2.02 0-2.33 1.58-2.33 3.2v6.15H9.35V8.5h3.24v1.63h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.6 2.25 4.6 5.17v6.85Z" />
              </SocialLink>
              <SocialLink href={profile.social.email} label="Email">
                <path d="M3.5 5.5h17a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm.7 1.8v.06l7.8 5.85 7.8-5.85V7.3l-7.8 5.86-7.8-5.86Z" />
              </SocialLink>
              <span className="ml-auto font-mono text-xs text-faint">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  )
}
