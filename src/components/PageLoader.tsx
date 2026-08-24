type Props = {
  progress: number
  exiting: boolean
}

export default function PageLoader({ progress, exiting }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex w-[min(72vw,280px)] flex-col items-center">
        <div
          className="glitch font-pixel text-3xl tracking-[0.2em] text-white sm:text-4xl"
          data-text="XYANUA"
        >
          XYANUA
        </div>
        <div className="mt-6 h-[2px] w-full overflow-hidden bg-white/15">
          <div
            className="h-full bg-white transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 font-pixel text-[10px] tracking-widest text-white/40">
          {progress}%
        </div>
      </div>
    </div>
  )
}
