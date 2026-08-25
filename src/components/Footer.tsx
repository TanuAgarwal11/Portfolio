import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} Khushi Agarwal · Built with Angular, Node.js & AWS.
        </p>
        <p className="font-mono text-xs text-faint">{profile.location}</p>
      </div>
    </footer>
  )
}
