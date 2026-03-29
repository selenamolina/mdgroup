"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import SatisfactionForm from "@/components/SatisfactionForm";

const beneficios = [
  {
    icono: Star,
    titulo: "Mejora continua",
    texto: "Usamos sus respuestas para mejorar cada aspecto de nuestro servicio.",
  },
  {
    icono: MessageSquare,
    titulo: "Su voz importa",
    texto: "Cada comentario es revisado personalmente por nuestro equipo.",
  },
  {
    icono: ThumbsUp,
    titulo: "Totalmente anónima",
    texto: "El nombre es opcional. Puede responder con total libertad.",
  },
];

export default function SatisfaccionPage() {
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
              Gestión de calidad
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Tu opinión nos ayuda a mejorar
            </h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Valoramos cada experiencia de nuestros clientes. Tomarse unos minutos para completar
              esta encuesta nos permite ofrecerte un mejor servicio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Beneficios ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {beneficios.map((b, i) => {
              const Icon = b.icono;
              return (
                <motion.div
                  key={b.titulo}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{b.titulo}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{b.texto}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Encuesta ───────────────────────────────────────────── */}
      <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm p-7 md:p-10"
        >
          <h2 className="text-lg font-bold text-navy mb-7">Encuesta de satisfacción</h2>
          <SatisfactionForm />
        </motion.div>
      </section>
    </div>
  );
}
