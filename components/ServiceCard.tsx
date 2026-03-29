"use client";

import { motion } from "framer-motion";
import type { Servicio } from "@/lib/data";

type Props = {
  servicio: Servicio;
  index: number;
};

export default function ServiceCard({ servicio, index }: Props) {
  const Icon = servicio.icono;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className="bg-white border border-border rounded-xl p-7 hover:shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col gap-4"
    >
      {/* Número + Ícono */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-slate-light tracking-widest">{servicio.numero}</span>
        <Icon size={18} className="text-slate-light" />
      </div>

      {/* Título */}
      <h3 className="text-slate font-medium text-base leading-tight">{servicio.titulo}</h3>

      {/* Descripción */}
      <p className="text-slate-light text-sm leading-relaxed">{servicio.descripcion}</p>

      {/* Tagline */}
      <p className="text-xs text-slate-mid italic mt-auto border-t border-border pt-4">
        "{servicio.tagline}"
      </p>
    </motion.div>
  );
}
