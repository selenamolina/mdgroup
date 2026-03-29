"use client";

import { motion } from "framer-motion";
import { equipo } from "@/lib/data";

export default function Organigrama() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy">Nuestro Equipo</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Profesionales comprometidos con el crecimiento de su negocio
          </p>
        </div>

        {/* Organigrama */}
        <div className="flex flex-col items-center gap-6">
          {/* Caja de la empresa */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-navy text-white rounded-xl px-8 py-4 text-center shadow-lg"
          >
            <span className="font-bold text-lg tracking-wide">MD Group</span>
            <p className="text-gold text-xs mt-0.5 uppercase tracking-widest">
              Estudio Contable
            </p>
          </motion.div>

          {/* Línea vertical */}
          <div className="w-px h-8 bg-navy-light" />

          {/* Línea horizontal que conecta */}
          <div className="relative w-full flex justify-center">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-navy-light hidden sm:block" />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-around w-full max-w-xl">
              {equipo.map((integrante, i) => (
                <motion.div
                  key={integrante.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  className="flex flex-col items-center"
                >
                  {/* Línea vertical desde arriba */}
                  <div className="w-px h-8 bg-navy-light hidden sm:block" />

                  {/* Tarjeta */}
                  <div className="bg-white border-2 border-navy rounded-xl p-5 text-center shadow-md w-52 hover:shadow-lg hover:border-gold transition-all">
                    <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-3">
                      <span className="text-gold text-xl font-bold">
                        {integrante.iniciales}
                      </span>
                    </div>
                    <h3 className="font-bold text-navy text-base">{integrante.nombre}</h3>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {integrante.rol}
                    </p>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                      {integrante.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
