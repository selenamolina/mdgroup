"use client";

import { motion } from "framer-motion";
import { equipo } from "@/lib/data";

export default function Organigrama() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-slate-light text-xs font-medium uppercase tracking-widest">
            El equipo
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-slate mt-3">
            Nuestro Equipo
          </h2>
          <p className="text-slate-light mt-3 text-sm">
            Profesionales comprometidos con el crecimiento de su negocio
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {equipo.map((integrante, i) => (
            <motion.div
              key={integrante.nombre}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-8 hover:scale-[1.02] transition-transform duration-200 w-full sm:w-64"
            >
              {/* Avatar circular */}
              <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mb-4">
                <span className="text-slate font-semibold text-lg">
                  {integrante.iniciales}
                </span>
              </div>
              <h3 className="font-medium text-slate text-base">{integrante.nombre}</h3>
              <p className="text-slate-light text-xs uppercase tracking-widest mt-1">
                {integrante.rol}
              </p>
              <p className="text-slate-light text-sm mt-3 leading-relaxed">
                {integrante.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
