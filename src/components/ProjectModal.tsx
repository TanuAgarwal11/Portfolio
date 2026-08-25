import { useEffect, useRef } from 'react'
import type { Project } from '../data/portfolio'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-void/80 px-4 py-10 backdrop-blur-sm animate-fade-in sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-line bg-surface2 px-5 py-3">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            projects/{project.id}.md
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <h2 id="project-modal-title" className="font-display text-2xl font-semibold text-ink">
            {project.name}
          </h2>
          <p className="mt-2 text-sm text-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.detail.techStack.map((t) => (
              <span key={t} className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line bg-surface2 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/50"
            >
              View Code
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
          </div>

          <dl className="mt-8 space-y-6 border-t border-line pt-6">
            <DetailBlock term="Problem" description={project.detail.problem} />
            <DetailBlock term="Solution" description={project.detail.solution} />
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-accent">Features</dt>
              <dd className="mt-2 space-y-1.5">
                {project.detail.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </dd>
            </div>
            <DetailBlock term="Architecture" description={project.detail.architecture} />
            <DetailBlock term="Challenges" description={project.detail.challenges} />
            <DetailBlock term="What I learned" description={project.detail.learned} />
          </dl>
        </div>
      </div>
    </div>
  )
}

function DetailBlock({ term, description }: { term: string; description: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-wide text-accent">{term}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-muted">{description}</dd>
    </div>
  )
}
