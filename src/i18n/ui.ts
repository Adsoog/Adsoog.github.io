export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Adso Martín Obregón | Lead Software Engineer',
    'meta.description': 'Lead Software Engineer especializado en arquitecturas de backend escalables, automatización y obtención de datos, diseñando herramientas y productos digitales que resuelven problemas reales y optimizan procesos.',
    
    'nav.about': 'SOBRE MÍ',
    'nav.projects': 'PROYECTOS',
    'nav.skills': 'HABILIDADES',
    'nav.experience': 'TRAYECTORIA',
    'nav.contact': 'CONTACTO',

    'sidebar.tagline': 'Lead Software Engineer',
    'sidebar.status': 'Disponible para nuevos desafíos',

    'about.section_title': 'Sobre Mí',
    'about.lead': 'Lead Software Engineer especializado en arquitecturas de backend escalables, automatización y obtención de datos. Diseño herramientas y productos digitales que resuelven problemas reales y optimizan procesos, adaptándome a cualquier reto tecnológico para entregar soluciones eficientes.',
    'about.p1': 'Hola, soy Adso. Llevo <strong class="text-heading font-medium">3 años desarrollando y diseñando software profesionalmente</strong>, principalmente como desarrollador Full Stack. Con la evolución tecnológica y la integración de la IA, entendí que este rol trasciende el código: la programación siempre fue sobre <strong class="text-heading font-medium">solucionar problemas de raíz</strong>, lo que me llevó a expandir mi experiencia hacia todas las capas de la ingeniería de software.',
    'about.p2': 'Comprender a fondo el caso de uso, el flujo de los usuarios y los procesos de negocio es siempre el punto de partida. En mis años de trabajo he podido optimizar y reestructurar muchos de estos flujos para volverlos eficientes, confiables y medibles.',
    'about.p3': 'En mi trayectoria comencé con Laravel y rápidamente migré a <strong class="text-body font-medium">Django</strong>, donde consolidé fundamentos profundos: dominar el ORM, el modelado relacional y la arquitectura interna. Fui expandiéndome hacia el frontend moderno con <strong class="text-body font-medium">Tailwind CSS, HTMX, Pydantic, Django REST Framework y WebSockets</strong> para experiencias en tiempo real.',
    'about.p4': 'Al comprobar que los hostings tradicionales se quedan cortos para arquitecturas con <strong class="text-body font-medium">Celery, Redis o despliegues asíncronos</strong>, profundicé en <strong class="text-body font-medium">servidores Linux, Docker y seguridad con firewalls</strong>. Esto me dio la solidez técnica para orquestar infraestructuras completas: desplegar APIs, microservicios, bases de datos o integrar soluciones con IoT y aplicaciones móviles en <strong class="text-body font-medium">Flutter</strong>, adaptándome con agilidad a cada nuevo reto.',

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
    'meta.description': 'Lead Software Engineer specializing in scalable backend architectures, process automation, and data acquisition, designing digital tools and products that solve real-world problems and optimize workflows.',

    'nav.about': 'ABOUT',
    'nav.projects': 'PROJECTS',
    'nav.skills': 'SKILLS',
    'nav.experience': 'EXPERIENCE',
    'nav.contact': 'CONTACT',

    'sidebar.tagline': 'Lead Software Engineer',
    'sidebar.status': 'Available for new opportunities',

    'about.section_title': 'About Me',
    'about.lead': 'Lead Software Engineer specializing in scalable backend architectures, process automation, and data acquisition. I design digital tools and products that solve real-world challenges and optimize workflows, adapting to any technical requirement to deliver robust solutions.',
    'about.p1': "Hi, I'm Adso. I have been <strong class=\"text-heading font-medium\">designing and engineering software professionally for 3 years</strong>, primarily as a Full Stack Developer. With technological evolution and AI acceleration, I realized coding is fundamentally about <strong class=\"text-heading font-medium\">solving core problems</strong>, which drove me to expand my mastery across all software engineering domains.",
    'about.p2': 'Deeply understanding the use case, user journeys, and core business processes is always the first step. Over my career, I have optimized, scaled, and re-engineered multiple critical processes into reliable, measurable workflows.',
    'about.p3': 'My journey began with Laravel and quickly evolved to <strong class=\"text-body font-medium\">Django</strong>, where I mastered key architectural foundations: database internals, ORM optimization, and relational modeling. I progressively broadened into modern frontend with <strong class=\"text-body font-medium\">Tailwind CSS, HTMX, Pydantic, Django REST Framework, and WebSockets</strong> for real-time systems.',
    'about.p4': 'Recognizing that traditional shared hosting falls short for distributed stacks using <strong class=\"text-body font-medium\">Celery, Redis, or asynchronous workers</strong>, I dove into <strong class=\"text-body font-medium\">Linux server administration, Docker containerization, and firewall hardening</strong>. This end-to-end infrastructure foundation allows me to deploy resilient APIs, databases, IoT automations, and cross-platform mobile apps in <strong class=\"text-body font-medium\">Flutter</strong>, swiftly adapting to any technical demand.',

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
