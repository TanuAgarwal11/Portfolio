import { useEffect, useRef, useState } from 'react'
import { certificates, type Certificate } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null)

  return (
    <section id="certificates" className="border-y border-line/70 bg-surface2/25 py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeader
            filename="certificates/"
            title="Certificates"
            description="A few milestones from my learning journey and technical practice."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.id} delay={index * 80}>
              <button
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                className="group flex h-full w-full flex-col text-left"
                aria-label={`Open ${certificate.title} certificate`}
              >
                <div className="relative flex min-h-56 flex-1 flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-xl group-hover:shadow-black/10">
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent transition-transform duration-300 group-hover:rotate-6">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                  <span className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{certificate.date}</span>
                  <h3 className="max-w-[85%] font-display text-xl font-semibold leading-snug text-ink">{certificate.title}</h3>
                  <p className="mt-3 text-sm text-muted">{certificate.issuer}</p>
                  <span className="mt-auto pt-7 font-mono text-xs text-faint transition-colors group-hover:text-accent">{certificate.documentUrl ? 'View certificate →' : 'View details →'}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeCertificate && <CertificateModal certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />}
    </section>
  )
}

type CertificateModalProps = {
  certificate: Certificate
  onClose: () => void
}

function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
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
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-void/85 px-4 py-8 backdrop-blur-sm animate-fade-in sm:items-center sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-line bg-surface2 px-5 py-3">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            certificates/{certificate.id}.pdf
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-72 items-center justify-center rounded-lg border border-dashed border-accent/35 bg-void/40 p-6 text-center">
            {certificate.documentUrl ? (
              <iframe title={`${certificate.title} document`} src={certificate.documentUrl} className="h-[26rem] w-full rounded border border-line bg-white" />
            ) : (
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M8 13h8M8 17h5" />
                  </svg>
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-ink">Certificate file pending</p>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">Add the original PDF or image URL in portfolio.ts to show the document preview here.</p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-wide text-accent">{certificate.date}</span>
            <h2 id="certificate-modal-title" className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">{certificate.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{certificate.description}</p>
            <div className="mt-6 border-t border-line pt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">Issued by</p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{certificate.issuer}</p>
            </div>
            {certificate.documentUrl && (
              <a href={certificate.documentUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">Open original</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
