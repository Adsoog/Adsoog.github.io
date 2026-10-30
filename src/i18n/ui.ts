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
    'nav.education': 'EDUCACIÓN',
    'nav.contact': 'CONTACTO',

    'sidebar.tagline': 'Lead Software Engineer',

    'about.section_title': 'Sobre Mí',
    'about.lead': 'Lead Software Engineer especializado en arquitecturas de backend escalables, automatización y obtención de datos. Diseño herramientas y productos digitales que resuelven problemas reales y optimizan procesos, adaptándome a cualquier reto tecnológico para entregar soluciones eficientes.',
    'about.p1': 'Hola, soy Adso. Llevo <strong class="text-heading font-medium">3 años desarrollando y diseñando software profesionalmente</strong>, principalmente como desarrollador Full Stack. Con la evolución tecnológica y la integración de la IA, entendí que este rol trasciende el código: la programación siempre fue sobre <strong class="text-heading font-medium">solucionar problemas de raíz</strong>, lo que me llevó a expandir mi experiencia hacia todas las capas de la ingeniería de software.',
    'about.p2': 'Comprender a fondo el caso de uso, el flujo de los usuarios y los procesos de negocio es siempre el punto de partida. En mis años de trabajo he podido optimizar y reestructurar muchos de estos flujos para volverlos eficientes, confiables y medibles.',
    'about.p3': 'En mi trayectoria comencé con Laravel y rápidamente migré a <strong class="text-body font-medium">Django</strong>, donde consolidé fundamentos profundos: dominar el ORM, el modelado relacional y la arquitectura interna. Fui expandiéndome hacia el frontend moderno con <strong class="text-body font-medium">Astro, Tailwind CSS, HTMX, Pydantic, Django REST Framework y WebSockets</strong> para experiencias en tiempo real.',
    'about.p4': 'Al comprobar que los hostings tradicionales se quedan cortos para arquitecturas con <strong class="text-body font-medium">Celery, Redis o despliegues asíncronos</strong>, profundicé en <strong class="text-body font-medium">servidores Linux, Docker y seguridad con firewalls</strong>. Esto me dio la solidez técnica para orquestar infraestructuras completas: desplegar APIs, microservicios, bases de datos o integrar soluciones con IoT y aplicaciones móviles en <strong class="text-body font-medium">Flutter</strong>, adaptándome con agilidad a cada nuevo reto.',
    'about.p5': 'Hoy elijo cada tecnología según el caso concreto: si necesito un ERP empresarial a medida, elijo <strong class="text-heading font-medium">Django</strong> por su robustez, seguridad y velocidad de desarrollo; para mensajería en tiempo real y alta concurrencia, <strong class="text-heading font-medium">Gin (Go)</strong>; para APIs ultrarrápidas, <strong class="text-heading font-medium">FastAPI</strong>; para el frontend web, definitivamente <strong class="text-heading font-medium">Astro</strong> por su rendimiento y versatilidad; y en móvil, <strong class="text-heading font-medium">Flutter</strong> para entregar una experiencia nativa fluida. Y al final, todo containerizado y orquestado en <strong class="text-heading font-medium">Docker</strong>, que es realmente muy práctico para un despliegue real en producción. Cada tecnología se adapta a su caso y lo importante es contar con las herramientas y el criterio necesario para resolver cualquier necesidad.',

    'projects.section_title': 'Proyectos',
    'projects.impact_label': 'Impacto y Resultados',
    'projects.lab_label': 'Enfoque de Ingeniería',
    'projects.tech_label': 'Tecnologías & Arquitectura',

    'skills.section_title': 'Habilidades',

    'experience.section_title': 'Trayectoria Profesional',
    'experience.work_badge': '3 Años de Experiencia',
    'experience.edu_section_title': 'Educación',
    'experience.lang_title': 'Idiomas',

    'contact.section_title': 'Contacto',
    'contact.title': '¿Tienes un proyecto, sistema o proceso por resolver?',
    'contact.description': 'Estoy disponible para diseñar arquitecturas de backend, automatizar flujos operativos o construir productos digitales de principio a fin. Escríbeme directamente sin intermediarios:',
    'contact.cta_wa': 'Escribir por WhatsApp',
    'contact.cta_email': 'Enviar correo',
    'contact.wa_text': 'Hola Adso, vi tu portafolio y me gustaría conversar sobre un proyecto',
  },
  en: {
    'meta.title': 'Adso Martín Obregón | Lead Software Engineer',
    'meta.description': 'Lead Software Engineer specializing in scalable backend architectures, process automation, and data acquisition, designing digital tools and products that solve real-world problems and optimize workflows.',

    'nav.about': 'ABOUT',
    'nav.projects': 'PROJECTS',
    'nav.skills': 'SKILLS',
    'nav.experience': 'EXPERIENCE',
    'nav.education': 'EDUCATION',
    'nav.contact': 'CONTACT',

    'sidebar.tagline': 'Lead Software Engineer',

    'about.section_title': 'About Me',
    'about.lead': 'Lead Software Engineer specializing in scalable backend architectures, process automation, and data acquisition. I design digital tools and products that solve real-world challenges and optimize workflows, adapting to any technical requirement to deliver robust solutions.',
    'about.p1': "Hi, I'm Adso. I have been <strong class=\"text-heading font-medium\">designing and engineering software professionally for 3 years</strong>, primarily as a Full Stack Developer. With technological evolution and AI acceleration, I realized coding is fundamentally about <strong class=\"text-heading font-medium\">solving core problems</strong>, which drove me to expand my mastery across all software engineering domains.",
    'about.p2': 'Deeply understanding the use case, user journeys, and core business processes is always the first step. Over my career, I have optimized, scaled, and re-engineered multiple critical processes into reliable, measurable workflows.',
    'about.p3': 'My journey began with Laravel and quickly evolved to <strong class=\"text-body font-medium\">Django</strong>, where I mastered key architectural foundations: database internals, ORM optimization, and relational modeling. I progressively broadened into modern frontend with <strong class=\"text-body font-medium\">Astro, Tailwind CSS, HTMX, Pydantic, Django REST Framework, and WebSockets</strong> for real-time systems.',
    'about.p4': 'Recognizing that traditional shared hosting falls short for distributed stacks using <strong class=\"text-body font-medium\">Celery, Redis, or asynchronous workers</strong>, I dove into <strong class=\"text-body font-medium\">Linux server administration, Docker containerization, and firewall hardening</strong>. This end-to-end infrastructure foundation allows me to deploy resilient APIs, databases, IoT automations, and cross-platform mobile apps in <strong class=\"text-body font-medium\">Flutter</strong>, swiftly adapting to any technical demand.',
    'about.p5': 'Today, I choose each technology based on the problem at hand: for bespoke enterprise ERPs, I leverage <strong class="text-heading font-medium">Django</strong> for its battle-tested security and rapid development; for high-concurrency real-time messaging, <strong class="text-heading font-medium">Gin (Go)</strong>; for ultra-fast APIs, <strong class="text-heading font-medium">FastAPI</strong>; for web interfaces, <strong class="text-heading font-medium">Astro</strong> for exceptional performance and versatility; and for mobile, <strong class="text-heading font-medium">Flutter</strong> to deliver a fluid native experience. Ultimately, everything is containerized and orchestrated in <strong class="text-heading font-medium">Docker</strong>, which is truly practical and essential for real-world production deployments. Every technology adapts to its specific use case, and what matters most is possessing the tools and engineering depth to solve any challenge.',

    'projects.section_title': 'Projects',
    'projects.impact_label': 'Impact & Results',
    'projects.lab_label': 'Engineering Focus',
    'projects.tech_label': 'Technologies & Architecture',

    'skills.section_title': 'Skills',

    'experience.section_title': 'Work Experience',
    'experience.work_badge': '3 Professional Years',
    'experience.edu_section_title': 'Education',
    'experience.lang_title': 'Languages',

    'contact.section_title': 'Contact',
    'contact.title': 'Have a project, system, or workflow to solve?',
    'contact.description': 'Available for backend architecture design, operational automation, and end-to-end digital product engineering. Reach out directly:',
    'contact.cta_wa': 'Chat on WhatsApp',
    'contact.cta_email': 'Send an Email',
    'contact.wa_text': 'Hello Adso, I saw your portfolio and would like to discuss a project',
  }
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}
