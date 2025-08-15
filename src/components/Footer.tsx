import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/METRIC.png"
                alt="MetricFox Logo"
                width={120}
                height={40}
                priority
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professionelle Personalvermittlung für IT-Fachkräfte in Deutschland. 
              Wir verbinden Top-Talente mit führenden Unternehmen und schaffen 
              erfolgreiche Karrieren.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kandidaten"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Für Kandidaten
                </Link>
              </li>
              <li>
                <Link
                  href="/unternehmen"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Für Unternehmen
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Jobportal
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary-500" size={16} />
                <span className="text-gray-300 text-sm">
                  Berlin, Deutschland
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-primary-500" size={16} />
                <span className="text-gray-300 text-sm">
                  +49 30 12345678
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-primary-500" size={16} />
                <span className="text-gray-300 text-sm">
                  info@metricfox.de
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MetricFox. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/datenschutz"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              AGB
            </Link>
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}