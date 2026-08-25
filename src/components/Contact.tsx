import { contact, profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeader filename="contact.sh" title={contact.heading} description={contact.subheading} />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-6" delay={80}>
            <div className="space-y-3">
              <ContactRow label="Email" value={profile.email} href={profile.social.email} />
              <ContactRow label="LinkedIn" value="linkedin.com/in/khushi-agarwal-b819a0220/" href={profile.social.linkedin} />
              <ContactRow label="GitHub" value="github.com/Khushiagrwal" href={profile.social.github} />
            </div>
          </Reveal>

          {/* <Reveal className="lg:col-span-3" delay={160}>
            <form onSubmit={handleSubmit} className="rounded-xl border border-line bg-surface p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" type="text" required autoComplete="name" />
                <Field id="email" label="Email" type="email" required autoComplete="email" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md border border-line bg-surface2 px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none"
                  placeholder="Tell me a bit about what you're working on..."
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
              <p role="status" aria-live="polite" className="mt-3 font-mono text-xs text-live">
                {status === 'sent' ? "Message captured locally — wire up a backend to actually send it." : ''}
              </p>
            </form>
          </Reveal> */}
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3.5 transition-colors hover:border-accent/40"
    >
      <span className="font-mono text-xs text-faint">{label}</span>
      <span className="text-sm text-ink">{value}</span>
    </a>
  )
}
