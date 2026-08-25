import { skillCategories } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeader
            filename="skills.json"
            title="Skills"
            description="Tools and languages I reach for most, grouped the way I'd organize an actual codebase."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 70}>
              <div className="group h-full rounded-lg border border-line bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-ink">{category.label}</h3>
                  <span className="font-mono text-[11px] text-faint">{category.fileLabel}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:border-line/80 hover:!border-accent/50 hover:!text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
