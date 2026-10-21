import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Languages, GraduationCap, Download } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import TiltCard from './common/TiltCard';
import RichText from './common/RichText';
import { useLanguage } from '../context/LanguageContext';
import CV from '../images/TIMLILT-SIHAM.pdf';

// Apparition au défilement avec une légère rotation 3D
const reveal = {
  initial: { opacity: 0, y: 30, rotateX: 15 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
  style: { transformPerspective: 900 }
};

const SubHeading = ({ children }) => (
  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-8">{children}</h3>
);

const About = () => {
  const { t } = useLanguage();
  const { labels, experiences, otherExperiences, education, spokenLanguages } = t.about;

  return (
    <div className="section bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />

        {/* Profil + informations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <motion.div {...reveal} className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}><RichText text={paragraph} /></p>
            ))}
          </motion.div>

          <motion.aside {...reveal} className="card p-6 h-fit">
            <dl className="space-y-5">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{labels.location}</dt>
                  <dd className="font-medium text-slate-900 dark:text-white">{labels.locationValue}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                <div className="min-w-0">
                  <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{labels.email}</dt>
                  <dd className="font-medium text-slate-900 dark:text-white break-all">
                    <a href="mailto:timliltsiham@gmail.com" className="hover:text-brand-600 dark:hover:text-brand-400">timliltsiham@gmail.com</a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Languages size={18} className="mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{labels.languages}</dt>
                  {spokenLanguages.map((lang, i) => (
                    <dd key={i} className="text-slate-900 dark:text-white">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-slate-500 dark:text-slate-400"> · {lang.level}</span>
                    </dd>
                  ))}
                </div>
              </div>
            </dl>
            <a href={CV} download="TIMLILT-SIHAM.pdf" className="btn-secondary w-full mt-6">
              <Download size={16} />
              {labels.downloadCv}
            </a>
          </motion.aside>
        </div>

        {/* Expérience */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <SubHeading>{labels.experience}</SubHeading>
            <ol className="relative border-l border-slate-200 dark:border-slate-800 ml-1.5 space-y-10">
              {experiences.map((item, index) => (
                <motion.li {...reveal} key={index} className="pl-8 relative">
                  <span className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    item.current
                      ? 'bg-brand-600 border-brand-200 dark:border-brand-900'
                      : 'bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-600'
                  }`} />
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400">{item.year}</p>
                  <h4 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400">{item.org}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <SubHeading>{labels.otherExperience}</SubHeading>
            <div className="space-y-3">
              {otherExperiences.map((item, index) => (
                <motion.div {...reveal} key={index} className="card p-5">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.year}</p>
                  <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Formation */}
        <SubHeading>{labels.education}</SubHeading>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((item, index) => (
            <motion.div {...reveal} key={index}>
              <TiltCard max={6} className="card p-6 flex gap-4">
                <div className="p-2.5 h-fit rounded-lg bg-brand-50 dark:bg-brand-500/10" style={{ transform: 'translateZ(30px)' }}>
                  <GraduationCap size={20} className="text-brand-600 dark:text-brand-400" />
                </div>
                <div style={{ transform: 'translateZ(20px)' }}>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400">{item.year}</p>
                  <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.org}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
