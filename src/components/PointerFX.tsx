import { useEffect, useRef } from 'react'

/** Desktop-only CRT cursor (dot + ring). No magnetic / ambient glow. */
export default function PointerFX({ enabled = true }: { enabled?: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const root = document.documentElement
    root.classList.add('has-pointer-fx')

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf = 0
    let hovering = false
    let visible = false

    const isInteractive = (el: Element | null) => {
      if (!el || !(el instanceof Element)) return false
      return Boolean(
        el.closest('a, button, [role="button"], .lang-btn, .social-row, .nav-link, .glow-card'),
      )
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!visible) {
        visible = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
      hovering = isInteractive(e.target as Element)
      root.classList.toggle('pointer-hovering', hovering)
    }

    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
      root.classList.remove('pointer-hovering')
    }

    const tick = () => {
      rx += (x - rx) * 0.22
      ry += (y - ry) * 0.22

      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${
        hovering ? 1.55 : 1
      })`

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('mouseleave', onLeave)
      root.classList.remove('has-pointer-fx', 'pointer-hovering')
    }
  }, [enabled])

  return (
    <div className="pointer-fx" aria-hidden="true">
      <div ref={ringRef} className="pointer-fx__ring" />
      <div ref={dotRef} className="pointer-fx__dot" />
    </div>
  )
}
