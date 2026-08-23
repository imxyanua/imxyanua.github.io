import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  Play,
  Menu,
  X,
  Shield,
  Bot,
  Radar,
  Lock,
  Terminal,
  Cpu,
  ArrowDown,
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'METHOD', href: '#method' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'LAB', href: '#lab' },
  { label: 'TALK', href: '#talk' },
] as const

const SERVICES = [
  {
    icon: Shield,
    title: 'Threat Modeling & Red Teaming',
    desc: 'Attack-path mapping, adversary emulation, and realistic breach simulations before attackers get there.',
  },
  {
    icon: Bot,
    title: 'AI Agent Engineering',
    desc: 'Tool-using agents with guardrails, evals, and production-safe orchestration for security workflows.',
  },
  {
    icon: Lock,
    title: 'Secure App Development',
    desc: 'Hardened React/Next stacks, auth boundaries, secrets hygiene, and secure-by-default APIs.',
  },
  {
    icon: Terminal,
    title: 'LLM Security / Prompt Defense',
    desc: 'Prompt injection resistance, output filtering, jailbreak testing, and model-facing abuse cases.',
  },
  {
    icon: Radar,
    title: 'Detection Engineering / SIEM',
    desc: 'High-signal detections, triage playbooks, and noisy-alert cleanup that analysts can trust.',
  },
  {
    icon: Cpu,
    title: 'Automation & SOAR',
    desc: 'Response automation that shortens dwell time without waking the whole on-call rotation.',
  },
] as const

const METHOD_STEPS = [
  {
    step: '01',
    title: 'Recon the blast radius',
    text: 'Map assets, trust boundaries, and what actually hurts if it breaks — not a generic checklist.',
  },
  {
    step: '02',
    title: 'Break it on purpose',
    text: 'Red team the weak points. Abuse AI agents. Prove exploitability with evidence, not vibes.',
  },
  {
    step: '03',
    title: 'Rebuild the defense',
    text: 'Ship detections, patches, and agent guardrails that survive the next creative attacker.',
  },
  {
    step: '04',
    title: 'Measure & iterate',
    text: 'Track MTTD/MTTR, false positives, and agent eval scores so security keeps compounding.',
  },
] as const

const PROJECTS = [
  {
    tag: 'RED TEAM',
    title: 'Adversarial pathfinder',
    text: 'Chained identity + cloud misconfigs into a full tenant takeover story for a fintech stack.',
  },
  {
    tag: 'AI AGENT',
    title: 'SOC triage copilot',
    text: 'Agent that summarizes alerts, pulls context, and drafts containment steps with human approval gates.',
  },
  {
    tag: 'LLM SEC',
    title: 'Prompt armor suite',
    text: 'Regression pack for injection, data exfil, and tool-abuse cases against production chat surfaces.',
  },
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

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)
  const [loaderExit, setLoaderExit] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading || menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading, menuOpen])

  useEffect(() => {
    let frame = 0
    let raf = 0
    const duration = 1800
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      const value = Math.round(eased * 100)
      setLoadProgress(value)
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        frame = window.setTimeout(() => {
          setLoaderExit(true)
          window.setTimeout(() => setLoading(false), 500)
        }, 180)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(frame)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Page loader */}
      {loading && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loaderExit ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          aria-busy="true"
          aria-live="polite"
        >
          <div className="flex w-[min(72vw,280px)] flex-col items-center">
            <div className="font-pixel text-3xl tracking-[0.2em] text-white sm:text-4xl">
              XYANUA
            </div>
            <div className="mt-6 h-[2px] w-full overflow-hidden bg-white/15">
              <div
                className="h-full bg-white transition-[width] duration-100 ease-linear"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="mt-3 font-pixel text-[10px] tracking-widest text-white/40">
              {loadProgress}%
            </div>
          </div>
        </div>
      )}

      {/* Sticky nav */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-black/80 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-6 md:px-10 lg:px-14">
          <a href="#top" className="transition-opacity hover:opacity-70" aria-label="Home">
            <Logo />
          </a>

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
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col overflow-hidden px-5 pt-20 sm:px-6 md:px-10 lg:px-14"
      >
        <video
          src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
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

            <div className="text-right lg:text-left">
              <h2 className="text-lg leading-tight tracking-wide md:text-xl">
                <span className="font-normal">CYBER &amp;</span>
                <br />
                <span className="font-pixel text-2xl md:text-3xl">AI ENGINEER</span>
              </h2>
            </div>

            <div>
              <div className="font-pixel mb-3 text-base tracking-widest text-white/50 uppercase">
                What I Do
              </div>
              <p className="max-w-[220px] text-sm leading-relaxed text-white/90">
                I design adversarial-ready defenses and intelligent agents for high-stakes digital
                systems
              </p>
            </div>

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

          <div className="flex-1" />

          <div className="pb-8">
            <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
              <h1
                className="text-3xl font-normal tracking-wide uppercase sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
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

              <div className="flex flex-col justify-end gap-4 sm:gap-6">
                <a
                  href="#about"
                  className="flex items-center gap-3 self-start border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <Play size={14} fill="white" />
                  <span className="text-sm tracking-wider">ENTER BRIEFING</span>
                </a>

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

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <p className="text-xs text-white/60">
                Open to freelance, contract or full-time.{' '}
                <a href="#talk" className="text-red-500 transition-colors hover:text-red-400">
                  Schedule a call
                </a>
              </p>
              <a
                href="#about"
                className="hidden items-center gap-2 text-xs tracking-widest text-white/50 uppercase transition-colors hover:text-white sm:flex"
              >
                Scroll
                <ArrowDown size={14} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-white/10 bg-black px-5 py-24 sm:px-6 md:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-pixel text-sm tracking-widest text-blue-400/80 uppercase">About</p>
            <h2 className="mt-4 text-3xl leading-tight tracking-wide md:text-5xl">
              Operator mindset.
              <br />
              <span className="font-pixel text-blue-300">Builder instincts.</span>
            </h2>
          </Reveal>

          <div className="space-y-6 text-base leading-relaxed text-white/75 md:text-lg">
            <Reveal delay={80}>
              <p>
                I&apos;m <span className="text-white">xyanua</span> — a cybersecurity &amp; AI
                engineer focused on systems that get attacked for real: identity, cloud, apps, and
                the new attack surface around LLMs and autonomous agents.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                My default loop is simple: assume breach, prove impact, then design defenses and
                agents that shorten detection and response without drowning teams in noise.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="grid grid-cols-3 gap-4 border border-white/10 bg-white/[0.02] p-5">
                <div>
                  <div className="font-pixel text-2xl text-white md:text-3xl">3</div>
                  <div className="mt-1 text-xs tracking-wide text-white/50 uppercase">
                    Red team ops
                  </div>
                </div>
                <div>
                  <div className="font-pixel text-2xl text-white md:text-3xl">47</div>
                  <div className="mt-1 text-xs tracking-wide text-white/50 uppercase">
                    Detection rules
                  </div>
                </div>
                <div>
                  <div className="font-pixel text-2xl text-white md:text-3xl">12</div>
                  <div className="mt-1 text-xs tracking-wide text-white/50 uppercase">AI agents</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section
        id="method"
        className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className="font-pixel text-sm tracking-widest text-blue-400/80 uppercase">Method</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight tracking-wide md:text-5xl">
              How engagements actually move
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {METHOD_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <article className="glow-card h-full border border-white/10 bg-black/40 p-6 md:p-8">
                  <div className="font-pixel text-sm text-blue-300/80">{item.step}</div>
                  <h3 className="mt-3 text-xl tracking-wide">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / RESEARCH */}
      <section
        id="research"
        className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="scanline-overlay pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className="font-pixel text-sm tracking-widest text-blue-400/80 uppercase">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight tracking-wide md:text-5xl">
              Security depth meets AI systems work
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={i * 70}>
                  <article className="glow-card h-full border border-white/10 bg-white/[0.02] p-6">
                    <Icon className="text-blue-300" size={22} />
                    <h3 className="mt-5 text-lg tracking-wide">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{service.desc}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className="font-pixel text-sm tracking-widest text-blue-400/80 uppercase">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl leading-tight tracking-wide md:text-5xl">
              Signals from the lab
            </h2>
          </Reveal>

          <div className="mt-14 space-y-4">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={i * 100}>
                <article className="glow-card group grid gap-4 border border-white/10 bg-black/50 p-6 md:grid-cols-[160px_1fr_auto] md:items-center md:p-8">
                  <span className="font-pixel text-xs tracking-widest text-blue-300/90">
                    {project.tag}
                  </span>
                  <div>
                    <h3 className="text-xl tracking-wide transition-colors group-hover:text-blue-200 md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
                      {project.text}
                    </p>
                  </div>
                  <span className="text-xs tracking-widest text-white/40 uppercase transition-colors group-hover:text-white/70">
                    Case study →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LAB */}
      <section
        id="lab"
        className="relative border-t border-white/10 bg-black px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <div className="border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent p-8 md:p-12">
              <p className="font-pixel text-sm tracking-widest text-blue-400/80 uppercase">Lab</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight tracking-wide md:text-5xl">
                Experiments on agents, detections, and exploit chains
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
                A living notebook of prompt-defense benches, SIEM rule packs, and red-team notes.
                More fragments shipping soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-white/15 px-3 py-1.5 text-xs tracking-wide text-white/70">
                  Prompt injection corpus
                </span>
                <span className="border border-white/15 px-3 py-1.5 text-xs tracking-wide text-white/70">
                  Cloud attack graphs
                </span>
                <span className="border border-white/15 px-3 py-1.5 text-xs tracking-wide text-white/70">
                  Agent eval harness
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TALK / CONTACT */}
      <section
        id="talk"
        className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className="font-pixel text-sm tracking-widest text-blue-400/80 uppercase">Talk</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight tracking-wide md:text-5xl">
              Need a sharper security edge — or an AI agent that doesn&apos;t freestyle into
              production risk?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
              Open to freelance, contract, or full-time. Tell me what you&apos;re defending and
              we&apos;ll scope the adversarial angle fast.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@xyanua.dev"
                className="border border-red-500/60 bg-red-500/10 px-6 py-3 text-sm tracking-wider text-red-400 transition-colors hover:bg-red-500/20 hover:text-red-300"
              >
                SCHEDULE A CALL
              </a>
              <a
                href="#top"
                className="border border-white/25 px-6 py-3 text-sm tracking-wider text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                BACK TO TOP
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-xs text-white/45 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-pixel">XYANUA</span>
          <span>3 red team ops • 47 detection rules • 12 AI agents</span>
        </div>
      </footer>

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
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
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
