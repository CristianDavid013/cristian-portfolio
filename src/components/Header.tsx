import type { Language } from '../content/portfolio';

export default function Header({ language, setLanguage, nav }: { language: Language; setLanguage: (language: Language) => void; nav: readonly string[] }) {
  const targets = ['profile', 'languages', 'technology', 'experience', 'education', 'contact'];
  return <header className="site-header"><a className="wordmark" href="#top"><span />CRISTIAN DAVID LOZANO</a><nav aria-label="Primary navigation">{nav.map((item, i) => <a key={item} href={`#${targets[i]}`}>{item}</a>)}</nav><div className="locale" aria-label="Language selection"><button type="button" aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>Español</button><button type="button" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button></div></header>;
}
