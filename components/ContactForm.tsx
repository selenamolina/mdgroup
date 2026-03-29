"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { tiposConsulta } from "@/lib/data";

const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  telefono: z.string().optional(),
  tipo: z.enum(["impositiva", "laboral", "contable", "emprendedores", "otra"], {
    error: "Seleccioná un tipo de consulta",
  }),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    // Simulación de envío (sin backend real)
    await new Promise((r) => setTimeout(r, 800));
    setEnviado(true);
    reset();
  };

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={52} className="text-green-500" />
        <h3 className="text-xl font-bold text-navy">¡Consulta recibida!</h3>
        <p className="text-gray-500 max-w-sm text-sm">
          Gracias por escribirnos. Un profesional de MD Group se pondrá en contacto
          con usted a la brevedad.
        </p>
        <button
          onClick={() => setEnviado(false)}
          className="mt-2 text-sm text-gold font-medium hover:underline"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl mx-auto" noValidate>
      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Nombre y apellido <span className="text-red-500">*</span>
        </label>
        <input
          {...register("nombre")}
          placeholder="Ej: Juan García"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
        />
        {errors.nombre && (
          <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="ejemplo@correo.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono (opcional) */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <input
          {...register("telefono")}
          type="tel"
          placeholder="+54 387 400-0000"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
        />
      </div>

      {/* Tipo de consulta */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Tipo de consulta <span className="text-red-500">*</span>
        </label>
        <select
          {...register("tipo")}
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition bg-white"
        >
          <option value="" disabled>
            Seleccioná una opción...
          </option>
          {tiposConsulta.map((tipo) => (
            <option key={tipo.value} value={tipo.value}>
              {tipo.label}
            </option>
          ))}
        </select>
        {errors.tipo && (
          <p className="text-red-500 text-xs mt-1">{errors.tipo.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("mensaje")}
          rows={5}
          placeholder="Describa brevemente su consulta..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition resize-none"
        />
        {errors.mensaje && (
          <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-navy-light transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="text-sm">Enviando...</span>
        ) : (
          <>
            <Send size={16} />
            <span>Enviar consulta</span>
          </>
        )}
      </button>
    </form>
  );
}
