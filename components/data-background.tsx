const BARS = [38, 62, 48, 80, 56, 92, 70, 110, 86, 128, 104, 140]

const LINE_POINTS = [
  [0, 210],
  [80, 180],
  [160, 196],
  [240, 140],
  [320, 158],
  [400, 102],
  [480, 120],
  [560, 70],
  [640, 88],
  [720, 40],
]

const SCATTER = [
  [40, 150, 5],
  [72, 118, 4],
  [96, 132, 6],
  [130, 96, 4],
  [150, 112, 5],
  [182, 78, 6],
  [210, 90, 4],
  [236, 58, 5],
  [262, 70, 4],
  [290, 40, 6],
]

export function DataBackground() {
  const linePath = LINE_POINTS.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const areaPath = `${linePath} L720,240 L0,240 Z`

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--primary) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--primary) 12%, transparent) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <svg
        viewBox="0 0 720 240"
        className="absolute inset-x-0 bottom-0 h-1/3 w-full text-primary"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#area-fill)" />
        <path
          d={linePath}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        viewBox="0 0 300 150"
        className="absolute left-6 top-8 hidden w-72 text-primary opacity-30 md:block"
      >
        {BARS.map((height, i) => (
          <rect
            key={i}
            x={i * 25}
            y={150 - height}
            width="16"
            height={height}
            rx="2"
            fill="currentColor"
            fillOpacity={0.35 + (i / BARS.length) * 0.5}
          />
        ))}
      </svg>

      <svg
        viewBox="0 0 320 180"
        className="absolute right-6 top-10 hidden w-72 text-primary opacity-35 md:block"
      >
        <line x1="20" y1="170" x2="310" y2="170" stroke="currentColor" strokeOpacity="0.5" />
        <line x1="20" y1="10" x2="20" y2="170" stroke="currentColor" strokeOpacity="0.5" />
        <line
          x1="30"
          y1="160"
          x2="300"
          y2="30"
          stroke="currentColor"
          strokeDasharray="4 4"
          strokeOpacity="0.6"
        />
        {SCATTER.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" fillOpacity="0.7" />
        ))}
      </svg>

      <svg
        viewBox="0 0 120 120"
        className="absolute bottom-[30%] left-10 hidden w-28 -rotate-90 text-primary opacity-25 lg:block"
      >
        <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="14" />
        <circle
          cx="60"
          cy="60"
          r="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="14"
          strokeDasharray="190 277"
        />
      </svg>
    </div>
  )
}
