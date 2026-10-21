import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../images/logo.png';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const navSections = ['home', 'about', 'projects', 'skills', 'contact'];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const navItems = navSections.map((to) => ({ to, name: t.nav.items[to] }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeButton = (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
      className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  // Bouton FR / EN : la langue active est mise en évidence
  const languageButton = (
    <button
      onClick={toggleLang}
      aria-label={t.nav.switchLanguage}
      title={t.nav.switchLanguage}
      className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 text-xs font-semibold"
    >
      {['fr', 'en'].map((code) => (
        <span
          key={code}
          className={`px-2 py-1 rounded-md uppercase transition-colors ${
            lang === code ? 'bg-brand-600 text-white' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          {code}
        </span>
      ))}
    </button>
  );

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled || isOpen
        ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="home" smooth duration={500} className="flex items-center gap-3 cursor-pointer">
            {/* Logo blanc : inversé en noir en mode clair pour rester lisible */}
            <img src={logo} alt="" className="h-9 w-9 rounded-full ring-1 ring-slate-200 dark:ring-slate-700 object-contain p-1 invert dark:invert-0" />
            <span className="font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Siham Timlilt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                spy
                offset={-64}
                onSetActive={() => setActiveSection(item.to)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.to
                    ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/80'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="w-px h-5 bg-slate-200 dark:bg-slate-800 mx-2" />
            {languageButton}
            {themeButton}
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-1">
            {languageButton}
            {themeButton}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={t.nav.openMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="container-page pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              spy
              offset={-64}
              onSetActive={() => setActiveSection(item.to)}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors ${
                activeSection === item.to
                  ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
