"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <span className="text-slate font-bold text-lg tracking-tight">
              MD <span className="font-light">Group</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${
                      pathname === link.href
                        ? "text-slate font-medium"
                        : "text-slate-mid hover:text-slate"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {pathname === link.href && (
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 h-0.5 w-8 bg-slate" />
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              className="px-5 py-2 rounded-md text-sm font-medium bg-accent text-white hover:bg-blue-700 transition-colors"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-slate-mid hover:text-slate p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden pb-4 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                      pathname === link.href
                        ? "text-slate font-medium"
                        : "text-slate-mid hover:text-slate"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-md text-sm font-medium bg-accent text-white hover:bg-blue-700 transition-colors"
                >
                  Contactar
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
