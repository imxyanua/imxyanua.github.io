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
  ArrowUp,
} from 'lucide-react'
import MusicPlayer from './MusicPlayer'
import CaseStudyModal from './CaseStudyModal'
import { useLanguage } from './i18n/LanguageContext'
import { LANGS } from './i18n/translations'
import { caseUi, cases } from './i18n/cases'
import { CONTACT, mailtoHref } from './contact'

const SERVICE_ICONS = [Shield, Bot, Lock, Terminal, Radar, Cpu] as const

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
    node.classList.remove('is-visible')

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

function LanguageSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 border border-white/15 bg-black/30 p-0.5 backdrop-blur-sm">
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          className={`lang-btn px-2 py-1 text-[10px] tracking-wider ${
            lang === item.code
              ? 'is-active bg-white/15 text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
          aria-pressed={lang === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useLanguage()
  /** Pixel font lacks Vietnamese/Chinese glyphs — use readable label font instead */
  const labelFont = lang === 'en' ? 'font-pixel' : 'font-label'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)
  const [loaderExit, setLoaderExit] = useState(false)
  const [readProgress, setReadProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('top')
  const [showTop, setShowTop] = useState(false)
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const activeProject = t.projects.find((p) => p.id === activeCaseId) ?? null
  const activeCase =
    cases[lang].find((c) => c.id === activeCaseId) ?? null
  const uiCase = caseUi[lang]

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 1800)
    } catch {
      // fallback: open mailto if clipboard blocked
      window.location.href = mailtoHref()
    }
  }

  const navLinks = [
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.method, href: '#method', id: 'method' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.research, href: '#research', id: 'research' },
    { label: t.nav.lab, href: '#lab', id: 'lab' },
    { label: t.nav.talk, href: '#talk', id: 'talk' },
  ]

  useEffect(() => {
    const sectionIds = ['top', 'about', 'method', 'research', 'projects', 'lab', 'talk']

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setShowTop(y > 700)

      const max = document.documentElement.scrollHeight - window.innerHeight
      setReadProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0)

      const probe = y + 140
      let current = 'top'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) current = id
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      loading || menuOpen || Boolean(activeCaseId) ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading, menuOpen, activeCaseId])

  useEffect(() => {
    let frame = 0
    let raf = 0
    const duration = 1800
    const start = performance.now()

    const tick = (now: number) => {
      const ratio = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - ratio, 3)
      setLoadProgress(Math.round(eased * 100))
      if (ratio < 1) {
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
    <div className="page-enter relative min-h-screen w-full bg-black text-white" key={lang}>
      <div className="film-grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <div className="read-progress" aria-hidden="true">
        <span style={{ width: `${readProgress}%` }} />
      </div>

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

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-black/80 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-5 sm:px-6 md:px-10 lg:px-14">
          <a href="#top" className="transition-opacity hover:opacity-70" aria-label="Home">
            <Logo />
          </a>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm tracking-wide opacity-70 ${
                  activeSection === link.id ? 'is-active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitch />
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70 lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label={t.openMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

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
          <p className="mt-2 flex items-center text-xs tracking-[0.18em] text-white/70 uppercase sm:mt-4">
            <span className="hero-tick" aria-hidden="true" />
            <span>
              {t.roleLine1.replace('&', '').trim()} <span className="text-white/35">×</span>{' '}
              {t.roleLine2}
            </span>
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            <div>
              <h2 className="text-base leading-tight tracking-wide sm:text-lg md:text-xl">
                <span className="font-pixel text-xl sm:text-2xl md:text-3xl">XYANUA</span>
              </h2>
              <div className="mt-2 text-[10px] text-white/50 sm:mt-3">*</div>
              <p
                className={`${labelFont} mt-1 hidden text-xs leading-relaxed text-white/60 sm:block`}
              >
                {t.brandBlurb[0]}
                <br />
                {t.brandBlurb[1]}
                <br />
                {t.brandBlurb[2]}
                <br />
                {t.brandBlurb[3]}
              </p>
            </div>

            <div className="text-right lg:text-left">
              <h2 className="text-base leading-tight tracking-wide sm:text-lg md:text-xl">
                <span className="font-normal">{t.roleLine1}</span>
                <br />
                <span className="font-pixel text-xl sm:text-2xl md:text-3xl">{t.roleLine2}</span>
              </h2>
            </div>

            <div className="hidden lg:block">
              <div
                className={`${labelFont} mb-3 text-base tracking-widest text-white/50 uppercase`}
              >
                {t.whatIDo}
              </div>
              <p className="max-w-[220px] text-sm leading-relaxed text-white/90">{t.whatIDoBody}</p>
            </div>

            <div className="hidden text-right lg:block lg:text-left">
              <div
                className={`${labelFont} mb-3 text-base tracking-widest text-white/50 uppercase`}
              >
                {t.servicesLabel}
              </div>
              <ul className="space-y-0.5 text-sm leading-relaxed text-white/90">
                {t.serviceList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1" />

          <div className="pb-8">
            <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
              <h1
                className="text-[1.7rem] font-normal tracking-wide uppercase sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
                style={{ lineHeight: 0.78 }}
              >
                {t.hero.line1}
                <br />
                <span className="font-pixel inline-block align-baseline text-[1.25em] leading-none font-normal">
                  {t.hero.pixel1}
                </span>{' '}
                {t.hero.mid}
                <br />
                {t.hero.line3}
                <br />
                <span className="font-pixel inline-block align-baseline text-[1.25em] leading-none font-normal">
                  {t.hero.pixel2}
                </span>
              </h1>

              <div className="flex flex-col justify-end gap-4 sm:gap-6">
                <div className="flex flex-wrap items-center gap-3 self-start">
                  <a
                    href="#about"
                    className="flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <Play size={14} fill="white" />
                    <span className="text-sm tracking-wider">{t.enterBriefing}</span>
                  </a>
                  <a href="#about" className="btn-ghost">
                    {t.aboutCta}
                  </a>
                </div>

                <div className="flex max-w-full flex-wrap items-stretch gap-2 self-start text-sm text-white/80 sm:gap-3 lg:self-end">
                  <div className="flex items-center gap-2 bg-[#0B0B0B] px-2.5 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-sm font-bold tracking-tight sm:text-base">OSCP</span>
                    <span className="text-xs text-white/50">x1</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0B0B0B] px-2.5 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-base font-bold sm:text-xl">HTB</span>
                    <span className="text-xs text-white/50">x47</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0B0B0B] px-2.5 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-[10px] font-bold tracking-tight sm:text-xs">
                      AI RedTeam
                    </span>
                    <span className="text-xs text-white/50">x12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
              <div className="space-y-2">
                <p className="text-xs text-white/60">
                  {t.openToWork}{' '}
                  <a
                    href={mailtoHref()}
                    className="text-red-500 transition-colors hover:text-red-400"
                  >
                    {t.scheduleCall}
                  </a>
                </p>
                <p className="text-[11px] tracking-wide text-white/40">
                  <span className="text-white/30">{t.basedIn}</span> {t.basedInVal}
                </p>
              </div>
              <a href="#about" className="scroll-hint hidden sm:flex">
                <span>{t.scroll}</span>
                <span className="scroll-hint-line" aria-hidden="true">
                  <i />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="skills-marquee" aria-hidden="true">
        <div className="skills-marquee-track">
          {[...t.marqueeItems, ...t.marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="skills-marquee-item">
              {item}
              <span className="dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section
        id="about"
        className="relative border-t border-white/10 bg-black px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className={`${labelFont} text-sm tracking-widest text-blue-400/80 uppercase`}>
              {t.aboutLabel}
            </p>
            <h2 className="mt-4 text-3xl leading-tight tracking-wide md:text-5xl">
              {t.aboutTitle1}
              <br />
              <span className={`${labelFont} text-blue-300`}>{t.aboutTitle2}</span>
            </h2>
          </Reveal>

          <div className="space-y-6 text-base leading-relaxed text-white/75 md:text-lg">
            <Reveal delay={80}>
              <p>
                {t.aboutP1.split('xyanua').map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-white">xyanua</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>{t.aboutP2}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="grid grid-cols-3 gap-4 border border-white/10 bg-white/[0.02] p-5">
                <div>
                  <div className="font-pixel text-2xl text-white md:text-3xl">3</div>
                  <div className="mt-1 text-xs tracking-wide text-white/50 uppercase">
                    {t.statOps}
                  </div>
                </div>
                <div>
                  <div className="font-pixel text-2xl text-white md:text-3xl">47</div>
                  <div className="mt-1 text-xs tracking-wide text-white/50 uppercase">
                    {t.statRules}
                  </div>
                </div>
                <div>
                  <div className="font-pixel text-2xl text-white md:text-3xl">12</div>
                  <div className="mt-1 text-xs tracking-wide text-white/50 uppercase">
                    {t.statAgents}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="method"
        className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className={`${labelFont} text-sm tracking-widest text-blue-400/80 uppercase`}>
              {t.methodLabel}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight tracking-wide md:text-5xl">
              {t.methodTitle}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {t.methodSteps.map((item, i) => (
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

      <section
        id="research"
        className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="scanline-overlay pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className={`${labelFont} text-sm tracking-widest text-blue-400/80 uppercase`}>
              {t.capsLabel}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight tracking-wide md:text-5xl">
              {t.capsTitle}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
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

      <section
        id="projects"
        className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className={`${labelFont} text-sm tracking-widest text-blue-400/80 uppercase`}>
              {t.projectsLabel}
            </p>
            <h2 className="mt-4 text-3xl leading-tight tracking-wide md:text-5xl">
              {t.projectsTitle}
            </h2>
          </Reveal>

          <div className="mt-14 space-y-4">
            {t.projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <button
                  type="button"
                  onClick={() => setActiveCaseId(project.id)}
                  aria-label={`${uiCase.open}: ${project.title}`}
                  className="glow-card group grid w-full gap-4 border border-white/10 bg-black/50 p-6 text-left md:grid-cols-[160px_1fr_auto] md:items-center md:p-8"
                >
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
                    {t.caseStudy}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="lab"
        className="relative border-t border-white/10 bg-black px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <div className="border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent p-8 md:p-12">
              <p className={`${labelFont} text-sm tracking-widest text-blue-400/80 uppercase`}>
                {t.labLabel}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight tracking-wide md:text-5xl">
                {t.labTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">{t.labBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {t.labTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/15 px-3 py-1.5 text-xs tracking-wide text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="talk"
        className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-6 md:px-10 lg:px-14"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <p className={`${labelFont} text-sm tracking-widest text-blue-400/80 uppercase`}>
              {t.talkLabel}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight tracking-wide md:text-5xl">
              {t.talkTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">{t.talkBody}</p>

            <div className="mt-8">
              <p className={`${labelFont} text-xs tracking-widest text-white/45 uppercase`}>
                {t.contactChannels}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="glow-card border border-white/10 bg-black/40 p-5">
                  <div className="text-xs tracking-widest text-white/45 uppercase">
                    {t.contactEmail}
                  </div>
                  <a
                    href={mailtoHref()}
                    className="mt-2 block text-lg text-white transition-colors hover:text-blue-200"
                  >
                    {CONTACT.email}
                  </a>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={mailtoHref()}
                      className="border border-red-500/60 bg-red-500/10 px-4 py-2 text-xs tracking-wider text-red-400 transition-colors hover:bg-red-500/20"
                    >
                      {t.scheduleCta}
                    </a>
                    <button
                      type="button"
                      onClick={() => void copyEmail()}
                      className="border border-white/20 px-4 py-2 text-xs tracking-wider text-white/80 transition-colors hover:bg-white/5"
                    >
                      {emailCopied ? t.contactCopied : t.contactCopy}
                    </button>
                  </div>
                </div>

                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-card border border-white/10 bg-black/40 p-5 transition-colors hover:border-blue-400/40"
                >
                  <div className="text-xs tracking-widest text-white/45 uppercase">
                    {t.contactGithub}
                  </div>
                  <div className="mt-2 text-lg text-white">github.com/imxyanua</div>
                  <div className="mt-4 text-xs tracking-wider text-blue-300/80">
                    {t.contactOpenProfile}
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#top"
                className="inline-flex border border-white/25 px-6 py-3 text-sm tracking-wider text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t.backTop}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-xs text-white/45 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-pixel">XYANUA</span>
          <span>{t.footerStats}</span>
        </div>
      </footer>

      {!loading && <MusicPlayer />}

      {activeProject && activeCase && (
        <CaseStudyModal
          open={Boolean(activeCaseId)}
          onClose={() => setActiveCaseId(null)}
          title={activeProject.title}
          tag={activeProject.tag}
          summary={activeProject.text}
          detail={activeCase}
          ui={uiCase}
          labelFont={labelFont}
        />
      )}

      <a
        href="#top"
        className={`back-top fixed bottom-24 left-4 z-40 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/80 backdrop-blur-md sm:bottom-6 sm:left-6 ${
          showTop && !loading
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label={t.backTop}
        title={t.backTop}
      >
        <ArrowUp size={18} />
      </a>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo />
          <div className="flex items-center gap-3">
            <LanguageSwitch />
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70"
              onClick={() => setMenuOpen(false)}
              aria-label={t.closeMenu}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
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
