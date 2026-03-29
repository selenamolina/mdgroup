"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, CheckCircle } from "lucide-react";
import { serviciosEncuesta } from "@/lib/data";

const schema = z.object({
  nombre: z.string().optional(),
  calificacion: z.number({ error: "Seleccioná una calificación" }).min(1).max(5),
  claridad: z.enum(["si", "parcialmente", "no"], {
    error: "Seleccioná una opción",
  }),
  volveria: z.enum(["si", "no", "quizas"], {
    error: "Seleccioná una opción",
  }),
  servicio: z.string().min(1, "Seleccioná el servicio en el que fue atendido"),
  sugerencias: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none"
          aria-label={`${star} estrella${star > 1 ? "s" : ""}`}
        >
          <Star
            size={30}
            className={`transition-colors ${
              star <= (hovered || value)
                ? "fill-gold text-gold"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function SatisfactionForm() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    control,
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
        <CheckCircle size={52} className="text-green-500" />
        <h3 className="text-xl font-bold text-navy">¡Gracias por su opinión!</h3>
        <p className="text-gray-500 max-w-sm text-sm">
          Su feedback es muy valioso para nosotros. Nos ayuda a mejorar la calidad de
          nuestros servicios.
        </p>
        <button
          onClick={() => setEnviado(false)}
          className="mt-2 text-sm text-gold font-medium hover:underline"
        >
          Completar otra encuesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto" noValidate>
      {/* Nombre (opcional) */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Nombre <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <input
          {...register("nombre")}
          placeholder="Su nombre..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
        />
      </div>

      {/* Calificación con estrellas */}
      <div>
        <label className="block text-sm font-medium text-navy mb-2">
          ¿Cómo calificaría la atención recibida? <span className="text-red-500">*</span>
        </label>
        <Controller
          name="calificacion"
          control={control}
          render={({ field }) => (
            <StarRating
              value={field.value ?? 0}
              onChange={(v) => field.onChange(v)}
            />
          )}
        />
        {errors.calificacion && (
          <p className="text-red-500 text-xs mt-1">{errors.calificacion.message}</p>
        )}
      </div>

      {/* Claridad */}
      <div>
        <label className="block text-sm font-medium text-navy mb-2">
          ¿La información brindada fue clara y comprensible? <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-3 flex-wrap">
          {(["si", "parcialmente", "no"] as const).map((opcion) => {
            const etiquetas = { si: "Sí", parcialmente: "Parcialmente", no: "No" };
            return (
              <label
                key={opcion}
                className="flex items-center gap-2 cursor-pointer text-sm font-medium"
              >
                <input
                  type="radio"
                  value={opcion}
                  {...register("claridad")}
                  className="accent-navy w-4 h-4"
                />
                {etiquetas[opcion]}
              </label>
            );
          })}
        </div>
        {errors.claridad && (
          <p className="text-red-500 text-xs mt-1">{errors.claridad.message}</p>
        )}
      </div>

      {/* Volvería */}
      <div>
        <label className="block text-sm font-medium text-navy mb-2">
          ¿Volvería a consultar con nosotros? <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-3 flex-wrap">
          {(["si", "no", "quizas"] as const).map((opcion) => {
            const etiquetas = { si: "Sí", no: "No", quizas: "Quizás" };
            return (
              <label
                key={opcion}
                className="flex items-center gap-2 cursor-pointer text-sm font-medium"
              >
                <input
                  type="radio"
                  value={opcion}
                  {...register("volveria")}
                  className="accent-navy w-4 h-4"
                />
                {etiquetas[opcion]}
              </label>
            );
          })}
        </div>
        {errors.volveria && (
          <p className="text-red-500 text-xs mt-1">{errors.volveria.message}</p>
        )}
      </div>

      {/* Servicio */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          ¿En qué servicio fue atendido? <span className="text-red-500">*</span>
        </label>
        <select
          {...register("servicio")}
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition bg-white"
        >
          <option value="" disabled>
            Seleccioná un servicio...
          </option>
          {serviciosEncuesta.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.servicio && (
          <p className="text-red-500 text-xs mt-1">{errors.servicio.message}</p>
        )}
      </div>

      {/* Sugerencias */}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Sugerencias o comentarios <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <textarea
          {...register("sugerencias")}
          rows={4}
          placeholder="Comparta sus sugerencias o comentarios..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-navy-light transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="text-sm">Enviando...</span>
        ) : (
          <span>Enviar encuesta</span>
        )}
      </button>
    </form>
  );
}
