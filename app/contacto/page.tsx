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
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Estamos para ayudarte
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Canal de Consulta
            </h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Completá el formulario y un profesional de nuestro equipo se comunicará
              con vos a la brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contenido ──────────────────────────────────────────── */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info lateral */}
          <div className="lg:col-span-1 space-y-5">
            <h2 className="text-lg font-bold text-navy mb-2">Información de contacto</h2>
            {infoContacto.map((item, i) => {
              const Icon = item.icono;
              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                      {item.titulo}
                    </p>
                    <p className="text-navy text-sm font-medium mt-0.5">{item.texto}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Nota */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-xs leading-relaxed">
                <strong>Primera consulta sin costo.</strong> Analizamos su situación y le
                explicamos cómo podemos ayudarlo, sin compromisos.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-7"
            >
              <h2 className="text-lg font-bold text-navy mb-6">Formulario de consulta</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
