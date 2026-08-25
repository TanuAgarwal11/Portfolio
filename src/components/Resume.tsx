import { profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function Resume() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-xl border border-line bg-surface px-8 py-12 text-center">
            <span className="font-mono text-xs text-faint">resume.pdf</span>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Want to know more about my work?
            </h2>
            <p className="max-w-md text-sm text-muted">
              The full picture — roles, impact, and the technologies behind it — in one PDF.
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v13m0 0-4.5-4.5M12 16l4.5-4.5M4 21h16" />
              </svg>
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
