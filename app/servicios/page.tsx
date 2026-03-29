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
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Lo que hacemos
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Portafolio de Servicios
            </h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Soluciones integrales para que usted pueda enfocarse en hacer crecer su negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Grilla de servicios ─────────────────────────────────── */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {servicios.map((servicio, i) => (
            <ServiceCard key={servicio.id} servicio={servicio} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Servicio foco ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-navy rounded-2xl p-8 md:p-10 text-white">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Servicio destacado
            </span>
            <h2 className="text-2xl font-bold mt-3 mb-3">
              Gestión Impositiva y Planificación Fiscal
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              El incumplimiento impositivo puede generar multas, intereses y hasta el cierre del
              negocio. En MD Group tomamos el control total de sus obligaciones fiscales para que
              usted no tenga sorpresas. Planificamos su carga tributaria de forma legal y estratégica,
              maximizando el aprovechamiento de deducciones y beneficios vigentes.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 mb-8">
              {[
                "IVA mensual (DF / CF)",
                "Ganancias personas jurídicas y físicas",
                "Bienes Personales",
                "Ingresos Brutos (CM / jurisdicciones)",
                "Impuesto a los Débitos y Créditos",
                "Tasas municipales y provinciales",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-2.5 rounded-lg hover:bg-gold-light transition text-sm"
            >
              Consultá este servicio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-14 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-navy mb-3">
          ¿No encontrás lo que buscás?
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Contáctenos para analizar su situación particular. Cada cliente es único.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-light transition"
        >
          Hacer una consulta <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
