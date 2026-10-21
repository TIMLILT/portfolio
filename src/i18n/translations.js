// Tous les textes du site, en français et en anglais.
// Les **doubles astérisques** mettent un passage en gras (voir RichText).

const fr = {
  meta: {
    title: 'Siham Timlilt - Développeuse Full-Stack | Portfolio'
  },
  nav: {
    items: { home: 'Accueil', about: 'À propos', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
    lightMode: 'Activer le mode clair',
    darkMode: 'Activer le mode sombre',
    openMenu: 'Ouvrir le menu',
    switchLanguage: 'Switch to English'
  },
  home: {
    location: 'Casablanca, Maroc',
    role: 'Développeuse web full-stack,',
    roleHighlight: 'Laravel & React',
    description: 'Je conçois, développe et déploie en production des applications métier : plateforme de gestion des formations, système de badging pour salons professionnels, sites et emailings. Autonome sur tout le cycle, de la base de données à la mise en ligne.',
    viewProjects: 'Voir mes projets',
    downloadCv: 'Télécharger le CV',
    currently: 'Actuellement',
    stats: {
      projects: 'Projets réalisés',
      production: 'Applications en production',
      experiences: 'Expériences en développement'
    }
  },
  about: {
    eyebrow: 'À propos',
    title: 'Du besoin métier à la mise en production',
    paragraphs: [
      'Je suis **développeuse full-stack**, spécialisée en **Laravel** et **React**. Je conçois, développe et déploie en production des applications métier.',
      'Chez Smart Expos & Events Morocco, j\'ai réalisé une plateforme multi-entreprises de gestion des formations (HR HUB), un système de badging pour les salons ITAF 2026 et SEAFOOD 4 AFRICA 2026, le site SmartEx Morocco ainsi que des emailings pour des associations et des salons.',
      'Mon parcours en physique électronique m\'a donné une approche rigoureuse et analytique, que j\'applique sur tout le cycle d\'un projet : base de données, back-end, interface et déploiement.'
    ],
    labels: {
      location: 'Localisation',
      locationValue: 'Casablanca, Maroc',
      email: 'Email',
      languages: 'Langues',
      downloadCv: 'Télécharger le CV',
      experience: 'Expérience professionnelle',
      otherExperience: 'Autres expériences',
      education: 'Formation'
    },
    experiences: [
      {
        year: '04/2026 – Aujourd\'hui',
        title: 'Développeuse Web et Gestion des Bases de Données',
        org: 'Smart Expos & Events Morocco',
        current: true,
        points: [
          'Conception et développement de HR HUB (hrhub.ma), plateforme multi-entreprises de gestion des formations (Laravel, MySQL)',
          'Système de badging et de scan des visiteurs pour les salons ITAF 2026 (OFEC Casablanca : 5 484 inscrits, 3 630 scans) et SEAFOOD 4 AFRICA 2026 (Dakhla), et organisation du badging sur place',
          'Développement du site SmartEx Morocco (smartex.ma) : location de matériel événementiel, devis en ligne',
          'Emailings HTML et travaux web pour des associations (AMPF, ASMEX) et des salons (HYGIE-CLEAN EXPO, REFRIGEREXPO, SEAFOOD 4 AFRICA)',
          'Conception et gestion des bases de données MySQL des applications',
          'Mise en production sur cPanel : déploiement, bases de données, configuration DNS'
        ]
      },
      {
        year: '09/2025 – 03/2026',
        title: 'Stagiaire Développeuse Web',
        org: 'Smart Expos & Events Morocco',
        points: [
          'Développement et mise à jour du site web de l\'entreprise, intégration front-end et routes API',
          'Contribution au référencement (SEO) et à l\'optimisation des performances'
        ]
      },
      {
        year: '04/2025 – 05/2025',
        title: 'Stagiaire Développeuse Web Full-Stack',
        org: 'Elavi',
        points: [
          'Développement d\'interfaces web avec React et Next.js',
          'Amélioration de la navigation et de l\'expérience utilisateur'
        ]
      }
    ],
    otherExperiences: [
      { year: '07/2025 – 08/2025', title: 'Conseillère en Relation Client', org: 'Cuisin\'Affaires' },
      { year: '08/2023 – 06/2024', title: 'Enquêtrice de Terrain', org: 'Bureau d\'études SOLAB, Rabat' },
      { year: '11/2021 – 05/2022', title: 'Assistante Professeure de Mathématiques', org: 'École Noble Junior' }
    ],
    education: [
      { year: '2023 – 2025', title: 'Technicienne Spécialisée en Développement Digital (Web Full-Stack)', org: 'Lalla Aicha, Casablanca' },
      { year: '2022 – 2023', title: 'Diplôme en Informatique', org: 'Centre Alwifac, Casablanca' },
      { year: '2019 – 2022', title: 'Licence en Physique Électronique', org: 'Faculté des sciences Ben M\'Sick' },
      { year: '2019', title: 'Baccalauréat Sciences Physiques et Chimie', org: 'Lycée Fatima El Fihria, Casablanca' }
    ],
    spokenLanguages: [
      { name: 'Arabe', level: 'Langue maternelle' },
      { name: 'Français', level: 'Professionnel' },
      { name: 'Anglais', level: 'Lecture technique' }
    ]
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Réalisations sélectionnées',
    description: 'Applications métier déployées en production et projets personnels.',
    viewDetails: 'Voir les détails →',
    openDetails: 'Ouvrir les détails de',
    viewSiteOf: 'Voir le site',
    viewCodeOf: 'Voir le code de',
    viewSite: 'Voir le site',
    viewCode: 'Voir le code',
    technologies: 'Technologies',
    screenshots: 'Captures d\'écran',
    close: 'Fermer',
    closeWindow: 'Fermer la fenêtre',
    closeImage: 'Fermer l\'image',
    zoom: 'Agrandir',
    zoomedImage: 'Image du projet agrandie',
    largePreview: 'Aperçu en grand format',
    categories: { pro: 'Professionnel', frontend: 'Frontend', fullstack: 'Full Stack' },
    items: {
      hrhub: {
        title: 'HR Hub',
        description: 'HR HUB (hrhub.ma) est une plateforme multi-entreprises de gestion des formations et du recrutement, conçue et développée chez Smart Expos & Events Morocco. Chaque entreprise cliente dispose de son propre espace.\n\nFonctionnalités :\n- Espace client : participants, formations suivies, modules terminés et progression\n- Tableaux d\'analyse : répartition des modules, satisfaction, qualité des formations, performance des formateurs, progression dans le temps\n- Programmes de formation : déroulé pédagogique jour par jour, modules, livrables et documents à télécharger\n- Espace recrutement : suivi des candidats et des profils reçus par mois\n- Interface bilingue français / anglais\n\nRéalisations :\n- Conception de la base de données MySQL\n- Développement back-end et front-end avec Laravel (Eloquent, Blade)\n- Mise en production sur cPanel : déploiement, base de données, configuration DNS',
        galleryCaptions: ['Espace client et analyses', 'Programme de formation', 'Espace recrutement']
      },
      badging: {
        title: 'Système de Badging Salons',
        description: 'Système de badging et de scan des visiteurs développé pour les salons professionnels ITAF 2026 (OFEC Casablanca) et SEAFOOD 4 AFRICA 2026 (Dakhla).\n\nITAF 2026 en chiffres : 5 484 visiteurs inscrits, 1 854 présents, 3 630 scans et 338 exposants.\n\nRéalisations :\n- Génération des badges visiteurs\n- Scan des QR codes à l\'entrée des salons, par caméra ou douchette USB\n- Tableau de bord en temps réel : inscrits, présents, scans par heure\n- Gestion de la base de données MySQL\n- Organisation du badging sur place pendant les salons'
      },
      smartex: {
        title: 'SmartEx Morocco',
        description: 'Site de SmartEx Morocco (smartex.ma), spécialiste de la location de matériel événementiel, avec un module de demande de devis en ligne.'
      },
      pdfverifier: {
        title: 'PDFVerifier',
        description: 'PDFVerifier est une application web développée avec React.js et Next.js permettant aux utilisateurs de vérifier, prévisualiser et envoyer des fichiers PDF de manière simple et rapide. Elle offre une interface moderne, une validation des caractéristiques du fichier (nombre de pages, dimensions), un aperçu en temps réel avec PDF.js, et une navigation fluide grâce à Framer Motion.'
      },
      assistant: {
        title: 'Assistant Écriture IA',
        description: 'Une application web moderne d\'assistant à l\'écriture alimentée par l\'IA, offrant des suggestions intelligentes, correction grammaticale et aide à la rédaction. Développée avec React et Tailwind CSS.'
      },
      auth: {
        title: 'Authentification',
        description: 'Application web avec une interface d\'inscription/connexion et une page d\'accueil pour utilisateurs authentifiés, utilisant React.js pour le frontend et MongoDB pour la gestion des données.'
      }
    }
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Stack technique',
    description: 'Les technologies et outils que j\'utilise au quotidien, de la base de données au déploiement. Survolez la sphère pour la faire tourner.',
    sphereLabel: 'Technologies maîtrisées',
    categories: {
      languages: 'Langages',
      backend: 'Back-end',
      frontend: 'Front-end',
      databases: 'Bases de données',
      deployment: 'Déploiement & Web',
      tools: 'Outils',
      notions: 'Notions'
    },
    terms: {
      responsive: 'Responsive design',
      dataModeling: 'Modélisation de données',
      cpanel: 'Hébergement cPanel',
      dns: 'Configuration DNS',
      emailing: 'Emailing HTML'
    }
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Travaillons ensemble',
    description: 'Un projet, une opportunité ou une question ? Écrivez-moi, je vous réponds rapidement.',
    labels: { email: 'Email', phone: 'Téléphone / WhatsApp', linkedin: 'LinkedIn', location: 'Localisation' },
    locationValue: 'Casablanca, Maroc',
    mapTitle: 'Localisation',
    formTitle: 'Envoyer un message',
    formNote: 'Le message s\'ouvre dans WhatsApp, prêt à être envoyé.',
    name: 'Nom complet',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Adresse email',
    emailPlaceholder: 'votre@email.com',
    message: 'Votre message',
    messagePlaceholder: 'Décrivez votre projet ou votre message...',
    submit: 'Envoyer sur WhatsApp',
    whatsapp: { heading: 'Nouveau message du portfolio', name: 'Nom', email: 'Email', message: 'Message' }
  },
  footer: {
    role: 'Développeuse Web Full-Stack'
  }
};

const en = {
  meta: {
    title: 'Siham Timlilt - Full-Stack Developer | Portfolio'
  },
  nav: {
    items: { home: 'Home', about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    lightMode: 'Switch to light mode',
    darkMode: 'Switch to dark mode',
    openMenu: 'Open menu',
    switchLanguage: 'Passer en français'
  },
  home: {
    location: 'Casablanca, Morocco',
    role: 'Full-stack web developer,',
    roleHighlight: 'Laravel & React',
    description: 'I design, build and deploy business applications to production: a training management platform, a badging system for trade fairs, websites and email campaigns. Autonomous across the whole lifecycle, from database to go-live.',
    viewProjects: 'View my projects',
    downloadCv: 'Download CV',
    currently: 'Currently at',
    stats: {
      projects: 'Projects delivered',
      production: 'Applications in production',
      experiences: 'Development roles'
    }
  },
  about: {
    eyebrow: 'About',
    title: 'From business needs to production',
    paragraphs: [
      'I am a **full-stack developer** specialised in **Laravel** and **React**. I design, build and deploy business applications to production.',
      'At Smart Expos & Events Morocco, I built a multi-company training management platform (HR HUB), a badging system for the ITAF 2026 and SEAFOOD 4 AFRICA 2026 trade fairs, the SmartEx Morocco website, and email campaigns for associations and trade fairs.',
      'My background in electronic physics gave me a rigorous, analytical approach that I apply across the whole project lifecycle: database, back-end, interface and deployment.'
    ],
    labels: {
      location: 'Location',
      locationValue: 'Casablanca, Morocco',
      email: 'Email',
      languages: 'Languages',
      downloadCv: 'Download CV',
      experience: 'Work experience',
      otherExperience: 'Other experience',
      education: 'Education'
    },
    experiences: [
      {
        year: '04/2026 – Present',
        title: 'Web Developer & Database Management',
        org: 'Smart Expos & Events Morocco',
        current: true,
        points: [
          'Designed and developed HR HUB (hrhub.ma), a multi-company training management platform (Laravel, MySQL)',
          'Built a visitor badging and scanning system for the ITAF 2026 (OFEC Casablanca: 5,484 registrations, 3,630 scans) and SEAFOOD 4 AFRICA 2026 (Dakhla) trade fairs, and ran on-site badging',
          'Developed the SmartEx Morocco website (smartex.ma): event equipment rental with online quotes',
          'HTML email campaigns and web work for associations (AMPF, ASMEX) and trade fairs (HYGIE-CLEAN EXPO, REFRIGEREXPO, SEAFOOD 4 AFRICA)',
          'Designed and managed the applications\' MySQL databases',
          'Production deployment on cPanel: hosting, databases, DNS configuration'
        ]
      },
      {
        year: '09/2025 – 03/2026',
        title: 'Web Developer Intern',
        org: 'Smart Expos & Events Morocco',
        points: [
          'Developed and maintained the company website, front-end integration and API routes',
          'Contributed to search engine optimisation (SEO) and performance improvements'
        ]
      },
      {
        year: '04/2025 – 05/2025',
        title: 'Full-Stack Web Developer Intern',
        org: 'Elavi',
        points: [
          'Built web interfaces with React and Next.js',
          'Improved navigation and user experience'
        ]
      }
    ],
    otherExperiences: [
      { year: '07/2025 – 08/2025', title: 'Customer Relations Advisor', org: 'Cuisin\'Affaires' },
      { year: '08/2023 – 06/2024', title: 'Field Surveyor', org: 'SOLAB research firm, Rabat' },
      { year: '11/2021 – 05/2022', title: 'Mathematics Teaching Assistant', org: 'École Noble Junior' }
    ],
    education: [
      { year: '2023 – 2025', title: 'Specialised Technician Diploma in Digital Development (Full-Stack Web)', org: 'Lalla Aicha, Casablanca' },
      { year: '2022 – 2023', title: 'Diploma in Computer Science', org: 'Centre Alwifac, Casablanca' },
      { year: '2019 – 2022', title: 'Bachelor\'s Degree in Electronic Physics', org: 'Faculty of Sciences Ben M\'Sick' },
      { year: '2019', title: 'Baccalaureate in Physical Sciences and Chemistry', org: 'Lycée Fatima El Fihria, Casablanca' }
    ],
    spokenLanguages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'French', level: 'Professional' },
      { name: 'English', level: 'Technical reading' }
    ]
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected work',
    description: 'Business applications running in production, and personal projects.',
    viewDetails: 'View details →',
    openDetails: 'Open details for',
    viewSiteOf: 'Visit the website of',
    viewCodeOf: 'View the code of',
    viewSite: 'Visit website',
    viewCode: 'View code',
    technologies: 'Technologies',
    screenshots: 'Screenshots',
    close: 'Close',
    closeWindow: 'Close window',
    closeImage: 'Close image',
    zoom: 'Enlarge',
    zoomedImage: 'Enlarged project image',
    largePreview: 'Large preview',
    categories: { pro: 'Professional', frontend: 'Frontend', fullstack: 'Full Stack' },
    items: {
      hrhub: {
        title: 'HR Hub',
        description: 'HR HUB (hrhub.ma) is a multi-company training and recruitment management platform, designed and developed at Smart Expos & Events Morocco. Each client company has its own dedicated space.\n\nFeatures:\n- Client space: participants, trainings followed, completed modules and progress\n- Analytics dashboards: module distribution, satisfaction, training quality, trainer performance, progress over time\n- Training programmes: day-by-day learning flow, modules, deliverables and downloadable documents\n- Recruitment space: candidate tracking and profiles received per month\n- Bilingual French / English interface\n\nWhat I did:\n- Designed the MySQL database\n- Built the back-end and front-end with Laravel (Eloquent, Blade)\n- Deployed to production on cPanel: hosting, database, DNS configuration',
        galleryCaptions: ['Client space and analytics', 'Training programme', 'Recruitment space']
      },
      badging: {
        title: 'Trade Fair Badging System',
        description: 'Visitor badging and scanning system built for the ITAF 2026 (OFEC Casablanca) and SEAFOOD 4 AFRICA 2026 (Dakhla) trade fairs.\n\nITAF 2026 in numbers: 5,484 registered visitors, 1,854 attendees, 3,630 scans and 338 exhibitors.\n\nWhat I did:\n- Visitor badge generation\n- QR code scanning at the fair entrance, by camera or USB scanner\n- Real-time dashboard: registrations, attendance, scans per hour\n- MySQL database management\n- On-site badging operations during the fairs'
      },
      smartex: {
        title: 'SmartEx Morocco',
        description: 'Website for SmartEx Morocco (smartex.ma), an event equipment rental company, with an online quote request module.'
      },
      pdfverifier: {
        title: 'PDFVerifier',
        description: 'PDFVerifier is a web application built with React.js and Next.js that lets users check, preview and send PDF files quickly and easily. It offers a modern interface, validation of file properties (page count, dimensions), real-time preview with PDF.js, and smooth navigation with Framer Motion.'
      },
      assistant: {
        title: 'AI Writing Assistant',
        description: 'A modern AI-powered writing assistant web app offering smart suggestions, grammar correction and writing help. Built with React and Tailwind CSS.'
      },
      auth: {
        title: 'Authentication',
        description: 'Web application with a sign-up / sign-in interface and a home page for authenticated users, using React.js on the front-end and MongoDB for data storage.'
      }
    }
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tech stack',
    description: 'The technologies and tools I use every day, from database to deployment. Hover over the sphere to spin it.',
    sphereLabel: 'Technologies I use',
    categories: {
      languages: 'Languages',
      backend: 'Back-end',
      frontend: 'Front-end',
      databases: 'Databases',
      deployment: 'Deployment & Web',
      tools: 'Tools',
      notions: 'Familiar with'
    },
    terms: {
      responsive: 'Responsive design',
      dataModeling: 'Data modelling',
      cpanel: 'cPanel hosting',
      dns: 'DNS configuration',
      emailing: 'HTML emailing'
    }
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let\'s work together',
    description: 'A project, an opportunity or a question? Write to me and I will get back to you quickly.',
    labels: { email: 'Email', phone: 'Phone / WhatsApp', linkedin: 'LinkedIn', location: 'Location' },
    locationValue: 'Casablanca, Morocco',
    mapTitle: 'Location',
    formTitle: 'Send a message',
    formNote: 'Your message opens in WhatsApp, ready to send.',
    name: 'Full name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@email.com',
    message: 'Your message',
    messagePlaceholder: 'Tell me about your project or question...',
    submit: 'Send on WhatsApp',
    whatsapp: { heading: 'New message from the portfolio', name: 'Name', email: 'Email', message: 'Message' }
  },
  footer: {
    role: 'Full-Stack Web Developer'
  }
};

export const translations = { fr, en };
