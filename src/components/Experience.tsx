import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeader filename="experience.log" title="Experience" />
        </Reveal>

        <ol className="relative border-l border-line pl-8 sm:pl-10">
          {experience.map((entry, i) => (
            <Reveal as="li" key={entry.id} delay={i * 90} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-void bg-accent sm:-left-[49px]"
                aria-hidden="true"
              />
              <div className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/30">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">{entry.role}</h3>
                  <span className="font-mono text-xs text-faint">{entry.duration}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent">{entry.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
