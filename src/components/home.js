import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';
import Img1 from '../images/profile.png';
import CV from '../images/TIMLILT-SIHAM.pdf';
import { projects } from './Projects';
import TiltCard from './common/TiltCard';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

// Three.js est chargé à part pour ne pas alourdir le premier affichage
const HeroScene = lazy(() => import('./three/HeroScene'));

const socialLinks = [
  { Icon: Github, link: 'https://github.com/TIMLILT', label: 'GitHub' },
  { Icon: Linkedin, link: 'https://www.linkedin.com/in/siham-timlilt/', label: 'LinkedIn' },
  { Icon: Mail, link: 'mailto:timliltsiham@gmail.com?subject=Contact depuis le portfolio', label: 'Email' }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
});

const Home = () => {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const { t } = useLanguage();

  const stats = [
    { number: `${projects.length}`, label: t.home.stats.projects },
    { number: '3', label: t.home.stats.production }, // HR Hub, badging ITAF, SmartEx
    { number: '3', label: t.home.stats.experiences }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Fond : quadrillage + scène 3D */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {!reduceMotion && (
        <Suspense fallback={null}>
          <HeroScene isDark={theme === 'dark'} />
        </Suspense>
      )}

      <div className="relative container-page pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-20 items-center">

          {/* Texte */}
          <div>
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300">
              <MapPin size={14} className="text-brand-600 dark:text-brand-400" />
              {t.home.location}
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="mt-6 font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Siham Timlilt
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-600 dark:text-slate-300">
              {t.home.role}{' '}
              <span className="text-brand-600 dark:text-brand-400">{t.home.roleHighlight}</span>.
            </motion.p>

            <motion.p {...fadeUp(0.24)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {t.home.description}
            </motion.p>

            <motion.div {...fadeUp(0.32)} className="mt-10 flex flex-wrap gap-3">
              <Link to="projects" smooth duration={500} offset={-64} className="btn-primary cursor-pointer group">
                {t.home.viewProjects}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href={CV} download="TIMLILT-SIHAM.pdf" className="btn-secondary">
                <Download size={16} />
                {t.home.downloadCv}
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="mt-10 flex items-center gap-2">
              {socialLinks.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  aria-label={label}
                  target={link.startsWith('http') ? '_blank' : undefined}
                  rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-500/50 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-sm"
          >
            <TiltCard max={12} className="rounded-3xl">
              {/* Cadre en retrait, l'encart en avant : effet de profondeur */}
              <div className="absolute -inset-3 rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm" style={{ transform: 'translateZ(-40px)' }} />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-2xl shadow-brand-900/20">
                <img src={Img1} alt="Siham Timlilt" className="w-full h-full object-cover" decoding="async" />
              </div>

            {/* Poste actuel */}
            <div className="absolute -bottom-6 -left-4 sm:-left-10 card shadow-xl px-4 py-3 flex items-center gap-3" style={{ transform: 'translateZ(60px)' }}>
              <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10">
                <Briefcase size={18} className="text-brand-600 dark:text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.home.currently}</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Smart Expos & Events</p>
              </div>
            </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Chiffres clés */}
        <motion.dl {...fadeUp(0.5)} className="mt-20 md:mt-24 grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 px-2 sm:px-6 flex flex-col-reverse text-center sm:text-left">
              <dt className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{stat.label}</dt>
              <dd className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.number}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
};

export default Home;
