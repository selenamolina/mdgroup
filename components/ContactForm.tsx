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

const inputClass =
  "w-full border border-border rounded-md px-4 py-2.5 text-sm text-slate focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition bg-white";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setEnviado(true);
    reset();
  };

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={44} className="text-accent" />
        <h3 className="text-xl font-semibold text-slate">¡Consulta recibida!</h3>
        <p className="text-slate-light max-w-sm text-sm">
          Gracias por escribirnos. Un profesional de MD Group se pondrá en contacto
          con usted a la brevedad.
        </p>
        <button
          onClick={() => setEnviado(false)}
          className="mt-2 text-sm text-accent font-medium hover:underline"
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
        <label className="block text-xs font-medium text-slate-light uppercase tracking-wider mb-1.5">
          Nombre y apellido <span className="text-red-400">*</span>
        </label>
        <input
          {...register("nombre")}
          placeholder="Ej: Juan García"
          className={inputClass}
        />
        {errors.nombre && (
          <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-slate-light uppercase tracking-wider mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="ejemplo@correo.com"
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono (opcional) */}
      <div>
        <label className="block text-xs font-medium text-slate-light uppercase tracking-wider mb-1.5">
          Teléfono <span className="text-slate-light font-normal normal-case">(opcional)</span>
        </label>
        <input
          {...register("telefono")}
          type="tel"
          placeholder="+54 387 400-0000"
          className={inputClass}
        />
      </div>

      {/* Tipo de consulta */}
      <div>
        <label className="block text-xs font-medium text-slate-light uppercase tracking-wider mb-1.5">
          Tipo de consulta <span className="text-red-400">*</span>
        </label>
        <select
          {...register("tipo")}
          defaultValue=""
          className={inputClass}
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
          <p className="text-red-400 text-xs mt-1">{errors.tipo.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-xs font-medium text-slate-light uppercase tracking-wider mb-1.5">
          Mensaje <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("mensaje")}
          rows={5}
          placeholder="Describa brevemente su consulta..."
          className={inputClass + " resize-none"}
        />
        {errors.mensaje && (
          <p className="text-red-400 text-xs mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
