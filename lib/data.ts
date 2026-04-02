import { Calculator, BookOpen, Users, Shield, BarChart2, Zap } from "lucide-react";
import type { ComponentType } from "react";

// ─── Empresa ──────────────────────────────────────────────────────────────────

export const empresa = {
  nombre: "MD Group",
  slogan: "Tu estudio contable de confianza en el NOA",
  descripcion:
    "Brindamos soluciones contables, impositivas y laborales integrales a PyMEs y emprendedores de la región NOA. Acompañamos a nuestros clientes en cada etapa de su crecimiento con profesionalismo, claridad y compromiso.",
  email: "contacto@mdgroup.com.ar",
  telefono: "+54 387 400-0000",
  direccion: "Av. Bicentenario de la Batalla de Salta 1560, Oficina 7, Salta Capital, Salta, Argentina",
  ciudad: "Salta, Argentina",
  fundacion: 2018,
  clientes: 80,
};

// ─── Misión & Visión ──────────────────────────────────────────────────────────

export const mision =
  "Brindar soluciones contables, impositivas y laborales integrales a PyMEs y emprendedores del NOA, acompañándolos en cada etapa de su crecimiento con profesionalismo, claridad y compromiso.";

export const vision =
  "Ser el estudio contable de referencia en Salta, reconocido por la calidad técnica, la cercanía con el cliente y la incorporación de herramientas digitales innovadoras.";

export const historia =
  "MD Group nació en 2018 de la unión de dos jóvenes profesionales salteños con una visión compartida: ofrecer servicios contables de alto nivel a las PyMEs locales que históricamente no tenían acceso a un asesoramiento de calidad. Desde entonces crecimos consolidando una cartera de más de 80 clientes activos en distintos rubros de la región, convirtiéndonos en un referente del sector en Salta Capital y el NOA.";

// ─── Equipo ───────────────────────────────────────────────────────────────────

export type Integrante = {
  nombre: string;
  rol: string;
  descripcion: string;
  iniciales: string;
};

export const equipo: Integrante[] = [
  {
    nombre: "Selena",
    rol: "Socia Gerente",
    descripcion:
      "Responsable de la dirección estratégica y relaciones institucionales del estudio. Especializada en consultoría para PyMEs y planificación fiscal.",
    iniciales: "S",
  },
  {
    nombre: "Eusebio",
    rol: "Socio Gerente",
    descripcion:
      "A cargo de la gestión técnica contable e impositiva. Especializado en liquidación de impuestos, estados financieros y asesoría laboral.",
    iniciales: "E",
  },
];

// ─── Servicios ────────────────────────────────────────────────────────────────

export type Servicio = {
  id: string;
  numero: string;
  titulo: string;
  descripcion: string;
  tagline: string;
  detalles: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icono: ComponentType<any>;
};

export const servicios: Servicio[] = [
  {
    id: "impositiva",
    numero: "01",
    titulo: "Asesoramiento y Gestión Impositiva",
    descripcion:
      "Liquidación de impuestos nacionales y provinciales, planificación fiscal estratégica y representación ante ARCA y Rentas. Orientado a monotributistas, responsables inscriptos y pequeños comercios que buscan cumplir sus obligaciones con previsión y orden.",
    tagline: "Claridad y previsión en un entorno impositivo que cambia todo el tiempo.",
    detalles: [
      "Liquidación de impuestos nacionales y provinciales",
      "Planificación fiscal estratégica",
      "Representación ante ARCA y Rentas",
      "Atención de intimaciones y fiscalizaciones",
      "Asesoramiento a monotributistas y responsables inscriptos",
    ],
    icono: Calculator,
  },
  {
    id: "contable",
    numero: "02",
    titulo: "Servicios Contables y Registración",
    descripcion:
      "Registración diaria de operaciones, conciliaciones bancarias y elaboración de información contable bajo normas vigentes. Acceso remoto a la información a través de plataformas digitales para un seguimiento ágil y permanente de la actividad económica.",
    tagline: "Tu contabilidad al día, disponible desde donde estés.",
    detalles: [
      "Registración diaria de operaciones",
      "Conciliaciones bancarias",
      "Elaboración de información contable bajo normas vigentes",
      "Acceso remoto a través de plataformas digitales",
      "Seguimiento ágil y permanente de la actividad",
    ],
    icono: BookOpen,
  },
  {
    id: "laboral",
    numero: "03",
    titulo: "Gestión Laboral y Liquidación de Haberes",
    descripcion:
      "Liquidación de sueldos y jornales, altas y bajas de personal, confección del F.931 y asesoramiento en conflictos laborales. Gestión de legajos digitales y rúbrica de libros sueldos para el cumplimiento integral de las obligaciones previsionales.",
    tagline: "Cumplimiento laboral sin complicaciones para tu equipo.",
    detalles: [
      "Liquidación de sueldos y jornales",
      "Altas y bajas de personal",
      "Confección del F.931",
      "Gestión de legajos digitales",
      "Rúbrica de libros sueldos",
    ],
    icono: Users,
  },
  {
    id: "auditoria",
    numero: "04",
    titulo: "Auditoría y Control Interno",
    descripcion:
      "Revisión independiente de registros contables y procesos administrativos. Detección de desvíos e inconsistencias con apoyo de herramientas digitales de análisis. Emisión de informes de auditoría y certificaciones contables para respaldar la toma de decisiones.",
    tagline: "Más control, más transparencia, más confianza en tus números.",
    detalles: [
      "Revisión independiente de registros contables",
      "Detección de desvíos e inconsistencias",
      "Herramientas digitales de análisis",
      "Emisión de informes de auditoría",
      "Certificaciones contables",
    ],
    icono: Shield,
  },
  {
    id: "decisiones",
    numero: "05",
    titulo: "Asesoramiento para la Toma de Decisiones",
    descripcion:
      "Análisis de información económica y financiera con elaboración de informes de gestión periódicos y tableros visuales simples. Ideal para dueños de PyMEs y emprendedores que quieren entender la situación de su negocio sin necesidad de ser contadores.",
    tagline: "Transformamos tus datos en decisiones concretas.",
    detalles: [
      "Análisis de información económica y financiera",
      "Informes de gestión periódicos",
      "Tableros visuales simples",
      "Diagnóstico de situación del negocio",
      "Orientado a dueños de PyMEs y emprendedores",
    ],
    icono: BarChart2,
  },
  {
    id: "digital",
    numero: "06",
    titulo: "Gestión Digital y Automatización de Procesos",
    descripcion:
      "Implementación de herramientas digitales para automatizar tareas operativas, reducir errores y mejorar la eficiencia administrativa del negocio. El criterio profesional siempre al centro de cada decisión, apoyado por tecnología que simplifica la gestión diaria.",
    tagline: "Menos carga operativa, más foco en lo que realmente importa: tu negocio.",
    detalles: [
      "Implementación de herramientas digitales",
      "Automatización de tareas operativas",
      "Reducción de errores administrativos",
      "Mejora de eficiencia en la gestión diaria",
      "Tecnología al servicio del criterio profesional",
    ],
    icono: Zap,
  },
];

// ─── Formularios ──────────────────────────────────────────────────────────────

export const tiposConsulta = [
  { value: "impositiva", label: "Asesoramiento y Gestión Impositiva" },
  { value: "contable", label: "Servicios Contables y Registración" },
  { value: "laboral", label: "Gestión Laboral y Liquidación de Haberes" },
  { value: "auditoria", label: "Auditoría y Control Interno" },
  { value: "decisiones", label: "Asesoramiento para la Toma de Decisiones" },
  { value: "digital", label: "Gestión Digital y Automatización" },
  { value: "otra", label: "Otra consulta" },
] as const;

export const serviciosEncuesta = [
  "Asesoramiento y Gestión Impositiva",
  "Servicios Contables y Registración",
  "Gestión Laboral y Liquidación de Haberes",
  "Auditoría y Control Interno",
  "Asesoramiento para la Toma de Decisiones",
  "Gestión Digital y Automatización de Procesos",
] as const;

// ─── Navegación ───────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/satisfaccion", label: "Satisfacción" },
];
