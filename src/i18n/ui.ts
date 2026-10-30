export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Adso Martín Obregón | Lead Software Engineer',
    'meta.description': 'Ingeniero de software especializado en backend escalable, automatizaciones con IA y diseño de productos digitales de alta precisión.',
    
    'nav.about': 'SOBRE MÍ',
    'nav.projects': 'PROYECTOS',
    'nav.skills': 'HABILIDADES',
    'nav.experience': 'TRAYECTORIA',
    'nav.contact': 'CONTACTO',

    'sidebar.tagline': 'Lead Software Engineer',
    'sidebar.status': 'Disponible para nuevos desafíos',

    'about.section_title': 'Sobre Mí',
    'about.lead': 'Ingeniero de software especializado en arquitecturas de backend escalables, automatizaciones inteligentes con IA y productos digitales de alta precisión.',
    'about.p1': 'Mi nombre completo es <strong class="text-heading font-medium">Adso Martín Obregón Gutiérrez</strong>. Como diseñador y desarrollador de software, me enfoco en crear sistemas confiables que resuelven problemas técnicos y operativos de alta complejidad.',
    'about.p2': 'Mi trabajo abarca desde la arquitectura de <strong class="text-body font-medium">microservicios en backend</strong> (Python, Go, Java Spring Boot) y gestión de servidores <strong class="text-body font-medium">Linux y Docker</strong> para despliegues confiables, hasta la integración con <strong class="text-body font-medium">Google Maps API</strong> para soluciones de geolocalización y movilidad.',
    'about.p3': 'Especialista en <strong class="text-body font-medium">automatizaciones desatendidas</strong> con Playwright, extensiones en Manifest V3 e implementación de soluciones con <strong class="text-body font-medium">IA de Google Gemini / LLMs</strong> orientadas al <strong class="text-body font-medium">procesamiento inteligente y estructuración de documentos de bajo costo</strong>.',
    'about.p4': 'Asimismo, desarrollo aplicaciones móviles en <strong class="text-body font-medium">Flutter</strong> distribuidas en producción en Google Play Console. Busco siempre la simplicidad técnica y el rendimiento óptimo: código estructurado, interfaces directas y procesos escalables.',

    'projects.section_title': 'Proyectos',
    'projects.impact_label': 'Impacto y Resultados',
    'projects.lab_label': 'Enfoque de Ingeniería',

    'skills.section_title': 'Habilidades',

    'experience.section_title': 'Trayectoria',
    'experience.work_title': 'Experiencia Laboral (3 Años Profesionales)',
    'experience.badge_role': 'Lead Software Engineer',
    'experience.edu_title': 'Formación Académica',
    'experience.cred_title': 'Credenciales & Especialidades',
    'experience.lang_title': 'Idiomas',

    'contact.section_title': 'Contacto',
    'contact.title': 'Contacto Directo',
    'contact.description': 'Disponible para nuevas oportunidades, diseño de arquitectura de backend, automatizaciones e ingeniería de software. Escríbeme directamente por cualquiera de estos canales:',
    'contact.wa_text': 'Hola Adso, vi tu portfolio y me gustaría conversar',
  },
  en: {
    'meta.title': 'Adso Martín Obregón | Lead Software Engineer',
    'meta.description': 'Software Engineer specialized in scalable backends, AI automation workflows, and high-precision digital products.',

    'nav.about': 'ABOUT',
    'nav.projects': 'PROJECTS',
    'nav.skills': 'SKILLS',
    'nav.experience': 'EXPERIENCE',
    'nav.contact': 'CONTACT',

    'sidebar.tagline': 'Lead Software Engineer',
    'sidebar.status': 'Available for new opportunities',

    'about.section_title': 'About Me',
    'about.lead': 'Software engineer specializing in scalable backend architectures, AI-driven automation workflows, and high-precision digital products.',
    'about.p1': 'My full name is <strong class="text-heading font-medium">Adso Martín Obregón Gutiérrez</strong>. As a software designer and developer, I focus on building reliable systems that solve high-complexity technical and operational challenges.',
    'about.p2': 'My work spans scalable <strong class="text-body font-medium">backend microservices</strong> (Python, Go, Java Spring Boot), containerization with <strong class="text-body font-medium">Docker & Linux servers</strong> for reliable deployments, and integrations with <strong class="text-body font-medium">Google Maps API</strong> for geolocation and route logistics.',
    'about.p3': 'I specialize in <strong class="text-body font-medium">unattended automation workflows</strong> with Playwright, Chrome Extensions (Manifest V3), and AI-powered solutions with <strong class="text-body font-medium">Google Gemini / LLMs</strong> designed for <strong class="text-body font-medium">cost-effective document parsing</strong> and automated data extraction.',
    'about.p4': 'I have also built cross-platform mobile apps in <strong class="text-body font-medium">Flutter</strong> published to Google Play Console. I prioritize simplicity and optimal performance: structured codebases, clean interfaces, and robust data pipelines.',

    'projects.section_title': 'Projects',
    'projects.impact_label': 'Impact & Results',
    'projects.lab_label': 'Engineering Focus',

    'skills.section_title': 'Skills',

    'experience.section_title': 'Experience',
    'experience.work_title': 'Work Experience (3 Professional Years)',
    'experience.badge_role': 'Lead Software Engineer',
    'experience.edu_title': 'Education',
    'experience.cred_title': 'Credentials & Specializations',
    'experience.lang_title': 'Languages',

    'contact.section_title': 'Contact',
    'contact.title': 'Direct Contact',
    'contact.description': 'Available for new challenges, backend architecture design, automation systems, and high-impact software engineering. Reach out directly through any of these channels:',
    'contact.wa_text': 'Hello Adso, I came across your portfolio and would like to connect',
  }
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}
