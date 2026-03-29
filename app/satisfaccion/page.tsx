"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare, ThumbsUp } from "lucide-react";
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
      <section className="bg-white border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-slate-light text-xs font-medium uppercase tracking-widest">
              Gestión de calidad
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate mt-3 mb-4">
              Tu opinión nos ayuda a mejorar
            </h1>
            <p className="text-slate-light text-base max-w-xl">
              Valoramos cada experiencia de nuestros clientes. Tomarse unos minutos para completar
              esta encuesta nos permite ofrecerte un mejor servicio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Beneficios ──────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {beneficios.map((b, i) => {
              const Icon = b.icono;
              return (
                <motion.div
                  key={b.titulo}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.35, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <Icon size={16} className="text-slate-light shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate text-sm">{b.titulo}</p>
                    <p className="text-slate-light text-xs mt-0.5 leading-relaxed">{b.texto}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Encuesta ───────────────────────────────────────────── */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
          className="bg-white border border-border rounded-xl p-7 md:p-10"
        >
          <h2 className="text-lg font-semibold text-slate mb-7">Encuesta de satisfacción</h2>
          <SatisfactionForm />
        </motion.div>
      </section>
    </div>
  );
}
