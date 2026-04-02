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
