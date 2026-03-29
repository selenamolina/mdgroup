"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import Organigrama from "@/components/Organigrama";
import ServiceCard from "@/components/ServiceCard";
import { empresa, servicios } from "@/lib/data";

const stats = [
  { valor: `${empresa.fundacion}`, etiqueta: "Año de fundación" },
  { valor: `+${empresa.clientes}`, etiqueta: "Clientes activos" },
  { valor: "4", etiqueta: "Áreas de servicio" },
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
      "Profesionales actualizados en normativa AFIP, Rentas y legislación laboral vigente.",
  },
  {
    icono: Users,
    titulo: "Cercanía con el cliente",
    texto:
      "Asesoramiento personalizado. No somos una oficina impersonal, somos sus socios de confianza.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Estudio Contable · Salta, NOA
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Tu estudio contable <br className="hidden md:block" />
              <span className="text-gold">de confianza</span> en el NOA
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              {empresa.descripcion}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition"
              >
                Consultar ahora <ArrowRight size={16} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 border border-gray-500 text-gray-200 px-6 py-3 rounded-lg hover:bg-navy-light hover:border-gray-400 transition"
              >
                Ver servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ───────────────────────────────────────────────────── */}
      <section className="bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.etiqueta}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <p className="text-gold text-3xl font-bold">{s.valor}</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                  {s.etiqueta}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Servicios (preview) ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy">Nuestros Servicios</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
            Cubrimos todas las áreas que su empresa o emprendimiento necesita
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((s, i) => (
            <ServiceCard key={s.id} servicio={s} index={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition"
          >
            Ver detalle completo de servicios <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── Pilares ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy">¿Por qué elegirnos?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((p, i) => {
              const Icon = p.icono;
              return (
                <motion.div
                  key={p.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{p.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.texto}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Organigrama ─────────────────────────────────────────────── */}
      <Organigrama />

      {/* ─── CTA Final ───────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para ordenar su situación fiscal?
          </h2>
          <p className="text-gray-300 text-sm mb-7">
            Contáctenos hoy y le brindaremos una primera consulta sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-7 py-3 rounded-lg hover:bg-gold-light transition"
          >
            Contactar ahora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
