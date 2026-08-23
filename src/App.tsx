import { useState } from 'react'
import { Play, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'ABOUT', href: '#' },
  { label: 'METHOD', href: '#' },
  { label: 'PROJECTS', href: '#' },
  { label: 'RESEARCH', href: '#' },
  { label: 'LAB', href: '#' },
  { label: 'TALK', href: '#' },
] as const

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
        fill="white"
      />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-6">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="p-2 transition-opacity hover:opacity-70 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Four-column meta grid */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {/* COL 1 */}
          <div>
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="font-pixel text-2xl md:text-3xl">XYANUA</span>
            </h2>
            <div className="mt-3 text-[10px] text-white/50">*</div>
            <p className="font-pixel mt-1 text-xs leading-relaxed text-white/60">
              xyanua is my
              <br />
              operator handle - built
              <br />
              around breaking systems
              <br />
              &quot;to make them safer&quot;
            </p>
          </div>

          {/* COL 2 */}
          <div className="text-right lg:text-left">
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="font-normal">CYBER &amp;</span>
              <br />
              <span className="font-pixel text-2xl md:text-3xl">AI ENGINEER</span>
            </h2>
          </div>

          {/* COL 3 */}
          <div>
            <div className="font-pixel mb-3 text-base tracking-widest text-white/50 uppercase">
              What I Do
            </div>
            <p className="max-w-[220px] text-sm leading-relaxed text-white/90">
              I design adversarial-ready defenses and intelligent agents for high-stakes digital systems
            </p>
          </div>

          {/* COL 4 */}
          <div className="text-right lg:text-left">
            <div className="font-pixel mb-3 text-base tracking-widest text-white/50 uppercase">
              Services
            </div>
            <ul className="space-y-0.5 text-sm leading-relaxed text-white/90">
              <li>Threat Modeling &amp; Red Teaming</li>
              <li>AI Agent Engineering</li>
              <li>Secure App Development</li>
              <li>LLM Security / Prompt Defense</li>
              <li>Detection Engineering / SIEM</li>
              <li>Automation &amp; SOAR</li>
            </ul>
          </div>
        </div>

        {/* Flex spacer */}
        <div className="flex-1" />

        {/* Bottom section */}
        <div className="pb-4">
          {/* Row A */}
          <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
            {/* Hero headline */}
            <h1
              className="text-3xl tracking-wide uppercase font-normal sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
              style={{ lineHeight: 0.72 }}
            >
              I BRING THE
              <br />
              <span className="font-pixel inline-block align-baseline text-[1.25em] leading-none font-normal">
                ADVERSARIAL
              </span>{' '}
              TO
              <br />
              SECURITY &amp; AI
              <br />
              <span className="font-pixel inline-block align-baseline text-[1.25em] leading-none font-normal">
                SYSTEMS
              </span>
            </h1>

            {/* Right column */}
            <div className="flex flex-col justify-end gap-4 sm:gap-6">
              {/* Play briefing */}
              <button
                type="button"
                className="flex items-center gap-3 self-start border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Play size={14} fill="white" />
                <span className="text-sm tracking-wider">PLAY BRIEFING</span>
              </button>

              {/* Creds / badges */}
              <div className="flex flex-wrap items-stretch gap-2 self-start text-sm text-white/80 sm:gap-3 lg:self-end">
                <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4">
                  <span className="text-sm font-bold tracking-tight sm:text-base">OSCP</span>
                  <span className="text-xs text-white/50">x1</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4">
                  <span className="text-lg font-bold sm:text-xl">HTB</span>
                  <span className="text-xs text-white/50">x47</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4">
                  <span className="text-[10px] font-bold tracking-tight sm:text-xs">
                    AI RedTeam
                  </span>
                  <span className="text-xs text-white/50">x12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row B — footer */}
          <div className="mt-4 grid grid-cols-1 gap-2 pt-4 sm:mt-5 sm:grid-cols-2 sm:gap-4">
            <p className="text-xs text-white/60">
              Open to freelance, contract or full-time.{' '}
              <a
                href="#"
                className="text-red-500 transition-colors hover:text-red-400"
              >
                Schedule a call
              </a>
            </p>
            <p className="text-xs text-white/60 sm:text-right">
              3 red team ops &bull; 47 detection rules &bull; 12 AI agents
            </p>
          </div>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo />
          <button
            type="button"
            className="p-2 transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
