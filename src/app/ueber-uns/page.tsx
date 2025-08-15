"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Shield,
  CheckCircle,
  Star,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Fischer",
      role: "Gründerin & CEO",
      bio: "Mit über 15 Jahren Erfahrung in der IT-Personalvermittlung gründete Sarah MetricFox, um die Lücke zwischen außergewöhnlichen Talenten und innovativen Unternehmen zu schließen.",
      image: "/images/team/sarah.jpg",
      linkedin: "https://linkedin.com/in/sarahfischer",
      specialties: ["Executive Search", "Tech Leadership", "Strategische Partnerschaften"]
    },
    {
      name: "Michael Weber",
      role: "Senior Technical Recruiter",
      bio: "Michael bringt 8 Jahre Erfahrung in der technischen Personalvermittlung mit. Er hat erfolgreich über 300 Entwickler in führenden Tech-Unternehmen platziert.",
      image: "/images/team/michael.jpg",
      linkedin: "https://linkedin.com/in/michaelweber",
      specialties: ["Software Development", "DevOps", "Cloud Architecture"]
    },
    {
      name: "Emma Rodriguez",
      role: "Talent Acquisition Specialist",
      bio: "Emma fokussiert sich auf aufkommende Technologien und Startup-Platzierungen. Mit ihrem Hintergrund in Informatik versteht sie technische Anforderungen perfekt.",
      image: "/images/team/emma.jpg",
      linkedin: "https://linkedin.com/in/emmarodriguez",
      specialties: ["Emerging Tech", "Startups", "Data Science"]
    },
    {
      name: "Thomas Schmidt",
      role: "Head of Client Relations",
      bio: "Thomas ist verantwortlich für die Beziehungen zu unseren Unternehmenskunden und sorgt dafür, dass jede Zusammenarbeit erfolgreich verläuft.",
      image: "/images/team/thomas.jpg",
      linkedin: "https://linkedin.com/in/thomasschmidt",
      specialties: ["Client Management", "Business Development", "Partnership Strategy"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Präzision",
      description: "Wir matchen nicht nur Fähigkeiten, sondern auch Persönlichkeiten und Unternehmenskulturen für langfristigen Erfolg."
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Wir brennen für IT und Menschen. Diese Kombination macht uns zu Experten in unserem Bereich."
    },
    {
      icon: Shield,
      title: "Vertrauen",
      description: "Diskretion und Professionalität stehen bei uns an erster Stelle. Ihre Daten sind bei uns sicher."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Wir nutzen modernste Technologien und Methoden, um die besten Matches zu finden."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Gründung von MetricFox",
      description: "Start mit der Vision, die IT-Personalvermittlung zu revolutionieren"
    },
    {
      year: "2020",
      title: "100+ erfolgreiche Vermittlungen",
      description: "Erreichen des ersten großen Meilensteins trotz herausfordernder Zeiten"
    },
    {
      year: "2021",
      title: "Expansion nach München und Hamburg",
      description: "Eröffnung neuer Standorte und Aufbau regionaler Expertise"
    },
    {
      year: "2022",
      title: "Auszeichnung als 'Top IT Recruiter'",
      description: "Anerkennung durch die deutsche Tech-Community"
    },
    {
      year: "2023",
      title: "500+ Vermittlungen erreicht",
      description: "Bestätigung unserer Position als führender IT-Personalvermittler"
    },
    {
      year: "2024",
      title: "KI-gestützte Matching-Technologie",
      description: "Einführung modernster Algorithmen für präzisere Matches"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Über MetricFox
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Wir sind mehr als nur eine Personalvermittlung. Wir sind Ihr Partner 
              für nachhaltigen Erfolg im digitalen Zeitalter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-lg px-8 py-3">
                Gespräch vereinbaren
              </Link>
              <Link href="/jobs" className="btn-secondary text-lg px-8 py-3">
                Aktuelle Positionen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Bei MetricFox glauben wir daran, dass der richtige Job das Leben 
                verändert und das richtige Talent Unternehmen transformiert. 
                Unsere Mission ist es, diese perfekten Matches zu schaffen.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Wir verstehen die Herausforderungen der digitalen Transformation 
                und wissen, wie wichtig die richtigen Menschen für den Erfolg sind. 
                Deshalb setzen wir auf Qualität statt Quantität und langfristige 
                Beziehungen statt schneller Abschlüsse.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
                  <div className="text-gray-300">Erfolgreiche Vermittlungen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
                  <div className="text-gray-300">Kundenzufriedenheit</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <div className="text-center p-8">
                  <Globe className="text-primary-500 mx-auto mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Deutschlandweit aktiv
                  </h3>
                  <p className="text-gray-300">
                    Von Berlin bis München, von Startups bis zu DAX-Konzernen - 
                    wir vermitteln in allen Regionen und Unternehmensgrößen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diese Prinzipien leiten uns bei allem, was wir tun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all duration-300 hover:border-primary-500">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unsere Geschichte
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Von der Vision zur Realität - die Entwicklung von MetricFox
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-500"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="card">
                    <div className="text-lg font-bold text-primary-500 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-50 relative z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unser Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lernen Sie die Experten kennen, die MetricFox zum Erfolg führen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all duration-300 hover:border-primary-500">
                <div className="w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-primary-500" size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-500 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="mb-4">
                  <div className="text-white font-semibold text-sm mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="px-2 py-1 bg-primary-500/20 text-primary-500 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-primary-500 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="mailto:info@metricfox.de" className="text-gray-400 hover:text-primary-500 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              MetricFox in Zahlen
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-300">Erfolgreiche Vermittlungen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">150+</div>
              <div className="text-gray-300">Partnerunternehmen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-300">Kundenzufriedenheit</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">5</div>
              <div className="text-gray-300">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Auszeichnungen & Zertifizierungen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Award className="text-primary-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">
                Top IT Recruiter 2023
              </h3>
              <p className="text-gray-300">
                Ausgezeichnet von der Deutschen IT-Recruiter Vereinigung
              </p>
            </div>
            <div className="card text-center">
              <Star className="text-primary-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">
                Kununu Top Company
              </h3>
              <p className="text-gray-300">
                4.8/5 Sterne Bewertung von Kandidaten und Kunden
              </p>
            </div>
            <div className="card text-center">
              <Shield className="text-primary-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">
                DSGVO Zertifiziert
              </h3>
              <p className="text-gray-300">
                Höchste Standards für Datenschutz und Sicherheit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für die Zusammenarbeit?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Lassen Sie uns gemeinsam Ihre nächste Erfolgsgeschichte schreiben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
              <Mail className="mr-2" size={20} />
              Kontakt aufnehmen
            </Link>
            <Link href="/jobs" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Jobs entdecken
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
