import { useState } from 'react';
import type { Language } from '../content/portfolio';

const key = 'cristian-portfolio-language';

function savedLanguage(): Language {
  try {
    return localStorage.getItem(key) === 'en' ? 'en' : 'es';
  } catch { return 'es'; }
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(savedLanguage);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try { localStorage.setItem(key, next); } catch { /* storage is optional */ }
  };
  return { language, setLanguage };
}
