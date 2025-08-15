"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Formular-Verarbeitung stattfinden
    console.log("Formular gesendet:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="card">
            <CheckCircle className="text-primary-500 mx-auto mb-4" size={64} />
            <h1 className="text-2xl font-bold text-white mb-4">
              Nachricht gesendet!
            </h1>
            <p className="text-gray-300 mb-6">
              Vielen Dank für Ihre Nachricht. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Neue Nachricht senden
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Haben Sie Fragen oder möchten Sie mehr über unsere Services erfahren? 
              Wir sind hier, um Ihnen zu helfen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">
                Senden Sie uns eine Nachricht
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ihr Unternehmen (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Betreff *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Bitte wählen Sie einen Betreff</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="candidate">Als Kandidat registrieren</option>
                    <option value="company">Als Unternehmen registrieren</option>
                    <option value="partnership">Partnerschaft</option>
                    <option value="support">Technischer Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field"
                    placeholder="Beschreiben Sie Ihre Anfrage..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Kontaktinformationen
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-primary-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        E-Mail
                      </h3>
                      <p className="text-gray-300">
                        info@metricfox.de
                      </p>
                      <p className="text-gray-400 text-sm">
                        Wir antworten innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="text-primary-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Telefon
                      </h3>
                      <p className="text-gray-300">
                        +49 30 12345678
                      </p>
                      <p className="text-gray-400 text-sm">
                        Mo-Fr 9:00 - 18:00 Uhr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Büro
                      </h3>
                      <p className="text-gray-300">
                        MetricFox GmbH<br />
                        Alexanderplatz 1<br />
                        10178 Berlin, Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">
                  Öffnungszeiten
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Montag - Freitag</span>
                    <span className="text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Samstag</span>
                    <span className="text-white">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sonntag</span>
                    <span className="text-white">Geschlossen</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">
                  Häufig gestellte Fragen
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Wie lange dauert der Vermittlungsprozess?
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Der durchschnittliche Vermittlungsprozess dauert 2-4 Wochen, 
                      abhängig von der Position und den Anforderungen.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Welche Kosten fallen an?
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Für Kandidaten ist die Registrierung kostenlos. 
                      Unternehmen zahlen nur bei erfolgreicher Vermittlung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
