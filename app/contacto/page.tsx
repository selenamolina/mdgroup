"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { empresa } from "@/lib/data";

const infoContacto = [
  { icono: Phone, titulo: "Teléfono", texto: empresa.telefono },
  { icono: Mail, titulo: "Email", texto: empresa.email },
  { icono: MapPin, titulo: "Sede", texto: empresa.direccion },
  { icono: Clock, titulo: "Horario de atención", texto: "Lun–Vie: 9:00 – 18:00 hs" },
];

export default function ContactoPage() {
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
              Estamos para ayudarte
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate mt-3 mb-4">
              Canal de Consulta
            </h1>
            <p className="text-slate-light text-base max-w-xl">
              Completá el formulario y un profesional de nuestro equipo se comunicará
              con vos a la brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contenido ──────────────────────────────────────────── */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info lateral */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-medium text-slate-light uppercase tracking-widest">
              Información de contacto
            </h2>
            {infoContacto.map((item, i) => {
              const Icon = item.icono;
              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <Icon size={16} className="text-slate-light shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-light uppercase tracking-wider">
                      {item.titulo}
                    </p>
                    <p className="text-slate text-sm font-medium mt-0.5">{item.texto}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Nota */}
            <div className="mt-2 border border-border rounded-lg p-4">
              <p className="text-slate-mid text-xs leading-relaxed">
                <strong>Primera consulta sin costo.</strong> Analizamos su situación y le
                explicamos cómo podemos ayudarlo, sin compromisos.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
              className="bg-white border border-border rounded-xl p-7"
            >
              <h2 className="text-lg font-semibold text-slate mb-6">Formulario de consulta</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
