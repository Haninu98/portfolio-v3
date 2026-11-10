export interface TranslationData {
  nav: {
    about: string;
    skills: string;
    work: string;
    certifications: string;
    experience: string;
    achievements: string;
    contact: string;
    availableBadge: string;
    getInTouch: string;
    menu: string;
    close: string;
  };
  hero: {
    statusBadge: string;
    ghostName: string;
    roleTag: string;
    titlePrimary: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    ctaExplore: string;
    ctaTalk: string;
    ctaResume: string;
    audioMuteAria: string;
    audioPlayAria: string;
    videoSrcWebm: string;
    videoSrcMp4: string;
  };
  about: {
    tag: string;
    heading: string;
    headingAccent: string;
    headingEnd: string;
    summary: string;
    subSummary: string;
    badgeTitle: string;
    badgeDept: string;
    badgeDeptVal: string;
    badgeValid: string;
    badgeValidVal: string;
    badgeDegree: string;
    badgeDegreeVal: string;
    badgeFlipHint: string;
    backTitle: string;
    backSummary: string;
    backSkillsTitle: string;
    signatureRole: string;
    quickFactsTitle: string;
    quickFactsLocation: string;
    quickFactsEducation: string;
    quickFactsCurrent: string;
    quickFactsEmail: string;
    quote: string;
  };
  skills: {
    tag: string;
    heading: string;
    headingAccent: string;
    subtitle: string;
    families: {
      all: string;
      languages: string;
      systems: string;
      plm: string;
      devops: string;
    };
    familiesLegend: string;
    inspectorTitle: string;
    emptyHint: string;
    emptySub: string;
    appliedIn: string;
  };
  work: {
    tag: string;
    heading: string;
    headingAccent: string;
    headingEnd: string;
    subtitle: string;
    countLabel: string;
    deliverablesLabel: string;
    impactLabel: string;
  };
  certifications: {
    tag: string;
    heading: string;
    headingAccent: string;
    headingEnd: string;
    subtitle: string;
    modalHeader: string;
    modalClose: string;
  };
  experience: {
    tag: string;
    heading: string;
    headingAccent: string;
    headingEnd: string;
    subtitle: string;
    industryLabel: string;
    academicLabel: string;
  };
  achievements: {
    tag: string;
    heading: string;
    headingAccent: string;
    headingEnd: string;
    subtitle: string;
    countingLabel: string;
  };
  contact: {
    tag: string;
    hoppingText: string;
    subtitle: string;
    directTitle: string;
    copyButton: string;
    copiedText: string;
    phoneLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    availabilityValue: string;
    networkTitle: string;
    linkedinLabel: string;
    resumeLabel: string;
    stampText: string;
    footerRole: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<"en" | "fr", TranslationData> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      work: "Work",
      certifications: "Certifications",
      experience: "Experience",
      achievements: "Achievements",
      contact: "Contact",
      availableBadge: "Available for Missions",
      getInTouch: "Get in touch",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      statusBadge: "Open for missions • Paris & Remote",
      ghostName: "HANI",
      roleTag: "HANI IZEM",
      titlePrimary: "Electronics &",
      titleAccent: "Embedded",
      titleSuffix: "Systems Engineer.",
      description:
        "Specialized in mission-critical railway signaling, automated PLM workflows, and intelligent embedded architectures.",
      ctaExplore: "Explore work →",
      ctaTalk: "Let's talk",
      ctaResume: "Resume ↓",
      audioMuteAria: "Mute audio",
      audioPlayAria: "Play audio with voice introduction",
      videoSrcWebm: "/hero/hero.webm",
      videoSrcMp4: "/hero/hero.mp4",
    },
    about: {
      tag: "01 // ABOUT",
      heading: "Rooted in systems.",
      headingAccent: "Driven by precision.",
      headingEnd: "",
      summary:
        "Electronics and Industrial Computer Science Engineer with 3 years of work-study experience at Renault as an Embedded Systems Engineer. Currently Project Configuration & Change Manager at Alstom, I excel in process optimization, compliance tracking automation and tooling management.",
      subSummary:
        "Curious and proactive, I quickly adapt to new technologies. Motivated and determined, I aim to contribute to ambitious technical projects in the transportation and industrial sectors.",
      badgeTitle: "ENGINEER ID",
      badgeDept: "DEPT.",
      badgeDeptVal: "Embedded Systems & Rail",
      badgeValid: "VALID",
      badgeValidVal: "Polytech Sorbonne '23",
      badgeDegree: "DEGREE",
      badgeDegreeVal: "Ingénieur EI2I",
      badgeFlipHint: "Press Enter or Click to flip 3D badge",
      backTitle: "ENGINEERING CREDENTIAL",
      backSummary:
        "Polytech Sorbonne Graduate • 3 years Renault automotive ECU experience • Leading Alstom Marseille metro signaling configuration & CCB boards.",
      backSkillsTitle: "CORE EXPERTISE",
      signatureRole: "Electronics & Embedded Systems Engineer",
      quickFactsTitle: "QUICK FACTS",
      quickFactsLocation: "Location: Paris, France",
      quickFactsEducation: "Education: Polytech Sorbonne (EI2I)",
      quickFactsCurrent: "Current: Alstom (Signaling & PLM)",
      quickFactsEmail: "Email: haniizem1998@gmail.com",
      quote:
        "“Mastering complex railway & embedded systems from requirements baseline to on-track validation.”",
    },
    skills: {
      tag: "02 // TECHNICAL STACK",
      heading: "The periodic table",
      headingAccent: "of my stack.",
      subtitle:
        "32 elements in four families. Hover a tile to see its logo, or pick a family to light it up.",
      families: {
        all: "All",
        languages: "Languages",
        systems: "Systems & Hardware",
        plm: "PLM & Configuration",
        devops: "DevOps & Tools",
      },
      familiesLegend: "FAMILIES:",
      inspectorTitle: "ELEMENT INSPECTOR",
      emptyHint: "↖ Hover any element to see its logo",
      emptySub:
        "Explore 32 technologies, standards & tools across embedded railway engineering.",
      appliedIn: "Applied in Projects",
    },
    work: {
      tag: "03 // SELECTED WORK",
      heading: "Things I've",
      headingAccent: "built.",
      headingEnd: "",
      subtitle:
        "Mission-critical railway signaling, automated continuous integration pipelines, and safety-compliant embedded hardware architectures.",
      countLabel: "6 Systems Documented",
      deliverablesLabel: "Key Deliverables & Verification",
      impactLabel: "VERIFIED IMPACT:",
    },
    certifications: {
      tag: "04 // CERTIFICATIONS",
      heading: "Always",
      headingAccent: "learning.",
      headingEnd: "",
      subtitle:
        "7 certifications across high-voltage rail safety, systems engineering, quality compliance gates, and data science pipelines.",
      modalHeader: "CREDENTIAL",
      modalClose: "Close",
    },
    experience: {
      tag: "05 // CAREER TRAJECTORY",
      heading: "Unified Vertical",
      headingAccent: "Timeline",
      headingEnd: "",
      subtitle:
        "An unbroken progression of industrial apprenticeships, safety engineering roles, and academic degrees across France's leading institutions.",
      industryLabel: "Industry & Rail",
      academicLabel: "Academic & Degrees",
    },
    achievements: {
      tag: "06 // ACHIEVEMENTS",
      heading: "Proud",
      headingAccent: "moments.",
      headingEnd: "",
      subtitle:
        "Quantifiable operational outcomes achieved across industrial railway programs, test platforms, and real-world system deployments.",
      countingLabel: "and counting →",
    },
    contact: {
      tag: "07 // INITIATE COLLABORATION",
      hoppingText: "Let's build something together.",
      subtitle:
        "From safety-critical railway signaling to real-time embedded architectures and smart PLM workflows — I turn complex engineering challenges into dependable, high-impact solutions. Whether you have an ambitious mission, a technical breakthrough to achieve, or just want to talk systems, let's connect.",
      directTitle: "Direct Inquiries",
      copyButton: "Copy Address",
      copiedText: "Copied to clipboard!",
      phoneLabel: "Telephone",
      locationLabel: "Location",
      availabilityLabel: "Availability",
      availabilityValue: "Immediate / 2025",
      networkTitle: "Professional Coordinates",
      linkedinLabel: "LinkedIn Profile",
      resumeLabel: "Download Résumé (PDF)",
      stampText: "• HANI IZEM • SAY HELLO • 2025 •",
      footerRole: "ELECTRONICS & EMBEDDED SYSTEMS ENGINEER",
      backToTop: "Back to top ↑",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      work: "Projets",
      certifications: "Certifications",
      experience: "Parcours",
      achievements: "Réalisations",
      contact: "Contact",
      availableBadge: "Disponible pour Missions",
      getInTouch: "Me contacter",
      menu: "Menu",
      close: "Fermer",
    },
    hero: {
      statusBadge: "Ouvert aux opportunités • Paris & Remote",
      ghostName: "HANI",
      roleTag: "HANI IZEM",
      titlePrimary: "Ingénieur Électronique &",
      titleAccent: "Systèmes",
      titleSuffix: "Embarqués.",
      description:
        "Spécialisé en signalisation ferroviaire CBTC critique, automatisation des processus PLM et architectures matérielles embarquées temps réel.",
      ctaExplore: "Découvrir mes projets →",
      ctaTalk: "Échanger ensemble",
      ctaResume: "Mon CV ↓",
      audioMuteAria: "Couper le son",
      audioPlayAria: "Écouter la présentation audio",
      videoSrcWebm: "/hero/hero_fr.webm",
      videoSrcMp4: "/hero/hero_fr.mp4",
    },
    about: {
      tag: "01 // À PROPOS",
      heading: "Ancré dans les systèmes.",
      headingAccent: "Guidé par la rigueur.",
      headingEnd: "",
      summary:
        "Ingénieur en Électronique et Informatique Industrielle (Polytech Sorbonne) avec 3 années d'expérience en alternance chez Renault comme Ingénieur Systèmes Embarqués. Actuellement Project Configuration & Change Manager chez Alstom, j'excelle dans l'optimisation des processus, le suivi de conformité et l'administration d'outils d'ingénierie.",
      subSummary:
        "Curieux, réactif et proactif, je m'adapte rapidement aux technologies de pointe. Mon objectif est d'apporter une valeur concrète sur des projets techniques à fort impact dans les transports et l'industrie.",
      badgeTitle: "BADGE INGÉNIEUR",
      badgeDept: "DÉPT.",
      badgeDeptVal: "Systèmes Embarqués & Ferroviaire",
      badgeValid: "PROMOTION",
      badgeValidVal: "Polytech Sorbonne '23",
      badgeDegree: "TITRE",
      badgeDegreeVal: "Ingénieur diplômé EI2I",
      badgeFlipHint: "Cliquer ou appuyer sur Entrée pour retourner le badge en 3D",
      backTitle: "QUALIFICATIONS D'INGÉNIERIE",
      backSummary:
        "Diplômé Polytech Sorbonne • 3 ans d'ingénierie calculateurs ECU chez Renault • Pilotage de la configuration et des comités CCB sur le métro de Marseille chez Alstom.",
      backSkillsTitle: "DOMAINES D'EXPERTISE",
      signatureRole: "Ingénieur Électronique & Systèmes Embarqués",
      quickFactsTitle: "REPÈRES CLÉS",
      quickFactsLocation: "Localisation : Paris, France",
      quickFactsEducation: "Formation : Polytech Sorbonne (EI2I)",
      quickFactsCurrent: "Poste actuel : Alstom (Signalisation & PLM)",
      quickFactsEmail: "E-mail : haniizem1998@gmail.com",
      quote:
        "« Maîtriser la complexité des systèmes ferroviaires et embarqués, de la baseline d'exigences jusqu'aux essais sur voie. »",
    },
    skills: {
      tag: "02 // STACK TECHNIQUE",
      heading: "Le tableau périodique",
      headingAccent: "de mes compétences.",
      subtitle:
        "32 éléments répartis en quatre familles. Survolez une tuile pour inspecter son logo ou choisissez une famille pour l'illuminer.",
      families: {
        all: "Tous",
        languages: "Langages",
        systems: "Systèmes & Matériel",
        plm: "PLM & Configuration",
        devops: "DevOps & Outils",
      },
      familiesLegend: "FAMILLES :",
      inspectorTitle: "INSPECTEUR D'ÉLÉMENT",
      emptyHint: "↖ Survolez un élément pour voir son logo",
      emptySub:
        "Explorez 32 technologies, standards industriels et outils d'ingénierie ferroviaire.",
      appliedIn: "Appliqué dans les Projets",
    },
    work: {
      tag: "03 // PROJETS RÉALISÉS",
      heading: "Ce que j'ai",
      headingAccent: "conçu.",
      headingEnd: "",
      subtitle:
        "Automatismes ferroviaires CBTC critiques, pipelines CI/CD automatisés et architectures matérielles conformes aux exigences de sûreté de fonctionnement.",
      countLabel: "6 Systèmes Documentés",
      deliverablesLabel: "Livrables clés & Validation",
      impactLabel: "IMPACT CONSTATÉ :",
    },
    certifications: {
      tag: "04 // CERTIFICATIONS",
      heading: "Toujours en",
      headingAccent: "apprentissage.",
      headingEnd: "",
      subtitle:
        "7 certifications reconnues couvrant les habilitations ferroviaires haute tension, l'ingénierie système, les jalons qualité DFQ et la data science.",
      modalHeader: "CERTIFICATION",
      modalClose: "Fermer",
    },
    experience: {
      tag: "05 // PARCOURS",
      heading: "Trajectoire",
      headingAccent: "professionnelle & académique",
      headingEnd: "",
      subtitle:
        "Une progression ininterrompue alliant apprentissage industriel de pointe, responsabilités d'ingénierie de sûreté et formation d'excellence.",
      industryLabel: "Industrie & Ferroviaire",
      academicLabel: "Cursus & Diplômes",
    },
    achievements: {
      tag: "06 // RÉSULTATS",
      heading: "Moments",
      headingAccent: "marquants.",
      headingEnd: "",
      subtitle:
        "Retombées opérationnelles concrètes et indicateurs d'efficacité mesurés sur les programmes industriels et bancs de test.",
      countingLabel: "et en progression →",
    },
    contact: {
      tag: "07 // COOPÉRATION",
      hoppingText: "Bâtissons des projets ensemble.",
      subtitle:
        "De la signalisation ferroviaire CBTC aux architectures embarquées temps réel et aux flux PLM industriels — je transforme la complexité technique en systèmes fiables, robustes et performants. Vous avez un défi technique d'envergure, une mission à confier ou simplement envie d'échanger ? Parlons-en.",
      directTitle: "Prise de Contact Directe",
      copyButton: "Copier l'adresse",
      copiedText: "Adresse copiée !",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      availabilityLabel: "Disponibilité",
      availabilityValue: "Immédiate / 2025",
      networkTitle: "Coordonnées Professionnelles",
      linkedinLabel: "Profil LinkedIn",
      resumeLabel: "Télécharger mon CV (PDF)",
      stampText: "• HANI IZEM • CONTACTEZ-MOI • 2025 •",
      footerRole: "INGÉNIEUR ÉLECTRONIQUE & SYSTÈMES EMBARQUÉS",
      backToTop: "Haut de page ↑",
    },
  },
};
