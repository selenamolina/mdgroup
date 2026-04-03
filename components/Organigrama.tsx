"use client";

import { motion } from "framer-motion";

const socios = [
  { nombre: "Selena Solange Molina", rol: "Socia Gerente" },
  { nombre: "Domingo Las Heras Eusebio", rol: "Socio Gerente" },
];

const colaboradores = [
  { nombre: "Valentina Ríos", rol: "Contadora Junior", area: "Área Contable y Auditoría" },
  { nombre: "Matías Cornejo", rol: "Asesor Impositivo", area: "Área Impositiva" },
  { nombre: "Luciana Peralta", rol: "Analista Laboral", area: "Área Laboral" },
  { nombre: "Rodrigo Salazar", rol: "Soporte", area: "Gestión Digital" },
  { nombre: "María González", rol: "Asesora / Atención al cliente", area: "Asesoría y Consultoría" },
];

export default function Organigrama() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <div className="text-center mb-6">
          <p className="text-[10px] font-semibold tracking-widest text-slate-mid uppercase mb-1">
            Estructura Organizacional
          </p>
          <h2 className="text-2xl font-bold text-slate">Organigrama Profesional</h2>
          <p className="text-slate-light mt-1 text-xs">Estructura organizacional de MD Group</p>
        </div>

        {/* ── Nivel 1: Dirección General ── */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate text-center py-4 px-14 rounded-xl shadow-md"
          >
            <h3 className="text-base font-bold text-white">Dirección General</h3>
            <p className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">MD Group</p>
          </motion.div>
        </div>

        {/* Eje vertical desde DG */}
        <div className="flex justify-center">
          <div className="w-px h-5 bg-slate-300" />
        </div>

        {/*
          T-junction para Socios: barra horizontal de 25% a 75%
          El eje central (50%) continúa hacia abajo — las Áreas dependen de DG, no de los Socios
        */}
        <div className="relative h-5">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-slate-300" />
          <div className="absolute top-0 bottom-0 w-px bg-slate-300" style={{ left: "25%" }} />
          <div className="absolute top-0 bottom-0 w-px bg-slate-300" style={{ left: "50%" }} />
          <div className="absolute top-0 bottom-0 w-px bg-slate-300" style={{ left: "75%" }} />
        </div>

        {/* ── Nivel 2: Socios Gerentes ── */}
        <div className="grid grid-cols-2 gap-4">
          {socios.map((s, i) => (
            <motion.div
              key={s.nombre}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="bg-slate text-center py-5 px-4 rounded-xl border border-slate/50 shadow-md"
            >
              <h4 className="font-bold text-white text-sm">{s.nombre}</h4>
              <p className="text-blue-200 text-[10px] uppercase tracking-wider mt-1">{s.rol}</p>
            </motion.div>
          ))}
        </div>

        {/* Eje central continúa hacia las Áreas (conectadas a DG, no a los Socios) */}
        <div className="flex justify-center">
          <div className="w-px h-5 bg-slate-300" />
        </div>

        {/* T-junction para Áreas: barra de 10% a 90%, caídas en cada centro */}
        <div className="relative h-5">
          <div className="absolute top-0 h-px bg-slate-300" style={{ left: "10%", right: "10%" }} />
          {[10, 30, 50, 70, 90].map((pct) => (
            <div
              key={pct}
              className="absolute top-0 bottom-0 w-px bg-slate-300"
              style={{ left: `${pct}%` }}
            />
          ))}
        </div>

        {/* ── Nivel 3: Colaboradores por Área ── */}
        <div className="grid grid-cols-5 gap-2">
          {colaboradores.map((c, i) => (
            <motion.div
              key={c.nombre}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              className="bg-surface border border-border rounded-xl p-3 text-center shadow-sm"
            >
              <h5 className="font-bold text-xs text-slate-900">{c.nombre}</h5>
              <p className="text-slate-mid text-[10px] uppercase tracking-wider mt-1">{c.rol}</p>
              <p className="text-slate-light text-[10px] mt-1">{c.area}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
