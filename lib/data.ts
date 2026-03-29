import { Calculator, BookOpen, Lightbulb, Users } from "lucide-react";
import type { ComponentType } from "react";

// ─── Empresa ──────────────────────────────────────────────────────────────────

export const empresa = {
  nombre: "MD Group",
  slogan: "Tu estudio contable de confianza en el NOA",
  descripcion:
    "Brindamos soluciones contables, impositivas y laborales integrales a PyMEs y emprendedores de la región NOA. Acompañamos a nuestros clientes en cada etapa de su crecimiento con profesionalismo, claridad y compromiso.",
  email: "contacto@mdgroup.com.ar",
  telefono: "+54 387 400-0000",
  direccion: "Salta Capital, Salta, Argentina",
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
    rol: "Contador Senior",
    descripcion:
      "A cargo de la gestión técnica contable e impositiva. Especializado en liquidación de impuestos, estados financieros y asesoría laboral.",
    iniciales: "E",
  },
];

// ─── Servicios ────────────────────────────────────────────────────────────────

export type Servicio = {
  id: string;
  titulo: string;
  descripcion: string;
  detalles: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icono: ComponentType<any>;
  color: string;
};

export const servicios: Servicio[] = [
  {
    id: "impositiva",
    titulo: "Gestión Impositiva y Planificación Fiscal",
    descripcion:
      "Optimizamos su carga tributaria con una gestión integral de todos los impuestos nacionales y provinciales.",
    detalles: [
      "Liquidación de IVA, Ganancias y Bienes Personales",
      "Ingresos Brutos provinciales",
      "Planificación y optimización fiscal",
      "Presentaciones ante AFIP y Rentas",
      "Atención de intimaciones y fiscalizaciones",
    ],
    icono: Calculator,
    color: "bg-blue-50 text-blue-700",
  },
  {
    id: "contable",
    titulo: "Outsourcing Contable y Estados Financieros",
    descripcion:
      "Tercerice su contabilidad y obtenga información financiera confiable para la toma de decisiones.",
    detalles: [
      "Registro de operaciones contables",
      "Conciliaciones bancarias",
      "Confección de balances bajo RT vigentes",
      "Certificaciones contables",
      "Informes de gestión periódicos",
    ],
    icono: BookOpen,
    color: "bg-amber-50 text-amber-700",
  },
  {
    id: "emprendedores",
    titulo: "Consultoría para Emprendedores y Monotributistas",
    descripcion:
      "Acompañamos a emprendedores y profesionales independientes desde el inicio de su actividad.",
    detalles: [
      "Alta en AFIP y Rentas Salta",
      "Categorización y recategorización de Monotributo",
      "Configuración de facturación electrónica",
      "Trámites ante organismos públicos",
      "Asesoramiento en habilitaciones municipales",
    ],
    icono: Lightbulb,
    color: "bg-green-50 text-green-700",
  },
  {
    id: "laboral",
    titulo: "Asesoría Laboral y Liquidación de Haberes",
    descripcion:
      "Gestionamos integralmente los recursos humanos de su empresa, cumpliendo toda la normativa vigente.",
    detalles: [
      "Liquidación de sueldos y jornales",
      "Presentación de F.931 (cargas sociales)",
      "Gestión sindical y convenios colectivos",
      "Rúbrica de libros sueldos digitales",
      "Asesoramiento en desvinculaciones",
    ],
    icono: Users,
    color: "bg-purple-50 text-purple-700",
  },
];

// ─── Formularios ──────────────────────────────────────────────────────────────

export const tiposConsulta = [
  { value: "impositiva", label: "Impositiva / Fiscal" },
  { value: "laboral", label: "Laboral / Sueldos" },
  { value: "contable", label: "Contable / Balance" },
  { value: "emprendedores", label: "Emprendedores / Monotributo" },
  { value: "otra", label: "Otra consulta" },
] as const;

export const serviciosEncuesta = [
  "Gestión Impositiva y Planificación Fiscal",
  "Outsourcing Contable y Estados Financieros",
  "Consultoría para Emprendedores",
  "Asesoría Laboral y Liquidación de Haberes",
] as const;

// ─── Navegación ───────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/satisfaccion", label: "Satisfacción" },
];
