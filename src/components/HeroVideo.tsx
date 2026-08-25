import { useEffect, useRef, useState } from 'react'

/** Same Pexels clip, lighter encodes. UHD was ~45MB and felt slow. */
const SRC_720 = 'https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4'
const SRC_1080 = 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4'

function pickSource() {
  if (typeof window === 'undefined') return SRC_720

  const wide = window.matchMedia('(min-width: 1024px)').matches
  const saveData =
    (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection?.saveData === true
  const slow = /2g|slow-2g/.test(
    (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
      ?.effectiveType ?? '',
  )

  if (saveData || slow) return SRC_720
  return wide ? SRC_1080 : SRC_720
}

type Props = {
  /** Wait until page loader is gone before fetching video bytes */
  enabled?: boolean
}

export default function HeroVideo({ enabled = true }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [src, setSrc] = useState<string | null>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!enabled || failed) return

    let cancelled = false
    let idleId = 0
    let timer = 0

    const start = () => {
      if (cancelled) return
      setSrc(pickSource())
    }

    // Let first paint + fonts settle, then pull video on idle
    const ric = window.requestIdleCallback
    if (typeof ric === 'function') {
      idleId = ric(start, { timeout: 1200 })
    } else {
      timer = window.setTimeout(start, 400)
    }

    return () => {
      cancelled = true
      if (idleId && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
      window.clearTimeout(timer)
    }
  }, [enabled, failed])

  useEffect(() => {
    const el = videoRef.current
    if (!el || !src) return

    const tryPlay = async () => {
      try {
        await el.play()
      } catch {
        // Autoplay can be blocked; muted + playsInline usually OK
      }
    }

    if (el.readyState >= 3) {
      setReady(true)
      void tryPlay()
    }
  }, [src])

  if (failed) return null

  return (
    <video
      ref={videoRef}
      key={src ?? 'empty'}
      src={src ?? undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out lg:scale-[1.2] ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
      onCanPlay={() => {
        setReady(true)
        void videoRef.current?.play().catch(() => {})
      }}
      onLoadedData={() => {
        setReady(true)
      }}
      onError={() => {
        setFailed(true)
        setReady(false)
      }}
    />
  )
}
