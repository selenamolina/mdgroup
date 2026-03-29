"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { servicios } from "@/lib/data";

export default function ServiciosPage() {
  return (
    <div>
      {/* ─── Encabezado ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-slate-light text-xs font-medium uppercase tracking-widest">
              Lo que hacemos
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate mt-3 mb-4">
              Portafolio de Servicios
            </h1>
            <p className="text-slate-light text-base max-w-xl">
              Soluciones integrales para que usted pueda enfocarse en hacer crecer su negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Grilla de servicios ─────────────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((servicio, i) => (
            <ServiceCard key={servicio.id} servicio={servicio} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Servicio foco ───────────────────────────────────────── */}
      <section className="bg-surface border-y border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-slate rounded-xl p-8 md:p-10 text-white">
            <span className="text-white/40 text-xs font-mono tracking-widest">01</span>
            <h2 className="text-2xl font-semibold tracking-tight mt-3 mb-3">
              Asesoramiento y Gestión Impositiva
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              El incumplimiento impositivo puede generar multas, intereses y hasta el cierre del
              negocio. En MD Group tomamos el control total de sus obligaciones fiscales para que
              usted no tenga sorpresas. Planificamos su carga tributaria de forma legal y estratégica,
              maximizando el aprovechamiento de deducciones y beneficios vigentes.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/60 mb-8">
              {[
                "IVA mensual (DF / CF)",
                "Ganancias personas jurídicas y físicas",
                "Bienes Personales",
                "Ingresos Brutos (CM / jurisdicciones)",
                "Impuesto a los Débitos y Créditos",
                "Tasas municipales y provinciales",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Consultá este servicio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate mb-3">
          ¿No encontrás lo que buscás?
        </h2>
        <p className="text-slate-light text-sm mb-7">
          Contáctenos para analizar su situación particular. Cada cliente es único.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-slate text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Hacer una consulta <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
