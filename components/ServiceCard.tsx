"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
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
      {/* Ícono */}
      <Icon size={22} className="text-slate-mid" />

      {/* Título */}
      <h3 className="text-slate font-medium text-lg leading-tight">{servicio.titulo}</h3>

      {/* Descripción */}
      <p className="text-slate-light text-sm leading-relaxed">{servicio.descripcion}</p>

      {/* Detalles */}
      <ul className="space-y-2 mt-auto">
        {servicio.detalles.map((detalle) => (
          <li key={detalle} className="flex items-start gap-2 text-sm text-slate-light">
            <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
            <span>{detalle}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
