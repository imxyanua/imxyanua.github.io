import { useEffect, useState } from 'react'
import { Menu, X, ArrowUp } from 'lucide-react'
import MusicPlayer from './MusicPlayer'
import CaseStudyModal from './CaseStudyModal'
import Logo from './components/Logo'
import Reveal from './components/Reveal'
import LanguageSwitch from './components/LanguageSwitch'
import PageLoader from './components/PageLoader'
import HeroBackdrop from './components/HeroBackdrop'
import HeroVideo from './components/HeroVideo'
import PointerFX from './components/PointerFX'
import { useLanguage } from './i18n/LanguageContext'
import { caseUi, cases } from './i18n/cases'
import { CONTACT, mailtoHref } from './contact'

export default function App() {
  const { t, lang } = useLanguage()
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

  const activeProject = t.projects.find((p) => p.id === activeCaseId) ?? null
  const activeCase = cases[lang].find((c) => c.id === activeCaseId) ?? null
  const uiCase = caseUi[lang]

  const navLinks = [
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.craft, href: '#craft', id: 'craft' },
    { label: t.nav.work, href: '#projects', id: 'projects' },
    { label: t.nav.talk, href: '#talk', id: 'talk' },
  ]

  useEffect(() => {
    const sectionIds = ['top', 'about', 'craft', 'projects', 'talk']

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
    let cancelled = false
    let raf = 0
    let exitTimer = 0

    const finish = () => {
      if (cancelled) return
      setLoadProgress(100)
      exitTimer = window.setTimeout(() => {
        setLoaderExit(true)
        window.setTimeout(() => {
          if (!cancelled) setLoading(false)
        }, 400)
      }, 120)
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      finish()
      return () => {
        cancelled = true
        window.clearTimeout(exitTimer)
      }
    }

    const start = performance.now()
    const minMs = 700
    const maxMs = 1600

    const tick = (now: number) => {
      if (cancelled) return
      const elapsed = now - start
      const ratio = Math.min(1, elapsed / maxMs)
      const eased = 1 - Math.pow(1 - ratio, 3)
      setLoadProgress(Math.round(eased * 100))
      if (ratio < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const ready = Promise.race([
      Promise.all([
        document.fonts?.ready ?? Promise.resolve(),
        new Promise<void>((r) => window.setTimeout(r, minMs)),
      ]),
      new Promise<void>((r) => window.setTimeout(r, maxMs)),
    ])

    void ready.then(finish)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.clearTimeout(exitTimer)
    }
  }, [])

  return (
    <div className="page-enter relative min-h-screen w-full bg-black text-white">
      <div className="film-grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="crt-flicker" aria-hidden="true" />

      <div className="read-progress" aria-hidden="true">
        <span style={{ width: `${readProgress}%` }} />
      </div>

      {loading && <PageLoader progress={loadProgress} exiting={loaderExit} />}

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-black/80 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-5 sm:px-6 md:px-10 lg:px-14">
          <a href="#top" className="header-brand transition-opacity hover:opacity-70" aria-label="Home">
            <Logo />
            <span className="header-brand__name">xyanua</span>
            <span className={`${labelFont} header-brand__alias`}>/ operator</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
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

      <section id="top" className="hero-shell">
        <HeroBackdrop />
        <HeroVideo enabled={!loading} />
        <div className="hero-scrim" />

        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-tick" aria-hidden="true" />
            <span>{t.heroRole1}</span>
            <span className="hero-eyebrow__x">×</span>
            <span>{t.heroRole2}</span>
          </p>

          <h1 className="hero-title">
            <span className="hero-title__line">
              <span className="glitch" data-text="xyanua">
                xyanua
              </span>
            </span>
          </h1>
          <p className={`${labelFont} hero-alias`}>
            <span className="hero-alias__br">[</span> cybersecurity / ai{' '}
            <span className="hero-alias__br">]</span>
          </p>
          <p className="hero-lede">{t.heroLede}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-pill btn-pill--primary">
              <span>{t.heroCtaWork}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M5 12h13M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#about" className="btn-pill btn-pill--ghost">
              {t.heroCtaAbout}
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <div className="hero-metacol">
            <span className={`${labelFont} k`}>{t.basedIn}</span>
            <span className="v">{t.basedInVal}</span>
          </div>
          <div className="hero-metacol">
            <span className={`${labelFont} k`}>{t.focusK}</span>
            <span className="v">{t.focusV}</span>
          </div>
        </div>

        <a href="#about" className="hero-scroll hidden sm:flex" aria-label={t.scroll}>
          <span>{t.scroll}</span>
          <span className="scroll-hint-line" aria-hidden="true">
            <i />
          </span>
        </a>
      </section>

      <section id="about" className="site-section">
        <div className="site-wrap about-grid">
          <div className="about-left">
            <Reveal>
              <p className={`${labelFont} secnum`}>{t.aboutLabel}</p>
              <figure className="about-figure">
                <div className="about-figure__stage">
                  <HeroBackdrop />
                </div>
                <figcaption className={labelFont}>{t.aboutCaption}</figcaption>
              </figure>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="display-h2">
                {t.aboutTitle1}
                <br />
                <em>{t.aboutTitleEm}</em>
                <br />
                {t.aboutTitle2}
              </h2>
            </Reveal>
            <div className="about-body">
              <Reveal delay={80}>
                <p>
                  {t.aboutP1.split('xyanua').map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong>xyanua</strong>
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
              <Reveal delay={220}>
                <p>{t.aboutP3}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="craft" className="site-section craft-section">
        <div className="site-wrap">
          <Reveal>
            <p className={`${labelFont} secnum`}>{t.craftLabel}</p>
            <h2 className="display-h2 craft-h">{t.craftTitle}</h2>
          </Reveal>

          <div className="craft-grid">
            <Reveal className="craft-cell">
              <article className="craft-card">
                <div className="craft-card__head">
                  <span className={`${labelFont} craft-card__tag`}>{t.craftJobTag}</span>
                  <h3 className="display-h3">{t.craftJobTitle}</h3>
                </div>
                <div className="term-card">
                  <div className="term-bar">
                    <i />
                    <i />
                    <i />
                    <span>{t.termTitle}</span>
                  </div>
                  <pre className="term-body">
                    {t.termLines.map((line, idx) => {
                      if (line.startsWith('$')) {
                        return (
                          <div key={`term-${idx}`}>
                            <span className="c">$</span>
                            <span className={line.includes('_') ? 'dim' : undefined}>
                              {line.slice(1)}
                            </span>
                          </div>
                        )
                      }
                      if (line.startsWith('▸')) {
                        return (
                          <div key={`term-${idx}`}>
                            <span className="g">▸</span>
                            {line.slice(1)}
                          </div>
                        )
                      }
                      if (line === '') return <div key={`term-${idx}`}>&nbsp;</div>
                      return <div key={`term-${idx}`}>{line}</div>
                    })}
                  </pre>
                </div>
                <p className="craft-card__note">{t.craftJobNote}</p>
              </article>
            </Reveal>

            <Reveal className="craft-cell" delay={90}>
              <article className="craft-card">
                <div className="craft-card__head">
                  <span className={`${labelFont} craft-card__tag`}>{t.craftAiTag}</span>
                  <h3 className="display-h3">{t.craftAiTitle}</h3>
                </div>
                <ul className="craft-lines">
                  {t.craftAiLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="craft-card__note">{t.craftAiNote}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects" className="site-section">
        <div className="site-wrap">
          <Reveal>
            <p className={`${labelFont} secnum`}>{t.workLabel}</p>
            <h2 className="display-h2">{t.workTitle}</h2>
            <p className="work-intro">{t.workIntro}</p>
          </Reveal>

          <div className="work-list">
            {t.projects.map((project, i) => {
              const detail = cases[lang].find((c) => c.id === project.id)
              const venue = detail?.venue ?? 'lab'
              return (
                <Reveal key={project.id} className="work-cell" delay={i * 80}>
                  <article
                    className={`work-row${venue === 'live' ? ' work-row--live' : ''}`}
                  >
                    <div className={`${labelFont} work-row__meta`}>
                      <span className="work-row__tag">{project.tag}</span>
                      <span className="work-row__venue">{uiCase[venue]}</span>
                    </div>
                    <h3 className="display-h3 work-row__title">{project.title}</h3>
                    <p className="work-row__text">{project.text}</p>
                    <div className="work-row__actions">
                      <div className="work-row__ext">
                        {detail?.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="work-link"
                          >
                            {link.kind === 'repo' ? uiCase.repo : uiCase.site}
                          </a>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="work-link work-link--note"
                        onClick={() => setActiveCaseId(project.id)}
                        aria-label={`${uiCase.open}: ${project.title}`}
                      >
                        {uiCase.note}
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="talk" className="site-section talk-section">
        <div className="site-wrap">
          <Reveal>
            <p className={`${labelFont} secnum`}>{t.talkLabel}</p>
            <h2 className="contact-h">
              {t.talkTitle}
              <br />
              <em>{t.talkTitleEm}</em>
            </h2>
            <p className="talk-body">{t.talkBody}</p>
          </Reveal>

          <div className="mt-10 max-w-4xl">
            <a href={mailtoHref()} className="social-row group">
              <span className="social-row__n">01</span>
              <span className="social-row__name">{t.contactEmail}</span>
              <span className="social-row__handle">{CONTACT.email}</span>
              <svg
                className="social-row__arw"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="social-row group">
              <span className="social-row__n">02</span>
              <span className="social-row__name">{t.contactGithub}</span>
              <span className="social-row__handle">github.com/imxyanua</span>
              <svg
                className="social-row__arw"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-xs text-white/45 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-pixel">xyanua</span>
          <span>{t.footerNote}</span>
        </div>
      </footer>

      {!loading && <MusicPlayer />}
      {!loading && <PointerFX />}

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
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
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
              <em className={`${labelFont} mr-3 text-sm not-italic text-emerald-300/80`}>
                {String(i + 1).padStart(2, '0')}
              </em>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
