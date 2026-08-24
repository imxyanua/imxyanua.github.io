import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import type { CaseDetail, CaseUi } from './i18n/cases'

type Props = {
  open: boolean
  onClose: () => void
  title: string
  tag: string
  summary: string
  detail: CaseDetail
  ui: CaseUi
  labelFont: string
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export default function CaseStudyModal({
  open,
  onClose,
  title,
  tag,
  summary,
  detail,
  ui,
  labelFont,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null

    const dialog = dialogRef.current
    const focusables = () =>
      dialog ? Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)) : []

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const nodes = focusables()
      if (nodes.length === 0) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    // Move focus into dialog after paint
    requestAnimationFrame(() => {
      const nodes = focusables()
      ;(nodes[0] ?? dialog)?.focus()
    })

    return () => {
      window.removeEventListener('keydown', onKey)
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6 ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-400 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label={ui.close}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-white/15 bg-[#080808] shadow-[0_0_80px_rgba(59,130,246,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:max-h-[85vh] ${
          open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5">
          <div>
            <div className="font-pixel text-xs tracking-widest text-emerald-300/90">{tag}</div>
            <h3 id={titleId} className="mt-2 text-2xl tracking-wide sm:text-3xl">
              {title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">{summary}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={ui.close}
          >
            <X size={22} />
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <section>
            <h4 className={`${labelFont} text-xs tracking-widest text-emerald-400/80 uppercase`}>
              {ui.problem}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">{detail.problem}</p>
          </section>

          <section>
            <h4 className={`${labelFont} text-xs tracking-widest text-emerald-400/80 uppercase`}>
              {ui.approach}
            </h4>
            <ol className="mt-3 space-y-3">
              {detail.approach.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
                  <span className="font-pixel shrink-0 text-emerald-300/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h4 className={`${labelFont} text-xs tracking-widest text-emerald-400/80 uppercase`}>
              {ui.outcome}
            </h4>
            <p className="mt-3 border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/80 sm:text-base">
              {detail.outcome}
            </p>
          </section>

          <section>
            <h4 className={`${labelFont} text-xs tracking-widest text-emerald-400/80 uppercase`}>
              {ui.stack}
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.stack.map((item) => (
                <span
                  key={item}
                  className="border border-white/15 px-3 py-1.5 text-xs tracking-wide text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
