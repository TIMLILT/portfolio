import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, Server, Wrench, Rocket, Lightbulb } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import TiltCard from './common/TiltCard';
import TechSphere from './common/TechSphere';
import { useLanguage } from '../context/LanguageContext';

// Les titres et les termes traduisibles viennent de i18n/translations.js
const getSkillCategories = ({ categories, terms }) => [
  {
    title: categories.languages,
    icon: Code,
    skills: ["PHP", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"]
  },
  {
    title: categories.backend,
    icon: Server,
    skills: ["Laravel", "Eloquent", "Blade", "Node.js", "Express.js", "API REST"]
  },
  {
    title: categories.frontend,
    icon: Layers,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion", terms.responsive]
  },
  {
    title: categories.databases,
    icon: Database,
    skills: ["MySQL", "MongoDB", terms.dataModeling]
  },
  {
    title: categories.deployment,
    icon: Rocket,
    skills: [terms.cpanel, terms.dns, "SEO", terms.emailing]
  },
  {
    title: categories.tools,
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Jira", "XAMPP", "VS Code"]
  },
  {
    title: categories.notions,
    icon: Lightbulb,
    skills: ["Docker", "GitLab", "Figma", "Adobe XD", "Canva"]
  }
];

const coreSkills = ["Laravel", "React.js", "PHP", "MySQL", "Next.js", "Node.js"];

const Skills = ({ show = true }) => {
  const { t } = useLanguage();
  // Mémorisé : la sphère ne recalcule ses positions que si la langue change
  const skillCategories = useMemo(() => getSkillCategories(t.skills), [t]);
  const allSkills = useMemo(() => skillCategories.flatMap((category) => category.skills), [skillCategories]);

  if (!show) return null;

  return (
    <div className="section bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8 lg:mb-4">
          <SectionHeader
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
          <TechSphere items={allSkills} highlight={coreSkills} label={t.skills.sphereLabel} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateY: index % 2 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: 'easeOut' }}
              style={{ transformPerspective: 1000 }}
            >
              <TiltCard max={8} className="card p-6">
              <div className="flex items-center gap-3 mb-5" style={{ transform: 'translateZ(30px)' }}>
                <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-500/10">
                  <category.icon size={20} className="text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag text-sm">{skill}</span>
                ))}
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
