import { useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import ProjectModal from './ProjectModal'
import ProjectThumb from './ProjectThumb'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p.id !== featured.id)

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeader
            filename="projects/"
            title="Projects"
            description="A handful of things I've built end to end, from first commit to production."
          />
        </Reveal>

        {/* Featured project */}
        <Reveal delay={80}>
          <div className="mb-14 grid overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/30 lg:grid-cols-2">
            <ProjectThumb name={featured.name} seed={featured.id} large />
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">
                Featured
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">{featured.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/50"
                >
                  GitHub
                </a>
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(featured)}
                  className="rounded-md px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/10">
                <ProjectThumb name={project.name} seed={project.id} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[11px] text-faint">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted transition-colors hover:text-ink"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted transition-colors hover:text-ink"
                    >
                      Live Demo
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="ml-auto font-medium text-accent transition-opacity hover:opacity-80"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}
