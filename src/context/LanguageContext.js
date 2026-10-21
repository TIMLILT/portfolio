import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  try {
    const stored = window.localStorage.getItem('lang');
    if (stored === 'fr' || stored === 'en') return stored;
  } catch (e) {
    // localStorage indisponible (navigation privée...) : on garde la langue par défaut
  }
  return 'fr';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
    try {
      window.localStorage.setItem('lang', lang);
    } catch (e) {
      // ignoré : la langue ne sera simplement pas mémorisée
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
