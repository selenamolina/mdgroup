import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { empresa, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate text-slate-light mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <span className="text-white font-bold text-lg tracking-tight">
              MD <span className="font-light">Group</span>
            </span>
            <p className="text-sm leading-relaxed mt-3">
              Estudio contable integral especializado en PyMEs y emprendedores del NOA.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white text-xs font-medium uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white text-xs font-medium uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{empresa.direccion}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <span>{empresa.telefono}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <span>{empresa.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 text-center text-xs text-slate-light">
          © {new Date().getFullYear()} MD Group — Estudio Contable. Salta, Argentina.
        </div>
      </div>
    </footer>
  );
}
