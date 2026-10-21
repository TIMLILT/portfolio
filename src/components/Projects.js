import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, X, ZoomIn } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import TiltCard from './common/TiltCard';
import { useLanguage } from '../context/LanguageContext';
import AuthentificationImg from "../images/authentification.jpeg";
import FileUploaderImg from '../images/FileUploader.jpeg';
import AssistantIAImg from '../images/AssistantIA.png';
import HRHubDashboardImg from '../images/hrhub-dashboard.png';
import HRHubTrainingImg from '../images/hrhub-training.png';
import HRHubRecruitmentImg from '../images/hrhub-recruitment.png';
import SmartExImg from '../images/smartex.jpg';
import BadgingImg from '../images/badging.jpg';

// Données des projets ; les titres, descriptions et catégories sont dans i18n/translations.js
export const projects = [
  {
    id: 'hrhub',
    image: HRHubDashboardImg,
    // Captures affichées dans la fiche ; légendes dans translations.js (items.hrhub.gallery)
    gallery: [HRHubDashboardImg, HRHubTrainingImg, HRHubRecruitmentImg],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Eloquent', 'Blade', 'cPanel'],
    site: 'https://www.hrhub.ma/',
    category: 'pro'
  },
  {
    id: 'badging',
    image: BadgingImg, // données des visiteurs floutées
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'QR Code'],
    category: 'pro'
  },
  {
    id: 'smartex',
    image: SmartExImg,
    imageFit: 'left-top', // capture pleine page : on montre le haut du site
    technologies: ['Laravel', 'PHP', 'MySQL', 'cPanel'],
    site: 'https://smartex.ma/',
    category: 'pro'
  },
  {
    id: 'pdfverifier',
    image: FileUploaderImg,
    technologies: ['React.js', 'Next.js', 'React Hook Form', 'Framer Motion', 'PDF.js', 'Canvas API'],
    link: 'https://github.com/TIMLILT/pdf-validation-app',
    category: 'frontend'
  },
  {
    id: 'assistant',
    image: AssistantIAImg,
    technologies: ["React", "Tailwind CSS", "OpenAI API", "Node.js", "Express"],
    link: "https://github.com/TIMLILT/assistant-ecriture-ia",
    category: 'fullstack'
  },
  {
    id: 'auth',
    image: AuthentificationImg,
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/TIMLILT/authentification-mongodb-react-js-',
    category: 'fullstack'
  },
];

// Visuel affiché quand un projet n'a pas encore de capture d'écran
const ImagePlaceholder = ({ title }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-800">
    <div className="absolute inset-0 bg-grid opacity-40" />
    <span className="relative font-display text-white text-2xl font-bold text-center px-6">{title}</span>
  </div>
);

const ProjectLinks = ({ project, labels, size = 16 }) => (
  <>
    {project.site && (
      <a
        href={project.site}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${labels.viewSiteOf} ${project.title}`}
        className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <ArrowUpRight size={size} />
      </a>
    )}
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${labels.viewCodeOf} ${project.title}`}
        className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Github size={size} />
      </a>
    )}
  </>
);

const Projects = () => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState(null);

  // Ajoute à chaque projet ses textes dans la langue courante
  const localizedProjects = projects.map((project) => ({
    ...project,
    ...t.projects.items[project.id],
    category: t.projects.categories[project.category]
  }));
  const selectedProject = localizedProjects.find((project) => project.id === selectedId) || null;
  const setSelectedProject = (project) => setSelectedId(project ? project.id : null);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject || zoomedImage ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, zoomedImage]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject, zoomedImage]);

  return (
    <div className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40, rotateX: 18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: 'easeOut' }}
              style={{ transformPerspective: 1000 }}
              className="h-full"
            >
              <TiltCard max={7} className="group card overflow-hidden flex flex-col hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-900/10 transition-[border-color,box-shadow] duration-300">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`${t.projects.openDetails} ${project.title}`}
                className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ${project.imageFit === 'contain' ? 'object-contain bg-white p-6' : project.imageFit === 'left-top' ? 'object-cover object-left-top' : 'object-cover object-top'}`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <ImagePlaceholder title={project.title} />
                )}
              </button>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="mt-auto pt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {t.projects.viewDetails}
                  </button>
                  <div className="flex -mr-2">
                    <ProjectLinks project={project} labels={t.projects} />
                  </div>
                </div>
              </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <>
            <button
              type="button"
              aria-label={t.projects.closeWindow}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40"
              onClick={() => setSelectedProject(null)}
            />

            <div
              className="fixed inset-0 flex justify-center items-center z-50 p-4 pointer-events-none"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div className="pointer-events-auto card max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="relative aspect-[16/8] overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800">
                  {selectedProject.image ? (
                    <>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className={`w-full h-full cursor-zoom-in ${selectedProject.imageFit === 'contain' ? 'object-contain bg-white p-8' : selectedProject.imageFit === 'left-top' ? 'object-cover object-left-top' : 'object-cover object-top'}`}
                        onClick={() => setZoomedImage(selectedProject.image)}
                      />
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/60 text-white text-xs pointer-events-none">
                        <ZoomIn size={12} /> {t.projects.zoom}
                      </div>
                    </>
                  ) : (
                    <ImagePlaceholder title={selectedProject.title} />
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label={t.projects.close}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 flex items-center justify-center shadow-sm transition-colors"
                  >
                    <X className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {selectedProject.category}
                  </p>
                  <h2 id="project-modal-title" className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>

                  {selectedProject.gallery && (
                    <>
                      <h3 className="mt-6 mb-3 text-sm font-semibold text-slate-900 dark:text-white">{t.projects.screenshots}</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.gallery.map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setZoomedImage(img)}
                            className="group/shot text-left"
                          >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                              <img
                                src={img}
                                alt={selectedProject.galleryCaptions?.[i] || selectedProject.title}
                                className="w-full h-full object-cover object-top group-hover/shot:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            {selectedProject.galleryCaptions?.[i] && (
                              <p className="mt-1.5 text-xs leading-snug text-slate-500 dark:text-slate-400">
                                {selectedProject.galleryCaptions[i]}
                              </p>
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  <h3 className="mt-6 mb-3 text-sm font-semibold text-slate-900 dark:text-white">{t.projects.technologies}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.site && (
                      <a href={selectedProject.site} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        {t.projects.viewSite} <ArrowUpRight size={16} />
                      </a>
                    )}
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <Github size={16} /> {t.projects.viewCode}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Zoomed Image Modal */}
        {zoomedImage && (
          <>
            <button
              type="button"
              aria-label={t.projects.closeImage}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50"
              onClick={() => setZoomedImage(null)}
            />
            <div
              className="fixed inset-0 flex justify-center items-center z-50 p-4 pointer-events-none"
              role="dialog"
              aria-modal="true"
              aria-label={t.projects.zoomedImage}
            >
              <img
                src={zoomedImage}
                alt={t.projects.largePreview}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setZoomedImage(null)}
                aria-label={t.projects.closeImage}
                className="pointer-events-auto absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
