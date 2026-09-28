export type Language = 'es' | 'en';

export type Localized = Record<Language, string>;

export interface Experience {
  company: string;
  period: string;
  role: Localized;
  description: Localized;
  highlights: Localized[];
}

export interface LanguageSkill {
  name: Localized;
  level: Localized;
  value: number;
  note: Localized;
}

export const content = {
  es: {
    nav: ['Perfil', 'Idiomas', 'Tecnología', 'AI Skills', 'Experiencia', 'Estudios', 'Contacto'],
    availability: 'Disponible para oportunidades remotas',
    heroTitle: 'Comunicación que conecta. Tecnología que resuelve.',
    heroLead: 'Profesional bilingüe con experiencia remota en soporte técnico, atención al cliente y formación en desarrollo web.',
    actions: { experience: 'Ver trayectoria', contact: 'Contactar' },
    profile: { eyebrow: '01 / Perfil', title: 'La conexión entre personas y tecnología.', body: 'Combino más de cinco años de experiencia remota con una formación sólida en idiomas. He acompañado a usuarios de Microsoft, equipos de customer service y estudiantes, transformando necesidades complejas en soluciones claras y cercanas.' },
    languages: { eyebrow: '02 / Idiomas', title: 'La comunicación es mi punto de partida.', subtitle: 'Idiomas usados para crear claridad, confianza y mejores experiencias.' },
    tech: { eyebrow: '03 / Habilidades técnicas', title: 'Curiosidad técnica, enfoque práctico.', subtitle: 'Herramientas que respaldan mi trabajo en entornos digitales y remotos.' },
    aiSkills: { eyebrow: '04 / AI Skills', title: 'Inteligencia Artificial y Automatización.', subtitle: 'Soluciones inteligentes para optimizar flujos, resolver problemas y potenciar negocios.' },
    experience: { eyebrow: '05 / Trayectoria', title: 'Experiencia construida a distancia.', subtitle: 'Selecciona una etapa para ver responsabilidades y fortalezas.' },
    education: { eyebrow: '06 / Estudios', title: 'Aprendizaje que sigue en movimiento.', subtitle: 'Formación académica y técnica que sostiene mi perfil profesional.' },
    contact: { eyebrow: '07 / Contacto', title: 'Hablemos de tu próximo reto.', body: 'Estoy abierto a oportunidades remotas donde los idiomas, el soporte técnico y la mentalidad de servicio generen valor.', emailLabel: 'Correo', phoneLabel: 'Teléfono', location: 'Colombia · Disponible remotamente' },
    footer: 'Cristian David Lozano · Remote Tech Professional'
  },
  en: {
    nav: ['Profile', 'Languages', 'Technology', 'AI Skills', 'Experience', 'Education', 'Contact'],
    availability: 'Available for remote opportunities',
    heroTitle: 'Communication that connects. Technology that solves.',
    heroLead: 'Bilingual professional with remote experience in technical support, customer service, and web-development training.',
    actions: { experience: 'View experience', contact: 'Get in touch' },
    profile: { eyebrow: '01 / Profile', title: 'Where people and technology connect.', body: 'I combine more than five years of remote experience with a strong language background. I have supported Microsoft users, customer-service teams, and learners by turning complex needs into clear, human solutions.' },
    languages: { eyebrow: '02 / Languages', title: 'Communication is my starting point.', subtitle: 'Languages used to create clarity, trust, and better experiences.' },
    tech: { eyebrow: '03 / Technical skills', title: 'Technical curiosity, practical focus.', subtitle: 'Tools that support my work in digital and remote environments.' },
    aiSkills: { eyebrow: '04 / AI Skills', title: 'Artificial Intelligence & Automation.', subtitle: 'Smart solutions to optimize workflows, solve problems, and empower businesses.' },
    experience: { eyebrow: '05 / Experience', title: 'A career built remotely.', subtitle: 'Select a stage to explore responsibilities and strengths.' },
    education: { eyebrow: '06 / Education', title: 'Learning that keeps moving.', subtitle: 'Academic and technical training supporting my professional profile.' },
    contact: { eyebrow: '07 / Contact', title: 'Let’s talk about your next challenge.', body: 'I am open to remote opportunities where languages, technical support, and a service mindset create value.', emailLabel: 'Email', phoneLabel: 'Phone', location: 'Colombia · Available remotely' },
    footer: 'Cristian David Lozano · Remote Tech Professional'
  }
} as const;

export const languageSkills: LanguageSkill[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' }, value: 100, note: { es: 'Comunicación clara y cercana', en: 'Clear, people-first communication' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2', en: 'B2' }, value: 82, note: { es: 'Soporte, docencia y atención bilingüe', en: 'Support, teaching, and bilingual customer care' } },
  { name: { es: 'Portugués', en: 'Portuguese' }, level: { es: 'B1', en: 'B1' }, value: 60, note: { es: 'Nivel básico funcional', en: 'Functional basic level' } },
  { name: { es: 'Francés', en: 'French' }, level: { es: 'B1', en: 'B1' }, value: 60, note: { es: 'Nivel básico funcional', en: 'Functional basic level' } }
];

export const skillGroups = [
  { title: { es: 'Desarrollo', en: 'Development' }, items: ['Web Development', 'JavaScript · Basic', 'Python · Basic', 'Java · Basic'] },
  { title: { es: 'Soporte & productividad', en: 'Support & productivity' }, items: ['Microsoft Services', 'Account & Billing', 'Microsoft Office', 'Back Office'] },
  { title: { es: 'Creatividad digital', en: 'Digital creativity' }, items: ['CorelDRAW', 'Graphic Design', 'Photo Editing', 'Audio & Video Editing'] }
];

export const experiences: Experience[] = [
  { company: 'Teleperformance · Microsoft', period: 'Oct 2024 — Dec 2025', role: { es: 'Tech Router · Premier Support Business', en: 'Tech Router · Premier Support Business' }, description: { es: 'Soporte para negocios: licencias por volumen, solicitudes técnicas y procesos de back office.', en: 'Business support for volume licensing, technical requests, and back-office processes.' }, highlights: [{ es: 'Atención especializada para clientes de negocio', en: 'Specialized support for business customers' }, { es: 'Gestión de licencias y derivación técnica', en: 'License handling and technical routing' }] },
  { company: 'Teleperformance · Microsoft', period: 'Oct 2022 — Sep 2024', role: { es: 'Customer Service & Technical Support', en: 'Customer Service & Technical Support' }, description: { es: 'Acompañamiento a usuarios con activación de servicios, cuentas, facturación e incidencias de producto.', en: 'Guided users through service activation, account, billing, and product issues.' }, highlights: [{ es: 'Resolución de incidencias de cuenta y facturación', en: 'Account and billing issue resolution' }, { es: 'Activación y adopción de servicios Microsoft', en: 'Microsoft service activation and adoption' }] },
  { company: 'Teleperformance · Walmart', period: 'Nov 2020 — Jun 2022', role: { es: 'Customer Service', en: 'Customer Service' }, description: { es: 'Atención de pedidos, facturación, seguimiento y tareas de back office; apoyo en formación de nuevos agentes.', en: 'Order, billing, tracking, and back-office support; coached new agents.' }, highlights: [{ es: 'Soporte bilingüe al cliente', en: 'Bilingual customer support' }, { es: 'Acompañamiento a nuevos agentes', en: 'New-agent coaching' }] },
  { company: 'Cyber Connection', period: '2014 — 2020', role: { es: 'Propietario', en: 'Owner' }, description: { es: 'Negocio de atención al cliente, soporte técnico, accesorios electrónicos, fotografía y diseño gráfico.', en: 'Customer service, technical assistance, electronics accessories, photography, and graphic-design business.' }, highlights: [{ es: 'Gestión integral de servicio y ventas', en: 'End-to-end service and sales management' }, { es: 'Soporte técnico y producción creativa', en: 'Technical support and creative production' }] },
  { company: 'Comfenalco Quindío · C.A.S.D.', period: '2020 — 2021', role: { es: 'Docente de inglés', en: 'English Teacher' }, description: { es: 'Enseñanza de inglés conversacional y preparación de exámenes en entornos inclusivos.', en: 'Conversational English instruction and exam preparation in inclusive environments.' }, highlights: [{ es: 'Planificación de clases e integración tecnológica', en: 'Lesson planning and technology integration' }, { es: 'Desarrollo de confianza y fluidez', en: 'Confidence and fluency development' }] }
];

export const education = [
  { date: '2019', school: 'Universidad del Quindío', program: { es: 'Profesional en Lenguas Modernas', en: 'Modern Languages Degree' }, kind: { es: 'Pregrado', en: 'Undergraduate degree' } },
  { date: '2025', school: 'Parquesoft', program: { es: 'Desarrollo Web', en: 'Web Development' }, kind: { es: 'Formación técnica', en: 'Technical training' } },
  { date: '2015', school: 'MET Michigan · Armenia, Quindío', program: { es: 'General English Proficiency — B2', en: 'General English Proficiency — B2' }, kind: { es: 'Certificación', en: 'Certification' } },
  { date: '2011', school: 'Armenia, Quindío', program: { es: 'Educación media', en: 'High School Education' }, kind: { es: 'Educación secundaria', en: 'Secondary education' } }
];

export const aiSkillItems = [
  { title: { es: 'Desarrollo Asistido por IA', en: 'AI-Assisted Development' }, description: { es: 'Generación de código, debugging, troubleshooting y optimización continua.', en: 'Code generation, debugging, troubleshooting, and continuous optimization.' } },
  { title: { es: 'Automatización de Flujos', en: 'Workflow Automation' }, description: { es: 'Diseño de flujos y asistentes inteligentes con n8n, APIs, bases de datos y WhatsApp/Telegram.', en: 'Intelligent workflow and assistant design using n8n, APIs, databases, and WhatsApp/Telegram.' } },
  { title: { es: 'Prompt Engineering & Agentes', en: 'Prompt Engineering & Agents' }, description: { es: 'Creación de instrucciones estructuradas y agentes especializados. Integraciones MCP (GitHub, Notion, Supabase).', en: 'Structured instructions and specialized agents. MCP integrations (GitHub, Notion, Supabase).' } },
  { title: { es: 'IA Aplicada a Negocios', en: 'Applied AI for Business' }, description: { es: 'Integración de modelos de IA para servicio al cliente, turismo, hotelería y mejora de comunicación corporativa.', en: 'Integration of AI models for customer service, tourism, hospitality, and corporate communication improvement.' } }
];
