import { useLanguage } from '../i18n/LanguageContext'
import { LANGS } from '../i18n/translations'

export default function LanguageSwitch() {
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
