"use client";

import { motion } from "framer-motion";
import { Target, Eye, MapPin } from "lucide-react";
import { historia, mision, vision, empresa } from "@/lib/data";

const hitos = [
  { anio: "2018", hecho: "Fundación de MD Group por Selena y Eusebio en Salta Capital." },
  { anio: "2019", hecho: "Incorporación de servicios de outsourcing contable para PyMEs locales." },
  { anio: "2021", hecho: "Ampliación del equipo y apertura del área de asesoría laboral." },
  { anio: "2023", hecho: "Superamos los 80 clientes activos en distintos rubros del NOA." },
  { anio: "2025", hecho: "Incorporación de herramientas digitales para gestión remota de clientes." },
];

const valores = [
  { valor: "Profesionalismo" },
  { valor: "Integridad" },
  { valor: "Compromiso" },
  { valor: "Innovación" },
];

export default function TrayectoriaPage() {
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
              Quiénes somos
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate mt-3 mb-4">
              Trayectoria y Valores
            </h1>
            <p className="text-slate-light text-base max-w-xl">
              Desde {empresa.fundacion} construyendo confianza con las PyMEs y emprendedores del NOA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Historia ───────────────────────────────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate mb-6">Nuestra Historia</h2>
        <p className="text-slate-mid leading-relaxed mb-12">{historia}</p>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-slate-200 space-y-10">
          {hitos.map((h, i) => (
            <motion.div
              key={h.anio}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
              className="relative"
            >
              <span className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white block" />
              <p className="font-mono text-xs text-slate-light mb-1 tracking-wider">{h.anio}</p>
              <p className="text-slate-mid text-sm leading-relaxed">{h.hecho}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Misión & Visión ─────────────────────────────────────── */}
      <section className="bg-surface border-y border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-xl p-7 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target size={18} className="text-accent" />
                <h2 className="text-lg font-semibold text-slate">Misión</h2>
              </div>
              <p className="text-slate-mid text-sm leading-relaxed">{mision}</p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
              className="bg-slate rounded-xl p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye size={18} className="text-white" />
                <h2 className="text-lg font-semibold text-white">Visión</h2>
              </div>
              <p className="text-slate-light text-sm leading-relaxed">{vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Valores ────────────────────────────────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate mb-8 text-center">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {valores.map((v, i) => (
            <motion.div
              key={v.valor}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
              className="bg-white border border-border hover:border-slate-300 rounded-xl p-6 text-center transition-all duration-200"
            >
              <p className="text-slate font-medium text-sm">{v.valor}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Mapa ──────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-slate-light" />
            <h2 className="text-xl font-semibold tracking-tight text-slate">Nuestra Ubicación</h2>
          </div>
          <p className="text-slate-light text-sm mb-6">{empresa.direccion}</p>
          <div className="rounded-xl overflow-hidden border border-border">
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
