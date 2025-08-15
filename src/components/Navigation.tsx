"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Users, Briefcase, Building2 } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-100/80 backdrop-blur-md border-b border-dark-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
                          <Image
                src="/images/METRIC.png"
                alt="MetricFox Logo"
                width={120}
                height={40}
                priority
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/kandidaten" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
              <Users size={16} />
              <span>Für Kandidaten</span>
            </Link>
            <Link href="/unternehmen" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
              <Building2 size={16} />
              <span>Für Unternehmen</span>
            </Link>
            <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
              <Briefcase size={16} />
              <span>Jobs</span>
            </Link>
            <Link href="/ueber-uns" className="text-gray-300 hover:text-white transition-colors">
              Über uns
            </Link>
            <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
              Kontakt
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/anmelden" className="text-gray-300 hover:text-white transition-colors">
              Anmelden
            </Link>
            <Link href="/registrieren" className="btn-primary">
              Registrieren
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-200 rounded-lg mt-2">
              <Link href="/kandidaten" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Für Kandidaten
              </Link>
              <Link href="/unternehmen" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Für Unternehmen
              </Link>
              <Link href="/jobs" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Jobs
              </Link>
              <Link href="/ueber-uns" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Über uns
              </Link>
              <Link href="/kontakt" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </Link>
              <div className="border-t border-dark-300 pt-2 mt-2">
                <Link href="/anmelden" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Anmelden
                </Link>
                <Link href="/registrieren" className="block px-3 py-2 text-primary-500 hover:text-primary-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Registrieren
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
