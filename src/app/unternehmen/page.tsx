import Link from "next/link";
import { 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Search, 
  Star,
  Briefcase,
  Target,
  TrendingUp,
  Shield
} from "lucide-react";

export default function UnternehmenPage() {
  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Finden Sie die besten
              <span className="text-primary-500 block mt-2">
                IT-Talente
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zugang zu einem kuratierten Pool vorgeprüfter IT-Fachkräfte. 
              Wir vermitteln Ihnen die perfekten Kandidaten für Ihr Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registrieren"
                className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                Jetzt registrieren
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/talente"
                className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                Talente durchsuchen
                <Users className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Warum MetricFox für Unternehmen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Vorgeprüfte Kandidaten
              </h3>
              <p className="text-gray-300">
                Alle Kandidaten werden von unserem Team sorgfältig 
                geprüft und bewertet.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Präzise Matching
              </h3>
              <p className="text-gray-300">
                KI-gestützte Algorithmen finden die perfekte 
                Übereinstimmung für Ihre Anforderungen.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Schneller Einstellungsprozess
              </h3>
              <p className="text-gray-300">
                Reduzieren Sie die Einstellungszeit um bis zu 60% 
                durch unsere effizienten Prozesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Unsere Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-primary-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Stellenanzeigen veröffentlichen
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Veröffentlichen Sie Ihre Stellenanzeigen in unserem 
                    exklusiven Talent-Pool und erreichen Sie qualifizierte Kandidaten.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="text-primary-500 mr-2" size={16} />
                      Unbegrenzte Stellenanzeigen
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="text-primary-500 mr-2" size={16} />
                      Detaillierte Kandidatenprofile
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="text-primary-500 mr-2" size={16} />
                      Direkte Kommunikation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Search className="text-primary-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Headhunting-Service
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Unser erfahrenes Team sucht aktiv nach passenden 
                    Kandidaten für Ihre spezifischen Anforderungen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="text-primary-500 mr-2" size={16} />
                      Aktive Kandidatensuche
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="text-primary-500 mr-2" size={16} />
                      Persönliche Beratung
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="text-primary-500 mr-2" size={16} />
                      Marktanalyse
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Unsere Erfolge
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                500+
              </div>
              <div className="text-gray-300">
                Erfolgreiche Vermittlungen
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                1000+
              </div>
              <div className="text-gray-300">
                Aktive Kandidaten
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                200+
              </div>
              <div className="text-gray-300">
                Partner-Unternehmen
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                98%
              </div>
              <div className="text-gray-300">
                Kundenzufriedenheit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Flexible Preismodelle
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-primary-500 mb-6">
                Kostenlos
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  1 Stellenanzeige
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Basis-Kandidatensuche
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  E-Mail-Support
                </li>
              </ul>
              <Link
                href="/registrieren"
                className="btn-primary w-full"
              >
                Jetzt starten
              </Link>
            </div>
            <div className="card text-center border-primary-500">
              <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Beliebt
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-primary-500 mb-6">
                €299<span className="text-lg text-gray-400">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Unbegrenzte Stellenanzeigen
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Erweiterte Kandidatensuche
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Persönlicher Account Manager
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Prioritäts-Support
                </li>
              </ul>
              <Link
                href="/registrieren"
                className="btn-primary w-full"
              >
                Jetzt wählen
              </Link>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-primary-500 mb-6">
                Individuell
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Headhunting-Service
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Dedizierter Recruiter
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  Marktanalyse
                </li>
                <li className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="text-primary-500 mr-2" size={16} />
                  24/7 Support
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="btn-secondary w-full"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit, Ihr Team zu erweitern?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Registrieren Sie sich jetzt und finden Sie die perfekten 
            IT-Talente für Ihr Unternehmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registrieren"
              className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Building2 className="mr-2" size={20} />
              Jetzt registrieren
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Beratung anfordern
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
