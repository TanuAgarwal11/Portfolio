type SectionHeaderProps = {
  filename: string
  title: string
  description?: string
}

/**
 * Every section is introduced as if it were a file in the same repo —
 * "about.tsx", "skills.json", "experience.log" — a small motif that ties
 * the whole page back to the fact that a developer built it.
 */
export default function SectionHeader({ filename, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="mb-4 inline-flex items-center gap-2 rounded-t-md border border-b-0 border-line bg-surface2 px-3 py-1.5 font-mono text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        {filename}
      </div>
      <div className="border-t border-line pt-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-2xl text-muted">{description}</p>}
      </div>
    </div>
  )
}
