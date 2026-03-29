import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { empresa, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-gold flex items-center justify-center">
                <span className="text-navy font-bold text-xs tracking-tight">MD</span>
              </div>
              <span className="text-white font-semibold text-base">
                MD<span className="text-gold"> Group</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Estudio contable integral especializado en PyMEs y emprendedores del NOA.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-gold shrink-0" />
                <span>{empresa.direccion}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gold shrink-0" />
                <span>{empresa.telefono}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold shrink-0" />
                <span>{empresa.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-light text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MD Group — Estudio Contable. Salta, Argentina.
        </div>
      </div>
    </footer>
  );
}
