import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Dictionary, type Lang } from './translations'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'xyanua-lang'

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'vi' || saved === 'en' || saved === 'zh') return saved
  } catch {
    // ignore
  }

  if (typeof navigator !== 'undefined') {
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('vi')) return 'vi'
    if (nav.startsWith('zh')) return 'zh'
  }
  return 'en'
}

function applyDocumentLang(lang: Lang) {
  const root = document.documentElement
  root.lang = lang === 'zh' ? 'zh-CN' : lang
  root.dataset.lang = lang
  document.title = translations[lang].pageTitle
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Sync init avoids EN flash before localStorage / navigator resolve
  const [lang, setLangState] = useState<Lang>(() => detectLang())

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    // Apply document lang sync so fonts/title switch with the click
    applyDocumentLang(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    applyDocumentLang(lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
