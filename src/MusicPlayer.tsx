import { useCallback, useEffect, useRef, useState } from 'react'
import { Music2, Pause, SkipForward } from 'lucide-react'
import { useLanguage } from './i18n/LanguageContext'

/** YouTube video IDs from user playlist links — API loads only after first play */
const TRACKS = [
  { id: 'gJAbDSse5WM', label: 'Hngle - Tìm em ft. Bảo Anh' },
  {
    id: 'yJgIzg_inOw',
    label: "Dangrangto - 'một ly (feat. Hoàng Tôn)' [Prod. DONAL]",
  },
] as const

type YtPlayer = {
  playVideo: () => void
  pauseVideo: () => void
  loadVideoById: (videoId: string) => void
  getPlayerState: () => number
  destroy: () => void
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          height?: string | number
          width?: string | number
          videoId?: string
          playerVars?: Record<string, string | number>
          events?: {
            onReady?: (e: { target: YtPlayer }) => void
            onStateChange?: (e: { data: number; target: YtPlayer }) => void
            onError?: () => void
          }
        },
      ) => YtPlayer
      PlayerState: {
        ENDED: number
        PLAYING: number
        PAUSED: number
      }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

function loadYouTubeApi(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.YT?.Player) {
      resolve()
      return
    }

    const previous = window.onYouTubeIframeAPIReady
    const timeout = window.setTimeout(() => {
      reject(new Error('YouTube API timeout'))
    }, 12000)

    window.onYouTubeIframeAPIReady = () => {
      window.clearTimeout(timeout)
      previous?.()
      resolve()
    }

    if (!document.getElementById('youtube-iframe-api')) {
      const tag = document.createElement('script')
      tag.id = 'youtube-iframe-api'
      tag.src = 'https://www.youtube.com/iframe_api'
      tag.async = true
      tag.onerror = () => {
        window.clearTimeout(timeout)
        reject(new Error('YouTube API failed to load'))
      }
      document.head.appendChild(tag)
    }
  })
}

export default function MusicPlayer() {
  const { t, lang } = useLanguage()
  const labelFont = lang === 'en' ? 'font-pixel' : 'font-label'
  const hostRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YtPlayer | null>(null)
  const indexRef = useRef(0)
  const playAfterReady = useRef(false)
  const [booting, setBooting] = useState(false)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const [error, setError] = useState(false)

  const destroyPlayer = useCallback(() => {
    try {
      playerRef.current?.destroy()
    } catch {
      // ignore
    }
    playerRef.current = null
  }, [])

  useEffect(() => () => destroyPlayer(), [destroyPlayer])

  const ensurePlayer = useCallback(async () => {
    if (playerRef.current && ready) return playerRef.current
    if (!hostRef.current) throw new Error('missing host')

    setBooting(true)
    setError(false)

    try {
      await loadYouTubeApi()
      if (!hostRef.current || !window.YT) throw new Error('YT unavailable')

      destroyPlayer()

      await new Promise<void>((resolve, reject) => {
        playerRef.current = new window.YT!.Player(hostRef.current!, {
          height: 1,
          width: 1,
          videoId: TRACKS[indexRef.current].id,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (e) => {
              setReady(true)
              setBooting(false)
              if (playAfterReady.current) {
                playAfterReady.current = false
                e.target.playVideo()
                setPlaying(true)
              }
              resolve()
            },
            onStateChange: (e) => {
              const YT = window.YT
              if (!YT) return
              if (e.data === YT.PlayerState.PLAYING) setPlaying(true)
              if (e.data === YT.PlayerState.PAUSED) setPlaying(false)
              if (e.data === YT.PlayerState.ENDED) {
                const next = (indexRef.current + 1) % TRACKS.length
                indexRef.current = next
                setTrackIndex(next)
                e.target.loadVideoById(TRACKS[next].id)
                e.target.playVideo()
              }
            },
            onError: () => {
              setError(true)
              setBooting(false)
              setPlaying(false)
              reject(new Error('YT playback error'))
            },
          },
        })
      })
    } catch {
      setError(true)
      setBooting(false)
      setReady(false)
      destroyPlayer()
      throw new Error('init failed')
    }

    return playerRef.current
  }, [destroyPlayer, ready])

  const toggle = useCallback(async () => {
    try {
      if (error) {
        setError(false)
        setReady(false)
        destroyPlayer()
      }
      if (!ready || !playerRef.current) {
        playAfterReady.current = true
        await ensurePlayer()
        return
      }

      const player = playerRef.current
      const state = player.getPlayerState()
      if (state === 1) {
        player.pauseVideo()
        setPlaying(false)
      } else {
        player.playVideo()
        setPlaying(true)
      }
    } catch {
      setError(true)
    }
  }, [destroyPlayer, ensurePlayer, error, ready])

  const nextTrack = useCallback(async () => {
    try {
      if (error) {
        setError(false)
        setReady(false)
        destroyPlayer()
      }
      if (!ready || !playerRef.current) {
        indexRef.current = (indexRef.current + 1) % TRACKS.length
        setTrackIndex(indexRef.current)
        playAfterReady.current = true
        await ensurePlayer()
        return
      }

      const next = (indexRef.current + 1) % TRACKS.length
      indexRef.current = next
      setTrackIndex(next)
      playerRef.current.loadVideoById(TRACKS[next].id)
      playerRef.current.playVideo()
      setPlaying(true)
    } catch {
      setError(true)
    }
  }, [destroyPlayer, ensurePlayer, error, ready])

  const label = TRACKS[trackIndex].label
  const status = playing ? t.audioOn : t.audioOff
  const marqueeText = `${label} · ${status}`

  return (
    <>
      <div
        className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <div ref={hostRef} />
      </div>

      <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6">
        {error && (
          <div className="max-w-[240px] border border-white/15 bg-black/80 px-3 py-2 text-[10px] tracking-wide text-white/60 backdrop-blur-md">
            {t.ytError}
          </div>
        )}

        <div
          className={`flex items-center gap-2 border border-white/20 bg-black/80 p-1.5 backdrop-blur-md transition-[border-color] duration-300 ${
            playing ? 'music-playing' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => void toggle()}
            disabled={booting}
            className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={playing ? t.pauseMusic : t.playMusic}
            title={playing ? t.pauseMusic : t.playMusic}
          >
            {playing ? <Pause size={18} fill="white" /> : <Music2 size={18} />}
          </button>

          <button
            type="button"
            onClick={() => void nextTrack()}
            disabled={booting}
            className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={t.nextTrack}
            title={t.nextTrack}
          >
            <SkipForward size={18} />
          </button>

          <div className="hidden w-[200px] pr-3 sm:block">
            <div className="flex items-center gap-2">
              <div className={`${labelFont} text-[10px] tracking-widest text-white/50`}>
                {t.audio}
              </div>
              {playing && (
                <div className="music-eq" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
            <div className="marquee mt-0.5 text-[11px] tracking-wide text-white/80" title={label}>
              <div className="marquee-track" key={`${trackIndex}-${playing}`}>
                <span className="marquee-item">{marqueeText}</span>
                <span className="marquee-item" aria-hidden="true">
                  {marqueeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
