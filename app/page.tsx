"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Award, Users } from "lucide-react";
import Organigrama from "@/components/Organigrama";
import ServiceCard from "@/components/ServiceCard";
import { empresa, servicios } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" as const },
} as const;

function AnimatedNumber({
  target,
  active,
  prefix = "",
  suffix = "",
}: {
  target: number | string;
  active: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    if (!active) return;
    if (typeof target !== "number") return;

    let raf = 0;
    const duration = 600;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  if (typeof target !== "number") {
    return <>{target}</>;
  }

  return <>{prefix}{value}{suffix}</>;
}

type StatItem = {
  valor: number | string;
  prefijo?: string;
  sufijo?: string;
  etiqueta: string;
};

const stats: StatItem[] = [
  { valor: empresa.fundacion, etiqueta: "Año de fundación" },
  { valor: empresa.clientes, prefijo: "+", etiqueta: "Clientes activos" },
  { valor: 4, etiqueta: "Áreas de servicio" },
  { valor: "NOA", etiqueta: "Cobertura regional" },
];

const pilares = [
  {
    icono: Shield,
    titulo: "Confianza y transparencia",
    texto:
      "Información clara y oportuna. Usted siempre sabe el estado de sus obligaciones fiscales.",
  },
  {
    icono: Award,
    titulo: "Calidad técnica",
    texto:
      "Profesionales actualizados en normativa ARCA, Rentas y legislación laboral vigente.",
  },
  {
    icono: Users,
    titulo: "Cercanía con el cliente",
    texto:
      "Asesoramiento personalizado. No somos una oficina impersonal, somos sus socios de confianza.",
  },
];

export default function HomePage() {
  const [statsInView, setStatsInView] = React.useState(false);

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-10%,rgba(29,78,216,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#e2e8f0_1px,_transparent_1px)] bg-[length:24px_24px] opacity-30" />
          <div className="absolute right-6 top-10 text-9xl md:text-[12rem] font-bold text-slate-light/10 select-none leading-none">+80</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            {...fadeUp}
            className="max-w-3xl"
          >
            <span className="inline-block text-slate-light text-xs font-medium uppercase tracking-widest mb-6">
              Estudio Contable · Salta, NOA
            </span>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-slate leading-tight mb-6">
              Tu estudio contable<br />
              de confianza en el NOA
            </h1>
            <p className="text-slate-light text-lg leading-relaxed mb-10 max-w-2xl">
              {empresa.descripcion}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Consultar ahora <ArrowRight size={16} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 border border-border text-slate-mid px-6 py-3 rounded-md hover:border-slate-300 hover:text-slate transition-colors"
              >
                Ver servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ───────────────────────────────────────────────────── */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.etiqueta}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStatsInView(true)}
                transition={{ delay: 0.08 * i + 0.15, duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-5xl font-light text-slate tracking-tight">
                  <AnimatedNumber
                    target={s.valor}
                    active={statsInView}
                    prefix={s.prefijo ?? ""}
                    suffix={s.sufijo ?? ""}
                  />
                </p>
                <p className="text-slate-light text-xs mt-2 uppercase tracking-widest">
                  {s.etiqueta}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Servicios (preview) ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-slate-light text-xs font-medium uppercase tracking-widest">
            Lo que hacemos
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-slate mt-3">
            Nuestros Servicios
          </h2>
          <p className="text-slate-light mt-3 max-w-xl">
            Cubrimos todas las áreas que su empresa o emprendimiento necesita
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s, i) => (
            <ServiceCard key={s.id} servicio={s} index={i} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline transition"
          >
            Ver detalle completo de servicios <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── Pilares ─────────────────────────────────────────────────── */}
      <section className="bg-surface border-y border-border py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-slate-light text-xs font-medium uppercase tracking-widest">
                Por qué elegirnos
              </span>
              <h2 className="text-4xl font-semibold tracking-tight text-slate mt-3 mb-4">
                Claridad, calidad<br />y cercanía
              </h2>
              <p className="text-slate-light leading-relaxed">
                Cada cliente que confía en MD Group recibe atención personalizada,
                respuestas claras y un equipo comprometido con su tranquilidad fiscal.
              </p>
            </div>
            <div className="space-y-6">
              {pilares.map((p, i) => {
                const Icon = p.icono;
                return (
                  <motion.div
                    key={p.titulo}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate">{p.titulo}</p>
                      <p className="text-slate-light text-sm leading-relaxed mt-1">{p.texto}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Organigrama ─────────────────────────────────────────────── */}
      <Organigrama />

      {/* ─── CTA Final ───────────────────────────────────────────────── */}
      <section className="bg-slate text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            ¿Listo para ordenar su situación fiscal?
          </h2>
          <p className="text-white/60 text-base mb-8">
            Contáctenos hoy y le brindaremos una primera consulta sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contactar ahora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
