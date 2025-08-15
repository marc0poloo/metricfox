import Link from "next/link";
import { 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Upload, 
  Search, 
  Star,
  Briefcase,
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";

export default function KandidatenPage() {
  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Finden Sie Ihren
              <span className="text-primary-500 block mt-2">
                Traumjob
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Werden Sie Teil unseres exklusiven Talent-Pools und erhalten Sie 
              personalisierte Job-Vorschläge von führenden Tech-Unternehmen.
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
                href="/jobs"
                className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                Jobs durchsuchen
                <Search className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Warum MetricFox?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Personalisierte Vermittlung
              </h3>
              <p className="text-gray-300">
                Wir analysieren Ihr Profil und vermitteln Sie nur an Unternehmen, 
                die zu Ihren Fähigkeiten und Karrierezielen passen.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Exklusive Positionen
              </h3>
              <p className="text-gray-300">
                Zugang zu unveröffentlichten Stellenangeboten von Top-Unternehmen, 
                die nicht öffentlich ausgeschrieben sind.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Karriereberatung
              </h3>
              <p className="text-gray-300">
                Professionelle Beratung zu Gehaltsverhandlungen, 
                Karriereentwicklung und Markttrends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            So funktioniert es
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Profil erstellen
              </h3>
              <p className="text-gray-300">
                Registrieren Sie sich und erstellen Sie Ihr detailliertes 
                Profil mit Fähigkeiten und Erfahrungen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Lebenslauf hochladen
              </h3>
              <p className="text-gray-300">
                Laden Sie Ihren Lebenslauf hoch und ergänzen Sie 
                weitere relevante Dokumente.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Job-Vorschläge erhalten
              </h3>
              <p className="text-gray-300">
                Erhalten Sie personalisierte Job-Vorschläge von 
                passenden Unternehmen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Bewerben & Interview
              </h3>
              <p className="text-gray-300">
                Bewerben Sie sich direkt über unsere Plattform 
                und erhalten Sie Feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Unsere Services für Sie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Kostenlose Registrierung
                  </h3>
                  <p className="text-gray-300">
                    Erstellen Sie Ihr Profil kostenlos und erhalten Sie 
                    Zugang zu allen Funktionen.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Gehaltsverhandlungs-Support
                  </h3>
                  <p className="text-gray-300">
                    Wir unterstützen Sie bei Gehaltsverhandlungen 
                    und Marktanalysen.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Karriereberatung
                  </h3>
                  <p className="text-gray-300">
                    Professionelle Beratung zu Ihrer Karriereentwicklung 
                    und Markttrends.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Exklusive Job-Benachrichtigungen
                  </h3>
                  <p className="text-gray-300">
                    Erhalten Sie Benachrichtigungen über neue Stellen, 
                    die zu Ihrem Profil passen.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Direkter Kontakt zu Unternehmen
                  </h3>
                  <p className="text-gray-300">
                    Kommunizieren Sie direkt mit Personalverantwortlichen und 
                    Entscheidungsträgern.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Bewerbungs-Tracking
                  </h3>
                  <p className="text-gray-300">
                    Verfolgen Sie den Status Ihrer Bewerbungen 
                    in Echtzeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den nächsten Karriereschritt?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Registrieren Sie sich jetzt und werden Sie Teil unseres 
            exklusiven Talent-Pools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registrieren"
              className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Upload className="mr-2" size={20} />
              Jetzt registrieren
            </Link>
            <Link
              href="/jobs"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Briefcase className="mr-2" size={20} />
              Jobs durchsuchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
