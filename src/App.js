import React from 'react';
import { Element } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import NavBar from './components/navBar';
import Home from './components/home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/contact';
import { useLanguage } from './context/LanguageContext';

const footerLinks = [
  { Icon: Github, href: 'https://github.com/TIMLILT', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/siham-timlilt/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:timliltsiham@gmail.com', label: 'Email' }
];

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <NavBar />

      <main>
        <Element name="home">
          <section id="home">
            <Home />
          </section>
        </Element>

        <Element name="about">
          <section id="about">
            <About />
          </section>
        </Element>

        <Element name="projects">
          <section id="projects">
            <Projects />
          </section>
        </Element>

        <Element name="skills">
          <section id="skills">
            <Skills />
          </section>
        </Element>

        <Element name="contact">
          <section id="contact">
            <Contact />
          </section>
        </Element>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Siham Timlilt · {t.footer.role}
          </p>
          <div className="flex gap-2">
            {footerLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
