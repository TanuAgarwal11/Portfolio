const PALETTE = ['#5B7FFF', '#34D399', '#E8A33D']

function hashToIndex(str: string, mod: number) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 997
  return h % mod
}

export default function ProjectThumb({ name, seed, large = false }: { name: string; seed: string; large?: boolean }) {
  const color = PALETTE[hashToIndex(seed, PALETTE.length)]
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden border-b border-line bg-surface2"
      style={{ aspectRatio: large ? '16 / 9' : '16 / 10' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${seed}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke={color} strokeOpacity="0.18" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
      </svg>
      <span
        className={`relative font-display font-semibold tracking-tight ${large ? 'text-5xl' : 'text-3xl'}`}
        style={{ color }}
      >
        {initials}
      </span>
    </div>
  )
}
