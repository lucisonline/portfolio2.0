import { useEffect, useRef, useState } from 'react'

function genSeries(n = 60, start = 35) {
  const arr = []
  let v = start
  for (let i = 0; i < n; i++) {
    v += (Math.random() - 0.5) * 0.6
    arr.push(v)
  }
  return arr
}

export default function LivelineDemo() {
  const [data, setData] = useState(() => genSeries())
  const ref = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const next = prev.slice(1)
        const last = prev[prev.length - 1]
        next.push(last + (Math.random() - 0.48) * 0.7)
        return next
      })
    }, 1200)
    return () => clearInterval(id)
  }, [])

  const w = 640
  const h = 200
  const min = Math.min(...data) - 1
  const max = Math.max(...data) + 1
  const x = (i) => (i / (data.length - 1)) * w
  const y = (v) => h - ((v - min) / (max - min)) * h

  const d = data
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(2)} ${y(v).toFixed(2)}`)
    .join(' ')

  const area = `${d} L ${w} ${h} L 0 ${h} Z`
  const latest = data[data.length - 1]
  const lx = x(data.length - 1)
  const ly = y(latest)

  return (
    <div className="chart-wrap">
      <svg ref={ref} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="ll-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#ll-grad)" />
        <path
          d={d}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={lx} cy={ly} r="10" fill="#3b82f6" fillOpacity="0.15" />
        <circle cx={lx} cy={ly} r="4" fill="#3b82f6" />
        <foreignObject x={lx + 10} y={ly - 14} width="80" height="28">
          <span className="price-tag">{latest.toFixed(2)}</span>
        </foreignObject>
      </svg>
    </div>
  )
}
