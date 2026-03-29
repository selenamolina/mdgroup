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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col gap-4"
    >
      {/* Ícono */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${servicio.color}`}>
        <Icon size={24} />
      </div>

      {/* Título */}
      <h3 className="text-navy font-bold text-lg leading-tight">{servicio.titulo}</h3>

      {/* Descripción */}
      <p className="text-gray-500 text-sm leading-relaxed">{servicio.descripcion}</p>

      {/* Detalles */}
      <ul className="space-y-2 mt-auto">
        {servicio.detalles.map((detalle) => (
          <li key={detalle} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
            <span>{detalle}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
