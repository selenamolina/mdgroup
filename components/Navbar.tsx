"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-navy shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <div className="w-9 h-9 rounded-md bg-gold flex items-center justify-center">
              <span className="text-navy font-bold text-sm tracking-tight">MD</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-wide">
              MD<span className="text-gold"> Group</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-gold text-navy"
                      : "text-gray-300 hover:text-white hover:bg-navy-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-gold text-navy"
                      : "text-gray-300 hover:text-white hover:bg-navy-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
