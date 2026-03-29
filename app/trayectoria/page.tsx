"use client";

import { motion } from "framer-motion";
import { Target, Eye, History, MapPin } from "lucide-react";
import { historia, mision, vision, empresa } from "@/lib/data";

const hitos = [
  { anio: "2018", hecho: "Fundación de MD Group por Selena y Eusebio en Salta Capital." },
  { anio: "2019", hecho: "Incorporación de servicios de outsourcing contable para PyMEs locales." },
  { anio: "2021", hecho: "Ampliación del equipo y apertura del área de asesoría laboral." },
  { anio: "2023", hecho: "Superamos los 80 clientes activos en distintos rubros del NOA." },
  { anio: "2025", hecho: "Incorporación de herramientas digitales para gestión remota de clientes." },
];

export default function TrayectoriaPage() {
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
              Quiénes somos
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Trayectoria y Valores
            </h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Desde {empresa.fundacion} construyendo confianza con las PyMEs y emprendedores del NOA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Historia ───────────────────────────────────────────── */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
            <History size={18} className="text-gold" />
          </div>
          <h2 className="text-xl font-bold text-navy">Nuestra Historia</h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10 text-base">{historia}</p>

        {/* Timeline */}
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-8">
          {hitos.map((h, i) => (
            <motion.div
              key={h.anio}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[1.65rem] top-1 w-5 h-5 rounded-full bg-gold border-2 border-white block" />
              <p className="text-gold font-bold text-sm mb-0.5">{h.anio}</p>
              <p className="text-gray-600 text-sm">{h.hecho}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Misión & Visión ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <Target size={18} className="text-gold" />
                </div>
                <h2 className="text-lg font-bold text-navy">Misión</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{mision}</p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-navy rounded-2xl p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                  <Eye size={18} className="text-navy" />
                </div>
                <h2 className="text-lg font-bold text-white">Visión</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Valores ────────────────────────────────────────────── */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-navy mb-8 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { valor: "Profesionalismo", emoji: "🎯" },
            { valor: "Integridad", emoji: "⚖️" },
            { valor: "Compromiso", emoji: "🤝" },
            { valor: "Innovación", emoji: "💡" },
          ].map((v, i) => (
            <motion.div
              key={v.valor}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border-2 border-gray-100 hover:border-gold rounded-xl p-5 text-center transition-colors"
            >
              <p className="text-2xl mb-2">{v.emoji}</p>
              <p className="text-navy font-semibold text-sm">{v.valor}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Mapa ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
              <MapPin size={18} className="text-gold" />
            </div>
            <h2 className="text-xl font-bold text-navy">Nuestra Ubicación</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">{empresa.direccion}</p>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115267.34611963888!2d-65.5310849!3d-24.7821276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94122716de6ecbdb%3A0x7fbe8e78b40e4c!2sSalta%2C%20Salta!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación MD Group — Salta Capital"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
