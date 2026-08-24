import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, className = '' }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let started = false

    const run = () => {
      if (reduceMotion) {
        setN(value)
        return
      }
      const start = performance.now()
      const duration = 1100
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        setN(Math.round(value * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref} className={className}>
      {n}
    </span>
  )
}
